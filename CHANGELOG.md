# Changelog

Riwayat perubahan website, terbaru di atas. Format tanggal `YYYY-MM-DD`.
Setiap perubahan isi atau tampilan dicatat di sini (lihat [CLAUDE.md](CLAUDE.md)).

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
