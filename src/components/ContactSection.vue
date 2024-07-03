<template>
  <div class="container">
    <div class="row justify-content-center">
      <h2 class="display-2">Reach Me</h2>
    </div>
    <div class="row rmc justify-content-center gap-2">
      <div class="col col-lg-5 mb-1">
        <form
          action="https://formspree.io/f/manwyeao"
          method="POST"
          class="rmform"
        >
          <h5>Get in Touch</h5>
          <label>Name:</label>
          <input class="name" placeholder="Full Name" type="text" required />
          <label>Email:</label>
          <input
            class="email"
            placeholder="Email Address"
            type="email"
            required
          /><label>Your Message:</label>
          <textarea
            name="message"
            id="message"
            placeholder="Let's have a conversation."
            required
          ></textarea>

          <div class="formbuttons m-3">
            <button type="submit">Submit</button>
            <button type="reset">Clear</button>
          </div>
        </form>
      </div>
      <div
        class="col col-lg-5 d-flex flex-column justify-content-center gap-4 mb-1"
        id="icons"
      >
        <span><i class="bi bi-envelope-at-fill"> Email: acharif41@gmail.com</i></span>
        <span><i class="bi bi-telephone-fill"> Cell no. : +27 76 983 2333</i></span>
        <span
          ><a href="https://github.com/AChar1f" target="_blank"
            ><i class="bi bi-github"> Github: AChar1f</i></a
          ></span
        >
        <span
          ><a href="https://maps.app.goo.gl/P8axQPBDNRgRWXWh7" target="_blank"
            ><i class="bi bi-geo"> Located: Surrey Estate, Cape Town</i></a
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
/* Form */
input,
textarea {
  caret-color: rgb(90, 90, 90);
  background-color: lightgray;
  min-height: 2rem;
  min-width: 15rem;
  text-align: center;
}

#message {
  height: 5rem;
}
.rmform {
  display: flex;
  /* justify-content: space-evenly; */
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.formbuttons {
  & button {
    height: 40px;
    width: 70px;
    margin-inline: 20px;
    border-radius: 0.5rem;
    background-color: #a29d95;
    color: white;
    &:hover {
      color: whitesmoke;
      background-color: #232323;
    }
  }
}

#icons a {
  color: whitesmoke;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    opacity: 0.4;
  }
}
i {
  width: fit-content;
  font-size: 20px;
}
</style>