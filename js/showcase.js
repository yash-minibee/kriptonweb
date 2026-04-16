/*
 * ============================================================
 *  PRODUCT SHOWCASE GRID  —  showcase/script.js
 *  Merge-friendly: scoped IIFE, no globals, safe alongside
 *  any existing GSAP usage on the host page.
 *
 *  DEPENDENCIES (load before this file):
 *  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
 *  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
 *
 *  HOW TO USE:
 *  <script src="path/to/showcase/script.js"></script>
 * ============================================================
 */

(function () {
    'use strict';

    /* ── Guard: only run if the showcase section exists ──────── */
    var section = document.querySelector('.psg');
    if (!section) return;

    /* ── Guard: GSAP + ScrollTrigger must be available ───────── */
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        /* Fallback — make tiles visible immediately without animation */
        section.querySelectorAll('.psg-tile').forEach(function (el) {
            el.style.opacity   = '1';
            el.style.transform = 'none';
        });
        return;
    }

    /*
     * Register ScrollTrigger only if not already registered.
     * Safe to call multiple times — GSAP ignores duplicate registrations.
     */
    gsap.registerPlugin(ScrollTrigger);

    /*
     * Scroll-reveal animation:
     * Each tile fades up from y:40 → y:0, opacity 0 → 1
     * Staggered by 0.1s, triggered when the grid enters the viewport
     */
    gsap.to(section.querySelectorAll('.psg-tile'), {
        opacity:  1,
        y:        0,
        duration: 0.9,
        ease:     'power2.out',
        stagger:  0.10,
        scrollTrigger: {
            trigger: section.querySelector('.psg__grid'),
            start:   'top 82%',
            once:    true
        }
    });

}());
