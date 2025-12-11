import { SeedDragAndDrop } from "@/types/seed";

export const dragAndDropSainsMedium: SeedDragAndDrop[] = [
    // 1. Bagian Mikroskop (Optik vs Mekanik)
    {
        id: 'bio_smp7_microscope_011',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'medium',
        topic: 'Pengamatan Gejala Alam',
        questionText: 'Kelompokkan bagian mikroskop berdasarkan fungsinya (Optik vs Mekanik).',
        explanationText: 'Bagian Optik berhubungan dengan lensa dan cahaya. Bagian Mekanik untuk menggerakkan alat.',
        zones: [
            { id: 'zone_optik', label: 'Bagian Optik' },
            { id: 'zone_mekanik', label: 'Bagian Mekanik' },
        ],
        items: [
            { id: 'item_okuler', text: 'Lensa Okuler', correctZoneId: 'zone_optik', image: "/assets/images/lensa_okuler.png" },
            { id: 'item_objektif', text: 'Lensa Objektif', correctZoneId: 'zone_optik', image: "/assets/images/lensa_objektif.png" },
            { id: 'item_revolver', text: 'Revolver', correctZoneId: 'zone_mekanik', image: "/assets/images/revolver.png" },
            { id: 'item_makro', text: 'Pemutar Kasar', correctZoneId: 'zone_mekanik', image: "/assets/images/makrometer.png" },
        ],
    },

    // 2. Sel Hewan vs Sel Tumbuhan
    {
        id: 'bio_smp7_sel_012',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'medium',
        topic: 'Organisasi Kehidupan',
        questionText: 'Tentukan organel mana yang HANYA dimiliki Sel Tumbuhan atau Sel Hewan.',
        explanationText: 'Dinding sel dan Kloroplas khas tumbuhan. Sentriol dan Lisosom umumnya pada hewan.',
        zones: [
            { id: 'zone_tumbuhan', label: 'Khas Tumbuhan' },
            { id: 'zone_hewan', label: 'Khas Hewan' },
        ],
        items: [
            { id: 'item_dinding', text: 'Dinding Sel', correctZoneId: 'zone_tumbuhan', image: "/assets/images/dinding_sel.png" },
            { id: 'item_kloroplas', text: 'Kloroplas', correctZoneId: 'zone_tumbuhan', image: "/assets/images/kloroplas.png" },
            { id: 'item_sentriol', text: 'Sentriol', correctZoneId: 'zone_hewan', image: "/assets/images/sentriol.png" },
            { id: 'item_lisosom', text: 'Lisosom', correctZoneId: 'zone_hewan', image: "/assets/images/lisosom.png" },
        ],
    },

    // 3. Simbiosis (Mutualisme vs Parasitisme)
    {
        id: 'bio_smp7_simbiosis_013',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'medium',
        topic: 'Interaksi Makhluk Hidup',
        questionText: 'Kelompokkan hubungan makhluk hidup berikut ke dalam simbiosis yang tepat.',
        explanationText: 'Mutualisme saling menguntungkan. Parasitisme satu untung, satu rugi.',
        zones: [
            { id: 'zone_mutual', label: 'Mutualisme' },
            { id: 'zone_parasit', label: 'Parasitisme' },
        ],
        items: [
            { id: 'item_lebah', text: 'Lebah & Bunga', correctZoneId: 'zone_mutual', image: "/assets/images/lebah_bunga.png" },
            { id: 'item_jalak', text: 'Kerbau & Jalak', correctZoneId: 'zone_mutual', image: "/assets/images/jalak_kerbau.png" },
            { id: 'item_kutu', text: 'Kutu & Manusia', correctZoneId: 'zone_parasit', image: "/assets/images/kutu_rambut.png" },
            { id: 'item_benalu', text: 'Benalu & Pohon', correctZoneId: 'zone_parasit', image: "/assets/images/benalu.png" },
        ],
    },

    // 4. Tingkatan Organisasi (Jaringan vs Organ)
    {
        id: 'bio_smp7_organisasi_014',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'medium',
        topic: 'Organisasi Kehidupan',
        questionText: 'Pisahkan antara Jaringan (kumpulan sel) dan Organ (kumpulan jaringan).',
        explanationText: 'Xilem dan Epidermis adalah jaringan. Jantung dan Daun adalah organ.',
        zones: [
            { id: 'zone_jaringan', label: 'Jaringan' },
            { id: 'zone_organ', label: 'Organ' },
        ],
        items: [
            { id: 'item_xilem', text: 'Xilem', correctZoneId: 'zone_jaringan', image: "/assets/images/xilem.png" },
            { id: 'item_epidermis', text: 'Epidermis', correctZoneId: 'zone_jaringan', image: "/assets/images/epidermis.png" },
            { id: 'item_jantung', text: 'Jantung', correctZoneId: 'zone_organ', image: "/assets/images/jantung.png" },
            { id: 'item_daun', text: 'Daun', correctZoneId: 'zone_organ', image: "/assets/images/daun.png" },
        ],
    },

    // 5. Kingdom (Monera vs Fungi)
    {
        id: 'bio_smp7_kingdom_015',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'medium',
        topic: 'Klasifikasi Makhluk Hidup',
        questionText: 'Kelompokkan organisme berikut ke Kingdom Monera atau Fungi.',
        explanationText: 'Monera adalah organisme uniseluler prokariotik (Bakteri). Fungi adalah jamur.',
        zones: [
            { id: 'zone_monera', label: 'Kingdom Monera' },
            { id: 'zone_fungi', label: 'Kingdom Fungi' },
        ],
        items: [
            { id: 'item_ecoli', text: 'Bakteri E.Coli', correctZoneId: 'zone_monera', image: "/assets/images/bakteri.png" },
            { id: 'item_cyan', text: 'Alga Biru', correctZoneId: 'zone_monera', image: "/assets/images/cyanobacteria.png" },
            { id: 'item_tiram', text: 'Jamur Tiram', correctZoneId: 'zone_fungi', image: "/assets/images/jamur_tiram.png" },
            { id: 'item_ragi', text: 'Ragi (Yeast)', correctZoneId: 'zone_fungi', image: "/assets/images/ragi.png" },
        ],
    },

    // 6. Pencemaran Lingkungan (Air vs Udara)
    {
        id: 'bio_smp7_cemar_016',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'medium',
        topic: 'Pencemaran Lingkungan',
        questionText: 'Kelompokkan penyebab pencemaran berdasarkan lokasinya.',
        explanationText: 'CFC dan Karbon Monoksida mencemari udara. Limbah pabrik dan tumpahan minyak mencemari air.',
        zones: [
            { id: 'zone_udara', label: 'Pencemaran Udara' },
            { id: 'zone_air', label: 'Pencemaran Air' },
        ],
        items: [
            { id: 'item_cfc', text: 'Gas CFC (Freon)', correctZoneId: 'zone_udara', image: "/assets/images/cfc.png" },
            { id: 'item_asap', text: 'Asap Knalpot', correctZoneId: 'zone_udara', image: "/assets/images/asap_motor.png" },
            { id: 'item_limbah', text: 'Limbah Detergen', correctZoneId: 'zone_air', image: "/assets/images/busa_sungai.png" },
            { id: 'item_minyak', text: 'Tumpahan Minyak', correctZoneId: 'zone_air', image: "/assets/images/minyak_laut.png" },
        ],
    },

    // 7. Organ Sistem Pencernaan vs Pernapasan
    {
        id: 'bio_smp7_sistem_017',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'medium',
        topic: 'Sistem Organ Manusia',
        questionText: 'Kelompokkan organ berikut ke dalam sistem organ yang tepat.',
        explanationText: 'Trakea dan Paru-paru untuk napas. Kerongkongan dan Lambung untuk cerna makanan.',
        zones: [
            { id: 'zone_napas', label: 'Sistem Pernapasan' },
            { id: 'zone_cerna', label: 'Sistem Pencernaan' },
        ],
        items: [
            { id: 'item_trakea', text: 'Trakea', correctZoneId: 'zone_napas', image: "/assets/images/trakea.png" },
            { id: 'item_paru', text: 'Paru-paru', correctZoneId: 'zone_napas', image: "/assets/images/paru_paru.png" },
            { id: 'item_lambung', text: 'Lambung', correctZoneId: 'zone_cerna', image: "/assets/images/lambung.png" },
            { id: 'item_usus', text: 'Usus Halus', correctZoneId: 'zone_cerna', image: "/assets/images/usus_halus.png" },
        ],
    },

    // 8. Fungsi Darah (Sel Merah vs Sel Putih)
    {
        id: 'bio_smp7_darah_018',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'medium',
        topic: 'Sistem Transportasi',
        questionText: 'Hubungkan ciri/fungsi berikut dengan jenis sel darah yang sesuai.',
        explanationText: 'Sel darah merah mengandung hemoglobin untuk O2. Sel darah putih menghasilkan antibodi.',
        zones: [
            { id: 'zone_eritrosit', label: 'Sel Darah Merah' },
            { id: 'zone_leukosit', label: 'Sel Darah Putih' },
        ],
        items: [
            { id: 'item_hb', text: 'Hemoglobin', correctZoneId: 'zone_eritrosit', image: "/assets/images/hemoglobin.png" },
            { id: 'item_o2', text: 'Angkut Oksigen', correctZoneId: 'zone_eritrosit', image: "/assets/images/oksigen.png" },
            { id: 'item_kuman', text: 'Makan Bakteri', correctZoneId: 'zone_leukosit', image: "/assets/images/phagocyte.png" },
            { id: 'item_antibodi', text: 'Antibodi', correctZoneId: 'zone_leukosit', image: "/assets/images/antibodi.png" },
        ],
    },

    // 9. Interaksi: Kompetisi vs Predasi
    {
        id: 'bio_smp7_interaksi_019',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'medium',
        topic: 'Interaksi Ekosistem',
        questionText: 'Tentukan jenis interaksi antar organisme berikut.',
        explanationText: 'Predasi adalah makan-memakan. Kompetisi adalah bersaing memperebutkan sumber daya.',
        zones: [
            { id: 'zone_predasi', label: 'Predasi' },
            { id: 'zone_kompetisi', label: 'Kompetisi' },
        ],
        items: [
            { id: 'item_singa_rusa', text: 'Singa & Rusa', correctZoneId: 'zone_predasi', image: "/assets/images/singa_rusa.png" },
            { id: 'item_ular_tikus', text: 'Ular & Tikus', correctZoneId: 'zone_predasi', image: "/assets/images/ular_tikus.png" },
            { id: 'item_sapi_kambing', text: 'Sapi & Kambing', correctZoneId: 'zone_kompetisi', image: "/assets/images/sapi_kambing.png" },
            { id: 'item_padi_gulma', text: 'Padi & Gulma', correctZoneId: 'zone_kompetisi', image: "/assets/images/padi_gulma.png" },
        ],
    },

    // 10. Bagian Daun: Stomata vs Klorofil
    {
        id: 'bio_smp7_daun_020',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'medium',
        topic: 'Jaringan Tumbuhan',
        questionText: 'Kelompokkan fungsi/ciri berikut ke struktur daun yang tepat.',
        explanationText: 'Stomata untuk pertukaran gas. Klorofil adalah zat hijau untuk fotosintesis.',
        zones: [
            { id: 'zone_stomata', label: 'Stomata (Mulut Daun)' },
            { id: 'zone_klorofil', label: 'Klorofil' },
        ],
        items: [
            { id: 'item_gas', text: 'Pertukaran Gas', correctZoneId: 'zone_stomata', image: "/assets/images/gas_exchange.png" },
            { id: 'item_lubang', text: 'Celah Kecil', correctZoneId: 'zone_stomata', image: "/assets/images/stomata_micro.png" },
            { id: 'item_hijau', text: 'Warna Hijau', correctZoneId: 'zone_klorofil', image: "/assets/images/daun_hijau.png" },
            { id: 'item_cahaya', text: 'Serap Cahaya', correctZoneId: 'zone_klorofil', image: "/assets/images/fotosintesis.png" },
        ],
    },
];