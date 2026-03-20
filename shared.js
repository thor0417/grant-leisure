/* Grant Leisure — Shared JS */
(function(){

  /* ── NAV SCROLL ── */
  var navbar = document.getElementById('navbar');
  if(navbar){
    window.addEventListener('scroll', function(){
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* ── HAMBURGER ── */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  if(hamburger && mobileMenu){
    hamburger.addEventListener('click', function(){
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }

  /* ── MOBILE: close menu on link click ── */
  if(mobileMenu){
    mobileMenu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        if(hamburger) hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ── PROJECTS DROPDOWN: touch-friendly click toggle ── */
  var projNav = document.getElementById('projectsNav');
  if(projNav){
    var arrow = projNav.querySelector('> a');
    if(arrow){
      arrow.addEventListener('click', function(e){
        /* Only intercept click on touch devices — desktop hover handles it */
        if(window.matchMedia('(hover: none)').matches){
          e.preventDefault();
          projNav.classList.toggle('open');
        }
      });
    }
    /* Close dropdown when clicking outside */
    document.addEventListener('click', function(e){
      if(!projNav.contains(e.target)){
        projNav.classList.remove('open');
      }
    });
  }

  /* ── REVEAL ON SCROLL ── */
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && revealEls.length){
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function(el){ obs.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('visible'); });
  }

  /* ── ACTIVE NAV LINK ── */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links > li > a:not(.nav-cta)').forEach(function(a){
    var href = a.getAttribute('href');
    if(href && href.split('?')[0] === page){
      a.classList.add('active');
    }
  });

})();
