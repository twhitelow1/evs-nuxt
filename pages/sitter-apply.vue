
<template>
  <div class="sitterapply">
    <!-- Page width 'Boxed' of 'Full' -->
      <section id="contact" class="color-section">
         <div class="container">
            <div class="col-lg-8 col-lg-offset-2" style="margin-top:30px">
               <!-- Section heading -->
               <div class="section-heading-page" >
                  <h2>Sitter Application</h2>
               </div>
            </div>
            <!-- Contact -->
            <div class="col-lg-12 text-center">
              <h4>Candidate Requirements</h4>  
              <!-- Requirements info -->			   
              <div class="requirements-info">
                <p>If you meet or surpass the listed requirements, we would love to work with you. All candidates must have:</p>
                <ul class="applicant-requirements">
                  <li>CPR and First Aid Training</li>
                  <li>2 years childcare or applicable experience</li>
                  <li>U.S. Work Authorization</li>
                  <li>2 Childcare or applicable references</li>
                  <li>No criminal background</li>
                </ul>
                <p>We welcome additional qualifications such as experience teaching, child development training, multilingual fluency, food-allergy awareness, and sensitivity to physical, mental, and social abilities.</p>
              </div>
            </div>
            <!-- Applicant Form -->
             <div class="col-lg-7 col-lg-offset-1">
               <h4>Application Form</h4>
				        <!-- Form Starts -->
                <div id="contact_form">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <div class="form-group">
                      <h5>Contact Information</h5>
                      <input type="text" name="fname" class="form-control input-field" placeholder="First Name" required=""> 
                      d<input type="text" name="mname" class="form-control input-field" placeholder="Middle Name" required="">                              
                      <input type="text" name="lname" class="form-control input-field" placeholder="Last Name" required="">
                      <input type="email" name="email" class="form-control input-field" placeholder="Email" required="">           
                    </div>
                    <div class="form-group">
                      <h5>Questions</h5>
                      <h6>Describe your babysitting and childcare related experience</h6>
                      <textarea name="experience" id="experience" class="textarea-field form-control" rows="4" placeholder="" required=""></textarea>
                      <h6>How many years of childcare experience do you have?</h6>
                      <input type="text" name="years" class="form-control input-field" placeholder="ex. 4 years" required=""> 
                      <h6>What age groups of children do you have the most experience working with?</h6>
                      <input type="text" name="age-group-experience" class="form-control input-field" placeholder="2-10 years old" required=""> 
                      <h6>What age groups do you most prefer or want to work with? Why?</h6>
                      <input type="text" name="age-group-preference" class="form-control input-field" placeholder="mostly 2-5 years olds, I do like older kids but prefer not to care for under 2" required="">
                      <h6>Do you have your own transportation or do you rely on the bus? *not a requirement for employment</h6>
                      <input type="text" name="transportation" class="form-control input-field" placeholder="" required="">
                      <h6>What is your vaccination status? * not a requirement for employment </h6>
                      <input type="text" name="vaccination" class="form-control input-field" placeholder="" required="">
                      <h6>When it comes to childcare or work, what are some of your greatest strengths and weaknesses? Please list one of each</h6>
                      <textarea name="strengths-weaknesses" id="experience" class="textarea-field form-control" rows="4" placeholder="" required=""></textarea>
                      <h6>What is your availability for this job?</h6>
                      <div>
                        <input type="checkbox" id="sunday" name="sunday" value="Sunday"><p>Sunday</p>
                        <label for="cars">Choose a car:</label>
                        <select name="cars" id="cars">
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                      <h6>Why do you think you’re a good fit for this job?</h6>
                      <textarea name="why" id="why" class="textarea-field form-control" rows="4" placeholder="" required=""></textarea>
                      <h6>Are you CPR certified?</h6>
                      <input type="text" name="cpr" class="form-control input-field" placeholder="" required="">
                      <h6>Are you First Aid certified?</h6>
                        <input type="radio" id="yes" name="firstaid" value="YES">
                        <label for="yes">Yes</label><br>
                        <input type="radio" id="no" name="firstaid" value="NO">
                        <label for="no">No</label><br>
                      <h6><label for="education">What is your highest level of education?</label></h6>
                          <select id="education">
                            <option value="High School">High School</option>
                            <option value="Some College">Some College</option>
                            <option value="College Degree">College Degree</option>
                            <option value="Trade School/Certificate">Trade School/Certificate</option>
                          </select>
                      <h6>What languages do you speak?</h6>
                      <input type="text" name="cpr" class="form-control input-field" placeholder="List languages seperated by comas" required="">
                      <h6>Please list at least 2 babysitting or childcare related references</h6> 
                      <h6>What is the best phone number to reach you at?</h6>   
                      <input type="text" name="cpr" class="form-control input-field" placeholder="Phone number" required=""> 
                    </div>
                    <button type="submit" id="submit_btn" value="Submit" class="btn center-block">Send message</button>
                  </v-form>
               </div> 
              <!-- Contact results -->
               <div id="contact_results"></div>
            </div> 
            <!--/Contact form -->
         </div>
         <!-- /container-->
      </section>
      <!--Section ends -->
      
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
  components: {},
};
</script>

