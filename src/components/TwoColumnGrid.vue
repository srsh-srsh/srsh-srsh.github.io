<template>
  <div class="two-column-grid">
    <div
      v-for="(item, index) in images"
      :key="index"
      class="column-item"
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
.two-column-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* ✅ two equal columns */
  gap: 1rem;
  padding: 2rem;
  width: 80%;
  margin: auto;
}

.column-item {
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.column-item img,
.column-item video {
  width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
  transition: transform 0.3s ease;
}

.column-item:hover img,
.column-item:hover video {
  transform: scale(1.05);
}
</style>
