---
layout: page
permalink: /archive/
nav_id: archive
title: archive(1)
prompt: ls -lt writeups/
bar_label: ARCHIVE(1)
page_title: NAME
tagline: "archive - every writeup, grouped by year"
description: >-
  All writeups grouped by year, newest first.
---
{% assign by_year = site.posts | group_by_exp: "p", "p.date | date: '%Y'" %}
{% for year in by_year %}
<section>
  <h2 class="section-label">{{ year.name }} ({{ year.items.size }})</h2>
  <div class="see-also">
    <ul>
    {% for post in year.items %}
      <li><span class="label">{{ post.date | date: "%m-%d" }}</span><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
    {% endfor %}
    </ul>
  </div>
</section>
{% endfor %}
