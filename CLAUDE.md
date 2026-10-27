# CLAUDE.md

Panduan untuk AI (Claude Code, Codex, Cursor, dll.) yang bekerja di repo ini.
Baca juga [CHANGELOG.md](CHANGELOG.md) untuk riwayat perubahan bertanggal.

_Terakhir diperbarui: 2026-10-27_

## Apa ini

Website pribadi **Agus Tinus Turnip**: situs statis satu halaman yang di-deploy ke
GitHub Pages (`https://agustinust.github.io/my-portofolio/`). Bentuknya bukan
portofolio jasa, melainkan "buku catatan pribadi" tentang **siapa** dia.

### Posisi & nada (penting untuk menulis copy)

- Kodenya ditulis AI. Agus memposisikan diri sebagai pembangun yang fokus pada
  **empati terhadap pengalaman pengguna**, bukan sebagai programmer.
- Minat: **lari, game** (CrossFire PH di STOVE, komunitas GTA V roleplay), **film**
  (sci-fi/thriller), dan membaca. Setiap minat dikaitkan ke cara memahami orang.
- Jangan menonjolkan skill coding atau daftar tech stack sebagai identitas.
- Bahasa situs: Indonesia, santai tapi rapi, sudut pandang orang pertama.
- Tagline: "Merasakan dulu, membangun kemudian."

## Struktur

| Path | Isi |
| --- | --- |
| `index.html` | Halaman utama. Kerangka statis; isi dirender oleh `src/main.js`. |
| `links/index.html` | Halaman tautan ala Linktree untuk bio Instagram. Memakai path `../`. |
| `karya/index.html` | Halaman kisah satu proyek: `karya/?p=<slug>`. Isinya dirender dari `karya[]`. |
| `src/content.js` | **Satu-satunya sumber konten** (`window.SITE_CONTENT`). Edit isi di sini. |
| `src/main.js` | Render konten, ikon, tema terang/gelap, menu mobile. Dipakai ketiga halaman. |
| `src/input.css` | Token warna (CSS variable), komponen (`.card`, `.chip`, `.btn-*`, `.tag`). |
| `tailwind.config.js` | Memetakan token ke kelas Tailwind (`bg-paper`, `text-accent`, `text-run`, ...). |
| `dist/output.css` | CSS hasil build. **Di-commit** karena Pages tidak menjalankan build. |
| `assets/` | Screenshot proyek (16:9, idealnya 1600×900). |
| `.github/workflows/static.yml` | Deploy otomatis ke Pages setiap push ke `main`. |

Gaya visual terinspirasi "Pixel Goat" (onepagelove.com): latar putih gading,
heading Outfit tebal, aksen oranye, kartu putih membulat, ikon line-art.
Setiap kanal punya warna: lari `run`, game `play`, film `film`, produk `code`.

## Model konten & tanggal

Semua tanggal berformat **`YYYY-MM-DD`** dan dirender sebagai
`<time datetime="...">` agar bisa dibaca mesin.

| Kolom | Arti |
| --- | --- |
| `updated` (root) | Kapan isi `content.js` terakhir diubah. Tampil di hero. |
| `now[].since` | Sejak kapan hal di blok "Sekarang" berlangsung. |
| `links[].added` | Kapan tautan ditambahkan. `links[].kanal` membuatnya juga tampil di kanal itu (`film`, `kode`, `baca`). |
| `karya[].started` | Mulai dibangun (biasanya commit pertama). |
| `karya[].launched` | Rilis publik. |
| `karya[].updated` | Update terakhir proyek itu (biasanya commit terakhir). |
| `karya[].added` | Kapan proyek masuk ke portofolio ini. |
| `karya[].status` | Label di sampul, mis. "Baru diluncurkan". Proyek pertama yang punya `status` jadi "Terbaru" di `/links`. |
| `lari.log[].date`, `catatan[].date` | Tanggal kejadian / tulisan. |

### Kartu vs kisah karya

Kartu di beranda sengaja ringkas: sampul, `status`, `title`, `untuk`, `ringkas`
(satu kalimat), tautan "Baca kisahnya" dan "Kunjungi". Pengalaman yang lebih
dalam ditulis di halaman kisah `karya/?p=<slug>`:

| Kolom | Arti |
| --- | --- |
| `karya[].slug` | Dipakai di URL. Jangan diubah setelah dibagikan. |
| `karya[].ringkas` | Satu kalimat untuk kartu dan pembuka halaman kisah. |
| `karya[].insight` | Pelajaran utama dari penggunanya, tampil sebagai kutipan besar. |
| `karya[].kisah[]` | Bagian cerita `{ judul, paragraf: [] }`, tampil berurutan. |
| `karya[].tags` | Hanya tampil di halaman kisah (samping), tidak di kartu. |

Isi `kisah` harus dari kata-kata pemilik. Jangan mengarang pengalaman;
boleh mengusulkan judul bagian (lihat komentar di `content.js`).

Tahun yang tampil di kartu proyek diambil dari `launched`, lalu `updated`, lalu `added`.
Jangan menebak tanggal. Ambil dari git (`git log --format=%ad --date=short`)
atau tanyakan ke pemilik.

### Status data (per 2026-10-27)

- **Asli:** Seluruh isi website (`karya`, `links`, `film`, `game`, `lari`, blok `now`, dan `catatan`) sudah sepenuhnya merupakan data, pencapaian, dan cerita asli pemilik.

### Proyek terkini

- **IME Police Multiview**: https://policeduty.sasp-motionliferp.com/
  Mulai 2026-09-09, commit terakhir 2026-10-14, masuk portofolio 2026-10-27.
  Tanggal rilis publik belum diketahui. Repo `AgusTinusT/ime-police-multiview`
  **privat, jangan ditautkan**. Kode lokal: `C:\Development\Laragon\www\ime-police-multiview`.
- **Website Jasa Penerjemah Tersumpah (indomalay-laravel)**: https://indomalay.com/
  Mulai 2026-04-16, commit terakhir 2026-10-26, proyek paling berkesan.
  Evolusi dari versi 2025 ke Laravel 12 + Reverb (WebSocket) + Tailwind v4 + EAV metadata.
  Repo `AgusTinusT/indomalay-laravel` **privat, jangan ditautkan**.
  Kode lokal: `C:\Development\Laragon\www\indomalay-laravel`.

## Alur kerja

1. Ubah isi di `src/content.js`, bukan di HTML.
2. Perbarui `updated` di root dan tanggal pada item yang berubah.
3. Tambahkan entri di `CHANGELOG.md` (paling atas, bertanggal).
4. Jika menambah atau mengubah kelas Tailwind (di HTML atau JS), jalankan `npm run build:css`.
5. Pratinjau: server `portfolio` di `.claude/launch.json` (`http://localhost:5173`).
   Membuka `index.html` langsung lewat `file://` tidak memuat CSS/JS dengan benar.
6. Commit `dist/output.css` bersama perubahan lainnya. Push ke `main` = deploy.

## Hal yang mudah terlewat

- Tailwind hanya memindai `./*.html`, `./links/*.html`, `./karya/*.html`, `./src/**/*.js`.
  Halaman baru di folder lain harus ditambahkan ke `content` di `tailwind.config.js`.
- Kelas yang dibangun di JS harus ditulis utuh (mis. `"bg-run/10"`), jangan dirangkai,
  supaya terdeteksi Tailwind.
- `src/main.js` dipakai tiga halaman; setiap elemen dicek dulu keberadaannya.
- Halaman di subfolder memasang `<body data-base="../">`; `asset()` dan `storyUrl()`
  di `main.js` memakai nilai itu, jadi path `./assets/...` di `content.js` tetap benar.
- Teks dari `content.js` selalu lewat `esc()` sebelum masuk ke HTML.
- Footer `index.html` masih memuat URL Instagram/LinkedIn secara langsung.
