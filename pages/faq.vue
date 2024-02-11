
<template>
  <div class="home">
      <!-- Page width 'Boxed' of 'Full' -->
      <section id="spacer" style="min-height:50px" class="color-section"></section>
      <!-- Section FAQ -->
      <section id="contact" class="color-section">
        <div class="container">
          <div class="col-lg-8 col-lg-offset-2">
               <!-- Section heading -->
               <div class="section-heading">
                  <h2>Frequently Asked Questions</h2>
               </div>
          </div>
          <!-- FAQ -->
          <div class="col-lg-12 text-center">		   
            <div class="faq text-left">					    
              <h4>Why Choose Eagle Valley Sitters? </h4>
              <ul style="margin-left: 30px; size: 16px; line-height: 2em;">
                <li>We are a small, locally owned and operated business that knows all of our sitters personally. </li>
                <li>Using our expertise and experience, we can match you with the best sitter from our team to meet your family’s unique needs. We work hard to ensure that you can have peace of mind leaving your children or pets with qualified sitters.</li> 
                <li>All of our sitters possess a minimum of 2 years professional, verified experience.</li>
                <li>Where possible, we aim to provide the same sitter across multiple bookings. We understand consistency is important for our clients and work to ensure a seamless experience.</li>
              </ul>
              <br /><br />

              <p>Booking a babysitter is easy! You can book online <a href="https://eaglevalleysitters.enginehire.io/application-form/195/4186">here</a>. </p> 
              <p>Once a sitter has been assigned, you’ll have access to their sitter profile to view all of the information you need prior to your appointment.</p>
              <br /><br />

              <h4>What is your cancellation policy?</h4>
              <p>All cancellations made within 48 hours of the booking start time will incur a full charge. Unfortunately, there can be no exceptions to this policy. </p>
              <p>* Please note that cancellations made during Christmas Vacation weeks (12/18- 1/5) have a 7 day cancellation policy.</p>
              <br /><br />

              <h4>Is it possible to have the same sitter for every day we book? </h4>
              <p>It is always our goal to provide consistency where possible. The further in advance you book, the more likely we will be able to accommodate, and provide the same sitter across all days booked. However, this is harder to achieve for last minute bookings. </p>
              <br /><br />

              <h4>Are all of your sitters vaccinated for covid?</h4>
              <p>At this time we do not mandate covid vaccines for our sitters. But we are happy to provide vaccinated sitters upon request! Be sure to include your vaccine preferences in your client registration form when booking.</p>
              <br /><br />

              <h4>Are all of your babysitters CPR certified and background checked?</h4> 
              <p>Yes! All of our sitters are CPR certified and background checked with an FCRA compliant screening.</p>
              <br /><br /> 

              <h4>What is the child to sitter ratio?</h4>
              <p>One sitter can watch up to 4 children. If there are more than 4 children, 2 sitters are required, to remain in compliance with Colorado state laws.</p>
              <p>*If the children are in diapers, the child to sitter ratio is 2:1. Some exceptions can be made for evening bookings. Contact us via email at <a href="cat@eaglevalleysitters.com">cat@eaglevalleysitters.com</a> for specific information.</p>
              <br /><br />

              <h4>Do you offer long term nanny placement services?</h4>
              <p>Yes! Eagle Valley Sitters can help you search for the perfect full time, or part time nanny for your family. Contact us today for more information regarding long term nanny placement.</p>
              <br /><br />

              <h4>Is there a minimum booking length?</h4>
              <p>Yes, for babysitting the minimum is 4 hours. For pet sitting and dog walking we charge a 1 hour minimum.</p>
              <br /><br />

              <h4>What is your holiday pricing?</h4>
              <p>July 4th- 43/hr plus 5 each additional child</p>
              <p>Thanksgiving Day- 51/ hr plus 5 each additional child</p>
              <p>Christmas Eve - 53/ hr plus 5 each additional child</p>
              <p>Christmas Day- 53/ hr plus 5 each additional child</p>
              <p>New Year’s Eve after 5 pm- 65/ hr plus 5 each additional child *5 hour minimum</p>
              <p>New Year’s Day- 51/ hr plus 5 each additional child *5 hour minimum</p>
              <p>Valentine’s Day after 5 pm- 41/ hr + 5 each additional child</p>
              <br /><br />

              <h4>Do you charge any rush fees for last minute bookings?</h4>
              <p>Yes, for bookings made less than 24 hours in advance we charge a $20 service fee.</p>
              <br /><br />

              <h4> I’m a returning client, how do I login to the portal?</h4>
              <p>Returning clients can login to the portal via our free mobile app, and via this link: <a href="https://eaglevalleysitters.enginehire.io/login/195">https://eaglevalleysitters.enginehire.io/login/195</a></p>
              <br /><br />
              <h4>Where can I download the app?</h4>
              <p>Click <a href="https://apps.apple.com/us/app/eagle-valley-sitters/id6451325057">HERE</a> to download the app for iPhone and iPad users </p>
              <p>Click <a href="https://play.google.com/store/search?q=eagle%20valley%20sitters&c=apps&hl=en_US&gl=US">HERE</a> to download for Android users </p>
              <br />
              <br />
              <h4>Still have questions? </h4>
              <p>Type your message below, and we will get back to you within 24 hours. Be sure to include your full name, email address, and preferred method of contact.</p>
            </div>
            <ContactForm></ContactForm>
          </div>
        </div>
        <!-- /container-->
      </section>
      <!-- Section Contact -->
    
      <!--Section ends -->
      
  </div>
</template>

<style>
li {
  margin: 15px 0;
}
.faq p{
  margin-bottom: 1em;
}
</style>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  data: function () {
    return {};
  },
  created: function () {},
  methods: {},
  components: {
    ContactForm,
  },
};
</script>

