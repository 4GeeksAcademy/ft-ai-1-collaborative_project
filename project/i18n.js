(function () {
  const STORAGE_KEY = "ml-language";
  const DEFAULT_LANG = "en";

  let cachedI18nAttrNodes = null;
  let cachedLangLinks = null;

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

      "checkout.h1": "Finalize your order",
      "checkout.subtitle": "Complete your details to confirm your Maison Lumiere purchase.",
      "checkout.step1": "Step 1 - Personal details",
      "checkout.step2": "Step 2 - Shipping address",
      "checkout.step3": "Step 3 - Card payment",
      "checkout.label.fullName": "Full name",
      "checkout.label.email": "Email address",
      "checkout.label.phone": "Phone",
      "checkout.label.street": "Street address",
      "checkout.label.city": "City",
      "checkout.label.zip": "Postal code",
      "checkout.label.country": "Country",
      "checkout.label.cardholder": "Cardholder name",
      "checkout.label.cardNumber": "Card number",
      "checkout.label.expiry": "Expiry date",
      "checkout.label.cvv": "CVV",
      "checkout.placeholder.example": "Example",
      "checkout.summaryTitle": "Order summary",
      "checkout.subtotal": "Subtotal",
      "checkout.shipping": "Shipping",
      "checkout.tax": "Tax",
      "checkout.total": "Total",
      "checkout.payNow": "Pay now",
      "checkout.security": "Secure payment. Your data is encrypted and processed confidentially.",

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
      "footer.payment": "Secure payment - Visa · Mastercard · PayPal",

      "home.season": "Spring — Summer Collection",
      "home.tagline": "Parisian Fashion, Reimagined",
      "home.heroSubtitle": "Capsule collections for women and men. Premium materials, responsible craftsmanship, Parisian spirit.",
      "home.heroCta": "Discover the Collection",
      "home.arrivals": "New Arrivals",
      "home.viewAll": "View all →",
      "home.viewArrivals": "View all new arrivals",
      "home.sellers": "Best Sellers",
      "home.viewSellers": "View all best sellers",

      "home.card1Meta": "Ivory · XS S M L XL",
      "home.card2Meta": "Camel · XS S M L XL",
      "home.card3Meta": "Grey · 34 36 38 40 42",
      "home.card4Meta": "Off-white · XS S M L XL",
      "home.card5Meta": "Taupe · XS S M L XL",
      "home.card6Meta": "Bordeaux · XS S M L XL",
      "home.card7Meta": "Indigo · 34 36 38 40 42",
      "home.card8Meta": "Cream · XS S M L XL",

      "home.card1Name": "Ivory Crêpe Midi Dress",
      "home.card2Name": "Structured Camel Blazer",
      "home.card3Name": "Wide-Leg Flannel Trousers",
      "home.card4Name": "Off-White Linen Shirt",
      "home.card5Name": "Taupe Cashmere Coat",
      "home.card6Name": "Bordeaux Wrap Dress",
      "home.card7Name": "Straight Indigo Jeans",
      "home.card8Name": "Cream Merino Sweater",

      "product.name": "Ivory Crepe Midi Dress",
      "product.ref": "Ref:",
      "product.size": "Size",
      "product.quantity": "Quantity:",
      "product.addToCart": "Add to cart",
      "product.description": "Description",
      "product.desc1": "The Ivory Crepe Midi Dress (€189.00, ref. ML-DRS-001) is crafted from 100% crêpe fabric in France, fully lined, and finished with a concealed zip closure. Maison Lumiere applies Parisian tailoring references and responsible manufacturing controls to this tailored V-neck construction.",
      "product.desc2": "The garment is built with clean seam finishing and a structured waist line to support repeat wear across formal and occasion use.",
      "product.detail.fabric": "Fabric composition: 100% crêpe",
      "product.detail.lining": "Lining: fully lined interior",
      "product.detail.closure": "Closure type: concealed zip closure",
      "product.detail.care": "Care instructions: dry clean only",
      "product.detail.origin": "Country of origin: made in France",
      "product.related": "You may also like",
      "product.related1.name": "Satin Slip Dress",
      "product.related1.meta": "Champagne · XS-XL",
      "product.related1.ariaLabel": "View Satin Slip Dress — 165 €",
      "product.related2.name": "Linen Belted Dress",
      "product.related2.meta": "Sand · S-XL",
      "product.related2.ariaLabel": "View Linen Belted Dress — 172 €",
      "product.related3.name": "Tailored Evening Dress",
      "product.related3.meta": "Black · XS-L",
      "product.related3.ariaLabel": "View Tailored Evening Dress — 214 €",
      "breadcrumb.cart": "My Cart",
      "cart.heading": "My Cart",
      "cart.aria": "Cart items",
      "cart.product1.name": "Classic White Shirt",
      "cart.product1.details": "Size: M · Color: White",
      "cart.product1.alt": "Classic white shirt, size M, white",
      "cart.product1.price": "€49",
      "cart.product2.name": "Parisian Leather Loafers",
      "cart.product2.details": "Size: 42 · Color: Black",
      "cart.product2.alt": "Parisian leather loafers, size 42, black",
      "cart.product2.price": "€120",
      "cart.product3.name": "Wool Trousers",
      "cart.product3.details": "Size: 38 · Color: Grey",
      "cart.product3.alt": "Wool trousers, size 38, grey",
      "cart.product3.price": "€89",
      "cart.decrease": "Decrease quantity",
      "cart.increase": "Increase quantity",
      "cart.remove": "Remove",
      "cart.removeAria": "Remove item",
      "cart.summary": "Order Summary",
      "cart.subtotal": "Subtotal",
      "cart.shipping": "Shipping",
      "cart.tax": "Tax",
      "cart.total": "Total",
      "cart.purchase": "Purchase"
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

      "checkout.h1": "Finaliser la commande",
      "checkout.subtitle": "Completez vos informations pour confirmer votre achat Maison Lumiere.",
      "checkout.step1": "Etape 1 - Informations personnelles",
      "checkout.step2": "Etape 2 - Adresse de livraison",
      "checkout.step3": "Etape 3 - Paiement par carte",
      "checkout.label.fullName": "Nom complet",
      "checkout.label.email": "Adresse e-mail",
      "checkout.label.phone": "Telephone",
      "checkout.label.street": "Adresse (rue et numero)",
      "checkout.label.city": "Ville",
      "checkout.label.zip": "Code postal",
      "checkout.label.country": "Pays",
      "checkout.label.cardholder": "Nom du titulaire",
      "checkout.label.cardNumber": "Numero de carte",
      "checkout.label.expiry": "Date d'expiration",
      "checkout.label.cvv": "CVV",
      "checkout.placeholder.example": "Exemple",
      "checkout.summaryTitle": "Recapitulatif de commande",
      "checkout.subtotal": "Sous-total",
      "checkout.shipping": "Livraison",
      "checkout.tax": "Taxes",
      "checkout.total": "Total",
      "checkout.payNow": "Payer maintenant",
      "checkout.security": "Paiement securise. Vos donnees sont chiffrees et traitees de maniere confidentielle.",

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
      "footer.payment": "Paiement securise - Visa · Mastercard · PayPal",

      "home.season": "Collection Printemps — Été",
      "home.tagline": "La mode parisienne, réinventée",
      "home.heroSubtitle": "Collections capsule pour femmes et hommes. Matières nobles, savoir-faire responsable, esprit parisien.",
      "home.heroCta": "Découvrir la collection",
      "home.arrivals": "Nouvelles Arrivées",
      "home.viewAll": "Voir tout →",
      "home.viewArrivals": "Voir toutes les nouvelles arrivées",
      "home.sellers": "Meilleures Ventes",
      "home.viewSellers": "Voir tous les bestsellers",

      "home.card1Meta": "Ivoire · XS S M L XL",
      "home.card2Meta": "Camel · XS S M L XL",
      "home.card3Meta": "Gris · 34 36 38 40 42",
      "home.card4Meta": "Blanc cassé · XS S M L XL",
      "home.card5Meta": "Taupe · XS S M L XL",
      "home.card6Meta": "Bordeaux · XS S M L XL",
      "home.card7Meta": "Indigo · 34 36 38 40 42",
      "home.card8Meta": "Crème · XS S M L XL",

      "home.card1Name": "Robe Midi Crêpe Ivoire",
      "home.card2Name": "Blazer Structuré Camel",
      "home.card3Name": "Pantalon Large Flanelle",
      "home.card4Name": "Chemise Lin Blanc Cassé",
      "home.card5Name": "Manteau Cachemire Taupe",
      "home.card6Name": "Robe Portefeuille Bordeaux",
      "home.card7Name": "Jean Droit Indigo",
      "home.card8Name": "Pull Laine Mérinos Crème",

      "product.name": "Robe Midi Crêpe Ivoire",
      "product.ref": "Réf :",
      "product.size": "Taille",
      "product.quantity": "Quantité :",
      "product.addToCart": "Ajouter au panier",
      "product.description": "Description",
      "product.desc1": "La Robe Midi Crêpe Ivoire (189,00 €, réf. ML-DRS-001) est confectionnée en 100% crêpe en France, entièrement doublée et fermée par un zip invisible. Maison Lumière applique les références de la taille parisienne et des contrôles de fabrication responsable à cette construction col V ajusté.",
      "product.desc2": "Le vêtement est réalisé avec des finitions de couture soignées et une taille structurée pour soutenir un port répété en contexte formel et de cérémonie.",
      "product.detail.fabric": "Composition : 100% crêpe",
      "product.detail.lining": "Doublure : entièrement doublée",
      "product.detail.closure": "Fermeture : zip invisible",
      "product.detail.care": "Entretien : nettoyage à sec uniquement",
      "product.detail.origin": "Origine : fabriqué en France",
      "product.related": "Vous aimerez aussi",
      "product.related1.name": "Robe Nuisette en Satin",
      "product.related1.meta": "Champagne · XS-XL",
      "product.related1.ariaLabel": "Voir Robe Nuisette en Satin — 165 €",
      "product.related2.name": "Robe Ceinturée en Lin",
      "product.related2.meta": "Sable · S-XL",
      "product.related2.ariaLabel": "Voir Robe Ceinturée en Lin — 172 €",
      "product.related3.name": "Robe de Soirée Ajustée",
      "product.related3.meta": "Noir · XS-L",
      "product.related3.ariaLabel": "Voir Robe de Soirée Ajustée — 214 €",
      "breadcrumb.cart": "Mon Panier",
      "cart.heading": "Mon Panier",
      "cart.aria": "Articles dans le panier",
      "cart.product1.name": "Chemise blanche classique",
      "cart.product1.details": "Taille : M · Couleur : Blanc",
      "cart.product1.alt": "Chemise blanche classique, taille M, blanc",
      "cart.product1.price": "49 €",
      "cart.product2.name": "Mocassins en cuir parisiens",
      "cart.product2.details": "Taille : 42 · Couleur : Noir",
      "cart.product2.alt": "Mocassins en cuir parisiens, taille 42, noir",
      "cart.product2.price": "120 €",
      "cart.product3.name": "Pantalon en laine",
      "cart.product3.details": "Taille : 38 · Couleur : Gris",
      "cart.product3.alt": "Pantalon en laine, taille 38, gris",
      "cart.product3.price": "89 €",
      "cart.decrease": "Diminuer la quantité",
      "cart.increase": "Augmenter la quantité",
      "cart.remove": "Retirer",
      "cart.removeAria": "Retirer l'article",
      "cart.summary": "Résumé de la commande",
      "cart.subtotal": "Sous-total",
      "cart.shipping": "Livraison",
      "cart.tax": "Taxes",
      "cart.total": "Total",
      "cart.purchase": "Finaliser l'achat"
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

    if (!cachedI18nAttrNodes) cachedI18nAttrNodes = document.querySelectorAll("[data-i18n-attr]");
    const translatableAttrs = cachedI18nAttrNodes;
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
    if (!cachedLangLinks) cachedLangLinks = document.querySelectorAll("[data-lang]");
    const links = cachedLangLinks;

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
