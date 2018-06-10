import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { routes } from './routes'
import store from './store/store'
import iziToast from './plugins/iziToastPlugin'

Vue.config.productionTip = false

/** HTTP */
axios.defaults.baseURL = `https://vuejs-udemy-1e36b.firebaseio.com/`
Vue.use(VueAxios, axios)

/** Routing */
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

/** Custom plugins */
Vue.use(iziToast)

/** Custom filters */
Vue.filter('currency', (value) =>
'R$ ' + value.toLocaleString()
)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
