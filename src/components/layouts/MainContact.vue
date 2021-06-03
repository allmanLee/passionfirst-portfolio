<template>
  <div id="mainContact">
    <div class="contact-wrap">
      <h1 class="contact-title">Contact</h1>
      <form class="contact-form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input id="text" type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
      <p class="email-m-text wiggle" @click="emailCopy">muenzz119@naver.com</p>
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
    copyToClipboard: function copyToClipboard(val) {
      var t = document.createElement("textarea");
      document.body.appendChild(t);
      t.value = val;
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    },
    emailCopy: function () {
      this.copyToClipboard("muenzz119@naver.com");
      alert("주소를 복사하였습니다");
    },
  },
};
</script>
<style lang="scss" scoped>
#mainContact {
  background-color: #f3f3f3;
}
.contact-wrap {
  max-width: 1200px;
  margin: 0 auto;
  height: 900px;
  text-align: center;
}
.contact-title {
  display: block;
  font-family: "Roboto";
  margin-top: 80px;
  padding-top: 40px;
  font-size: 32px;
  font-weight: 500;
}
form {
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
}
label,
input,
textarea {
  width: 600px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 12px;
  border: none;
  height: 30px;
}
label {
  margin-top: 20px;
  font-family: "Roboto";
  font-weight: 500;
}
textarea {
  height: 400px;
}
input {
  text-align: center;
  font-size: 16px;
}
input[type="submit"] {
  width: auto;
  margin: 20px auto;
  padding-left: 60px;
  padding-right: 60px;
  height: 48px;
  background-color: blueviolet;
  color: #ffffff;
}
input:hover,
textarea:hover {
  box-shadow: 0px 0px 12px 4px #dbdbdb;
}
input[type="submit"]:hover {
  opacity: 0.8;
}
@media (max-width: 768px) {
  .contact-wrap {
    height: 400px;
  }
  form {
    display: none;
  }
  .email-m-text {
    display: block;
    font-size: 40px;
    font-weight: 900;
    font-family: "Roboto";
    margin-top: 80px;
  }
  .email-m-text:hover {
    color: blueviolet;
  }
}
@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(0deg);
  }
  85% {
    transform: rotate(5deg);
  }
  95% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.wiggle {
  display: inline-block;
  animation: wiggle 2.5s infinite;
}
.wiggle:hover {
  animation: none;
}
</style>
