/* ============================================================
   ALLROADS — Main Entry Point
   Router + Global Navigation + Search
   ============================================================ */

import { registerRoute, startRouter, navigate } from './src/router.js';
import { searchableItems, updateCartBadge } from './src/shared.js';
import * as homePage from './src/pages/home.js';
import * as trailsPage from './src/pages/trails.js';
import * as shopPage from './src/pages/shop.js';
import * as journalPage from './src/pages/journal.js';
import * as aboutPage from './src/pages/about.js';
import * as articleDevilsGlen from './src/pages/article-devils-glen.js';
import * as articleSpinc from './src/pages/article-spinc.js';
import * as articleMournes from './src/pages/article-mournes.js';
import * as contactPage from './src/pages/contact.js';
import * as deliveryPage from './src/pages/delivery.js';
import * as productPage from './src/pages/product.js';
import * as cartPage from './src/pages/cart.js';
import * as trailPage from './src/pages/trail.js';
import * as faqPage from './src/pages/faq.js';

// ─── Register Routes ───
registerRoute('/', homePage);
registerRoute('/trails', trailsPage);
registerRoute('/shop', shopPage);
registerRoute('/journal', journalPage);
registerRoute('/about', aboutPage);
registerRoute('/journal/devils-glen', articleDevilsGlen);
registerRoute('/journal/spinc', articleSpinc);
registerRoute('/journal/mournes', articleMournes);
registerRoute('/contact', contactPage);
registerRoute('/delivery', deliveryPage);
registerRoute('/product/*', productPage);
registerRoute('/cart', cartPage);
registerRoute('/trail/*', trailPage);
registerRoute('/faq', faqPage);

// ─── DOM Ready ───
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initSearch();
    initMobileMenu();
    updateCartBadge();

    // Start the router
    startRouter('app');
});

// ─── Navigation ───
function initNav() {
    const nav = document.getElementById('main-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
    }, { passive: true });
}

// ─── Global Search ───
function initSearch() {
    const toggle = document.getElementById('search-toggle');
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-input');
    const close = document.getElementById('search-close');
    const results = document.getElementById('search-results');

    toggle?.addEventListener('click', () => {
        overlay.classList.add('active');
        setTimeout(() => input.focus(), 200);
    });

    close?.addEventListener('click', () => {
        overlay.classList.remove('active');
        input.value = '';
        results.classList.remove('has-results');
        results.innerHTML = '';
    });

    input?.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        if (query.length < 2) {
            results.classList.remove('has-results');
            results.innerHTML = '';
            return;
        }

        const matches = searchableItems.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.type.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            results.classList.add('has-results');
            results.innerHTML = matches.map(item => `
        <div class="search-result-item" data-page="${item.page}">
          <span class="material-symbols-outlined search-result-item__icon">${item.icon}</span>
          <span class="search-result-item__text">${item.name}</span>
          <span class="search-result-item__type">${item.type}</span>
        </div>
      `).join('');

            results.querySelectorAll('.search-result-item').forEach(el => {
                el.addEventListener('click', () => {
                    overlay.classList.remove('active');
                    input.value = '';
                    results.classList.remove('has-results');
                    results.innerHTML = '';
                    navigate(el.dataset.page);
                });
            });
        } else {
            results.classList.add('has-results');
            results.innerHTML = '<div style="padding: 1rem; color: #6a8f6e; font-size: 0.875rem;">No results found</div>';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') overlay.classList.remove('active');
    });
}

// ─── Mobile Menu ───
function initMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const open = document.getElementById('menu-toggle');
    const close = document.getElementById('mobile-close');

    open?.addEventListener('click', () => menu?.classList.add('active'));
    close?.addEventListener('click', () => menu?.classList.remove('active'));

    menu?.querySelectorAll('.mobile-menu__link').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('active'));
    });
}

// ─── Highlight Animation (used by search) ───
const style = document.createElement('style');
style.textContent = `
@keyframes highlightPulse {
  0% { box-shadow: 0 0 0 0 rgba(201, 148, 74, 0.5); }
  50% { box-shadow: 0 0 0 8px rgba(201, 148, 74, 0.2); }
  100% { box-shadow: 0 0 0 0 rgba(201, 148, 74, 0); }
}
`;
document.head.appendChild(style);
