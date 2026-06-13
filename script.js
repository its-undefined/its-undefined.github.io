// Import translations
import { translations } from "./translations.js";

let currentLang = localStorage.getItem('lang') || 'en';

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
  const englishButton = document.getElementById('englishSelect');
  const germanButton = document.getElementById('germanSelect');

  currentLang = lang;
  localStorage.setItem('lang', lang);

  englishButton.classList.remove('active');
  germanButton.classList.remove('active');

  if (lang === 'en') {
    englishButton.classList.add('active')
  } else if (lang === 'de') {
    germanButton.classList.add('active')
  }

  updateTexts();
}

// Language selection buttons
document.getElementById('englishSelect').addEventListener('click', () => {
  changeLanguage("en");
});

document.getElementById('germanSelect').addEventListener('click', () => {
  changeLanguage("de");
});

updateTexts();

// Set current language radio button as checked
// document.querySelector(`input[value="${currentLang}"]`).checked = true;