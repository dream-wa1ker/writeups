// Client-side search over /search.json. Everything from the index or the URL is rendered with
// textContent / text nodes only, so a crafted ?q= value can never become markup (no DOM XSS).
(function () {
  var input = document.getElementById('q');
  var out = document.getElementById('results');
  var status = document.getElementById('search-status');
  if (!input || !out) return;
  var posts = null;

  function terms(q) { return q.toLowerCase().split(/\s+/).filter(Boolean).slice(0, 8); }

  function score(p, ts) {
    var t = p.t.toLowerCase(), g = p.g.join(' ').toLowerCase(), s = p.s.toLowerCase(), b = p.b.toLowerCase(), n = 0;
    for (var i = 0; i < ts.length; i++) {                      // every term must match somewhere (AND)
      var x = ts[i], hit = 0;
      if (t.indexOf(x) !== -1) hit += 10;
      if (g.indexOf(x) !== -1) hit += 6;
      if (s.indexOf(x) !== -1) hit += 3;
      if (b.indexOf(x) !== -1) hit += 1;
      if (!hit) return 0;
      n += hit;
    }
    return n;
  }

  function highlight(text, ts) {
    var frag = document.createDocumentFragment(), lower = text.toLowerCase(), i = 0;
    while (i < text.length) {
      var best = -1, len = 0;
      ts.forEach(function (t) { var k = lower.indexOf(t, i); if (k !== -1 && (best === -1 || k < best)) { best = k; len = t.length; } });
      if (best === -1) { frag.appendChild(document.createTextNode(text.slice(i))); break; }
      if (best > i) frag.appendChild(document.createTextNode(text.slice(i, best)));
      var m = document.createElement('mark');
      m.textContent = text.slice(best, best + len);
      frag.appendChild(m);
      i = best + len;
    }
    return frag;
  }

  function snippet(p, ts) {
    var k = p.b.toLowerCase().indexOf(ts[0]);
    if (k === -1) return p.s;
    var start = Math.max(0, k - 60);
    return (start > 0 ? '\u2026' : '') + p.b.slice(start, start + 180) + '\u2026';
  }

  function span(cls, text) { var e = document.createElement('span'); e.className = cls; e.textContent = text; return e; }

  function render(q) {
    out.textContent = '';
    var ts = terms(q);
    if (!ts.length) { out.hidden = true; status.textContent = ''; return; }
    var res = posts.map(function (p) { return { p: p, s: score(p, ts) }; })
      .filter(function (r) { return r.s > 0; })
      .sort(function (a, b) { return b.s - a.s || (a.p.d < b.p.d ? 1 : -1); });
    status.textContent = res.length + (res.length === 1 ? ' result' : ' results');
    out.hidden = res.length === 0;
    res.forEach(function (r) {
      var art = document.createElement('article');
      art.className = 'log-entry';
      var a = document.createElement('a');
      a.className = 'log-title';
      a.href = r.p.u;
      a.appendChild(highlight(r.p.t, ts));
      var snip = span('log-tagline', '');
      snip.appendChild(highlight(snippet(r.p, ts), ts));
      var tags = span('tag-list', '');
      r.p.g.forEach(function (g) { tags.appendChild(span('tag-chip', g)); });
      art.appendChild(span('log-date', r.p.d));
      art.appendChild(a);
      art.appendChild(snip);
      art.appendChild(tags);
      out.appendChild(art);
    });
  }

  function run() {
    var q = input.value.slice(0, 100);
    try { history.replaceState(null, '', q ? '?q=' + encodeURIComponent(q) : location.pathname); } catch (e) {}
    if (posts) render(q);
  }

  status.textContent = 'loading index\u2026';
  fetch(input.dataset.index).then(function (r) { return r.json(); }).then(function (data) {
    posts = data;
    status.textContent = '';
    input.addEventListener('input', run);
    var q = new URLSearchParams(location.search).get('q');
    if (q) input.value = q.slice(0, 100);
    render(input.value);
  }).catch(function () { status.textContent = 'could not load the search index'; });
  input.focus();
})();
