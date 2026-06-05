<template>
  <div class="Services">
    <!-- Section Services -->
    <section id="services" class="color-section">
      <div class="container">
        <div class="col-lg-8 col-lg-offset-2">
          <div class="section-heading">
            <EditableContent
              content-key="services.heading"
              label="Services Heading"
              :fallback="'<h2>Our Services</h2>'"
            />
          </div>
        </div>
        <div class="row">
          <!-- main text -->
          <div class="col-md-12 col-lg-7 text-center">
            <EditableContent
              content-key="services.body"
              label="Services Body Text"
              :fallback="servicesFallback"
            />
          </div>
          <!-- /col-sm-12-->
          <div class="col-md-12 col-lg-5">
            <img src="/img/kidsitting.webp" alt="" loading="lazy" class="img-responsive center-block">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const servicesFallback = `<h3 class="text-center">Professional, Safe, and Reliable Childcare.</h3>
<p>Eagle Valley Sitters offers short term babysitter placement services in the Vail Valley and Summit County, Colorado. We provide fun, dynamic childcare with the most qualified and experienced sitters in the Rocky Mountains. All of our babysitters are CPR certified. Each sitter is put through an extensive hiring process consisting of background checks, reference checks, previous employment verification, and in-depth interviews. For general questions and availability inquiries, please email <a href="mailto:cat@eaglevalleysitters.com">cat@eaglevalleysitters.com</a>.</p>`
</script>

<style>
</style>
