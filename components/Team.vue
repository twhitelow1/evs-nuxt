<template>
  <div class="Team">
    <section id="team" class="color-section">
      <svg class="triangleShadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path class="trianglePath1" d="M0 0 L50 100 L100 0 Z" />
      </svg>
      <div class="container">
        <div class="col-lg-8 col-lg-offset-2">
          <div class="section-heading">
            <EditableContent content-key="team.heading" label="Team Heading" :fallback="'<h2>Our Sitters</h2>'" />
          </div>
        </div>
        <div id="owl-team" class="owl-carousel">
          <div class="col-lg-12">
            <div class="team-item">
              <img src="/img/team/cat-sitter.jpg" alt=""/>
              <div class="team-caption"><h5 class="text-light">Cat</h5><p>Founder/Sitter</p></div>
            </div>
            <v-card class="team-card">
              <EditableContent content-key="team.cat" label="Cat Bio" :fallback="'<p>Hi! I\'m Cat. I have over 6 years of experience working with children aged 3 months- 12 years. Most of the work that I do now is with infants and toddlers, but I\'m experienced and enjoy working with all age groups! I\'m skilled at designing engaging, age appropriate activities. I also offer ski babysitting and love doing outdoors stuff with kids!</p>'" />
            </v-card>
          </div>
          <div class="col-lg-12">
            <div class="team-item">
              <img src="/img/team/han-sitter.jpg" alt=""/>
              <div class="team-caption"><h5 class="text-light">Hannah</h5><p>Sitter</p></div>
            </div>
            <v-card class="team-card">
              <EditableContent content-key="team.hannah" label="Hannah Bio" :fallback="'<p>Hi I\'m Hannah! Having years of experience with special needs and every other wonderful child I feel very comfortable and confident in caring for your little ones. Whether your child needs someone to teach them fun facts or just a friend to hangout while you enjoy the day I am here for you!</p>'" />
            </v-card>
          </div>
          <div class="col-lg-12">
            <div class="team-item">
              <img src="/img/team/sel-sitter.png" alt=""/>
              <div class="team-caption"><h5 class="text-light">Selena</h5><p>Sitter</p></div>
            </div>
            <v-card class="team-card">
              <EditableContent content-key="team.selena" label="Selena Bio" :fallback="'<p>Hey! I\'m Selena. I\'ve always watched kids throughout my school years. Now I babysit along side my full time job as a nurse. I have experience working with sick kids in the hospital and I\'m comfortable with kids of all ages.</p>'" />
            </v-card>
          </div>
          <div class="col-lg-12">
            <div class="team-item">
              <img src="/img/team/Ima-sitter.jpg" alt=""/>
              <div class="team-caption"><h5 class="text-light">Imali</h5><p>Sitter</p></div>
            </div>
            <v-card class="team-card">
              <EditableContent content-key="team.imali" label="Imali Bio" :fallback="'<p>My name is Imali! I taught gymnastics to children ages 4-8 for three years. I have been a babysitter for the past seven years and have babysat children from ages 6 months-12. I am also an American Red Cross certified lifeguard, which means I am certified in CPR and first aid.</p>'" />
            </v-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  ;(window as any).$?.('#owl-team').owlCarousel?.({
    items: 4, dots: true, loop: true, margin: 20, autoplay: false, nav: true,
    navText: ["<i class='flaticon-arrows-1'></i>", "<i class='flaticon-arrows'></i>"],
    responsive: { 1: { items: 1 }, 550: { items: 2 }, 1000: { items: 3 }, 1200: { items: 4 } },
  })
})
</script>

<style></style>
