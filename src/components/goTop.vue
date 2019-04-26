<template>
    <div >
        <a href="javascript:;" class="site-to-top"  @click="goTop">
        <van-icon name="upgrade" size="40px"/></a>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showTopicon:false
        }
    },
    methods:{
        goTop(){
            let content=document.querySelector('.content')
            let scrollTop1=content.scrollTop
            let ispeed = Math.floor(-scrollTop1 / 10)
            let timer=setInterval(() => {
                content.scrollTop = scrollTop1 + ispeed;
                scrollTop1 =scrollTop1 + ispeed;
                if(scrollTop1 <= 0){
                    clearInterval(timer)
                }
            }, 16);
    }
    }
}
</script>

<style lang="less">
    .site-to-top{
        position: fixed;
        display: block;
        bottom: 120px;
        right:20px;
        z-index: 999;
        .van-icon{
            border-radius: 50%;
            background-color: white;
        }
    }
</style>