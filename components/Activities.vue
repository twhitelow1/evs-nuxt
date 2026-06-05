<template>
  <div class="Activities">
    <section id="activities">
      <div class="container">
        <div class="section-heading">
          <EditableContent content-key="activities.heading" label="Activities Heading" :fallback="'<h2>Our Activities</h2>'" />
        </div>
        <ul class="nav nav-tabs" id="myTab">
          <li class="active"><a href="#tab1" data-toggle="tab">Hiking</a></li>
          <li><a href="#tab2" data-toggle="tab">Swimming</a></li>
          <li><a href="#tab3" data-toggle="tab">Gondola Rides</a></li>
          <li><a href="#tab4" data-toggle="tab">Playground</a></li>
        </ul>
        <div class="tabbable">
          <div class="tab-content col-md-12 col-centered">
            <div class="tab-pane active in fade" id="tab1">
              <div class="row">
                <div class="col-md-5 col-lg-5 pull-left">
                  <img src="/img/kidshiking.webp" alt="" class="img-responsive img-circle">
                </div>
                <div class="col-md-7 col-lg-7 pull-left">
                  <EditableContent content-key="activities.hiking" label="Hiking Tab" :fallback="hikingFallback" />
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="tab2">
              <div class="row">
                <div class="col-md-5 col-lg-5 pull-left">
                  <img src="/img/kidswimming.webp" alt="a little kid swimming" class="img-responsive img-circle">
                </div>
                <div class="col-md-7 col-lg-7 pull-left">
                  <EditableContent content-key="activities.swimming" label="Swimming Tab" :fallback="swimmingFallback" />
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="tab3">
              <div class="row">
                <div class="col-md-5 col-lg-5 pull-left">
                  <img src="/img/gondolaonesmall.webp" alt="Gondola one in vail colorado" loading="lazy" class="img-responsive img-circle">
                </div>
                <div class="col-md-7 col-lg-7 pull-left">
                  <EditableContent content-key="activities.gondola" label="Gondola Rides Tab" :fallback="gondolaFallback" />
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="tab4">
              <div class="row">
                <div class="col-md-5 col-lg-5 pull-left">
                  <img src="/img/boyonslide.webp" loading="lazy" alt="boy playing on slide" class="img-responsive img-circle">
                </div>
                <div class="col-md-7 col-lg-7 pull-left">
                  <EditableContent content-key="activities.playground" label="Playground Tab" :fallback="playgroundFallback" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const hikingFallback = `<h3>Hiking</h3><p>Eagle County is full of wonderful trails for hiking. Our sitters are local outdoor enthusiasts, and we love helping children get outside and get active! *This activity is only offered in the summer.</p><p><strong>Age Group:</strong> 6-12+</p><p><strong>When:</strong> June - October, weather permitting.</p>`
const swimmingFallback = `<h3>Swimming Supervision</h3><p>Sitters can supervise swimming at your residence, please note that your sitter may not be a certified lifeguard.</p><p><strong>Age Group:</strong> 2-12+</p><p><strong>When:</strong> Year Round</p>`
const gondolaFallback = `<h3>Gondola Rides</h3><p>Please be advised that you are responsible for your child's lift ticket fees, and the sitter's if they do not possess an epic pass. Kids 4 and under ride free.</p><p><strong>Age Group:</strong> All Ages</p><p><strong>When:</strong> Scenic Gondola Rides are only available in the summer season.</p>`
const playgroundFallback = `<h3>Playground</h3><p>The towns of Vail and Avon have many fun parks and playgrounds for children of all ages. Our sitters create dynamic, fun, and engaging activities to keep your child entertained. After all, your kids are on vacation too!</p><p><strong>Age Group:</strong> All Ages</p><p><strong>When:</strong> All Year</p>`
</script>

<style></style>
