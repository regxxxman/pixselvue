<template>
  <canvas id="canvas"></canvas>
</template>

<script>
import { SkinViewer, createOrbitControls, IdleAnimation } from 'skinview3d'
import skinimg from '@/assets/skin/reg_skin2.png'

export default {
  mounted() {
    let skinViewer = new SkinViewer({
      canvas: document.getElementById('canvas'),
      width: 300,
      height: 400,
      skin: skinimg
    })

    let control = createOrbitControls(skinViewer)
    control.enableRotate = true
    control.enableZoom = false
    control.enablePan = false

    let walk = skinViewer.animations.add(IdleAnimation)
  }
}
</script>
