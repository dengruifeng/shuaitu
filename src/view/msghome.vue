<template>
  <div class="content">
    <gotop v-show="isShowAccount" ></gotop>
    <div>
      <div class="banner">
        <div class="positionTop" :class="{bColor:sTop}">
          <van-search placeholder="武将名，满红/满进阶，战法名" v-model="value" background>
          </van-search>
          <a href class="mm" >
            <van-icon name="envelop-o" color="white" size="18px" :style="{color:sTop ? '#1e1e1e':'white'}"/>
          </a>
        </div>
        <img src="./../../public/img/u=1054499828,763628190&fm=173&app=49&f=JPEG.jpg" alt="英雄" srcset>
      </div>
      <div class="mengxin">
        <a href="" class="page-tips clickable">
          <span class="text">萌新不知道怎么交易？点击这里获取帮助</span>
          <van-icon name="arrow" color="#e74e4b" size="18px"/>
        </a>
      </div>
      <div class="shortcuts" style="margin: 5px 0px 0px;">
        <a href class>
          <van-icon name="balance-list-o" color="#000" size="22px"/>
          <span class="icon-text">登记出售</span>
        </a>
        <span class="sep-line"></span>
        <a href class stat="tid: main_1">
          <van-icon name="bag-o" color="#000" size="22px"/>
          <span class="icon-text">全部商品</span>
        </a>
      </div>
      <div class="index-quick">
        <div class="index-quick-list">
          <table>
            <tr>
              <td>
                <a
                  href="/cgi/mweb/pl/role?view_loc=reco_topic&amp;is_full_out_print_hero=1"
                  class="topic-1 clearfix"
                >
                  <p class="name">将星聚首</p>
                  <span class="desc">绝版武将全收集</span>
                </a>
              </td>
              <td>
                <a
                  href="/cgi/mweb/pl/role?view_loc=reco_topic&amp;game_compete_serverid=8001"
                  class="topic-2 clearfix"
                >
                  <p class="name">运筹帷幄</p>
                  <span class="desc">备战区中待明主</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="/cgi/mweb/pl/role?view_loc=reco_topic&amp;five_star_full_advance_hero_count=10"
                  class="topic-3 clearfix"
                  stat="tid: main_3"
                >
                  <p class="name">群雄并起</p>
                  <span class="desc">众多满红五星武将</span>
                </a>
              </td>
              <td>
                <a
                  href="ww"
                  class="topic-4 clearfix"
                  stat="tid: main_3"
                >
                  <p class="name">熟读兵法</p>
                  <span class="desc">拥有全部典藏典籍</span>
                </a>
              </td>
            </tr>
          </table>
        </div>
        <h2 class="item">
          <span class="con">最新上架</span>
        </h2>
      </div>
    </div>
    <div class="shoppingIf">
      <div v-for="item in resultMsg"
      :key="item.expire_remain_seconds"
      class="info">
        <van-row>
          <van-col span="16">
            {{item.area_name}}
            <span class="server_name">{{item.server_name}}
            <img 
            v-if="item.platform_type == 1 "
            src="./../../public/img/apple.svg" alt="苹果" class="icon">
            <img v-else src="./../../public/img/app.svg" alt="安卓" class="icon" >
            </span>
          </van-col>
          <van-col span="8">{{(item.price/100).toFixed(2)}}</van-col>
        </van-row>
        <van-row>
          <van-col span="16">
            <ul>
              <li>{{item.desc_sumup_short.split(' ')[0]}}</li>
              <li>{{item.desc_sumup_short.split(' ')[1]}}</li>
            </ul>
          </van-col>
          <van-col span="8">{{item.collect_num + '人收藏'}}</van-col>
        </van-row>
        <van-row>
          <van-col span="16">
            <ul>
              <li v-for="(item1,index) in item.highlights"
              :key="index"
              >{{item1}}</li>
            
            </ul>
          </van-col>
        </van-row>
        <ul class="wujiang">
          <li v-for="(item2,i) in item.other_info.top_cards"
          :key="item2.i"
          >
            <div class="item1">
              <div class="wjinfo">
                <img :src="item2.icon" alt="武将">
                <div class="bg"></div>
                <div class="state-wrap">
                  <i v-if="item2.country == 1" class="icon_font1">汉</i>
                  <i v-else-if="item2.country == 2" class="icon_font2">魏</i>
                  <i v-else-if="item2.country == 3" class="icon_font3">蜀</i>
                  <i v-else-if="item2.country == 4" class="icon_font4">吴</i>
                  <i v-else-if="item2.country == 5" class="icon_font5">群</i>
                </div>
                <div class="best-wrap">
                  <i v-if="item2.awake_state == 1">极</i>
                </div>
                <div class="sp-wrap">
                  <i v-if="item2.season == 'N'">N</i>
                  <i v-if="item2.season == 'S2'" class="icon_s2">S2</i>
                  <i v-if="item2.season == 'S3'" class="icon_s3">S3</i>
                  <i v-if="item2.season == 'SP'" class="icon_sp">SP</i>
                  <i v-if="item2.season == 'XP'" class="icon_xp">XP</i>
                </div>
                <div class="stars">
                  <div class="stars-wrap">
                    <!-- key报错 -->
                    <span v-for="n in item2.advance_num"  class="star up">
                      <i class="ico">⭐</i>
                    </span>
                    <span v-for="n in 5-item2.advance_num"   class="star up">
                      <i>⭐</i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="wjnmae">{{item2.name}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="logAll">
      <a href="">查看全部</a>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import {mapActions,mapState,mapGetters} from "vuex"
import gotop  from '../components/goTop.vue'
export default {
  data() {
    return {
      shoppingMsg: [],
      value: "",
      sTop:false,
      isShowAccount:false
    };
  },
  computed: {
    ...mapGetters([
        'resultMsg'      
    ]
    )
  },
  methods: {
    scrollTop() {
      //注意监听的是元素滚动条
      let content1=document.querySelector('.content')
      let scrollTop=content1.scrollTop;
      //控制返回顶部
      scrollTop > 200 ? this.isShowAccount= true : this.isShowAccount= false
      if(scrollTop > 100){
        this.sTop = true 
      }else{
        this.sTop = false
      }
    }
  },
  mounted() {
    //监听元素滚动条
    let content=document.querySelector('.content')
    content.addEventListener('scroll',this.scrollTop)
  },
  created() {
    //在vuex异步发送请求，并存于vuex
    this.$store.dispatch('getMsg')
  },
  components:{
    gotop
  },
  //记得要移除滚动事件
  beforeDestroy() {
    window.removeEventListener('scroll',this.scrollTop)
  },
};
</script>

<style lang="less">
.content{
    position: fixed;
    bottom: 53px;
    top: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
  .banner {
    width: 100%;
    height: 220px;
    position: relative;
    .positionTop{
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      width:100%;
      height:55px;
      z-index:999;
      &.bColor{
        background-color:white;
      }
      .van-search {
        position:absolute;
        top: 0;
        right: 0;
        left: 0;
        margin-right: 12%;
      }
      .mm {
        display: inline-block;
        position: absolute;
        top: 18px;
        right: 7%;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mengxin {
    width: 100%;
    a {
      font-size: 12px;
      padding: 10px;
      line-height: 1.5;
      color: #e74e4b;
      background: #fffaef;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .shortcuts {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    a {
      display: block;
      flex: 1;
      text-align: center;
      color: #1e1e1e;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sep-line {
      width: 1px;
      height: 1.5em;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .index-quick-list table {
    width: 100%;
    border-collapse: collapse;
    td {
      text-align: left;
      width: 50%;
      .clearfix {
        display: block;
        color: #709792;
        background-color: #f5fcfb;
        display: block;
        height: 85px;
        padding: 10px;
        line-height: 1.6;
        color: #1e1e1e;
        background-repeat: no-repeat;
        background-position: 100%;
        background-size: auto 100%;
      }
      .topic-1 {
        color: #709792;
        background-color: #f5fcfb;
        background-image: url("./../../public/img/topic-1.png");
      }
      .topic-2 {
        color: #ce7c28;
        background-color: #f5fcfb;
        background-image: url("./../../public/img/topic-2.png");
      }
      .topic-3 {
        color: pink;
        background-color: #f5fcfb;
        background-image: url("./../../public/img/topic-3.png");
      }
      .topic-4 {
        color: #5aa563;
        background-color: #f5fcfb;
        background-image: url("./../../public/img/topic-4.png");
      }
    }
  }
  .index-quick h2 {
    padding: 10px;
    flex: 1;
    text-align: center;
    position: relative;
    .con {
      position: relative;
      line-height: 1;
      font-size: 16px;
      font-weight: 700;
    }
    .con:before,
    .con:after {
      content: "";
      position: absolute;
      bottom: -12px;
      width: 100px;
      height: 40px;
      background: url("./../../public/img/ll.png") no-repeat 50%;
      background-size: 100% 100%;
    }
    .con:before {
      right: 100%;
      margin-right: 10px;
    }
    .con:after {
      left: 100%;
      margin-left: 10px;
      background-image: url("./../../public/img/rr.png");
    }
  }
  .item:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    overflow: hidden;
    background: pink;
  }
  .shoppingIf {
    .info {
      padding: 15px 10px;
      text-overflow: ellipsis;
      white-space: nowrap;
      .van-row {
        padding: 4px 0;
      }
      .van-row:nth-child(1) {
        .van-col--16 {
          color: #1e1e1e;
          font-size: 18px;
          .server_name{
            line-height: 20px;
            font-size: 12px;
            color: #888;
          }
        }
        .van-col--8 {
          font-weight: 700;
          color: #e74e4b;
          text-align: right;
        }
        .icon {
          display: inline-block;
          width: 15px;
          height: 15px;
        }
      }
      .van-row:nth-child(2) {
        .van-col--16 ul {
          display: flex;
          li:nth-child(2) {
            padding-left: 12px;
          }
        }
        .van-col--8 {
          text-align: right;
        }
      }
      .van-row:nth-child(3) {
        .van-col--16 ul {
          display: flex;
          li {
            font-size: 12px;
            color: #1e1e1e;
            background: #f1f1f1;
            padding-left: 10px
          }
          li:nth-child(1){
            padding: 0;
          }
        }
      }
      .wujiang {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        li {
          width: 18.5%;
          .item1 {
            width: 100%;
            .wjinfo {
              width: 100%;
              position: relative;
              height: 0;
              padding-bottom: 130%;
              img {
                position: absolute;
                width: 100%;
                height: 100%;
              }
              .bg {
                background-image: url("./../../public/img/beij.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                position: absolute;
                width: 100%;
                height: 100%;
              }
              .state-wrap {
                position: absolute;
                top: 0;
                left: 0;
                width: 23.4375%;
                i {
                  display: block;
                  width: 100%;
                  height: 0;
                  padding-bottom: 100%;
                  text-indent: -9999px;
                  background: url("./../../public/img/qun.png") no-repeat center;
                  background-size: 100% 100%;
                }
                .icon_font1{
                  background: url("./../../public/img/han.png") no-repeat center;
                  background-size: 100% 100%;
                }
                .icon_font2{
                  background: url("./../../public/img/wei.png") no-repeat center;
                  background-size: 100% 100%;
                }
                .icon_font3{
                  background: url("./../../public/img/shu.png") no-repeat center;
                  background-size: 100% 100%;
                }
                .icon_font4{
                  background: url("./../../public/img/wu.png") no-repeat center;
                  background-size: 100% 100%;
                }
                .icon_font5{
                  background: url("./../../public/img/qun.png") no-repeat center;
                  background-size: 100% 100%;
                }


              }
              .best-wrap {
                position: absolute;
                top: 0;
                right: 0;
                width: 35.15625%;
                i {
                  display: block;
                  width: 100%;
                  height: 0;
                  padding-bottom: 100%;
                  text-indent: -9999px;
                  background: url("./../../public/img/best.png") no-repeat;
                  background-size: 100% 100%;
                  margin: -26% 0 0 26%;
                }
              }
              .sp-wrap {
                position: absolute;
                bottom: 13.14285714%;
                right: 2.8%;
                width: 39.0625%;
                .icon_s2{
                  background-image: url('./../../public/img/s2.png')
                }
                .icon_s3{
                  background-image: url('./../../public/img/s3.png')
                }
                .icon_sp{
                  background-image: url('./../../public/img/sp.png')
                }
                .icon_xp{
                  background-image: url('./../../public/img/xp.png')
                }
                i {
                  display: block;
                  width: 100%;
                  height: 0;
                  padding-bottom: 60%;
                  text-indent: -9999px;
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                }
              }
              .stars{
                position: absolute;
                width: 100%;
                height: 0;
                padding-bottom: 14.0625%;
                bottom: 2%;
                left: 0;
                .stars-wrap{
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  line-height: 0;
                  display: flex;
                  justify-content: center;
                  .star {
                    display: inline-block;
                    vertical-align: top;
                    height: 100%;
                    margin-right: 2.34375%;
                    width: 14.0625%;
                    i{
                          display: block;
                          width: 100%;
                          height: 0;
                          padding-bottom: 100%;
                          text-indent: -9999px;
                          background: url('./../../public/img/xxx.png') no-repeat;
                          background-size: 100% 100%;
                    }
                    .ico{
                          background: url('./../../public/img/xx.png') no-repeat;
                          background-size: 100% 100%;
                    }
                  }
                }
              }
            }
            .wjnmae {
              line-height: 1.4;
              padding: 2px 0;
              font-size: 12px;
              text-align: center;
              color: #690751;
            }
          }
        }
      }
    }
    .info:after {
      content: "";
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      height: 1px;
      overflow: hidden;
      background: pink;
    }
  }
  .logAll{
    width: 100%;
    padding: 10px 0;
    a{
      display: block;
      margin: 0 auto;
      text-align: center;
      width: 100px;
      height: 26px;
      border-radius: 10px;
      font-size: 16px;
      color: #1e1e1e;
      border: 1px solid #e5e5e5;
    }
  }
}
</style>
