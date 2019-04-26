import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由
export default new VueRouter({
    routes:[
        {path: "/",component:()=>import('./view/home.vue'),
    children:[
        {path:"msghome",component:()=>import('./view/msghome')},
        {path:"my",component:()=>import('./view/my.vue')},
        {path:"shoppingcart",component:()=>import('./view/shoppingcart.vue')},
        {path: '', redirect: '/msghome' }        
    ]
    },
   
    ]
})