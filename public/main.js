import Vue from 'vue'
import App from './App.vue'
import router from './router'

//autosize textarea
import TextareaAutosize from 'vue-textarea-autosize'
 
Vue.use(TextareaAutosize)

//ANIMATION ON SCREEN (AOS)
import AOS from 'aos'
import 'aos/dist/aos.css'

//storage
import VueLocalStorage from 'vue-localstorage'
import VueSessionStorage from 'vue-sessionstorage'


Vue.use(VueSessionStorage)
Vue.use(VueLocalStorage)

//bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
