<template>
<header>
    <div class="textbox">
        <p class="neonWhite">Welcome to my creative space where design meets innovation. Below, you'll find a showcase of some of my notable graphic design projects. Feel free to contact me, and we can brainstorm something together!</p>
    </div>
</header>

<section id="contact" class="email-box">
    <h2 class="neonHaluka">Contact Me</h2>

    <form id="contact-form" action="https://formspree.io/f/mqakbdaz" method="POST">
        <label for="name" class="neonText">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required>

        <label for="email" class="neonText">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required>

        <label for="message" class="neonText">Your Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Type your message here" required></textarea>

    <div class="resume-container" style="width: 150px; background-color: white; border: 3px solid black; border-radius: 15px; margin-bottom: 0rem; justify-self: center; justify-items: center;">
      <button type="submit" style="border: none; text-decoration: none; color: black; display: flex; flex-direction: row; align-items: center; padding: 0.5rem; justify-content: center;">
        <h2 style="margin: 0; font-size: 1.2rem;">Send Message</h2>
      </button>
    </div>
    </form>
</section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const form = document.getElementById('contact-form')
  if (!form) return
  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      if (response.ok) {
        alert('Thank you for your message!')
        form.reset()
      } else {
        alert('Oops! There was a problem submitting your form')
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form')
    }
  })
})
</script>

<style scoped>
body {
  color: #fff;
  font-family: 'Jost';
  margin: 0;
  padding: 0;
}

.email-box {
  background-color: transparent;
  margin-top: 60px;
  padding: 40px 20px;
  border-radius: 10px;
}

.email-box h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #000000;
}

form {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  background-color: #0a0a1f;
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  font-family: 'Jost';
}

input::placeholder,
textarea::placeholder {
  color: #aaa;
  opacity: 0.8;
}

button {
  font-weight: bold;
  color: black;
  background: none;
  padding: 0.5rem 1rem;
  border: 2px solid black;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
}

button:hover {
}

.resume-container {
  transform: translateY(0px);
  background-color: white;
}

.resume-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: white;
}


.neonHaluka {
  color: #000000;
  font-size: 1.5rem;
}
</style>
