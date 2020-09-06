import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from 'router'
import echarts from 'echarts'
import 'utils/filter'

Vue.prototype.$echarts = echarts
Vue.use(VueRouter);
Vue.use(iView);


new Vue({
    router,
    el: '#app',
    render: h => h(App)
});