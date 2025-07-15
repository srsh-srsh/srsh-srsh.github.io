<template>
  <div class="blur-background">
    <div class="blur-shape pink"></div>
    <div class="blur-shape purple"></div>
    <div class="blur-shape blue"></div>

    <div style="display: flex; flex-direction: column;">
      <div class="layout">
        <div class="content">
          <h1 class="title">Sreesh Poudyal</h1>
          <h2 class="subtitle">Graphic Design, Software Engineering, and UI/UX Design</h2>
        </div>
        <div ref="globeContainer" class="globe"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

import githubImg from '@/images/icons/Node-logo.png'
import githubImg1 from '@/images/icons/java-logo.png'

const globeContainer = ref(null)

const imageNodes = [
]

onMounted(() => {
  const container = globeContainer.value
  const width = container.clientWidth
  const height = container.clientHeight

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 10

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  container.appendChild(renderer.domElement)

  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  const clickableSprites = []

  const radius = 4
  const spriteGroup = new THREE.Group()

  imageNodes.forEach((node, i) => {
    const phi = Math.acos(-1 + (2 * i) / imageNodes.length)
    const theta = Math.sqrt(imageNodes.length * Math.PI) * phi

    const texture = new THREE.TextureLoader().load(node.url)
    const material = new THREE.SpriteMaterial({ map: texture })
    const sprite = new THREE.Sprite(material)
    sprite.scale.set(1.2, 1.2, 1.2)

    sprite.position.setFromSphericalCoords(radius, phi, theta)
    sprite.userData = { link: node.link }

    spriteGroup.add(sprite)
    clickableSprites.push(sprite)
  })

  scene.add(spriteGroup)

  const animate = () => {
    requestAnimationFrame(animate)
    spriteGroup.rotation.y += 0.002
    spriteGroup.rotation.x += 0.001
    renderer.render(scene, camera)
  }

  const handleClick = (event) => {
    const rect = renderer.domElement.getBoundingClientRect()
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(clickableSprites)

    if (intersects.length > 0) {
      const link = intersects[0].object.userData.link
      if (link) window.open(link, '_blank')
    }
  }

  renderer.domElement.addEventListener('click', handleClick)
  animate()

  window.addEventListener('resize', () => {
    const newWidth = container.clientWidth
    const newHeight = container.clientHeight
    camera.aspect = newWidth / newHeight
    camera.updateProjectionMatrix()
    renderer.setSize(newWidth, newHeight)
  })
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
  margin-left: 1rem;
}

.title, .subtitle {
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
  .title {
    font-size: 6rem;
  }
  .subtitle {
    font-size: 4rem;
  }
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
  background: #0045c6;
  top: 10%;
  left: 10%;
}

.purple {
  width: 500px;
  height: 500px;
  background: #00a9b8;
  top: 50%;
  left: 40%;
}

.blue {
  width: 300px;
  height: 300px;
  background: #1d05b8;
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
