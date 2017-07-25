import Vue from 'vue'
import Router from 'vue-router'
import HomePlaces from '../components/HomePlaces.vue'
import DetailPlaces from '../components/DetailPlaces.vue'
import PostPlace from '../components/PostPlace.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePlaces
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailPlaces
    },
    {
      path: '/post',
      name: 'post',
      component: PostPlace
    }
  ]
})
