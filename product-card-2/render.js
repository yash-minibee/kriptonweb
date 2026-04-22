/* Kripton – Asymmetrical Grid Renderer
 *
 * 3-column grid, fixed row height.
 * Pattern repeats every 6 cards:
 *   Index 0 → horizontal  (col 1, row N)
 *   Index 1 → horizontal  (col 2, row N)
 *   Index 2 → vertical    (col 3, rows N & N+1)
 *   Index 3 → vertical    (col 1, rows N+1 & N+2)
 *   Index 4 → horizontal  (col 2, row N+1)
 *   Index 5 → horizontal  (col 2, row N+2)  ← fills remaining space
 */

(function () {
    'use strict';

    var grid = document.getElementById('productGrid');
    if (!grid || typeof products === 'undefined') return;

    /* Pattern: H H V  V H H  H H V  V H H ... */
    var pattern = ['h', 'h', 'v', 'v', 'h', 'h'];

    function buildSpecRows(specs) {
        return Object.keys(specs).map(function (key) {
            return '<tr><td>' + key + '</td><td>' + specs[key] + '</td></tr>';
        }).join('');
    }

    products.forEach(function (product, index) {
        var type = pattern[index % pattern.length];
        var card = document.createElement('article');
        card.className = 'card card--' + type;

        card.innerHTML = [
            '<div class="card-image">',
            '  <img src="' + product.image + '" alt="' + product.name + '" loading="lazy">',
            '</div>',
            '<div class="card-content">',
            '  <div>',
            '    <h2 class="product-name">' + product.name + '</h2>',
            '    <p class="product-code">' + product.code + '</p>',
            '  </div>',
            '  <table class="spec-table"><tbody>',
                 buildSpecRows(product.specs),
            '  </tbody></table>',
            '</div>'
        ].join('');

        grid.appendChild(card);
    });

}());
