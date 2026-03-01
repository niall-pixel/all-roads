/* ============================================================
   ALLROADS — Cart Page
   ============================================================ */
import { cartItems, removeFromCart, updateCartQty, getCartTotal, updateCartBadge } from '../shared.js';
import { navigate } from '../router.js';

export function render() {
    return `<section class="cart-page" id="cart-page"></section>`;
}

export function init() {
    renderCart();
    return () => {};
}

function renderCart() {
    const page = document.getElementById('cart-page');
    if (!page) return;

    if (cartItems.length === 0) {
        page.innerHTML = `
      <div class="cart-empty">
        <span class="material-symbols-outlined cart-empty__icon">shopping_bag</span>
        <h2 class="cart-empty__title">Your bag is empty</h2>
        <p class="cart-empty__desc">Looks like you haven't added anything yet.</p>
        <a href="#/shop" class="btn btn--primary">
          <span class="material-symbols-outlined">storefront</span>
          Browse the Collection
        </a>
      </div>`;
        return;
    }

    const total = getCartTotal();

    page.innerHTML = `
    <div class="cart-header">
      <a href="#/shop" class="article-back">
        <span class="material-symbols-outlined">arrow_back</span>
        Continue Shopping
      </a>
      <h1 class="cart-title">Your Bag <span class="cart-count-label">(${cartItems.length} ${cartItems.length === 1 ? 'item' : 'items'})</span></h1>
    </div>

    <div class="cart-layout">
      <div class="cart-items" id="cart-items">
        ${cartItems.map(item => cartItemHTML(item)).join('')}
      </div>

      <div class="cart-summary">
        <h2 class="cart-summary__title">Order Summary</h2>
        <div class="cart-summary__row">
          <span>Subtotal</span>
          <span class="cart-subtotal">€${total.toFixed(2)}</span>
        </div>
        <div class="cart-summary__row">
          <span>Shipping</span>
          <span>${total >= 75 ? '<strong style="color:var(--fern)">Free</strong>' : '€5.00'}</span>
        </div>
        ${total > 0 && total < 75 ? `
        <p class="cart-free-shipping-note">
          <span class="material-symbols-outlined">local_shipping</span>
          Add €${(75 - total).toFixed(2)} more for free shipping
        </p>` : ''}
        <div class="cart-summary__total">
          <span>Total</span>
          <span>€${(total + (total >= 75 ? 0 : 5)).toFixed(2)}</span>
        </div>
        <button class="btn btn--primary cart-checkout-btn" id="cart-checkout-btn">
          Proceed to Checkout
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
        <a href="#/contact" class="cart-help-link">
          <span class="material-symbols-outlined">help_outline</span>
          Questions? Get in touch
        </a>
      </div>
    </div>`;

    attachCartListeners();
}

function cartItemHTML(item) {
    const price = item.price ? parseFloat(item.price.replace('€', '')) : 0;
    const lineTotal = (price * item.qty).toFixed(2);
    return `
    <div class="cart-item" data-name="${item.name}">
      <div class="cart-item__img-wrap">
        ${item.img
            ? `<img src="${item.img}" alt="${item.name}" class="cart-item__img" />`
            : `<span class="material-symbols-outlined cart-item__img-placeholder">shopping_bag</span>`}
      </div>
      <div class="cart-item__details">
        <p class="cart-item__name">${item.name}</p>
        <p class="cart-item__price">${item.price ?? '—'}</p>
      </div>
      <div class="cart-item__qty">
        <button class="qty-btn" data-action="dec" data-name="${item.name}" aria-label="Decrease quantity">−</button>
        <span class="qty-value">${item.qty}</span>
        <button class="qty-btn" data-action="inc" data-name="${item.name}" aria-label="Increase quantity">+</button>
      </div>
      <p class="cart-item__line-total">€${lineTotal}</p>
      <button class="cart-item__remove" data-name="${item.name}" aria-label="Remove item">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>`;
}

function attachCartListeners() {
    // Quantity buttons
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.dataset.name;
            const item = cartItems.find(i => i.name === name);
            if (!item) return;
            const newQty = btn.dataset.action === 'inc' ? item.qty + 1 : item.qty - 1;
            updateCartQty(name, newQty);
            renderCart();
        });
    });

    // Remove buttons
    document.querySelectorAll('.cart-item__remove').forEach(btn => {
        btn.addEventListener('click', () => {
            removeFromCart(btn.dataset.name);
            renderCart();
        });
    });

    // Checkout (placeholder)
    document.getElementById('cart-checkout-btn')?.addEventListener('click', () => {
        const btn = document.getElementById('cart-checkout-btn');
        btn.innerHTML = `<span class="material-symbols-outlined">check</span> Coming soon!`;
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = `Proceed to Checkout <span class="material-symbols-outlined">arrow_forward</span>`;
            btn.disabled = false;
        }, 2500);
    });
}
