(function () {
  const VERSION = '1.6.5';
  const ANDROID_VERSION = '2.0.9';
  const RELEASES_BASE = 'https://github.com/ravvdevv/ravmp-landing/releases/download';
  const releaseAsset = (tag, file) => `${RELEASES_BASE}/${tag}/${file}`;
  const windowsAsset = (version, file) => releaseAsset(`v${version}`, `RavMP_${version}_${file}`);
  const androidAsset = (file) => releaseAsset(`v${ANDROID_VERSION}`, file);
  const data = {
    product: {
      name: 'RavMP',
      version: VERSION,
      releaseYear: '2025',
      stability: 'Stable',
      compatibility: 'Requires: GTA San Andreas — Windows 7 or later'
    },
    nav: {
      links: [
        { href: '#features', label: 'Features', ariaLabel: 'View RavMP Features' },
        { href: '#why-ravmp', label: 'Why Us', ariaLabel: 'Why choose RavMP?' },
        { href: '#connect', label: 'Connect', ariaLabel: 'How to Connect' },
        { href: '#download', label: 'Download', ariaLabel: 'Download RavMP' },
        { href: '#versions', label: 'Versions', ariaLabel: 'View Previous Versions' }
      ],
      cta: { href: '#download', label: `Get v${VERSION}`, ariaLabel: `Download Latest Version ${VERSION}` }
    },
    tickerItems: [
      `Version ${VERSION} now live`,
      'Windows x64 supported',
      'GTA San Andreas compatible',
      'Open source multiplayer',
      'Custom server browser',
      'AML/MonetLoader support'
    ],
    hero: {
      badge: `Latest — v${VERSION} — Stable Release`,
      title: 'RavMP',
      subtitle:
        'Hop into GTA San Andreas multiplayer in a few clicks. Connect, tweak your setup, and jump in fast with the most reliable launcher.',
      actions: [
        { href: '#download', label: 'Download for Windows', ariaLabel: 'Download RavMP for Windows', type: 'primary' },
        { href: '#download', label: 'Download for mobile', ariaLabel: 'Download RavMP for Android', type: 'primary' },
        { href: '#features', label: 'Let\'s Connect', ariaLabel: 'View Feature Highlights', type: 'ghost' }
      ],
      stats: [
        { value: VERSION, label: 'Current Build' },
        { value: 'x64', label: 'Architecture' },
        { value: 'Win', label: 'Platform' },
        { value: 'SA', label: 'Game Target' }
      ]
    },
    features: [
      {
        title: 'Server Browser',
        desc: 'Browse and connect to multiplayer servers instantly. Filter by ping, player count, and game mode.',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>'
      },
      {
        title: 'Fast Launch',
        desc: 'One-click game launch with automatic path detection. No manual config — just play.',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>'
      },
      {
        title: 'AML/MonetLoader for Mobile',
        desc: 'Built-in AML and Monet loader for Android.',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>'
      },
      {
        title: 'Clean Interface',
        desc: 'Minimal, distraction-free UI. Get to the server list in under 3 seconds after launch.',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>'
      },
      {
        title: 'Chat Integration',
        desc: 'In-launcher chat and server announcements before you even connect.',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2H3v16h5v4l4-4h5l4-4V2z" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="9" y1="12" x2="12" y2="12" /></svg>'
      },
      {
        title: 'Auto-Updater',
        desc: 'Silent background updates. You always have the latest launcher build, automatically.',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M12 2v2M12 20v2M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M2 12h2M20 12h2" /></svg>'
      }
    ],
    why: [
      {
        title: 'Low-Spec Optimization',
        desc: 'Engineered for performance. Play on anything from a high-end rig to a legacy potato PC without frame drops.'
      },
      {
        title: 'Open.mp Ready',
        desc: 'Fully compatible with the open.mp successor client. The bridge between legacy SAMP and the future of modding.'
      },
      {
        title: 'Mobile-PC Sync',
        desc: 'Synchronized accounts and favorites across Windows and Android. Your progress follows you everywhere.'
      }
    ],
    downloads: [
      {
        platform: 'Windows',
        name: 'RavMP for Windows',
        meta: '64-bit • Recommended',
        date: 'May 2026',
        options: [
          { label: 'EXE', href: windowsAsset(VERSION, 'x64-setup.exe') },
          { label: 'MSI', href: windowsAsset(VERSION, 'x64_en-US.msi') }
        ]
      },
      {
        platform: 'Android',
        name: 'RavMP for Android',
        meta: 'ARM64 & ARMv7 Support',
        date: 'May 2026',
        options: [
          { label: 'ARM64', href: androidAsset('RavMP-arm64-v8a.apk') },
          { label: 'ARMv7', href: androidAsset('RavMP-armeabi-v7a.apk') }
        ]
      }
    ],
    requirements: [
      { label: 'Operating System', value: 'Windows 7 or Later', note: '64-bit Operating System Required' },
      { label: 'Architecture', value: 'x64 / AMD64', note: 'Intel 64 & AMD Processors Supported' },
      { label: 'Base Game', value: 'GTA San Andreas', note: 'Compatible with Most PC Versions' },
      { label: 'Runtime', value: 'VC++ Redistributable', note: 'Automatically Installed with RavMP' }
    ],
    faq: [
      {
        title: 'What is RavMP?',
        desc: 'RavMP is a high-performance, multiplayer launcher for GTA San Andreas. It allows players to easily find and connect to servers on both Windows and Android platforms with a modern, clean interface.'
      },
      {
        title: 'Is RavMP free to use?',
        desc: 'Yes, RavMP is 100% free. We believe in providing a seamless multiplayer experience for the GTA community without any hidden costs.'
      },
      {
        title: 'Does it work on Android?',
        desc: 'Absolutely. RavMP features a dedicated Android version with built-in support for AML and Monet loaders, making it the premier choice for GTA SA mobile multiplayer.'
      },
      {
        title: 'How do I update the launcher?',
        desc: "RavMP includes a silent auto-updater. You'll always be running the latest version with the newest features and security fixes without having to manually download updates."
      }
    ],
    footerLinks: [
      { href: 'https://github.com/ravvdevv', label: 'GitHub', ariaLabel: 'Visit RavMP on GitHub' },
      { href: 'https://discord.gg/2t3RzB5vR5', label: 'Discord', ariaLabel: 'Join RavMP Discord Server' }
    ],
    changelog: [
      {
        "version": "1.6.5",
        "date": "May 2026",
        "type": "Stable",
        "items": [
          "🚀 Added: Add download tracking to landing page buttons",
          "🛠️ Fixed: Remove open-source references from FAQ",
          "✨ Improved: Rename archives to versions",
          "🎨 UI Improvements: Redesign download section with multi-option cards",
          "✨ Improved: Refactor changelog generation to only include conventional commits",
          "🚀 Added: Add version archive system and archives section"
        ]
      },
      {
        "version": "1.6.4",
        "date": "May 2026",
        "type": "Stable",
        "items": [
          "🚀 Added: Add landing page with dark theme styles and app binaries"
        ]
      }
    ],
    versions: [
      { version: '1.6.4', date: 'May 2026' },
      { version: '1.6.3', date: 'May 2026' }
    ]
  };

  function downloadIcon(size = 14) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>`;
  }
  const connectIcon = '<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8H6a1 1 0 0 0-1 1v2a7 7 0 0 0 14 0V9a1 1 0 0 0-1-1z" /></svg>';

  const el = (id) => document.getElementById(id);

  function renderNav() {
    const nav = el('nav-links');
    if (!nav) return;
    nav.innerHTML = `${data.nav.links
      .map(
        (item) => `<li><a href="${item.href}" aria-label="${item.ariaLabel}">${item.label}</a></li>`
      )
      .join('')}
      <li>
        <a href="${data.nav.cta.href}" class="nav-cta" aria-label="${data.nav.cta.ariaLabel}">
          ${downloadIcon()}
          ${data.nav.cta.label}
        </a>
      </li>`;
  }

  function renderTicker() {
    const ticker = el('ticker-items');
    if (!ticker) return;
    const items = [...data.tickerItems, ...data.tickerItems];
    ticker.innerHTML = items.map((item) => `<span class="ticker-item"><span>//</span> ${item}</span>`).join('');
  }

  function renderHero() {
    const badge = el('hero-badge');
    const title = el('hero-title');
    const sub = el('hero-sub');
    const actions = el('hero-actions');
    const meta = el('hero-meta');

    if (badge) badge.innerHTML = '<div class="badge-dot"></div>' + data.hero.badge;
    if (title) title.textContent = data.hero.title;
    if (sub) sub.textContent = data.hero.subtitle;

    if (actions) {
      actions.innerHTML = data.hero.actions
        .map((a) => {
          const cls = a.type === 'ghost' ? 'btn-ghost' : 'btn-primary';
          const icon = a.type === 'ghost' ? connectIcon : downloadIcon(16);
          return `<a href="${a.href}" class="${cls}" aria-label="${a.ariaLabel}">${icon}${a.label}</a>`;
        })
        .join('');
    }

    if (meta) {
      meta.innerHTML = data.hero.stats
        .map(
          (s, i) =>
            `<div class="hero-stat"><div class="hero-stat-num">${s.value}</div><div class="hero-stat-label">${s.label}</div></div>${i < data.hero.stats.length - 1 ? '<div class="hero-divider"></div>' : ''
            }`
        )
        .join('');
    }
  }

  function renderVersionStrip() {
    const info = el('version-info');
    const compat = el('version-compat');
    const dVersion = el('download-version');

    if (info) {
      info.innerHTML = `<span class="version-tag">Build <strong>${data.product.version}</strong></span>
      <span class="version-tag">·</span>
      <span class="version-tag">Released <strong>${data.product.releaseYear}</strong></span>
      <span class="version-pill">${data.product.stability}</span>`;
    }

    if (compat) compat.textContent = data.product.compatibility;
    if (dVersion) dVersion.textContent = `v${data.product.version}`;
  }

  function renderFeatureGrid(targetId, items, withIcons = false, leftAlign = false) {
    const container = el(targetId);
    if (!container) return;

    container.innerHTML = items
      .map(
        (item) => `<div class="feature-card${leftAlign ? ' faq-card-left' : ''}">
          ${withIcons ? `<div class="feature-icon">${item.icon}</div>` : ''}
          <div class="feature-title">${item.title}</div>
          <div class="feature-desc">${item.desc}</div>
        </div>`
      )
      .join('');
  }

  function renderDownloads() {
    const grid = el('download-grid');
    if (!grid) return;

    grid.innerHTML = data.downloads
      .map(
        (d) => `<div class="download-card">
        <div class="download-card-left">
          <div class="download-card-type">${d.platform}</div>
          <div class="download-card-name">${d.name}</div>
          <div class="download-card-meta">${d.meta}${d.date ? ` • Released ${d.date}` : ''}</div>
        </div>
        <div style="display: flex; gap: 8px;">
          ${d.options.map(opt => `<a href="${opt.href}" class="download-btn" style="text-decoration: none;" onclick="window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'download',platform:'${d.platform}',type:'${opt.label}'});">${opt.label}</a>`).join('')}
        </div>
      </div>`
      )
      .join('');
  }

  function renderRequirements() {
    const grid = el('requirements-grid');
    if (!grid) return;

    grid.innerHTML = data.requirements
      .map(
        (r) => `<div class="req-item">
        <div class="req-label">${r.label}</div>
        <div class="req-value">${r.value}</div>
        <div class="req-note">${r.note}</div>
      </div>`
      )
      .join('');
  }

  function renderFooterLinks() {
    const links = el('footer-links');
    if (!links) return;

    links.innerHTML = data.footerLinks
      .map(
        (l) =>
          `<a href="${l.href}" target="_blank" rel="noopener noreferrer" aria-label="${l.ariaLabel}">${l.label}</a>`
      )
      .join('');
  }

  function renderChangelog() {
    const container = el('changelog-container');
    if (!container) return;

    container.innerHTML = data.changelog
      .map(
        (log) => `
      <div class="changelog">
        <div class="changelog-header">
          <div class="changelog-header-title">Version ${log.version}</div>
          <div class="changelog-tag tag-stable">${log.type}</div>
        </div>
        ${log.items
            .map(
              (item) => `
          <div class="changelog-row">
            <div class="changelog-date">${log.date}</div>
            <div class="changelog-desc">${item}</div>
          </div>`
            )
            .join('')}
      </div>`
      )
      .join('');
  }

  function renderVersions() {
    const container = el('versions-container');
    if (!container) return;

    container.innerHTML = data.versions
      .map(
        (v) => `
      <div class="download-card">
        <div class="download-card-left">
          <div class="download-card-type">Legacy Release</div>
          <div class="download-card-name">RavMP v${v.version}</div>
          <div class="download-card-meta">Released ${v.date}</div>
        </div>
        <div style="display: flex; gap: 8px;">
          <a href="${windowsAsset(v.version, 'x64-setup.exe')}" class="download-btn" style="text-decoration: none;" onclick="window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'download',platform:'Legacy',type:'EXE',version:'${v.version}'});">EXE</a>
          <a href="${windowsAsset(v.version, 'x64_en-US.msi')}" class="download-btn" style="text-decoration: none;" onclick="window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'download',platform:'Legacy',type:'MSI',version:'${v.version}'});">MSI</a>
        </div>
      </div>`
      )
      .join('');
  }

  function init() {
    renderNav();
    renderTicker();
    renderHero();
    renderVersionStrip();
    renderFeatureGrid('features-grid', data.features, true, false);
    renderFeatureGrid('why-grid', data.why, false, false);
    renderDownloads();
    renderRequirements();
    renderFeatureGrid('faq-grid', data.faq, false, true);
    renderFooterLinks();
    renderChangelog();
    renderVersions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
