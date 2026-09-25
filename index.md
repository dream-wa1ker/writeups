---
layout: page
permalink: /
nav_id: posts
title: Blog
prompt: ls -t writeups/
bar_label: WRITEUPS(1)
page_title: NAME
tagline: "writeups - reverse engineering, exploitation and protocols, written by hand"
description: >-
  Hand-written writeups: reverse engineering, exploitation and protocols, and random learning process that I feel nice to share.
---
<section>
  <h2 class="section-label">Entries</h2>
  <div class="toolbar">
    <span>{{ site.posts.size }} posts</span>
    <button type="button" id="sort-toggle" aria-pressed="false">sort: newest first</button>
  </div>
  <div class="log-list" id="post-list">
  {% for post in site.posts %}
    <article class="log-entry">
      <span class="log-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <a class="log-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="log-tagline">{{ post.description | strip_newlines | truncate: 220 }}</span>
      <span class="tag-list">{% for tag in post.tags %}<a class="tag-chip" href="{{ '/tags/' | relative_url }}#{{ tag | slugify }}">{{ tag }}</a>{% endfor %}</span>
    </article>
  {% endfor %}
  </div>
</section>
