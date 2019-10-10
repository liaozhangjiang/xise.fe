import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from 'router'

Vue.use(VueRouter);
Vue.use(iView);


new Vue({
    router,
    el: '#app',
    render: h => h(App)
});