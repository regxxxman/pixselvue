<script setup>
import { onMounted, ref } from 'vue'

import Cursor from '@/components/Cursor.vue'
import Cube from '@/components/Cube.vue'
import bgImage from '@/assets/bg.jpg'

import { firebase_database, firebase_storage } from '@/firebase'
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage'

import { getAuth } from '@firebase/auth'
import {
  collection,
  onSnapshot,
  updateDoc,
  setDoc,
  doc
} from 'firebase/firestore'

import SkinView3dVue from '@/components/utils/SkinView3d.vue'
import HeadDrawVue from '@/components/utils/HeadDraw.vue'
import Cube2 from '@/components/Cube2.vue'

const uid = ref(null)
const auth = getAuth()

const nickname = ref(null)
const nickname_input = ref(null)

const file_skin = ref(null)

const file_skin_web = ref(null)

onMounted(async () => {
  uid.value = auth.currentUser.uid
  downloadSkin()
  console.log('on mounted')

  onSnapshot(collection(firebase_database, 'users'), (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().uid == uid.value) {
        // console.log(doc.id, ' hi ', doc.data())
        console.log('id user:', doc.id, '\ndata user:', doc.data())
        nickname.value = doc.data().nickname
      }
    })
  })
})

let btnclick = () => {
  if (nickname_input.value) {
    if (nickname.value) {
      updateDoc(doc(firebase_database, 'users', auth.currentUser.uid), {
        nickname: nickname_input.value
      })
      console.log('1')
    } else {
      setDoc(doc(firebase_database, 'users', auth.currentUser.uid), {
        nickname: nickname_input.value,
        uid: uid.value
      })
      console.log('2')
    }
    nickname_input.value = null
  }
}

let handleFileUpload = async () => {
  // debugger;
  // console.log('selected file', this.$refs.file.files[0])
  console.log('selected file', file_skin.value.files[0])
  let fileName = file_skin.value.files[0].name

  if (file_skin.value.files[0] == null) return
  const imageRef = storageRef(firebase_storage, `skins/${uid.value}`)

  uploadBytes(imageRef, file_skin.value.files[0]).then(() => {
    console.log('upload complete')
    downloadSkin()
  })
  // Upload to server
}

let downloadSkin = async () => {
  getDownloadURL(storageRef(firebase_storage, `skins/${uid.value}`)).then(
    (url) => {
      file_skin_web.value = url
    }
  )
}
</script>

<template>
  <Cursor />

  <div
    :style="{ background: `url(${bgImage})` }"
    style="background-size: 100% 100%"
    class="min-h-screen text-white text-center z-10"
  >
    <!-- <Cube class="absolute" /> -->
    <!-- <Cube2 class="absolute" /> -->

    <div class="flex w-fit m-auto lg:flex-row flex-col justify-center pt-28">
      <div
        class="flex flex-col bg-zinc-700/25 backdrop-blur-xl rounded-md mb-2 mx-0.5"
      >
        <!--         :webskin="{ file_skin_web }"
          @update:webskin="file_skin_web = $event" -->
        <!-- <SkinView3dVue :skinUrl="file_skin_web" /> -->
        <SkinView3dVue :uid="{ uid }" class="m-auto" />

        <label
          for="files"
          class="btn m-2 p-2 text-center text-white bg-cyan-500/25 hover:bg-cyan-500/50 hover:scale-110 ease-out transition backdrop-blur-xl rounded-xl"
        >
          Загрузить
        </label>

        <input
          ref="file_skin"
          @change="handleFileUpload()"
          id="files"
          type="file"
          class="hidden"
          accept="image/png, image/jpg"
        />
      </div>

      <div
        class="flex flex-col bg-zinc-700/25 backdrop-blur-xl rounded-md p-3 mb-2 mx-0.5"
      >
        <h1>
          <span
            class="font-bold text-xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
            >{{ nickname ? nickname : 'Добавте свой nickname' }}</span
          >
          - Профиль
        </h1>
        <div class="flex justify-center">
          <input
            class="m-3 p-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white"
            v-model="nickname_input"
            type="text"
            placeholder="nickname"
          />
          <a
            class="btn m-2 p-2 text-center text-white bg-cyan-500/25 hover:bg-cyan-500/50 hover:scale-110 ease-out transition rounded-xl"
            @click="btnclick"
          >
            {{ nickname ? 'Изменить' : 'Добавить' }}
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="flex">
    <img id="myimg" :src="file_skin_web" alt="скин" />
  </div>
</template>

<style></style>
