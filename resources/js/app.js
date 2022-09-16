require('./bootstrap');

// import Vue from 'vue'
// import VueRouter from 'vue-router';
// import RouterView from './components/RouterView';
// import Routes from './routes';
// Vue.config.productionTip = false;
// Vue.use(VueRouter);
// const app = new Vue({
//     el: '#app',
//     router: new VueRouter(Routes)
//     // router: Routes,
//     // render: h => h(RouterView),
// });



import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router/routes';
import store from './store';
import Vuex from 'vuex';
import axios from 'axios'

import '../css/app.css';

Vue.use(Vuex)
Vue.config.productionTip = false;
Vue.use(VueRouter, axios);

// new Vue({
//     router: new VueRouter(routes),
//     render: (h) => h(App),
// }).$mount('#app');


// const app = new Vue({
//     el: '#app',
//     router: new VueRouter(routes),
//     render: (h) => h(App)
// });

new Vue({
    el:'#app',
    store: store,
    render: h => h(App),
    router: routes,
})