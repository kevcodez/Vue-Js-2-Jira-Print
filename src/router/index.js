import Vue from 'vue'
import Router from 'vue-router'
import Projects from '@/components/Projects'
import Boards from '@/components/Boards'
import Sprints from '@/components/Sprints'
import Issues from '@/components/Issues'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/',
      name: 'Boards',
      component: Boards
    },
    {
      path: '/board/:id',
      name: 'Sprints',
      component: Sprints
    },
    {
      path: '/board/:boardId/:sprintId',
      name: 'Issues',
      component: Issues
    }
  ]
})
