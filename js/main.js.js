/* ================================================================
   GRANT LEISURE — MAIN.JS
   Version: 1.0
   Scope: Shared site-wide behaviour — loaded on every page.
          Page-specific logic lives in the page's own embedded
          <script defer> block (see about.html for the pattern).
   ----------------------------------------------------------------
   Load order: deferred — never blocks the main thread.
   No inline handlers anywhere. addEventListener only.
   const/let only — never var.
   ----------------------------------------------------------------
   CURRENT STATE: Stub.
   about.html handles its own behaviour inline (footer year,
   nav scroll state, scroll reveal). Those three concerns are
   self-contained and do not need to live here yet.

   This file is included now so the <script> tag is already
   wired into the HTML scaffold. Behaviour migrates here when:

     1. MOBILE NAV TOGGLE
        Trigger: hamburger menu added to nav (index.html phase).
        Will own: open/close state, aria-expanded, focus trap,
        body scroll lock while drawer is open.

     2. CONTACT FORM HANDLING
        Trigger: contact.html is built.
        Will own: validation, submission, success/error states.
        All fetch calls wrapped in try/catch.

     3. SHARED SCROLL-REVEAL UTILITY
        Trigger: second page is built that also needs reveal.
        Option A: Move IntersectionObserver logic here, remove
          the duplicate from each page's embedded script.
        Option B: Keep page-level IO and use this file only for
          behaviour that genuinely spans pages.
        Decision deferred — both patterns are valid until the
        second page reveals whether the IO config needs to vary.

     4. CROSS-PAGE UTILITIES
        Trigger: any shared pattern used on 3+ pages.
        Candidates: active nav link detection, page transition
        hooks, reduced-motion preference check.
================================================================ */

(() => {
  'use strict';

  // ── Reduced-motion preference — available site-wide ──────────
  // Checked here once. Any module that adds motion reads this flag
  // rather than calling matchMedia itself. Single source of truth.
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // Exposed on window so embedded page scripts can read it
  // without duplicating the matchMedia call.
  window.GL = window.GL || {};
  window.GL.prefersReducedMotion = prefersReducedMotion;

})();
