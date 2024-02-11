<!-- Page Content -->
<template>
    <div>
     <!-- jumbotron -->
     <div class="blog jumbotron">
         <div class="container">
            <div class="col-lg-6 col-centered well text-center">
               <h1>Blog Post</h1>
               <!-- Breadcrumb -->
               <ol class="breadcrumb text-center">
                  <li><a href="index.html">Home</a></li>
				  <li><a href="blog-home.html">Blog Home</a></li>
                  <li class="active">Blog Post</li>
               </ol>
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
            <!-- Blog Post -->
            <div class="col-md-9 blog-home">
            <!-- Content Row -->
            <div class="row">
                <div class="blog-post post-main">
                    <h3>High Quality Daycare</h3>
                    <!-- Post Info -->
                    <div class="post-info">
                        <p><i class="fa fa-clock-o"></i>Posted on Aug 24, 2015 at 9:00 PM</p>
                        <p><i class="fa fa-user"></i>by <a href="#">Mary Jane</a></p>
                        <!-- Post Comments -->
                        <p><i class="fa fa-comment"></i>3 Comments</p>
                    </div>
                    <!-- Image -->
                    <img class="img-responsive" src="/img/blogmain1.jpg" alt="">
                    <!-- Post Content -->
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis tincidunt rhoncus. Integer pulvinar elit ligula, laoreet imperdiet magna consectetur vel. Nullam tempus, tellus sed laoreet porttitor, urna quam efficitur magna, id vestibulum arcu massa eget risus. Mauris sagittis elit nec magna congue aliquam. Nam sollicitudin urna nunc, eu iaculis leo vulputate vel. Donec ultrices ipsum laoreet suscipit consectetur. In pulvinar diam arcu, eu tincidunt arcu mollis quis. Sed vulputate pharetra enim ac pretium. Quisque at rutrum nunc, nec dictum ligula. Vestibulum magna nibh, dapibus at eros et, auctor sagittis ipsum.</p>
                    <blockquote>Men dolor sit amet, consectetur adipisiras sit amet nibh libero, in gravida nulla ulla vel metus scelerisque ante sollicitudin commodo cras purus.</blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis tincidunt rhoncus. Integer pulvinar elit ligula, laoreet imperdiet magna consectetur vel. Nullam tempus, tellus sed laoreet porttitor, urna quam efficitur magna, id vestibulum arcu massa eget risus. Mauris sagittis elit nec magna congue aliquam. Nam sollicitudin urna nunc, eu iaculis leo vulputate vel. Donec ultrices ipsum laoreet suscipit consectetur. In pulvinar diam arcu, eu tincidunt arcu mollis quis. Sed vulputate pharetra enim ac pretium. Quisque at rutrum nunc, nec dictum ligula. Vestibulum magna nibh, dapibus at eros et, auctor sagittis ipsum.</p>
                    <div class="post-info">					
                    <!-- Tags -->
                        <div class="blog-tags">
                            <p><i class="fa fa-tags"></i>Tags:</p>
                            <a href="#">Bread</a> <a href="#">Concert</a> <a href="#">Fruit Salad</a> <a href="#">Soup</a>
                    </div>
                    </div>
                <!-- /post-info -->				  
                </div>
                <!-- /blog-post -->	
                <!-- Comments Form -->
                <div class="media">
                    <h5>Leave a Comment:</h5>
                    <!-- Form Starts -->
                    <div class="form-group">
                        <input type="text" name="name" class="form-control input-field" placeholder="Name">                    
                        <input type="email" name="email" class="form-control input-field" placeholder="Email ID" >           
                    </div>
                    <textarea name="message" id="message" class="textarea-field form-control" rows="4" placeholder="Enter your Comment"></textarea>
                    <button type="submit" value="Submit" class="btn center-block">Send Comment</button>
                </div>
                <!-- Posted Comments -->
                <div class="comments-block">
                    <h4 class="text-center">Comments</h4>
                    <hr>
                    <!-- Comment -->
                    <div class="comment media">
                        <a href="#">
                        <img class="media-object  img-responsive img-circle" src="/img/comment1.jpg" alt="">
                        </a>
                        <div class="media-body">
                        <a href="#">
                            <h6 class="media-heading">Maria Silva
                                <small>August 25, 2014 at 9:30 PM</small>
                            </h6>
                        </a>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        <!-- Reply Button -->
                        <a class="btn text-right">Reply</a>
                        </div>
                    </div>
                    <!-- /media -->
                    <!-- Comment -->
                    <div class="comment media">
                        <a href="#">
                        <img class="media-object  img-responsive img-circle" src="/img/comment2.jpg" alt="">
                        </a>
                        <div class="media-body">
                        <a href="#">
                            <h6 class="media-heading">Mariane Lindberg
                                <small>August 25, 2014 at 9:30 PM</small>
                            </h6>
                        </a>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                            <!-- Reply Button -->
                        <a class="btn text-right">Reply</a>
                        <!-- Nested Comment -->
                        <div class="comment media nested">
                            <a href="#">
                            <img class="media-object img-responsive img-circle" src="/img/comment3.jpg" alt="">
                            </a>
                            <div class="media-body">
                                <a href="#">
                                    <h6 class="media-heading">Nested Comment
                                    <small>August 25, 2014 at 9:30 PM</small>
                                    </h6>
                                </a>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </p>
                                <!-- Reply Button -->
                                <a class="btn text-right">Reply</a>
                            </div>
                        </div> 
                        <!-- /media -->
                        <!-- End Nested Comment -->
                        </div>
                    </div>
                    <!-- /media -->
                </div>
                <!-- /comments block -->
            </div>
            <!-- /row -->
        </div>
        <!-- /blog-home -->
        
            <!-- Sidebar -->
            <div class="sidebar col-md-3">
            <!-- About us Widget -->
            <div class="well">
                <h4>About Us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
                <!-- Social Media icons -->
                <div class="social-media">
                    <a href="#" title=""><i class="fa fa-twitter"></i></a>
                    <a href="#" title=""><i class="fa fa-facebook"></i></a>
                    <a href="#" title=""><i class="fa fa-linkedin"></i></a>
                    <a href="#" title=""><i class="fa fa-pinterest"></i></a>
                    <a href="#" title=""><i class="fa fa-instagram"></i></a>
                </div>
            </div>
            <!-- Blog Search -->
            <div class="well">
                <h4>Search</h4>
                <div class="input-group">
                    <input type="text" class="input-lg form-control">
                    <span class="input-group-btn">
                    <button class="btn"><i class="fa fa-search"></i></button>
                    </span>
                </div>
                <!-- /.input-group -->
            </div>
            <!-- /well -->
            <!-- Blog Categories -->
            <div class="well">
                <h4>Categories</h4>
                <div class="row">
                    <ul class="list-unstyled">
                        <li><a href="#">Parent's Book</a>
                        </li>
                        <li><a href="#">Events and News</a>
                        </li>
                        <li><a href="#">Teachers</a>
                        </li>
                        <li><a href="#">Updates</a>
                        </li>
                    </ul>
                </div>
                <!-- /.row -->
            </div>
            <!-- /well -->
            <!-- Text Widget-->
            <div class="well">
                <h4>Text Widget</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
            </div>
            <!-- /well -->
            <!-- Image Widget -->
            <div class="well">
                <h4>Image</h4>
                <img src="/img/imgwidget.jpg" class="img-responsive" alt="">
            </div>
            <!-- /well -->
            <!-- Tags Widget -->
            <div class="well">
                <h4>Tags</h4>
                <div class="blog-tags">
                    <a href="#">Daycare</a> <a href="#">Concert</a> <a href="#">Father's day</a> <a href="#">Fun</a> <a href="#">Activity</a> <a href="#">Toys</a> <a href="#">Offer</a>
                </div>
            </div>
            <!-- /well -->
            <!-- Accordion -->
            <div class="well">
                <h4>Accordion</h4>
                <!-- Accordion -->
                <div class="panel-group" id="accordion">
                    <!-- Question 1 -->
                    <div class="panel">
                        <div class="panel-heading">
                        <h6 class="panel-title">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse1">Activities</a>
                        </h6>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <p> Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                            </p>
                        </div>
                        </div>
                    </div>
                    <!--/panel -->
                    <!-- Question 2 -->
                    <div class="panel">
                        <div class="panel-heading">
                        <h6 class="panel-title">
                            <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse2">Age Group</a>
                        </h6>
                        </div>
                        <div id="collapse2" class="panel-collapse collapse">
                        <div class="panel-body">
                            <p> Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                            </p>
                        </div>
                        </div>
                    </div>
                    <!--/panel -->
                    <!-- Question 3 -->
                    <div class="panel">
                        <div class="panel-heading">
                        <h6 class="panel-title">
                            <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse3">Timetable</a>
                        </h6>
                        </div>
                        <div id="collapse3" class="panel-collapse collapse">
                        <div class="panel-body">
                            <p> Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                            </p>
                        </div>
                        </div>
                    </div>
                    <!--/panel -->					 
                </div>
                <!-- /.accordion -->		
            </div>
            <!-- /well -->
            </div>
            <!-- /sidebar col-md-3 --> 
        <!-- /blog-page -->
        </div>
    </div>
</div>
</template>
