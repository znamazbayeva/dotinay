<template>
  <div class="w-full animation">
    <div class="mb-3 w-full font-medium text-lg text-gray-800 dark:text-gray-200">My first animations -> cube</div>
    <canvas id="root" class="webgl" ref="cube"></canvas>
  </div>
</template>
<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
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

  // mesh.position.set(0.7, -0.6, -0.1)

  // add to the scene
  scene.add(mesh)

  // Lines that helps to sees axes
  // const axesHelper = new THREE.AxesHelper(2)
  // scene.add(axesHelper)

  // Scale
  // mesh.scale.x = 2
  // mesh.scale.y = 0.5
  // mesh.scale.z = 0.5
  // mesh.scale.set(2, 0.5, 0.5)

  // Rotate objects
  // mesh.rotation.reorder('YXZ')
  // mesh.rotation.y = Math.PI * 0.25
  // mesh.rotation.x = Math.PI * 0.25

  // Quaternion
  // rotation -> in more mathematical way

  const canvas = document.querySelector('.webgl')
  const container = document.querySelector('.animation')

  // Camera -> point of view, can have multiple cameras and switch between different cameras
  // Perspective Camera -> if far -> small, near is big
  // Paramerest
  // 1. Field of view - vertical vision angle, in degrees, also called fov
  // If big, deformations on the side
  // 2. The aspect ratio - 
  const sizes = {
    width: container.offsetWidth,
    height: 300
  }



  const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)

  window.addEventListener('resize', () => {
    sizes.width = container.offsetWidth

    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
  })

  camera.position.z = 1.5
  scene.add(camera)

  // camera.lookAt(new THREE.Vector3(3, 0, 0)) 
  // method which rotates the object so that its -z faces the target you provided
  // camera.lookAt(mesh.position)

  // Can do position, rotation and scale into a Group
  // const group = new THREE.Group()
  // scene.add(group)
  // group.position.y = 1

  // const cube1 = new THREE.Mesh(
  //   new THREE.BoxGeometry(1,1,1),
  //   new THREE.MeshBasicMaterial({color: 0xff0000})
  // )

  // group.add(cube1)

  // const cube2 = new THREE.Mesh(
  //   new THREE.BoxGeometry(1,1,1),
  //   new THREE.MeshBasicMaterial({color: 0x00ff00})
  // )
  // cube2.position.x = -2
  // group.add(cube2)

  // const cube3 = new THREE.Mesh(
  //   new THREE.BoxGeometry(1,1,1),
  //   new THREE.MeshBasicMaterial({color: 0x0000ff})
  // )
  // cube3.position.x = 2
  // group.add(cube3)

  // Renderer
  // Render the scene from the camera point of view
  // Result drawn into canvas
  // Three.js wil use WebGL to render inside the canvas

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas
  })

  renderer.setSize(sizes.width, sizes.height)
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

  // requestAnimationFrame is to call the function provided on the next frame

  // Time 
  // let time = Date.now()
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true

  // Clock
  const clock = new THREE.Clock()

  // GSAP
  // gsap.to(mesh.position, { duration: 2, delay: 2, x: 20 })
  // gsap.to(mesh.position, { duration: 2, delay: 2, x: 0 })

  const tick = () => {
    // Time
    // const currentTime = Date.now()

    //Delta
    // const deltaTime = currentTime - time
    // time = currentTime

    // Update objects
    // mesh.rotation.y += 0.001 * deltaTime
    // The cube will rotate no matter of screen speed
    const elapsedTime = clock.getElapsedTime()

    // one revolution per second
    // mesh.rotation.y += elapsedTime * Math.PI * 2

    // moves in circle
    // camera.position.y = Math.sin(elapsedTime)
    // camera.position.x = Math.cos(elapsedTime)
    camera.lookAt(mesh.position)

    // do not use getDelta


    // Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
  }


  tick()

  // Camera is an abstract class
  // Array Camera render the scene from multiple cameras on specific areas of the render
  // Stereo Camera render the scene through two cameras the mimic the eyes to create a parallax effect
  // the cubeCanera do 6 renders, each one facing a different direction
  // Perspective camera -> render the scene from the perscpective
  //   const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 1, 1000)

  // OrthograpicCamera is lack of perspective the object is the same far or near

  window.addEventListener('mousemove', (event) => {

  })

})
</script>
