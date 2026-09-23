---
layout: page
permalink: /tags/
nav_id: tags
title: tags(1)
prompt: grep -r tags writeups/
bar_label: TAGS(1)
page_title: NAME
tagline: "tags - browse by topic"
description: >-
  Writeups grouped by tag.
---
{% assign all_tags = site.tags | sort %}
<section>
  <h2 class="section-label">Tags</h2>
  <div class="tag-list">
  {% for t in all_tags %}<a class="tag-chip" data-tag="{{ t[0] | slugify }}" href="#{{ t[0] | slugify }}">{{ t[0] }}<span class="n">{{ t[1].size }}</span></a>{% endfor %}
    <a class="tag-chip" id="tag-clear" href="{{ '/tags/' | relative_url }}" hidden>show all</a>
  </div>
</section>
{% for t in all_tags %}
<section class="tag-group" id="{{ t[0] | slugify }}">
  <h2 class="section-label">#{{ t[0] }}</h2>
  <div class="see-also">
    <ul>
    {% for post in t[1] %}
      <li><span class="label">{{ post.date | date: "%Y-%m-%d" }}</span><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
    {% endfor %}
    </ul>
  </div>
</section>
{% endfor %}
