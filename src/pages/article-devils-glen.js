/* ============================================================
   ALLROADS — Article: Devil's Glen, Co. Wicklow
   ============================================================ */
import { initScrollReveal, cleanupScrollReveal } from '../shared.js';

export function render() {
    return `
    <section class="page-hero">
      <div class="page-hero__bg">
        <img src="/images/devils-glen.png" alt="Devil's Glen forest gorge" class="page-hero__img" />
        <div class="page-hero__overlay"></div>
      </div>
      <div class="page-hero__content">
        <span class="page-hero__tag">The AllRoads Journal</span>
        <h1 class="page-hero__title">Stories from the Trail</h1>
        <p class="page-hero__desc">A forest gorge of waterfalls, woodland trails, and poetry in the Wicklow Hills.</p>
      </div>
    </section>

    <article class="article-page">
      <a href="#/journal" class="article-back">
        <span class="material-symbols-outlined">arrow_back</span>
        Back to Journal
      </a>

      <h1 class="article-title">Devil's Glen, Co. Wicklow</h1>

      <div class="article-meta">
        <span><span class="material-symbols-outlined">person</span> Nick Lowe</span>
        <span><span class="material-symbols-outlined">calendar_today</span> 14 September 2025</span>
        <span><span class="material-symbols-outlined">schedule</span> 6 min read</span>
        <span><span class="material-symbols-outlined">location_on</span> Ashford, Co. Wicklow</span>
      </div>

      <div class="article-body">
        <p class="article-intro">Hidden just outside the village of Ashford in Co. Wicklow, Devil's Glen is one of Ireland's most atmospheric forest walks. Here, the Vartry River cuts through a dramatic gorge formed by glacial meltwater at the end of the last Ice Age. Today the glen is managed by Coillte, balancing recreation with conservation, and offering a unique blend of wild beauty, sculpture, and literary heritage.</p>

        <h2>Why Visit Devil's Glen?</h2>
        <ul>
          <li><strong>Waterfall drama:</strong> The Vartry River drops through a rocky gorge, creating one of the most impressive woodland cascades in Wicklow.</li>
          <li><strong>Sculptures in Woodland:</strong> Contemporary works by Irish and international artists are scattered throughout the forest, designed to interact with the landscape.</li>
          <li><strong>Seamus Heaney connections:</strong> The Nobel Prize-winning poet drew inspiration here. His words are etched along trails, adding reflection to your walk.</li>
          <li><strong>Ecological richness:</strong> From mature beech and Spanish chestnut to ash and conifers, the woodland is a biodiversity haven.</li>
          <li><strong>Peaceful alternative:</strong> Less crowded than Glendalough, the glen offers true forest stillness and a sense of real discovery.</li>
        </ul>

        <h2>The Walking Routes</h2>
        <p>Two looped trails are waymarked by Coillte. Both are moderate in difficulty, with some uneven and steep sections. Good footwear is essential.</p>

        <div class="article-info-box">
          <h3>Waterfall Walk</h3>
          <p><span class="material-symbols-outlined" style="font-size:15px;vertical-align:middle">straighten</span> 5 km &nbsp;·&nbsp; <span class="material-symbols-outlined" style="font-size:15px;vertical-align:middle">schedule</span> 2–2.5 hours &nbsp;·&nbsp; Moderate</p>
          <p>Follows the Vartry River, crosses forest paths, and leads to the waterfall. Terrain varies from riverside tracks to steeper inclines. Best enjoyed in dry weather when paths are less slippery.</p>
        </div>

        <div class="article-info-box">
          <h3>Seamus Heaney Walk</h3>
          <p><span class="material-symbols-outlined" style="font-size:15px;vertical-align:middle">straighten</span> 4 km &nbsp;·&nbsp; <span class="material-symbols-outlined" style="font-size:15px;vertical-align:middle">schedule</span> 1.5–2 hours &nbsp;·&nbsp; Easier</p>
          <p>A gentler loop through tall forest canopies. Sculptures, poetry, and a tranquil woodland atmosphere dominate. Ideal if you prefer an easier walk without steep riverbank terrain.</p>
        </div>

        <p>Both walks share sections and can be combined if you have the time and energy.</p>

        <h2>Access &amp; Parking</h2>
        <p>There are two main parking areas, both maintained by Coillte:</p>
        <ul>
          <li><strong>Small Car Park:</strong> Capacity for around 5 cars. Located near the start of the Seamus Heaney Walk. Open access at all times.</li>
          <li><strong>Large Car Park &amp; Coach Park:</strong> Capacity for ~25 cars, at the start of the Waterfall Walk.</li>
        </ul>
        <p>Car park accessible 8am–5pm; entrance barrier open 9am–5pm daily. <strong>The barrier closes promptly at 5pm</strong> — plan your walk accordingly or you may find yourself locked in.</p>
        <p><strong>Getting there:</strong> From Ashford, take the R764 toward Roundwood. After 0.5km, turn left onto the R763 toward Glendalough. Drive for about 3km and the entrance to Devil's Glen is signposted on the right.</p>

        <h2>When to Visit</h2>
        <ul>
          <li><strong>Spring &amp; Summer:</strong> Lush green canopies, clear paths, and longer light.</li>
          <li><strong>Autumn:</strong> Golden colours transform the forest — a fantastic time for photographers.</li>
          <li><strong>Winter:</strong> Dramatic atmosphere with bare trees and a roaring river, but paths can be muddy and slippery.</li>
        </ul>
        <p>Weekday mornings are quieter. Weekends can fill quickly, especially at the waterfall.</p>

        <h2>What to Bring</h2>
        <ul>
          <li><strong>Footwear:</strong> Sturdy walking boots or trail shoes — essential on the rocky riverside paths.</li>
          <li><strong>Clothing:</strong> Waterproof layers. Wicklow weather changes quickly and without warning.</li>
          <li><strong>Essentials:</strong> Water, snacks, and a phone map. There are no shops or cafes in the glen itself.</li>
          <li><strong>Leave no trace:</strong> Stick to paths, take all litter home, and keep children and dogs under close supervision near the gorge edges.</li>
        </ul>

        <h2>Safety Notes</h2>
        <p>Some paths run close to steep, exposed slopes. Take care in wet conditions — surfaces can be muddy or slippery after rainfall. Always check Coillte's website for forest closure notices due to storms or maintenance.</p>

        <h2>After the Walk</h2>
        <p>Nearby Ashford offers cosy cafes and local shops. Visiting supports the local community and keeps your day low-impact. For those looking to extend the trip, Mount Usher Gardens and the wider Wicklow countryside — Glendalough, Sally Gap, Lough Tay — are all within easy reach.</p>
      </div>
    </article>
  `;
}

export function init() {
    initScrollReveal();
    return () => { cleanupScrollReveal(); };
}
