<template>
  <div class="Pets">
    <section id="pets" class="color-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-7 text-center">
            <EditableContent
              content-key="pets.body"
              label="Pet Care Services"
              :fallback="fallback"
            />
          </div>
          <div class="col-md-12 col-lg-5">
            <img src="/img/petsitting.webp" alt="petsitting" class="img-responsive center-block">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const fallback = `<h3 class="text-center">Pet Care Services</h3><p>Eagle Valley Sitters is now offering pet sitting services in Eagle and Summit Counties. Hourly pet sitting, overnight pet sitting, drop-in care and dog walks are all available to book. Let us provide your pets with quality care and loving companionship in the comfort of your own home (or hotel)!</p>`
</script>

<style></style>
