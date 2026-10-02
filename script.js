const languageButton = document.querySelector('#lang');
let language = 'ru';

function setLanguage(next) {
  language = next;
  document.documentElement.lang = language === 'ru' ? 'ru' : 'kk';
  document.querySelectorAll('[data-ru][data-kk]').forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  languageButton.textContent = language === 'ru' ? 'ҚАЗ' : 'РУС';
}

languageButton.addEventListener('click', () => setLanguage(language === 'ru' ? 'kk' : 'ru'));
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.header nav').classList.toggle('is-open');
});
document.querySelectorAll('.header nav a').forEach((link) => link.addEventListener('click', () => {
  document.querySelector('.header nav').classList.remove('is-open');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
