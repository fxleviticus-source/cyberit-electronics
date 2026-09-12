/* =========================================================================
   CYBER-IT ELECTRONICS — ORDER / ENQUIRY PAGE
   ========================================================================= */

(function () {
  "use strict";

  function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function populateProductSelect() {
    const select = document.getElementById("productSelect");
    const opts = ['<option value="">Select a product (optional)</option>'];
    opts.push('<option value="General enquiry">General enquiry — not sure yet</option>');
    PRODUCTS.forEach(function (p) {
      opts.push('<option value="' + p.name + ' (' + formatZMW(p.price) + ')">' + p.name + " — " + formatZMW(p.price) + "</option>");
    });
    select.innerHTML = opts.join("");

    const preselectId = getParam("id");
    if (preselectId) {
      const product = getProductById(preselectId);
      if (product) select.value = product.name + " (" + formatZMW(product.price) + ")";
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phoneNumber").value.trim();
    const productValue = document.getElementById("productSelect").value || "Not specified";
    const location = document.getElementById("customerLocation").value.trim();
    const fulfilment = document.querySelector('input[name="fulfilment"]:checked');
    const message = document.getElementById("additionalMessage").value.trim();

    const link = buildWhatsAppLink({
      product: productValue,
      price: "See product page / to be confirmed",
      name: name,
      phone: phone,
      location: location,
      fulfilment: fulfilment ? fulfilment.value : "",
      message: message
    });

    window.open(link, "_blank", "noopener");
  }

  document.addEventListener("DOMContentLoaded", function () {
    populateProductSelect();
    document.getElementById("orderForm").addEventListener("submit", handleSubmit);
  });
})();
