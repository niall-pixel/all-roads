/* ============================================================
   ALLROADS — Product Detail Page
   ============================================================ */
import { addToCart, initScrollReveal, cleanupScrollReveal } from '../shared.js';
import { products, getProduct } from '../data/products.js';

export function render() {
    const hash = window.location.hash.slice(1); // e.g. /product/spine-hoodie
    const id = hash.replace('/product/', '');
    const p = getProduct(id);

    if (!p) {
        return `
      <div style="text-align:center;padding:8rem 2rem">
        <h2 style="font-family:var(--ff-display);color:var(--forest);font-size:2rem">Product not found</h2>
        <a href="#/shop" class="btn btn--primary" style="margin-top:2rem;display:inline-flex">Back to Shop</a>
      </div>`;
    }

    const related = products.filter(r => r.category === p.category && r.id !== p.id).slice(0, 3);

    return `
    <section class="product-page">
      <a href="#/shop" class="article-back">
        <span class="material-symbols-outlined">arrow_back</span>
        Back to Shop
      </a>

      <div class="product-layout">
        <div class="product-image-wrap">
          <img src="${p.img}" alt="${p.name}" class="product-image" />
        </div>

        <div class="product-detail">
          <p class="product-detail__category">${p.category}</p>
          <h1 class="product-detail__name">${p.name}</h1>
          <p class="product-detail__subtitle">${p.detail}</p>
          <p class="product-detail__price">${p.price}</p>

          <p class="product-sizes__label">Size</p>
          <div class="product-sizes" id="product-sizes">
            ${p.sizes.map((s, i) => `
              <button class="size-btn${i === 0 ? ' selected' : ''}" data-size="${s}">${s}</button>
            `).join('')}
          </div>

          <button class="btn btn--primary product-add-btn" id="product-add-btn" data-name="${p.name}">
            <span class="material-symbols-outlined">shopping_bag</span>
            Add to Bag
          </button>

          <p class="product-detail__desc">${p.description}</p>

          <div class="product-features">
            <h3>Details</h3>
            <ul>
              ${p.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      ${related.length ? `
      <div class="product-related">
        <h2>You might also like</h2>
        <div class="shop__grid shop__grid--related">
          ${related.map(r => `
            <article class="product-card">
              <a href="#/product/${r.id}" class="product-card__img-link">
                <div class="product-card__img-wrap">
                  <img src="${r.img}" alt="${r.name}" class="product-card__img" loading="lazy" />
                </div>
              </a>
              <div class="product-card__info">
                <h3 class="product-card__name">${r.name}</h3>
                <p class="product-card__detail">${r.detail}</p>
                <div class="product-card__footer">
                  <p class="product-card__price">${r.price}</p>
                  <a href="#/product/${r.id}" class="product-card__view">View →</a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
      ` : ''}
    </section>
  `;
}

export function init() {
    initScrollReveal();

    // Size selection
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    // Add to bag
    const addBtn = document.getElementById('product-add-btn');
    addBtn?.addEventListener('click', () => {
        const name = addBtn.dataset.name;
        const size = document.querySelector('.size-btn.selected')?.dataset.size || '';
        const itemName = size && size !== 'One Size' ? `${name} (${size})` : name;
        addToCart(itemName, p.price, p.img);
        addBtn.innerHTML = `<span class="material-symbols-outlined">check</span> Added!`;
        addBtn.style.background = '#3d6b47';
        setTimeout(() => {
            addBtn.innerHTML = `<span class="material-symbols-outlined">shopping_bag</span> Add to Bag`;
            addBtn.style.background = '';
        }, 2000);
    });

    return () => { cleanupScrollReveal(); };
}
