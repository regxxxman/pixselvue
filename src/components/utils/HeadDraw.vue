<script setup></script>

<template>
  <canvas id="head" class="rounded"></canvas>
</template>

<script>
import skinImg from '@/assets/skin/reg_skin2.png'

export default {
  methods: {
    draw() {
      let canvas = document.getElementById('head')
      let context = canvas.getContext('2d')

      let img = new Image()
      img.src = skinImg

      img.onload = () => {
        let scale = img.naturalWidth / 64
        let headpos = scale * 8

        canvas.width = headpos
        canvas.height = headpos

        context.drawImage(
          img,
          headpos /*sourceX*/,
          headpos /*sourceX*/,
          headpos /*sourceWidth*/,
          headpos /*sourceHeight*/,
          0 /*destX*/,
          0 /*destY*/,
          headpos /*destWidth*/,
          headpos /*destHeight*/
        )
        context.drawImage(
          img,
          headpos * 5 /*sourceX*/,
          headpos /*sourceY*/,
          headpos /*sourceWidth*/,
          headpos /*sourceHeight*/,
          0 /*destX*/,
          0 /*destY*/,
          headpos /*destWidth*/,
          headpos /*destHeight*/
        )
      }
    }
  },
  mounted() {
    this.draw()
  }
}
</script>
