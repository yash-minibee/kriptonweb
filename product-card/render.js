/**
 * Kripton – Product Grid Renderer
 *
 * Layout pattern (repeating every 4 cards):
 *   Position 0 → horizontal  (col 1, row N)
 *   Position 1 → horizontal  (col 2, row N)
 *   Position 2 → vertical    (col 3, rows N–N+1)  ← spans 2 rows
 *   Position 3 → vertical    (col 1, rows N+1–N+2) ← spans 2 rows
 *   Position 4 → horizontal  (col 2, row N+1)
 *   ... then repeats
 *
 * In practice we assign a class based on index % 4:
 *   0 → horizontal
 *   1 → horizontal
 *   2 → vertical
 *   3 → vertical  (but placed by grid auto-flow)
 *
 * CSS grid auto-flow handles placement automatically.
 */

(function () {
    'use strict';

    var grid = document.getElementById('productGrid');
    if (!grid || typeof products === 'undefined') return;

    /**
     * Determine card type based on position in the repeating 4-card pattern.
     * Pattern: H H V  /  V H H  /  H H V  /  V H H ...
     * Mapped as index % 6:
     *   0,1 → horizontal
     *   2   → vertical
     *   3   → vertical
     *   4,5 → horizontal
     */
    function getType(index) {
        var pos = index % 6;
        if (pos === 2 || pos === 3) return 'vertical';
        return 'horizontal';
    }

    /**
     * Build the specs table rows from the specs object.
     */
    function buildSpecRows(specs) {
        return Object.keys(specs).map(function (key) {
            return '<tr>'
                + '<th>' + key + '</th>'
                + '<td>' + specs[key] + '</td>'
                + '</tr>';
        }).join('');
    }

    /**
     * Build a single product card element.
     */
    function buildCard(product, index) {
        var type    = getType(index);
        var article = document.createElement('article');
        article.className = 'pc pc--' + type;
        article.setAttribute('aria-label', product.name);

        article.innerHTML = [
            '<div class="pc__img">',
            '  <img src="' + product.image + '" alt="' + product.name + '" loading="lazy">',
            '</div>',
            '<div class="pc__info">',
            '  <div class="pc__name-row">',
            '    <h2 class="pc__name">' + product.name + '</h2>',
            '    <p class="pc__code">' + product.code + '</p>',
            '  </div>',
            '  <table class="pc__specs" aria-label="' + product.name + ' specifications">',
            '    <tbody>',
                   buildSpecRows(product.specs),
            '    </tbody>',
            '  </table>',
            '</div>'
        ].join('');

        return article;
    }

    /* Render all products */
    products.forEach(function (product, index) {
        grid.appendChild(buildCard(product, index));
    });

}());
