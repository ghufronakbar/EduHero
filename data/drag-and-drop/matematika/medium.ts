import { SeedDragAndDrop } from "@/types/seed";

export const dragAndDropMatematikaMedium: SeedDragAndDrop[] = [
    // 1. Suku Sejenis (Aljabar)
    {
        id: 'math_med_alj_011',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Operasi Aljabar',
        questionText: 'Pasangkan suku-suku berikut. Apakah mereka Suku Sejenis atau Tidak Sejenis?',
        explanationText: 'Suku sejenis memiliki variabel dan pangkat yang sama persis (contoh: 2x dan 5x).',
        zones: [
            { id: 'zone_sejenis', label: 'Suku Sejenis' },
            { id: 'zone_tak_sejenis', label: 'Tidak Sejenis' },
        ],
        items: [
            { id: 'item_x_5x', text: 'x dan 5x', correctZoneId: 'zone_sejenis', image: "/assets/images/alg_like_x.png" },
            { id: 'item_y2_3y2', text: 'y² dan 3y²', correctZoneId: 'zone_sejenis', image: "/assets/images/alg_like_y2.png" },
            { id: 'item_x_y', text: 'x dan y', correctZoneId: 'zone_tak_sejenis', image: "/assets/images/alg_diff_var.png" },
            { id: 'item_x_x2', text: 'x dan x²', correctZoneId: 'zone_tak_sejenis', image: "/assets/images/alg_diff_pow.png" },
        ],
    },

    // 2. Kuadran Koordinat Kartesius
    {
        id: 'math_med_koor_012',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Sistem Koordinat',
        questionText: 'Tentukan letak titik-titik koordinat berikut (Kuadran I atau Kuadran III).',
        explanationText: 'Kuadran I: x positif, y positif (+, +). Kuadran III: x negatif, y negatif (-, -).',
        zones: [
            { id: 'zone_k1', label: 'Kuadran I (+, +)' },
            { id: 'zone_k3', label: 'Kuadran III (-, -)' },
        ],
        items: [
            { id: 'item_2_3', text: '(2, 3)', correctZoneId: 'zone_k1', image: "/assets/images/point_2_3.png" },
            { id: 'item_5_1', text: '(5, 1)', correctZoneId: 'zone_k1', image: "/assets/images/point_5_1.png" },
            { id: 'item_min2_min4', text: '(-2, -4)', correctZoneId: 'zone_k3', image: "/assets/images/point_min2_min4.png" },
            { id: 'item_min5_min1', text: '(-5, -1)', correctZoneId: 'zone_k3', image: "/assets/images/point_min5_min1.png" },
        ],
    },

    // 3. Himpunan (Terhingga vs Tak Terhingga)
    {
        id: 'math_med_set_013',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Himpunan',
        questionText: 'Kelompokkan himpunan berikut berdasarkan jumlah anggotanya.',
        explanationText: 'Himpunan berhingga jumlahnya bisa dihitung (Finite). Tak berhingga jumlahnya tidak terbatas (Infinite).',
        zones: [
            { id: 'zone_finite', label: 'Himpunan Berhingga' },
            { id: 'zone_infinite', label: 'Himpunan Tak Berhingga' },
        ],
        items: [
            { id: 'item_hari', text: 'Nama Hari dalam Seminggu', correctZoneId: 'zone_finite', image: "/assets/images/days_set.png" },
            { id: 'item_siswa', text: 'Siswa di Kelasmu', correctZoneId: 'zone_finite', image: "/assets/images/students_set.png" },
            { id: 'item_asli', text: 'Bilangan Asli (1,2,3...)', correctZoneId: 'zone_infinite', image: "/assets/images/natural_nums.png" },
            { id: 'item_ganjil', text: 'Bilangan Ganjil', correctZoneId: 'zone_infinite', image: "/assets/images/odd_nums.png" },
        ],
    },

    // 4. Garis (Sejajar vs Tegak Lurus)
    {
        id: 'math_med_line_014',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Persamaan Garis Lurus',
        questionText: 'Tentukan hubungan pasangan garis berikut.',
        explanationText: 'Garis sejajar tidak pernah bertemu (Rel Kereta). Garis tegak lurus membentuk sudut 90° (Pojok Lantai).',
        zones: [
            { id: 'zone_sejajar', label: 'Garis Sejajar' },
            { id: 'zone_tegak', label: 'Garis Tegak Lurus' },
        ],
        items: [
            { id: 'item_rel', text: 'Rel Kereta Api', correctZoneId: 'zone_sejajar', image: "/assets/images/railroad.png" },
            { id: 'item_equal_m', text: 'y = 2x dan y = 2x + 5', correctZoneId: 'zone_sejajar', image: "/assets/images/parallel_eq.png" },
            { id: 'item_pojok', text: 'Pojok Bingkai Foto', correctZoneId: 'zone_tegak', image: "/assets/images/photo_frame.png" },
            { id: 'item_cross', text: 'Sumbu X dan Y', correctZoneId: 'zone_tegak', image: "/assets/images/xy_axis.png" },
        ],
    },

    // 5. Tripel Pythagoras
    {
        id: 'math_med_pyth_015',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Teorema Pythagoras',
        questionText: 'Manakah kelompok tiga bilangan yang membentuk Segitiga Siku-siku (Tripel Pythagoras)?',
        explanationText: 'Berlaku a² + b² = c². Contoh: 3² + 4² = 9 + 16 = 25 (5²).',
        zones: [
            { id: 'zone_triple', label: 'Tripel Pythagoras' },
            { id: 'zone_not', label: 'Bukan Tripel' },
        ],
        items: [
            { id: 'item_345', text: '3, 4, 5', correctZoneId: 'zone_triple', image: "/assets/images/tri_345.png" },
            { id: 'item_51213', text: '5, 12, 13', correctZoneId: 'zone_triple', image: "/assets/images/tri_51213.png" },
            { id: 'item_234', text: '2, 3, 4', correctZoneId: 'zone_not', image: "/assets/images/tri_234.png" },
            { id: 'item_555', text: '5, 5, 5', correctZoneId: 'zone_not', image: "/assets/images/tri_555.png" },
        ],
    },

    // 6. Unsur Lingkaran (Garis vs Luasan)
    {
        id: 'math_med_circle_016',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Lingkaran',
        questionText: 'Pisahkan unsur lingkaran yang berupa Garis dan berupa Daerah (Luasan).',
        explanationText: 'Jari-jari adalah garis. Juring adalah daerah (seperti potongan pizza).',
        zones: [
            { id: 'zone_garis', label: 'Unsur Garis' },
            { id: 'zone_luas', label: 'Unsur Daerah' },
        ],
        items: [
            { id: 'item_jari', text: 'Jari-jari', correctZoneId: 'zone_garis', image: "/assets/images/radius.png" },
            { id: 'item_tali', text: 'Tali Busur', correctZoneId: 'zone_garis', image: "/assets/images/chord.png" },
            { id: 'item_juring', text: 'Juring (Potongan Pizza)', correctZoneId: 'zone_luas', image: "/assets/images/sector.png" },
            { id: 'item_tembereng', text: 'Tembereng', correctZoneId: 'zone_luas', image: "/assets/images/segment.png" },
        ],
    },

    // 7. Fungsi (Domain vs Kodomain)
    {
        id: 'math_med_func_017',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Relasi dan Fungsi',
        questionText: 'Dalam diagram panah fungsi, tentukan mana Daerah Asal dan Daerah Kawan.',
        explanationText: 'Domain adalah daerah asal (kiri). Kodomain adalah daerah kawan (kanan).',
        zones: [
            { id: 'zone_domain', label: 'Domain (Asal)' },
            { id: 'zone_kodomain', label: 'Kodomain (Kawan)' },
        ],
        items: [
            { id: 'item_input', text: 'Input (Masukan)', correctZoneId: 'zone_domain', image: "/assets/images/input_box.png" },
            { id: 'item_x', text: 'Himpunan A (Kiri)', correctZoneId: 'zone_domain', image: "/assets/images/set_a.png" },
            { id: 'item_output', text: 'Output (Keluaran)', correctZoneId: 'zone_kodomain', image: "/assets/images/output_box.png" },
            { id: 'item_y', text: 'Himpunan B (Kanan)', correctZoneId: 'zone_kodomain', image: "/assets/images/set_b.png" },
        ],
    },

    // 8. Statistika (Pemusatan vs Penyebaran)
    {
        id: 'math_med_stat_018',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Statistika',
        questionText: 'Kelompokkan ukuran statistik berikut.',
        explanationText: 'Mean/Rata-rata adalah ukuran pemusatan. Jangkauan (Range) adalah ukuran penyebaran data.',
        zones: [
            { id: 'zone_pusat', label: 'Ukuran Pemusatan' },
            { id: 'zone_sebar', label: 'Ukuran Penyebaran' },
        ],
        items: [
            { id: 'item_mean', text: 'Mean (Rata-rata)', correctZoneId: 'zone_pusat', image: "/assets/images/mean_icon.png" },
            { id: 'item_median', text: 'Median (Nilai Tengah)', correctZoneId: 'zone_pusat', image: "/assets/images/median_icon.png" },
            { id: 'item_range', text: 'Jangkauan (Range)', correctZoneId: 'zone_sebar', image: "/assets/images/range_icon.png" },
            { id: 'item_kuartil', text: 'Kuartil', correctZoneId: 'zone_sebar', image: "/assets/images/quartile_icon.png" },
        ],
    },

    // 9. Bangun Ruang (Prisma vs Limas)
    {
        id: 'math_med_geo_019',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Bangun Ruang Sisi Datar',
        questionText: 'Bedakan bangun ruang berikut: Prisma (alas & tutup sama) atau Limas (puncaknya runcing).',
        explanationText: 'Prisma memiliki alas dan tutup yang kongruen. Limas memiliki titik puncak.',
        zones: [
            { id: 'zone_prisma', label: 'Prisma' },
            { id: 'zone_limas', label: 'Limas' },
        ],
        items: [
            { id: 'item_kubus', text: 'Kubus / Balok', correctZoneId: 'zone_prisma', image: "/assets/images/cube.png" },
            { id: 'item_tenda', text: 'Tenda (Prisma Segitiga)', correctZoneId: 'zone_prisma', image: "/assets/images/tent.png" },
            { id: 'item_piramid', text: 'Piramida Mesir', correctZoneId: 'zone_limas', image: "/assets/images/pyramid.png" },
            { id: 'item_tumpeng', text: 'Nasi Tumpeng (Limas/Kerucut)', correctZoneId: 'zone_limas', image: "/assets/images/tumpeng.png" },
        ],
    },

    // 10. Peluang (Pasti vs Mustahil)
    {
        id: 'math_med_prob_020',
        type: 'drag_and_drop',
        category: 'matematika',
        difficulty: 'medium',
        topic: 'Peluang',
        questionText: 'Tentukan apakah kejadian ini Pasti Terjadi (Peluang=1) atau Mustahil (Peluang=0).',
        explanationText: 'Kejadian pasti contohnya matahari terbit. Kejadian mustahil contohnya dadu bermata 7.',
        zones: [
            { id: 'zone_pasti', label: 'Pasti Terjadi' },
            { id: 'zone_mustahil', label: 'Mustahil' },
        ],
        items: [
            { id: 'item_siang', text: 'Setelah Pagi adalah Siang', correctZoneId: 'zone_pasti', image: "/assets/images/day_cycle.png" },
            { id: 'item_maut', text: 'Manusia akan Meninggal', correctZoneId: 'zone_pasti', image: "/assets/images/life_cycle.png" },
            { id: 'item_dadu7', text: 'Melempar Dadu Muncul Angka 7', correctZoneId: 'zone_mustahil', image: "/assets/images/dice_7.png" },
            { id: 'item_kucing_terbang', text: 'Kucing Bisa Terbang', correctZoneId: 'zone_mustahil', image: "/assets/images/flying_cat.png" },
        ],
    },
];