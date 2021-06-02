<template>
  <div id="mainContact">
    <div class="contact-wrap">
      <h1 class="contact-title">Contact</h1>
      <form class="contact-form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_e5l7yxf",
          "template_ttykign",
          e.target,
          "user_BJSzcotEDyYxj2A2X6cB1"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>
<style lang="scss" scoped>
.contact-wrap {
  box-sizing: border-box;
  max-width: 1200px;
  height: 100vh;
  border: 1px solid red;
  margin: 60px auto;
  text-align: center;
}
.contact-title {
  font-family: "Roboto";
  margin-top: 40px;
  font-size: 32px;
  font-weight: 500;
}
label,
input {
  display: block;
  margin: 0 auto;
}
input {
  max-width: 600px;
}
</style>
