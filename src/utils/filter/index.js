import Vue from 'vue'

Vue.filter('switch_brand', ( value )=>{
    return value.replace('switch_brand','品牌保证')
})
Vue.filter('switch_Courier', ( value )=>{
    return value.replace('switch_Courier','蜂鸟专送')
})
Vue.filter('switch_newop', ( value )=>{
    return value.replace('switch_newop','新开店铺')
})
Vue.filter('switch_insurance', ( value )=>{
    return value.replace('switch_insurance','外卖保')
})
Vue.filter('switch_punctuality', ( value )=>{
    return value.replace('switch_punctuality','准时达')
})
Vue.filter('switch_invoice', ( value )=>{
    return value.replace('switch_invoice','开发票')
})


Vue.filter('yg', ( value )=>{
    return value.replace('yiguoliaoli','异国料理')
})
Vue.filter('rh', ( value )=>{
    return value.replace('rihanliaoli','日韩料理')
})