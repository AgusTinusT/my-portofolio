/*
 * ISI BUKU CATATAN
 * ----------------
 * Semua konten yang sering berubah ada di file ini. Edit teksnya,
 * simpan, lalu refresh halaman — tidak perlu menyentuh index.html.
 *
 * Kanal yang tersedia: "lari", "game", "film", "kode" (tampil sebagai "Produk").
 * Di "karya", kolom "untuk", "insight", dan "kisah" boleh dikosongkan.
 *
 * TANGGAL — selalu "YYYY-MM-DD", semuanya opsional kecuali "updated":
 *   updated         tanggal terakhir isi file ini diubah (tampil di hero)
 *   now[].since     sejak kapan hal itu "sedang terjadi"
 *   links[].added   kapan tautan ditambahkan
 *   karya[].started mulai dibangun      karya[].launched rilis publik
 *   karya[].updated update terakhir     karya[].added    masuk ke portofolio
 *   lari.log[].date, catatan[].date     tanggal kejadian / tulisan
 * Setiap kali mengubah isi, perbarui "updated" di bawah dan tanggal di item
 * yang berubah, lalu catat di CHANGELOG.md.
 *
 * Status isi: SEMUA KANAL (karya, tautan, film, game, lari, catatan, dan blok "Sekarang")
 * sudah sepenuhnya DATA ASLI dari pemilik.
 */
window.SITE_CONTENT = {
  updated: "2026-10-27",

  // Blok "Sekarang" — apa yang sedang terjadi bulan ini
  now: [
    {
      kanal: "kode",
      since: "2026-10-27",
      label: "Baru meluncurkan",
      title: "IME Police Multiview",
      note: "Kodenya dibangun bersama AI. Menariknya, pemanfaatan GA4 secara tepat membuka wawasan soal fitur apa yang benar-benar rutin diakses dispatcher saat bertugas.",
    },
    {
      kanal: "lari",
      label: "Fase pemulihan",
      title: "Kembali pelan-pelan",
      note: "Pasca cedera, lari santai 1–2 kali sebulan sejauh 3–5 km (pace 9–10). Belajar lebih peka mendengarkan sinyal tubuh.",
    },
    {
      kanal: "game",
      label: "Sedang memainkan",
      title: "Crossfire Philippines",
      note: "Wadah nostalgia dari masa kecil yang kembali saya mainkan untuk mengistirahatkan kepala.",
    },
    {
      kanal: "film",
      label: "Baru ditonton",
      title: "Black Clover (Season 2)",
      note: "Dinamika rivalitas dan perjuangan tim yang pantang menyerah.",
    },
  ],

  // Tautan eksternal. Dipakai di halaman /links dan di halaman utama.
  // "kanal" (opsional) membuat tautan juga muncul di bagian kanal itu;
  // "baca" tampil di samping Catatan.
  links: [
    {
      id: "instagram",
      label: "Instagram",
      handle: "@akugus_",
      url: "https://www.instagram.com/akugus_/",
      added: "2026-10-27",
    },
    {
      id: "imdb",
      kanal: "film",
      label: "IMDb",
      handle: "Rating film & series saya",
      url: "https://www.imdb.com/user/p.mj2zovkevdim5sqinapzrj4zia/",
      added: "2026-10-27",
    },
    {
      id: "goodreads",
      kanal: "baca",
      label: "Goodreads",
      handle: "Buku yang saya baca",
      url: "https://www.goodreads.com/user/show/137258972-agus-tinus-turnip",
      added: "2026-10-27",
    },
    {
      id: "github",
      kanal: "kode",
      label: "GitHub",
      handle: "AgusTinusT",
      url: "https://github.com/AgusTinusT",
      added: "2026-10-27",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      handle: "Agus Tinus Turnip",
      url: "https://www.linkedin.com/in/agus-tinus-turnip",
      added: "2026-10-27",
    },
    {
      id: "email",
      label: "Email",
      handle: "agus.tinus.turnip.work@gmail.com",
      url: "mailto:agus.tinus.turnip.work@gmail.com",
      added: "2026-10-27",
    },
  ],

  lari: {
    intro:
      "Lari mengajarkan saya batas diri dan pentingnya pemulihan. Setelah sempat cedera usai mencapai jarak terjauh dan PR 5K, kini saya berlari santai untuk menjaga kebiasaan tanpa memaksakan diri.",
    stats: [
      { label: "Terjauh", value: "11,24 km" },
      { label: "Waktu terjauh", value: "1:39:21" },
      { label: "PR 5K", value: "35:13" },
      { label: "Fokus saat ini", value: "Pemulihan" },
    ],
    log: [
      { date: "2026-10-18", distance: "4 km", pace: "9:25/km", note: "Lari santai pemulihan pasca cedera. Menjaga ritme dan mendengarkan tubuh." },
      { date: "2026-09-28", distance: "3,5 km", pace: "9:40/km", note: "Jogging ringan bulanan. Tanpa target waktu, murni untuk refreshing." },
      { date: "2026-03-03", distance: "5 km", pace: "7:02/km", note: "PR 5K tercepat (durasi 35:13, pace 7). Sesi intens sebelum mengalami cedera." },
      { date: "2026-02-25", distance: "11,24 km", pace: "8:50/km", note: "Rekor jarak terjauh (durasi 1:39:21). Menguji ketahanan fisik dan konsistensi mental." },
    ],
  },

  game: {
    intro:
      "Game bagi saya bukan tentang mengejar tren atau menumpuk koleksi, melainkan ruang bernostalgia dan mengistirahatkan kepala.",
    playing: {
      title: "Crossfire Philippines",
      platform: "PC (Stove Launcher)",
      hours: "Nostalgia masa kecil",
      note: "Game masa kecil yang kembali saya mainkan. Cuma jadi wadah nostalgia untuk mengingat kembali keseruan masa lalu dan bersenang-senang tanpa beban.",
    },
    favorites: [],
  },

  film: {
    intro:
      "Film dan serial melatih saya membaca perasaan orang tanpa harus diucapkan. Keterampilan yang sama saya pakai untuk membaca pengguna.",
    list: [
      { title: "Black Clover (Season 2)", year: 2019, rating: 4, note: "Dinamika rivalitas dan kerja sama tim yang selalu seru diikuti." },
      { title: "Reacher (Season 4)", year: 2026, rating: 5, note: "Investigasi lugas dan tensi ketegangan yang konsisten." },
      { title: "Silo (Season 2)", year: 2024, rating: 5, note: "Misteri bawah tanah yang semakin luas dan atmosfer klaustrofobik yang rapat." },
      { title: "Snowpiercer (Season 2)", year: 2021, rating: 4, note: "Dinamika kelas sosial dan perebutan kendali di atas kereta yang tak pernah berhenti." },
      { title: "How to Sell Drugs Online (Fast) (Season 3)", year: 2021, rating: 4, note: "Kekacauan yang berawal dari ego dan ambisi bisnis digital anak muda." },
    ],
  },

  // Kanal kode — proyek yang sudah saya buat.
  // Kartu di beranda hanya memakai: image, status, title, untuk, ringkas.
  // Cerita lengkapnya tampil di halaman karya/?p=<slug>:
  //   insight  pelajaran utama, tampil sebagai kutipan besar
  //   kisah[]  bagian cerita: { judul, paragraf: ["...", "..."] }
  // Ide judul bagian: "Untuk siapa & situasinya", "Di mana mereka tersandung",
  // "Keputusan yang saya ambil", "Yang berubah setelahnya", "Yang masih ingin
  // saya perbaiki". "slug" jangan diubah setelah dibagikan (dipakai di URL).
  karya: [
    {
      slug: "ime-police-multiview",
      title: "IME Police Multiview",
      // Tanggal (YYYY-MM-DD): started = mulai dibangun, updated = commit terakhir,
      // launched = rilis publik, added = masuk ke portofolio ini
      started: "2026-09-09",
      updated: "2026-10-14",
      added: "2026-10-27",
      status: "Baru diluncurkan",
      image: "./assets/ime-police-multiview.png",
      untuk: "divisi kepolisian dan komunitas server GTA V roleplay IME",
      ringkas:
        "Menonton puluhan bodycam petugas sekaligus, lalu berpindah cepat ke sudut pandang yang aksinya paling seru.",
      insight:
        "Penonton di komunitas sangat gemar memantau beragam sudut pandang (POV) dan berganti cepat ke POV yang aksinya paling menarik dalam satu kejadian; website ini hadir memudahkan hal tersebut. Lewat GA4, saya juga belajar membaca pola interaksi mereka untuk memahami fitur mana yang benar-benar rutin diandalkan.",
      kisah: [
        {
          judul: "Untuk siapa & situasinya",
          paragraf: [
            "Proyek ini dibangun untuk divisi kepolisian SASP dan komunitas server GTA V Roleplay IME (MotionLife RP). Dalam setiap skenario pengejaran atau operasi besar, puluhan petugas bertugas di lapangan dan menyiarkan bodycam mereka secara langsung di YouTube.",
            "Bagi penonton di komunitas, daya tarik terbesar roleplay terletak pada dinamika cerita. Mereka ingin memantau aksi dari beragam sudut pandang (POV) petugas dan berpindah cepat ke siapa yang posisinya sedang paling dekat dengan pusat kejadian.",
          ],
        },
        {
          judul: "Di mana mereka tersandung",
          paragraf: [
            "Sebelumnya, penonton terpaksa membuka belasan tab YouTube sekaligus. Akibatnya, komputer menjadi berat, browser lambat, dan audio dari seluruh stream bertabrakan hingga tidak ada suara yang bisa didengar dengan jelas.",
            "Selain itu, penonton sering melewatkan momen-momen krusial karena kesulitan mencari tahu petugas mana yang sedang berhadapan langsung dengan target pengejaran.",
          ],
        },
        {
          judul: "Keputusan yang saya ambil",
          paragraf: [
            "Saya merancang pusat komando multiview terpadu berbasis Laravel, Vue 3, Inertia.js, dan YouTube Player API. Seluruh siaran aktif disusun dalam grid responsif yang ringan dan mudah dipantau dalam satu layar tanpa membebani browser.",
            "Untuk mengatasi kekacauan audio, hanya satu audio stream yang diizinkan aktif dalam satu waktu. Setiap kali berpindah audio ke petugas lain, sistem membunyikan efek radio polisi sesaat—menegaskan perpindahan fokus secara imersif.",
            "Saya juga mengintegrasikan Google Analytics 4 (GA4) secara terukur. Tujuannya bukan sekadar melihat jumlah kunjungan, melainkan membaca pola perilaku nyata penonton: bagian mana yang paling sering mereka buka dan fitur apa yang rutin diandalkan saat siaran berlangsung.",
          ],
        },
        {
          judul: "Yang berubah setelahnya",
          paragraf: [
            "Penonton komunitas kini bisa menikmati jalannya roleplay layaknya berada di ruang komando profesional. Mereka bisa berpindah sudut pandang seketika tanpa kehilangan momen penting.",
            "Bagi saya sebagai pembangun, data dari GA4 menjadi panduan berharga untuk iterasi fitur berikutnya—memastikan setiap perbaikan selalu menjawab kebutuhan nyata pengguna di lapangan.",
          ],
        },
      ],
      tags: ["Laravel", "Vue 3", "Inertia.js", "Tailwind CSS", "YouTube API", "GA4"],
      links: [{ label: "Kunjungi", url: "https://policeduty.sasp-motionliferp.com/" }],
    },
    {
      slug: "penerjemah-tersumpah",
      title: "Website Jasa Penerjemah Tersumpah",
      started: "2026-04-16",
      updated: "2026-10-26",
      added: "2025-07-23",
      status: "Paling berkesan",
      image: "./assets/indomalay.png",
      untuk: "Rudianto Turnip, M.A. dan klien yang butuh terjemahan resmi",
      ringkas:
        "Sistem pesanan dan dokumen untuk penerjemah tersumpah, dari berkas masuk sampai terjemahan resmi diterima klien.",
      insight:
        "Terjun langsung sebagai validator dokumen membuka mata saya: sambil belajar bahasa Jerman, saya menemukan pola-pola kesalahan berulang dan memahami bagaimana alur sistem yang tepat bisa memangkas waktu kerja secara signifikan.",
      kisah: [
        {
          judul: "Untuk siapa & situasinya",
          paragraf: [
            "Platform ini dibangun untuk Rudianto Turnip, M.A., seorang penerjemah tersumpah resmi bahasa Jerman–Indonesia. Klien datang membawa dokumen krusial—mulai dari akta hukum, berkas beasiswa universitas, dokumen korporasi, hingga persyaratan visa yang menuntut akurasi mutlak dan kerahasiaan tinggi.",
            "Awalnya website ini dibangun dengan Next.js pada 2025 sebagai profil layanan daring. Namun seiring meningkatnya volume dokumen, kebutuhan bergeser dari sekadar profil publik menjadi sistem manajemen alur kerja yang terstruktur.",
          ],
        },
        {
          judul: "Peran saya sebagai validator & belajar bahasa Jerman",
          paragraf: [
            "Dalam proyek ini, peran saya tidak berhenti pada menulis kode. Saya terlibat langsung bertindak sebagai validator dokumen terjemahan. Dari proses itu, sambil belajar bahasa Jerman, saya mulai mengenali pola-pola kesalahan yang kerap berulang pada istilah hukum dan teknis.",
            "Pengalaman memeriksa berkas secara langsung memberi wawasan nyata: mempercepat kerja penerjemah bukan soal mengetik lebih cepat, melainkan memotong friksi administratif, mempermudah pelacakan status, dan mencegah kesalahan yang sama terulang.",
          ],
        },
        {
          judul: "Tantangan teknis: VPS, Railway, dan pentingnya staging",
          paragraf: [
            "Ini menjadi proyek yang paling berkesan karena untuk pertama kalinya saya belajar mengelola infrastruktur secara menyeluruh: mengonfigurasi VPS lokal Laragon, deployment ke Railway, pengelolaan domain resmi, dan menyiapkan penyimpanan awan aman di AWS S3.",
            "Pelajaran paling krusial adalah memahami pentingnya staging environment. Menguji alur pemrosesan pesanan dan notifikasi di lingkungan staging terlebih dahulu memastikan tidak ada dokumen klien atau alur status yang terganggu saat sistem berjalan di production.",
          ],
        },
        {
          judul: "Keputusan arsitektur & pembaruan sistem",
          paragraf: [
            "Saya merombak dan membangun ulang sistem ini menggunakan Laravel 12, Tailwind CSS v4, dan Vite. Untuk mengakomodasi jenis dokumen yang sangat beragam tanpa harus terus mengubah skema database, saya menerapkan arsitektur Entity-Attribute-Value (EAV).",
            "Saya juga menerapkan komunikasi real-time menggunakan WebSocket (Laravel Reverb & Laravel Echo). Setiap kali status pesanan diperbarui—dari draft, validasi, hingga siap dikirim—tim penerjemah dan klien langsung mengetahuinya secara instan tanpa perlu memuat ulang halaman.",
          ],
        },
        {
          judul: "Yang berubah setelahnya",
          paragraf: [
            "Proses penanganan dokumen kini sepenuhnya terpusat dan transparan. Waktu yang sebelumnya tersita untuk administrasi manual kini dialihkan untuk fokus pada kualitas terjemahan bahasa.",
            "Bagi saya pribadi, proyek ini membuktikan bahwa pemahaman mendalam tentang alur kerja pengguna di dunia nyata jauh lebih menentukan keberhasilan produk daripada sekadar kecanggihan teknologi yang dipakai.",
          ],
        },
      ],
      tags: ["Laravel 12", "Tailwind CSS v4", "Vite", "Reverb WebSocket", "AWS S3", "Railway", "VPS"],
      links: [{ label: "Kunjungi", url: "https://indomalay.com/" }],
    },
  ],

  // Catatan — tulisan pendek. Setiap item di "body" adalah satu paragraf.
  catatan: [
    {
      date: "2026-10-26",
      kanal: "kode",
      title: "Saat AI menulis kode, apa yang tersisa untuk saya?",
      excerpt: "Ternyata bagian yang paling manusiawi.",
      body: [
        "Hampir semua kode saya sekarang ditulis AI. Awalnya terasa seperti kehilangan keahlian. Belakangan saya sadar yang hilang hanya bagian mengetiknya.",
        "Yang tersisa justru pertanyaan yang tidak bisa dijawab AI sendirian: siapa yang akan memakai ini, dalam keadaan apa, dan apa yang membuat mereka menyerah di tengah jalan.",
        "Jadi sekarang saya lebih banyak mengamati daripada mengetik. Dan ternyata itu bagian yang paling saya nikmati.",
      ],
    },
    {
      date: "2026-10-20",
      kanal: "lari",
      title: "Pace yang benar terasa terlalu pelan",
      excerpt: "Pelajaran dari fase pemulihan cedera yang ternyata berlaku juga untuk produk software.",
      body: [
        "Setelah mencapai rekor terjauh 11,24 km dan PR 5K dalam 35 menit, saya mengalami cedera. Tubuh memaksa saya berhenti dan melambatkan ritme menjadi 3–5 km sebulan 1–2 kali dengan pace 9–10.",
        "Awalnya rasanya seperti kemunduran. Tapi di fase pemulihan ini saya belajar bahwa memaksakan kecepatan sebelum siap hanya berujung masalah—persis seperti memaksakan rilis fitur tanpa fondasi yang matang.",
        "Sekarang saya menikmati setiap langkah pelan. Menjaga ritme yang bisa bertahan lama jauh lebih berharga daripada rekor sesaat.",
      ],
    },
    {
      date: "2026-10-08",
      kanal: "game",
      title: "Kembali ke game masa kecil",
      excerpt: "Kadang yang kita cari bukan grafis mutakhir, melainkan rasa akrab dan nyaman.",
      body: [
        "Di tengah banyaknya game modern dengan mekanisme rumit dan dunia yang terlalu luas, saya justru kembali membuka Crossfire.",
        "Bagi saya, ini murni wadah nostalgia. Ritmenya sudah melekat sejak dulu, mengingatkan pada masa-masa ketika bermain game adalah tentang rehat dan bersenang-senang tanpa beban kompetitif.",
        "Pengalaman itu mengingatkan saya pada satu hal penting: tidak semua produk harus rumit untuk bisa berkesan. Kadang keakraban dan kesederhanaan justru yang paling bertahan lama.",
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
