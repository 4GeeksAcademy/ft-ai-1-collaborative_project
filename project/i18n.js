(function () {
  const STORAGE_KEY = "ml-language";
  const DEFAULT_LANG = "en";

  const translations = {
    en: {
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
