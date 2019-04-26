<template>
   <footer>
       <router-link  
       v-for="item in navlist"
       :key="item.href"
       :to='item.href'
       active-class="active"><van-icon :name="item.icon" size="28px"/>{{item.id}}</router-link>
   </footer>
</template>

<script>
export default {
    data(){
        return{
            navlist:[
                {id:'首页',icon:'fire',href:'/msghome'},
                {id:'订单',icon:'bag',href:'/shoppingcart'},
                {id:'我的',icon:'manager',href:'/my'}
            ]
        }
    }
}
</script>

<style lang="less">
   footer{
    position: fixed;
    width: 100%;
    height: 52px;
    z-index: 9999;
    bottom: 0;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
     a{
        display: flex;
        flex-direction: column;
        align-items: center;
        .iconfont{
            font-size: 24px;
        }
        &.active{
         color: #ff6700;
     }
     }
     
   } 
</style>
