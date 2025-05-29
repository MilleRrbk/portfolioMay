import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// pages
import Home from '@/pages/Home.vue'
import Work from '@/pages/Work.vue'
import Stuff from '@/pages/Stuff.vue'
import Info from '@/pages/Info.vue'
import ProjectDetail from '@/pages/ProjectDetail.vue'

// data
import { workProjects } from '@/data/work.js'
import { stuffItems   } from '@/data/stuff.js'

const routes = [
  { path: '/', 
    name: 'Home',
    component: Home },

  { path: '/work',
    name: 'Work',
    component: Work },

  { path: '/stuff',
    name: 'Stuff',
    component: Stuff },

  { path: '/info',
    name: 'Info',
    component: Info },

  // single detail route for *all* work items:
  {
    path: '/work/:slug', //slug = URL friendly name
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: route => ({
      project: workProjects.find(p => p.slug === route.params.slug)
    })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')
