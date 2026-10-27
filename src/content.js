/*
 * ISI BUKU CATATAN
 * ----------------
 * Semua konten yang sering berubah ada di file ini. Edit teksnya,
 * simpan, lalu refresh halaman — tidak perlu menyentuh index.html.
 *
 * Kanal yang tersedia: "lari", "game", "film", "kode".
 * Format tanggal: "YYYY-MM-DD".
 *
 * Catatan: isi di bawah masih CONTOH. Ganti dengan cerita Anda sendiri.
 */
window.SITE_CONTENT = {
  updated: "2026-10-27",

  // Blok "Sekarang" — apa yang sedang terjadi bulan ini
  now: [
    {
      kanal: "kode",
      label: "Baru meluncurkan",
      title: "IME Police Multiview",
      note: "Tempat dua minat bertemu: game roleplay dan kode. Pusat pantau bodycam untuk polisi server GTA V IME.",
    },
    {
      kanal: "lari",
      label: "Sedang berlatih",
      title: "Menuju half marathon",
      note: "Membangun jarak tempuh mingguan pelan-pelan. Fokus lari santai di zona 2, bukan kecepatan.",
    },
    {
      kanal: "game",
      label: "Sedang memainkan",
      title: "Baldur's Gate 3",
      note: "Playthrough kedua sebagai bard. Kagum betapa banyak cabang cerita yang ditangani dengan rapi.",
    },
    {
      kanal: "film",
      label: "Baru ditonton",
      title: "Dune: Part Two",
      note: "Skala visualnya luar biasa, tapi yang paling membekas justru sunyinya.",
    },
  ],

  lari: {
    intro:
      "Lari adalah cara saya mengosongkan kepala. Banyak masalah kode yang justru terurai di kilometer kelima.",
    stats: [
      { label: "Bulan ini", value: "64 km" },
      { label: "Terjauh", value: "16 km" },
      { label: "PR 10K", value: "54:12" },
      { label: "Target", value: "HM 2027" },
    ],
    log: [
      { date: "2026-10-25", distance: "16 km", pace: "6:18/km", note: "Lari panjang akhir pekan. Kaki berat di km 12, tapi selesai." },
      { date: "2026-10-22", distance: "6 km", pace: "5:40/km", note: "Tempo pendek sebelum kerja." },
      { date: "2026-10-19", distance: "10 km", pace: "6:05/km", note: "Rute baru lewat taman kota. Akan diulang." },
      { date: "2026-10-16", distance: "5 km", pace: "6:30/km", note: "Pemulihan. Santai, sambil dengar podcast." },
    ],
  },

  game: {
    intro:
      "Saya suka game yang sistemnya dalam: RPG dengan banyak pilihan, strategi yang memaksa berpikir beberapa langkah ke depan.",
    playing: {
      title: "Baldur's Gate 3",
      platform: "PC",
      hours: "± 140 jam",
      note: "Setiap keputusan kecil punya konsekuensi. Pelajaran bagus soal merancang state yang rumit.",
    },
    favorites: [
      { title: "The Witcher 3", genre: "RPG", note: "Side quest yang ditulis lebih baik daripada kebanyakan film." },
      { title: "Civilization VI", genre: "Strategi", note: "“Satu giliran lagi” adalah UX loop paling berbahaya." },
      { title: "Hollow Knight", genre: "Metroidvania", note: "Dunia yang bercerita tanpa banyak kata." },
      { title: "Disco Elysium", genre: "RPG", note: "Bukti bahwa antarmuka teks pun bisa sangat hidup." },
    ],
  },

  film: {
    intro:
      "Sci-fi yang membuat berpikir, thriller yang membuat tegang, dan apa pun dengan sinematografi yang berani.",
    list: [
      { title: "Arrival", year: 2016, rating: 5, note: "Film tentang bahasa yang ternyata film tentang waktu." },
      { title: "Blade Runner 2049", year: 2017, rating: 5, note: "Setiap frame bisa dijadikan wallpaper." },
      { title: "Interstellar", year: 2014, rating: 5, note: "Masih merinding setiap kali adegan docking." },
      { title: "Prisoners", year: 2013, rating: 4, note: "Tegang dari awal sampai akhir, tanpa jeda." },
      { title: "Severance", year: 2022, rating: 4, note: "Satire dunia kerja yang terlalu dekat dengan kenyataan." },
    ],
  },

  // Kanal kode — proyek yang sudah saya buat
  karya: [
    {
      title: "IME Police Multiview",
      year: 2026,
      status: "Baru diluncurkan",
      image: "./assets/ime-police-multiview.png",
      description:
        "Pusat komando bodycam untuk divisi kepolisian server GTA V roleplay IME. Puluhan live stream YouTube petugas dipantau sekaligus dalam grid multiview, lengkap dengan HUD bodycam, satu-audio-aktif, dan studio klip.",
      tags: ["Laravel", "Vue 3", "Inertia.js", "Tailwind CSS", "YouTube API"],
      links: [{ label: "Kunjungi", url: "https://policeduty.sasp-motionliferp.com/" }],
    },
    {
      title: "Aplikasi Mobile Restoran",
      year: 2024,
      image: "./assets/restaurant-application-presentation-flutter.png",
      description:
        "Pencari restoran dengan Flutter, menggabungkan Firebase, REST API, dan SQLite untuk mode offline.",
      tags: ["Flutter", "Firebase", "Provider", "SQLite"],
      links: [
        { label: "Dokumentasi", url: "https://drive.google.com/file/d/1L46hNfO0bIF6viJ2LBSBUgKGJCczMd-F/view?usp=sharing" },
        { label: "Kode", url: "https://github.com/AgusTinusT/restaurant_app_flutter.git" },
      ],
    },
    {
      title: "Website Jasa Penerjemah Tersumpah",
      year: 2024,
      image: "./assets/indomalay.png",
      description:
        "Website untuk Rudianto Turnip, M.A., penerjemah tersumpah. Menampilkan layanan dan memudahkan klien menghubungi.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      links: [{ label: "Kunjungi", url: "https://indomalay.com/" }],
    },
    {
      title: "Book Store API",
      year: 2023,
      image: "./assets/book-store-spring-boot.png",
      description:
        "RESTful API toko buku dengan Spring Boot: manajemen buku, anggota, dan transaksi, diamankan Spring Security.",
      tags: ["Java 17", "Spring Boot", "Spring Security", "MySQL"],
      links: [{ label: "Kode", url: "https://github.com/AgusTinusT/book-store.git" }],
    },
    {
      title: "Perpus-Laravel",
      year: 2023,
      image: "./assets/perpustakaan-laravel.png",
      description:
        "Sistem informasi perpustakaan sederhana: peminjaman, pengembalian, dan pengelolaan koleksi buku.",
      tags: ["PHP 8", "Laravel", "Vite", "MySQL"],
      links: [{ label: "Kode", url: "https://github.com/AgusTinusT/perpustakaan-laravel" }],
    },
    {
      title: "Kumpulan Aplikasi Mobile",
      year: 2023,
      image: "",
      description:
        "Presentasi berbagai aplikasi mobile yang saya buat dengan Android Kotlin dan Flutter.",
      tags: ["Kotlin", "Flutter", "MVVM", "Clean Architecture"],
      links: [
        {
          label: "Lihat presentasi",
          url: "https://docs.google.com/presentation/d/e/2PACX-1vRaN4N8Ds6jcts7SKbahIG_ex8OYV2OlZOhsc15AVr2YxuyfMLN_ZII0YE_H68Dsw/pub?start=false&loop=false&delayms=3000",
        },
      ],
    },
  ],

  // Catatan — tulisan pendek. Setiap item di "body" adalah satu paragraf.
  catatan: [
    {
      date: "2026-10-20",
      kanal: "lari",
      title: "Pace yang benar terasa terlalu pelan",
      excerpt: "Pelajaran dari lari zona 2 yang ternyata berlaku juga untuk proyek software.",
      body: [
        "Saat mulai berlatih untuk half marathon, saran pertama yang saya dengar adalah: larilah lebih pelan. Rasanya salah. Saya merasa tidak sedang berlatih.",
        "Tapi setelah beberapa minggu, jarak bertambah tanpa cedera. Saya sadar pola yang sama sering saya langgar di pekerjaan: terburu-buru di awal sprint, lalu kehabisan napas sebelum rilis.",
        "Sekarang saya mencoba menerapkan hal yang sama ke kode. Ritme yang bisa dipertahankan lebih penting daripada kecepatan sesaat.",
      ],
    },
    {
      date: "2026-10-08",
      kanal: "game",
      title: "Yang Disco Elysium ajarkan soal antarmuka",
      excerpt: "Game yang hampir seluruhnya teks, tapi terasa lebih hidup daripada banyak aplikasi penuh animasi.",
      body: [
        "Disco Elysium hampir tidak punya aksi. Isinya dialog, pilihan, dan lemparan dadu. Tapi setiap baris teks terasa disengaja.",
        "Itu mengingatkan saya bahwa antarmuka yang baik tidak selalu soal efek visual. Kadang yang dibutuhkan hanya hierarki yang jelas dan tulisan yang jujur.",
      ],
    },
    {
      date: "2026-09-28",
      kanal: "kode",
      title: "Kenapa halaman ini ada",
      excerpt: "Dari portofolio jasa ke buku catatan pribadi.",
      body: [
        "Dulu halaman ini berisi daftar layanan dan tombol \"hubungi saya\". Isinya menjelaskan apa yang bisa saya kerjakan, tapi tidak menjelaskan siapa saya.",
        "Sekarang saya ingin tempat ini jadi buku catatan: apa yang sedang saya bangun, tonton, mainkan, dan latih. Kalau Anda tertarik bekerja sama, semoga dari sini Anda bisa mengenal saya lebih dulu.",
      ],
    },
  ],
};
