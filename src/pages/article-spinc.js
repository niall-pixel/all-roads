/* ============================================================
   ALLROADS — Article: The Spinc, Glendalough
   ============================================================ */
import { initScrollReveal, cleanupScrollReveal } from '../shared.js';

export function render() {
    return `
    <section class="page-hero">
      <div class="page-hero__bg">
        <img src="/images/glendalough-lake.png" alt="View from the Spinc over Glendalough Upper Lake" class="page-hero__img" />
        <div class="page-hero__overlay"></div>
      </div>
      <div class="page-hero__content">
        <span class="page-hero__tag">The AllRoads Journal</span>
        <h1 class="page-hero__title">Stories from the Trail</h1>
        <p class="page-hero__desc">Some trails test your legs. The Spinc tests your sense of wonder.</p>
      </div>
    </section>

    <article class="article-page">
      <a href="#/journal" class="article-back">
        <span class="material-symbols-outlined">arrow_back</span>
        Back to Journal
      </a>

      <h1 class="article-title">The Spinc, Glendalough</h1>

      <div class="article-meta">
        <span><span class="material-symbols-outlined">person</span> Nick Lowe</span>
        <span><span class="material-symbols-outlined">calendar_today</span> 17 August 2025</span>
        <span><span class="material-symbols-outlined">schedule</span> 5 min read</span>
        <span><span class="material-symbols-outlined">location_on</span> Glendalough, Co. Wicklow</span>
      </div>

      <div class="article-body">
        <p class="article-intro">From the moment you climb through shaded woodlands by Poulanass Waterfall to when you crest the ridge and see Upper Lake stretching beneath you like a silver ribbon, you know you've stepped into one of Ireland's crown jewels. This is Ireland at its cinematic best — the kind of hike where you'll start in mossy forest, rise to eagle's-eye views, then wander down through a glacial valley that feels untouched by time.</p>

        <div class="article-info-box">
          <h3>At a Glance</h3>
          <p><span class="material-symbols-outlined" style="font-size:15px;vertical-align:middle">straighten</span> 9–9.5 km loop &nbsp;·&nbsp; <span class="material-symbols-outlined" style="font-size:15px;vertical-align:middle">schedule</span> 2.5–3 hours &nbsp;·&nbsp; Moderate / Strenuous</p>
          <p><strong>Highlights:</strong> Poulanass Waterfall, cliffside boardwalk, deer-filled Glenealo Valley, historic Miners' Village</p>
        </div>

        <h2>The Walk Itself</h2>
        <p>The Spinc loop begins at the Upper Lake car park. The classic clockwise route takes you up past Poulanass Waterfall through steep woodland, before opening onto the signature boardwalk ridge that runs high above the valley. The views from this section are extraordinary — the Upper Lake below, the ancient oak woodland, and the rolling Wicklow Mountains stretching into the distance.</p>
        <p>The descent winds through the Glenealo Valley, passing the ruins of the old Miners' Village, before returning to the lake shore. The climb is demanding but the boardwalk keeps the exposed ridge section safe and accessible.</p>

        <h2>Who's It For?</h2>
        <ul>
          <li><strong>Adventurers:</strong> The boardwalk ridge section is a genuine thrill, especially with changing light and weather sweeping across the valley.</li>
          <li><strong>Families with teens:</strong> Fit kids aged 10+ will love the challenge — and the bragging rights. The stairs are tough, but the boardwalk keeps things safe.</li>
          <li><strong>Nature spotters:</strong> Herds of red deer often graze the Glenealo Valley. Bring binoculars and patience.</li>
        </ul>

        <h2>A Few Insider Tips</h2>
        <ol>
          <li><strong>Start early</strong> — The Upper Lake car park fills fast, especially on summer weekends.</li>
          <li><strong>Go clockwise</strong> — A softer initial climb gives you the big ridge reveal at the right moment.</li>
          <li><strong>Take your time at the top</strong> — Photos never do it justice. Sit. Breathe. Look.</li>
          <li><strong>Explore after</strong> — The Glendalough monastic site and Round Tower are only a short stroll from the car park.</li>
        </ol>

        <h2>What to Wear</h2>
        <p>Irish weather doesn't play nice, so layering is king. The ridge is fully exposed when the sun breaks through — and equally exposed when the wind picks up.</p>
        <ul>
          <li><strong>Sturdy boots or trail shoes</strong> — Grip matters on the rocky descent.</li>
          <li><strong>Waterproof shell</strong> — Keeps wind and drizzle out above the treeline.</li>
          <li><strong>Mid-layer fleece</strong> — Lightweight warmth you can stash in your pack on the climb.</li>
          <li><strong>Base layer</strong> — Breathable and quick-dry. Cotton is your enemy on a sustained ascent.</li>
          <li><strong>Hat and sunscreen</strong> — The boardwalk ridge offers zero shade.</li>
          <li><strong>Hydration and snacks</strong> — Always. The lake views deserve a long sit-down.</li>
        </ul>

        <h2>Why We Love It</h2>
        <p>Because the Spinc is what AllRoads is all about: testing yourself against the trail, finding beauty in the climb, and coming home with stories stitched into your gear. There is no bad day on the Spinc — only varying degrees of spectacular.</p>
        <p><em>"AllRoads lead to greatness. Sometimes, they also lead to Glendalough."</em></p>
      </div>
    </article>
  `;
}

export function init() {
    initScrollReveal();
    return () => { cleanupScrollReveal(); };
}
