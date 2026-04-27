/**
 * Kripton – Series Page Renderer
 * Dynamically builds all series sections from seriesData array.
 * Supports ?series=signature to show a single series.
 */

(function () {
    'use strict';

    var main = document.getElementById('main-content');
    if (!main || typeof seriesData === 'undefined') return;

    /* ── Read ?series= query param ── */
    var params     = new URLSearchParams(window.location.search);
    var seriesParam = params.get('series');

    /* Filter to matching series, or show all if no param */
    var dataToRender = seriesParam
        ? seriesData.filter(function (s) { return s.id === seriesParam; })
        : seriesData;

    /* If param given but no match, show a not-found message */
    if (seriesParam && dataToRender.length === 0) {
        var msg = el('div', 'series-not-found');
        msg.innerHTML = '<p>Series "<strong>' + seriesParam + '</strong>" not found. <a href="series.html">View all series →</a></p>';
        main.appendChild(msg);
        return;
    }

    /* ── Build matching series ── */
    dataToRender.forEach(function (series) {
        main.appendChild(buildSeriesSection(series));
    });

    /* ── Scroll reveal via IntersectionObserver ── */
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('sr-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.sr').forEach(function (el) {
        observer.observe(el);
    });


    /* ════════════════════════════════════════════
       BUILD FUNCTIONS
    ════════════════════════════════════════════ */

    function buildSeriesSection(series) {
        var section = el('section', 'series-section');
        section.id = series.id;

        /* Hero — unchanged */
        section.appendChild(buildHero(series));

        /* Product cards — product-card-3 design */
        var grid = el('div', 'series-card-grid' + (series.fullWidthCards ? ' series-card-grid--full' : ''));

        series.products.forEach(function (product, i) {
            /* Full-width mode (e.g. Nowa series) */
            if (product.fullWidth || series.fullWidthCards) {
                var fullCard = el('article', 'sc sc--full sr');
                fullCard.innerHTML = [
                    '<div class="sc__img sc__img--full">',
                    '  <img src="' + product.mainImage + '" alt="' + product.name + '" loading="lazy">',
                    '</div>',
                    '<div class="sc__content sc__content--full">',
                    '  <div>',
                    '    <h3 class="sc__name">' + product.name + '</h3>',
                    '    <p class="sc__code">' + product.code + '</p>',
                    '  </div>',
                    '  <span class="sc__watt">' + (product.specs[0] ? product.specs[0].value : '') + '</span>',
                    '</div>'
                ].join('');
                grid.appendChild(fullCard);
                return;
            }

            /* Every card is horizontal; rows 0,2,4… are normal, rows 1,3,5… are reversed */
            var row = Math.floor(i / 3);
            var isReversed = row % 2 === 1;
            var imgAlign = row % 2 === 0 ? 'sc--img-bottom' : 'sc--img-top';
            var cardClass = 'sc sc--h ' + imgAlign + (isReversed ? ' sc--h-rev' : '') + ' sr';
            var card = el('article', cardClass);

            card.innerHTML = [
                '<div class="sc__img">',
                '  <img src="' + product.mainImage + '" alt="' + product.name + '" loading="lazy">',
                '</div>',
                '<div class="sc__content">',
                '  <div>',
                '    <h3 class="sc__name">' + product.name + '</h3>',
                '    <p class="sc__code">' + product.code + '</p>',
                '  </div>',
                '  <span class="sc__watt">' + (product.specs[0] ? product.specs[0].value : '') + '</span>',
                '</div>'
            ].join('');

            grid.appendChild(card);
        });

        section.appendChild(grid);

        /* Footer image gallery */
        if (series.footerRows && series.footerRows.length) {
            section.appendChild(buildFooterGallery(series.footerRows));
        }

        return section;
    }

    function buildHero(series) {
        var hero = el('div', 'series-hero sr');
        hero.style.backgroundImage = "url('" + series.heroImage + "')";

        var overlay = el('div', 'series-hero__overlay');
        hero.appendChild(overlay);

        var content = el('div', 'series-hero__content');

        var eyebrow = el('p', 'series-hero__eyebrow');
        eyebrow.textContent = series.tagline;

        var title = el('h2', 'series-hero__title');
        title.textContent = series.title;

        var desc = el('p', 'series-hero__desc');
        desc.textContent = series.description;

        content.appendChild(eyebrow);
        content.appendChild(title);
        content.appendChild(desc);
        hero.appendChild(content);

        return hero;
    }

    /* ── Helper: create element with class ── */
    function el(tag, className) {
        var node = document.createElement(tag);
        if (className) node.className = className;
        return node;
    }

    function buildFooterGallery(rows) {
        var gallery = document.createElement('div');
        gallery.className = 'sfg';
        rows.forEach(function(rowImages) {
            var row = document.createElement('div');
            row.className = 'sfg__row';
            rowImages.forEach(function(item) {
                var cell = document.createElement('div');
                cell.className = item.type === 'landscape' ? 'sfg__l' : 'sfg__p';
                var img = document.createElement('img');
                img.src = item.src;
                img.alt = '';
                img.loading = 'lazy';
                cell.appendChild(img);
                row.appendChild(cell);
            });
            gallery.appendChild(row);
        });
        return gallery;
    }

}());
