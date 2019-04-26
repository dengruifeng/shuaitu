<template>
    <div>
        <div class="navheaser">
            <van-nav-bar title="登录" left-text="" left-arrow>
            <van-icon name="home-o" slot="right" size="20px" />
            </van-nav-bar>
        </div>
        <van-tabs @click="onClick">
            <van-tab title="网易邮箱帐号登录">
                <div>
                    <van-cell-group>
                        <van-field  placeholder="用户名" />
                    </van-cell-group>
                    <van-cell-group>
                        <van-field  placeholder="密码" />
                    </van-cell-group>
                </div>
            </van-tab>
            <van-tab title="网易手机帐号登录">
                <van-cell-group>
                    <van-field  placeholder="手机号" />
                </van-cell-group>
               <van-cell-group>
                    <van-field
                        center
                        clearable
                        label="短信验证码"
                        placeholder="请输入短信验证码"
                    >
                        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                    </van-field>
                </van-cell-group>
            </van-tab>
        </van-tabs>
        
        <van-button disabled type="danger" size="large">登录</van-button>
        <van-checkbox v-model="checked" checked-color="#f53e3a">七天免验证</van-checkbox>
        <div class="wenti">
            <a href="#">遇到问题？</a>
        </div>
    </div>
            
</template>
<script>
export default {
    data(){
        return{
             checked: true
        }
    },
    methods:{
       onClick(){
           console.log(1)
       } 
    }
}
</script>

<style lang="less">


.van-button{
    width: 90%;
    margin:15px ;
    display: flex;
    justify-content: center;
}
.van-checkbox{
    padding-left: 5%;
}
.wenti{
     width: 90%;
     text-align: right;
     height: 14px;
     line-height: 14px;
     font-size: 12px;
     a{
         color: rgb(158, 184, 212);
     }
}
</style>
