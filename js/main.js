/* ============================================================
   main.js -- Grant Leisure "Visible Dominance" v2
   Handles: marquee, nav scroll state, counter animation
   GSAP and ScrollTrigger loaded via CDN in index.html
   ============================================================ */

/* -- Marquee: JS-driven infinite scroll ------------------- */

const marqueeTrack = document.getElementById('marquee-track');

if (marqueeTrack) {
  const clone = marqueeTrack.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  marqueeTrack.parentElement.appendChild(clone);

  let position = 0;
  const speed = 0.5;

  function animateMarquee() {
    position -= speed;

    const trackWidth = marqueeTrack.offsetWidth;
    if (Math.abs(position) >= trackWidth + 64) {
      position = 0;
    }

    marqueeTrack.style.transform = 'translateX(' + position + 'px)';
    clone.style.transform = 'translateX(' + position + 'px)';

    requestAnimationFrame(animateMarquee);
  }

  animateMarquee();
}

/* -- Nav: background on scroll ---------------------------- */

const siteNav = document.querySelector('.site-nav');

if (siteNav) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      siteNav.classList.add('is-scrolled');
    } else {
      siteNav.classList.remove('is-scrolled');
    }
  });
}

/* -- Nav: mobile toggle ----------------------------------- */

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open');
  });
}

/* -- Bento cards: expand on click ------------------------- */

const bentoToggles = document.querySelectorAll('.bento__toggle');

bentoToggles.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const targetId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(targetId);
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      panel.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'Read More';
    } else {
      panel.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      btn.textContent = 'Close';
    }
  });
});

/* -- Proof counters: animate on scroll -------------------- */

const proofNumbers = document.querySelectorAll('.proof-number');

if (proofNumbers.length && typeof gsap !== 'undefined') {
  proofNumbers.forEach(function (el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';

    gsap.fromTo(
      el,
      { innerText: 0 },
      {
        innerText: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true
        },
        onUpdate: function () {
          el.textContent = Math.floor(parseFloat(el.innerText)) + suffix;
        }
      }
    );
  });
}