document.addEventListener("DOMContentLoaded", function () {
  const content = window.SITE_CONTENT || {};
  const htmlElement = document.documentElement;

  // Skrip ini dipakai oleh halaman utama dan /links,
  // jadi setiap elemen dicek dulu keberadaannya.
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- MENU MOBILE ---
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    const setMenu = (open) => {
      mobileMenu.classList.toggle("hidden", !open);
      menuButton.setAttribute("aria-expanded", String(open));
    };

    menuButton.addEventListener("click", () => {
      setMenu(mobileMenu.classList.contains("hidden"));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });
  }

  // --- MODE TERANG / GELAP ---
  // Tema awal sudah dipasang oleh script kecil di <head>.
  document.querySelectorAll(".theme-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const isDark = htmlElement.classList.toggle("dark");
      try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
      } catch (e) {}
    });
  });

  // --- HELPER ---
  // Kelas ditulis lengkap agar terdeteksi oleh Tailwind.
  const ACCENT = {
    lari: { text: "text-run", bg: "bg-run", soft: "bg-run/10" },
    game: { text: "text-play", bg: "bg-play", soft: "bg-play/10" },
    film: { text: "text-film", bg: "bg-film", soft: "bg-film/10" },
    kode: { text: "text-code", bg: "bg-code", soft: "bg-code/10" },
  };
  const accent = (kanal) => ACCENT[kanal] || ACCENT.kode;

  // Ikon line-art untuk tiap kanal
  const ICONS = {
    lari: '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 2.5M10 2.5h4M12 2.5V6M18.5 6.5 20 5"/>',
    game: '<path d="M6.5 8h11a4.5 4.5 0 0 1 4.3 5.8l-1.2 4a2.6 2.6 0 0 1-4.4 1L14.5 17h-5l-1.7 1.8a2.6 2.6 0 0 1-4.4-1l-1.2-4A4.5 4.5 0 0 1 6.5 8z"/><path d="M7.5 10.5v3.5M5.75 12.25h3.5"/><circle cx="15.5" cy="11.5" r=".6" fill="currentColor"/><circle cx="17.5" cy="13.5" r=".6" fill="currentColor"/>',
    film: '<rect x="3" y="9" width="18" height="11.5" rx="1.5"/><path d="M3.4 9 2.9 5.6 19.8 3l.5 3.5L3.4 9M8.3 4.7l2.2 3.4M13.7 3.9l2.2 3.4M3 13.5h18"/>',
    kode: '<rect x="3.5" y="4.5" width="17" height="11.5" rx="1.5"/><path d="M2 19.5h20M10 8.25 8 10.25l2 2M14 8.25l2 2-2 2"/>',
  };
  const icon = (kanal, cls) =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[kanal] || ICONS.kode}</svg>`;

  // Ikon untuk tautan eksternal
  const BRANDS = {
    instagram: {
      stroke: true,
      body: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
    },
    email: {
      stroke: true,
      body: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
    },
    imdb: {
      body: '<rect x="1" y="5" width="22" height="14" rx="3" fill="#F5C518"/><text x="12" y="15.3" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="8" fill="#000">IMDb</text>',
    },
    goodreads: {
      body: '<rect x="1" y="1" width="22" height="22" rx="5" fill="#F4F1EA"/><text x="12" y="16.5" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="16" fill="#382110">g</text>',
    },
    github: {
      body: '<path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>',
    },
    linkedin: {
      body: '<path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>',
    },
  };
  const brandIcon = (id, cls) => {
    const b = BRANDS[id] || BRANDS.email;
    const attrs = b.stroke
      ? 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"'
      : 'fill="none"';
    return `<svg class="${cls}" viewBox="0 0 24 24" ${attrs} aria-hidden="true">${b.body}</svg>`;
  };
  const external = (url) =>
    /^https?:/.test(url) ? ' target="_blank" rel="noopener noreferrer"' : "";

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatDate(iso, short) {
    const [y, m, d] = String(iso).split("-").map(Number);
    if (!y || !m || !d) return esc(iso);
    const parts = short
      ? { month: "short", year: "numeric" }
      : { day: "numeric", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("id-ID", parts).format(new Date(y, m - 1, d));
  }

  // Tanggal selalu dibungkus <time datetime> agar mesin & AI bisa membacanya
  const timeTag = (iso, short) =>
    iso ? `<time datetime="${esc(iso)}">${formatDate(iso, short)}</time>` : "";

  // Halaman di subfolder (links/, karya/) memasang <body data-base="../">
  // agar path aset dan tautan antarhalaman tetap benar.
  const base = document.body.dataset.base || "";
  const asset = (path) => base + String(path).replace(/^\.\//, "");
  const storyUrl = (k) => `${base}karya/?p=${encodeURIComponent(k.slug)}`;

  function fill(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  // --- RENDER KONTEN ---
  document.querySelectorAll("[data-icon]").forEach((el) => {
    el.innerHTML = icon(el.dataset.icon, "w-full h-full");
  });

  document.querySelectorAll("[data-updated]").forEach((el) => {
    el.innerHTML = content.updated ? timeTag(content.updated) : "—";
  });

  document.querySelectorAll("[data-intro]").forEach((el) => {
    const section = content[el.dataset.intro];
    el.textContent = (section && section.intro) || "";
  });

  fill(
    "now-grid",
    (content.now || [])
      .map((item, i) => {
        const a = accent(item.kanal);
        return `
        <article class="bg-paper border border-line rounded-xl p-6 flex flex-col reveal" style="transition-delay:${i * 80}ms">
          <span class="w-10 h-10 rounded-lg ${a.soft} ${a.text} grid place-items-center mb-5">${icon(item.kanal, "w-5 h-5")}</span>
          <p class="text-xs font-semibold uppercase tracking-wider ${a.text} mb-1.5">${esc(item.label)}</p>
          <h3 class="font-display text-lg font-bold leading-snug mb-2">${esc(item.title)}</h3>
          <p class="text-sm text-muted leading-relaxed">${esc(item.note)}</p>
          ${item.since ? `<p class="mt-auto pt-4 font-mono text-xs text-muted">sejak ${timeTag(item.since)}</p>` : ""}
        </article>`;
      })
      .join("")
  );

  const lari = content.lari || {};
  fill(
    "lari-stats",
    (lari.stats || [])
      .map(
        (s) => `
        <div class="card p-5">
          <dt class="text-xs text-muted mb-1">${esc(s.label)}</dt>
          <dd class="font-display text-2xl font-bold">${esc(s.value)}</dd>
        </div>`
      )
      .join("")
  );
  fill(
    "lari-log",
    (lari.log || [])
      .map(
        (entry) => `
        <li class="py-4 grid grid-cols-[6.5rem_1fr] sm:grid-cols-[7rem_4.5rem_5.5rem_1fr] gap-x-4 gap-y-1 items-baseline">
          <span class="font-mono text-xs text-muted">${timeTag(entry.date)}</span>
          <span class="font-display text-lg font-bold text-run">${esc(entry.distance)}</span>
          <span class="font-mono text-xs text-muted col-start-2 sm:col-start-auto">${esc(entry.pace)}</span>
          <span class="text-sm col-span-2 sm:col-span-1">${esc(entry.note)}</span>
        </li>`
      )
      .join("")
  );

  const game = content.game || {};
  if (game.playing) {
    const p = game.playing;
    const meta = [p.platform, p.hours].filter(Boolean).map(esc).join(" · ");
    fill(
      "game-playing",
      `
      <article class="bg-paper border border-line rounded-xl p-6 sm:p-8 flex gap-6 items-start">
        <span class="hidden sm:grid w-14 h-14 shrink-0 rounded-xl bg-play/10 text-play place-items-center">${icon("game", "w-7 h-7")}</span>
        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-play mb-1.5">Sedang dimainkan</p>
          <h3 class="font-display text-2xl sm:text-3xl font-bold mb-1">${esc(p.title)}</h3>
          ${meta ? `<p class="font-mono text-xs text-muted mb-4">${meta}</p>` : ""}
          <p class="text-muted leading-relaxed max-w-xl">${esc(p.note)}</p>
        </div>
      </article>`
    );
  }
  const favEl = document.getElementById("game-favorites");
  if (favEl) {
    const favs = game.favorites || [];
    if (favs.length === 0) {
      favEl.classList.add("hidden");
    } else {
      favEl.classList.remove("hidden");
      favEl.innerHTML = favs
        .map(
          (g) => `
          <li class="bg-paper border border-line rounded-xl p-5">
            <div class="flex items-baseline justify-between gap-4 mb-1">
              <h4 class="font-display text-lg font-bold">${esc(g.title)}</h4>
              <span class="tag bg-surface shrink-0">${esc(g.genre)}</span>
            </div>
            <p class="text-sm text-muted leading-relaxed">${esc(g.note)}</p>
          </li>`
        )
        .join("");
    }
  }

  fill(
    "film-list",
    ((content.film && content.film.list) || [])
      .map((f) => {
        const rating = Math.max(0, Math.min(5, Number(f.rating) || 0));
        return `
        <li class="py-5 grid sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1">
          <div>
            <h3 class="font-display text-lg font-bold">${esc(f.title)} <span class="font-mono text-xs font-normal text-muted">${esc(f.year)}</span></h3>
            <p class="text-sm text-muted mt-0.5">${esc(f.note)}</p>
          </div>
          <p class="text-film tracking-widest sm:text-right" aria-label="Nilai ${rating} dari 5">
            ${"★".repeat(rating)}<span class="opacity-25">${"★".repeat(5 - rating)}</span>
          </p>
        </li>`;
      })
      .join("")
  );

  // Kartu karya sengaja ringkas; ceritanya ada di halaman karya/?p=<slug>
  const karya = content.karya || [];
  const cover = (k, cls) =>
    k.image
      ? `<img src="${esc(asset(k.image))}" alt="Tangkapan layar ${esc(k.title)}" loading="lazy" class="${cls} object-cover object-top" />`
      : `<div class="${cls} grid place-items-center bg-code/10 text-code">${icon("kode", "w-16 h-16")}</div>`;
  const statusBadge = (k) =>
    k.status
      ? `<span class="text-xs font-semibold px-2.5 py-1 bg-accent text-white rounded-full">${esc(k.status)}</span>`
      : "";
  const visitLink = (k) => (k.links || [])[0];

  fill(
    "karya-list",
    karya
      .map((k) => {
        const visit = visitLink(k);
        return `
        <article class="relative group bg-paper border border-line rounded-xl p-4 flex flex-col hover:border-ink transition-colors reveal">
          <div class="relative">
            ${cover(k, "w-full aspect-[16/9] rounded-lg border border-line")}
            <span class="absolute top-3 left-3">${statusBadge(k)}</span>
          </div>
          <div class="px-2 pt-5 pb-2 flex flex-col flex-1">
            <p class="font-mono text-xs text-muted mb-2">${timeTag(k.launched || k.updated || k.added, true)}</p>
            <h3 class="font-display text-2xl font-bold leading-tight mb-2">
              <a href="${storyUrl(k)}" class="after:absolute after:inset-0 after:rounded-xl">${esc(k.title)}</a>
            </h3>
            ${k.untuk ? `<p class="text-xs font-semibold uppercase tracking-wider text-code mb-3">Untuk ${esc(k.untuk)}</p>` : ""}
            <p class="text-muted leading-relaxed mb-6">${esc(k.ringkas)}</p>
            <div class="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold font-display">
              <span class="text-accent">Baca kisahnya <span class="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></span>
              ${visit ? `<a href="${esc(visit.url)}" target="_blank" rel="noopener noreferrer" class="link relative z-10">${esc(visit.label)} ↗</a>` : ""}
            </div>
          </div>
        </article>`;
      })
      .join("")
  );

  // --- HALAMAN KISAH KARYA (karya/?p=<slug>) ---
  const kisahEl = document.getElementById("kisah");
  if (kisahEl) {
    const slug = new URLSearchParams(location.search).get("p");
    const index = karya.findIndex((k) => k.slug === slug);
    const k = karya[index];

    if (!k) {
      kisahEl.innerHTML = `
        <div class="max-w-xl mx-auto px-4 py-32 text-center">
          <h1 class="section-title mb-4">Kisah ini belum ada<span class="text-accent">.</span></h1>
          <p class="text-muted mb-8">Mungkin tautannya berubah. Semua karya ada di halaman utama.</p>
          <a href="../#karya" class="btn-primary">Lihat semua karya</a>
        </div>`;
    } else {
      document.title = `${k.title} — Agus Tinus Turnip`;
      const visit = visitLink(k);
      const next = karya[(index + 1) % karya.length];
      const dates = [
        ["Mulai", k.started],
        ["Rilis", k.launched],
        ["Diperbarui", k.updated],
      ].filter(([, d]) => d);

      kisahEl.innerHTML = `
        <header class="max-w-page mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10">
          <div class="max-w-3xl reveal">
            <div class="flex flex-wrap items-center gap-3 mb-6">
              ${statusBadge(k)}
              ${k.untuk ? `<span class="text-xs font-semibold uppercase tracking-wider text-code">Untuk ${esc(k.untuk)}</span>` : ""}
            </div>
            <h1 class="font-display font-bold tracking-tight leading-[1.05] text-4xl sm:text-6xl mb-5">${esc(k.title)}<span class="text-accent">.</span></h1>
            <p class="text-lg sm:text-xl text-muted leading-relaxed mb-8">${esc(k.ringkas)}</p>
            ${visit ? `<a href="${esc(visit.url)}" target="_blank" rel="noopener noreferrer" class="btn-primary">${esc(visit.label)} situsnya ↗</a>` : ""}
          </div>
        </header>

        <figure class="max-w-page mx-auto px-4 sm:px-6 reveal">
          ${cover(k, "w-full aspect-[16/9] rounded-xl border border-line")}
        </figure>

        <div class="max-w-page mx-auto px-4 sm:px-6 py-16 sm:py-20 grid md:grid-cols-12 gap-12">
          <article class="md:col-span-8 max-w-prose">
            ${
              k.insight
                ? `<blockquote class="border-l-4 border-accent pl-6 mb-14 reveal">
                     <p class="eyebrow text-accent mb-3">Yang saya pelajari dari penggunanya</p>
                     <p class="font-display text-xl sm:text-2xl font-semibold leading-snug">${esc(k.insight)}</p>
                   </blockquote>`
                : ""
            }
            ${(k.kisah || [])
              .map(
                (bagian) => `
                <section class="mb-12 reveal">
                  <h2 class="font-display text-2xl font-bold tracking-tight mb-4">${esc(bagian.judul)}</h2>
                  <div class="space-y-4 text-lg leading-relaxed text-muted">
                    ${(bagian.paragraf || []).map((p) => `<p>${esc(p)}</p>`).join("")}
                  </div>
                </section>`
              )
              .join("")}
          </article>

          <aside class="md:col-span-4 space-y-8 md:sticky md:top-24 self-start reveal">
            ${
              dates.length
                ? `<dl class="card p-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                     ${dates.map(([label, d]) => `<dt class="text-muted">${label}</dt><dd class="font-mono text-right">${timeTag(d)}</dd>`).join("")}
                   </dl>`
                : ""
            }
            ${
              (k.tags || []).length
                ? `<div>
                     <p class="text-sm text-muted mb-3">Dirakit bersama AI, di atas</p>
                     <ul class="flex flex-wrap gap-1.5">
                       ${k.tags.map((t) => `<li class="tag bg-surface border border-line">${esc(t)}</li>`).join("")}
                     </ul>
                   </div>`
                : ""
            }
          </aside>
        </div>

        ${
          next && next !== k
            ? `<nav class="bg-surface border-t border-line" aria-label="Karya lainnya">
                 <a href="${storyUrl(next)}" class="max-w-page mx-auto px-4 sm:px-6 py-12 flex items-center justify-between gap-6 group">
                   <span>
                     <span class="block text-sm text-muted mb-1">Kisah berikutnya</span>
                     <span class="block font-display text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-accent transition-colors">${esc(next.title)}</span>
                   </span>
                   <span class="text-accent text-3xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                 </a>
               </nav>`
            : ""
        }`;
    }
  }

  fill(
    "catatan-list",
    (content.catatan || [])
      .map((c) => {
        const a = accent(c.kanal);
        return `
        <details class="border-b border-line">
          <summary class="py-5 cursor-pointer flex gap-4 items-start">
            <div class="flex-1">
              <h3 class="font-display text-lg font-bold leading-snug">${esc(c.title)}</h3>
              <p class="text-xs text-muted mt-1 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full ${a.bg}"></span>${timeTag(c.date)} · ${esc(c.excerpt)}
              </p>
            </div>
            <svg class="details-icon w-5 h-5 mt-1 shrink-0 text-muted transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </summary>
          <div class="pb-6 space-y-4 leading-relaxed text-muted max-w-prose">
            ${(c.body || []).map((p) => `<p>${esc(p)}</p>`).join("")}
          </div>
        </details>`;
      })
      .join("")
  );

  // --- TAUTAN EKSTERNAL ---
  const links = content.links || [];

  // Tautan yang menempel pada satu kanal, mis. IMDb di bagian Film
  document.querySelectorAll("[data-links-kanal]").forEach((el) => {
    el.innerHTML = links
      .filter((l) => l.kanal === el.dataset.linksKanal)
      .map(
        (l) => `
        <a href="${esc(l.url)}"${external(l.url)} class="chip">
          ${brandIcon(l.id, "w-4 h-4")}${esc(l.label)} <span aria-hidden="true">↗</span>
        </a>`
      )
      .join("");
  });

  // Deretan tombol di bagian Ngobrol (email sudah punya tombol sendiri)
  fill(
    "links-row",
    links
      .filter((l) => l.id !== "email")
      .map(
        (l) => `
        <a href="${esc(l.url)}"${external(l.url)} class="btn-outline">
          ${brandIcon(l.id, "w-4 h-4")}${esc(l.label)}
        </a>`
      )
      .join("")
  );

  // Halaman /links
  fill(
    "links-list",
    links
      .map(
        (l, i) => `
        <li class="reveal" style="transition-delay:${i * 60}ms">
          <a href="${esc(l.url)}"${external(l.url)} class="card p-4 flex items-center gap-4 hover:border-ink hover:-translate-y-0.5 transition group">
            <span class="w-11 h-11 shrink-0 rounded-lg bg-paper border border-line grid place-items-center">${brandIcon(l.id, "w-6 h-6")}</span>
            <span class="flex-1 min-w-0">
              <span class="block font-display font-semibold">${esc(l.label)}</span>
              <span class="block text-sm text-muted truncate">${esc(l.handle)}</span>
            </span>
            <span class="text-accent text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">›</span>
          </a>
        </li>`
      )
      .join("")
  );

  const featured = karya.find((k) => k.status);
  if (featured) {
    fill(
      "links-featured",
      `
      <a href="${storyUrl(featured)}" class="card overflow-hidden block hover:border-ink transition-colors group">
        ${cover(featured, "w-full aspect-[16/9] border-b border-line")}
        <span class="block p-4">
          <span class="inline-block mb-2">${statusBadge(featured)}</span>
          <span class="block font-display font-semibold">${esc(featured.title)}</span>
          <span class="block text-sm text-muted mb-2">${esc(featured.ringkas)}</span>
          <span class="text-sm font-semibold font-display text-accent">Baca kisahnya <span class="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></span>
        </span>
      </a>`
    );
  }

  // --- ANIMASI MUNCUL SAAT SCROLL ---
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  }
});
