<template>
  <div id="canvas_cube_background" class="overflow-hidden w-full"></div>
</template>

<script>
import * as THREE from 'three'
import imgTop from '@/assets/blocks/ultimate solar top.png'
import imgBot from '@/assets/blocks/ultimate solar bottom.png'
import imgSide from '@/assets/blocks/ultimate solar side.png'

export default {
  mounted() {
    let onWindowResize = () => {
      camera.aspect = document.body.clientWidth / document.body.clientHeight
      console.log(document.body.clientWidth, ' ', document.body.clientHeight)
      camera.updateProjectionMatrix()

      renderer.setSize(document.body.clientWidth, document.body.clientHeight)

      //   renderer.setSize(window.innerWidth - 20, window.innerHeight - 20)
    }

    const clock = new THREE.Clock()
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    // renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setSize(document.body.clientWidth, document.body.clientHeight)

    // document.body.appendChild(renderer.domElement)

    document
      .getElementById('canvas_cube_background')
      .appendChild(renderer.domElement)

    const sphere = new THREE.SphereGeometry(0.5, 16, 8)

    // Create an array of materials to be used in a cube, one for each side
    let cubeMaterialArray = []

    let textureTop = new THREE.TextureLoader().load(imgTop)
    let textureBot = new THREE.TextureLoader().load(imgBot)
    let textureSide = new THREE.TextureLoader().load(imgSide)

    let materialTop = new THREE.MeshLambertMaterial({ map: textureTop })
    let materialBot = new THREE.MeshLambertMaterial({ map: textureBot })
    let materialSide = new THREE.MeshLambertMaterial({ map: textureSide })

    let cubeMaterials = new THREE.MeshFaceMaterial(cubeMaterialArray)

    // Cube parameters: width (x), height (y), depth (z),
    //       (optional) segments along x, segments along y, segments along z
    let cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)

    // order to add materials: x+,x-,y+,y-,z+,z-

    let cube = new THREE.Mesh(cubeGeometry, [
      materialSide,
      materialSide,
      materialTop,
      materialBot,
      materialSide,
      materialSide
    ])
    // scene.add(cube)
    // scene.add(cube)

    camera.position.z = 5

    let cubs = []
    for (let i = 0; i < 100; i++) {
      cubs.push(
        new THREE.Mesh(cubeGeometry, [
          materialSide,
          materialSide,
          materialTop,
          materialBot,
          materialSide,
          materialSide
        ])
      )

      cubs[i].rotation.x += 0.3

      cubs[i].position.x = Math.random() * 10 - 5
      cubs[i].position.y = Math.random() * 10 - 5
      cubs[i].position.z = Math.random() * 2 - 2

      scene.add(cubs[i])
    }

    const light = new THREE.AmbientLight('white') // soft white light
    scene.add(light)

    let light1 = new THREE.PointLight('red', 0.5, 50)
    light1.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 'red' }))
    )
    scene.add(light1)

    let light2 = new THREE.PointLight('blue', 0.5, 50)
    light2.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 'blue' }))
    )
    scene.add(light2)

    let render = () => {
      const time = Date.now() * 0.0005
      const delta = clock.getDelta()

      light1.position.x = Math.sin(time * 0.7) * 3
      light1.position.y = Math.cos(time * 0.5) * 4
      light1.position.z = Math.cos(time * 0.3) * 3

      light2.position.x = Math.cos(time * 0.3) * 3
      light2.position.y = Math.sin(time * 0.5) * 4
      light2.position.z = Math.sin(time * 0.7) * 3

      // light3.position.x = Math.sin(time * 0.7) * 30
      // light3.position.y = Math.cos(time * 0.3) * 40
      // light3.position.z = Math.sin(time * 0.5) * 30

      // light4.position.x = Math.sin(time * 0.3) * 30
      // light4.position.y = Math.cos(time * 0.7) * 40
      // light4.position.z = Math.sin(time * 0.5) * 30

      for (let i = 0; i < cubs.length; i++) {
        // cubs[i].rotation.x += 0.01
        cubs[i].rotation.y += 0.01
        // cubs[i].position.x = Math.sin(time * 0.7) * 30
        // cubs[i].position.y = Math.cos(time * 0.5) * 40
        // cubs[i].position.z = Math.cos(time * 0.3) * 30
      }
    }

    function animate() {
      requestAnimationFrame(animate)

      render()

      renderer.render(scene, camera)
    }

    animate()

    window.addEventListener('resize', onWindowResize)
  }
}
</script>
