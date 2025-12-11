import { SeedDragAndDrop } from "@/types/seed";

export const dragAndDropMatematikaHard: SeedDragAndDrop[] = [
    // 1. Bilangan Rasional vs Irasional
    // Konsep akar dan desimal tak hingga
    {
        id: 'math_hard_bil_021',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Bilangan Real',
        questionText: 'Kelompokkan bilangan berikut: Rasional (bisa jadi pecahan) atau Irasional (desimal tak berujung).',
        explanationText: '√4 = 2 (Rasional). π dan √2 angkanya tidak habis dan tidak berulang (Irasional).',
        zones: [
            { id: 'zone_rasional', label: 'Bilangan Rasional' },
            { id: 'zone_irasional', label: 'Bilangan Irasional' },
        ],
        items: [
            { id: 'item_sqrt4', text: '√4', correctZoneId: 'zone_rasional', image: "/assets/images/sqrt_4.png" },
            { id: 'item_0_5', text: '0,5', correctZoneId: 'zone_rasional', image: "/assets/images/decimal_05.png" },
            { id: 'item_pi', text: 'π (Pi)', correctZoneId: 'zone_irasional', image: "/assets/images/pi_symbol.png" },
            { id: 'item_sqrt2', text: '√2', correctZoneId: 'zone_irasional', image: "/assets/images/sqrt_2.png" },
        ],
    },

    // 2. Faktorisasi Aljabar
    // Membedakan selisih kuadrat dan kuadrat sempurna
    {
        id: 'math_hard_alj_022',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Faktorisasi Aljabar',
        questionText: 'Pasangkan bentuk faktorisasi dengan penjabarannya yang tepat.',
        explanationText: 'x² - y² adalah selisih dua kuadrat. (x+y)² adalah kuadrat sempurna (hasilnya ada 2xy).',
        zones: [
            { id: 'zone_selisih', label: 'x² - y²' },
            { id: 'zone_sempurna', label: '(x + y)²' },
        ],
        items: [
            { id: 'item_min_plus', text: '(x - y)(x + y)', correctZoneId: 'zone_selisih', image: "/assets/images/alg_diff_sq.png" },
            { id: 'item_angka_selisih', text: 'x² - 9', correctZoneId: 'zone_selisih', image: "/assets/images/alg_x2_min_9.png" },
            { id: 'item_plus_plus', text: '(x + y)(x + y)', correctZoneId: 'zone_sempurna', image: "/assets/images/alg_perf_sq.png" },
            { id: 'item_expand', text: 'x² + 2xy + y²', correctZoneId: 'zone_sempurna', image: "/assets/images/alg_expand.png" },
        ],
    },

    // 3. Transformasi Geometri (Pencerminan)
    // Memahami perubahan koordinat (x,y)
    {
        id: 'math_hard_geo_023',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Transformasi',
        questionText: 'Bagaimana perubahan titik (x, y) jika dicerminkan (Refleksi)?',
        explanationText: 'Cermin Sumbu-X: y berubah tanda (x, -y). Cermin Sumbu-Y: x berubah tanda (-x, y).',
        zones: [
            { id: 'zone_sb_x', label: 'Cermin Sumbu-X' },
            { id: 'zone_sb_y', label: 'Cermin Sumbu-Y' },
        ],
        items: [
            { id: 'item_x_min_y', text: '(x, -y)', correctZoneId: 'zone_sb_x', image: "/assets/images/coord_x_miny.png" },
            { id: 'item_titik_a', text: 'A(2,3) -> A\'(2,-3)', correctZoneId: 'zone_sb_x', image: "/assets/images/coord_ref_x.png" },
            { id: 'item_min_x_y', text: '(-x, y)', correctZoneId: 'zone_sb_y', image: "/assets/images/coord_minx_y.png" },
            { id: 'item_titik_b', text: 'B(1,1) -> B\'(-1,1)', correctZoneId: 'zone_sb_y', image: "/assets/images/coord_ref_y.png" },
        ],
    },

    // 4. Sifat Pangkat (Eksponen)
    // Pangkat nol dan pangkat negatif
    {
        id: 'math_hard_bil_024',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Perpangkatan',
        questionText: 'Tentukan hasil dari sifat perpangkatan berikut.',
        explanationText: 'Semua bilangan pangkat 0 hasilnya 1. Pangkat negatif menjadi pecahan (1/n).',
        zones: [
            { id: 'zone_satu', label: 'Hasilnya = 1' },
            { id: 'zone_pecahan', label: 'Hasilnya = Pecahan' },
        ],
        items: [
            { id: 'item_5_0', text: '5⁰', correctZoneId: 'zone_satu', image: "/assets/images/pow_5_0.png" },
            { id: 'item_100_0', text: '100⁰', correctZoneId: 'zone_satu', image: "/assets/images/pow_100_0.png" },
            { id: 'item_2_min1', text: '2⁻¹', correctZoneId: 'zone_pecahan', image: "/assets/images/pow_2_min1.png" },
            { id: 'item_10_min2', text: '10⁻²', correctZoneId: 'zone_pecahan', image: "/assets/images/pow_10_min2.png" },
        ],
    },

    // 5. Gradien Garis Lurus
    // Menentukan kemiringan positif/negatif
    {
        id: 'math_hard_grad_025',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Persamaan Garis',
        questionText: 'Tentukan jenis Gradien (Kemiringan) dari persamaan/gambar berikut.',
        explanationText: 'Gradien positif (m>0) garis naik ke kanan. Gradien negatif (m<0) garis turun ke kanan.',
        zones: [
            { id: 'zone_pos', label: 'Gradien Positif (Naik)' },
            { id: 'zone_neg', label: 'Gradien Negatif (Turun)' },
        ],
        items: [
            { id: 'item_y2x', text: 'y = 2x + 5', correctZoneId: 'zone_pos', image: "/assets/images/eq_pos_slope.png" },
            { id: 'item_img_up', text: 'Garis Miring ke Kanan Atas', correctZoneId: 'zone_pos', image: "/assets/images/line_up.png" },
            { id: 'item_ymin3x', text: 'y = -3x + 1', correctZoneId: 'zone_neg', image: "/assets/images/eq_neg_slope.png" },
            { id: 'item_img_down', text: 'Garis Miring ke Kanan Bawah', correctZoneId: 'zone_neg', image: "/assets/images/line_down.png" },
        ],
    },

    // 6. Fungsi Kuadrat (Parabola)
    // Karakteristik grafik terbuka ke atas/bawah
    {
        id: 'math_hard_func_026',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Fungsi Kuadrat',
        questionText: 'Bagaimana bentuk grafik fungsi kuadrat berdasarkan nilai a?',
        explanationText: 'Jika a > 0 grafik tersenyum (terbuka ke atas). Jika a < 0 grafik sedih (terbuka ke bawah).',
        zones: [
            { id: 'zone_atas', label: 'Terbuka ke Atas (Senyum)' },
            { id: 'zone_bawah', label: 'Terbuka ke Bawah (Sedih)' },
        ],
        items: [
            { id: 'item_x2', text: 'y = x²', correctZoneId: 'zone_atas', image: "/assets/images/parabola_up.png" },
            { id: 'item_a_pos', text: 'Nilai a > 0', correctZoneId: 'zone_atas', image: "/assets/images/a_gt_0.png" },
            { id: 'item_min_x2', text: 'y = -2x²', correctZoneId: 'zone_bawah', image: "/assets/images/parabola_down.png" },
            { id: 'item_a_neg', text: 'Nilai a < 0', correctZoneId: 'zone_bawah', image: "/assets/images/a_lt_0.png" },
        ],
    },

    // 7. Sudut Lingkaran
    // Hubungan sudut pusat dan keliling
    {
        id: 'math_hard_circ_027',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Lingkaran',
        questionText: 'Bedakan sifat Sudut Pusat dan Sudut Keliling lingkaran.',
        explanationText: 'Sudut Pusat titiknya di tengah lingkaran (2x Keliling). Sudut Keliling titiknya di pinggir (1/2 Pusat).',
        zones: [
            { id: 'zone_pusat', label: 'Sudut Pusat' },
            { id: 'zone_keliling', label: 'Sudut Keliling' },
        ],
        items: [
            { id: 'item_titik_o', text: 'Titik Sudut di Pusat (O)', correctZoneId: 'zone_pusat', image: "/assets/images/angle_center.png" },
            { id: 'item_2x', text: 'Besarnya = 2 x Sudut Keliling', correctZoneId: 'zone_pusat', image: "/assets/images/formula_2x.png" },
            { id: 'item_titik_busur', text: 'Titik Sudut di Busur', correctZoneId: 'zone_keliling', image: "/assets/images/angle_circum.png" },
            { id: 'item_half', text: 'Besarnya = 1/2 x Sudut Pusat', correctZoneId: 'zone_keliling', image: "/assets/images/formula_half.png" },
        ],
    },

    // 8. Kesebangunan vs Kongruensi
    {
        id: 'math_hard_cong_028',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Kesebangunan',
        questionText: 'Tentukan pasangan benda berikut Kongruen (Sama Persis) atau Sebangun (Proporsional).',
        explanationText: 'Kongruen ukurannya sama persis. Sebangun bentuknya sama tapi ukurannya beda (perbesaran).',
        zones: [
            { id: 'zone_kongruen', label: 'Kongruen (Sama & Sebangun)' },
            { id: 'zone_sebangun', label: 'Sebangun (Beda Ukuran)' },
        ],
        items: [
            { id: 'item_uamg', text: 'Dua Koin Rp500', correctZoneId: 'zone_kongruen', image: "/assets/images/coins_500.png" },
            { id: 'item_ubin', text: 'Dua Ubin Lantai 30x30', correctZoneId: 'zone_kongruen', image: "/assets/images/tiles.png" },
            { id: 'item_foto', text: 'Pasfoto 2x3 dan 4x6', correctZoneId: 'zone_sebangun', image: "/assets/images/photos.png" },
            { id: 'item_mobil', text: 'Mobil Asli vs Mainan', correctZoneId: 'zone_sebangun', image: "/assets/images/car_toy.png" },
        ],
    },

    // 9. Volume Bangun Ruang Sisi Lengkung
    // Rumus Tabung vs Kerucut
    {
        id: 'math_hard_vol_029',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Bangun Ruang',
        questionText: 'Pasangkan rumus volume untuk Tabung dan Kerucut.',
        explanationText: 'Tabung = Luas Alas x Tinggi. Kerucut = 1/3 x Luas Alas x Tinggi (karena runcing).',
        zones: [
            { id: 'zone_tabung', label: 'Volume Tabung' },
            { id: 'zone_kerucut', label: 'Volume Kerucut' },
        ],
        items: [
            { id: 'item_pr2t', text: 'π r² t', correctZoneId: 'zone_tabung', image: "/assets/images/form_cylinder.png" },
            { id: 'item_alas_t', text: 'Luas Alas x Tinggi', correctZoneId: 'zone_tabung', image: "/assets/images/form_base_height.png" },
            { id: 'item_third', text: '1/3 π r² t', correctZoneId: 'zone_kerucut', image: "/assets/images/form_cone.png" },
            { id: 'item_tumpeng', text: 'Volume Tumpeng', correctZoneId: 'zone_kerucut', image: "/assets/images/cone_object.png" },
        ],
    },

    // 10. Peluang Teoretik vs Empirik
    {
        id: 'math_hard_prob_030',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'hard',
        topic: 'Peluang',
        questionText: 'Bedakan antara Peluang Teoretik (Rumus) dan Peluang Empirik (Percobaan).',
        explanationText: 'Teoretik berdasarkan rumus n(A)/n(S). Empirik berdasarkan data hasil percobaan nyata.',
        zones: [
            { id: 'zone_teori', label: 'Peluang Teoretik' },
            { id: 'zone_empirik', label: 'Peluang Empirik' },
        ],
        items: [
            { id: 'item_rumus', text: 'P(A) = n(A) / n(S)', correctZoneId: 'zone_teori', image: "/assets/images/prob_formula.png" },
            { id: 'item_logika', text: 'Peluang Dadu Ganjil = 3/6', correctZoneId: 'zone_teori', image: "/assets/images/prob_logic.png" },
            { id: 'item_coba', text: 'Hasil Pelemparan 100x', correctZoneId: 'zone_empirik', image: "/assets/images/prob_trial.png" },
            { id: 'item_freq', text: 'Frekuensi Relatif', correctZoneId: 'zone_empirik', image: "/assets/images/rel_freq.png" },
        ],
    },
];