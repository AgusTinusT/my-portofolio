# Changelog

Riwayat perubahan website, terbaru di atas. Format tanggal `YYYY-MM-DD`.
Setiap perubahan isi atau tampilan dicatat di sini (lihat [CLAUDE.md](CLAUDE.md)).

## 2026-10-27 — Pendalaman kisah karya: Detail pengalaman & proses nyata

- Memperluas isi bagian `kisah[]` secara mendalam untuk kedua proyek unggulan di halaman detail (`karya/?p=<slug>`):
  - **IME Police Multiview**: Dinamika penonton roleplay memantau beragam POV, masalah tab browser & audio tumpang-tindih, penerapan audio radio terfokus, serta evaluasi fitur rutin via Google Analytics 4 (GA4).
  - **Website Jasa Penerjemah Tersumpah**: Kebutuhan dokumen resmi Jerman, pengalaman nyata bertindak sebagai validator dan mengenali pola kesalahan, tantangan VPS & deployment Railway, krusialnya staging environment, serta arsitektur metadata dinamis (EAV) & notifikasi real-time via WebSocket.

## 2026-10-27 — Pembaruan kanal lari: Data asli pencapaian & fase pemulihan

- Memperbarui statistik lari dengan data nyata pemilik:
  - **Lari terjauh**: 11,24 km (1:39:21, pace 8:50/km, `2026-02-25`).
  - **PR 5K tercepat**: 35:13 (pace 7:02/km, `2026-03-03`).
  - **Fase saat ini**: Pemulihan cedera, lari santai 1–2 kali sebulan sejauh 3–5 km (pace 9–10).
- Memperbarui kartu blok "Sekarang" (*Fase pemulihan: Kembali pelan-pelan*) dan log aktivitas lari.
- Menyelaraskan esai catatan lari dengan pengalaman nyata belajar melambat pasca cedera.
- Seluruh isi website kini resmi 100% data dan cerita asli pemilik.

## 2026-10-27 — Kartu karya diringkas, halaman kisah per proyek

- Kartu karya di beranda kini hanya berisi sampul, status, judul, untuk siapa,
  dan satu kalimat `ringkas`, plus tautan "Baca kisahnya" dan "Kunjungi".
- Halaman baru `karya/?p=<slug>` untuk cerita lengkap: kutipan `insight`,
  bagian `kisah[]`, tanggal, teknologi, dan tautan ke kisah berikutnya.
- `description` proyek dipecah menjadi `ringkas` dan bagian `kisah`.
- Kartu "Terbaru" di `/links` kini menuju halaman kisah.
- Footer halaman utama: monogram "AT" yang tersisa diganti wordmark **agus.**

## 2026-10-27 — Pembaruan catatan kanal game: Kembali ke game masa kecil

- Mengganti tulisan contoh *Disco Elysium* di bagian Catatan dengan esai reflektif asli tentang **Crossfire**: bernostalgia ke game masa kecil, kesederhanaan, dan rasa nyaman yang tahan lama.

## 2026-10-27 — Kurasi portofolio: Fokus pada 2 platform unggulan

- Menghapus proyek lawas dan percontohan (*Aplikasi Mobile Restoran*, *Perpus-Laravel*, *Book Store API*, dan *Kumpulan Aplikasi Mobile*).
- Menyesuaikan barisan daftar teknologi di beranda menjadi: **Laravel, Flutter, Vue, Tailwind CSS, MySQL**.
- Portofolio produk kini eksklusif menampilkan 2 platform web unggulan yang dibangun dan dirawat aktif:
  1. **IME Police Multiview** (Laravel / Vue / Inertia / GA4) — *Baru diluncurkan*
  2. **Website Jasa Penerjemah Tersumpah** (Laravel 12 / Tailwind v4 / Reverb WebSocket / AWS S3) — *Paling berkesan*

## 2026-10-27 — Pembaruan proyek IME Police Multiview (Insight POV Komunitas & GA4)

- Memperbarui refleksi (`insight`): menyorot bagaimana penonton komunitas gemar melihat dan berpindah ke beragam sudut pandang (POV) yang paling menarik dalam satu aksi/kejadian.
- Menambahkan wawasan penggunaan **Google Analytics 4 (GA4)** untuk membaca pola interaksi penonton dan memastikan fitur yang rutin diakses selalu terakomodasi.
- Menambahkan tag `GA4` pada kartu proyek dan memperbarui catatan kartu di blok "Sekarang".

## 2026-10-27 — Pembaruan proyek indomalay (Website Jasa Penerjemah Tersumpah)

- Menghubungkan data proyek dengan repo terbaru `indomalay-laravel` (`C:\Development\Laragon\www\indomalay-laravel`):
  - Mulai dibangun (`started`): `2026-04-16`, update terakhir (`updated`): `2026-10-26`.
  - Tech stack diperbarui: **Laravel 12**, **Tailwind CSS v4**, **Vite**, **Laravel Reverb (WebSocket)**, **AWS S3**, **Railway**, dan **VPS**.
  - Menandai proyek sebagai "Paling berkesan" dengan badge status baru dan menempatkannya sejajar dengan *IME Police Multiview* pada grid karya 2026.
- Menambahkan refleksi mendalam (`insight`) dari pengalaman nyata pemilik sebagai validator dokumen terjemahan bahasa Jerman: menemukan pola kesalahan dan optimasi alur kerja.

## 2026-10-27 — Pembaruan kanal game: Crossfire Philippines

- Memperbarui data kanal game dengan data asli pemilik: **Crossfire Philippines** sebagai satu-satunya game aktif, dimainkan kembali sebagai wadah nostalgia game masa kecil.
- Menghapus daftar game favorit percontohan dan menyembunyikan kontainer kosong jika tidak ada entri tambahan.
- Memperbarui kartu "Sedang memainkan" di blok "Sekarang" dengan Crossfire Philippines.

## 2026-10-27 — Pembaruan film & serial yang ditonton

- Memperbarui daftar film & serial yang ditonton dengan data asli berurutan dari yang terbaru:
  1. *Black Clover (Season 2)* (2019)
  2. *Reacher (Season 4)* (2026)
  3. *Silo (Season 2)* (2024)
  4. *Snowpiercer (Season 2)* (2021)
  5. *How to Sell Drugs Online (Fast) (Season 3)* (2021)
- Memperbarui kartu "Baru ditonton" di blok "Sekarang" dengan *Black Clover (Season 2)*.

## 2026-10-27 — Logo wordmark "agus."

- Logo baru: wordmark **agus.** (Outfit 800, titik oranye) menggantikan kotak
  monogram "AT" di header halaman utama dan profil `/links`.
- Favicon baru `assets/favicon.svg` (huruf a dan titik oranye di kotak gelap),
  dipasang di kedua halaman.

## 2026-10-27 — Gaya Pixel Goat, narasi empati, halaman tautan

- Tampilan diganti ke gaya Pixel Goat: heading Outfit, aksen oranye, tombol
  hitam/outline, kartu putih membulat, ikon line-art per kanal, lencana bundar,
  Catatan berbentuk akordeon, footer gelap.
- Narasi diubah: kode ditulis AI, fokus pada empati pengguna.
  Tagline "Merasakan dulu, membangun kemudian."
- Kanal "Kode" menjadi "Produk". Kartu proyek mendapat kolom `untuk` dan `insight`.
- Halaman baru `/links` (Instagram, IMDb, Goodreads, GitHub, LinkedIn, email).
  Tautan juga tampil di kanal yang relevan di halaman utama.
- Metadata tanggal: `since`, `added`, `started`, `launched`, `updated`;
  semua tanggal dirender sebagai `<time datetime>`.
- Kolom `year` proyek (sebelumnya tebakan) diganti tanggal dari riwayat git.
- Ditambahkan `CLAUDE.md`, `AGENTS.md`, dan file ini.

## 2026-10-27 — Tema "Buku Catatan Pribadi" (`e657044`)

- Desain ulang dari portofolio jasa menjadi buku catatan pribadi:
  Halo, Sekarang, kanal Lari/Game/Film/Kode, Catatan, Ngobrol.
- Bagian Layanan, AOS, aurora blob, dan kanvas partikel dihapus.
- Konten dipindah ke `src/content.js`.
- Proyek baru: **IME Police Multiview** (mulai 2026-09-09, update 2026-10-14).
- Skrip `build:css` dan `watch:css`.

## 2025-09-03

- Proyek baru: Aplikasi Mobile Restoran (Flutter) (`29858ad`).

## 2025-07-23

- Bagian proyek ditambahkan, dengan Website Jasa Penerjemah Tersumpah (indomalay).
- Proyek baru: Perpus-Laravel, Book Store API, presentasi aplikasi mobile.
- Konfigurasi Tailwind CSS.

## 2025-07-04

- Animasi scroll dengan AOS.

## 2025-07-03

- Setup build Tailwind CSS, meta tag SEO, perbaikan aksesibilitas.

## 2025-07-02

- Versi pertama website portofolio dan workflow deploy GitHub Pages.
