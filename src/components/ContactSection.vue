<template>
  <div class="container">
    <div class="row justify-content-center">
      <h2 class="display-2">Reach Me</h2>
    </div>
    <div class="row rmc justify-content-center gap-2">
      <div class="row">
        <form
          action="https://formspree.io/f/manwyeao"
          method="POST"
          class="rmform form-control"
        >
          <label>Name:</label>
          <input class="name form-control" placeholder="Full Name" type="text" required />
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
      <div
        class="row mt-2 mb-1"
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
  caret-color: silver;
  min-height: 2rem;
  max-width: 70vw;
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
  color:white
}
.formbuttons {
  width: 100%;
  & button {
  padding-inline: 6px;
    height: 3rem;
    max-width: 70vw;
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
  color: whitesmoke;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color:silver;
  }
}
i {
  width: fit-content;
  font-size: 20px;
}
form{
  background-image: linear-gradient(180deg, black 65%,#232323);
}
#icons{
  background-image: linear-gradient(180deg, black 65%,#232323);
}

</style>