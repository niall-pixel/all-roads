/* ============================================================
   ALLROADS — Trails Listing Page
   ============================================================ */
import { initScrollReveal, cleanupScrollReveal, initNewsletter } from '../shared.js';
import { trails } from '../data/trails.js';

function trailCardHTML(t) {
    return `
    <article class="trail-card trail-card--compact" data-difficulty="${t.difficulty}" data-tags="${t.tags}">
      <a href="#/trail/${t.id}" class="trail-card__img-wrap">
        <img src="${t.img}" alt="${t.imgAlt}" class="trail-card__img" loading="lazy" />
        <div class="trail-card__badges">
          ${t.badges.map(b => `<span class="trail-card__badge ${b.cls}">${b.text}</span>`).join('')}
        </div>
        <button class="trail-card__save" aria-label="Save trail" onclick="event.preventDefault();event.stopPropagation()">
          <span class="material-symbols-outlined">favorite_border</span>
        </button>
      </a>
      <div class="trail-card__body">
        <h3 class="trail-card__title">${t.name}</h3>
        <p class="trail-card__location">
          <span class="material-symbols-outlined">location_on</span>
          ${t.location}
        </p>
        <div class="trail-card__meta">
          <span><span class="material-symbols-outlined">straighten</span> ${t.distance}</span>
          <span><span class="material-symbols-outlined">schedule</span> ${t.duration}</span>
          <span><span class="material-symbols-outlined">trending_up</span> ${t.elevation}</span>
        </div>
        <a href="#/trail/${t.id}" class="trail-card__link">View Trail Details →</a>
      </div>
    </article>`;
}

export function render() {
    return `
    <!-- TRAILS HERO -->
    <section class="page-hero">
      <div class="page-hero__bg">
        <img src="/images/wicklow-way-signpost.png" alt="Wicklow Way signpost" class="page-hero__img" />
        <div class="page-hero__overlay"></div>
      </div>
      <div class="page-hero__content">
        <span class="page-hero__tag">County Wicklow</span>
        <h1 class="page-hero__title">Family-Friendly Trails</h1>
        <p class="page-hero__desc">Handpicked walks across the Garden of Ireland — from gentle woodland loops to exhilarating mountain ridges.</p>
      </div>
    </section>

    <!-- TRAIL FINDER -->
    <section class="trail-finder" id="trail-finder">
      <div class="trail-search" id="trail-search">
        <div class="trail-search__bar">
          <span class="material-symbols-outlined">location_on</span>
          <input type="text" placeholder="Search by trail name or area..." class="trail-search__input" id="trail-search-input" />
        </div>
        <div class="trail-search__filters">
          <button class="trail-filter active" data-filter="all" id="filter-all">All Trails</button>
          <button class="trail-filter" data-filter="easy" id="filter-easy">Easy</button>
          <button class="trail-filter" data-filter="moderate" id="filter-moderate">Moderate</button>
          <button class="trail-filter" data-filter="stroller" id="filter-stroller">
            <span class="material-symbols-outlined" style="font-size:16px;">stroller</span>
            Stroller Access
          </button>
        </div>
      </div>

      <div class="trail-grid" id="trail-grid">
        ${trails.map(trailCardHTML).join('')}
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="newsletter" id="newsletter">
      <div class="newsletter__inner">
        <h2 class="newsletter__title">New trails in your inbox</h2>
        <p class="newsletter__desc">Be the first to hear about new trail guides, seasonal route updates, and family hiking tips for County Wicklow.</p>
        <form class="newsletter__form" id="newsletter-form">
          <input type="email" class="newsletter__input" placeholder="your@email.com" required id="newsletter-email" />
          <button type="submit" class="btn btn--primary newsletter__btn" id="newsletter-submit">
            Subscribe
            <span class="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </section>
  `;
}

export function init() {
    initScrollReveal();
    initTrailFilters();
    initTrailSearch();
    initSaveButtons();
    initNewsletter();

    return () => { cleanupScrollReveal(); };
}

function initTrailFilters() {
    const filters = document.querySelectorAll('.trail-filter');
    const cards = document.querySelectorAll('.trail-card');

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const difficulty = card.dataset.difficulty;
                const tags = card.dataset.tags || '';
                const show = filter === 'all' || (filter === 'stroller' ? tags.includes('stroller') : difficulty === filter);

                card.style.transition = 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
                if (show) {
                    card.style.display = '';
                    requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; });
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => { card.style.display = 'none'; }, 400);
                }
            });
        });
    });
}

function initTrailSearch() {
    const input = document.getElementById('trail-search-input');
    const cards = document.querySelectorAll('.trail-card');

    input?.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        cards.forEach(card => {
            const title = card.querySelector('.trail-card__title')?.textContent.toLowerCase() || '';
            const location = card.querySelector('.trail-card__location')?.textContent.toLowerCase() || '';
            const tags = card.dataset.tags || '';
            const match = !query || title.includes(query) || location.includes(query) || tags.includes(query);

            card.style.transition = 'all 0.3s ease';
            if (match) {
                card.style.display = '';
                requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(10px)';
                setTimeout(() => { card.style.display = 'none'; }, 300);
            }
        });
    });
}

function initSaveButtons() {
    document.querySelectorAll('.trail-card__save').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('saved');
            const icon = btn.querySelector('.material-symbols-outlined');
            icon.textContent = btn.classList.contains('saved') ? 'favorite' : 'favorite_border';
        });
    });
}
