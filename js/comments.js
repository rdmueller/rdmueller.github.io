/**
 * LinkedWild Comments — fetches from GitHub Discussions, renders with character detection.
 * Falls back to data/comments.json if API fails.
 * Version: 2.0.0
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

    var REPO_OWNER = 'rdmueller';
    var CHARACTER_BOT = 'raifdmueller';
    var REPO_NAME = 'rdmueller.github.io';
    var CATEGORY_ID = 'DIC_kwDORG0f8c4C7uSW';
    var DISCUSSION_TITLE = 'pages/blog/' + slug + '.html';
    var IMG_BASE = basePath + 'images/blog/elfi/';

    var CHARACTERS = {
        'Elfi Wang':    { avatar: 'avatar-elfi.png',   emoji: '🐾', role: 'Chief Keyboard Officer' },
        'lala':         { avatar: 'avatar-lala.png',    emoji: '🐈‍⬛', role: 'Freelance Territory Disruptor' },
        'Peter Pigeon': { avatar: 'avatar-peter.png',   emoji: '🕊️', role: 'Oak Tree Branch Manager' },
        'Madame':       { avatar: 'avatar-madame.png',  emoji: '🐕', role: 'Head of Garden Security' },
        'Ringo':        { avatar: 'avatar-ringo.png',   emoji: '🐿️', role: 'Principal Nut Architect' }
    };

    fetchFromGitHub()
        .catch(function() { return fetchFromJSON(); })
        .catch(function() { /* silent */ });

    function fetchFromGitHub() {
        var query = '{ repository(owner: "' + REPO_OWNER + '", name: "' + REPO_NAME + '") { ' +
            'discussions(categoryId: "' + CATEGORY_ID + '", first: 100) { nodes { title, number, ' +
            'comments(first: 50) { nodes { author { login, avatarUrl }, body, ' +
            'replies(first: 20) { nodes { author { login, avatarUrl }, body } } } } } } } }';

        return fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: query })
        })
        .then(function(r) { return r.json(); })
        .then(function(data) {
            if (!data.data) throw new Error('No data');
            var discussions = data.data.repository.discussions.nodes;
            var disc = discussions.find(function(d) { return d.title === DISCUSSION_TITLE; });
            if (!disc || disc.comments.nodes.length === 0) throw new Error('No discussion');
            renderGitHubComments(disc);
        });
    }

    function detectCharacter(body) {
        var firstLine = body.split('\n')[0].trim();
        for (var name in CHARACTERS) {
            if (firstLine.indexOf(name) !== -1) {
                var text = body.replace(/^[^\n]*\n+/, '').trim();
                return { name: name, char: CHARACTERS[name], text: text };
            }
        }
        return null;
    }

    function extractLikes(body) {
        var match = body.match(/_([^_]*liked this)_/);
        if (match) {
            return {
                text: match[1],
                body: body.replace(/_[^_]*liked this_/, '').trim()
            };
        }
        return { text: '', body: body };
    }

    function renderGitHubComments(discussion) {
        var fragment = document.createDocumentFragment();
        discussion.comments.nodes.forEach(function(comment) {
            var el = createFromGitHub(comment);
            fragment.appendChild(el);
            if (comment.replies && comment.replies.nodes) {
                comment.replies.nodes.forEach(function(reply) {
                    fragment.appendChild(createFromGitHub(reply, true));
                });
            }
        });
        container.appendChild(fragment);
        addDiscussionLink(discussion.number);
    }

    function createFromGitHub(comment, isReply) {
        var author = comment.author || {};
        var login = author.login || 'unknown';
        var body = comment.body || '';
        var detected = (login === CHARACTER_BOT) ? detectCharacter(body) : null;

        var displayName, avatarSrc, role, likesText;
        if (detected) {
            displayName = detected.name;
            avatarSrc = IMG_BASE + detected.char.avatar;
            role = detected.char.role;
            var extracted = extractLikes(detected.text);
            body = extracted.body;
            likesText = extracted.text;
        } else {
            displayName = login;
            avatarSrc = author.avatarUrl || '';
            role = '';
            var extracted = extractLikes(body);
            body = extracted.body;
            likesText = extracted.text;
        }

        return buildCommentEl(displayName, avatarSrc, role, body, likesText, !!isReply);
    }

    function buildCommentEl(name, avatarSrc, role, text, likesText, isReply) {
        var div = document.createElement('div');
        div.className = isReply ? 'comment comment-reply' : 'comment';

        var avatarDiv = document.createElement('div');
        avatarDiv.className = 'comment-avatar';
        var img = document.createElement('img');
        img.src = avatarSrc;
        img.alt = name;
        avatarDiv.appendChild(img);

        var bodyDiv = document.createElement('div');
        bodyDiv.className = 'comment-body';

        var headerDiv = document.createElement('div');
        headerDiv.className = 'comment-header';
        var strong = document.createElement('strong');
        strong.className = 'comment-author';
        strong.textContent = name;
        var span = document.createElement('span');
        span.className = 'comment-role';
        span.textContent = role;
        headerDiv.appendChild(strong);
        headerDiv.appendChild(span);

        var p = document.createElement('p');
        p.textContent = text.replace(/\n\n/g, ' ').replace(/\n/g, ' ');

        bodyDiv.appendChild(headerDiv);
        bodyDiv.appendChild(p);

        if (likesText) {
            var likesDiv = document.createElement('div');
            likesDiv.className = 'comment-likes';
            likesDiv.textContent = likesText;
            bodyDiv.appendChild(likesDiv);
        }

        div.appendChild(avatarDiv);
        div.appendChild(bodyDiv);
        return div;
    }

    function addDiscussionLink(number) {
        var link = document.createElement('a');
        link.href = 'https://github.com/' + REPO_OWNER + '/' + REPO_NAME + '/discussions/' + number;
        link.target = '_blank';
        link.rel = 'noopener';
        link.className = 'comment-reply-link';
        link.textContent = 'Join the discussion on GitHub';
        link.style.cssText = 'display:inline-block;margin-top:16px;font-size:13px;color:#666;';
        container.parentNode.appendChild(link);
    }

    function fetchFromJSON() {
        return fetch(basePath + 'data/comments.json')
            .then(function(r) { return r.json(); })
            .then(function(data) {
                if (!data[slug] || data[slug].length === 0) return;
                var fragment = document.createDocumentFragment();
                data[slug].forEach(function(c) {
                    fragment.appendChild(buildCommentEl(
                        c.author, IMG_BASE + c.avatar, c.role, c.text,
                        (c.likes || []).length ? c.likes.join(', ') + ' liked this' : '', false
                    ));
                    (c.replies || []).forEach(function(r) {
                        fragment.appendChild(buildCommentEl(
                            r.author, IMG_BASE + r.avatar, r.role, r.text,
                            (r.likes || []).length ? r.likes.join(', ') + ' liked this' : '', true
                        ));
                    });
                });
                container.appendChild(fragment);
            });
    }
})();
