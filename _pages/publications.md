---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 3
toc: false   # IMPORTANT: disable auto TOC
---

<!-- _pages/publications.md -->

<div class="row">

  <!-- LEFT SIDEBAR -->
  <div class="col-sm-1">
    <nav class="pub-year-toc">
      <a href="#2025">2025</a> <br>
      <a href="#2024">2024</a> <br>
      <a href="#2023">2023</a> <br>
      <a href="#2022">2022</a> <br>
      <a href="#2021">2021</a> <br>
      <a href="#2020">2020</a> <br>
      <a href="#2019">2019</a> <br>
      <a href="#2018">2018</a> <br>
      <a href="#2017">2017</a> <br>
      <a href="#2016">2016</a> <br>
      <a href="#2015">2015</a> <br>
      <a href="#2014">2014</a> <br>
    </nav>
  </div>

  <!-- MAIN CONTENT -->
  <div class="col-sm-11">
    {% include bib_search.liquid %}

    <div class="publications">
      {% bibliography %}
    </div>
  </div>

</div>
