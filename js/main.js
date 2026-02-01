/**
 * Ralf D. Müller - Personal Website
 * Main JavaScript
 * Version: 1.0.0
 */

(function() {
    'use strict';

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
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
    // YouTube Video Lightbox
    const lightbox = document.getElementById('video-lightbox');
    const iframe = document.getElementById('video-iframe');
    const closeBtn = document.querySelector('.video-lightbox-close');

    if (lightbox && iframe) {
        // Open lightbox on video link click
        document.querySelectorAll('[data-youtube]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const videoId = this.getAttribute('data-youtube');
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            iframe.src = '';
            document.body.style.overflow = '';
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
})();
