<template>
  <div class="EventSittin">
    <section id="pets" class="color-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-5">
            <img src="/img/girl2.webp" loading="lazy" alt="Lil Girl Playing In Red Dress" class="img-responsive center-block">
          </div>
          <div class="col-md-12 col-lg-7 text-center">
            <EditableContent
              content-key="event-babysitting.body"
              label="Event Babysitting"
              :fallback="fallback"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const fallback = `<h3 class="text-center">Event Babysitting</h3><p>Eagle Valley Sitters is your expert babysitting solution for any event or wedding. We provide top quality, on-site childcare. Let us look after the little ones so you can have fun! Prices vary for event babysitting depending on the number of children, hours booked, and location of the event. Please contact us for more information on event babysitting.</p>`
</script>

<style></style>
