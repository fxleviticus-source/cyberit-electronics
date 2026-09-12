/* =========================================================================
   CYBER-IT ELECTRONICS — HOMEPAGE
   ========================================================================= */

(function () {
  "use strict";

  const HERO_SLIDES = [
    {
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=70",
      eyebrow: "Smartphones",
      headline: "Latest Technology. Right at Your Fingertips.",
      body: "Discover quality electronics, devices and accessories from Cyber-IT Electronics.",
      cta: { label: "Explore Products", href: "shop.html" },
      secondary: { label: "WhatsApp Us", type: "whatsapp" }
    },
    {
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=70",
      eyebrow: "Laptops & Computers",
      headline: "Power Your Everyday.",
      body: "Technology for work, entertainment, communication and everything in between.",
      cta: { label: "Shop Electronics", href: "shop.html?category=laptops" }
    },
    {
      image: "https://images.unsplash.com/photo-1718382341267-aef8a9e4ecef?auto=format&fit=crop&w=1600&q=70",
      eyebrow: "Accessories & Devices",
      headline: "Everything You Need. One Place.",
      body: "Explore electronics and accessories designed for everyday life.",
      cta: { label: "View Catalogue", href: "shop.html" }
    },
    {
      image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=1600&q=70",
      eyebrow: "Cyber-IT Electronics",
      headline: "We Have You Covered.",
      body: "Quality electronics with convenient ordering and customer support.",
      cta: { label: "Contact Us", href: "contact.html" }
    }
  ];

  const CATEGORY_IMAGES = {
    "smartphones": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=500&q=70",
    "laptops": "https://images.unsplash.com/photo-1552257079-e48b715185fa?auto=format&fit=crop&w=500&q=70",
    "tablets": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=500&q=70",
    "tvs": "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=500&q=70",
    "audio": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=70",
    "accessories": "https://images.unsplash.com/photo-1594299447935-e5b840f54b9b?auto=format&fit=crop&w=500&q=70",
    "smart-devices": "https://images.unsplash.com/photo-1604160687800-f7799a525a33?auto=format&fit=crop&w=500&q=70",
    "gaming": "https://images.unsplash.com/photo-1664092815859-633b5e9dc7ad?auto=format&fit=crop&w=500&q=70",
    "electronics": "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=500&q=70"
  };

  function renderHero() {
    const track = document.getElementById("heroTrack");
    const dots = document.getElementById("heroDots");
    if (!track) return;

    track.innerHTML = HERO_SLIDES.map(function (s, i) {
      const secondaryBtn = s.secondary
        ? '<a class="btn btn--whatsapp btn--pill" id="heroWa' + i + '" target="_blank" rel="noopener">' + s.secondary.label + "</a>"
        : "";
      return (
        '<div class="hero__slide' + (i === 0 ? " is-active" : "") + '" data-index="' + i + '">' +
        '<div class="hero__bg" style="background-image:url(&quot;' + s.image + '&quot;)"></div>' +
        '<div class="container">' +
        '<div class="hero__content">' +
        '<span class="hero__meta">Leeds Complex, Lusaka &middot; Mon&ndash;Sat, 08:00&ndash;18:00</span>' +
        "<h1 class=\"hero__headline\">" + s.headline + "</h1>" +
        '<span class="hero__subtitle">' + s.eyebrow + "</span>" +
        '<p class="hero__body">' + s.body + "</p>" +
        '<div class="hero__cta">' +
        '<a class="btn btn--primary btn--pill" href="' + s.cta.href + '">' + s.cta.label + "</a>" +
        secondaryBtn +
        "</div></div></div></div>"
      );
    }).join("");

    dots.innerHTML = HERO_SLIDES.map(function (_, i) {
      return '<button class="hero__dot' + (i === 0 ? " is-active" : "") + '" data-goto="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>';
    }).join("");

    HERO_SLIDES.forEach(function (s, i) {
      if (s.secondary) {
        const el = document.getElementById("heroWa" + i);
        if (el) el.href = buildGeneralWhatsAppLink("Hello Cyber-IT Electronics, I'd like help choosing a device.");
      }
    });

    let current = 0;
    const slides = track.querySelectorAll(".hero__slide");
    const dotEls = dots.querySelectorAll(".hero__dot");

    function goTo(index) {
      slides[current].classList.remove("is-active");
      dotEls[current].classList.remove("is-active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      dotEls[current].classList.add("is-active");
    }

    let timer = setInterval(function () { goTo(current + 1); }, 5500);

    dotEls.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        clearInterval(timer);
        goTo(i);
        timer = setInterval(function () { goTo(current + 1); }, 5500);
      });
    });
  }

  function renderCategories() {
    const grid = document.getElementById("categoryGrid");
    if (!grid) return;
    grid.innerHTML = CATEGORIES.map(function (c) {
      const img = CATEGORY_IMAGES[c.id] || "";
      return (
        '<a class="cat-card reveal" href="shop.html?category=' + c.id + '">' +
        '<div class="cat-card__bg" style="background-image:url(&quot;' + img + '&quot;)"></div>' +
        '<span class="cat-card__label">' + c.label + "</span>" +
        "</a>"
      );
    }).join("");
  }

  function renderFeatured() {
    const grid = document.getElementById("featuredGrid");
    if (!grid) return;
    grid.innerHTML = getFeaturedProducts().slice(0, 8).map(renderProductCard).join("");
  }

  function renderDealsPreview() {
    const grid = document.getElementById("dealsPreviewGrid");
    if (!grid) return;
    grid.innerHTML = getDealProducts().slice(0, 4).map(renderProductCard).join("");
  }

  function wireWhatsAppCTA() {
    const el = document.getElementById("ctaWhatsApp");
    if (el) el.href = buildGeneralWhatsAppLink("Hello Cyber-IT Electronics, I need help choosing a device.");
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHero();
    renderCategories();
    renderFeatured();
    renderDealsPreview();
    wireWhatsAppCTA();
    if (typeof initReveal === "function") initReveal();
  });
})();
