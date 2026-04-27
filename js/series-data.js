/**
 * Kripton – Series Data
 * Product data sourced from kripton-data-1.xlsx
 * Images from: images/KRIPTON PRODUCT IMAGE - Main/[SERIES]/
 */

var M = 'images/KRIPTON PRODUCT IMAGE - Main/';

var seriesData = [

    /* ══════════════════════════════════════════
       THEO SERIES
    ══════════════════════════════════════════ */
    {
        id: 'theo',
        title: 'Theo Series',
        tagline: 'Architectural recessed lighting',
        description: 'The Theo Series offers a comprehensive range of recessed luminaires — from spherical pendants to linear diffusers — engineered for seamless integration into any ceiling system.',
        heroImage: M + 'THEO SERIES/01.jpg',
        footerRows: [
            [
                { src: M + 'THEO SERIES/08.jpg', type: 'portrait' },
                { src: M + 'THEO SERIES/09.jpg', type: 'portrait' },
                { src: M + 'THEO SERIES/10.jpg', type: 'portrait' },
                { src: M + 'THEO SERIES/11.jpg', type: 'portrait' }
            ]
        ],
        products: [
            { name: 'Sphere',         code: 'KT01', mainImage: M + 'THEO SERIES/02.jpg',          specs: [{ label: 'Wattage', value: '6W | 12W' }] },
            { name: 'Cone',           code: 'KT02', mainImage: M + 'THEO SERIES/03.jpg',            specs: [{ label: 'Wattage', value: '12W' }] },
            { name: 'Movable Spot',   code: 'KT03', mainImage: M + 'THEO SERIES/04.jpg',    specs: [{ label: 'Wattage', value: '12W' }] },
            { name: 'Liner Diffuser', code: 'KT04', mainImage: M + 'THEO SERIES/06.jpg',  specs: [{ label: 'Wattage', value: '20W | 30W | 50W' }] },
            { name: 'Liner Low UGR',  code: 'KT05', mainImage: M + 'THEO SERIES/07.jpg',   specs: [{ label: 'Wattage', value: '20W | 30W | 50W' }] }
        ]
    },

    /* ══════════════════════════════════════════
       MIKROS SERIES
    ══════════════════════════════════════════ */
    {
        id: 'mikros',
        title: 'Mikros Series',
        tagline: 'Miniature magnetic track system',
        description: 'The Mikros Series brings the precision of magnetic track lighting to compact M10 format — ideal for accent lighting in residential and boutique retail environments.',
        heroImage: M + 'MIKROS SERIES/01.jpg',
        footerRows: [
            [
                { src: M + 'MIKROS SERIES/01.jpg', type: 'portrait' },
                { src: M + 'MIKROS SERIES/02.jpg', type: 'landscape' }
            ]
        ],
        products: [
            { name: 'Track MT10',          code: 'KM01', mainImage: M + 'MIKROS SERIES/PNG/TRACK M10-e.jpg',          specs: [{ label: 'Wattage', value: '6W | 12W' }] },
            { name: 'Double Track M10',    code: 'KM02', mainImage: M + 'MIKROS SERIES/PNG/DOUBLE TRACK M10-e.jpg',   specs: [{ label: 'Wattage', value: '12W x 2' }] },
            { name: 'Movable Focus M10',   code: 'KM03', mainImage: M + 'MIKROS SERIES/PNG/MOVABLE FOCUS M10-e.jpg',  specs: [{ label: 'Wattage', value: '12W' }] },
            { name: 'Fix Spread M10',      code: 'KM04', mainImage: M + 'MIKROS SERIES/PNG/FIX SPREAD M10-e.jpg',     specs: [{ label: 'Wattage', value: '12W' }] },
            { name: 'Movable Laser M10',   code: 'KM05', mainImage: M + 'MIKROS SERIES/PNG/MOVABLE LASER M10-e.jpg',  specs: [{ label: 'Wattage', value: '12W' }] },
            { name: 'Laser M10',           code: 'KM06', mainImage: M + 'MIKROS SERIES/PNG/LASER M10-e.jpg',          specs: [{ label: 'Wattage', value: '12W | 20W' }] },
            { name: 'Profile M10',         code: 'KM07', mainImage: M + 'MIKROS SERIES/PNG/PROFILE M10-e.jpg',        specs: [{ label: 'Wattage', value: '18W | 24W' }] }
        ]
    },

    /* ══════════════════════════════════════════
       NOWA SERIES
    ══════════════════════════════════════════ */
    {
        id: 'nowa',
        title: 'Nowa Series',
        tagline: 'Track & magnetic systems',
        fullWidthCards: true,
        description: 'The Nowa Series redefines modular lighting with magnetic track technology. Infinitely configurable for retail, hospitality, or residential.',
        heroImage: M + 'MAGNETIC.jpg',
        footerRows: [
            [
                { src: M + 'NOWA SERIES/01.png', type: 'portrait' },
                { src: M + 'NOWA SERIES/02.png', type: 'landscape' }
            ]
        ],
        products: [
            { name: 'Profile M20',       code: 'KN01', mainImage: M + 'NOWA SERIES/PNG/PROFILE M20.png',         specs: [{ label: 'Wattage', value: '10W | 15W | 20W | 30W' }] },
            { name: 'Laser M20',         code: 'KN02', mainImage: M + 'NOWA SERIES/PNG/LASER M20.png',           specs: [{ label: 'Wattage', value: '6W | 12W | 18W' }] },
            { name: 'Movable Laser M20', code: 'KN03', mainImage: M + 'NOWA SERIES/PNG/MOVEBLE LASER TRACK.png',       specs: [{ label: 'Wattage', value: '6W | 12W' }] },
            { name: 'Track M20',         code: 'KN04', mainImage: M + 'NOWA SERIES/PNG/TRACK LIGHT.png',         specs: [{ label: 'Wattage', value: '5W | 10W' }] },
            { name: 'Tube M20',          code: 'KN05', mainImage: M + 'NOWA SERIES/PNG/MAGNETIC TUBE.png',       specs: [{ label: 'Wattage', value: '6W | 14W' }] }
        ]
    },

    /* ══════════════════════════════════════════
       SIGNATURE SERIES
    ══════════════════════════════════════════ */
    {
        id: 'signature',
        title: 'Signature Series',
        tagline: 'Premium architectural luminaires',
        description: 'The Signature Series represents the pinnacle of Kripton engineering — precision optics, refined form, and intelligent light control for the most demanding architectural environments.',
        heroImage: M + 'SIGNATURE SERIES/GLINT.jpg',
        footerRows: [
            [
                { src: M + 'SIGNATURE SERIES/GALAXY 1.jpg', type: 'portrait' },
                { src: M + 'SIGNATURE SERIES/GALAXY 2.jpg', type: 'portrait' },
                { src: M + 'SIGNATURE SERIES/GALAXY.jpg', type: 'portrait' },
                { src: M + 'SIGNATURE SERIES/GALAXY 3.jpg', type: 'portrait' },
                { src: M + 'SIGNATURE SERIES/GALAXY 4.jpg',  type: 'portrait' }
            ]
        ],
        products: [
            { name: 'Parox',        code: 'KS11', mainImage: M + 'SIGNATURE SERIES/PAROX.jpg',                    specs: [{ label: 'Wattage', value: '7W | 12W | 18W' }] },
            { name: 'Colt',         code: 'KS12', mainImage: M + 'SIGNATURE SERIES/COLT.jpg',                     specs: [{ label: 'Wattage', value: '7W | 12W | 18W' }] },
            { name: 'Orbix',        code: 'KS13', mainImage: M + 'SIGNATURE SERIES/ORBIX .jpg',                   specs: [{ label: 'Wattage', value: '7W | 12W | 18W | 24W' }] },
            { name: 'Evan',         code: 'KS14', mainImage: M + 'SIGNATURE SERIES/EVAN.jpg',                     specs: [{ label: 'Wattage', value: '7W | 12W | 18W | 24W' }] },
            { name: 'Glint',        code: 'KS15', mainImage: M + 'SIGNATURE SERIES/GLINT.jpg',                    specs: [{ label: 'Wattage', value: '7W | 12W' }] },
            { name: 'Titan',  code: 'KS16-09RO', mainImage: M + 'SIGNATURE SERIES/TITAN.jpg',                    specs: [{ label: 'Wattage', value: '9W | 9W x 2' }] },
            { name: 'Sora',         code: 'KS17', mainImage: M + 'SIGNATURE SERIES/SORA.jpg',                     specs: [{ label: 'Wattage', value: '7W | 10W | 12W | 20W' }] },
            { name: 'Zian',     code: 'KS18', mainImage: M + 'SIGNATURE SERIES/ZIAN.png',        specs: [{ label: 'Wattage', value: '7W | 7W x 2 | 7W x 3' }] },
            { name: 'Ray',          code: 'KS19', mainImage: M + 'SIGNATURE SERIES/RAY.jpg',                      specs: [{ label: 'Wattage', value: '7W | 9W | 7W Movable' }] },
            { name: 'Aaron',        code: 'KS20', mainImage: M + 'SIGNATURE SERIES/AARON 01.jpg',                 specs: [{ label: 'Wattage', value: '3W' }] },
            { name: 'Aqua',         code: 'KS21', mainImage: M + 'SIGNATURE SERIES/AQUA.jpg',                     specs: [{ label: 'Wattage', value: '7W | 12W' }] },
            { name: 'Zola',         code: 'KS22', mainImage: M + 'SIGNATURE SERIES/ZOLA.jpg',                     specs: [{ label: 'Wattage', value: '7W | 12W' }] },
            { name: 'Lumera',       code: 'KS23', mainImage: M + 'SIGNATURE SERIES/LUMERA.jpg',                   specs: [{ label: 'Wattage', value: '7W | 12W' }] },
            { name: 'Jazz',         code: 'KS24', mainImage: M + 'SIGNATURE SERIES/JAZZ 01 copy.jpg',                  specs: [{ label: 'Wattage', value: '7W | 12W' }] },
            { name: 'Pure',         code: 'KS25', mainImage: M + 'SIGNATURE SERIES/PURE.jpg',                     specs: [{ label: 'Wattage', value: '7W | 12W | 18W' }] },
            { name: 'Dusk',         code: 'KS26', mainImage: M + 'SIGNATURE SERIES/DUSK.jpg',                     specs: [{ label: 'Wattage', value: '7W | 12W | 18W' }] },
            { name: 'Icon Sky',     code: 'KS27', mainImage: M + 'SIGNATURE SERIES/ICON SKY.jpg',                 specs: [{ label: 'Wattage', value: '—' }] },
            { name: 'Galaxy',       code: 'KS28', mainImage: M + 'SIGNATURE SERIES/PNG/009A0095.png',                   specs: [{ label: 'Wattage', value: '30W' }] }
        ]
    },

    /* ══════════════════════════════════════════
       CLASSIC SERIES
    ══════════════════════════════════════════ */
    {
        id: 'classic',
        title: 'Classic Series',
        tagline: 'Timeless designs for every space',
        description: 'The Classic Series brings enduring elegance to residential and commercial interiors. Designed for versatility, each luminaire balances aesthetic refinement with reliable performance.',
        heroImage: M + 'CLASSIC SERIES/ARCH.jpg',
        footerRows: [
            [
                { src: M + 'CLASSIC SERIES/01.jpg',     type: 'portrait' },
                { src: M + 'CLASSIC SERIES/ANCHOR.jpg', type: 'landscape' }
            ]
        ],
        products: [
            { name: 'Zion',           code: 'KC01', mainImage: M + 'CLASSIC SERIES/ARCH.jpg',        specs: [{ label: 'Wattage', value: '7W | 12W | 18W' }] },
            { name: 'Arch',            code: 'KC02', mainImage: M + 'CLASSIC SERIES/ARCH.jpg',                 specs: [{ label: 'Wattage', value: '7W | 12W | 18W' }] },
            { name: 'Logan',          code: 'KC03', mainImage: M + 'CLASSIC SERIES/LOGAN.jpg',                specs: [{ label: 'Wattage', value: '7W | 12W | 18W' }] },
            { name: 'Soven',          code: 'KC04', mainImage: M + 'CLASSIC SERIES/SOVEN.jpg',                specs: [{ label: 'Wattage', value: '5W | 12W | 20W' }] },
            { name: 'Rise',           code: 'KC05', mainImage: M + 'CLASSIC SERIES/RISE.jpg',                 specs: [{ label: 'Wattage', value: '7W | 12W | 18W' }] },
            { name: 'Glow',           code: 'KC06', mainImage: M + 'CLASSIC SERIES/GLOW.jpg',                 specs: [{ label: 'Wattage', value: '12W | 18W' }] },
            { name: 'Easy',           code: 'KC07', mainImage: M + 'CLASSIC SERIES/PNG/EASY 3W-e.jpg',          specs: [{ label: 'Wattage', value: '3W' }] },
            { name: 'Fluid Movable',  code: 'KC08', mainImage: M + 'CLASSIC SERIES/PNG/FLUID WHITE-e.jpg',      specs: [{ label: 'Wattage', value: '3W' }] },
            { name: 'Curve',          code: 'KC09', mainImage: M + 'CLASSIC SERIES/PNG/CURVE 3W-e.jpg',    specs: [{ label: 'Wattage', value: '3W' }] },
            { name: 'Glen',           code: 'KC10', mainImage: M + 'CLASSIC SERIES/PNG/GLEN-e.jpg',             specs: [{ label: 'Wattage', value: '3W' }] },
            { name: 'Striker',        code: 'KC11', mainImage: M + 'CLASSIC SERIES/PNG/STRIKER-e.jpg',          specs: [{ label: 'Wattage', value: '3W' }] },
            { name: 'Star',           code: 'KC12', mainImage: M + 'CLASSIC SERIES/PNG/STAR BIG-e.jpg',         specs: [{ label: 'Wattage', value: '0.5W | 1W' }] },
            { name: 'Roni',           code: 'KC13', mainImage: M + 'CLASSIC SERIES/RONI.jpg',                 specs: [{ label: 'Wattage', value: '7W | 12W' }] },
            { name: 'Rut',            code: 'KC14', mainImage: M + 'CLASSIC SERIES/PNG/RUT 12W-e.jpg',     specs: [{ label: 'Wattage', value: '7W | 12W' }] },
            { name: 'Elon',           code: 'KC15', mainImage: M + 'CLASSIC SERIES/PNG/ELON-e.jpg',        specs: [{ label: 'Wattage', value: '7W | 12W' }] },
            { name: 'Nada',           code: 'KC16', mainImage: M + 'CLASSIC SERIES/NADA VITO.jpg',            specs: [{ label: 'Wattage', value: '7W | 15W' }] },
            { name: 'Vito',           code: 'KC17', mainImage: M + 'CLASSIC SERIES/NADA VITO.jpg',        specs: [{ label: 'Wattage', value: '3W | 7W | 12W | 18W' }] },
            { name: 'Anchor',         code: 'KC18', mainImage: M + 'CLASSIC SERIES/ANCHOR.jpg',               specs: [{ label: 'Wattage', value: '12W | 20W | 30W' }] },
            { name: 'Golf',           code: 'KC19', mainImage: M + 'CLASSIC SERIES/GOLF.jpg',                 specs: [{ label: 'Wattage', value: '20W | 30W' }] }
        ]
    },

    /* ══════════════════════════════════════════
       CORE SERIES
    ══════════════════════════════════════════ */
    {
        id: 'core',
        title: 'Core Series',
        tagline: 'Essential lighting, refined',
        description: 'The Core Series delivers dependable, high-quality illumination for everyday spaces. Engineered for efficiency and ease of installation.',
        heroImage: M + 'CORE SERIES/BLAZE.jpg',
        footerRows: [
            [
                { src: M + 'CORE SERIES/BLAZE.jpg', type: 'landscape' },
                { src: M + 'CORE SERIES/YOHAN.jpg',  type: 'landscape' }
            ]
        ],
        products: [
            { name: 'Yohan', code: 'K001', mainImage: M + 'CORE SERIES/YOHAN.jpg',           specs: [{ label: 'Wattage', value: '7W | 12W | 18W | 24W | 30W' }] },
            { name: 'Brio',  code: 'K002', mainImage: M + 'CORE SERIES/PNG/BRIO-e.jpg',   specs: [{ label: 'Wattage', value: '7W | 12W' }] },
            { name: 'Sofy',  code: 'K003', mainImage: M + 'CORE SERIES/SOFY.jpg',            specs: [{ label: 'Wattage', value: '7W | 12W | 18W' }] },
            { name: 'Blaze', code: 'K004', mainImage: M + 'CORE SERIES/BLAZE.jpg',           specs: [{ label: 'Wattage', value: '7W | 12W | 18W' }] },
            { name: 'Dion',  code: 'K005', mainImage: M + 'CORE SERIES/DION.jpg',            specs: [{ label: 'Wattage', value: '7W | 12W | 18W' }] },
            { name: 'Spark', code: 'K006', mainImage: M + 'CORE SERIES/PNG/SPARK-e.jpg',       specs: [{ label: 'Wattage', value: '1W | 3W' }] }
        ]
    },

    /* ══════════════════════════════════════════
       LUNAR STRIPS & DRIVERS
    ══════════════════════════════════════════ */
    {
        id: 'lunar',
        title: 'Lunar Strips And Drivers',
        tagline: 'LED strip & driver systems',
        description: 'Lunar Strips And Drivers deliver flexible, high-output LED lighting for cove, cabinet, and architectural applications — available in standard, RGB, and CCT-adjustable variants.',
        heroImage: M + 'LUNAR STRIPS AND DRIVER/01.jpg',
        footerRows: [
            [
                { src: M + 'LUNAR STRIPS AND DRIVER/03.jpg', type: 'portrait' },
                { src: M + 'LUNAR STRIPS AND DRIVER/04.jpg', type: 'portrait' },
                { src: M + 'LUNAR STRIPS AND DRIVER/02.jpg', type: 'portrait' }
            ]
        ],
        products: [
            { name: 'Arni 240 LED',        code: 'KL01-240 12V',   mainImage: M + 'LUNAR STRIPS AND DRIVER/02.jpg',        specs: [{ label: 'Type', value: '240 LED/m · 12V' }] },
            { name: 'Arni 120 LED',        code: 'KL02-120 12V',   mainImage: M + 'LUNAR STRIPS AND DRIVER/03.jpg',        specs: [{ label: 'Type', value: '120 LED/m · 12V' }] },
            { name: 'Tesni 240 LED',       code: 'KL03-240 24V',   mainImage: M + 'LUNAR STRIPS AND DRIVER/04.jpg',       specs: [{ label: 'Type', value: '240 LED/m · 24V' }] },
            { name: 'Tesni 120 LED',       code: 'KL04-120 24V',   mainImage: M + 'LUNAR STRIPS AND DRIVER/05.jpg',       specs: [{ label: 'Type', value: '120 LED/m · 24V' }] },
            { name: 'Tesni LED IP65',      code: 'KL05-280 IP65',  mainImage: M + 'LUNAR STRIPS AND DRIVER/06.jpg',      specs: [{ label: 'IP', value: 'IP65' }] },
            { name: 'Arni COB',            code: 'KL06-320 12V',   mainImage: M + 'LUNAR STRIPS AND DRIVER/07.jpg',           specs: [{ label: 'Type', value: 'COB · 12V' }] },
            { name: 'Arni RGB',            code: 'KL07-120 RGB',   mainImage: M + 'LUNAR STRIPS AND DRIVER/08.jpg',            specs: [{ label: 'Type', value: 'RGB' }] },
            { name: 'Arni CCT Adjustable', code: 'KL08-240 12V',   mainImage: M + 'LUNAR STRIPS AND DRIVER/09.jpg', specs: [{ label: 'Type', value: 'CCT Adjustable · 12V' }] },
            { name: 'Power Supply',        code: 'KL-PS 12V/24V',  mainImage: M + 'LUNAR STRIPS AND DRIVER/PNG/POWER SUPPLY.png',        specs: [{ label: 'Type', value: 'Driver 12V / 24V' }] }
        ]
    }

];
