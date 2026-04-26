/**
 * Character Comments Loader
 * Loads comments from data/comments.json and renders them on blog posts.
 * Version: 1.0.0
 */
(function() {
    'use strict';

    var container = document.getElementById('character-comments');
    if (!container) {
        return;
    }

    var pathname = window.location.pathname;
    // Extract slug: last path segment without .html extension
    var segments = pathname.replace(/\/+$/, '').split('/');
    var lastSegment = segments[segments.length - 1];
    var slug = lastSegment.replace(/\.html$/, '');

    if (!slug) {
        return;
    }

    // Compute base path based on page depth
    // Count directory segments after the leading slash
    // e.g. /pages/blog/foo.html => ['', 'pages', 'blog', 'foo.html'] => depth 3 => '../../'
    // e.g. /pages/foo.html => ['', 'pages', 'foo.html'] => depth 2 => '../'
    var parts = pathname.split('/').filter(function(p) { return p.length > 0; });
    var depth = parts.length - 1; // subtract the filename itself
    var basePath = '';
    for (var i = 0; i < depth; i++) {
        basePath += '../';
    }
    if (basePath === '') {
        basePath = './';
    }

    var dataUrl = basePath + 'data/comments.json';

    fetch(dataUrl)
        .then(function(response) {
            if (!response.ok) {
                return null;
            }
            return response.json();
        })
        .then(function(data) {
            if (!data || !data[slug] || data[slug].length === 0) {
                return;
            }
            renderComments(data[slug], container, basePath);
        })
        .catch(function() {
            // Silently fail - no comments is fine
        });

    function renderComments(comments, target, base) {
        var fragment = document.createDocumentFragment();

        comments.forEach(function(comment) {
            fragment.appendChild(createCommentElement(comment, base, false));

            if (comment.replies && comment.replies.length > 0) {
                comment.replies.forEach(function(reply) {
                    fragment.appendChild(createCommentElement(reply, base, true));
                });
            }
        });

        target.appendChild(fragment);
    }

    function createCommentElement(comment, base, isReply) {
        var div = document.createElement('div');
        div.className = isReply ? 'comment comment-reply' : 'comment';

        var avatarDiv = document.createElement('div');
        avatarDiv.className = 'comment-avatar';

        var img = document.createElement('img');
        img.src = base + 'images/blog/elfi/' + comment.avatar;
        img.alt = comment.author;
        avatarDiv.appendChild(img);

        var bodyDiv = document.createElement('div');
        bodyDiv.className = 'comment-body';

        var headerDiv = document.createElement('div');
        headerDiv.className = 'comment-header';

        var authorStrong = document.createElement('strong');
        authorStrong.className = 'comment-author';
        authorStrong.textContent = comment.author;

        var roleSpan = document.createElement('span');
        roleSpan.className = 'comment-role';
        roleSpan.textContent = comment.role;

        headerDiv.appendChild(authorStrong);
        headerDiv.appendChild(roleSpan);

        var textP = document.createElement('p');
        textP.textContent = comment.text;

        bodyDiv.appendChild(headerDiv);
        bodyDiv.appendChild(textP);

        if (comment.likes && comment.likes.length > 0) {
            var likesDiv = document.createElement('div');
            likesDiv.className = 'comment-likes';
            likesDiv.textContent = comment.likes.join(', ') + ' liked this';
            bodyDiv.appendChild(likesDiv);
        }

        div.appendChild(avatarDiv);
        div.appendChild(bodyDiv);

        return div;
    }

    // giscus integration
    var giscusContainer = document.getElementById('giscus-container');
    if (!giscusContainer) {
        giscusContainer = document.createElement('div');
        giscusContainer.id = 'giscus-container';
        giscusContainer.style.marginTop = '24px';
        var section = container.closest('.comments-section');
        if (section) {
            section.appendChild(giscusContainer);
        }
    }

    var giscusScript = document.createElement('script');
    giscusScript.src = 'https://giscus.app/client.js';
    giscusScript.setAttribute('data-repo', 'rdmueller/rdmueller.github.io');
    giscusScript.setAttribute('data-repo-id', 'R_kgDORG0f8Q');
    giscusScript.setAttribute('data-category', 'LinkedWild');
    giscusScript.setAttribute('data-category-id', 'DIC_kwDORG0f8c4C7uSW');
    giscusScript.setAttribute('data-mapping', 'pathname');
    giscusScript.setAttribute('data-strict', '0');
    giscusScript.setAttribute('data-reactions-enabled', '1');
    giscusScript.setAttribute('data-emit-metadata', '0');
    giscusScript.setAttribute('data-input-position', 'bottom');
    giscusScript.setAttribute('data-theme', 'light');
    giscusScript.setAttribute('data-lang', 'en');
    giscusScript.crossOrigin = 'anonymous';
    giscusScript.async = true;
    giscusContainer.appendChild(giscusScript);
})();
