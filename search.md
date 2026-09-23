---
layout: page
permalink: /search/
nav_id: search
title: search(1)
prompt: grep -ri "" writeups/
bar_label: SEARCH(1)
page_title: NAME
tagline: "search - runs entirely in your browser"
description: >-
  Search the writeups by title, tag, description and text.
---
<section>
  <h2 class="section-label">Query</h2>
  <div class="search-box">
    <input type="search" id="q" maxlength="100" autocomplete="off" spellcheck="false" placeholder="e.g. objdump, matrix, cve" aria-label="Search writeups" data-index="{{ '/search.json' | relative_url }}">
  </div>
  <p class="colophon" id="search-status" role="status"></p>
  <div class="log-list" id="results" hidden></div>
</section>
<noscript><p class="colophon">Search needs JavaScript. The <a href="{{ '/archive/' | relative_url }}">archive</a> and <a href="{{ '/tags/' | relative_url }}">tags</a> pages work without it.</p></noscript>
<script src="{{ '/js/search.js' | relative_url }}" defer></script>
