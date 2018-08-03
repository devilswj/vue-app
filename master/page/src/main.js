// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelazyload from 'vue-lazyload'

Vue.use(Vuelazyload)
Vue.config.productionTip = false
Vue.directive('lazyload',{
      loading: './assets/img/banner01.jpg', 
    })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
