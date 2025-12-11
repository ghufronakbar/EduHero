import { SeedDragAndDrop } from "@/types/seed";

export const dragAndDropMatematikaEasy: SeedDragAndDrop[] = [
    // 1. Bilangan Bulat (Positif vs Negatif)
    {
        id: 'math_easy_bil_001',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Bilangan Bulat',
        questionText: 'Kelompokkan bilangan berikut menjadi Bilangan Positif atau Negatif.',
        explanationText: 'Bilangan negatif memiliki tanda minus (-). Bilangan positif nilainya di atas nol.',
        zones: [
            { id: 'zone_positif', label: 'Bilangan Positif (+)' },
            { id: 'zone_negatif', label: 'Bilangan Negatif (-)' },
        ],
        items: [
            { id: 'item_5', text: '5', correctZoneId: 'zone_positif', image: "/assets/images/number_5.png" },
            { id: 'item_100', text: '100', correctZoneId: 'zone_positif', image: "/assets/images/number_100.png" },
            { id: 'item_min3', text: '-3', correctZoneId: 'zone_negatif', image: "/assets/images/number_min3.png" },
            { id: 'item_min10', text: '-10', correctZoneId: 'zone_negatif', image: "/assets/images/number_min10.png" },
        ],
    },

    // 2. Jenis Pecahan (Biasa vs Campuran)
    {
        id: 'math_easy_frac_002',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Pecahan',
        questionText: 'Pisahkan antara Pecahan Biasa dan Pecahan Campuran.',
        explanationText: 'Pecahan campuran memiliki bilangan bulat di depannya (contoh: 1 ½).',
        zones: [
            { id: 'zone_biasa', label: 'Pecahan Biasa' },
            { id: 'zone_campur', label: 'Pecahan Campuran' },
        ],
        items: [
            { id: 'item_half', text: '1/2', correctZoneId: 'zone_biasa', image: "/assets/images/fraction_half.png" },
            { id: 'item_quarter', text: '3/4', correctZoneId: 'zone_biasa', image: "/assets/images/fraction_quarter.png" },
            { id: 'item_mixed1', text: '1 ½', correctZoneId: 'zone_campur', image: "/assets/images/fraction_mixed1.png" },
            { id: 'item_mixed2', text: '2 ⅔', correctZoneId: 'zone_campur', image: "/assets/images/fraction_mixed2.png" },
        ],
    },

    // 3. Unsur Aljabar (Variabel vs Konstanta)
    {
        id: 'math_easy_alj_003',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Bentuk Aljabar',
        questionText: 'Dalam bentuk aljabar, manakah yang disebut Variabel dan Konstanta?',
        explanationText: 'Variabel adalah lambang pengganti (biasanya huruf x, y). Konstanta adalah nilai tetap (angka saja).',
        zones: [
            { id: 'zone_var', label: 'Variabel (Huruf)' },
            { id: 'zone_kons', label: 'Konstanta (Angka)' },
        ],
        items: [
            { id: 'item_x', text: 'x', correctZoneId: 'zone_var', image: "/assets/images/var_x.png" },
            { id: 'item_y', text: 'y', correctZoneId: 'zone_var', image: "/assets/images/var_y.png" },
            { id: 'item_7', text: '7', correctZoneId: 'zone_kons', image: "/assets/images/num_7.png" },
            { id: 'item_min5', text: '-5', correctZoneId: 'zone_kons', image: "/assets/images/num_min5.png" },
        ],
    },

    // 4. Jenis Sudut (Lancip vs Tumpul)
    {
        id: 'math_easy_geo_004',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Garis dan Sudut',
        questionText: 'Kelompokkan besar sudut berikut berdasarkan jenisnya.',
        explanationText: 'Sudut Lancip kurang dari 90°. Sudut Tumpul lebih dari 90° (tapi kurang dari 180°).',
        zones: [
            { id: 'zone_lancip', label: 'Sudut Lancip (< 90°)' },
            { id: 'zone_tumpul', label: 'Sudut Tumpul (> 90°)' },
        ],
        items: [
            { id: 'item_30', text: '30°', correctZoneId: 'zone_lancip', image: "/assets/images/angle_30.png" },
            { id: 'item_45', text: '45°', correctZoneId: 'zone_lancip', image: "/assets/images/angle_45.png" },
            { id: 'item_120', text: '120°', correctZoneId: 'zone_tumpul', image: "/assets/images/angle_120.png" },
            { id: 'item_150', text: '150°', correctZoneId: 'zone_tumpul', image: "/assets/images/angle_150.png" },
        ],
    },

    // 5. Bilangan Ganjil vs Genap
    {
        id: 'math_easy_bil_005',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Bilangan',
        questionText: 'Pisahkan bilangan berikut menjadi Ganjil dan Genap.',
        explanationText: 'Bilangan Genap habis dibagi 2 (2, 4, 6...). Bilangan Ganjil bersisa jika dibagi 2 (1, 3, 5...).',
        zones: [
            { id: 'zone_genap', label: 'Bilangan Genap' },
            { id: 'zone_ganjil', label: 'Bilangan Ganjil' },
        ],
        items: [
            { id: 'item_2', text: '2', correctZoneId: 'zone_genap', image: "/assets/images/num_2.png" },
            { id: 'item_8', text: '8', correctZoneId: 'zone_genap', image: "/assets/images/num_8.png" },
            { id: 'item_3', text: '3', correctZoneId: 'zone_ganjil', image: "/assets/images/num_3.png" },
            { id: 'item_11', text: '11', correctZoneId: 'zone_ganjil', image: "/assets/images/num_11.png" },
        ],
    },

    // 6. Bangun Datar (Segi-3 vs Segi-4)
    {
        id: 'math_easy_geo_006',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Bangun Datar',
        questionText: 'Kelompokkan bangun datar berikut berdasarkan jumlah sisinya.',
        explanationText: 'Persegi dan Trapesium punya 4 sisi. Segitiga punya 3 sisi.',
        zones: [
            { id: 'zone_tri', label: 'Segitiga (3 Sisi)' },
            { id: 'zone_quad', label: 'Segiempat (4 Sisi)' },
        ],
        items: [
            { id: 'item_sama_sisi', text: 'Segitiga Sama Sisi', correctZoneId: 'zone_tri', image: "/assets/images/triangle_eq.png" },
            { id: 'item_siku', text: 'Segitiga Siku-siku', correctZoneId: 'zone_tri', image: "/assets/images/triangle_right.png" },
            { id: 'item_persegi', text: 'Persegi', correctZoneId: 'zone_quad', image: "/assets/images/square.png" },
            { id: 'item_jajar', text: 'Jajargenjang', correctZoneId: 'zone_quad', image: "/assets/images/parallelogram.png" },
        ],
    },

    // 7. Aritmatika Sosial (Untung vs Rugi)
    {
        id: 'math_easy_sos_007',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Aritmatika Sosial',
        questionText: 'Tentukan kondisi penjualan berikut Untung atau Rugi.',
        explanationText: 'Untung jika Harga Jual > Beli. Rugi jika Harga Jual < Beli.',
        zones: [
            { id: 'zone_untung', label: 'Untung (Laba)' },
            { id: 'zone_rugi', label: 'Rugi' },
        ],
        items: [
            { id: 'item_jual_tinggi', text: 'Jual Rp5.000 > Beli Rp3.000', correctZoneId: 'zone_untung', image: "/assets/images/profit_chart.png" },
            { id: 'item_beli_rendah', text: 'Harga Jual Lebih Tinggi', correctZoneId: 'zone_untung', image: "/assets/images/arrow_up_green.png" },
            { id: 'item_jual_rendah', text: 'Jual Rp2.000 < Beli Rp4.000', correctZoneId: 'zone_rugi', image: "/assets/images/loss_chart.png" },
            { id: 'item_beli_tinggi', text: 'Harga Beli Lebih Tinggi', correctZoneId: 'zone_rugi', image: "/assets/images/arrow_down_red.png" },
        ],
    },

    // 8. PLSV (Persamaan vs Pertidaksamaan)
    {
        id: 'math_easy_alj_008',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Persamaan Linear (PLSV)',
        questionText: 'Kelompokkan tanda matematika berikut ke Persamaan atau Pertidaksamaan.',
        explanationText: 'Persamaan menggunakan tanda sama dengan (=). Pertidaksamaan menggunakan tanda <, >, ≤, ≥.',
        zones: [
            { id: 'zone_pers', label: 'Persamaan (=)' },
            { id: 'zone_pert', label: 'Pertidaksamaan (< >)' },
        ],
        items: [
            { id: 'item_eq', text: 'Sama Dengan (=)', correctZoneId: 'zone_pers', image: "/assets/images/symbol_equal.png" },
            { id: 'item_plus_eq', text: '2x + 1 = 5', correctZoneId: 'zone_pers', image: "/assets/images/eq_example.png" },
            { id: 'item_less', text: 'Kurang Dari (<)', correctZoneId: 'zone_pert', image: "/assets/images/symbol_less.png" },
            { id: 'item_more', text: 'Lebih Dari (>)', correctZoneId: 'zone_pert', image: "/assets/images/symbol_more.png" },
        ],
    },

    // 9. Kelipatan dan Faktor
    {
        id: 'math_easy_bil_009',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'KPK dan FPB',
        questionText: 'Manakah yang merupakan Faktor dari 6 dan Kelipatan dari 5?',
        explanationText: 'Faktor 6 adalah pembagi 6 (1,2,3,6). Kelipatan 5 adalah hasil kali 5 (5,10,15...).',
        zones: [
            { id: 'zone_faktor6', label: 'Faktor dari 6' },
            { id: 'zone_lipat5', label: 'Kelipatan 5' },
        ],
        items: [
            { id: 'item_2', text: '2', correctZoneId: 'zone_faktor6', image: "/assets/images/num_2.png" },
            { id: 'item_3', text: '3', correctZoneId: 'zone_faktor6', image: "/assets/images/num_3.png" },
            { id: 'item_10', text: '10', correctZoneId: 'zone_lipat5', image: "/assets/images/num_10.png" },
            { id: 'item_25', text: '25', correctZoneId: 'zone_lipat5', image: "/assets/images/num_25.png" },
        ],
    },

    // 10. Dimensi Bangun (2D vs 3D)
    {
        id: 'math_easy_geo_010',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'easy',
        topic: 'Bangun Ruang',
        questionText: 'Pisahkan antara Bangun Datar (2D) dan Bangun Ruang (3D).',
        explanationText: 'Bangun Datar hanya punya luas (Persegi). Bangun Ruang punya volume (Kubus).',
        zones: [
            { id: 'zone_2d', label: 'Bangun Datar (2D)' },
            { id: 'zone_3d', label: 'Bangun Ruang (3D)' },
        ],
        items: [
            { id: 'item_lingkaran', text: 'Lingkaran', correctZoneId: 'zone_2d', image: "/assets/images/circle.png" },
            { id: 'item_persegi_pjg', text: 'Persegi Panjang', correctZoneId: 'zone_2d', image: "/assets/images/rectangle.png" },
            { id: 'item_kubus', text: 'Kubus', correctZoneId: 'zone_3d', image: "/assets/images/cube.png" },
            { id: 'item_bola', text: 'Bola', correctZoneId: 'zone_3d', image: "/assets/images/sphere.png" },
        ],
    },
];