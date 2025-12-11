import { SeedDragAndDrop } from "@/types/seed";

export const dragAndDropSainsHard: SeedDragAndDrop[] = [
    // 1. Reaksi Fotosintesis (Reaktan vs Produk)
    // Tingkat kesulitan: Hard karena melibatkan pemahaman reaksi kimia sederhana
    {
        id: 'bio_smp7_foto_021',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'hard',
        topic: 'Energi dalam Sistem Kehidupan',
        questionText: 'Susunlah komponen reaksi Fotosintesis berikut ini.',
        explanationText: 'Tumbuhan membutuhkan CO2 dan Air (Bahan). Menghasilkan Glukosa dan Oksigen (Hasil).',
        zones: [
            { id: 'zone_reaktan', label: 'Bahan (Input)' },
            { id: 'zone_produk', label: 'Hasil (Output)' },
        ],
        items: [
            { id: 'item_co2', text: 'Karbon Dioksida (CO2)', correctZoneId: 'zone_reaktan', image: "/assets/images/co2_molecule.png" },
            { id: 'item_h2o', text: 'Air (H2O)', correctZoneId: 'zone_reaktan', image: "/assets/images/water_drop.png" },
            { id: 'item_c6h12o6', text: 'Glukosa (C6H12O6)', correctZoneId: 'zone_produk', image: "/assets/images/glucose.png" },
            { id: 'item_o2', text: 'Oksigen (O2)', correctZoneId: 'zone_produk', image: "/assets/images/oxygen_gas.png" },
        ],
    },

    // 2. Jaringan Pengangkut (Xilem vs Floem)
    // Siswa sering terbalik antara fungsi mengangkut air vs hasil fotosintesis
    {
        id: 'bio_smp7_jaringan_022',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'hard',
        topic: 'Jaringan Tumbuhan',
        questionText: 'Tentukan fungsi dan arah angkut dari jaringan pengangkut berikut.',
        explanationText: 'Xilem mengangkut air dari akar ke atas. Floem mengedarkan hasil fotosintesis dari daun ke seluruh tubuh.',
        zones: [
            { id: 'zone_xilem', label: 'Pembuluh Kayu (Xilem)' },
            { id: 'zone_floem', label: 'Pembuluh Tapis (Floem)' },
        ],
        items: [
            { id: 'item_air_mineral', text: 'Angkut Air & Mineral', correctZoneId: 'zone_xilem', image: "/assets/images/water_flow.png" },
            { id: 'item_fotosintat', text: 'Angkut Hasil Fotosintesis', correctZoneId: 'zone_floem', image: "/assets/images/sugar_flow.png" },
            { id: 'item_arah_atas', text: 'Arah Akar ke Daun', correctZoneId: 'zone_xilem', image: "/assets/images/arrow_up.png" },
            { id: 'item_arah_sebar', text: 'Arah Daun ke Seluruh Tubuh', correctZoneId: 'zone_floem', image: "/assets/images/arrow_spread.png" },
        ],
    },

    // 3. Mekanisme Pernapasan (Inspirasi vs Ekspirasi)
    // Melibatkan logika tekanan udara dan posisi otot
    {
        id: 'bio_smp7_napas_023',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'hard',
        topic: 'Sistem Pernapasan',
        questionText: 'Apa yang terjadi pada tubuh saat menarik napas (Inspirasi) dan membuang napas (Ekspirasi)?',
        explanationText: 'Saat inspirasi, diafragma mendatar (kontraksi) & rongga dada membesar. Saat ekspirasi, diafragma melengkung (relaksasi).',
        zones: [
            { id: 'zone_inspirasi', label: 'Inspirasi (Masuk)' },
            { id: 'zone_ekspirasi', label: 'Ekspirasi (Keluar)' },
        ],
        items: [
            { id: 'item_diafragma_datar', text: 'Diafragma Mendatar', correctZoneId: 'zone_inspirasi', image: "/assets/images/diaphragm_flat.png" },
            { id: 'item_dada_besar', text: 'Rongga Dada Membesar', correctZoneId: 'zone_inspirasi', image: "/assets/images/chest_expand.png" },
            { id: 'item_diafragma_lengkung', text: 'Diafragma Melengkung', correctZoneId: 'zone_ekspirasi', image: "/assets/images/diaphragm_dome.png" },
            { id: 'item_tekanan_tinggi', text: 'Tekanan Paru-paru Tinggi', correctZoneId: 'zone_ekspirasi', image: "/assets/images/pressure_high.png" },
        ],
    },

    // 4. Perkembangbiakan Vegetatif Alami (Rhizoma vs Stolon)
    // Mengharuskan siswa hafal contoh spesifik tanaman
    {
        id: 'bio_smp7_vegetatif_024',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'hard',
        topic: 'Reproduksi Tumbuhan',
        questionText: 'Kelompokkan tanaman berikut berdasarkan cara perkembangbiakan vegetatif alaminya.',
        explanationText: 'Jahe dan Kunyit dengan Rhizoma (Akar Tinggal). Stroberi dan Pegagan dengan Stolon (Geragih).',
        zones: [
            { id: 'zone_rhizoma', label: 'Rhizoma (Akar Tinggal)' },
            { id: 'zone_stolon', label: 'Stolon (Geragih)' },
        ],
        items: [
            { id: 'item_jahe', text: 'Jahe', correctZoneId: 'zone_rhizoma', image: "/assets/images/ginger.png" },
            { id: 'item_stroberi', text: 'Stroberi', correctZoneId: 'zone_stolon', image: "/assets/images/strawberry_plant.png" },
            { id: 'item_kunyit', text: 'Kunyit', correctZoneId: 'zone_rhizoma', image: "/assets/images/turmeric.png" },
            { id: 'item_pegagan', text: 'Pegagan (Antanan)', correctZoneId: 'zone_stolon', image: "/assets/images/pegagan.png" },
        ],
    },

    // 5. Perubahan Fisika vs Kimia
    // Konsep abstrak tentang perubahan struktur zat
    {
        id: 'bio_smp7_perubahan_025',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'hard',
        topic: 'Zat dan Perubahannya',
        questionText: 'Tentukan apakah peristiwa berikut termasuk Perubahan Fisika atau Kimia.',
        explanationText: 'Fisika tidak menghasilkan zat baru (Es mencair). Kimia menghasilkan zat baru (Nasi basi, Besi berkarat).',
        zones: [
            { id: 'zone_fisika', label: 'Perubahan Fisika' },
            { id: 'zone_kimia', label: 'Perubahan Kimia' },
        ],
        items: [
            { id: 'item_lilin', text: 'Lilin Meleleh', correctZoneId: 'zone_fisika', image: "/assets/images/melting_candle.png" },
            { id: 'item_gula', text: 'Gula Larut Air', correctZoneId: 'zone_fisika', image: "/assets/images/sugar_water.png" },
            { id: 'item_fermentasi', text: 'Singkong jadi Tape', correctZoneId: 'zone_kimia', image: "/assets/images/tape.png" },
            { id: 'item_karat', text: 'Besi Berkarat', correctZoneId: 'zone_kimia', image: "/assets/images/rusty_iron.png" },
        ],
    },

    // 6. Pembuluh Darah (Arteri vs Vena)
    // Detail karakteristik dinding dan tekanan
    {
        id: 'bio_smp7_darah_026',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'hard',
        topic: 'Sistem Peredaran Darah',
        questionText: 'Bandingkan karakteristik Pembuluh Nadi (Arteri) dan Pembuluh Balik (Vena).',
        explanationText: 'Arteri dindingnya tebal & elastis, aliran cepat. Vena dindingnya tipis & punya katup.',
        zones: [
            { id: 'zone_arteri', label: 'Arteri (Nadi)' },
            { id: 'zone_vena', label: 'Vena (Balik)' },
        ],
        items: [
            { id: 'item_tebal', text: 'Dinding Tebal & Elastis', correctZoneId: 'zone_arteri', image: "/assets/images/thick_wall.png" },
            { id: 'item_denyut', text: 'Denyut Terasa', correctZoneId: 'zone_arteri', image: "/assets/images/pulse.png" },
            { id: 'item_katup', text: 'Banyak Katup', correctZoneId: 'zone_vena', image: "/assets/images/valves.png" },
            { id: 'item_tipis', text: 'Dinding Tipis', correctZoneId: 'zone_vena', image: "/assets/images/thin_wall.png" },
        ],
    },

    // 7. Sel Prokariotik vs Eukariotik
    // Konsep mikrobiologi tingkat lanjut
    {
        id: 'bio_smp7_sel_027',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'hard',
        topic: 'Sistem Organisasi Kehidupan',
        questionText: 'Kelompokkan organisme berdasarkan tipe selnya (Ada/Tidak Membran Inti).',
        explanationText: 'Prokariotik tidak punya membran inti (Bakteri). Eukariotik punya membran inti (Hewan, Tumbuhan, Jamur).',
        zones: [
            { id: 'zone_prokariot', label: 'Prokariotik (Tanpa Membran Inti)' },
            { id: 'zone_eukariot', label: 'Eukariotik (Punya Membran Inti)' },
        ],
        items: [
            { id: 'item_bakteri', text: 'Bakteri Lactobacillus', correctZoneId: 'zone_prokariot', image: "/assets/images/bacteria.png" },
            { id: 'item_ganggang_biru', text: 'Ganggang Biru', correctZoneId: 'zone_prokariot', image: "/assets/images/cyanobacteria.png" },
            { id: 'item_amoeba', text: 'Amoeba', correctZoneId: 'zone_eukariot', image: "/assets/images/amoeba.png" },
            { id: 'item_jamur', text: 'Jamur Roti', correctZoneId: 'zone_eukariot', image: "/assets/images/mold.png" },
        ],
    },

    // 8. Enzim Pencernaan (Lambung vs Mulut)
    // Menghafal nama enzim dan substratnya
    {
        id: 'bio_smp7_enzim_028',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'hard',
        topic: 'Sistem Pencernaan',
        questionText: 'Tempatkan enzim berikut sesuai organ penghasilnya.',
        explanationText: 'Mulut menghasilkan Ptialin (Amilase). Lambung menghasilkan Pepsin dan Renin.',
        zones: [
            { id: 'zone_mulut', label: 'Mulut (Kelenjar Ludah)' },
            { id: 'zone_lambung', label: 'Lambung' },
        ],
        items: [
            { id: 'item_ptialin', text: 'Enzim Ptialin', correctZoneId: 'zone_mulut', image: "/assets/images/saliva.png" },
            { id: 'item_amilum', text: 'Ubah Amilum -> Gula', correctZoneId: 'zone_mulut', image: "/assets/images/starch_sugar.png" },
            { id: 'item_pepsin', text: 'Enzim Pepsin', correctZoneId: 'zone_lambung', image: "/assets/images/stomach_acid.png" },
            { id: 'item_protein', text: 'Ubah Protein -> Pepton', correctZoneId: 'zone_lambung', image: "/assets/images/protein_breakdown.png" },
        ],
    },

    // 9. Gerak Tumbuhan (Fototropisme vs Geotropisme)
    // Membedakan rangsangan cahaya dan gravitasi
    {
        id: 'bio_smp7_gerak_029',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'hard',
        topic: 'Gerak pada Makhluk Hidup',
        questionText: 'Tentukan jenis gerak tumbuhan berdasarkan rangsangannya.',
        explanationText: 'Fototropisme dipengaruhi cahaya (ujung batang). Geotropisme dipengaruhi gravitasi (ujung akar).',
        zones: [
            { id: 'zone_foto', label: 'Fototropisme (Cahaya)' },
            { id: 'zone_geo', label: 'Geotropisme (Gravitasi)' },
        ],
        items: [
            { id: 'item_pucuk', text: 'Pucuk Membelok ke Cahaya', correctZoneId: 'zone_foto', image: "/assets/images/plant_light.png" },
            { id: 'item_bunga_matahari', text: 'Bunga Matahari', correctZoneId: 'zone_foto', image: "/assets/images/sunflower.png" },
            { id: 'item_akar', text: 'Akar Tumbuh ke Bawah', correctZoneId: 'zone_geo', image: "/assets/images/roots_down.png" },
            { id: 'item_akarkaca', text: 'Akar Kacang di Kapas Basah', correctZoneId: 'zone_geo', image: "/assets/images/bean_roots.png" },
        ],
    },

    // 10. Struktur Batang (Monokotil vs Dikotil)
    // Anatomi penampang melintang
    {
        id: 'bio_smp7_batang_030',
        type: 'drag_and_drop',
        category: 'sains',

        difficulty: 'hard',
        topic: 'Struktur Tumbuhan',
        questionText: 'Bagaimana susunan berkas pengangkut pada batang Monokotil dan Dikotil?',
        explanationText: 'Dikotil tersusun rapi dalam lingkaran (ada kambium). Monokotil tersebar (tidak berkambium).',
        zones: [
            { id: 'zone_monokotil', label: 'Batang Monokotil' },
            { id: 'zone_dikotil', label: 'Batang Dikotil' },
        ],
        items: [
            { id: 'item_sebar', text: 'Berkas Pengangkut Tersebar', correctZoneId: 'zone_monokotil', image: "/assets/images/stem_scattered.png" },
            { id: 'item_no_kambium', text: 'Tidak Ada Kambium', correctZoneId: 'zone_monokotil', image: "/assets/images/no_cambium.png" },
            { id: 'item_lingkar', text: 'Berkas Pengangkut Melingkar', correctZoneId: 'zone_dikotil', image: "/assets/images/stem_ring.png" },
            { id: 'item_kambium', text: 'Punya Kambium', correctZoneId: 'zone_dikotil', image: "/assets/images/cambium_layer.png" },
        ],
    },
];