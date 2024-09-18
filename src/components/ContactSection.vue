<template>
  <div class="container">
    <div class="row justify-content-center">
      <h2 class="pb-3">Reach Me</h2>
    </div>
    <div class="row rmc justify-content-center gap-2 pb-3">
      <div class="col-md-6 col-sm-12 mb-2 d-flex justify-content-center">
        <form
          action="https://formspree.io/f/manwyeao"
          method="POST"
          class="rmform form-control"
        >
          <label>Name:</label>
          <input
            class="name form-control"
            placeholder="Full Name"
            type="text"
            required
          />
          <label>Email:</label>
          <input
            class="email form-control"
            placeholder="Email Address"
            type="email"
            required
          /><label>Your Message:</label>
          <textarea
            name="message"
            class="form-control"
            id="message"
            placeholder="Let's have a conversation."
            required
          ></textarea>

          <div class="row gap-2 formbuttons justify-content-center">
            <button type="submit">Submit</button>
            <button type="reset">Clear</button>
          </div>
        </form>
      </div>
      <div class="d-flex flex-column justify-content-center col-md-4 col-sm-12 gap-3 mt-2 mb-2" id="icons">
        <span
          ><i class="bi bi-telephone-fill"> Cell no. : +27 76 983 2333</i></span
        >
        <span
          ><i class="bi bi-envelope-at-fill">
            Email: acharif41@gmail.com</i
          ></span
        >
        <span
          ><a href="https://github.com/AChar1f" target="_blank"
            ><i class="bi bi-github"> Github: AChar1f</i></a
          ></span
        >        
        <span
          ><a
            href="https://www.linkedin.com/in/abdurahmaan-charif-57675b228/"
            target="_blank"
            ><i class="bi bi-linkedin"> LinkedIn: Abdurahmaan Charif</i></a
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
  caret-color: silver;
  min-height: 3rem;
  max-width: 50vw;
  min-width: 15rem;
  text-align: center;
}

#message {
  height: 6rem;
}
.rmform {
  display: flex;
  /* justify-content: space-evenly; */
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: white;
  max-width: 600px;
}
.formbuttons {
  width: 100%;
  & button {
    padding-inline: 6px;
    height: 3rem;
    max-width: 50vw;
    margin-inline: 0;
    border-radius: 0.5rem;
    background-color: #a29d95;
    color: white;
    &:hover {
      color: white;
      background-color: silver;
    }
  }
}

#icons a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #d2a907;
  }
}
i {
  width: fit-content;
  font-size: 20px;
}
form {
  background-image: linear-gradient(180deg, black 65%, #232323);
}

.rmc{
  background-image: linear-gradient(180deg, black 65%, #232323);

}
</style>
