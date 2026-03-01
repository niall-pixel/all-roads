/* ============================================================
   ALLROADS — Trail Detail Page
   ============================================================ */
import { trails, getTrail } from '../data/trails.js';
import { initScrollReveal, cleanupScrollReveal } from '../shared.js';

export function render() {
    const hash = window.location.hash.slice(1); // e.g. /trail/spinc
    const id = hash.replace('/trail/', '');
    const t = getTrail(id);

    if (!t) {
        return `
      <div style="text-align:center;padding:8rem 2rem">
        <h2 style="font-family:var(--ff-display);color:var(--forest);font-size:2rem">Trail not found</h2>
        <a href="#/trails" class="btn btn--primary" style="margin-top:2rem;display:inline-flex">Back to Trails</a>
      </div>`;
    }

    const related = trails.filter(r => r.id !== t.id).slice(0, 2);

    return `
    <section class="trail-detail">

      <!-- Hero -->
      <div class="trail-detail__hero">
        <img src="${t.img}" alt="${t.imgAlt}" class="trail-detail__hero-img" />
        <div class="trail-detail__hero-overlay"></div>
        <div class="trail-detail__hero-content">
          <a href="#/trails" class="trail-detail__back">
            <span class="material-symbols-outlined">arrow_back</span>
            All Trails
          </a>
          <div class="trail-detail__badges">
            ${t.badges.map(b => `<span class="trail-card__badge ${b.cls}">${b.text}</span>`).join('')}
          </div>
          <h1 class="trail-detail__title">${t.name}</h1>
          <p class="trail-detail__location">
            <span class="material-symbols-outlined">location_on</span>
            ${t.location}
          </p>
          <div class="trail-detail__meta">
            <div class="trail-detail__stat">
              <span class="material-symbols-outlined">straighten</span>
              <span class="trail-detail__stat-val">${t.distance}</span>
              <span class="trail-detail__stat-lbl">Distance</span>
            </div>
            <div class="trail-detail__stat">
              <span class="material-symbols-outlined">schedule</span>
              <span class="trail-detail__stat-val">${t.duration}</span>
              <span class="trail-detail__stat-lbl">Duration</span>
            </div>
            <div class="trail-detail__stat">
              <span class="material-symbols-outlined">trending_up</span>
              <span class="trail-detail__stat-val">${t.elevation}</span>
              <span class="trail-detail__stat-lbl">Elevation</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="trail-detail__body">
        <div class="trail-detail__main">

          <!-- About -->
          <div class="trail-detail__section reveal">
            <h2 class="trail-detail__section-title">About This Trail</h2>
            <p class="trail-detail__intro">${t.intro}</p>
            ${t.description.split('\n\n').map(p => `<p class="trail-detail__desc">${p}</p>`).join('')}
          </div>

          <!-- Highlights -->
          <div class="trail-detail__section reveal">
            <h2 class="trail-detail__section-title">Highlights</h2>
            <ul class="trail-detail__highlights">
              ${t.highlights.map(h => `
              <li class="trail-detail__highlight">
                <span class="material-symbols-outlined">check_circle</span>
                ${h}
              </li>`).join('')}
            </ul>
          </div>

          <!-- Who is it for -->
          <div class="trail-detail__section reveal">
            <h2 class="trail-detail__section-title">Who Is It For?</h2>
            <p class="trail-detail__desc">${t.whoIsItFor}</p>
          </div>

          <!-- Tips -->
          <div class="trail-detail__section reveal">
            <h2 class="trail-detail__section-title">Tips &amp; Good to Know</h2>
            <ul class="trail-detail__tips">
              ${t.tips.map(tip => `
              <li class="trail-detail__tip">
                <span class="material-symbols-outlined">info</span>
                ${tip}
              </li>`).join('')}
            </ul>
          </div>

        </div>

        <!-- Sidebar -->
        <aside class="trail-detail__sidebar">

          <!-- Getting There -->
          <div class="trail-detail__card reveal">
            <h3 class="trail-detail__card-title">
              <span class="material-symbols-outlined">directions_car</span>
              Getting There
            </h3>
            <p class="trail-detail__card-text">${t.gettingThere.driving}</p>
          </div>

          <div class="trail-detail__card reveal">
            <h3 class="trail-detail__card-title">
              <span class="material-symbols-outlined">local_parking</span>
              Parking
            </h3>
            <p class="trail-detail__card-text">${t.gettingThere.parking}</p>
            ${t.gettingThere.parking_note ? `<p class="trail-detail__card-note">${t.gettingThere.parking_note}</p>` : ''}
          </div>

          <!-- Quick Facts -->
          <div class="trail-detail__card trail-detail__card--facts reveal">
            <h3 class="trail-detail__card-title">
              <span class="material-symbols-outlined">summarize</span>
              Quick Facts
            </h3>
            <div class="trail-detail__facts">
              <div class="trail-detail__fact">
                <span>Distance</span><strong>${t.distance}</strong>
              </div>
              <div class="trail-detail__fact">
                <span>Duration</span><strong>${t.duration}</strong>
              </div>
              <div class="trail-detail__fact">
                <span>Elevation</span><strong>${t.elevation}</strong>
              </div>
              <div class="trail-detail__fact">
                <span>Difficulty</span><strong>${t.difficultyLabel}</strong>
              </div>
              <div class="trail-detail__fact">
                <span>Location</span><strong>${t.location}</strong>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="trail-detail__card trail-detail__card--map reveal">
            <h3 class="trail-detail__card-title">
              <span class="material-symbols-outlined">map</span>
              Map
            </h3>
            <div class="trail-detail__map">
              <iframe
                src="https://maps.google.com/maps?q=${t.mapCoords}&z=${t.mapZoom}&output=embed"
                title="Map of ${t.name}"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen>
              </iframe>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=${t.mapCoords}"
              target="_blank"
              rel="noopener"
              class="trail-detail__map-link">
              <span class="material-symbols-outlined">open_in_new</span>
              Open in Google Maps
            </a>
          </div>

        </aside>
      </div>

      <!-- Related Trails -->
      ${related.length > 0 ? `
      <div class="trail-detail__related">
        <h2 class="trail-detail__related-title">More Trails to Explore</h2>
        <div class="trail-grid trail-grid--related">
          ${related.map(r => trailCardHTML(r)).join('')}
        </div>
      </div>` : ''}

    </section>
  `;
}

function trailCardHTML(t) {
    return `
    <article class="trail-card trail-card--compact">
      <a href="#/trail/${t.id}" class="trail-card__img-wrap">
        <img src="${t.img}" alt="${t.imgAlt}" class="trail-card__img" loading="lazy" />
        <div class="trail-card__badges">
          ${t.badges.map(b => `<span class="trail-card__badge ${b.cls}">${b.text}</span>`).join('')}
        </div>
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

export function init() {
    initScrollReveal();
    return () => cleanupScrollReveal();
}
