<template>
  <div class="Callout">
    <section id="callout" class="small-section">
      <div class="hidden-xs">
        <div class="cloud x1"></div><div class="cloud x2"></div><div class="cloud x3"></div>
        <div class="cloud x4"></div><div class="cloud x5"></div><div class="cloud x6"></div>
        <div class="cloud x7"></div>
      </div>
      <div class="container">
        <div class="sun hidden-sm hidden-xs">
          <div class="sun-face">
            <div class="sun-hlight"></div><div class="sun-leye"></div><div class="sun-reye"></div>
            <div class="sun-lred"></div><div class="sun-rred"></div><div class="sun-smile"></div>
          </div>
          <div class="sun-anime">
            <div class="sun-ball"></div>
            <div class="sun-light"><b></b><s></s></div><div class="sun-light"><b></b><s></s></div>
            <div class="sun-light"><b></b><s></s></div><div class="sun-light"><b></b><s></s></div>
            <div class="sun-light"><b></b><s></s></div><div class="sun-light"><b></b><s></s></div>
            <div class="sun-light"><b></b><s></s></div><div class="sun-light"><b></b><s></s></div>
            <div class="sun-light"><b></b><s></s></div><div class="sun-light"><b></b><s></s></div>
            <div class="sun-light"><b></b><s></s></div><div class="sun-light"><b></b><s></s></div>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 text-center">
          <div class="well">
            <EditableContent
              content-key="callout.body"
              label="Callout / Book A Sitter"
              :fallback="calloutFallback"
            />
            <div class="page-scroll">
              <a class="btn" href="https://eaglevalleysitters.enginehire.io/application-form/195/4186">Book Today!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const calloutFallback = `<h3>Book A Sitter</h3><p>Let us find you the perfect babysitter to meet your needs during your stay. Sitters are available to book for daytime, evenings, holidays, and weekends. We are open year round.</p>`
</script>

<style></style>
