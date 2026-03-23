---
layout: single
title: "Jupyter Notebook Library"
permalink: /jupyter-library/
author_profile: true
---

## Jupyter Notebook Library

A collection of interactive notebooks.

<div class="notebook-grid">

{% raw %}
{% for nb in site.data.notebooks %}
  <div class="notebook-card">
    <h3>{{ nb.title }}</h3>
    <p>{{ nb.description }}</p>

    <button class="open-notebook"
            data-src="/assets/notebooks/{{ nb.file }}">
      Preview Notebook
    </button>

    <a href="/assets/notebooks/{{ nb.file }}" target="_blank">
      Open Full →
    </a>
  </div>
{% endfor %}
{% endraw %}

</div>

<!-- Modal -->
<div id="notebook-modal" class="notebook-modal">
  <div class="notebook-modal-content">
    <span class="close-modal">&times;</span>
    <iframe id="notebook-frame"></iframe>
  </div>
</div>
