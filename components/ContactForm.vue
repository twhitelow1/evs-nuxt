<template>
   <div class="ContactForm">
      <!-- Contact Form -->
            <div class="col-lg-7 col-lg-offset-2">
               <h4>Write us</h4> 
				      <!-- Form Starts -->
                <div id="contact_form">
                  <form @submit.prevent="sendEmail">
                    <ClientOnly>
                    <div class="form-group">
                      <input type="text" name="name" class="form-control input-field" placeholder="Name" v-model="name" required="">                    
                      <input type="email" name="email" class="form-control input-field" placeholder="Email" v-model="email" required="">           
                      <!-- <input type="text" name="subject" class="form-control input-field" placeholder="Subject" required="">                      -->
                    </div>
                  </ClientOnly>
                    <textarea name="message" id="message" class="textarea-field form-control" rows="4" v-model="message" placeholder="Enter your message" required=""></textarea>
                    <button type="submit" id="submit_btn" value="Submit" class="btn center-block">Send message</button>
                  </form>
                </div> 
			   <!-- Contact results -->
              <div id="contact_results"></div>
            </div>
            <!--/Contact form -->
  </div>
</template>

<style>
</style>

<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactUs",
  data: function () {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  created: function () {},
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm("service_jyo2wo1", "template_l8bd87r", e.target, "user_iiXyyKC75fz0OAxwF59vm", {
          name: this.name,
          email: this.email,
          message: this.message,
        });
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

