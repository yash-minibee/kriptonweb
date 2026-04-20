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

        /* Hero */
        section.appendChild(buildHero(series));

        /* Products */
        var productsWrap = el('div', 'series-products');
        series.products.forEach(function (product, pIndex) {
            /* Row 0 (cards 0,1) = normal, Row 1 (cards 2,3) = reverse, alternating */
            var reverse = Math.floor(pIndex / 2) % 2 !== 0;
            productsWrap.appendChild(buildProductCard(product, reverse));
        });
        section.appendChild(productsWrap);

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

    function buildProductCard(product, reverse) {
        var card = el('article', 'product-card-full sr' + (reverse ? ' product-card-full--reverse' : ''));

        /* ── Left: main image ── */
        var imgCol = el('div', 'product-card-full__img-col');
        var mainImg = el('img', 'product-card-full__main-img');
        mainImg.src     = product.mainImage;
        mainImg.alt     = product.name;
        mainImg.loading = 'lazy';
        imgCol.appendChild(mainImg);

        /* ── Right: secondary image + info ── */
        var infoCol = el('div', 'product-card-full__info-col');

        /* Secondary image */
        var secImg = el('img', 'product-card-full__sec-img');
        secImg.src     = product.secondaryImage;
        secImg.alt     = product.name + ' – alternate view';
        secImg.loading = 'lazy';

        /* Name + code row */
        var nameRow = el('div', 'product-card-full__name-row');
        var name    = el('h3', 'product-card-full__name');
        name.textContent = product.name;
        var code = el('span', 'product-card-full__code');
        code.textContent = product.code;
        nameRow.appendChild(name);
        nameRow.appendChild(code);

        /* Specs table */
        var table = el('table', 'product-card-full__specs');
        var tbody = document.createElement('tbody');
        product.specs.slice(0, 3).forEach(function (spec) {
            var row = document.createElement('tr');
            var th  = document.createElement('th');
            var td  = document.createElement('td');
            th.textContent = spec.label;
            td.textContent = spec.value;
            row.appendChild(th);
            row.appendChild(td);
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        infoCol.appendChild(secImg);
        infoCol.appendChild(nameRow);
        infoCol.appendChild(table);

        card.appendChild(imgCol);
        card.appendChild(infoCol);

        return card;
    }

    /* ── Helper: create element with class ── */
    function el(tag, className) {
        var node = document.createElement(tag);
        if (className) node.className = className;
        return node;
    }

}());
