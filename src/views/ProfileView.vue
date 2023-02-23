<script setup>
import { onMounted, ref } from 'vue'

import Cursor from '@/components/Cursor.vue'
import Cube from '@/components/Cube.vue'
import bgImage from '@/assets/bg.jpg'

import { firebase_database } from '@/firebase'

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

const uid = ref()
const auth = getAuth()

const nickname = ref()
const nickname_input = ref()

onMounted(async () => {
  uid.value = auth.currentUser.uid

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
</script>

<template>
  <Cursor />

  <div
    :style="{ background: `url(${bgImage})` }"
    style="background-size: 100% 100%"
    class="min-h-screen w-full text-white text-center z-10"
  >
    <!-- <Cube class="absolute" /> -->
    <Cube2 class="absolute" />

    <div class="flex lg:flex-row flex-col justify-center pt-28">
      <div
        class="flex flex-col bg-zinc-700/25 backdrop-blur-xl rounded-md mb-2 mx-0.5"
      >
        <SkinView3dVue class="m-auto" />

        <div
          class="btn m-2 p-2 text-center text-white bg-cyan-500/25 hover:bg-cyan-500/50 hover:scale-110 ease-out transition backdrop-blur-xl rounded-xl"
        >
          Загрузить
        </div>
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
</template>

<style></style>
