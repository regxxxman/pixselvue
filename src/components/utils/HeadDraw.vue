<script setup></script>

<template>
  <canvas id="head" class="rounded"></canvas>
</template>

<script>
import steve from '@/assets/skin/steve.png'
import { firebase_storage } from '@/firebase'
import { onMounted, ref } from 'vue'

import { ref as storageRef, getDownloadURL } from 'firebase/storage'
import { getAuth } from '@firebase/auth'
const uid = ref(null)

const auth = getAuth()
const file_skin_web = ref(null)

// onMounted(async () => {})

export default {
  watch: {},
  methods: {
    async downloadSkin() {
      getDownloadURL(
        storageRef(firebase_storage, `skins/${auth.currentUser.uid}`)
      ).then((url) => {
        file_skin_web.value = url
        this.draw(url)
      })
    },
    draw(url) {
      let canvas = document.getElementById('head')
      let context = canvas.getContext('2d')

      let img = new Image()

      !url ? (img.src = steve) : (img.src = file_skin_web.value)
      console.log('DRAW', file_skin_web.value)

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

    this.downloadSkin()
  }
}
</script>
