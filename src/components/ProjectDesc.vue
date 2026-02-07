<script setup>

defineProps({
  project_name: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  goals: {
    type: Array,
    required: true,
  },
  methodology: {
    type: Array,
    required: true,
  },
  outcome: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="textbox">
      <h1><strong>{{ project_name }}</strong></h1>
  </div>
  <div style="display: flex; flex-direction: row; justify-content: space-between;">
    <div class="textbox" style="width: 60%;">
      <h3>{{ desc }}</h3>
    </div>
    <div class="textbox" style="width: 40%;">
      <ul v-for="item in goals"
          :key="index">
          <li> {{ item }} </li>
      </ul>
    </div>
  </div>
  <div class="textbox">
      <ul v-for="item in methodology"
          :key="index">
          <li> {{ item }} </li>
      </ul>   
  </div>
  <div class="textbox">
      <p class="neonWhite">{{ outcome }}</p>   
  </div>
<div class="resume-container" style="width: 150px; border: 3px solid black; border-radius: 15px; margin-bottom: 2rem; justify-self: center;">
  <a href={{ path }} style="text-decoration: none; color: black; display: flex; flex-direction: row; align-items: center; padding: 0.5rem; justify-content: center;">
    <h2 style="margin: 0; font-size: 1.2rem;">See more</h2>
  </a>
</div>
</template>

<style scoped>
h1 {
  font-weight: 900;
  position: relative;
}

.greetings h1,
.greetings h3 {
  text-align: left;
  color: black;
  width: 100%;
}

.reg-link{
  color: rgb(255, 196, 0);
  transition: color 0.3s ease, background-color 0.3s ease;
}

.reg-link:hover{
  color: rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
}

img {
  width: 30%;
  height: auto;
  object-fit: cover;
  align-self: center;
  margin-right: 0px;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 50%;
  padding-left: 10px;
}

.text-container h1,
.text-container h3 {
  margin-bottom: 20px;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .text-container {
    max-width: 100%;
  }
}
</style>
