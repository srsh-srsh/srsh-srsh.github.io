<template>
  <a :href="link" class="box">
    <img :src=image class="imageL" />
    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 2rem;">
      <h3 class="neonHaluka">{{ title }}</h3>
      <p class="neonWhite">{{ description }}</p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  link: String,
  description: String,
});
</script>

<style scoped>
@media (max-width: 500px) {
  .box a{
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }
  
  .imageL {
    display: none;
  }
  
  .box div {
    margin-left: 0;
  }
  
}
.box a {
  display: block;
  border-radius: 15px;
  background: rgb(0, 0, 0);
  backdrop-filter: blur(10px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  width: 100%;
  margin-bottom: 1rem;
}

.box {
  border: 3px solid rgb(0, 0, 0);
  align-items: center;
  justify-content: center;
}

.box:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
.imageL {
  width: 100%;
  border-radius: 15px;
  margin-bottom: 0.5rem;
  height: 200px;
  object-fit: cover;
}
.neonWhite {
  color: #4f4f4f;
  font-size: 2rem;
}
.neonHaluka {
  color: #000000;
  font-size: 3.5rem;
}
</style>
