<template>
  <div class="blur-background">
    <div class="blur-shape pink"></div>
    <div class="blur-shape purple"></div>
    <div class="blur-shape blue"></div>

  <div style="display:flex; flex-direction: column;">
    <div class="layout">
      <div class="content">
        <h1 class="title">Sreesh Poudyal</h1>
        <h2 class="subtitle">Graphic, Web, and UI/UX Design</h2>
      </div>
      <div ref="globeContainer" class="globe"></div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

const globeContainer = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, globeContainer.value.clientWidth / globeContainer.value.clientHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(globeContainer.value.clientWidth, globeContainer.value.clientHeight)
  globeContainer.value.appendChild(renderer.domElement)

  const geometry = new THREE.SphereGeometry(2, 12, 12)
  const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  wireframe: true,
  roughness: 0.5,
})
  const globe = new THREE.Mesh(geometry, material)
  scene.add(globe)

  const light = new THREE.PointLight(0xffffff, 1)
light.position.set(5, 5, 5)
scene.add(light)
  light.position.set(5, 5, 5)
  scene.add(light)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  camera.position.z = 6

  const animate = () => {
    requestAnimationFrame(animate)
    globe.rotation.y += 0.005
    renderer.render(scene, camera)
  }

  animate()
})
</script>

<style scoped>
@font-face {
  font-family: 'Nagasaki';
  src: url('../font/NAGASAKI.TTF') format('truetype');
}

.blur-background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #0d0d0d;
  color: #fff;
  font-family: 'Noto Sans Newa', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

.layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  z-index: 2;
}

.content {
  flex: 1;
  text-align: left;
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  z-index: 1;
}

.title, .subtitle{
  text-align: left;
}

.globe {
  flex: 1;
  height: 800px;
  min-width: 300px;
}

.title {
  font-family: 'Nagasaki';
  font-size: 7rem;
  margin: 0;
  color: #fff;
}

.subtitle {
  font-family: 'Nagasaki';
  font-size: 5rem;
  margin-top: 1rem;
  color: #ffffff;
}

@media screen and (max-width: 700px) {
  .layout {
    flex-direction: column;
    align-items: center;
    z-index: 2;
  }
  
  .content {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .globe {
    display: none;
  }
  
}

.blur-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: float 12s ease-in-out infinite;
  mix-blend-mode: screen;
}

.pink {
  width: 400px;
  height: 400px;
  background: #00c607;
  top: 10%;
  left: 10%;
}

.purple {
  width: 500px;
  height: 500px;
  background: #b80000;
  top: 50%;
  left: 40%;
}

.blue {
  width: 300px;
  height: 300px;
  background: #008d8a;
  bottom: 10%;
  right: 15%;
}

@keyframes float {
  0% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-30px) scale(1.05);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}
</style>
