/* ============================================================
   ALLROADS — Journal Page
   ============================================================ */
import { initScrollReveal, cleanupScrollReveal, initNewsletter } from '../shared.js';

export function render() {
    return `
    <!-- JOURNAL HERO -->
    <section class="page-hero page-hero--journal">
      <div class="page-hero__bg">
        <img src="/images/devils-glen.png" alt="Devil's Glen forest" class="page-hero__img" />
        <div class="page-hero__overlay"></div>
      </div>
      <div class="page-hero__content">
        <span class="page-hero__tag">The AllRoads Journal</span>
        <h1 class="page-hero__title">Stories from the Trail</h1>
        <p class="page-hero__desc">Guides, gear tips, and adventures from the Wicklow hills — written for families who explore together.</p>
      </div>
    </section>

    <section class="journal-page" id="journal-section">
      <div class="journal-page__grid">

        <!-- FEATURED ARTICLE -->
        <article class="journal-feature">
          <div class="journal-feature__img-wrap">
            <img src="/images/devils-glen.png" alt="Devil's Glen forest gorge" class="journal-feature__img" loading="lazy" />
          </div>
          <div class="journal-feature__body">
            <span class="journal-card__tag">Complete Guide</span>
            <h2 class="journal-feature__title">Devil's Glen, Co. Wicklow</h2>
            <p class="journal-feature__excerpt">Tucked away near the village of Ashford in County Wicklow, Devil's Glen is a hidden forest gorge where the Vartry River thunders into a dramatic waterfall. Two looped walking trails — the Seamus Heaney Walk and the Waterfall Walk — combine woodland beauty, sculpture, and poetry with the raw power of nature.</p>
            <p class="journal-feature__excerpt">This is one of Wicklow's most atmospheric escapes — less crowded than Glendalough, deeply atmospheric, and perfect for a morning of forest exploration with the family.</p>
            <div class="journal-feature__meta">
              <span><span class="material-symbols-outlined">schedule</span> 6 min read</span>
              <span><span class="material-symbols-outlined">straighten</span> 5 km trail</span>
              <span><span class="material-symbols-outlined">location_on</span> Ashford, Wicklow</span>
            </div>
            <a href="#/journal/devils-glen" class="btn btn--primary">
              Read Full Article
              <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </article>

        <!-- OTHER ARTICLES -->
        <div class="journal-page__articles">

          <article class="journal-article">
            <div class="journal-article__img-wrap">
              <img src="/images/glendalough-lake.png" alt="View from the Spinc" class="journal-article__img" loading="lazy" />
            </div>
            <div class="journal-article__body">
              <span class="journal-card__tag">Trail Guide</span>
              <h3 class="journal-article__title">The Spinc: Glendalough's Wildest View</h3>
              <p class="journal-article__excerpt">Some trails test your legs. The Spinc tests your sense of wonder. Rising past Poulanass Waterfall onto a cliffside boardwalk, this trail rewards with unforgettable views of the Upper Lake nestled in Wicklow's ancient glacial valley. The ascent is a challenge — 600 steps in places — but the bird's-eye perspective from above transforms how you see the whole Glendalough valley.</p>
              <div class="journal-article__meta">
                <span><span class="material-symbols-outlined">schedule</span> 5 min read</span>
                <span><span class="material-symbols-outlined">straighten</span> 9.5 km loop</span>
              </div>
              <a href="#/journal/spinc" class="journal-article__link">Read Article →</a>
            </div>
          </article>

          <article class="journal-article">
            <div class="journal-article__img-wrap">
              <img src="/images/wicklow-way-signpost.png" alt="Wicklow Way moorland" class="journal-article__img" loading="lazy" />
            </div>
            <div class="journal-article__body">
              <span class="journal-card__tag">Adventure</span>
              <h3 class="journal-article__title">Exploring the Mournes: A Family Adventure</h3>
              <p class="journal-article__excerpt">Ireland's not-so-hidden gem. The Mourne Mountains offer dramatic granite peaks, forest trails, and breathtaking vistas — perfect for families seeking a bigger challenge beyond Wicklow's borders. The Silent Valley reservoir makes for a stunning base camp for the day.</p>
              <div class="journal-article__meta">
                <span><span class="material-symbols-outlined">schedule</span> 4 min read</span>
                <span><span class="material-symbols-outlined">location_on</span> Co. Down</span>
              </div>
              <a href="#/journal/mournes" class="journal-article__link">Read Article →</a>
            </div>
          </article>

          <article class="journal-article">
            <div class="journal-article__img-wrap">
              <img src="/images/lough-tay-wicklow.webp" alt="Lough Tay" class="journal-article__img" loading="lazy" />
            </div>
            <div class="journal-article__body">
              <span class="journal-card__tag">Gear Guide</span>
              <h3 class="journal-article__title">What to Pack: Family Hikes in Wicklow</h3>
              <p class="journal-article__excerpt">The right gear makes all the difference. From waterproof layers to comfortable boots and trail snacks — here's our field-tested packing list for a family day out on Wicklow's trails, rain or shine.</p>
              <div class="journal-article__meta">
                <span><span class="material-symbols-outlined">schedule</span> 3 min read</span>
                <span><span class="material-symbols-outlined">checkroom</span> Gear</span>
              </div>
              <a href="#/shop" class="journal-article__link">Read Article →</a>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="newsletter" id="newsletter">
      <div class="newsletter__inner">
        <h2 class="newsletter__title">Stories delivered to you</h2>
        <p class="newsletter__desc">Trail guides, family adventure ideas, and gear picks — straight to your inbox every month.</p>
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
    initNewsletter();
    return () => { cleanupScrollReveal(); };
}
