/* =========================================================================
   CYBER-IT ELECTRONICS — SHOP / CATALOGUE PAGE
   ========================================================================= */

(function () {
  "use strict";

  let state = {
    query: "",
    category: "all",
    sort: "featured"
  };

  function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function renderChips() {
    const wrap = document.getElementById("categoryChips");
    const all = [{ id: "all", label: "All Products" }].concat(CATEGORIES);
    wrap.innerHTML = all.map(function (c) {
      return (
        '<button class="filter-chip' + (state.category === c.id ? " is-active" : "") + '" data-cat="' + c.id + '">' +
        c.label + "</button>"
      );
    }).join("");

    wrap.querySelectorAll(".filter-chip").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.category = btn.getAttribute("data-cat");
        renderChips();
        renderGrid();
      });
    });
  }

  function applyFilters() {
    let list = PRODUCTS.slice();

    if (state.category !== "all") {
      list = list.filter(function (p) { return p.category === state.category; });
    }

    if (state.query.trim()) {
      const q = state.query.trim().toLowerCase();
      list = list.filter(function (p) {
        return (
          p.name.toLowerCase().indexOf(q) !== -1 ||
          p.shortDescription.toLowerCase().indexOf(q) !== -1 ||
          categoryLabel(p.category).toLowerCase().indexOf(q) !== -1
        );
      });
    }

    switch (state.sort) {
      case "price-low":
        list.sort(function (a, b) { return a.price - b.price; });
        break;
      case "price-high":
        list.sort(function (a, b) { return b.price - a.price; });
        break;
      case "deals":
        list = list.filter(function (p) { return p.deal && p.oldPrice; });
        break;
      default:
        list.sort(function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); });
    }

    return list;
  }

  function renderGrid() {
    const grid = document.getElementById("shopGrid");
    const countEl = document.getElementById("resultCount");
    const list = applyFilters();

    if (!list.length) {
      grid.innerHTML = '<div class="empty-state">No products match your search. Try a different keyword or category.</div>';
    } else {
      grid.innerHTML = list.map(renderProductCard).join("");
    }
    countEl.textContent = list.length + (list.length === 1 ? " product" : " products");
    if (typeof initReveal === "function") initReveal();
  }

  document.addEventListener("DOMContentLoaded", function () {
    const catParam = getParam("category");
    if (catParam) state.category = catParam;

    renderChips();
    renderGrid();

    document.getElementById("searchInput").addEventListener("input", function (e) {
      state.query = e.target.value;
      renderGrid();
    });

    document.getElementById("sortSelect").addEventListener("change", function (e) {
      state.sort = e.target.value;
      renderGrid();
    });
  });
})();
