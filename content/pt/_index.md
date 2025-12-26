---
title: "Caspero x Pelican"
description: "Demo page that mirrors the captured Caspero landing while feeding content from data files."
keywords: ["caspero", "pelican", "casino"]
canonical: "https://example.com/caspero"
banner_image: "/images/slide_main-pelican.jpg"
banner_title: "Caspero x Pelican"
banner_subtitle: "Use this markdown area for localized SEO copy or regulatory text."
banner_button_link: "#cta"
banner_button_text: "Get Bonus"
---

## Why this template exists

<div class="article-card">
  <p>This `_index.md` file shows how you can mix structured blocks (hero, promos, games) with free-form markdown. Anything placed here renders inside the “Article” section of the Caspero-styled layout.</p>

  <ul>
    <li>Keep long-form text, compliance notices, or FAQ expansions here.</li>
    <li>Update the structured bits (hero badges, promo cards, stats) through <code>data/data_info/&lt;lang&gt;.yaml</code>.</li>
    <li>Localize strings via the <code>i18n/</code> directory copied into <code>brand-2</code>.</li>
  </ul>
</div>

<div class="article-card">
  <h3>Sample copy</h3>
  <p>Caspero’s captured HTML focused on a neon hero, stats, and rolling promos. This template recreates those vibes with Hugo data, so you can plug in real offers without touching markup. Update <code>brand-2/data/*.yaml</code> and rebuild to see instant changes.</p>

  <strong>Need bullet lists?</strong> Use standard Markdown:
  <ol>
    <li>Edit <code>data/data_info/&lt;lang&gt;.yaml</code> for hero/promo content.</li>
    <li>Tweak <code>data/games.yaml</code> to swap card imagery.</li>
    <li>Drop legal notes here for each market.</li>
  </ol>
</div>

<div class="article-card">
  <h3>FAQ</h3>
  <div class="faq-grid">
    <article class="faq-card">
      <h4>Can I localize everything without touching layouts?</h4>
      <p>Yes. Update <code>data/data_info/&lt;lang&gt;.yaml</code> for structured sections and rely on <code>i18n/*.yaml</code> for button labels and repeated copy.</p>
    </article>
    <article class="faq-card">
      <h4>Where does this Markdown render?</h4>
      <p>Whatever you write below the front matter is injected into the “Article” zone—use it for FAQs, legal copy, or seasonal notes.</p>
    </article>
  </div>
</div>
