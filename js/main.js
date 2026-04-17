/**
 * Occhio – Main JavaScript
 * Handles the header navbar behaviour:
 *   1. Scroll-aware header (transparent → white)
 *   2. Nav drawer open / close (slide from left)
 *   3. Submenu panels (slide from right inside drawer)
 *   4. Search panel (slide down from top)
 *   5. Overlay backdrop
 *   6. Scroll reveal animations
 *   7. Newsletter form
 */

(function () {
    'use strict';

    // ─── Element references ───────────────────────────────────────────────────

    var header        = document.getElementById('Header');
    var overlay       = document.querySelector('.js-Header-overlay');

    // Nav drawer
    var menuOpenBtn   = document.querySelector('.js-HeaderBar-menuOpen');
    var drawer        = document.getElementById('main-menu');
    var drawerClose   = document.querySelector('.js-HeaderDrawer-close');

    // Submenu toggles (buttons that open a nested panel)
    var subToggles    = document.querySelectorAll('.js-HeaderNav-toggle');
    var backBtns      = document.querySelectorAll('.js-HeaderNav-back');

    // Search panel
    var searchOpenBtn = document.querySelector('.js-HeaderBar-searchOpen');
    var searchPanel   = document.getElementById('search-panel');
    var searchClose   = document.querySelector('.js-HeaderSearch-close');
    var searchInput   = document.querySelector('.js-HeaderSearch-input');


    // ─── 1. Scroll-aware header ───────────────────────────────────────────────
    // Adds .is-scrolled to the header once the user scrolls past 10px.
    // CSS uses this class to switch from transparent to white background.

    function handleScroll() {
        if (window.scrollY > 10) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on load so state is correct immediately


    // ─── Overlay helpers ─────────────────────────────────────────────────────

    function showOverlay() {
        overlay.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
    }

    function hideOverlay() {
        overlay.classList.remove('is-visible');
        document.body.style.overflow = '';
    }


    // ─── 2. Nav drawer ───────────────────────────────────────────────────────
    // The drawer slides in from the left. Opening it also shows the backdrop.

    function openDrawer() {
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        menuOpenBtn.setAttribute('aria-expanded', 'true');
        header.classList.add('drawer-open');
        showOverlay();
    }

    function closeDrawer() {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        menuOpenBtn.setAttribute('aria-expanded', 'false');
        header.classList.remove('drawer-open');

        // Also close any open submenu when the drawer closes
        closeAllSubmenus();

        hideOverlay();
    }

    if (menuOpenBtn) {
        menuOpenBtn.addEventListener('click', openDrawer);
    }

    if (drawerClose) {
        drawerClose.addEventListener('click', closeDrawer);
    }

    // (overlay click is handled in the dropdown section below)


    // ─── 3. Submenu panels ───────────────────────────────────────────────────
    // Each nav item with children has a nested panel that slides in from the
    // right inside the drawer. The back button slides it back out.

    function closeAllSubmenus() {
        document.querySelectorAll('.js-HeaderNav-submenu').forEach(function (panel) {
            panel.classList.remove('is-open');
            panel.setAttribute('aria-hidden', 'true');
        });
        subToggles.forEach(function (btn) {
            btn.setAttribute('aria-expanded', 'false');
        });
    }

    subToggles.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var targetId = btn.getAttribute('aria-controls');
            var panel    = document.getElementById(targetId);

            if (!panel) return;

            var isOpen = panel.classList.contains('is-open');

            // Close any other open submenu first
            closeAllSubmenus();

            if (!isOpen) {
                panel.classList.add('is-open');
                panel.setAttribute('aria-hidden', 'false');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    backBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Find the parent submenu panel and close it
            var panel = btn.closest('.js-HeaderNav-submenu');
            if (panel) {
                panel.classList.remove('is-open');
                panel.setAttribute('aria-hidden', 'true');
            }
            // Reset the toggle button's aria state
            var toggleId = panel ? panel.id : null;
            if (toggleId) {
                var toggle = document.querySelector('[aria-controls="' + toggleId + '"]');
                if (toggle) toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });


    // ─── 4. Search panel ─────────────────────────────────────────────────────
    // The search panel slides down from the top of the header.

    function openSearch() {
        searchPanel.classList.add('is-open');
        searchPanel.setAttribute('aria-hidden', 'false');
        searchOpenBtn.setAttribute('aria-expanded', 'true');
        showOverlay();

        // Focus the input after the transition starts
        setTimeout(function () {
            if (searchInput) searchInput.focus();
        }, 100);
    }

    function closeSearch() {
        searchPanel.classList.remove('is-open');
        searchPanel.setAttribute('aria-hidden', 'true');
        searchOpenBtn.setAttribute('aria-expanded', 'false');
        hideOverlay();
    }

    if (searchOpenBtn) {
        searchOpenBtn.addEventListener('click', openSearch);
    }

    if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
    }

    // ─── 6. Desktop dropdown panels ──────────────────────────────────────────
    // Each nav item with class .js-DropItem shows its .js-DropPanel on hover.
    // A small delay on close prevents accidental dismissal when moving the
    // mouse between the trigger link and the panel itself.

    var dropItems = document.querySelectorAll('.js-DropItem');
    var activeDropItem = null;
    var closeTimer = null;

    function openDrop(item) {
        // Close any other open panel first
        if (activeDropItem && activeDropItem !== item) {
            closeDrop(activeDropItem, true);
        }

        clearTimeout(closeTimer);

        var trigger = item.querySelector('.js-DropTrigger');
        var panel   = item.querySelector('.js-DropPanel');

        if (!panel) return;

        item.classList.add('is-active');
        panel.classList.add('is-open');
        panel.setAttribute('aria-hidden', 'false');
        if (trigger) trigger.setAttribute('aria-expanded', 'true');

        // Show the dark overlay behind the panel
        overlay.classList.add('is-visible');

        activeDropItem = item;
    }

    function closeDrop(item, immediate) {
        var trigger = item.querySelector('.js-DropTrigger');
        var panel   = item.querySelector('.js-DropPanel');

        if (!panel) return;

        function doClose() {
            item.classList.remove('is-active');
            panel.classList.remove('is-open');
            panel.setAttribute('aria-hidden', 'true');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');

            // Only hide overlay if no other drop is open
            if (activeDropItem === item) {
                overlay.classList.remove('is-visible');
                activeDropItem = null;
            }
        }

        if (immediate) {
            doClose();
        } else {
            closeTimer = setTimeout(doClose, 120);
        }
    }

    function closeAllDrops() {
        dropItems.forEach(function (item) {
            closeDrop(item, true);
        });
        activeDropItem = null;
    }

    dropItems.forEach(function (item) {
        var trigger = item.querySelector('.js-DropTrigger');
        var panel   = item.querySelector('.js-DropPanel');

        // Open on mouseenter of the item (trigger or panel)
        item.addEventListener('mouseenter', function () {
            openDrop(item);
        });

        // Start close timer on mouseleave of the whole item
        item.addEventListener('mouseleave', function () {
            closeDrop(item, false);
        });

        // If mouse enters the panel, cancel the close timer
        if (panel) {
            panel.addEventListener('mouseenter', function () {
                clearTimeout(closeTimer);
            });
            panel.addEventListener('mouseleave', function () {
                closeDrop(item, false);
            });
        }

        // Keyboard: Enter/Space on trigger opens panel
        if (trigger) {
            trigger.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (item.classList.contains('is-active')) {
                        closeDrop(item, true);
                    } else {
                        openDrop(item);
                    }
                }
            });
        }
    });

    // Close all drops when overlay is clicked
    if (overlay) {
        overlay.addEventListener('click', function () {
            closeAllDrops();
            closeDrawer();
            closeSearch();
        });
    }

    // Close drops on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeAllDrops();
            closeSearch();
            closeDrawer();
        }
    });


    // ─── 5. Scroll Reveal ────────────────────────────────────────────────────
    // Elements with class .reveal fade up into view as they enter the viewport.

    var revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // stop watching once visible
                }
            });
        }, { threshold: 0.12 });

        revealEls.forEach(function (el) {
            observer.observe(el);
        });

    } else {
        // Fallback: just show everything for older browsers
        revealEls.forEach(function (el) {
            el.classList.add('is-visible');
        });
    }


    // ─── 6. Newsletter form ───────────────────────────────────────────────────

    var newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var input = newsletterForm.querySelector('.newsletter-input');
            var email = input.value.trim();

            if (!email || !email.includes('@')) {
                input.style.borderColor = '#e74c3c';
                input.focus();
                return;
            }

            input.style.borderColor = '';
            newsletterForm.innerHTML = '<p style="color:rgba(255,255,255,0.8);font-size:0.9rem;letter-spacing:0.05em;">Thank you for subscribing.</p>';
        });
    }

})();

// ─── Products dropdown: series card hover → preview image swap ────────────
(function () {
    var seriesCards   = document.querySelectorAll('.DropSeries-card');
    var previewImages = document.querySelectorAll('.DropPreview-img');

    if (!seriesCards.length) return;

    seriesCards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            var index = card.getAttribute('data-index');
            seriesCards.forEach(function (c) { c.classList.remove('is-hovered'); });
            card.classList.add('is-hovered');
            previewImages.forEach(function (img) {
                if (img.getAttribute('data-preview') === index) {
                    img.classList.add('is-active');
                } else {
                    img.classList.remove('is-active');
                }
            });
        });
        card.addEventListener('mouseleave', function () {
            card.classList.remove('is-hovered');
        });
    });
}());


// ─── Contact form ─────────────────────────────────────────────────────────────

(function () {
    var form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Basic validation
        var required = form.querySelectorAll('[required]');
        var valid = true;

        required.forEach(function (field) {
            field.style.borderBottomColor = '';
            if (!field.value.trim()) {
                field.style.borderBottomColor = '#c0392b';
                valid = false;
            }
        });

        if (!valid) return;

        // Show success message
        form.innerHTML = [
            '<div class="contact-form__success" style="display:block">',
            '  <p>Thank you for reaching out. A member of the Kripton team will be in touch shortly.</p>',
            '</div>'
        ].join('');
    });
}());
