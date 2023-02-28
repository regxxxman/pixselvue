<template>
  <canvas id="background3d"></canvas>
</template>

<script>
import { Application } from '@splinetool/runtime'

export default {
  mounted() {
    const canvas = document.getElementById('background3d')
    const spline = new Application(canvas)
    spline
      .load('https://prod.spline.design/EOhnm1O9Clpsy3RH/scene.splinecode')
      .then(() => {
        // const obj = spline.findObjectByName('Cube')
        // objectToAnimate.emitEvent('mouseHover')
        // spline.setZoom(1)
        // console.log(window.innerWidth, window.innerHeight)
        // spline.setSize(window.innerWidth, window.innerHeight)
      })
  }
}
</script>
