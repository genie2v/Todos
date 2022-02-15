const checkbox = document.querySelector('.dark-mode');
const mode = document.querySelector('.mode-text');

const isUserColorTheme = localStorage.getItem('color-theme');
const isOsColorTheme = window.matchMedia('(prefers-color-scheme: Dark)').matches
  ? 'dark'
  : 'light';

if (!isUserColorTheme) localStorage.setItem('color-theme', isOsColorTheme);

window.onload = function () {
  if (localStorage.getItem('color-theme') === 'dark') {
    localStorage.setItem('color-theme', 'dark');
    document.documentElement.setAttribute('color-theme', 'dark');
    mode.innerHTML = '다크모드';
    checkbox.setAttribute('checked', true);
    // checkbox.checked = true;
  } else {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'light');
    mode.innerHTML = '라이트모드';
  }
};

checkbox.addEventListener('click', (e) => {
  if (e.target.checked) {
    localStorage.setItem('color-theme', 'dark');
    document.documentElement.setAttribute('color-theme', 'dark');
    mode.innerHTML = '다크모드';
  } else {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'light ');
    mode.innerHTML = '라이트모드';
  }
});
