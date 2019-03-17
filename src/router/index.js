import Vue from 'vue'
import Router from 'vue-router'
import Carousel3dPage from '@/examples/carousel3d/Carousel3dPage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Carousel3dPage',
      component: Carousel3dPage
    }
  ]
})
