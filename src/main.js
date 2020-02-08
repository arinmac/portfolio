import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/styles.scss'
import VueRouter from 'vue-router'



Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
