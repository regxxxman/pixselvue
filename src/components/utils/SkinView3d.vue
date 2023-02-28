<template>
  <canvas id="canvas"></canvas>
</template>

<script>
import { SkinViewer, createOrbitControls, IdleAnimation } from 'skinview3d'
import skinimg from '@/assets/skin/reg_skin2.png'
import steve from '@/assets/skin/steve.png'
import { ref } from 'vue'

import { firebase_storage } from '@/firebase'
import { ref as storageRef, getDownloadURL } from 'firebase/storage'

const file_skin_web = ref(null)

export default {
  props: {
    uid: Object
  },
  data() {
    return {
      imgskin: null,
      skinViewer: null
    }
  },
  methods: {
    async downloadSkin() {
      getDownloadURL(
        storageRef(firebase_storage, `skins/${this.uid.uid}`)
      ).then((url) => {
        // console.log('this.imgskin = ', url)
        // this.imgskin = url

        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest()
        xhr.responseType = 'blob'
        xhr.onload = (event) => {
          const blob = xhr.response
        }
        xhr.open('GET', url)
        xhr.send()

        // Or inserted into an <img> element
        // const img = document.getElementById('myimg')
        // img.setAttribute('src', url)

        // let img = new Image()
        // img.src = url

        // this.skinUpdate(img.src)
        console.log('kek')
      })
    },
    skinUpdate(skin) {
      this.skinViewer = new SkinViewer({
        canvas: document.getElementById('canvas'),
        width: 300,
        height: 400,
        skin: skin
      })
    }
  },
  watch: {
    webskin() {
      // console.log('watch: webskin', this.webskin)
    },
    uid() {
      console.log('uid = ', this.uid.uid)
      this.downloadSkin()
    },
    imgskin() {
      console.log('imgskin update', this.imgskin)

      // this.skinUpdate(this.imgskin)
    }
  },
  mounted() {
    // console.log('mouted', this.webskin)

    this.skinViewer = new SkinViewer({
      canvas: document.getElementById('canvas'),
      width: 300,
      height: 400,
      skin: steve
    })

    // this.skinUpdate(skinimg)
    let control = createOrbitControls(this.skinViewer)
    control.enableRotate = true
    control.enableZoom = false
    control.enablePan = false

    let walk = this.skinViewer.animations.add(IdleAnimation)
  }
}
</script>
