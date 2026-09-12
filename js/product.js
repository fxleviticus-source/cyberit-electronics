/* =========================================================================
   CYBER-IT ELECTRONICS — PRODUCT DETAILS PAGE
   ========================================================================= */

(function () {
  "use strict";

  function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function renderNotFound() {
    document.getElementById("productDetail").innerHTML =
      '<div class="empty-state">' +
      "<h2>Product not found</h2>" +
      '<p>This item may have been removed from the demo catalogue.</p>' +
      '<a class="btn btn--primary" href="shop.html">Back to Shop</a>' +
      "</div>";
    document.getElementById("relatedWrap").style.display = "none";
  }

  function render(product) {
    document.title = product.name + " | Cyber-IT Electronics";

    const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image];
    const discount = product.oldPrice ? Math.round(100 - (product.price / product.oldPrice) * 100) : null;

    document.getElementById("breadcrumbCurrent").textContent = product.name;

    const mainImg = document.getElementById("mainProductImage");
    mainImg.src = gallery[0];
    mainImg.alt = product.name;

    const thumbsWrap = document.getElementById("galleryThumbs");
    if (gallery.length > 1) {
      thumbsWrap.innerHTML = gallery.map(function (src, i) {
        return '<button class="gallery-thumb" data-src="' + src + '" style="border:1px solid var(--line);border-radius:6px;overflow:hidden;width:64px;height:64px;background:#0b0d10;">' +
          '<img src="' + src + '" alt="" style="width:100%;height:100%;object-fit:contain;">' + "</button>";
      }).join("");
      thumbsWrap.querySelectorAll(".gallery-thumb").forEach(function (btn) {
        btn.addEventListener("click", function () { mainImg.src = btn.getAttribute("data-src"); });
      });
    }

    document.getElementById("productCategory").textContent = categoryLabel(product.category);
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productPrice").textContent = formatZMW(product.price);

    const oldPriceEl = document.getElementById("productOldPrice");
    if (product.oldPrice) {
      oldPriceEl.textContent = formatZMW(product.oldPrice);
      oldPriceEl.style.display = "inline";
    } else {
      oldPriceEl.style.display = "none";
    }

    const discountEl = document.getElementById("productDiscount");
    if (discount) {
      discountEl.textContent = "Save " + discount + "%";
      discountEl.style.display = "inline-flex";
    } else {
      discountEl.style.display = "none";
    }

    document.getElementById("productAvailability").textContent = product.availability;
    document.getElementById("productDescription").textContent = product.description;

    document.getElementById("specList").innerHTML = product.specs.map(function (s) {
      return "<li><span>" + s + "</span></li>";
    }).join("");

    const demoNote = document.getElementById("demoImageNote");
    demoNote.style.display = product.demoImage ? "block" : "none";

    const orderBtn = document.getElementById("orderWhatsAppBtn");
    orderBtn.href = buildWhatsAppLink({ product: product.name, price: formatZMW(product.price) });

    const askBtn = document.getElementById("askWhatsAppBtn");
    askBtn.href = buildGeneralWhatsAppLink(
      "Hello Cyber-IT Electronics, I have a question about the " + product.name + " (price shown: " + formatZMW(product.price) + ")."
    );

    // Related products: same category, excluding current
    const related = PRODUCTS.filter(function (p) { return p.category === product.category && p.id !== product.id; }).slice(0, 4);
    const relatedWrap = document.getElementById("relatedWrap");
    if (related.length) {
      document.getElementById("relatedGrid").innerHTML = related.map(renderProductCard).join("");
    } else {
      relatedWrap.style.display = "none";
    }

    if (typeof initReveal === "function") initReveal();
  }

  document.addEventListener("DOMContentLoaded", function () {
    const id = getParam("id");
    const product = id ? getProductById(id) : null;
    if (!product) {
      renderNotFound();
      return;
    }
    render(product);
  });
})();
