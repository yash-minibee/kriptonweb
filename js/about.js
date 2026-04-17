/**
 * Kripton – About Page Animations
 * GSAP + ScrollTrigger
 */
(function () {
    'use strict';

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        document.querySelectorAll('.ab-reveal, .ab-hero__eyebrow, .ab-hero__title span, .ab-hero__line').forEach(function (el) {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    /* ── Hero entrance ── */
    var tl = gsap.timeline({ delay: 0.3 });

    tl.to('.ab-hero__eyebrow', {
        opacity: 1, duration: 1, ease: 'power2.out'
    })
    .to('.ab-hero__title, .ab-hero__sub', {
        opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.15
    }, '-=0.5')
    .to('.ab-hero__line', {
        opacity: 1, duration: 0.8, ease: 'power2.out'
    }, '-=0.3');

    /* ── Scroll reveal for all .ab-reveal elements ── */
    gsap.utils.toArray('.ab-reveal').forEach(function (el) {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true
            }
        });
    });

    /* ── Impact numbers count-up ── */
    gsap.utils.toArray('.ab-impact__num').forEach(function (el) {
        var raw = el.textContent.trim();
        var num = parseFloat(raw.replace(/[^0-9.]/g, ''));
        if (isNaN(num)) return;

        var suffix = raw.replace(/[0-9.]/g, '');
        var obj = { val: 0 };

        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            once: true,
            onEnter: function () {
                gsap.to(obj, {
                    val: num,
                    duration: 1.8,
                    ease: 'power2.out',
                    onUpdate: function () {
                        el.textContent = Math.round(obj.val) + suffix;
                    }
                });
            }
        });
    });

    /* ── Biology rhythm bar animated fill ── */
    ScrollTrigger.create({
        trigger: '.ab-biology__rhythm-bar',
        start: 'top 85%',
        once: true,
        onEnter: function () {
            gsap.fromTo('.ab-biology__rhythm-bar::before',
                { scaleX: 0 },
                { scaleX: 1, duration: 1.5, ease: 'power2.out', transformOrigin: 'left' }
            );
        }
    });

    /* ── Philosophy pillars stagger ── */
    gsap.utils.toArray('.ab-pillar').forEach(function (el, i) {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            delay: i * 0.1,
            scrollTrigger: {
                trigger: '.ab-philosophy__pillars',
                start: 'top 80%',
                once: true
            }
        });
    });

}());
