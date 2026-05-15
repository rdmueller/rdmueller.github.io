/**
 * Ralf D. Müller - Personal Website
 * Main JavaScript
 * Version: 1.0.0
 */

(function() {
    'use strict';

    // Signal that JS is active (progressive enhancement for animations)
    document.documentElement.classList.add('js-enabled');

    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.current-year').forEach(el => {
        el.textContent = String(currentYear);
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        if (!navLinks.id) {
            navLinks.id = 'primary-navigation';
        }
        mobileMenuBtn.setAttribute('aria-controls', navLinks.id);
        mobileMenuBtn.setAttribute('aria-expanded', 'false');

        function closeMobileMenu() {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }

        mobileMenuBtn.addEventListener('click', function() {
            const isActive = navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active', isActive);
            mobileMenuBtn.setAttribute('aria-expanded', String(isActive));
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animate class (only if motion is preferred)
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.talk-card, .publication-card, .social-link').forEach(el => {
            el.classList.add('animate', 'hidden');
            observer.observe(el);
        });
    }
    // Year Tabs for Talks page
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const year = this.getAttribute('data-year');

                // Remove active from all
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                // Add active to clicked
                this.classList.add('active');
                const content = document.querySelector(`.tab-content[data-year="${year}"]`);
                if (content) {
                    content.classList.add('active');
                }
            });
        });
    }

    // YouTube Video Lightbox
    const lightbox = document.getElementById('video-lightbox');
    const iframe = document.getElementById('video-iframe');
    const closeBtn = document.querySelector('.video-lightbox-close');
    let previouslyFocusedElement = null;

    if (lightbox && iframe) {
        // Open lightbox on video link click
        document.querySelectorAll('[data-youtube]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                previouslyFocusedElement = document.activeElement;
                const videoId = this.getAttribute('data-youtube');
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                lightbox.classList.add('active');
                lightbox.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                if (closeBtn) {
                    closeBtn.focus();
                }
            });
        });

        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            lightbox.setAttribute('aria-hidden', 'true');
            iframe.src = '';
            document.body.style.overflow = '';
            if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === 'function') {
                previouslyFocusedElement.focus();
            }
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // Heading anchors: auto-generate IDs and hover-visible permalinks on h2/h3
    // inside .article-content. Preserves any pre-existing id attributes.
    const articleContent = document.querySelector('.article-content');
    if (articleContent) {
        const slugify = function(text) {
            return text
                .toLowerCase()
                .normalize('NFKD').replace(/[̀-ͯ]/g, '')
                .replace(/ß/g, 'ss')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
        };
        const used = new Set();
        articleContent.querySelectorAll('h2, h3').forEach(function(h) {
            let id = h.id;
            if (!id) {
                const base = slugify(h.textContent) || 'section';
                let unique = base;
                let i = 2;
                while (used.has(unique) || document.getElementById(unique)) {
                    unique = base + '-' + i++;
                }
                id = unique;
                h.id = id;
            }
            used.add(id);
            if (!h.querySelector('.heading-anchor')) {
                const a = document.createElement('a');
                a.className = 'heading-anchor';
                a.href = '#' + id;
                a.setAttribute('aria-label', 'Permalink to "' + h.textContent.trim() + '"');
                a.textContent = '¶';
                h.appendChild(a);
            }
        });
        // If the URL had a hash that matched a JS-assigned ID, scroll to it now
        if (window.location.hash && window.location.hash.length > 1) {
            const target = document.getElementById(window.location.hash.slice(1));
            if (target) {
                target.scrollIntoView();
            }
        }
    }
})();
