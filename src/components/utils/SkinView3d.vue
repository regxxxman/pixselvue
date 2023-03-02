<template>
  <canvas id="canvas"></canvas>
</template>

<script>
import { SkinViewer, createOrbitControls, IdleAnimation } from 'skinview3d'

import steve from '@/assets/skin/steve.png'
import regman from '@/assets/skin/reg_skin2.png'

export default {
  props: {
    srcimg: ''
  },
  data() {
    return {
      skin_viewer: null
    }
  },
  methods: {
    createSkin(skin) {
      this.skin_viewer = new SkinViewer({
        canvas: document.getElementById('canvas'),
        width: 300,
        height: 400,
        skin: skin ? skin : steve
      })

      // this.skinUpdate(skinimg)
      let control = createOrbitControls(this.skin_viewer)
      control.enableRotate = true
      control.enableZoom = false
      control.enablePan = false

      let walk = this.skin_viewer.animations.add(IdleAnimation)
    }
  },
  watch: {
    srcimg() {
      // console.log(`${this.srcimg.file_skin_web}.png`)
      this.createSkin(this.srcimg.file_skin_web)
    }
  },
  mounted() {
    this.createSkin()
  }
}
</script>
