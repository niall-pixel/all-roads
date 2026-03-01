/* ============================================================
   ALLROADS — Contact Page
   ============================================================ */
import { initScrollReveal, cleanupScrollReveal } from '../shared.js';

export function render() {
    return `
    <section class="page-hero">
      <div class="page-hero__bg">
        <img src="/images/wicklow-trail.png" alt="Wicklow trail" class="page-hero__img" />
        <div class="page-hero__overlay"></div>
      </div>
      <div class="page-hero__content">
        <span class="page-hero__tag">Get in Touch</span>
        <h1 class="page-hero__title">Say Hello</h1>
        <p class="page-hero__desc">We'd love to hear from you — trail tips, gear questions, or just to share a photo from your latest adventure.</p>
      </div>
    </section>

    <section class="contact-page">
      <div class="contact-page__inner">

        <div class="contact-form-wrap">
          <h2>Send us a message</h2>
          <form id="contact-form">
            <div class="contact-field">
              <label for="contact-name">Your name</label>
              <input type="text" id="contact-name" placeholder="e.g. Sarah Murphy" required />
            </div>
            <div class="contact-field">
              <label for="contact-email">Email address</label>
              <input type="email" id="contact-email" placeholder="your@email.com" required />
            </div>
            <div class="contact-field">
              <label for="contact-subject">Subject</label>
              <select id="contact-subject">
                <option value="">Select a topic...</option>
                <option value="trails">Trail question</option>
                <option value="order">Order or delivery</option>
                <option value="product">Product enquiry</option>
                <option value="returns">Returns or exchanges</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div class="contact-field">
              <label for="contact-message">Message</label>
              <textarea id="contact-message" placeholder="Tell us what's on your mind..." required></textarea>
            </div>
            <button type="submit" class="btn btn--primary" id="contact-submit" style="width:100%;justify-content:center;margin-top:0.5rem;">
              Send Message
              <span class="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>

        <div class="contact-info">
          <h2>Other ways to reach us</h2>
          <p>We're a small team based in the Wicklow hills. We aim to respond to all messages within 1–2 business days.</p>

          <div class="contact-info-item">
            <span class="material-symbols-outlined">mail</span>
            <div>
              <strong>Email</strong>
              <span>hello@allroads.ie</span>
            </div>
          </div>

          <div class="contact-info-item">
            <span class="material-symbols-outlined">photo_camera</span>
            <div>
              <strong>Instagram</strong>
              <span><a href="https://www.instagram.com/allroads.ie" target="_blank" rel="noopener" style="color:inherit">@allroads.ie</a></span>
            </div>
          </div>

          <div class="contact-info-item">
            <span class="material-symbols-outlined">location_on</span>
            <div>
              <strong>Based in</strong>
              <span>County Wicklow, Ireland</span>
            </div>
          </div>

          <div class="contact-info-item">
            <span class="material-symbols-outlined">schedule</span>
            <div>
              <strong>Response time</strong>
              <span>1–2 business days</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

export function init() {
    initScrollReveal();
    initContactForm();
    return () => { cleanupScrollReveal(); };
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('contact-submit');
        btn.innerHTML = `<span class="material-symbols-outlined">check</span> Message sent!`;
        btn.style.background = '#3d6b47';
        btn.disabled = true;

        form.querySelectorAll('input, textarea, select').forEach(el => el.disabled = true);
    });
}
