
<template>
   <div class="home">
      <!-- Page width 'Boxed' of 'Full' -->


      <slider >
      </slider>
   
      <services></services>
      <EventBabysitting></EventBabysitting>
      <pets></pets>
      <LongTermNanny></LongTermNanny>
      <rates></rates>
      <callout></callout>
      <about></about>
      <!---->
      <!-- <team></team> -->


      <!-- Section Call to Action -->
      <section id="call-to-action" class="small-section">

         <div class="container text-center">
            <div class="col-lg-6 col-lg-offset-6 col-sm-6">
               <div class="well">
                  <!-- Section heading -->
                  <h3>We're Hiring!</h3>
                  <p>Are you an experienced babysitter or childcare professional looking to join our team?<br />Click the
                     button below to apply.</p>
                  <!-- Button -->
                  <div class="page-scroll">
                     <a class="btn" href="https://eaglevalleysitters.enginehire.io/application-form/195/4175">Apply
                        Today</a>
                  </div>
                  <!--/page-scroll -->
               </div>
               <!--/well -->
            </div>
            <!--/col-lg-6 -->
         </div>
         <!-- /container-->
      </section>
      <!-- Section ends -->
      <!-- Parallax object -->
      <ClientOnly>
         <div class="parallax-object3 hidden-sm hidden-xs" data-0="opacity:1;" data-100="transform:translatex(0%);"
            data-center-center="transform:translatex(380%);">
            <!-- Image -->
            <img src="/img/parallaxobject3.png" alt="">
         </div>
         <!-- Parallax object -->
         <div class="parallax-object1 hidden-sm hidden-xs" data-0="opacity:1;" data-100="transform:translatey(40%);"
            data-center-center="transform:translatey(-180%);">
            <!-- Image -->
            <img src="/img/parallaxobject1.png" alt="">
         </div>
      </ClientOnly>
      <activities></activities>
      <!-- Parallax object -->
      <!-- <div class="parallax-object2 hidden-sm hidden-xs" data-0="opacity:1;"
         data-start="margin-top:40%"
         data-100="transform:translatey(0%);"
         data-center-center="transform:translatey(-180%);"> -->
      <!-- Image -->
      <!-- <img src="/img/parallaxobject2.png" alt="">
      </div> -->
      <!-- Section Contact -->
      <section id="contact" class="color-section">
         <!-- svg triangle shape -->
         <svg id="triangleShadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
            viewBox="0 0 100 100" preserveAspectRatio="none">
            <path class="trianglePath1" d="M0 0 L50 100 L100 0 Z" />
         </svg>
         <div class="container">
            <div class="col-lg-8 col-lg-offset-2">
               <!-- Section heading -->
               <div class="section-heading">
                  <h2>Contact us</h2>
               </div>
            </div>
            <!-- Contact -->
            <div class="col-lg-12 text-center">
               <h4>Information</h4>
               <!-- contact info -->
               <div class="contact-info">
                  <p><i class="flaticon-back"></i><a
                        href="mailto:cat@eaglevalleysitters.com">cat@eaglevalleysitters.com</a></p><br />
                  <p><i class="fa fa-phone margin-icon"></i>Call or Text us at <a href="tel:19703419701">(970) 341-9701</a>
                  </p><br />
                  <p>Please note that we do not currently employ a receptionist.</p>
                  <p>If your call is not answered, kindly email us or leave a voicemail and we will get back to you as soon
                     as possible. </p>
                  <p>To book a sitter, book online <a
                        href="https://eaglevalleysitters.enginehire.io/application-form/195/4186">here</a> and fill out our
                     client registration form</p><br />
                  <p>First review our <a href="/faq">Frequently Asked Questions</a>.</p>
                  <p>If your questions aren't answered there, simply type your message below.</p>
                  <ContactForm></ContactForm>
               </div>
               <!-- address info -->
               <!-- Map -->
               <!-- <div id="map-canvas"></div> -->
            </div>
         </div>
         <!-- /container-->
      </section>
      <!--Section ends -->


   </div>
</template>

<style></style>

<script setup >
import Callout from "../components/Callout.vue";
import Services from "../components/Services.vue";
import Slider from "../components/Slider.vue";
import About from "../components/About.vue";
import Team from "../components/Team.vue";
import Activities from "../components/Activities.vue";
import Rates from "../components/Rates.vue";
import ContactForm from "../components/ContactForm.vue";
import Pets from "../components/Pets.vue";
import EventBabysitting from "../components/EventBabysitting.vue";
import LongTermNanny from "../components/LongTermNanny.vue";

</script>

