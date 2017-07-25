import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import VueResource from 'vue-resource'
import firebase from './services/firebase'

Vue.use(VueResource)
Vue.use(Vuefire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    place: firebase.database.ref('place')
  },
  router,
  template: '<App/>',
  components: { App }
})
