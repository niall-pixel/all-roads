/* ============================================================
   ALLROADS — Shared utilities across pages
   ============================================================ */

// ─── Cart State ───
export const cartItems = []; // { name, price, img, qty }
export let cartCount = 0;
let cartToast = null;

export function getCartToast() {
    if (!cartToast) {
        cartToast = document.createElement('div');
        cartToast.className = 'cart-toast';
        cartToast.innerHTML = `<span class="material-symbols-outlined">check_circle</span><span class="cart-toast__text"></span>`;
        document.body.appendChild(cartToast);
    }
    return cartToast;
}

export function addToCart(name, price = null, img = null) {
    const existing = cartItems.find(i => i.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cartItems.push({ name, price, img, qty: 1 });
    }
    cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);
    updateCartBadge();
    showCartToast(`${name.split(' (')[0]} added to bag`);
}

export function removeFromCart(name) {
    const idx = cartItems.findIndex(i => i.name === name);
    if (idx !== -1) cartItems.splice(idx, 1);
    cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);
    updateCartBadge();
}

export function updateCartQty(name, qty) {
    const item = cartItems.find(i => i.name === name);
    if (!item) return;
    item.qty = qty;
    if (item.qty <= 0) removeFromCart(name);
    cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);
    updateCartBadge();
}

export function getCartTotal() {
    return cartItems.reduce((sum, i) => {
        const val = i.price ? parseFloat(i.price.replace('€', '')) : 0;
        return sum + val * i.qty;
    }, 0);
}

export function updateCartBadge() {
    const el = document.querySelector('.nav__cart-count');
    if (el) {
        el.textContent = cartCount;
        if (cartCount > 0) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    }
}

export function showCartToast(message) {
    const toast = getCartToast();
    const text = toast.querySelector('.cart-toast__text');
    if (text) text.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 2500);
}

// ─── Scroll Reveal ───
let revealObserver = null;

export function initScrollReveal(container) {
    const revealSelectors = [
        '.trail-card',
        '.product-card',
        '.journal-card',
        '.about__image',
        '.about__content',
        '.section-header',
        '.trail-search',
        '.shop__categories',
        '.shop__cta',
        '.parallax-banner__content',
        '.newsletter__inner',
        '.home-trail-preview',
        '.home-products-preview',
    ];

    const root = container || document;

    revealSelectors.forEach(selector => {
        root.querySelectorAll(selector).forEach((el, i) => {
            el.classList.add('reveal');
            if (i <= 4) el.classList.add(`reveal-delay-${Math.min(i + 1, 4)}`);
        });
    });

    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    root.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

export function cleanupScrollReveal() {
    if (revealObserver) {
        revealObserver.disconnect();
        revealObserver = null;
    }
}

// ─── Search Data ───
export const searchableItems = [
    { name: 'Glendalough Spinc Loop', type: 'Trail', icon: 'hiking', page: '/trail/spinc' },
    { name: "Devil's Glen Waterfall Walk", type: 'Trail', icon: 'hiking', page: '/trail/devils-glen' },
    { name: 'Powerscourt Waterfall', type: 'Trail', icon: 'hiking', page: '/trail/powerscourt' },
    { name: 'Wicklow Way — Roundwood Loop', type: 'Trail', icon: 'hiking', page: '/trail/roundwood' },
    { name: 'Bray Head Loop', type: 'Trail', icon: 'hiking', page: '/trail/bray-head' },
    { name: 'Great Sugarloaf Summit', type: 'Trail', icon: 'hiking', page: '/trail/sugarloaf' },
    { name: 'Djouce Mountain via J.B. Malone', type: 'Trail', icon: 'hiking', page: '/trail/djouce' },
    { name: 'Vale of Avoca — Meeting of the Waters', type: 'Trail', icon: 'hiking', page: '/trail/avoca' },
    { name: 'Blessington Greenway', type: 'Trail', icon: 'hiking', page: '/trail/blessington' },
    { name: 'ALLROADS SPINE – The Hoodie', type: 'Product', icon: 'shopping_bag', page: '/shop' },
    { name: 'Classic – Crew Neck', type: 'Product', icon: 'shopping_bag', page: '/shop' },
    { name: 'Youth Hoodie', type: 'Product', icon: 'shopping_bag', page: '/shop' },
    { name: "SHADE Collection — 'Morning Light'", type: 'Product', icon: 'shopping_bag', page: '/shop' },
    { name: "Organic Cotton Tee — 'Ridge Line'", type: 'Product', icon: 'shopping_bag', page: '/shop' },
    { name: 'Organic Ribbed Beanie', type: 'Product', icon: 'shopping_bag', page: '/shop' },
    { name: 'The Duffel Bag', type: 'Product', icon: 'shopping_bag', page: '/shop' },
    { name: 'Desk Tumbler', type: 'Product', icon: 'shopping_bag', page: '/shop' },
    { name: 'FAQ', type: 'Help', icon: 'help_outline', page: '/faq' },
    { name: "Devil's Glen — Complete Guide", type: 'Article', icon: 'article', page: '/journal/devils-glen' },
    { name: "The Spinc: Glendalough's Wildest View", type: 'Article', icon: 'article', page: '/journal/spinc' },
    { name: 'Exploring the Mournes', type: 'Article', icon: 'article', page: '/journal/mournes' },
];

// ─── Newsletter Handler ───
export function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('newsletter-email');
        const btn = document.getElementById('newsletter-submit');

        if (input?.value) {
            btn.innerHTML = `<span class="material-symbols-outlined">check</span> Subscribed!`;
            btn.style.background = '#3d6b47';
            input.value = '';
            input.disabled = true;

            setTimeout(() => {
                btn.innerHTML = `Subscribe <span class="material-symbols-outlined">send</span>`;
                btn.style.background = '';
                input.disabled = false;
            }, 3000);
        }
    });
}

// ─── Parallax ───
export function initParallax() {
    const banner = document.querySelector('.parallax-banner__img');
    if (!banner) return;

    const handler = () => {
        const section = banner.closest('.parallax-banner');
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const viewH = window.innerHeight;
        if (rect.bottom < 0 || rect.top > viewH) return;
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const translate = (progress - 0.5) * 60;
        banner.style.transform = `translateY(${translate}px)`;
    };

    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
}
