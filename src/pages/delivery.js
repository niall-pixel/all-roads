/* ============================================================
   ALLROADS — Delivery & Returns Page
   ============================================================ */
import { initScrollReveal, cleanupScrollReveal } from '../shared.js';

export function render() {
    return `
    <section class="page-hero">
      <div class="page-hero__bg">
        <img src="/images/lough-tay-wicklow.webp" alt="Wicklow landscape" class="page-hero__img" />
        <div class="page-hero__overlay"></div>
      </div>
      <div class="page-hero__content">
        <span class="page-hero__tag">Shipping &amp; Returns</span>
        <h1 class="page-hero__title">Delivery Info</h1>
        <p class="page-hero__desc">Everything you need to know about getting your AllRoads order to your door.</p>
      </div>
    </section>

    <section class="delivery-page">
      <div class="delivery-page__inner">

        <div class="delivery-section">
          <h2>Delivery Options</h2>
          <p>We ship from Wicklow, Ireland. All orders are carefully packed and dispatched within 2 business days of payment confirmation.</p>
          <table class="delivery-table">
            <thead>
              <tr>
                <th>Destination</th>
                <th>Method</th>
                <th>Estimated Time</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ireland</td>
                <td>An Post Standard</td>
                <td>2–4 business days</td>
                <td>€5.00</td>
              </tr>
              <tr>
                <td>Ireland</td>
                <td>An Post Express</td>
                <td>Next business day</td>
                <td>€9.00</td>
              </tr>
              <tr>
                <td>Ireland</td>
                <td>Free shipping</td>
                <td>2–4 business days</td>
                <td>Free on orders over €75</td>
              </tr>
              <tr>
                <td>UK</td>
                <td>Royal Mail Tracked</td>
                <td>3–5 business days</td>
                <td>€10.00</td>
              </tr>
              <tr>
                <td>Europe (EU)</td>
                <td>Standard Tracked</td>
                <td>5–8 business days</td>
                <td>€12.00</td>
              </tr>
              <tr>
                <td>Rest of World</td>
                <td>International Tracked</td>
                <td>10–15 business days</td>
                <td>€18.00</td>
              </tr>
            </tbody>
          </table>
          <p>Tracking information is emailed automatically once your order is dispatched. During busy periods (launches, holidays) please allow an extra 1–2 days.</p>
        </div>

        <div class="delivery-section">
          <h2>Returns &amp; Exchanges</h2>
          <p>We want you to love what you ordered. If something isn't right, we're happy to help.</p>
          <ul style="color:var(--slate);line-height:1.85;margin:0 0 var(--space-sm) var(--space-md)">
            <li>Returns accepted within <strong>30 days</strong> of delivery.</li>
            <li>Items must be unworn, unwashed, and in original condition with tags attached.</li>
            <li>Sale items are non-returnable unless faulty.</li>
            <li>Exchanges are processed within 3–5 business days of receiving your return.</li>
          </ul>
          <p>To start a return or exchange, email us at <strong>hello@allroads.ie</strong> with your order number and reason. We'll take it from there.</p>
        </div>

        <div class="delivery-section">
          <h2>Frequently Asked Questions</h2>
          <div class="delivery-faq">
            <div class="faq-item">
              <h3>Can I change my order after placing it?</h3>
              <p>We process orders quickly, but if you contact us within 1 hour of placing your order we'll do our best to make changes before dispatch.</p>
            </div>
            <div class="faq-item">
              <h3>My order hasn't arrived — what should I do?</h3>
              <p>Check your tracking link first. If your package appears stuck or lost, email us at hello@allroads.ie and we'll investigate with the carrier on your behalf.</p>
            </div>
            <div class="faq-item">
              <h3>Do you ship to Northern Ireland?</h3>
              <p>Yes — Northern Ireland is shipped at the UK rate (€10.00, 3–5 business days).</p>
            </div>
            <div class="faq-item">
              <h3>Are there customs charges for EU orders?</h3>
              <p>No. Since Ireland is an EU member state, there are no customs charges for deliveries within the EU.</p>
            </div>
            <div class="faq-item">
              <h3>What if my item arrives damaged?</h3>
              <p>We're sorry to hear it. Email hello@allroads.ie with your order number and a photo of the damage within 7 days of delivery and we'll arrange a replacement or refund.</p>
            </div>
          </div>
        </div>

        <div class="delivery-section">
          <h2>Still have questions?</h2>
          <p>Our team is happy to help. Reach out via our <a href="#/contact" style="color:var(--fern);font-weight:600">contact page</a> or email us directly at hello@allroads.ie.</p>
        </div>

      </div>
    </section>
  `;
}

export function init() {
    initScrollReveal();
    return () => { cleanupScrollReveal(); };
}
