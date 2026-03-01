/* ============================================================
   ALLROADS — FAQ Page
   ============================================================ */
import { initScrollReveal, cleanupScrollReveal } from '../shared.js';

const categories = [
    {
        title: 'Orders & Shipping',
        icon: 'local_shipping',
        questions: [
            {
                q: 'Can I change my order after placing it?',
                a: 'We process orders quickly, but if you contact us within 1 hour of placing your order we\'ll do our best to make changes before dispatch. Email hello@allroads.ie with your order number and the change you need.',
            },
            {
                q: 'How long will my order take to arrive?',
                a: 'Irish orders typically arrive in 2–4 business days. UK orders take 3–5 days, EU orders 5–8 days, and international orders 10–15 days. All orders are dispatched within 2 business days of payment confirmation.',
            },
            {
                q: 'How do I track my order?',
                a: 'Tracking information is emailed automatically once your order is dispatched. Use the link in that email to follow your parcel. If you haven\'t received a tracking email within 3 business days, check your spam folder or contact us.',
            },
            {
                q: 'My order hasn\'t arrived — what should I do?',
                a: 'Check your tracking link first. If your package appears stuck or lost, email us at hello@allroads.ie and we\'ll investigate with the carrier on your behalf.',
            },
            {
                q: 'Do you ship to Northern Ireland?',
                a: 'Yes — Northern Ireland is shipped at the UK rate (€10.00, 3–5 business days via Royal Mail Tracked).',
            },
            {
                q: 'Are there customs charges for EU orders?',
                a: 'No. Since Ireland is an EU member state, there are no customs charges for deliveries within the EU. UK and international orders may be subject to local import duties — these are the responsibility of the recipient.',
            },
            {
                q: 'Do you offer free shipping?',
                a: 'Yes! All Irish orders over €75 qualify for free standard shipping. We\'re working on extending free shipping thresholds to other regions — sign up to our newsletter to be notified.',
            },
        ],
    },
    {
        title: 'Returns & Exchanges',
        icon: 'swap_horiz',
        questions: [
            {
                q: 'What is your returns policy?',
                a: 'We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in their original condition with tags attached. To start a return, email hello@allroads.ie with your order number and reason.',
            },
            {
                q: 'Can I exchange an item for a different size?',
                a: 'Yes. Email hello@allroads.ie with your order number and the size you\'d like instead. We\'ll check stock and confirm. Exchanges are processed within 3–5 business days of receiving your return.',
            },
            {
                q: 'When will I receive my refund?',
                a: 'Once we receive and inspect your return, refunds are processed within 5 business days. You\'ll receive an email confirmation. The time it takes to appear on your statement depends on your bank (typically 3–10 days).',
            },
            {
                q: 'Can I return a sale item?',
                a: 'Sale items are non-returnable unless they arrive faulty or damaged. If you receive a faulty sale item, please contact us within 7 days of delivery.',
            },
            {
                q: 'What if my item arrives damaged?',
                a: 'We\'re sorry to hear it. Email hello@allroads.ie with your order number and a photo of the damage within 7 days of delivery and we\'ll arrange a replacement or full refund — whichever you prefer.',
            },
            {
                q: 'Who pays for return shipping?',
                a: 'For standard returns, the cost of return postage is the customer\'s responsibility. If your item arrived damaged or we sent the wrong item, we\'ll cover the return shipping cost.',
            },
        ],
    },
    {
        title: 'Sizing & Products',
        icon: 'straighten',
        questions: [
            {
                q: 'How do I choose the right size?',
                a: 'Each product page includes a size guide with measurements. Our hoodies and sweaters are designed with a relaxed, outdoorsy fit — if you\'re between sizes, we recommend sizing up. For fitted tees, stay true to size.',
            },
            {
                q: 'What materials do you use?',
                a: 'We use 100% organic cotton for our tees and heavyweight organic cotton blends for our hoodies and sweaters. We\'re committed to natural, sustainable materials that feel good on the trail and wash well.',
            },
            {
                q: 'Are your products ethically made?',
                a: 'Yes. We work exclusively with suppliers who meet our ethical production standards — fair wages, safe working conditions, and responsible environmental practices. We\'re a small brand and we take this seriously.',
            },
            {
                q: 'Will you restock sold-out items?',
                a: 'Most of our core styles are restocked seasonally. Sign up to our newsletter to hear about restocks before anyone else, or email us to register your interest in a specific item.',
            },
            {
                q: 'Do you offer gift wrapping?',
                a: 'Not at the moment, but it\'s something we\'re working on. In the meantime, feel free to leave a note at checkout and we\'ll include a handwritten card with your order.',
            },
        ],
    },
    {
        title: 'Trails & Wicklow',
        icon: 'hiking',
        questions: [
            {
                q: 'Do I need to book to walk the trails?',
                a: 'No booking is required for any of the trails we feature — they\'re all publicly accessible. Glendalough does have a paid car park (€6), and Powerscourt Waterfall charges an entry fee (€7.50 adults, €4.50 children). Everything else is free.',
            },
            {
                q: 'Are dogs allowed on the trails?',
                a: 'Dogs are welcome on all four trails we feature, but must be kept on a lead. This is particularly important in Glendalough, where the deer are a protected herd. Always clean up after your dog.',
            },
            {
                q: 'Are the trails suitable for buggies or pushchairs?',
                a: 'Powerscourt Waterfall has fully paved paths and is completely buggy-friendly. The Wicklow Way Roundwood Loop is partially accessible. Glendalough Spinc and Devil\'s Glen involve steep terrain and are not suitable for buggies.',
            },
            {
                q: 'What\'s the best time of year to visit Wicklow?',
                a: 'Wicklow is beautiful year-round. May–September offers the longest days and best weather for walking. October brings spectacular autumn colour to the woodland trails. Winter walks in the Wicklow Mountains are dramatic and quiet — just come prepared for rain.',
            },
            {
                q: 'Are the trails suitable for young children?',
                a: 'Powerscourt Waterfall and the Roundwood Loop are great for young children of any age. Devil\'s Glen suits ages 7+. The Glendalough Spinc is best suited to confident walkers aged 10 and over due to steep ascents and exposed ridge sections.',
            },
            {
                q: 'What should I bring on a trail walk?',
                a: 'Waterproof boots are essential for all trails. Bring layers, a waterproof jacket, water, and snacks. A small backpack, a trail map (or downloaded offline maps on your phone), and a fully charged phone are all recommended.',
            },
        ],
    },
    {
        title: 'About AllRoads',
        icon: 'info',
        questions: [
            {
                q: 'Where is AllRoads based?',
                a: 'AllRoads is based in County Wicklow, Ireland — the Garden of Ireland. Our team are walkers, hikers, and parents who know these trails firsthand.',
            },
            {
                q: 'How can I get in touch?',
                a: 'The best way to reach us is via our contact page or by emailing hello@allroads.ie. We aim to respond to all enquiries within 1 business day.',
            },
            {
                q: 'Do you work with local businesses or tourism partners?',
                a: 'We love supporting the local Wicklow community. If you\'re a café, accommodation provider, or outdoor business in the area and would like to collaborate, we\'d love to hear from you — drop us an email.',
            },
        ],
    },
];

function faqCategoryHTML(cat) {
    return `
    <div class="faq-category reveal">
      <div class="faq-category__header">
        <span class="material-symbols-outlined faq-category__icon">${cat.icon}</span>
        <h2 class="faq-category__title">${cat.title}</h2>
      </div>
      <div class="faq-list">
        ${cat.questions.map((item, i) => `
        <div class="faq-item" id="faq-${cat.title.replace(/\s+/g, '-').toLowerCase()}-${i}">
          <button class="faq-item__question" aria-expanded="false">
            <span>${item.q}</span>
            <span class="material-symbols-outlined faq-item__chevron">expand_more</span>
          </button>
          <div class="faq-item__answer">
            <p>${item.a}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
}

export function render() {
    return `
    <section class="page-hero">
      <div class="page-hero__bg">
        <img src="/images/wicklow-trail.png" alt="Wicklow trail" class="page-hero__img" />
        <div class="page-hero__overlay"></div>
      </div>
      <div class="page-hero__content">
        <span class="page-hero__tag">Help Centre</span>
        <h1 class="page-hero__title">Frequently Asked Questions</h1>
        <p class="page-hero__desc">Everything you need to know about orders, trails, products, and more.</p>
      </div>
    </section>

    <section class="faq-page">
      <div class="faq-page__inner">
        ${categories.map(faqCategoryHTML).join('')}

        <div class="faq-contact reveal">
          <span class="material-symbols-outlined faq-contact__icon">help_outline</span>
          <div>
            <h3 class="faq-contact__title">Still have a question?</h3>
            <p class="faq-contact__desc">Our team is happy to help with anything not covered here.</p>
          </div>
          <a href="#/contact" class="btn btn--primary">
            <span class="material-symbols-outlined">mail</span>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  `;
}

export function init() {
    initScrollReveal();
    initAccordion();
    return () => cleanupScrollReveal();
}

function initAccordion() {
    document.querySelectorAll('.faq-item__question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');

            // Close all open items in the same category
            const category = item.closest('.faq-list');
            category.querySelectorAll('.faq-item.open').forEach(openItem => {
                openItem.classList.remove('open');
                openItem.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
            });

            // Toggle clicked item
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
}
