(function () {
  const STORAGE_KEY = "ml-language";
  const DEFAULT_LANG = "en";

  const translations = {
    en: {
      // Catalog products
      "catalog.product1.name": "Linen Dress",
      "catalog.product1.desc": "Lightweight summer dress in natural linen.",
      "catalog.product1.price": "120 EUR",
      "catalog.product1.ariaLabel": "View Linen Dress - 120 EUR",
      "catalog.product1.imgAlt": "Linen Dress",
      "catalog.product2.name": "Wool Coat",
      "catalog.product2.desc": "Classic tailored coat in premium wool.",
      "catalog.product2.price": "250 EUR",
      "catalog.product2.ariaLabel": "View Wool Coat - 250 EUR",
      "catalog.product2.imgAlt": "Wool Coat",
      "catalog.product3.name": "Silk Shirt",
      "catalog.product3.desc": "Elegant shirt crafted from pure silk.",
      "catalog.product3.price": "90 EUR",
      "catalog.product3.ariaLabel": "View Silk Shirt - 90 EUR",
      "catalog.product3.imgAlt": "Silk Shirt",
      "catalog.product4.name": "Cotton Trousers",
      "catalog.product4.desc": "Comfortable trousers in soft cotton twill.",
      "catalog.product4.price": "80 EUR",
      "catalog.product4.ariaLabel": "View Cotton Trousers - 80 EUR",
      "catalog.product4.imgAlt": "Cotton Trousers",
      "catalog.product5.name": "Leather Bag",
      "catalog.product5.desc": "Handcrafted leather bag with gold hardware.",
      "catalog.product5.price": "180 EUR",
      "catalog.product5.ariaLabel": "View Leather Bag - 180 EUR",
      "catalog.product5.imgAlt": "Leather Bag",
      "catalog.product6.name": "Cashmere Scarf",
      "catalog.product6.desc": "Soft cashmere scarf for all seasons.",
      "catalog.product6.price": "60 EUR",
      "catalog.product6.ariaLabel": "View Cashmere Scarf - 60 EUR",
      "catalog.product6.imgAlt": "Cashmere Scarf",
      "catalog.product7.name": "Suede Boots",
      "catalog.product7.desc": "Ankle boots in soft brown suede.",
      "catalog.product7.price": "140 EUR",
      "catalog.product7.ariaLabel": "View Suede Boots - 140 EUR",
      "catalog.product7.imgAlt": "Suede Boots",
      "catalog.product8.name": "Straw Hat",
      "catalog.product8.desc": "Wide-brimmed straw hat for sunny days.",
      "catalog.product8.price": "40 EUR",
      "catalog.product8.ariaLabel": "View Straw Hat - 40 EUR",
      "catalog.product8.imgAlt": "Straw Hat",
      // Catalog page
      "breadcrumb.home": "Home",
      "breadcrumb.catalog": "Catalog",
      "catalog.heading": "Catalog",
      "catalog.subheading": "Discover curated essentials crafted in premium fabrics.",
      "catalog.filters": "Filters",
      "catalog.category": "Category",
      "catalog.dresses": "Dresses",
      "catalog.tops": "Tops",
      "catalog.productName": "Product Name",
      "catalog.productDescription": "Description",
      "catalog.productPrice": "100 EUR",
      "catalog.productAriaLabel": "View Product Name - 100 EUR",
      "catalog.productImgAlt": "Product description",
      "skip.main": "Skip to main content",

      "nav.home": "Home",
      "nav.catalog": "Catalog",
      "nav.product": "Product",
      "nav.cart": "Cart",
      "nav.checkout": "Checkout",
      "nav.cartCount": "Cart (3)",
      "nav.selectLanguage": "Select language",
      "nav.switchFrench": "Switch to French",
      "nav.switchEnglish": "Switch to English",
      "nav.viewCart": "View cart - 3 items",
      "nav.openMenu": "Open menu",

      "footer.brandBlurb": "Parisian fashion at its finest. Capsule collections, premium materials, responsible manufacturing.",
      "footer.categories": "Categories",
      "footer.shoes": "Shoes",
      "footer.shirts": "Shirts",
      "footer.trousers": "Trousers",
      "footer.accessories": "Accessories",
      "footer.information": "Information",
      "footer.legalNotice": "Legal Notice",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms & Conditions",
      "footer.about": "About the Brand",
      "footer.contact": "Contact",
      "footer.copyright": "© 2026 Maison Lumiere. All rights reserved.",
      "footer.payment": "Secure payment - Visa · Mastercard · PayPal"
    },
    fr: {
      // Catalog products
      "catalog.product1.name": "Robe en lin",
      "catalog.product1.desc": "Robe d'été légère en lin naturel.",
      "catalog.product1.price": "120 EUR",
      "catalog.product1.ariaLabel": "Voir Robe en lin - 120 EUR",
      "catalog.product1.imgAlt": "Robe en lin",
      "catalog.product2.name": "Manteau en laine",
      "catalog.product2.desc": "Manteau classique en laine de qualité.",
      "catalog.product2.price": "250 EUR",
      "catalog.product2.ariaLabel": "Voir Manteau en laine - 250 EUR",
      "catalog.product2.imgAlt": "Manteau en laine",
      "catalog.product3.name": "Chemise en soie",
      "catalog.product3.desc": "Chemise élégante en pure soie.",
      "catalog.product3.price": "90 EUR",
      "catalog.product3.ariaLabel": "Voir Chemise en soie - 90 EUR",
      "catalog.product3.imgAlt": "Chemise en soie",
      "catalog.product4.name": "Pantalon en coton",
      "catalog.product4.desc": "Pantalon confortable en coton doux.",
      "catalog.product4.price": "80 EUR",
      "catalog.product4.ariaLabel": "Voir Pantalon en coton - 80 EUR",
      "catalog.product4.imgAlt": "Pantalon en coton",
      "catalog.product5.name": "Sac en cuir",
      "catalog.product5.desc": "Sac en cuir fait main avec finitions dorées.",
      "catalog.product5.price": "180 EUR",
      "catalog.product5.ariaLabel": "Voir Sac en cuir - 180 EUR",
      "catalog.product5.imgAlt": "Sac en cuir",
      "catalog.product6.name": "Écharpe en cachemire",
      "catalog.product6.desc": "Écharpe douce en cachemire pour toutes saisons.",
      "catalog.product6.price": "60 EUR",
      "catalog.product6.ariaLabel": "Voir Écharpe en cachemire - 60 EUR",
      "catalog.product6.imgAlt": "Écharpe en cachemire",
      "catalog.product7.name": "Bottines en suède",
      "catalog.product7.desc": "Bottines en suède marron doux.",
      "catalog.product7.price": "140 EUR",
      "catalog.product7.ariaLabel": "Voir Bottines en suède - 140 EUR",
      "catalog.product7.imgAlt": "Bottines en suède",
      "catalog.product8.name": "Chapeau de paille",
      "catalog.product8.desc": "Chapeau de paille à large bord pour les journées ensoleillées.",
      "catalog.product8.price": "40 EUR",
      "catalog.product8.ariaLabel": "Voir Chapeau de paille - 40 EUR",
      "catalog.product8.imgAlt": "Chapeau de paille",
      // Catalog page
      "breadcrumb.home": "Accueil",
      "breadcrumb.catalog": "Catalogue",
      "catalog.heading": "Catalogue",
      "catalog.subheading": "Découvrez des essentiels sélectionnés, confectionnés dans des tissus haut de gamme.",
      "catalog.filters": "Filtres",
      "catalog.category": "Catégorie",
      "catalog.dresses": "Robes",
      "catalog.tops": "Hauts",
      "catalog.productName": "Nom du produit",
      "catalog.productDescription": "Description",
      "catalog.productPrice": "100 EUR",
      "catalog.productAriaLabel": "Voir Nom du produit - 100 EUR",
      "catalog.productImgAlt": "Description du produit",
      "skip.main": "Aller au contenu principal",

      "nav.home": "Accueil",
      "nav.catalog": "Catalogue",
      "nav.product": "Produit",
      "nav.cart": "Panier",
      "nav.checkout": "Paiement",
      "nav.cartCount": "Panier (3)",
      "nav.selectLanguage": "Choisir la langue",
      "nav.switchFrench": "Passer en francais",
      "nav.switchEnglish": "Passer en anglais",
      "nav.viewCart": "Voir le panier - 3 articles",
      "nav.openMenu": "Ouvrir le menu",

      "footer.brandBlurb": "La mode parisienne a son apogee. Collections capsule, matieres premium et fabrication responsable.",
      "footer.categories": "Categories",
      "footer.shoes": "Chaussures",
      "footer.shirts": "Chemises",
      "footer.trousers": "Pantalons",
      "footer.accessories": "Accessoires",
      "footer.information": "Informations",
      "footer.legalNotice": "Mentions legales",
      "footer.privacy": "Politique de confidentialite",
      "footer.terms": "Conditions generales",
      "footer.about": "A propos de la marque",
      "footer.contact": "Contact",
      "footer.copyright": "© 2026 Maison Lumiere. Tous droits reserves.",
      "footer.payment": "Paiement securise - Visa · Mastercard · PayPal"
    }
  };

  function getSavedLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && translations[saved] ? saved : DEFAULT_LANG;
  }

  function setSavedLanguage(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function applyTextTranslations(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    const translatableNodes = document.querySelectorAll("[data-i18n]");

    translatableNodes.forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (!key || !dict[key]) {
        return;
      }
      node.textContent = dict[key];
    });

    const translatableAttrs = document.querySelectorAll("[data-i18n-attr]");
    translatableAttrs.forEach((node) => {
      const instruction = node.getAttribute("data-i18n-attr");
      if (!instruction) {
        return;
      }

      const parts = instruction.split(";").map((part) => part.trim()).filter(Boolean);
      parts.forEach((part) => {
        const [attrName, key] = part.split(":").map((item) => item.trim());
        if (!attrName || !key || !dict[key]) {
          return;
        }
        node.setAttribute(attrName, dict[key]);
      });
    });

    document.documentElement.setAttribute("lang", lang);
  }

  function updateLanguageToggleUI(lang) {
    const links = document.querySelectorAll("[data-lang]");

    links.forEach((link) => {
      const isActive = link.getAttribute("data-lang") === lang;

      link.setAttribute("aria-current", isActive ? "true" : "false");
      link.classList.toggle("text-amber-400", isActive);
      link.classList.toggle("text-stone-400", !isActive);

      if (isActive) {
        link.classList.remove("hover:text-amber-400");
      } else {
        link.classList.add("hover:text-amber-400");
      }
    });
  }

  function applyLanguage(lang) {
    const normalized = translations[lang] ? lang : DEFAULT_LANG;
    applyTextTranslations(normalized);
    updateLanguageToggleUI(normalized);
    setSavedLanguage(normalized);
  }

  function onLanguageClick(event) {
    const trigger = event.target.closest("[data-lang]");
    if (!trigger) {
      return;
    }

    event.preventDefault();
    const selectedLang = trigger.getAttribute("data-lang");
    applyLanguage(selectedLang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", onLanguageClick);
    applyLanguage(getSavedLanguage());
  });
})();
