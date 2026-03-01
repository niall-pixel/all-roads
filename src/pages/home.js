/* ============================================================
   ALLROADS — Home Page
   ============================================================ */
import { initScrollReveal, cleanupScrollReveal, initParallax, initNewsletter, addToCart } from '../shared.js';
import { products } from '../data/products.js';
import { trails } from '../data/trails.js';

export function render() {
    return `
    <!-- HERO SECTION -->
    <section class="hero" id="hero">
      <div class="hero__bg">
        <img src="/images/hiking-family.png" alt="Family hiking together through the Wicklow Mountains" class="hero__img" />
        <div class="hero__overlay"></div>
        <div class="hero__grain"></div>
      </div>
      <div class="hero__content">
        <span class="hero__badge">County Wicklow, Ireland</span>
        <h1 class="hero__title">Every Road<br/>Leads to<br/><em>Greatness</em></h1>
        <p class="hero__subtitle">Family hiking adventures, premium outdoor apparel, and trail guides — rooted in the wild heart of Wicklow.</p>
        <div class="hero__actions">
          <a href="#/trails" class="btn btn--primary" id="hero-explore-btn">
            <span class="material-symbols-outlined">explore</span>
            Explore Trails
          </a>
          <a href="#/shop" class="btn btn--ghost" id="hero-shop-btn">
            Shop Collection
          </a>
        </div>
        <div class="hero__stats">
          <div class="hero__stat">
            <span class="hero__stat-num">12+</span>
            <span class="hero__stat-label">Family Trails</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <span class="hero__stat-num">127km</span>
            <span class="hero__stat-label">Wicklow Way</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <span class="hero__stat-num">4.9★</span>
            <span class="hero__stat-label">Trail Ratings</span>
          </div>
        </div>
      </div>
      <div class="hero__scroll-hint">
        <span class="material-symbols-outlined">keyboard_arrow_down</span>
      </div>
    </section>

    <!-- FEATURED TRAILS PREVIEW -->
    <section class="featured-section">
      <div class="section-header">
        <span class="section-header__tag">Discover</span>
        <h2 class="section-header__title">Popular Family Trails</h2>
        <p class="section-header__desc">Our handpicked walks across County Wicklow — from gentle woodland loops to exhilarating mountain ridges.</p>
      </div>

      <div class="trail-grid trail-grid--preview" id="home-trail-grid">
        ${trails.slice(0, 4).map(t => `
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
        </article>`).join('')}
      </div>

      <div class="featured-section__cta">
        <a href="#/trails" class="btn btn--outline" id="home-trails-btn">
          View All Trails
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </section>

    <!-- PARALLAX BANNER -->
    <section class="parallax-banner" id="lough-tay-banner">
      <img src="/images/lough-tay-wicklow.webp" alt="Lough Tay, Wicklow Mountains" class="parallax-banner__img" loading="lazy" />
      <div class="parallax-banner__overlay"></div>
      <div class="parallax-banner__content">
        <span class="parallax-banner__tag">The Garden of Ireland</span>
        <h2 class="parallax-banner__title">Wicklow awaits</h2>
        <p class="parallax-banner__desc">From the dark waters of Lough Tay to the ancient monastic ruins of Glendalough — every corner of Wicklow holds a story waiting to be discovered by your family.</p>
      </div>
    </section>

    <!-- FEATURED PRODUCTS -->
    <section class="featured-section">
      <div class="section-header">
        <span class="section-header__tag">Gear Up</span>
        <h2 class="section-header__title">Built for the Trail</h2>
        <p class="section-header__desc">Premium outdoor apparel designed in Wicklow. Crafted for real life — from mountain trails to city streets.</p>
      </div>

      <div class="shop__grid shop__grid--preview" id="home-shop-grid">
        <article class="product-card home-products-preview" data-name="ALLROADS SPINE – The Hoodie">
          <div class="product-card__img-wrap">
            <img src="/images/pullover-hoodie.jpg.webp" alt="ALLROADS SPINE – The Hoodie" class="product-card__img" loading="lazy" />
            <button class="product-card__quickadd" aria-label="Quick add to cart">
              <span class="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </div>
          <div class="product-card__info">
            <h3 class="product-card__name">ALLROADS SPINE – The Hoodie</h3>
            <p class="product-card__detail">Heavyweight • Organic Cotton</p>
            <p class="product-card__price">€65.00</p>
          </div>
        </article>

        <article class="product-card home-products-preview" data-name="Youth Hoodie">
          <div class="product-card__img-wrap">
            <img src="/images/pullover-hoodie.jpg.webp" alt="Youth Hoodie" class="product-card__img" loading="lazy" />
            <button class="product-card__quickadd" aria-label="Quick add to cart">
              <span class="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </div>
          <div class="product-card__info">
            <h3 class="product-card__name">Youth Hoodie</h3>
            <p class="product-card__detail">Kids • Perfect for trails</p>
            <p class="product-card__price">€45.00</p>
          </div>
        </article>

        <article class="product-card home-products-preview" data-name="Organic Cotton Tee — 'Ridge Line'">
          <div class="product-card__img-wrap">
            <img src="/images/cotton-t-shirt.jpg.webp" alt="Ridge Line Tee" class="product-card__img" loading="lazy" />
            <button class="product-card__quickadd" aria-label="Quick add to cart">
              <span class="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </div>
          <div class="product-card__info">
            <h3 class="product-card__name">Organic Cotton Tee — 'Ridge Line'</h3>
            <p class="product-card__detail">100% Organic Cotton</p>
            <p class="product-card__price">€35.00</p>
          </div>
        </article>

        <article class="product-card home-products-preview" data-name="The Duffel Bag">
          <div class="product-card__img-wrap">
            <img src="/images/gym-bag.jpg" alt="The Duffel Bag" class="product-card__img" loading="lazy" />
            <button class="product-card__quickadd" aria-label="Quick add to cart">
              <span class="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </div>
          <div class="product-card__info">
            <h3 class="product-card__name">The Duffel Bag</h3>
            <p class="product-card__detail">All-Over Print Trail Bag</p>
            <p class="product-card__price">€80.00</p>
          </div>
        </article>
      </div>

      <div class="featured-section__cta">
        <a href="#/shop" class="btn btn--outline" id="home-shop-btn">
          Browse Full Collection
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </section>

    <!-- LATEST FROM JOURNAL -->
    <section class="journal home-journal">
      <div class="section-header">
        <span class="section-header__tag">Journal</span>
        <h2 class="section-header__title">Latest from the Trail</h2>
        <p class="section-header__desc">Guides, gear tips, and family adventures from the Wicklow hills.</p>
      </div>
      <div class="journal__grid journal__grid--home">
        <article class="journal-card journal-card--featured">
          <div class="journal-card__img-wrap">
            <img src="/images/devils-glen.png" alt="Devil's Glen" class="journal-card__img" loading="lazy" />
          </div>
          <div class="journal-card__body">
            <span class="journal-card__tag">Complete Guide</span>
            <h3 class="journal-card__title">Devil's Glen, Co. Wicklow</h3>
            <p class="journal-card__excerpt">Tucked away near Ashford, Devil's Glen is a hidden forest gorge where the Vartry River thunders into a dramatic waterfall.</p>
            <div class="journal-card__footer">
              <span class="journal-card__read-time">
                <span class="material-symbols-outlined">schedule</span> 6 min read
              </span>
              <a href="#/journal/devils-glen" class="journal-card__link">Read Article →</a>
            </div>
          </div>
        </article>
        <article class="journal-card">
          <div class="journal-card__img-wrap">
            <img src="/images/glendalough-lake.png" alt="Glendalough" class="journal-card__img" loading="lazy" />
          </div>
          <div class="journal-card__body">
            <span class="journal-card__tag">Trail Guide</span>
            <h3 class="journal-card__title">The Spinc: Glendalough's Wildest View</h3>
            <p class="journal-card__excerpt">Some trails test your legs. The Spinc tests your sense of wonder.</p>
            <div class="journal-card__footer">
              <span class="journal-card__read-time">
                <span class="material-symbols-outlined">schedule</span> 5 min read
              </span>
              <a href="#/journal/spinc" class="journal-card__link">Read Article →</a>
            </div>
          </div>
        </article>
      </div>
      <div class="featured-section__cta" style="padding-bottom: var(--space-3xl);">
        <a href="#/journal" class="btn btn--outline" style="border-color: rgba(255,255,255,0.3); color: #fff;" id="home-journal-btn">
          Read All Articles
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="newsletter" id="newsletter">
      <div class="newsletter__inner">
        <h2 class="newsletter__title">Adventure in your inbox</h2>
        <p class="newsletter__desc">Sign up for exclusive family trail guides, gear drops, and seasonal walking recommendations across Wicklow.</p>
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
    let cleanupParallax = initParallax();
    initNewsletter();
    initScrollReveal();

    // Quick-add buttons
    document.querySelectorAll('.product-card__quickadd').forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.closest('.product-card')?.dataset.name || 'Item';
            const product = products.find(p => p.name === name);
            addToCart(name, product?.price ?? null, product?.img ?? null);
            btn.style.transform = 'scale(1.3)';
            btn.style.background = '#c9944a';
            setTimeout(() => { btn.style.transform = ''; btn.style.background = ''; }, 300);
        });
    });

    return () => {
        cleanupScrollReveal();
        if (cleanupParallax) cleanupParallax();
    };
}
