import { createApp } from 'vue'
import App from './App.vue'

import router from './Router/router'


// import './assets/main.css'



const myApp = createApp(App)

myApp.use(router)
myApp.mount('#app')
