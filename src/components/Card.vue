<script setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
  path: {
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
  <div class="greetings" style="background-color: white; margin-bottom: 15px; margin-left: 0px; margin-right: 0px; display: flex; flex-direction: rows; justify-content: space-between; align-items: center; width: 80%">
    <img :src="path" class="responsive-img" style="max-width: 30%; height: auto; object-fit: cover;" />
    <div class="text-container">
      <h1><strong>{{ title }}</strong></h1>
      <h3>{{ desc }}</h3>
      <a href="shop" class="reg-link">See more</a>
    </div>
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
