/**
 * Kripton – Lazy Loading
 * Handles: <img loading="lazy">, bg images, <video>
 */
(function () {
    'use strict';

    if (!('IntersectionObserver' in window)) return; // fallback: browser handles natively

    /* ── 1. Native img lazy load — already handled by loading="lazy" attr
            Just ensure any missed ones get it added ── */
    document.querySelectorAll('img:not([loading])').forEach(function (img) {
        img.setAttribute('loading', 'lazy');
    });

    /* ── 2. Background images — use data-bg="url(...)" ── */
    var bgObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                var el = e.target;
                var bg = el.dataset.bg;
                if (bg) {
                    el.style.backgroundImage = bg;
                    el.removeAttribute('data-bg');
                }
                bgObs.unobserve(el);
            }
        });
    }, { rootMargin: '200px 0px' });

    document.querySelectorAll('[data-bg]').forEach(function (el) {
        bgObs.observe(el);
    });

    /* ── 3. Videos — pause/play based on visibility ── */
    var videoObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            var v = e.target;
            if (e.isIntersecting) {
                if (v.paused) v.play().catch(function () {});
            } else {
                if (!v.paused) v.pause();
            }
        });
    }, { threshold: 0.25 });

    document.querySelectorAll('video[autoplay]').forEach(function (v) {
        videoObs.observe(v);
    });

    /* ── 4. Deferred non-critical images (data-src) ── */
    var imgObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                var img = e.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                    img.removeAttribute('data-srcset');
                }
                imgObs.unobserve(img);
            }
        });
    }, { rootMargin: '300px 0px' });

    document.querySelectorAll('img[data-src]').forEach(function (img) {
        imgObs.observe(img);
    });

}());
