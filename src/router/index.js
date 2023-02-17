import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TeacherTeam from '../views/TeacherTeam.vue'
import VideoGalleryTeam from '../views/VideoGalleryTeam.vue'

const routes = [ 
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/TeacherTeam',
        name: 'TeacherTeam',
        component: TeacherTeam,
    },
    {
        path: '/VideoGalleryTeam',
        name: '/VideoGalleryTeam',
        component: VideoGalleryTeam,
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
