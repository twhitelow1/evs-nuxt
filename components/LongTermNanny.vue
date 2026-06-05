<template>
  <div class="long-term-nanny">
    <section id="long-term-nanny" class="color-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-5">
            <img src="/img/messy-cute-baby.webp" loading="lazy" alt="Cute Baby" class="img-responsive center-block">
          </div>
          <div class="col-md-12 p-5 col-lg-7 nanny-placement-content">
            <EditableContent
              content-key="long-term-nanny.body"
              label="Long Term Nanny Placement"
              :fallback="fallback"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const fallback = `<h3 class="text-center">Long Term Nanny Placement</h3>
<h5 class="text-left">We refer some of the best nannies and sitters in Colorado</h5>
<p>Each Eagle Valley Sitters candidate must pass our multi-step screening process which includes:</p>
<ul>
  <li>Resume Check that verifies previous childcare experience of at least 2 years</li>
  <li>Series of in-depth interviews</li>
  <li>Social media screen</li>
  <li>Background check and Reference check *we use an FCRA compliant screening and require a minimum of 2 professional references</li>
  <li>Pediatric CPR certification verification</li>
</ul>
<h5 class="text-left">Client satisfaction is our top priority.</h5>
<p>After a thorough consultation with one of our team members, we start a uniquely tailored search based on your family's needs.</p>
<p>We broadcast to a wide network both within our pool of sitters, and through outer-agency channels.</p>
<p>Eagle Valley Sitters offers a 1 month free replacement period to ensure a perfect fit.</p>
<p>We also offer backup care options in the event your nanny is sick or unable to work*</p>
<p><em>*Subject to availability</em></p>`
</script>

<style scoped>
.nanny-placement-content {
  padding-top: 1em !important;
  padding: 4em;
}
@media screen and (max-width: 768px) {
  .nanny-placement-content { padding: 2em; font-size: 1em; }
}
</style>
