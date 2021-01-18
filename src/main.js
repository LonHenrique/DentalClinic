import Vue from 'vue';
import App from './App.vue';
import { routes } from './routes/routes.js';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';




import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new VueRouter({
  routes : routes
});

// Servir as rotas da aplicação
Vue.use(VueResource)
// Importando os arquivos de rotas da aplicação
Vue.use(VueRouter)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin) 


new Vue({
  el: '#app',
  router,
  render: h => h(App)
}) 
