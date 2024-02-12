<template>
  <div class="Team">
 <!-- Section Team -->
      <section id="team" class="color-section">
         <!-- svg triangle shape -->
         <svg class="triangleShadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path class="trianglePath1" d="M0 0 L50 100 L100 0 Z" />
         </svg>
         <div class="container">
            <div class="col-lg-8 col-lg-offset-2">
               <!-- Section heading -->
               <div class="section-heading">
                  <h2>Our Sitters</h2>
               </div>
            </div>
            <!-- Intro text -->
            <div class="row team">
               <!-- <div class="col-lg-5 col-md-5 res-margin"> -->
                  <!-- Intro image -->
                  <!-- <img src="/img/teammain.jpg" class="center-block img-responsive img-curved" alt=""/>
               </div>
               <div class="col-lg-7 col-md-7"> --->
                  <!-- <p>Ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac
                     sodales felis tiam non Doloreiur qui commolu ptatemp dolupta orem retibusam 
                     andigen Ibu lum orci eget, viverra elit aliquam erat volut pat phas ellus ac sodales felis tiam non metus.
                     Placerat a ultricies a, posuere a nibh fusce mollis imperdie tlorem ipuset campas fincas interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget usce mollis imperdiet interdum donec eget metus auguen unc vel lorem ispuet Ibu lum orci eget, viverra elit liquam erat volut pat phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id omnis.
                  </p>
               </div> -->
               <!-- <div class="col-lg-12 col-md-12 align-center res-margin">
                  <h3>Meet our Qualified Staff</h3>
               </div> -->
            </div>  
            <!-- Team Carousel-->
            <div id="owl-team" class="owl-carousel">
               
               <div class="col-lg-12">
                  <!-- member 1-->
                  <div class="team-item">
                     <img src="/img/team/cat-sitter.jpg" alt=""/>
                     <div class="team-caption">
                        <h5 class="text-light">Cat</h5>
                        <p>Founder/Sitter</p>
                     </div>
                  </div>
                  <v-card class="team-card">
                           <p>
                              “Hi! I’m Cat. I have over 6 years of experience working with children aged 3 months- 12 years. Most of the work that I do now is with infants and toddlers, but I’m experienced and enjoy working with all age groups! I’m skilled at designing engaging, age appropriate activities. I also offer ski babysitting and love doing outdoors stuff with kids! “
                           </p>
                  </v-card>
                  <!-- /team-item-->
               </div>
               <!-- col-lg-12-->
               <div class="col-lg-12">
                  <!-- member 2-->
                  <div class="team-item">
                     <img src="/img/team/han-sitter.jpg" alt=""/>
                     <div class="team-caption">
                        <h5 class="text-light">Hannah</h5>
                        <p>Sitter</p>
                     </div>
                  </div>
                  <v-card class="team-card">
                           <p>“Hi I’m Hannah!
                              Having years of experience with special needs and every other wonderful child I feel very comfortable and confident in caring for your little ones. 
                              Whether your child needs someone to teach them fun facts or just a friend to hangout while you enjoy the day I am here for you!”
                              </p>
                  </v-card>
                  <!-- /team-item-->
               </div>
               <!-- col-lg-12-->
               <div class="col-lg-12">
                  <!-- member 3-->
                  <div class="team-item">
                     <img src="/img/team/sel-sitter.png" alt=""/>
                     <div class="team-caption">
                        <h5 class="text-light">Selena</h5>
                        <p>Sitter</p>
                     </div>
                  </div>
                  <!-- Sitter Description -->
                  <v-card class="team-card">
                           <p>
                              “Hey! I’m Selena. I’ve always watched kids throughout my school years. Now I babysit along side my full time job as a nurse. I have experience working with sick kids in the hospital and I’m comfortable with kids of all ages.  “
                           </p>
                  </v-card>
                  <!-- /team-item-->
               </div>
               <!-- col-lg-12-->
               <div class="col-lg-12">
                  <!-- member 3-->
                  <div class="team-item">
                     <img src="/img/team/Ima-sitter.jpg" alt=""/>
                     <div class="team-caption">
                        <h5 class="text-light">Imali</h5>
                        <p>Sitter</p>
                     </div>
                  </div>
                  <!-- Sitter Description -->
                  <v-card class="team-card">
                           <p>
                              “My name is Imali! 

I taught gymnastics to children ages 4-8 for three years. I have been a babysitter for the past seven years and have babysat children from ages 6 months-12. 

I am also an American Red Cross certified lifeguard, which means I am certified in CPR and first aid.“
                           </p>
                  </v-card>
                  <!-- /team-item-->
               </div>
               <!-- col-lg-12-->
            </div>
            <!--/owl-team -->	
         </div>
         <!--/container -->
      </section>
      <!-- Section ends -->
      </div>
</template>

<style>
</style>

<script>
export default {
  data: function () {
    return {};
  },
  created: function () {},
  methods: {},
  mounted(){
   //Team Carousel

   $("#owl-team").owlCarousel({
      items: 4,
      dots: true,
      loop: true,
      margin: 20,
      autoplay: false,
      nav: true,
      navText: [
        "<i class='flaticon-arrows-1'></i>",
        "<i class='flaticon-arrows'></i>",
      ],
      responsive: {
        1: { items: 1 },
        550: { items: 2 },
        1000: { items: 3 },
        1200: { items: 4 },
      },
    });
  }
};
</script>