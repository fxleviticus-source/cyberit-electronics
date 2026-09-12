/* =========================================================================
   CYBER-IT ELECTRONICS — PRODUCT DATA
   -------------------------------------------------------------------------
   This is the single editable data source for the whole demo catalogue.
   To update the real site later: change the fields below — every page
   (home, shop, deals, product) reads from this file automatically.

   image: path to real Cyber-IT photo (assets/products/...) OR a web URL
          used only as a demo placeholder (marked demoImage: true).
   ========================================================================= */

const CYBERIT_WHATSAPP_NUMBER = "260973142026";

const PRODUCTS = [
  // ---------------------------------------------------------------------
  // LAPTOPS — real Cyber-IT catalogue photos
  // ---------------------------------------------------------------------
  {
    id: "lenovo-thinkpad-t470s",
    name: "Lenovo ThinkPad T470s i5 Gen 7",
    category: "laptops",
    price: 5099,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1552257079-e48b715185fa?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: ["https://images.unsplash.com/photo-1552257079-e48b715185fa?auto=format&fit=crop&w=600&q=70"],
    shortDescription: "Premium business laptop built for all-day reliability.",
    description: "The Lenovo ThinkPad T470s pairs a 7th-generation Intel Core i5 processor with a durable ThinkPad chassis, making it a dependable daily driver for office work, browsing and everyday business tasks.",
    specs: [
      "Intel Core i5, 7th Gen",
      "RAM: 8GB",
      "Storage: 256GB SSD",
      "Display: 14\" IPS",
      "Windows 11, Microsoft Suite, Adobe Reader pre-installed",
      "Type-C port, RJ45 (LAN) port, HDMI port",
      "Fingerprint reader",
      "Backlit keyboard",
      "Strong battery life"
    ],
    availability: "Available — subject to confirmation",
    featured: true,
    deal: true,
    badge: "Premium Business Laptop"
  },
  {
    id: "dell-latitude-5490",
    name: "Dell Latitude 5490 i5 Gen 8",
    category: "laptops",
    price: 5499,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1554246247-6993b606e8b9?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: ["https://images.unsplash.com/photo-1554246247-6993b606e8b9?auto=format&fit=crop&w=600&q=70"],
    shortDescription: "Light-gaming laptop with 2GB dedicated graphics.",
    description: "The Dell Latitude 5490 steps things up with an 8th-generation Intel Core i5 and 2GB of dedicated graphics, giving it enough headroom for light gaming and graphics-aware work alongside everyday productivity.",
    specs: [
      "Intel Core i5, 8th Gen",
      "2GB Dedicated Graphics",
      "RAM: 8GB",
      "Storage: 256GB SSD",
      "Display: 14\"",
      "Windows 11, Microsoft Suite, Adobe Reader pre-installed",
      "Type-C port, RJ45 (LAN) port, HDMI port",
      "Fingerprint reader",
      "Backlit keyboard"
    ],
    availability: "Available — subject to confirmation",
    featured: true,
    deal: true,
    badge: "Light Gaming — 2GB Dedicated"
  },
  {
    id: "lenovo-thinkpad-l13",
    name: "Lenovo ThinkPad L13 i5 10th Gen",
    category: "laptops",
    price: 7599,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1552257079-e48b715185fa?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: ["https://images.unsplash.com/photo-1552257079-e48b715185fa?auto=format&fit=crop&w=600&q=70"],
    shortDescription: "Classy, high-performance ThinkPad for modern work.",
    description: "The Lenovo ThinkPad L13 brings a 10th-generation Intel Core i5 into a compact 13.3\" frame, built for people who want ThinkPad reliability in a lighter, more portable package. A free laptop stand is included while stock lasts.",
    specs: [
      "Intel Core i5, 10th Gen",
      "RAM: 8GB",
      "Storage: 256GB SSD",
      "Display: 13.3\"",
      "Windows 11, Microsoft Suite, Adobe Reader pre-installed",
      "Type-C port, RJ45 (LAN) port, HDMI port",
      "Strong battery life",
      "Free laptop stand included"
    ],
    availability: "Available — subject to confirmation",
    featured: true,
    deal: false,
    badge: "Classy High Performance"
  },
  {
    id: "dell-latitude-5320",
    name: "Dell Latitude 5320 i5 11th Gen",
    category: "laptops",
    price: 10699,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1554246247-6993b606e8b9?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: ["https://images.unsplash.com/photo-1554246247-6993b606e8b9?auto=format&fit=crop&w=600&q=70"],
    shortDescription: "Flagship 11th-gen business ultrabook with a 13.3\" FHD display.",
    description: "The Dell Latitude 5320 is our top-tier business ultrabook: an 11th-generation Intel Core i5 with Intel Iris Xe graphics, 16GB of RAM and a crisp 13.3\" FHD screen, built for demanding professional workloads.",
    specs: [
      "Intel Core i5, 11th Gen, up to 4.40GHz",
      "Intel Iris Xe Graphics",
      "RAM: 16GB",
      "Storage: 256GB SSD",
      "Display: 13.3\" FHD",
      "720p webcam with IR camera",
      "Microsoft Suite, Adobe Reader pre-installed",
      "Type-C port, HDMI port",
      "Strong battery life"
    ],
    availability: "Available — subject to confirmation",
    featured: true,
    deal: false,
    badge: "Promo: Free HP 2320 AIO Printer"
  },
  {
    id: "dell-3120",
    name: "Dell 3120 10th Gen 2-in-1",
    category: "laptops",
    price: 3799,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1593642633279-1796119d5482?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: ["https://images.unsplash.com/photo-1593642633279-1796119d5482?auto=format&fit=crop&w=600&q=70"],
    shortDescription: "Elegant, touchscreen 2-in-1 for everyday computing.",
    description: "The Dell 3120 is a compact, elegant 2-in-1 with a 10th-generation processor and an 11.6\" FHD touchscreen — an easy, affordable entry point into a reliable laptop for study, browsing and light office work.",
    specs: [
      "10th Gen Processor",
      "RAM: 8GB",
      "Storage: 256GB SSD",
      "Display: 11.6\" FHD Touchscreen",
      "Windows 11, Microsoft Suite, Adobe Reader pre-installed",
      "Type-C port, HDMI port"
    ],
    availability: "Available — subject to confirmation",
    featured: false,
    deal: true,
    badge: "Elegant Yet Powerful"
  },
  {
    id: "dell-poweredge-r910",
    name: "Dell PowerEdge R910 Server",
    category: "electronics",
    price: 12300,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: ["https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=600&q=70"],
    shortDescription: "High-performance rack server for demanding business workloads.",
    description: "The Dell PowerEdge R910 is a high-performance rack server suited to businesses that need serious compute power and storage for servers, virtualisation or data-heavy applications.",
    specs: [
      "Intel Xeon X4 E7 4830, 2.13GHz",
      "24 Cores",
      "RAM: 180GB ECC, 1067MHz",
      "Storage: SAS 584GB, 15k RPM"
    ],
    availability: "Available (SH) — subject to confirmation",
    featured: false,
    deal: false,
    badge: "High Performance Server"
  },
  {
    id: "laptop-bag-classic",
    name: "Classic Laptop Backpack",
    category: "accessories",
    price: 350,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1594299447935-e5b840f54b9b?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: ["https://images.unsplash.com/photo-1594299447935-e5b840f54b9b?auto=format&fit=crop&w=600&q=70"],
    shortDescription: "Durable padded laptop backpack with multiple compartments.",
    description: "A tough, padded laptop backpack designed to protect your device on the move, with organised compartments for cables, accessories and everyday essentials.",
    specs: ["Padded laptop compartment", "Multiple storage pockets", "Reinforced straps"],
    availability: "Available — subject to confirmation",
    featured: false,
    deal: false,
    badge: null
  },
  {
    id: "laptop-bag-premium",
    name: "Premium Laptop Backpack",
    category: "accessories",
    price: 400,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1594299447935-e5b840f54b9b?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: ["https://images.unsplash.com/photo-1594299447935-e5b840f54b9b?auto=format&fit=crop&w=600&q=70"],
    shortDescription: "Premium-finish backpack for laptops and daily carry.",
    description: "A premium-finish backpack built for laptops and daily carry, balancing a professional look with practical, organised storage.",
    specs: ["Padded laptop compartment", "Premium exterior finish", "Multiple storage pockets"],
    availability: "Available — subject to confirmation",
    featured: false,
    deal: false,
    badge: null
  },

  // ---------------------------------------------------------------------
  // SMARTPHONES — demo catalogue images (web-sourced, not store photos)
  // ---------------------------------------------------------------------
  {
    id: "samsung-galaxy-a15",
    name: "Samsung Galaxy A15",
    category: "smartphones",
    price: 2799,
    oldPrice: 3199,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: [],
    shortDescription: "Reliable everyday Android smartphone with a big AMOLED display.",
    description: "The Samsung Galaxy A15 offers a large Super AMOLED display, a versatile triple camera and dependable everyday performance — a solid all-round choice for calls, social media and daily use.",
    specs: ["6.5\" Super AMOLED display", "50MP triple camera", "128GB storage", "Android, One UI"],
    availability: "Available — subject to confirmation",
    featured: true,
    deal: true,
    badge: null
  },
  {
    id: "apple-iphone-15",
    name: "Apple iPhone 15",
    category: "smartphones",
    price: 13999,
    oldPrice: 14999,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: [],
    shortDescription: "Apple's mainline iPhone with a 48MP camera and Dynamic Island.",
    description: "The iPhone 15 brings a 48MP main camera, Dynamic Island and Apple's smooth, long-supported iOS experience — a premium option for customers who want to stay in the Apple ecosystem.",
    specs: ["6.1\" Super Retina XDR display", "48MP main camera", "USB-C", "iOS"],
    availability: "Available — subject to confirmation",
    featured: true,
    deal: false,
    badge: null
  },
  {
    id: "xiaomi-redmi-note-10-pro",
    name: "Xiaomi Redmi Note 10 Pro",
    category: "smartphones",
    price: 3299,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: [],
    shortDescription: "High-refresh AMOLED display with a strong all-round camera set.",
    description: "The Redmi Note 10 Pro pairs a 120Hz AMOLED display with a well-rounded quad-camera system, making it a strong mid-range pick for photography-minded customers on a budget.",
    specs: ["6.67\" 120Hz AMOLED display", "108MP main camera", "5020mAh battery", "Android"],
    availability: "Available — subject to confirmation",
    featured: false,
    deal: false,
    badge: null
  },

  // ---------------------------------------------------------------------
  // TABLETS
  // ---------------------------------------------------------------------
  {
    id: "samsung-galaxy-tab-a9-plus",
    name: "Samsung Galaxy Tab A9+",
    category: "tablets",
    price: 3599,
    oldPrice: 3999,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: [],
    shortDescription: "Spacious 11\" tablet for streaming, study and everyday browsing.",
    description: "The Galaxy Tab A9+ offers a large, immersive 11\" display with quad speakers — a great everyday tablet for entertainment, browsing, and light productivity around the house or office.",
    specs: ["11\" LCD display", "Quad speakers with Dolby Atmos", "5100mAh battery", "Android, One UI"],
    availability: "Available — subject to confirmation",
    featured: true,
    deal: true,
    badge: null
  },

  // ---------------------------------------------------------------------
  // TVs & DISPLAYS
  // ---------------------------------------------------------------------
  {
    id: "smart-tv-43",
    name: "43\" Smart LED TV",
    category: "tvs",
    price: 4299,
    oldPrice: 4799,
    image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: [],
    shortDescription: "Full HD Smart TV with built-in streaming apps.",
    description: "A 43\" Full HD Smart LED TV with built-in streaming apps and multiple HDMI/USB inputs — a great everyday screen for the living room, office reception or bedroom.",
    specs: ["43\" Full HD display", "Built-in Smart apps", "Multiple HDMI/USB ports"],
    availability: "Availability: Confirm with store",
    featured: false,
    deal: true,
    badge: null
  },

  // ---------------------------------------------------------------------
  // AUDIO
  // ---------------------------------------------------------------------
  {
    id: "jbl-flip-portable-speaker",
    name: "JBL Flip Portable Bluetooth Speaker",
    category: "audio",
    price: 899,
    oldPrice: 1099,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: [],
    shortDescription: "Portable, punchy Bluetooth speaker for home or on the go.",
    description: "A compact, portable Bluetooth speaker with punchy JBL sound, built for music on the move — at home, outdoors, or wherever you need reliable, portable audio.",
    specs: ["Bluetooth wireless streaming", "Water-resistant design", "Long battery life"],
    availability: "Available — subject to confirmation",
    featured: true,
    deal: true,
    badge: null
  },
  {
    id: "wireless-earbuds",
    name: "Wireless Bluetooth Earbuds",
    category: "audio",
    price: 349,
    oldPrice: 449,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: [],
    shortDescription: "Compact true-wireless earbuds with a portable charging case.",
    description: "True-wireless Bluetooth earbuds with a compact charging case — an easy, affordable everyday choice for calls, music and workouts.",
    specs: ["True wireless Bluetooth", "Compact charging case", "Touch controls"],
    availability: "Available — subject to confirmation",
    featured: false,
    deal: false,
    badge: null
  },

  // ---------------------------------------------------------------------
  // ACCESSORIES
  // ---------------------------------------------------------------------
  {
    id: "power-bank-20000",
    name: "20,000mAh Power Bank",
    category: "accessories",
    price: 299,
    oldPrice: 349,
    image: "https://images.unsplash.com/photo-1604160687800-f7799a525a33?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: [],
    shortDescription: "High-capacity power bank for phones, tablets and accessories.",
    description: "A high-capacity 20,000mAh power bank with multiple output ports, ideal for keeping phones, tablets and accessories charged throughout the day.",
    specs: ["20,000mAh capacity", "Dual USB output", "USB-C input"],
    availability: "Available — subject to confirmation",
    featured: false,
    deal: true,
    badge: null
  },
  {
    id: "usb-c-charger-cable",
    name: "USB-C Fast Charger & Cable Set",
    category: "accessories",
    price: 149,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: [],
    shortDescription: "Fast-charging wall adapter with a durable USB-C cable.",
    description: "A fast-charging wall adapter paired with a durable USB-C cable, compatible with most modern phones, tablets and laptops.",
    specs: ["Fast charging output", "Durable braided cable", "Compact wall plug"],
    availability: "Available — subject to confirmation",
    featured: false,
    deal: false,
    badge: null
  },

  // ---------------------------------------------------------------------
  // GAMING
  // ---------------------------------------------------------------------
  {
    id: "wireless-gaming-controller",
    name: "Wireless Gaming Controller",
    category: "gaming",
    price: 549,
    oldPrice: 649,
    image: "https://images.unsplash.com/photo-1664092815859-633b5e9dc7ad?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: [],
    shortDescription: "Comfortable wireless controller for console and PC gaming.",
    description: "A comfortable, responsive wireless controller compatible with popular consoles and PCs — a solid everyday pick for casual and regular gamers alike.",
    specs: ["Wireless connectivity", "Compatible with PC & console", "Long battery life"],
    availability: "Available — subject to confirmation",
    featured: false,
    deal: true,
    badge: null
  },

  // ---------------------------------------------------------------------
  // SMART DEVICES
  // ---------------------------------------------------------------------
  {
    id: "smart-plug",
    name: "Wi-Fi Smart Plug",
    category: "smart-devices",
    price: 199,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1604160687800-f7799a525a33?auto=format&fit=crop&w=600&q=70",
    demoImage: true,
    gallery: [],
    shortDescription: "App-controlled smart plug for everyday appliances.",
    description: "A Wi-Fi-enabled smart plug that lets you switch appliances on and off remotely from your phone — an easy first step into a smart home.",
    specs: ["Wi-Fi enabled", "App & voice control compatible", "Compact design"],
    availability: "Available — subject to confirmation",
    featured: false,
    deal: false,
    badge: null
  }
];

/* Category metadata used for the "Shop by Category" section and filters */
const CATEGORIES = [
  { id: "smartphones",    label: "Smartphones" },
  { id: "laptops",        label: "Laptops & Computers" },
  { id: "tablets",        label: "Tablets" },
  { id: "tvs",            label: "TVs & Displays" },
  { id: "audio",          label: "Audio" },
  { id: "accessories",    label: "Accessories" },
  { id: "smart-devices",  label: "Smart Devices" },
  { id: "gaming",         label: "Gaming" },
  { id: "electronics",    label: "Electronics" }
];

/* ---------------------------------------------------------------------
   Helpers
   --------------------------------------------------------------------- */
function formatZMW(amount) {
  return "ZMW " + Number(amount).toLocaleString("en-US");
}

function getProductById(id) {
  return PRODUCTS.find(function (p) { return p.id === id; });
}

function getFeaturedProducts() {
  return PRODUCTS.filter(function (p) { return p.featured; });
}

function getDealProducts() {
  return PRODUCTS.filter(function (p) { return p.deal && p.oldPrice; });
}

function getProductsByCategory(categoryId) {
  return PRODUCTS.filter(function (p) { return p.category === categoryId; });
}

function categoryLabel(categoryId) {
  const c = CATEGORIES.find(function (c) { return c.id === categoryId; });
  return c ? c.label : categoryId;
}

/**
 * Builds a wa.me URL with a pre-filled structured enquiry message.
 * @param {Object} opts - { product, price, name, phone, location, fulfilment, message }
 */
function buildWhatsAppLink(opts) {
  opts = opts || {};
  const lines = [
    "Hello Cyber-IT Electronics,",
    "",
    "I would like to enquire about the following product:",
    "",
    "Product: " + (opts.product || "N/A"),
    "Price shown: " + (opts.price || "N/A")
  ];

  if (opts.name || opts.phone || opts.location || opts.fulfilment || opts.message) {
    lines.push("");
    if (opts.name) lines.push("Name: " + opts.name);
    if (opts.phone) lines.push("Phone: " + opts.phone);
    if (opts.location) lines.push("Location: " + opts.location);
    if (opts.fulfilment) lines.push("Pickup or Delivery: " + opts.fulfilment);
    if (opts.message) {
      lines.push("");
      lines.push("Additional message:");
      lines.push(opts.message);
    }
  }

  lines.push("");
  lines.push("Please confirm availability and the current price.");
  lines.push("");
  lines.push("Thank you.");

  const text = encodeURIComponent(lines.join("\n"));
  return "https://wa.me/" + CYBERIT_WHATSAPP_NUMBER + "?text=" + text;
}

function buildGeneralWhatsAppLink(message) {
  const text = encodeURIComponent(message || "Hello Cyber-IT Electronics, I'd like to ask about your products.");
  return "https://wa.me/" + CYBERIT_WHATSAPP_NUMBER + "?text=" + text;
}

/**
 * Shared product card markup used on Home, Shop and Deals pages.
 */
function renderProductCard(p) {
  const discount = p.oldPrice ? Math.round(100 - (p.price / p.oldPrice) * 100) : null;
  const oldPriceHTML = p.oldPrice ? '<span class="product-card__old-price">' + formatZMW(p.oldPrice) + "</span>" : "";
  const discountHTML = discount ? '<span class="product-card__discount">-' + discount + "%</span>" : "";
  const badgeHTML = p.badge ? '<span class="product-card__badge">' + p.badge + "</span>" : "";
  const demoTag = p.demoImage ? '<span class="demo-tag">Demo image</span>' : "";
  const waLink = buildWhatsAppLink({ product: p.name, price: formatZMW(p.price) });

  return (
    '<div class="product-card reveal">' +
    '<a class="product-card__media" href="product.html?id=' + p.id + '">' +
    badgeHTML + discountHTML +
    '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
    "</a>" +
    '<div class="product-card__body">' +
    '<span class="product-card__cat">' + categoryLabel(p.category) + "</span>" +
    '<h3 class="product-card__name"><a href="product.html?id=' + p.id + '">' + p.name + "</a></h3>" +
    '<p class="product-card__desc">' + p.shortDescription + "</p>" +
    demoTag +
    '<div class="product-card__price-row">' +
    '<span class="product-card__price">' + formatZMW(p.price) + "</span>" + oldPriceHTML +
    "</div>" +
    '<span class="product-card__avail">' + p.availability + "</span>" +
    '<div class="product-card__actions">' +
    '<a class="btn btn--ghost" href="product.html?id=' + p.id + '">View Details</a>' +
    '<a class="btn btn--whatsapp" href="' + waLink + '" target="_blank" rel="noopener">Order</a>' +
    "</div></div></div>"
  );
}
