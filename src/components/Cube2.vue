<template>
  <div id="canvas_cube_background" class="overflow-hidden"></div>
</template>

<script>
import * as THREE from 'three'
import imgTop from '@/assets/blocks/ultimate solar top.png'
import imgBot from '@/assets/blocks/ultimate solar bottom.png'
import imgSide from '@/assets/blocks/ultimate solar side.png'

export default {
  methods: {
    onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)
    }
  },
  mounted() {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    // document.body.appendChild( renderer.domElement );
    document
      .getElementById('canvas_cube_background')
      .appendChild(renderer.domElement)

    // Create an array of materials to be used in a cube, one for each side
    let cubeMaterialArray = []

    let textureTop = new THREE.TextureLoader().load(imgTop)
    let textureBot = new THREE.TextureLoader().load(imgBot)
    let textureSide = new THREE.TextureLoader().load(imgSide)

    let materialTop = new THREE.MeshBasicMaterial({ map: textureTop })
    let materialBot = new THREE.MeshBasicMaterial({ map: textureBot })
    let materialSide = new THREE.MeshBasicMaterial({ map: textureSide })

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

    function animate() {
      requestAnimationFrame(animate)

      for (let i = 0; i < cubs.length; i++) {
        // cubs[i].rotation.x += 0.01
        cubs[i].rotation.y += 0.01
      }

      renderer.render(scene, camera)
    }

    animate()
    window.addEventListener('resize', this.onWindowResize)
  }
}
</script>
