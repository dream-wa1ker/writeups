// runs in <head> before first paint, so the page never flashes the wrong theme
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
  } catch (e) {}
})();
