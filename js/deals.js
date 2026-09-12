/* =========================================================================
   CYBER-IT ELECTRONICS — DEALS PAGE
   ========================================================================= */

(function () {
  "use strict";

  const SECTIONS = [
    { title: "Featured Deals", filter: function (p) { return p.deal && p.oldPrice; }, limit: 8 },
    { title: "Smartphone Deals", filter: function (p) { return p.category === "smartphones" && p.deal && p.oldPrice; } },
    { title: "Laptop Deals", filter: function (p) { return p.category === "laptops" && p.deal; } },
    { title: "Accessories & Audio Deals", filter: function (p) { return (p.category === "accessories" || p.category === "audio") && p.deal; } },
    { title: "Electronics Deals", filter: function (p) { return (p.category === "tvs" || p.category === "gaming" || p.category === "tablets") && p.deal; } }
  ];

  function renderSections() {
    const container = document.getElementById("dealsSections");
    let html = "";

    SECTIONS.forEach(function (section, idx) {
      let items = PRODUCTS.filter(section.filter);
      if (section.limit) items = items.slice(0, section.limit);
      if (!items.length) return;

      html +=
        '<div class="section' + (idx === 0 ? "" : " section--tight") + '">' +
        '<div class="section-head section-head--center reveal"><h2>' + section.title + "</h2></div>" +
        '<div class="product-grid">' + items.map(renderProductCard).join("") + "</div>" +
        "</div>";
    });

    container.innerHTML = html;
    if (typeof initReveal === "function") initReveal();
  }

  document.addEventListener("DOMContentLoaded", renderSections);
})();
