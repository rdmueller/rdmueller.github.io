/**
 * LinkedWild Comments — fetches from GitHub Discussions REST API.
 * Falls back to data/comments.json if API fails.
 * Version: 3.0.0
 */
(function() {
    'use strict';

    var container = document.getElementById('character-comments');
    if (!container) return;

    var pathname = window.location.pathname;
    var segments = pathname.replace(/\/+$/, '').split('/');
    var slug = segments[segments.length - 1].replace(/\.html$/, '');
    if (!slug) return;

    var parts = pathname.split('/').filter(function(p) { return p.length > 0; });
    var depth = parts.length - 1;
    var basePath = '';
    for (var i = 0; i < depth; i++) basePath += '../';
    if (basePath === '') basePath = './';

    var REPO = 'rdmueller/rdmueller.github.io';
    var CHARACTER_BOT = 'raifdmueller';
    var IMG_BASE = basePath + 'images/blog/elfi/';

    var CHARACTERS = {
        'Elfi Wang':    { avatar: 'avatar-elfi.png',   role: 'Chief Keyboard Officer' },
        'lala':         { avatar: 'avatar-lala.png',    role: 'Freelance Territory Disruptor' },
        'Peter Pigeon': { avatar: 'avatar-peter.png',   role: 'Oak Tree Branch Manager' },
        'Madame':       { avatar: 'avatar-madame.png',  role: 'Head of Garden Security' },
        'Ringo':        { avatar: 'avatar-ringo.png',   role: 'Principal Nut Architect' }
    };

    var titleWithHtml = 'pages/blog/' + slug + '.html';
    var titleWithout = 'pages/blog/' + slug;

    fetch(basePath + 'data/discussions.json')
        .then(function(r) { return r.json(); })
        .then(function(mapping) {
            var num = mapping[titleWithHtml] || mapping[titleWithout];
            if (!num) throw new Error('No discussion for ' + slug);
            return fetchDiscussion(num);
        })
        .catch(function() { return fetchFromJSON(); })
        .catch(function() { /* silent */ });

    function fetchDiscussion(number) {
        return fetch('https://api.github.com/repos/' + REPO + '/discussions/' + number + '/comments?per_page=100')
            .then(function(r) {
                if (!r.ok) throw new Error('API error');
                return r.json();
            })
            .then(function(comments) {
                if (!comments.length) throw new Error('No comments');
                renderComments(comments, number);
            });
    }

    function detectCharacter(login, body) {
        if (login !== CHARACTER_BOT) return null;
        var firstLine = body.split('\n')[0].trim();
        for (var name in CHARACTERS) {
            if (firstLine.indexOf(name) !== -1) {
                var text = body.substring(body.indexOf('\n') + 1).trim();
                return { name: name, char: CHARACTERS[name], text: text };
            }
        }
        return null;
    }

    function cleanText(text) {
        return text
            .replace(/<img[^>]*>/g, '')
            .replace(/\*\*[^*]+\*\*\s*·\s*\*[^*]+\*/g, '')
            .replace(/_[^_]*liked this_/g, '')
            .replace(/^[\s\n]+/, '')
            .replace(/\s*[🐾🐈‍⬛🕊️🐕🐿️]\s*$/g, '')
            .trim();
    }

    function renderComments(comments, discussionNumber) {
        var topLevel = [];
        var replies = {};

        comments.forEach(function(c) {
            if (c.parent_id) {
                if (!replies[c.parent_id]) replies[c.parent_id] = [];
                replies[c.parent_id].push(c);
            } else {
                topLevel.push(c);
            }
        });

        var fragment = document.createDocumentFragment();
        topLevel.forEach(function(comment) {
            var el = createComment(comment, false);
            if (el) fragment.appendChild(el);
            var children = replies[comment.id] || [];
            children.forEach(function(reply) {
                var replyEl = createComment(reply, true);
                if (replyEl) fragment.appendChild(replyEl);
            });
        });

        container.appendChild(fragment);

        var link = document.createElement('a');
        link.href = 'https://github.com/' + REPO + '/discussions/' + discussionNumber;
        link.target = '_blank';
        link.rel = 'noopener';
        link.className = 'comment-discussion-link';
        link.textContent = 'Comment on GitHub';
        container.parentNode.appendChild(link);
    }

    function createComment(comment, isReply) {
        var user = comment.user || {};
        var login = user.login || 'unknown';
        var body = comment.body || '';
        var detected = detectCharacter(login, body);

        var displayName, avatarSrc, role, text;
        if (detected) {
            displayName = detected.name;
            avatarSrc = IMG_BASE + detected.char.avatar;
            role = detected.char.role;
            text = cleanText(detected.text);
        } else {
            displayName = login;
            avatarSrc = user.avatar_url || '';
            role = '';
            text = cleanText(body);
        }

        if (!text) return null;

        var div = document.createElement('div');
        div.className = isReply ? 'comment comment-reply' : 'comment';

        var avatarDiv = document.createElement('div');
        avatarDiv.className = 'comment-avatar';
        var img = document.createElement('img');
        img.src = avatarSrc;
        img.alt = displayName;
        avatarDiv.appendChild(img);

        var bodyDiv = document.createElement('div');
        bodyDiv.className = 'comment-body';

        var headerDiv = document.createElement('div');
        headerDiv.className = 'comment-header';
        var strong = document.createElement('strong');
        strong.className = 'comment-author';
        strong.textContent = displayName;
        headerDiv.appendChild(strong);
        if (role) {
            var span = document.createElement('span');
            span.className = 'comment-role';
            span.textContent = role;
            headerDiv.appendChild(span);
        }

        var p = document.createElement('p');
        p.textContent = text;

        bodyDiv.appendChild(headerDiv);
        bodyDiv.appendChild(p);

        if (comment.html_url) {
            var replyLink = document.createElement('a');
            replyLink.href = comment.html_url;
            replyLink.target = '_blank';
            replyLink.rel = 'noopener';
            replyLink.className = 'comment-reply-btn';
            replyLink.textContent = 'Reply';
            bodyDiv.appendChild(replyLink);
        }

        div.appendChild(avatarDiv);
        div.appendChild(bodyDiv);
        return div;
    }

    function fetchFromJSON() {
        return fetch(basePath + 'data/comments.json')
            .then(function(r) { return r.json(); })
            .then(function(data) {
                if (!data[slug] || data[slug].length === 0) return;
                var fragment = document.createDocumentFragment();
                data[slug].forEach(function(c) {
                    fragment.appendChild(buildFallback(c, false));
                    (c.replies || []).forEach(function(r) {
                        fragment.appendChild(buildFallback(r, true));
                    });
                });
                container.appendChild(fragment);
            });
    }

    function buildFallback(c, isReply) {
        var div = document.createElement('div');
        div.className = isReply ? 'comment comment-reply' : 'comment';

        var avatarDiv = document.createElement('div');
        avatarDiv.className = 'comment-avatar';
        var img = document.createElement('img');
        img.src = IMG_BASE + c.avatar;
        img.alt = c.author;
        avatarDiv.appendChild(img);

        var bodyDiv = document.createElement('div');
        bodyDiv.className = 'comment-body';
        var headerDiv = document.createElement('div');
        headerDiv.className = 'comment-header';
        var strong = document.createElement('strong');
        strong.className = 'comment-author';
        strong.textContent = c.author;
        var span = document.createElement('span');
        span.className = 'comment-role';
        span.textContent = c.role;
        headerDiv.appendChild(strong);
        headerDiv.appendChild(span);
        var p = document.createElement('p');
        p.textContent = c.text;
        bodyDiv.appendChild(headerDiv);
        bodyDiv.appendChild(p);

        if (c.likes && c.likes.length) {
            var likesDiv = document.createElement('div');
            likesDiv.className = 'comment-likes';
            likesDiv.textContent = c.likes.join(', ') + ' liked this';
            bodyDiv.appendChild(likesDiv);
        }

        div.appendChild(avatarDiv);
        div.appendChild(bodyDiv);
        return div;
    }
})();
