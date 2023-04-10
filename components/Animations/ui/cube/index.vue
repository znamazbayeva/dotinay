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

  //Positioning
  // y - up
  // x - rught
  // z - back
  // 1 - arbitary too (centimeter, 1meter, 1 kilometer)
  // mesh.position.x = 0.7
  // mesh.position.y = -0.6
  // mesh.position.z = -1

  // position inherit from Vector3 

  // mesh.position.length() - distance the position and the center of the scene
  // mesh.position.distanceTo(camera.position): distance between object and camera
  // mesh.position.normalize() - take length of vector to 1 mesh.position.length() == 1

  mesh.position.set(0.7, -0.6, -0.1)

  // add to the scene
  scene.add(mesh)

  // Lines that helps to sees axes
  const axesHelper = new THREE.AxesHelper(2)
  scene.add(axesHelper)

  // Scale
  // mesh.scale.x = 2
  // mesh.scale.y = 0.5
  // mesh.scale.z = 0.5
  mesh.scale.set(2, 0.5, 0.5)

  // Rotate objects
  mesh.rotation.reorder('YXZ')
  mesh.rotation.y = Math.PI * 0.25
  mesh.rotation.x = Math.PI * 0.25

  // Quaternion
  // rotation -> in more mathematical way



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

  // camera.lookAt(new THREE.Vector3(3, 0, 0)) 
  // method which rotates the object so that its -z faces the target you provided
  // camera.lookAt(mesh.position)

  // Can do position, rotation and scale into a Group
  const group = new THREE.Group()
  scene.add(group)
  group.position.y = 1

  const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
  )

  group.add(cube1)

  const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
  )
  cube2.position.x = -2
  group.add(cube2)

  const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
  )
  cube3.position.x = 2
  group.add(cube3)

  // Renderer
  // Render the scene from the camera point of view
  // Result drawn into canvas
  // Three.js wil use WebGL to render inside the canvas

  const canvas = document.querySelector('.webgl')
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas
  })

  renderer.setSize(sizes.width, sizes.height)
  renderer.render(scene, camera)
  // render is the same as taking the picture, therefore need to mvoe the objec t adn take a picture

  //nothing is visible because camera is inside of cube
  // z  - forward, backward

  // 4 ways to transform objects
  // position
  // scale
  // rotation
  // quaternion



  // Animations
  //FPS -> frame per second

})
</script>
