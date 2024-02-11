<template>
  <NuxtLayout>
    
    <div id="app">
      <!-- <div v-if="comingsoon === true">
      <v-container fluid style="background-color:#fff; height:100vh;">
        
            <div style="margin:auto"><img src="/img/EVSlogo.png" style="max-width: 500px; display:block; margin-left: auto; margin-right:auto;"></div>
          
         
            <H1 style="text-align:center; color:#66bfc7 !important;"> New Website Coming Soon</H1>
            <h3 style="text-align:center; color:#66bfc7 !important;" >Call (970) 341 - 9701 for booking inquiries</h3>
      </v-container>
    </div> -->
      <div class="full">
        <!-- Preloader -->
        <!-- <div id="preloader">
         <div class="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </div>	    -->
        <!-- Navbar -->
        <nav class="navbar navbar-custom navbar-fixed-top">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
              <i class="fa fa-bars"></i>
            </button>
            <div class="navbar-brand-centered page-scroll">
              <ClientOnly>
              <NuxtLink v-if="window.width > 990" :to="{ path: '/', hash: '#layerslider' }"><img
                  src="/img/EVSlogo.webp" alt="" /></NuxtLink>
              <NuxtLink v-if="window.width < 990" :to="{ path: '/', hash: '#layerslider' }"><img
                  src="/img/evs-logo-landscape.webp" alt="" /></NuxtLink>
                </ClientOnly>
            </div>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="navbar-brand-centered">
            <div class="container">
              <ul class="nav navbar-nav page-scroll navbar-left">
                <!-- <li><a href="#page-top">Home</a></li> -->
                <li>
                  <NuxtLink :to="{ path: '/', hash: '#layerslider' }"> Home</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ path: '/', hash: '#services' }"> Services</NuxtLink>
                </li>
                <!-- <li><a href="https://eaglevalleysitters.com/#services">Services</a></li> -->
                <li>
                  <NuxtLink :to="{ path: '/', hash: '#rates' }">Rates</NuxtLink>
                </li>
                <!-- <li><a href="#rates">Rates</a></li> -->
                <li><a href="https://eaglevalleysitters.enginehire.io/application-form/195/4186">Book</a></li>
              </ul>
              <ul class="nav navbar-nav page-scroll navbar-right">
                <li>
                  <NuxtLink :to="{ path: '/', hash: '#about' }">About</NuxtLink>
                </li>
                <!-- <li><a href="#about">About</a></li> -->
                <li><a href="https://eaglevalleysitters.enginehire.io/application-form/195/4175">Apply</a></li>
                <!-- <li><a href="#application">Apply</a></li>  -->
                <!-- Dropdown -->
                <!-- <li class="dropdown active">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Contact<b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li class="divider"></li>
                    <li class="active"><a href="#latestblog">Latest Posts</a></li>
                  </ul>
                </li> -->
                <li>
                  <NuxtLink :to="{ path: '/', hash: '#activities' }">Activities</NuxtLink>
                </li>
                <!-- <li><a href="#activities">Activities</a></li> -->
                <!-- <li><NuxtLink :to="{path: '/', hash:'#contact'}">Contact</NuxtLink></li> -->
                <!-- <li><a href="#contact">Contact</a></li> -->

                <!-- Dropdown -->
                <li class="dropdown">
                  <a href="" class="dropdown-toggle" data-toggle="dropdown">Contact<b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li>
                      <NuxtLink :to="{ path: '/', hash: '#contact' }">Contact Form</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="{ path: '/faq' }">FAQ</NuxtLink>
                    </li>
                    <li><a href="https://eaglevalleysitters.enginehire.io/login/195">Login</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!-- /.navbar-collapse -->
        </nav>
        <!-- /navbar ends -->
        <NuxtPage />
        <!-- Footer -->
        <div class="container-fluid cloud-divider">
          <!-- Clouds SVG Divider -->
          <svg id="deco-clouds" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
            viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M-5 100 Q 0 20 5 100 Z
               M0 100 Q 5 0 10 100
               M5 100 Q 10 30 15 100
               M10 100 Q 15 10 20 100
               M15 100 Q 20 30 25 100
               M20 100 Q 25 -10 30 100
               M25 100 Q 30 10 35 100
               M30 100 Q 35 30 40 100
               M35 100 Q 40 10 45 100
               M40 100 Q 45 50 50 100
               M45 100 Q 50 20 55 100
               M50 100 Q 55 40 60 100
               M55 100 Q 60 60 65 100
               M60 100 Q 65 50 70 100
               M65 100 Q 70 20 75 100
               M70 100 Q 75 45 80 100
               M75 100 Q 80 30 85 100
               M80 100 Q 85 20 90 100
               M85 100 Q 90 50 95 100
               M90 100 Q 95 25 100 100
               M95 100 Q 100 15 105 100 Z">
            </path>
          </svg>
        </div>
        <footer>
          <div class="container-fluid">
            <!-- Newsletter -->
            <div class="col-lg-4 col-md-6 text-center res-margin">

            </div>
            <!-- /col-lg-4 -->
            <!-- Bottom Credits -->
            <div class="col-lg-4 col-md-6 res-margin">
              <a href="#page-top"><img src="/img/EVSlogo.png" alt="" class="center-block"></a>
              <!-- social-icons -->
              <!-- <div class="social-media"> -->
              <!-- <a href="#" title=""><i class="fa fa-twitter"></i></a> -->
              <!-- <a href="#" title=""><i class="fa fa-facebook"></i></a> -->
              <!-- <a href="#" title=""><i class="fa fa-linkedin"></i></a> -->
              <!-- <a href="#" title=""><i class="fa fa-pinterest"></i></a> -->
              <!-- <a href="#" title=""><i class="fa fa-instagram"></i></a> -->
              <!-- </div> -->
            </div>
            <!-- /col-lg-4 -->
            <!-- Opening Hours -->
            <div class="col-lg-4 col-md-12 text-center">

            </div>
            <!-- /col-lg-4 -->
          </div>
          <!-- / container -->
          <hr>
          <p>Copyright © 2023 / <a href="https://dub-low.consulting">Web Developer</a>:  DubLow Consulting LLC</p>
          <p><a href="/privacy">Privacy Policy</a>.</p>
          <p><a href="https://eaglevalleysitters.enginehire.io/login/195">Account Login</a>
            -
            <a href="https://play.google.com/store/apps/details?id=com.ionic.eaglevalleysitters">Android App</a>
            -
            <a href="https://apps.apple.com/us/app/eagle-valley-sitters/id6451325057">Apple App</a>
          </p>
          <!-- /container -->
          <!-- Go To Top Link -->
          <div class="page-scroll hidden-sm hidden-xs">
            <a href="#page-top" class="back-to-top"><i class="fa fa-angle-up"></i></a>
          </div>
        </footer>
        <!-- /footer ends -->
      </div> <!-- /page width -->
    </div>
  </NuxtLayout>
</template>
<script>
export default {
  data: function () {
    return {
      window: {
        width: 0,
      },
      comingsoon: false,
    };
  },
  created() {
    if (process.client) {
    window.addEventListener("resize", this.handleResize);
    }
  },
  beforeMount() {
    if (process.client) {
    this.window.width = window.innerWidth;
    }
  },
  beforeUnmount() {
    if (process.client) {
    window.removeEventListener("resize", this.handleResize);
    }
  },
  methods: {
    handleResize() {
      if (process.client) {
      this.window.width = window.innerWidth;
      }
    },
    getWindowWidht() {
      if (process.client) {
        return window.width;
      }
    }
  },
};
</script>
