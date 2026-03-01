/* ============================================================
   ALLROADS — Article: Exploring the Mournes
   ============================================================ */
import { initScrollReveal, cleanupScrollReveal } from '../shared.js';

export function render() {
    return `
    <section class="page-hero">
      <div class="page-hero__bg">
        <img src="/images/hiking-family.png" alt="Family hiking together in the mountains" class="page-hero__img" />
        <div class="page-hero__overlay"></div>
      </div>
      <div class="page-hero__content">
        <span class="page-hero__tag">The AllRoads Journal</span>
        <h1 class="page-hero__title">Stories from the Trail</h1>
        <p class="page-hero__desc">A family adventure to the summit of Slieve Doan in the heart of the Mourne Mountains.</p>
      </div>
    </section>

    <article class="article-page">
      <a href="#/journal" class="article-back">
        <span class="material-symbols-outlined">arrow_back</span>
        Back to Journal
      </a>

      <h1 class="article-title">Exploring the Mournes</h1>

      <div class="article-meta">
        <span><span class="material-symbols-outlined">person</span> Nick Lowe</span>
        <span><span class="material-symbols-outlined">calendar_today</span> 14 August 2025</span>
        <span><span class="material-symbols-outlined">schedule</span> 4 min read</span>
        <span><span class="material-symbols-outlined">location_on</span> Co. Down</span>
      </div>

      <div class="article-body">
        <p class="article-intro">Last weekend, we packed up our gear, laced our boots, and headed north to County Down for a family adventure in the heart of the Mourne Mountains. Our destination was the summit of Slieve Doan — a smaller peak by Mourne standards, but one that offers some of the most breathtaking views in the entire range.</p>

        <h2>The Ascent</h2>
        <p>The first half of the climb was warm and humid, the kind of weather that makes you shed a layer and settle into a steady rhythm. This is where having the right clothing really matters — lightweight, breathable layers that move with you, wick away moisture, and keep you shaded from the midday sun.</p>
        <p>The kids raced ahead in bursts, weaving between boulders and turning the trail into their own adventure course. It's proof that gear designed for movement makes all the difference in keeping energy and spirits high when the gradient starts to bite.</p>

        <h2>Crossing the Mourne Wall</h2>
        <p>Reaching the famous Mourne Wall, we scrambled up and over — and were instantly greeted by a cool, refreshing breeze. It was as if the mountains themselves had opened their arms to welcome us.</p>
        <p>Beyond lay a panorama of rolling peaks, deep valleys, and shimmering reservoirs stretching far into the horizon. From Slieve Binnian to Slieve Bearnagh, the full range unfolded around us in rugged, unhurried beauty.</p>

        <div class="article-info-box">
          <h3>Slieve Doan — Key Facts</h3>
          <p><span class="material-symbols-outlined" style="font-size:15px;vertical-align:middle">landscape</span> Summit: 594m &nbsp;·&nbsp; <span class="material-symbols-outlined" style="font-size:15px;vertical-align:middle">location_on</span> Silent Valley, Co. Down</p>
          <p>A challenging but accessible peak — ideal for adventurous families. The Silent Valley reservoir makes a stunning base for the day.</p>
        </div>

        <h2>The Summit</h2>
        <p>The final climb steepened, but we had daypacks loaded with snacks, water, and a few treats to keep motivation strong. A well-fitted bag with enough space for all the essentials is a must for a few hours in the hills — not only for keeping everyone fuelled, but for stowing those extra layers when the temperature shifts.</p>
        <p>The kids tackled the last section with the energy only young adventurers seem to have, darting ahead and calling back encouragement. And then we were there — standing on the rocky top, rewarded with a 360° view that left us all in awe.</p>

        <h2>Why the Mournes?</h2>
        <p>Trips like this remind us why we do what we do at AllRoads — creating sustainable, durable apparel that can handle the changing moods of the Irish mountains, keep families comfortable on the trail, and help carry the little things that make a big difference.</p>
        <p>For an adventurous family, Slieve Doan is the perfect peak: challenging enough to feel like a real achievement, but accessible enough to enjoy together. As we headed back down, the kids wore the biggest smiles of the day — proud to have conquered another corner of the Irish countryside.</p>
        <p><em>AllRoads lead to greatness.</em></p>

        <h2>Getting There</h2>
        <p>The Silent Valley Mountain Park is located outside Kilkeel in Co. Down, approximately 2.5 hours from Wicklow. The park has ample parking, walking trails, and a visitor centre. Entry fees apply to the car park.</p>
        <p>For families making the journey north, it's worth spending a full day — the Silent Valley reservoir itself is a stunning walk even without the summit attempt.</p>
      </div>
    </article>
  `;
}

export function init() {
    initScrollReveal();
    return () => { cleanupScrollReveal(); };
}
