// catalog.js — Dynamic product loading and filtering

const productGrid = document.getElementById('product-grid');
const filterCheckboxes = document.querySelectorAll('input[name="category"]');

let products = [];
let currentLang = document.documentElement.lang || 'en';

async function loadProducts() {
  const res = await fetch('products.json');
  products = await res.json();
  renderProducts(products);
}

function renderProducts(productList) {
  if (!productGrid) return;
  productGrid.innerHTML = productList.map(product => `
    <article class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
      <a href="product.html" aria-label="View ${product.name[currentLang]} - ${product.price} ${product.currency}">
        <div class="h-72 overflow-hidden">
          <img src="${product.image}" alt="${product.alt[currentLang]}" width="400" height="480" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="p-4">
          <h2 class="font-serif text-lg text-stone-900">${product.name[currentLang]}</h2>
          <p class="mt-1 text-sm text-stone-600">${product.desc[currentLang]}</p>
          <p class="mt-2 text-amber-700 font-semibold">${product.price} ${product.currency}</p>
        </div>
      </a>
    </article>
  `).join('');
  // Re-apply i18n if available
  if (window.applyTextTranslations) window.applyTextTranslations();
}

function getSelectedCategories() {
  return Array.from(filterCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);
}

function filterProducts() {
  const selected = getSelectedCategories();
  if (selected.length === 0) {
    renderProducts(products);
  } else {
    renderProducts(products.filter(p => selected.includes(p.category)));
  }
}

filterCheckboxes.forEach(cb => cb.addEventListener('change', filterProducts));

// Listen for language changes (i18n.js should dispatch a custom event)
document.addEventListener('i18n:languageChanged', e => {
  currentLang = e.detail.lang;
  renderProducts(products);
});

loadProducts();
