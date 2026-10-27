document.addEventListener("DOMContentLoaded", function () {
  const content = window.SITE_CONTENT || {};
  const htmlElement = document.documentElement;

  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // --- MENU MOBILE ---
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  function setMenu(open) {
    mobileMenu.classList.toggle("hidden", !open);
    menuButton.setAttribute("aria-expanded", String(open));
  }

  menuButton.addEventListener("click", () => {
    setMenu(mobileMenu.classList.contains("hidden"));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

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
    lari: { text: "text-run", bg: "bg-run", border: "border-t-run" },
    game: { text: "text-play", bg: "bg-play", border: "border-t-play" },
    film: { text: "text-film", bg: "bg-film", border: "border-t-film" },
    kode: { text: "text-code", bg: "bg-code", border: "border-t-code" },
  };
  const accent = (kanal) => ACCENT[kanal] || ACCENT.kode;

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatDate(iso) {
    const [y, m, d] = String(iso).split("-").map(Number);
    if (!y || !m || !d) return esc(iso);
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(y, m - 1, d));
  }

  function fill(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  // --- RENDER KONTEN ---
  document.querySelectorAll("[data-updated]").forEach((el) => {
    el.textContent = content.updated ? formatDate(content.updated) : "—";
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
        <article class="card border-t-4 ${a.border} p-6 flex flex-col reveal" style="transition-delay:${i * 80}ms">
          <p class="eyebrow ${a.text} mb-4">${esc(item.label)}</p>
          <h3 class="font-serif text-2xl leading-tight mb-3">${esc(item.title)}</h3>
          <p class="text-sm text-muted leading-relaxed">${esc(item.note)}</p>
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
        <div class="bg-surface p-5">
          <dt class="eyebrow mb-2">${esc(s.label)}</dt>
          <dd class="font-serif text-3xl">${esc(s.value)}</dd>
        </div>`
      )
      .join("")
  );
  fill(
    "lari-log",
    (lari.log || [])
      .map(
        (entry) => `
        <li class="py-4 grid grid-cols-[6.5rem_1fr] sm:grid-cols-[7rem_5rem_6rem_1fr] gap-x-4 gap-y-1 items-baseline">
          <span class="font-mono text-xs text-muted">${formatDate(entry.date)}</span>
          <span class="font-serif text-xl text-run">${esc(entry.distance)}</span>
          <span class="font-mono text-xs text-muted col-start-2 sm:col-start-auto">${esc(entry.pace)}</span>
          <span class="text-sm col-span-2 sm:col-span-1">${esc(entry.note)}</span>
        </li>`
      )
      .join("")
  );

  const game = content.game || {};
  if (game.playing) {
    const p = game.playing;
    fill(
      "game-playing",
      `
      <article class="card border-l-4 border-l-play p-6 sm:p-8">
        <p class="eyebrow text-play mb-3">Sedang dimainkan</p>
        <h3 class="font-serif text-3xl sm:text-4xl mb-2">${esc(p.title)}</h3>
        <p class="font-mono text-xs text-muted mb-4">${esc(p.platform)} · ${esc(p.hours)}</p>
        <p class="text-muted leading-relaxed max-w-xl">${esc(p.note)}</p>
      </article>`
    );
  }
  fill(
    "game-favorites",
    (game.favorites || [])
      .map(
        (g) => `
        <li class="border-t border-line pt-4">
          <div class="flex items-baseline justify-between gap-4 mb-1">
            <h4 class="font-serif text-xl">${esc(g.title)}</h4>
            <span class="tag shrink-0">${esc(g.genre)}</span>
          </div>
          <p class="text-sm text-muted leading-relaxed">${esc(g.note)}</p>
        </li>`
      )
      .join("")
  );

  fill(
    "film-list",
    ((content.film && content.film.list) || [])
      .map((f) => {
        const rating = Math.max(0, Math.min(5, Number(f.rating) || 0));
        return `
        <li class="py-5 grid sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1">
          <div>
            <h3 class="font-serif text-2xl">${esc(f.title)} <span class="font-mono text-xs text-muted align-middle">${esc(f.year)}</span></h3>
            <p class="text-sm text-muted mt-1">${esc(f.note)}</p>
          </div>
          <p class="text-film tracking-widest sm:text-right" aria-label="Nilai ${rating} dari 5">
            ${"★".repeat(rating)}<span class="opacity-25">${"★".repeat(5 - rating)}</span>
          </p>
        </li>`;
      })
      .join("")
  );

  fill(
    "karya-list",
    (content.karya || [])
      .map((k) => {
        const cover = k.image
          ? `<img src="${esc(k.image)}" alt="Tangkapan layar ${esc(k.title)}" loading="lazy" class="w-full aspect-[16/9] object-cover border-b border-line" />`
          : `<div class="w-full aspect-[16/9] border-b border-line grid place-items-center bg-code/10">
               <span class="font-serif italic text-6xl text-code">${esc(k.title.charAt(0))}</span>
             </div>`;
        const links = (k.links || [])
          .map(
            (l) =>
              `<a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer" class="link">${esc(l.label)} ↗</a>`
          )
          .join("");
        const status = k.status
          ? `<span class="absolute top-3 left-3 font-mono text-[0.7rem] uppercase tracking-wider px-2 py-1 bg-ink text-paper rounded-sm">${esc(k.status)}</span>`
          : "";
        return `
        <article class="card overflow-hidden flex flex-col reveal">
          <div class="relative">${cover}${status}</div>
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-baseline justify-between gap-4 mb-2">
              <h3 class="font-serif text-2xl leading-tight">${esc(k.title)}</h3>
              <span class="font-mono text-xs text-muted">${esc(k.year)}</span>
            </div>
            <p class="text-sm text-muted leading-relaxed mb-4">${esc(k.description)}</p>
            <ul class="flex flex-wrap gap-1.5 mb-6">
              ${(k.tags || []).map((t) => `<li class="tag">${esc(t)}</li>`).join("")}
            </ul>
            <div class="mt-auto flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">${links}</div>
          </div>
        </article>`;
      })
      .join("")
  );

  fill(
    "catatan-list",
    (content.catatan || [])
      .map((c) => {
        const a = accent(c.kanal);
        return `
        <details class="card group reveal">
          <summary class="p-6 cursor-pointer flex gap-4 items-start">
            <div class="flex-1">
              <p class="font-mono text-xs text-muted mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full ${a.bg}"></span>${formatDate(c.date)}
              </p>
              <h3 class="font-serif text-2xl leading-tight mb-2">${esc(c.title)}</h3>
              <p class="text-sm text-muted">${esc(c.excerpt)}</p>
            </div>
            <span class="details-icon font-mono text-2xl leading-none text-muted transition-transform" aria-hidden="true">+</span>
          </summary>
          <div class="mx-6 pb-6 pt-5 space-y-4 leading-relaxed max-w-prose border-t border-line">
            ${(c.body || []).map((p) => `<p>${esc(p)}</p>`).join("")}
          </div>
        </details>`;
      })
      .join("")
  );

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
