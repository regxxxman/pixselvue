<template>
  <div
    :class="{ 'backdrop-blur-xl': !openMenu }"
    class="header fixed w-full bg-zinc-900/25 rounded-b-2xl z-20 h-16"
  >
    <div class="flex h-full">
      <div
        class="flex-1 my-4 ml-3 hover:scale-105 transition ease-in-out sm:text-3xl text-2xl sm:py-0 py-1 pl-5 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
      >
        <router-link to="/">PixselCraft</router-link>
      </div>
      <div
        :class="{ hidden: !openMenu, 'backdrop-blur-xl': openMenu }"
        class="sm:flex ease-linear px-7 sm:px-0 -z-10 sm:z-50 sm:my-3 my-0 mr-3 sm:pt-0 sm:flex-row flex-col absolute sm:static sm:h-fit sm:w-fit h-screen w-screen"
      >
        <div
          class="list pt-16 sm:py-2 text-gray-400 lg:block sm:hidden text-3xl sm:text-base"
        >
          <ul class="flex sm:flex-row flex-col">
            <li
              :class="{ 'text-gray-300': path == '/' }"
              class="py-0 lg:px-9 sm:px-3 px-1 hover:text-gray-300"
            >
              <router-link to="/">Главная</router-link>
            </li>
            <li
              :class="{ 'text-gray-300': path == '/about' }"
              class="lg:px-9 sm:px-3 px-1 sm:my-0 my-0.5 hover:text-gray-300"
            >
              <router-link to="/about">О нас</router-link>
            </li>
            <li
              :class="{ 'text-gray-300': path == '/play' }"
              class="lg:px-9 sm:px-3 px-1 hover:text-gray-300"
            >
              <router-link to="/play">Начать играть</router-link>
            </li>
          </ul>
        </div>
        <div
          v-if="isLoggedIn"
          class="m-auto sm:text-base text-xl mx-1 sm:mx-3 text-white"
        >
          <router-link to="/profile">
            {{ userNickname ? userNickname : userEmail }}
          </router-link>
        </div>
        <div
          v-if="!isLoggedIn"
          class="sm:flex pt-3 sm:pt-0 sm:text-base text-xl"
        >
          <router-link
            class="btn text-white bg-cyan-500/30 hover:bg-cyan-500/50 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl"
            to="/login"
          >
            <a>Войти</a>
          </router-link>
          <a
            class="btn text-cyan-500 bg-cyan-900/30 hover:bg-cyan-900/50 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl"
          >
            Регистрация</a
          >
        </div>
        <div v-else class="flex sm:p-0 pt-2">
          <a
            @click="handleSingOut"
            class="btn text-cyan-500 bg-cyan-900/30 hover:bg-cyan-900/50 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl"
            >Выйти</a
          >
        </div>
      </div>
      <div
        @click="handelMenuButton"
        class="block my-3 mr-3 sm:hidden btn animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 hover:scale-110 ease-out transition rounded-xl"
      >
        <HamburgerManuVue :class="{ active: openMenu }" class="h-8 px-3 my-1" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { firebase_app, firebase_database } from '@/firebase/'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, onSnapshot } from 'firebase/firestore'

import HamburgerManuVue from '../components/HamburgerManu.vue'
import router from '@/router'

const isLoggedIn = ref(false)
const userEmail = ref()
const userNickname = ref()
const auth = getAuth()

watchEffect(() => {
  isLoggedIn.value == true
    ? onSnapshot(collection(firebase_database, 'users'), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.data().uid == auth.currentUser.uid
            ? (userNickname.value = doc.data().nickname)
            : (userNickname.value = null)
        })
      })
    : null
})

onMounted(async () => {
  onAuthStateChanged(auth, (user) => {
    user ? (isLoggedIn.value = true) : (isLoggedIn.value = false)
    user
      ? (userEmail.value = user.email) && console.log(user)
      : console.log('not logged in')
  })
  console.log(isLoggedIn.value)
})

const handleSingOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}
</script>

<script>
export default {
  data() {
    return {
      path: '/',
      openMenu: false
    }
  },
  watch: {
    $route() {
      this.path = this.$route.path
      // console.log(this.path)
      this.openMenu ? (this.openMenu = false) : null
    },
    openMenu() {
      this.openMenu
        ? document.body.classList.add('overflow-hidden')
        : document.body.classList.remove('overflow-hidden')
    }
  },
  methods: {
    routeToMain() {
      this.$route.push('/')
    },
    handelMenuButton() {
      this.openMenu = !this.openMenu
    }
  },
  mounted() {
    let lastScroll = 0
    const defaultOffset = 200
    const className = '-translate-y-16'
    const header = document.querySelector('.header')
    const scrollPosition = () =>
      window.pageYOffset || document.documentElement.scrollTop
    const containHide = () => header.classList.contains(className)
    window.addEventListener('scroll', () => {
      if (
        scrollPosition() > lastScroll &&
        !containHide() &&
        scrollPosition() > defaultOffset
      ) {
        //scroll down
        header.classList.add(className)
      } else if (scrollPosition() < lastScroll && containHide()) {
        //scroll up
        header.classList.remove(className)
      }
      lastScroll = scrollPosition()
    })
    window.addEventListener('resize', () => {
      window.innerWidth >= 640 ? (this.openMenu = false) : null
    })
  },
  components: { HamburgerManuVue }
}
</script>

<style lang="sass">
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
.header
    transition: .3s cubic-bezier(.75, -1.27,.3,2.33) transform
</style>
