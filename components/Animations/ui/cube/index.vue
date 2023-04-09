<template>
  <div>
    <div class="mb-3 font-medium text-lg text-gray-800 dark:text-gray-200">My first animations -> cube</div>
    <canvas id="root" class="webgl" ref="cube"></canvas>
  </div>
</template>
<script setup>
import * as THREE from 'three'
onMounted(() => {
  const scene = new THREE.Scene()

  // Red cube
  // MESH = geometry + material
  const geometry = new THREE.BoxGeometry(1,1,1)
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  const mesh = new THREE.Mesh(geometry, material)

  // add to the scene
  scene.add(mesh)

  // Camera -> point of view, can have multiple cameras and switch between different cameras
  // Perspective Camera -> if far -> small, near is big
  // Paramerest
  // 1. Field of view - vertical vision angle, in degrees, also called fov
  // If big, deformations on the side
  // 2. The aspect ratio - 
  const sizes = {
    width: 600,
    height: 400
  }
  const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
  camera.position.z = 3
  scene.add(camera)

  // Renderer
  // Render the scene from the camera point of view
  // Result drawn into canvas
  // Three.js wil use WebGL to render inside the canvas

  const canvas = document.querySelector('.webgl')
  console.log(canvas)
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas
  })

  renderer.setSize(sizes.width, sizes.height)
  renderer.render(scene, camera)

  //nothing is visible because camera is inside of cube
  // z  - forward, backward

})
</script>
