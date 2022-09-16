require('./bootstrap');

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

new Vue({
    el:'#app',
    store: store,
    render: h => h(App),
    router: routes,
})