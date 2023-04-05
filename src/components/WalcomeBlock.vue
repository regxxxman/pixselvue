<template>
  <!-- :style="{ background: `url(${bgImage})` }" -->

  <div
    :style="{ background: `url(${bgImage})` }"
    style="background-size: 100% 100%"
    class="flex flex-col min-h-screen"
  >
    <!-- <CanvasVue class=" absolute w-full" /> -->

    <div
      class="flex overflow-hidden flex-col lg:px-0 px-5 lg:flex-row lg:space-x-4 pt-16 text-gray-200 my-auto justify-center"
    >
      <div class="gsap1 -translate-x-96 opacity-10 basis-1/3">
        <div class="mt-5 p-3 bg-zinc-700/25 backdrop-blur-xl rounded-md">
          <h1 class="font-bold text-2xl">
            <span class="text-red-500">PixselCraft</span> - игровой проект
            Minecraft.
          </h1>
          <!-- <img class="rounded" src="@/assets/bg_news.png" alt="" /> -->
          <p class="text-gray-300 pt-1">
            Каждый игрок ищет уютную атмосферу и интересный геймплей, отзывчивую
            модерацию и баланс на сервере. <br />
            Всё это есть на проекте нового поколения - PixselCraft!
          </p>
        </div>

        <div v-show="!isLoggedIn" class="flex justify-center pt-2">
          <router-link
            to="/login"
            class="btn w-full text-center text-white bg-cyan-400/40 hover:bg-cyan-500/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 mr-1 rounded-xl"
          >
            Войти
          </router-link>
          <a
            class="btn w-full text-center text-cyan-500 bg-cyan-900/40 hover:bg-cyan-900/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 ml-1 rounded-xl"
          >
            Регистрация
          </a>
        </div>

        <div v-show="isLoggedIn" class="flex justify-center pt-2">
          <router-link
            to="/play"
            class="btn w-full text-center text-white bg-cyan-400/40 hover:bg-cyan-500/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 rounded-xl"
          >
            Начать играть
          </router-link>
        </div>
      </div>

      <div
        class="basis-1/2 gsap2 translate-x-96 opacity-10 my-auto flex flex-col space-y-3 pt-5 w-full"
      >
        <h1
          class="font-bold text-2xl bg-zinc-700/25 backdrop-blur-xl rounded-md p-3"
        >
          <span class="text-orange-500">Онлайн</span> на наших серверах
          <p class="text-base text-left font-light">
            У наших серверов разные наборы модов и востребованных у игроков
          </p>
        </h1>
        <div v-for="server in servers" :key="server.Name" class="pt-2">
          <div class="pb-1 flex flex-col sm:flex-row sm:space-x-2">
            <p class="font-bold text-xl z-10">
              <span class="text-red-500">{{ server.Name }}</span>
              {{ server.online }} из 100
            </p>
            <div
              class="flex space-x-2 [&>*]:py-0.5 [&>*]:px-2 [&>*]:bg-zinc-700/25 [&>*]:backdrop-blur-xl [&>*]:rounded-xl [&>*]:decoration-cyan-500"
            >
              <span class="hover:underline"
                ><a href="">{{ server.mods[0] }}</a></span
              >
              <span class="hover:underline"
                ><a href="">{{ server.mods[1] }}</a></span
              >
              <span class="hover:underline">...</span>
            </div>
          </div>

          <div
            class="w-full bg-zinc-700/40 backdrop-blur-xl rounded-full p-1 mt-0.5"
          >
            <div
              class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animate-text p-2 backdrop-blur-xl text-base font-light text-blue-100 text-center leading-none rounded-full"
              :style="'width:' + server.online + '%'"
            >
              {{ server.online }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { firebase_app, firebase_database } from '@/firebase/'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import bgImage from '@/assets/bg.jpg'

onMounted(async () => {
  onAuthStateChanged(auth, (user) => {
    user ? (isLoggedIn.value = true) : (isLoggedIn.value = false)
  })
  // console.log(isLoggedIn.value)
})
</script>

<script>
import { gsap } from 'gsap'

const auth = getAuth()
const isLoggedIn = ref(false)

export default {
  data() {
    return {
      servers: [
        { Name: 'HiTech', online: 35, mods: ['AE2', 'IndustrialCraft 2'] },
        { Name: 'DarkSide', online: 10, mods: ['zalupa', 'IndustrialCraft 2'] }
      ]
    }
  },
  watch: {
    auth() {
      console.log(auth)
    }
  },
  mounted() {
    console.log(auth)
    gsap.to('.gsap1', {
      delay: 0.1,
      x: 0,
      opacity: 100
    })
    gsap.to('.gsap2', {
      delay: 0.1,
      x: 0,
      opacity: 100
    })
  }
}
</script>
