<template>
  <div
    class="header fixed w-full p-3 bg-zinc-900/25 backdrop-blur-xl rounded-b-2xl z-50"
  >
    <div class="flex">
      <div
        class="flex-1 hover:scale-105 transition ease-in-out sm:text-3xl mt-1 text-2xl sm:py-0 py-1 pl-5 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
      >
        <router-link to="/">PixselCraft</router-link>
      </div>
      <div class="list text-gray-400 py-2 lg:block hidden">
        <ul class="flex">
          <li
            :class="{ 'text-gray-300': path == '/' }"
            class="lg:px-9 sm:px-3 px-1 hover:text-gray-300"
          >
            <router-link to="/">Главная </router-link>
          </li>
          <li
            :class="{ 'text-gray-300': path == '/about' }"
            class="lg:px-9 sm:px-3 px-1 hover:text-gray-300"
          >
            <router-link to="/about">О нас</router-link>
          </li>
          <li class="lg:px-9 sm:px-3 px-1 hover:text-gray-300">
            <router-link to="/play">Начать играть</router-link>
          </li>
        </ul>
      </div>
      <div v-if="isLoggedIn" class="text-white m-auto pr-3 sm:flex hidden">
        <router-link to="/profile">
          <a>{{ userEmail }}</a>
        </router-link>
      </div>
      <div v-if="!isLoggedIn" class="sm:flex hidden">
        <router-link
          class="btn text-white bg-cyan-500/30 hover:bg-cyan-500/50 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl"
          to="/login"
        >
          <a> Войти</a>
        </router-link>
        <a
          class="btn text-cyan-500 bg-cyan-900/30 hover:bg-cyan-900/50 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl"
        >
          Регистрация</a
        >
      </div>
      <div v-else class="sm:flex hidden">
        <a
          @click="handleSingOut"
          class="btn text-cyan-500 bg-cyan-900/30 hover:bg-cyan-900/50 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl"
          >Выйти</a
        >
      </div>
      <a
        v-if="false"
        class="block sm:hidden btn animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl"
      >
        <span class="material-symbols-outlined text-white align-middle">
          menu
        </span>
      </a>
      <div
        class="block sm:hidden btn animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 hover:scale-110 ease-out transition rounded-xl"
      >
        <HamburgerManuVue class="h-10 px-3 my-0.5" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import HamburgerManuVue from '../components/HamburgerManu.vue'

// import router from '../router/index'

const isLoggedIn = ref(false)
let auth
const userEmail = ref('')
onMounted(() => {
  auth = getAuth()
  // console.log(auth.authStateSubscription.auth.currentUser.email)

  onAuthStateChanged(auth, (user) => {
    user ? (isLoggedIn.value = true) : (isLoggedIn.value = false)
    userEmail.value = user.email
    console.log(user)
  })
})

const handleSingOut = () => {
  signOut(auth).then(() => {
    routeToMain()
  })
}
</script>

<script>
export default {
  data() {
    return {
      path: '/'
    }
  },
  watch: {
    $route() {
      this.path = this.$route.path
      // console.log(this.path)
    }
  },
  methods: {
    routeToMain() {
      this.$route.push('/')
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
  },
  components: { HamburgerManuVue }
}
</script>

<style lang="sass">
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
.header
    transition: .3s cubic-bezier(.75, -1.27,.3,2.33) transform
</style>
