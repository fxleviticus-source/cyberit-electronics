/* =========================================================================
   CYBER-IT ELECTRONICS — SHARED SITE BEHAVIOUR
   Injects the navbar + footer (single source of truth, easy to edit),
   wires up the mobile menu, scroll effects and the welcome animation.
   ========================================================================= */

(function () {
  "use strict";

  const NAV_LINKS = [
    { href: "index.html", label: "Home" },
    { href: "shop.html", label: "Shop" },
    { href: "deals.html", label: "Deals" },
    { href: "about.html", label: "About" },
    { href: "contact.html", label: "Contact" }
  ];

  function currentPage() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    return path;
  }

  function orbitSVG(extraClass) {
    return (
      '<svg viewBox="0 0 100 100" class="' + (extraClass || "") + '" aria-hidden="true">' +
      '<circle cx="50" cy="50" r="30" fill="none" stroke="#fff" stroke-width="6"/>' +
      '<ellipse cx="50" cy="50" rx="46" ry="20" fill="none" stroke="#2E7CF6" stroke-width="6" ' +
      'transform="rotate(-28 50 50)"/>' +
      "</svg>"
    );
  }

  function renderNavbar() {
    const page = currentPage();
    const links = NAV_LINKS.map(function (l) {
      const active = l.href === page ? " is-active" : "";
      return '<a href="' + l.href + '" class="' + active.trim() + '">' + l.label + "</a>";
    }).join("");

    const mobileLinks = NAV_LINKS.map(function (l) {
      return '<a href="' + l.href + '">' + l.label + "</a>";
    }).join("");

    const html =
      '<header class="navbar" id="siteNavbar">' +
      '<div class="navbar__inner">' +
      '<a href="index.html" class="navbar__brand" aria-label="Cyber-IT Electronics home">' +
      '<img src="assets/logo/cyberit-logo.png" alt="Cyber-IT Electronics logo" class="navbar__logo">' +
      "</a>" +
      '<nav class="navbar__links" aria-label="Primary">' + links + "</nav>" +
      '<div class="navbar__actions">' +
      '<a class="navbar__icon-btn navbar__icon-btn--search" href="shop.html" aria-label="Search products">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
      "</a>" +
      '<a class="btn btn--primary btn--sm" id="navShopNow" href="shop.html">' +
      "Shop Now</a>" +
      '<button class="navbar__burger" id="burgerBtn" aria-label="Open menu" aria-expanded="false">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>' +
      "</button>" +
      "</div>" +
      "</div>" +
      "</header>" +
      '<div class="mobile-menu" id="mobileMenu">' +
      '<div class="mobile-menu__top">' +
      '<img src="assets/logo/cyberit-logo.png" alt="Cyber-IT Electronics" style="height:52px">' +
      '<button class="navbar__icon-btn" id="closeMenuBtn" aria-label="Close menu">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
      "</button>" +
      "</div>" +
      '<nav class="mobile-menu__links" aria-label="Mobile">' + mobileLinks + "</nav>" +
      '<div class="mobile-menu__footer">' +
      '<a class="btn btn--primary btn--block" href="order.html">Order / Enquire</a>' +
      '<a class="btn btn--whatsapp btn--block" id="mobileWhatsApp" href="#" target="_blank" rel="noopener">Chat on WhatsApp</a>' +
      "</div>" +
      "</div>";

    document.getElementById("site-navbar").innerHTML = html;

    const waLink = buildGeneralWhatsAppLink("Hello Cyber-IT Electronics, I'd like to ask about your products.");
    document.getElementById("mobileWhatsApp").href = waLink;

    const burger = document.getElementById("burgerBtn");
    const closeBtn = document.getElementById("closeMenuBtn");
    const menu = document.getElementById("mobileMenu");
    burger.addEventListener("click", function () {
      menu.classList.add("is-open");
      burger.setAttribute("aria-expanded", "true");
    });
    closeBtn.addEventListener("click", function () {
      menu.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { menu.classList.remove("is-open"); });
    });

    const navbarEl = document.getElementById("siteNavbar");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 24) navbarEl.classList.add("is-scrolled");
      else navbarEl.classList.remove("is-scrolled");
    }, { passive: true });
  }

  function renderFooter() {
    const html =
      '<div class="container">' +
      '<div class="footer-grid">' +
      '<div>' +
      '<div class="footer-brand">' +
      '<img src="assets/logo/cyberit-logo.png" alt="Cyber-IT Electronics">' +
      "</div>" +
      '<p class="footer-tagline">"We have you covered."</p>' +
      '<p style="font-size:0.85rem;max-width:32ch;">Electronics and technology products for customers in Lusaka — with WhatsApp ordering and support.</p>' +
      "</div>" +
      '<div><h4>Navigate</h4><ul>' +
      '<li><a href="index.html">Home</a></li>' +
      '<li><a href="shop.html">Shop</a></li>' +
      '<li><a href="deals.html">Deals</a></li>' +
      '<li><a href="about.html">About</a></li>' +
      '<li><a href="contact.html">Contact</a></li>' +
      "</ul></div>" +
      '<div><h4>Categories</h4><ul>' +
      '<li><a href="shop.html?category=smartphones">Smartphones</a></li>' +
      '<li><a href="shop.html?category=laptops">Laptops & Computers</a></li>' +
      '<li><a href="shop.html?category=tablets">Tablets</a></li>' +
      '<li><a href="shop.html?category=audio">Audio</a></li>' +
      '<li><a href="shop.html?category=accessories">Accessories</a></li>' +
      "</ul></div>" +
      '<div><h4>Contact</h4><ul>' +
      '<li>Leeds Complex, Stand 42<br>Chachacha Road, Lusaka, Zambia</li>' +
      '<li><a href="tel:+260973142026">+260 973 142026</a></li>' +
      '<li>Mon–Sat, 08:00–18:00</li>' +
      '<li><a href="#" id="footerWhatsApp" target="_blank" rel="noopener">Chat on WhatsApp</a></li>' +
      "</ul></div>" +
      "</div>" +
      '<div class="footer-bottom">' +
      '<p class="footer-disclaimer">Demo website concept. Product prices, availability and catalogue information should be confirmed with Cyber-IT Electronics.</p>' +
      '<p>© ' + new Date().getFullYear() + ' Cyber-IT Electronics</p>' +
      "</div>" +
      "</div>";
    document.getElementById("site-footer").innerHTML = html;
    document.getElementById("footerWhatsApp").href = buildGeneralWhatsAppLink();
  }

  function runIntro() {
    const introEl = document.getElementById("siteIntro");
    if (!introEl) return;

    const alreadySeen = sessionStorage.getItem("cyberit_intro_seen");
    if (alreadySeen) {
      introEl.remove();
      return;
    }

    introEl.innerHTML =
      '<div class="intro__mark">' +
      '<div class="intro__orbit">' + orbitSVG() + "</div>" +
      '<div class="intro__wordmark"><span class="w-cyber">cyber</span></div>' +
      '<div class="intro__sub">IT ELECTRONICS</div>' +
      '<div class="intro__tagline">"We have you covered."</div>' +
      "</div>";

    document.body.style.overflow = "hidden";
    setTimeout(function () {
      introEl.classList.add("is-hidden");
      document.body.style.overflow = "";
      sessionStorage.setItem("cyberit_intro_seen", "1");
      setTimeout(function () { introEl.remove(); }, 550);
    }, 2200);
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !items.length) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  // Exposed globally so page scripts can re-run it after injecting
  // dynamic content (product grids, category cards, etc.).
  window.initReveal = initReveal;

  document.addEventListener("DOMContentLoaded", function () {
    renderNavbar();
    renderFooter();
    runIntro();
    initReveal();
  });
})();
