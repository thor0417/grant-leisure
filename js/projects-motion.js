/* ============================================================
   projects-motion.js -- Grant Leisure Projects Page
   Motion layer: Lenis v5 smooth scroll + GSAP ScrollTrigger
   Responsibilities:
   1. Lenis smooth scroll wired to GSAP ticker
   2. Nav scroll state via Lenis (replaces IntersectionObserver)
   3. Pill bar scroll state via Lenis
   4. Editorial row reveals -- image slides from side, text rises
   5. Cinematic row reveals -- text fade-up + Ken Burns scale
   Dependencies: GSAP, ScrollTrigger, Lenis (all via CDN)
   ============================================================ */

(function () {

  'use strict';

  /* Graceful exit if dependencies are missing */
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('projects-motion.js: GSAP or ScrollTrigger not found.');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* -- Reduced motion: skip all animations, show content immediately -- */

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.querySelectorAll('[data-reveal], [data-reveal="left"], [data-reveal="right"]').forEach(function (el) {
      el.style.opacity   = '1';
      el.style.transform = 'none';
    });
    /* Still init Lenis for smooth scroll but skip all GSAP animations */
  }

  /* ============================================================
     1. LENIS -- smooth scroll wired to GSAP ticker
     Config mirrors main.js exactly for visual consistency
     ============================================================ */

  let lenis = null;

  if (typeof Lenis !== 'undefined') {

    lenis = new Lenis({
      duration: 1.2,
      easing: function (t) {
        /* Exponential ease-out: fast start, smooth deceleration */
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      },
      smoothWheel: true
    });

    /* Proxy Lenis into GSAP ScrollTrigger so all triggers get accurate positions */
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(function (time) {
      lenis.raf(time * 1000);
    });

    /* Refresh all ScrollTrigger instances once Lenis is live */
    ScrollTrigger.refresh();

  } else {
    console.warn('projects-motion.js: Lenis not found. Falling back to native scroll.');
  }

  /* ============================================================
     2. NAV SCROLL STATE
     Via Lenis when available, native scroll as fallback
     ============================================================ */

  const siteNav = document.querySelector('.site-nav');

  if (siteNav) {
    if (lenis) {
      lenis.on('scroll', function (e) {
        siteNav.classList.toggle('is-scrolled', e.scroll > 50);
      });
    } else {
      window.addEventListener('scroll', function () {
        siteNav.classList.toggle('is-scrolled', window.scrollY > 50);
      }, { passive: true });
    }
  }

  /* ============================================================
     3. PILL BAR SCROLL STATE
     Frosted glass kicks in once user scrolls past the nav
     ============================================================ */

  const projectsHeader = document.querySelector('.projects-header');

  if (projectsHeader) {
    if (lenis) {
      lenis.on('scroll', function (e) {
        projectsHeader.classList.toggle('is-scrolled', e.scroll > 72);
      });
    } else {
      window.addEventListener('scroll', function () {
        projectsHeader.classList.toggle('is-scrolled', window.scrollY > 72);
      }, { passive: true });
    }
  }

  /* ============================================================
     4. EDITORIAL ROW REVEALS
     Image slides in from its side. Text block fades up 150ms later.
     Triggered once when the row enters the viewport.
     ============================================================ */

  if (!prefersReducedMotion) {

    /* Image left -- slides in from left */
    gsap.utils.toArray('[data-reveal="left"]').forEach(function (el) {
      gsap.fromTo(el,
        { opacity: 0, x: -64 },
        {
          opacity: 1,
          x: 0,
          duration: 1.6, /* Slower -- deliberate, not snappy */
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el.closest('.project-row') || el,
            start: 'top 90%', /* Earlier trigger -- animation is well underway when in view */
            toggleActions: 'play none none none'
          }
        }
      );
    });

    /* Image right -- slides in from right */
    gsap.utils.toArray('[data-reveal="right"]').forEach(function (el) {
      gsap.fromTo(el,
        { opacity: 0, x: 64 },
        {
          opacity: 1,
          x: 0,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el.closest('.project-row') || el,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    /* Text blocks -- fade up, 250ms after the image starts */
    gsap.utils.toArray('[data-reveal]:not([data-reveal="left"]):not([data-reveal="right"])').forEach(function (el) {

      const isEditorialText = el.classList.contains('project-text-block');

      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          delay: isEditorialText ? 0.25 : 0, /* 250ms stagger -- image leads, text follows */
          scrollTrigger: {
            trigger: el.closest('.project-row') || el.closest('.project-row-cinematic') || el,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

  }

  /* ============================================================
     5. CINEMATIC ROW -- KEN BURNS + TEXT REVEAL
     Image scales slowly from 1 to 1.06 while the row is in view.
     Text content fades up on entry. Scrubbed to scroll for depth.
     ============================================================ */

  if (!prefersReducedMotion) {

    gsap.utils.toArray('.project-row-cinematic').forEach(function (row) {

      const imgWrap = row.querySelector('.cinematic-image-wrap');
      const img     = row.querySelector('.cinematic-image-wrap img');
      const content = row.querySelector('.cinematic-content');

      /* Ken Burns: prep the image for GPU-accelerated scale */
      if (img && imgWrap) {
        imgWrap.style.overflow      = 'hidden'; /* Clip the scale so it never bleeds outside */
        img.style.transformOrigin   = 'center center';
        img.style.willChange        = 'transform';

        gsap.fromTo(img,
          { scale: 1 },
          {
            scale: 1.04, /* Subtle -- reads as depth, not a glitch */
            ease: 'none',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%', /* Fires when row is nearly in view */
              end: 'bottom top',
              scrub: 1.5 /* Tighter response -- less perceived lag */
            }
          }
        );
      }

      /* Text content: fades up once on entry, stays */
      if (content) {
        gsap.fromTo(content,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

    });

  }

  /* ============================================================
     ScrollTrigger refresh after all animations are registered
     Ensures accurate positions with Lenis active
     ============================================================ */

  ScrollTrigger.refresh();

}());