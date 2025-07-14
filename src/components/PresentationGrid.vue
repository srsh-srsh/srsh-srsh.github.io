<template>
  <div class="presentation-grid">
    <div
      v-for="(item, index) in images"
      :key="index"
      class="presentation-item"
      @click="openModal(item)"
    >
      <img
        v-if="item.type === 'image'"
        :src="item.src"
        :alt="'Image ' + (index + 1)"
      />
      
      <video :controls="false" loops autoplay muted
        v-else-if="item.type === 'video'"
        :src="item.src"
        controls
        preload="metadata"
        style="max-width: 100%; max-height: 100%;"
      />
    </div>
  </div>
</template>

  
  <script setup>
  import { ref } from 'vue';
  
  defineProps({
    images: {
      type: Array,
      required: true,
    },
  });
  
  const selectedImage = ref(null);
  const openModal = (img) => {
    selectedImage.value = img;
  };
  </script>
  
  <style scoped>
  .presentation-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    width: 80%;
    justify-self: center;
  }
  
  .presentation-item {
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    border-radius: 12px;
  }
  
  .presentation-item img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
    display: block;
    border-radius: 12px;
  }
  
  .presentation-item:hover img {
    transform: scale(1.05);
  }
  </style>
  