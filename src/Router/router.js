import {createRouter , createWebHistory} from "vue-router"

import DataComponent from "../components/Cards.vue"
import PostsComponent from "../components/Posts.vue"




const routes = [
  { path: '/', component: DataComponent },
  {path: '/posts/:id' , component :PostsComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})


export default router