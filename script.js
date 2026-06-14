// Import translations
import { translations } from "./translations.js";

// Load language preference
let currentLang = localStorage.getItem('lang') || 'en';
const englishButton = document.getElementById('englishSelect');
const germanButton = document.getElementById('germanSelect');

// Load 'active' class
function updateLangSelection() {
  englishButton.classList.remove('active');
  germanButton.classList.remove('active');

  if (currentLang === 'en') {
    englishButton.classList.add('active')
  } else if (currentLang === 'de') {
    germanButton.classList.add('active')
  }
}

// Translate helper
function translate(key) {
  return translations[currentLang][key] || key;
}

// Update all texts
function updateTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = translate(el.dataset.i18n);
  });
}

// Change language
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  updateTexts();
}

// Language selection buttons
englishButton.addEventListener('click', () => {
  changeLanguage('en');
  updateLangSelection();
});

germanButton.addEventListener('click', () => {
  changeLanguage('de');
  updateLangSelection();
});

updateLangSelection();
updateTexts();