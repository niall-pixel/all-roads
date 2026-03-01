/* ============================================================
   ALLROADS — Shop Page
   ============================================================ */
import { initScrollReveal, cleanupScrollReveal, addToCart, initNewsletter } from '../shared.js';
import { products } from '../data/products.js';

function productCardHTML(p) {
    return `
    <article class="product-card" data-category="${p.category}" id="product-${p.id}">
      <a href="#/product/${p.id}" class="product-card__img-link">
        <div class="product-card__img-wrap">
          <img src="${p.img}" alt="${p.name}" class="product-card__img" loading="lazy" />
          <button class="product-card__quickadd" data-name="${p.name}" aria-label="Quick add to cart">
            <span class="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </a>
      <div class="product-card__info">
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__detail">${p.detail}</p>
        <div class="product-card__footer">
          <p class="product-card__price">${p.price}</p>
          <a href="#/product/${p.id}" class="product-card__view">View →</a>
        </div>
      </div>
    </article>
  `;
}

export function render() {
    return `
    <!-- SHOP HERO -->
    <section class="page-hero page-hero--shop">
      <div class="page-hero__bg">
        <img src="/images/wicklow-trail.png" alt="Family on trail" class="page-hero__img" />
        <div class="page-hero__overlay"></div>
      </div>
      <div class="page-hero__content">
        <span class="page-hero__tag">AllRoads Apparel</span>
        <h1 class="page-hero__title">The AllRoads Collection</h1>
        <p class="page-hero__desc">Premium outdoor apparel designed in Wicklow. Crafted for real life — from mountain trails to city streets.</p>
      </div>
    </section>

    <section class="shop" id="shop-section">
      <div class="shop__categories" id="shop-categories">
        <button class="shop-cat active" data-cat="all">All</button>
        <button class="shop-cat" data-cat="sweaters">Sweaters</button>
        <button class="shop-cat" data-cat="tees">T-Shirts</button>
        <button class="shop-cat" data-cat="headwear">Headwear</button>
        <button class="shop-cat" data-cat="accessories">Accessories</button>
      </div>

      <div class="shop__grid" id="shop-grid">
        ${products.map(p => productCardHTML(p)).join('')}
      </div>

      <div class="shop__cta">
        <a href="#/contact" class="btn btn--outline" id="shop-contact-btn">
          Questions about an item? Get in touch
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="newsletter" id="newsletter">
      <div class="newsletter__inner">
        <h2 class="newsletter__title">New drops, first</h2>
        <p class="newsletter__desc">Get early access to new collections, limited releases, and exclusive discounts for AllRoads subscribers.</p>
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
    initShopFilters();
    initCartButtons();
    initNewsletter();

    return () => { cleanupScrollReveal(); };
}

function initShopFilters() {
    const cats = document.querySelectorAll('.shop-cat');
    const cards = document.querySelectorAll('.product-card');

    cats.forEach(btn => {
        btn.addEventListener('click', () => {
            cats.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.cat;

            cards.forEach((card, i) => {
                const cardCat = card.dataset.category;
                const show = cat === 'all' || cardCat === cat;
                card.style.transition = `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.05}s`;
                if (show) {
                    card.style.display = '';
                    requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0) scale(1)'; });
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px) scale(0.95)';
                    setTimeout(() => { card.style.display = 'none'; }, 400);
                }
            });
        });
    });
}

function initCartButtons() {
    document.querySelectorAll('.product-card__quickadd').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // stop the parent <a> navigating
            e.stopPropagation();
            const name = btn.dataset.name || 'Item';
            const product = products.find(p => p.name === name);
            addToCart(name, product?.price ?? null, product?.img ?? null);
            btn.style.transform = 'scale(1.3)';
            btn.style.background = '#c9944a';
            setTimeout(() => { btn.style.transform = ''; btn.style.background = ''; }, 300);
        });
    });
}
