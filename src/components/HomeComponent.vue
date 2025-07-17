<template>
  <div class="blur-background">
    <div class="blur-shape pink"></div>
    <div class="blur-shape purple"></div>
    <div class="blur-shape blue"></div>

    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <div class="layout">
        <div class="content">
          <h1 class="title">Sreesh Poudyal</h1>
          <h2 class="subtitle">Graphic Design, Software Engineering, and UI/UX Design</h2>
        </div>
        <div ref="globeContainer" class="globe"></div>
      </div>
      <!--<div class="resume-container" style="width: 300px; margin-bottom: 2rem; justify-self: center; margin-top: 0;">
        <a @click="scrollTo(home-display-component)" style="text-decoration: none; color: white; display: flex; flex-direction: row; align-items: center; justify-content: center;">
          <h2 style="margin: 0; font-size: 2rem; color: white">Discover More</h2>
        </a>
      </div>-->
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Node from '@/images/icons/Node_logo.png'
import Java from '@/images/icons/java_logo.png'
import Figma from '@/images/icons/Figma_logo.png'
import Python from '@/images/icons/Python_logo.png'
import Vue from '@/images/icons/Vue_logo.png'
import React from '@/images/icons/React_logo.png'
import Illustrator from '@/images/icons/Illustrator_logo.png'
import Photoshop from '@/images/icons/Photoshop_logo.png'
import Php from '@/images/icons/Php_logo.png'
import HomeDisplayComponent from './HomeDisplayComponent.vue'

const globeContainer = ref(null)

const imageNodes = [
  { name: 'Node', url: Node, link: 'https://github.com' },
  { name: 'Java', url: Java, link: 'https://github.com' },
  { name: 'Figma', url: Figma, link: 'https://github.com' },
  { name: 'Python', url: Python, link: 'https://github.com' },
  { name: 'Vue', url: Vue, link: 'https://github.com' },
  { name: 'React', url: React, link: 'https://github.com' },
  { name: 'Illustrator', url: Illustrator, link: 'https://github.com' },
  { name: 'Php', url: Php, link: 'https://github.com' },
  { name: 'Photoshop', url: Photoshop, link: 'https://github.com' }
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

  container.setAttribute('draggable', 'false')
  renderer.domElement.setAttribute('draggable', 'false')

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.1
  controls.enableZoom = false
  controls.rotateSpeed = 0.5
  controls.autoRotate = true
  controls.autoRotateSpeed = 3
  controls.enablePan = false

  let isDragging = false
  let lastRotation = 0
  let velocity = 0
  let friction = 0.99
  let momentumRotation = 0

  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  const clickableSprites = []

  const radius = 4.5
  const spriteGroup = new THREE.Group()
  const spritePositions = []

  const textureLoader = new THREE.TextureLoader()

  imageNodes.forEach((node, i) => {
    const phi = Math.acos(-1 + (2 * i) / imageNodes.length)
    const theta = Math.sqrt(imageNodes.length * Math.PI) * phi

    const texture = textureLoader.load(node.url)
    const material = new THREE.SpriteMaterial({ map: texture })
    const sprite = new THREE.Sprite(material)
    sprite.scale.set(1.2, 1.2, 1.2)

    const position = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta)
    sprite.position.copy(position)
    sprite.userData = { link: node.link }

    spriteGroup.add(sprite)
    clickableSprites.push(sprite)
    spritePositions.push(position)
  })

  scene.add(spriteGroup)

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 1, transparent: true })
  for (let i = 0; i < spritePositions.length; i++) {
    for (let j = i + 1; j < spritePositions.length; j++) {
      const points = [spritePositions[i], spritePositions[j]]
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(geometry, lineMaterial)
      scene.add(line)
    }
  }

  let prevX = 0
  renderer.domElement.addEventListener('mousedown', (e) => {
    e.preventDefault()
    isDragging = true
    prevX = e.clientX
    velocity = 0
  })

  renderer.domElement.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const deltaX = e.clientX - prevX
      velocity = deltaX * 0.002
      prevX = e.clientX
    }
  })

  renderer.domElement.addEventListener('mouseup', () => {
    isDragging = false
    momentumRotation = velocity
  })

  const keySpeed = 0.03
  const keysPressed = { left: false, right: false }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keysPressed.left = true
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keysPressed.right = true
  })

  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keysPressed.left = false
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keysPressed.right = false
  })

  const animate = () => {
    requestAnimationFrame(animate)

    if (!isDragging && Math.abs(momentumRotation) > 0.0001) {
      spriteGroup.rotation.y += momentumRotation
      scene.children.forEach(child => {
        if (child.type === 'Line') child.rotation.y += momentumRotation
      })
      momentumRotation *= friction
    }

    if (keysPressed.left) {
      spriteGroup.rotation.y -= keySpeed
      scene.children.forEach(child => {
        if (child.type === 'Line') child.rotation.y -= keySpeed
      })
    }

    if (keysPressed.right) {
      spriteGroup.rotation.y += keySpeed
      scene.children.forEach(child => {
        if (child.type === 'Line') child.rotation.y += keySpeed
      })
    }

    controls.update()
    renderer.render(scene, camera)
  }

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
  width: 100%;
  max-width: 1400px;
  margin-top: 3rem;
  height: 600px;
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
  margin-bottom: 0;
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

a {
  font-family: jost;
  font-size: 1.8rem;
  padding: 0.4rem 0.7rem;
  border: 0px;
  border: 3px solid #ffffff;
  border-radius: 15px;
  background: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

a:hover {
  color: #ffffff;
  background-color: #0074cc;
  border-color: #78acd3;
  opacity: 20%;
  border-radius: 15px;
}

@media screen and (max-width: 700px) {
  .title {
    font-size: 6rem;
  }
  .subtitle {
    font-size: 4rem;
    padding-bottom: 0;
  }

  .content {
    margin-top: 3rem;
    margin-bottom: 0;
    padding-bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
  }

  .layout {
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
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
  pointer-events: none;
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
