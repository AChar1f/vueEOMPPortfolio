<template>
  <div class="container">
    <div class="row justify-content-center">
      <h2 class="display-2">Reach Me</h2>
    </div>
    <div class="row gap-2">
      <div class="col">
        <form
          action="https://formspree.io/f/manwyeao"
          method="POST"
          class="rmform bg-dark"
        >
          <h4>Get in Touch</h4>
          <input class="name" placeholder="Full Name" type="text" required />
          <input
            class="email"
            placeholder="Email Address"
            type="email"
            required
          />
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
        class="col d-flex flex-column justify-content-center gap-4 bg-dark"
        id="icons"
      >
        <span><i class="bi bi-envelope-at-fill"> acharif41@gmail.com</i></span>
        <span><i class="bi bi-telephone-fill"> +27 76 983 2333</i></span>
        <span
          ><a
            href="https://github.com/AChar1f"
            target="_blank"
            class="text-decoration-none"
            ><i class="bi bi-github"> AChar1f</i></a
          ></span>
        <span><i class="bi bi-geo"> Surrey Estate, Cape Town</i></span>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
