// theme toggle (initial theme is set by theme-init.js; icons swap via CSS)
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  var root = document.documentElement;
  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (next === 'light') root.setAttribute('data-theme', 'light'); else root.removeAttribute('data-theme');
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// mobile nav
(function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  var overlay = document.getElementById('nav-overlay');
  if (!toggle || !nav || !overlay) return;
  function set(open) {
    nav.classList.toggle('is-open', open);
    overlay.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () { set(!nav.classList.contains('is-open')); });
  overlay.addEventListener('click', function () { set(false); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
})();

// footer date
(function () {
  var el = document.getElementById('colophon-date');
  if (el) el.textContent = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
})();

// code blocks: language label + copy button (built with DOM calls, no innerHTML)
(function () {
  document.querySelectorAll('.highlighter-rouge').forEach(function (block) {
    var code = block.querySelector('pre.highlight code, pre.highlight');
    if (!code || block.dataset.wrapped) return;
    block.dataset.wrapped = '1';
    var lang = Array.from(block.classList).find(function (c) { return c.indexOf('language-') === 0; });
    var header = document.createElement('div');
    header.className = 'code-block-header';
    var label = document.createElement('span');
    label.textContent = lang ? lang.replace('language-', '') : 'code';
    var btn = document.createElement('button');
    btn.className = 'code-copy';
    btn.type = 'button';
    btn.textContent = 'copy';
    header.appendChild(label);
    header.appendChild(btn);
    block.insertBefore(header, block.firstChild);
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(code.textContent).then(function () {
        btn.textContent = 'copied';
        btn.classList.add('copied');
        setTimeout(function () { btn.textContent = 'copy'; btn.classList.remove('copied'); }, 1500);
      });
    });
  });
})();

// blog index: newest/oldest toggle (the list is rendered newest first)
(function () {
  var btn = document.getElementById('sort-toggle');
  var list = document.getElementById('post-list');
  if (!btn || !list) return;
  var newest = true;
  btn.addEventListener('click', function () {
    newest = !newest;
    Array.from(list.children).reverse().forEach(function (el) { list.appendChild(el); });
    btn.textContent = newest ? 'sort: newest first' : 'sort: oldest first';
    btn.setAttribute('aria-pressed', newest ? 'false' : 'true');
  });
})();

// tags page: /tags/#slug shows only that tag; no hash shows all (and everything works without JS)
(function () {
  var groups = document.querySelectorAll('.tag-group');
  if (!groups.length) return;
  var chips = document.querySelectorAll('.tag-chip[data-tag]');
  var clear = document.getElementById('tag-clear');
  function apply() {
    var h = decodeURIComponent(location.hash.slice(1));
    groups.forEach(function (g) { g.hidden = !!h && g.id !== h; });
    chips.forEach(function (c) { c.classList.toggle('is-active', c.dataset.tag === h); });
    if (clear) clear.hidden = !h;
  }
  apply();
  window.addEventListener('hashchange', apply);
})();
