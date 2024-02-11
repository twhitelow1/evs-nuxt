<!-- Page Content -->
<template>
    <div>
     <!-- jumbotron -->
     <div class="blog jumbotron">
         <div class="container">
            <div class="col-lg-6 col-centered well text-center">
               <h1>Mobile App</h1>
        
            </div>
         </div>
         <!-- /.container -->
      </div>
      <!-- /jumbotron -->
	   
      <!-- Clouds SVG Divider -->
         <svg id="deco-clouds2" class="head hidden-xs" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
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
	  
	   <!-- Parallax objects -->
      <div class="blog-object1 hidden-sm hidden-xs hidden-md" data-0="opacity:1;"
         data-100="transform:translatey(0%);"
         data-1025="transform:translatey(-80%);">
		  <!-- Image -->
         <img src="/img/blogobject1.png" alt="">
      </div>
	  
      <div class="blog-object2 hidden-sm hidden-xs hidden-md" data-0="opacity:1;"
         data-100="transform:translatey(0%);"
         data-1025="transform:translatey(-80%);">
		 <!-- Image -->
         <img src="/img/blogobject2.png" alt="">
      </div>
    <div class="home">
        <div id="blog-page" class="single-page container">	   
            <div class="col-md-4">
                <div class="container">
                    <div class="phone-case">
                        <div class="wallpaper">

                        </div>
                    </div>
                </div>
            </div>
            <!-- Page -->
            <div class="col-md-8 pl5 blog-home">
                <!-- Content Row -->
                <div class="row">
                    <div class="blog-post post-main page-body">
                        <h3>Get our Mobile App Today!</h3>
                        <!-- Page Info -->
                        <!-- Page Content -->
                        <p>Download the Eagle Valley Sitters App and receive 10% off your first booking made through the app.*</p>
                        
                        <p>You can view your sitters profile and contact details, send messages and important information to the sitter, create and cancel bookings, and leave a review or a tip for your sitter.all in one place. It's that easy! </p>
                        <p>The Eagle Valley Sitters app streamlines booking babysitters, dog walkers, and pet sitters.</p>
                        <p>From the Eagle Valley Sitters app, you can:</p>
                        <ul>
                            <li>View your sitter’s profile and contact details</li>
                            <li>Send messages or important information directly to your sitter through our messaging feature</li>
                            <li>Create and cancel bookings</li>
                            <li>Purchase gift cards</li>
                            <li>Leave reviews and tips for your sitter.</li> 
                        </ul>
                        <p>All in one place. It's that easy!</p>
                        <p class="text-italic-small"> *excluding holidays and peak times The Eagle Valley Sitters app streamlines booking babysitters, dog walkers, and pet sitters. </p>

                    </div>
                    <div class="app-buttons">
                        <a href="https://apps.apple.com/us/app/eagle-valley-sitters/id6451325057"><img class="app-store-button" src="/img/applestore.png" alt="Download From App Store"></a>
                        <a href="https://play.google.com/store/search?q=eagle%20valley%20sitters&c=apps&hl=en_US&gl=US"><img class="app-store-button" src="/img/google.png" alt="Download on android"></a>
                    </div>
                    <!-- /page-content -->	
                </div>
                <!-- /row -->
            </div><!-- /column -->
            
        </div><!-- /blog-page -->
    </div>
</div>
</template>

<style>
.blog.jumbotron {
    background:  no-repeat center center;
    background-color: #fcfbdd;
    color: #66bfc7
}
.app-buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 2em;
}
.app-store-button{
    max-width: 200px;
    height: 60px;
}
.page-body{
    padding: 4em;
}
.page-body h3{
    font-size: 4em;
}
.text-italic-small{
    font-style: italic;
    font-size: 1em !important;
}
.page-body p{
    font-size: 1.5em;
}
.phone-case{
    height: 150.9mm;
    width: 75.5mm;
    background-color: black;
    border-radius: 40px;
    border:10px black ridge;
    position: relative;
    margin-bottom: 2em;

}
.wallpaper{
    background-image: url("/img/mobileapp.webp");
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    padding: 15px;
    box-sizing: border-box;
    display:grid;
    grid-template-rows: 1fr repeat (3, 2fr) 3fr 1.5fr;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        "date . . recption"
        "clock calendar photos mail"
        ". . . ."
        ". . . ."
        ". . . ."
        "setting phone . . "
}

</style>