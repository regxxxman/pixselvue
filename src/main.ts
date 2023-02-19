import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { TroisJSVuePlugin } from 'troisjs'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDW8LZ3AR-DjP3rZmHDVmRfBwZ4YQcovpU',
  authDomain: 'pixselvue.firebaseapp.com',
  projectId: 'pixselvue',
  storageBucket: 'pixselvue.appspot.com',
  messagingSenderId: '743462528232',
  appId: '1:743462528232:web:f35e664f12a889f8f9d55d'
}

// Initialize Firebase
initializeApp(firebaseConfig)

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(TroisJSVuePlugin)

app.mount('#app')
