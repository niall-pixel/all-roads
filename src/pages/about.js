/* ============================================================
   ALLROADS — About Page
   ============================================================ */
import { initScrollReveal, cleanupScrollReveal, initParallax, initNewsletter } from '../shared.js';

export function render() {
    return `
    <!-- ABOUT HERO -->
    <section class="page-hero page-hero--about">
      <div class="page-hero__bg">
        <img src="/images/lough-tay-wicklow.webp" alt="Lough Tay Wicklow" class="page-hero__img" />
        <div class="page-hero__overlay"></div>
      </div>
      <div class="page-hero__content">
        <span class="page-hero__tag">Our Story</span>
        <h1 class="page-hero__title">Born in Wicklow</h1>
        <p class="page-hero__desc">Born in the hills of Wicklow. Inspired by family, nature, and every road in between.</p>
      </div>
    </section>

    <!-- ABOUT CONTENT -->
    <section class="about" id="about-section">
      <div class="about__inner">
        <div class="about__image">
          <img src="/images/wicklow-way-signpost.png" alt="Wicklow Way signpost on moorland" loading="lazy" />
        </div>
        <div class="about__content">
          <span class="section-header__tag">The Beginning</span>
          <h2 class="about__title">From Many Roads, One Purpose</h2>
          <p class="about__text">Having travelled a lot of roads across continents, cities, and wild places — it wasn't until we settled with our family in the hills of County Wicklow that things truly clicked. Being between the mountains and the sea, surrounded by nature and rooted in family, reminded us what we care most about: connections, quality, and living with purpose.</p>
          <p class="about__text">We started AllRoads to create outdoor clothing that feels right — for this land, for our weather, and for people who move through life with intention. This isn't fast fashion. It's gear for real people, on real journeys.</p>
          <div class="about__values">
            <div class="about__value">
              <span class="material-symbols-outlined">eco</span>
              <div>
                <strong>Sustainable</strong>
                <span>100% Organic & Recycled Fibers</span>
              </div>
            </div>
            <div class="about__value">
              <span class="material-symbols-outlined">location_city</span>
              <div>
                <strong>Irish Made</strong>
                <span>Designed in Wicklow</span>
              </div>
            </div>
            <div class="about__value">
              <span class="material-symbols-outlined">groups</span>
              <div>
                <strong>Family First</strong>
                <span>For All Ages & Adventures</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MISSION BANNER -->
    <section class="parallax-banner" id="mission-banner">
      <img src="/images/hiking-family.png" alt="Family hiking together" class="parallax-banner__img" loading="lazy" />
      <div class="parallax-banner__overlay"></div>
      <div class="parallax-banner__content">
        <span class="parallax-banner__tag">Our Mission</span>
        <h2 class="parallax-banner__title">Every road matters</h2>
        <p class="parallax-banner__desc">We believe the best adventures happen together. AllRoads is built for families who believe that slowing down, stepping outside, and exploring with intention is the richest way to live.</p>
      </div>
    </section>

    <!-- WHAT WE BELIEVE -->
    <section class="beliefs">
      <div class="section-header">
        <span class="section-header__tag">Values</span>
        <h2 class="section-header__title">What We Believe</h2>
      </div>
      <div class="beliefs__grid">
        <div class="belief-card">
          <span class="material-symbols-outlined belief-card__icon">park</span>
          <h3 class="belief-card__title">Nature is the Best Teacher</h3>
          <p class="belief-card__text">From watching deer in Glendalough to spotting foxgloves on the Wicklow Way — every walk is a lesson in wonder for the whole family.</p>
        </div>
        <div class="belief-card">
          <span class="material-symbols-outlined belief-card__icon">favorite</span>
          <h3 class="belief-card__title">Quality Over Quantity</h3>
          <p class="belief-card__text">We make fewer things, better. Every piece uses organic or recycled materials and is built to last — on the mountain and in the wash.</p>
        </div>
        <div class="belief-card">
          <span class="material-symbols-outlined belief-card__icon">hiking</span>
          <h3 class="belief-card__title">Adventure is for Everyone</h3>
          <p class="belief-card__text">Whether you're carrying a toddler on your back or keeping up with teenagers on the Spinc — AllRoads makes gear for every stage of the journey.</p>
        </div>
      </div>
    </section>

    <!-- CONNECT -->
    <section class="about-connect">
      <div class="about-connect__inner">
        <h2 class="about-connect__title">Come say hello</h2>
        <p class="about-connect__desc">We'd love to hear from you — whether it's a trail recommendation, a question about our gear, or just to share a photo from your family's latest adventure.</p>
        <div class="about-connect__links">
          <a href="https://www.instagram.com/allroads.ie" class="btn btn--primary" target="_blank" rel="noopener">
            <span class="material-symbols-outlined">photo_camera</span>
            Follow on Instagram
          </a>
          <a href="#/contact" class="btn btn--outline">
            Send us a message
            <span class="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
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

    return () => {
        cleanupScrollReveal();
        if (cleanupParallax) cleanupParallax();
    };
}
