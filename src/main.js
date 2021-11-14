import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from "./components/Home.vue";
import DetalleSerie from "./components/DetalleSerie.vue";
import DetallePersonajes from "./components/DetallePersonajes.vue"

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path:"/detalleserie/:id", component: DetalleSerie},
    { path: "/personajes/:id", component: DetallePersonajes}
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
