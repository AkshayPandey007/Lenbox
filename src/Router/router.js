import {createRouter , createWebHistory} from "vue-router"

import DataComponent from "../components/Cards.vue"
import PostsComponent from "../components/Posts.vue"
import CommentComponent from "../components/Comment.vue"




const routes = [
  { path: '/', component: DataComponent },
  {path: '/posts/:id' , component :PostsComponent },
  {path: '/postDetails/:id' , component :CommentComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})


export default router