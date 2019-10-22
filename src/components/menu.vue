<template>
    <div>
        <div class="head">
            <div class="icon" @click="back()">
                <i class="iconfont">&#xe61b;</i>
            </div>
        </div>
        <div class="main">
           <div class="block">
                <el-carousel height="45vw">
                <el-carousel-item v-for="(item,index) in carouselList" :key="index">
                    <img :src="item.src" />
                </el-carousel-item>
                </el-carousel>
            </div>
            <div class="MenuTabs">
                <div class="Tab" ref="Tab">
                    <ul>
                        <li class="search">
                            <i class="iconfont"> &#xe62e;</i>
                            <span>搜索</span>
                        </li>
                        <li :key='index' 
                            v-for="(item,index) in TabList"
                            @click="change(index+1)"
                             :class="{is_active:cur==index+1}">
                             <img :src="item.src" v-show="open==index+1" :class="{drink:item.label==='饮品'}"/>
                             <span  v-html="item.label"> {{item.label}}</span>
                        </li>
                    </ul>
                </div>
                <div class="TabContent" ref="TabContent">
                    <ul class="MenuList" >
                        <li  class="MenuCard" :key="index"
                        v-for="(item,index) in 15">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
    data(){
        return{
            scrollY:0,
            activeName:'1',
            cur:1,
            open:1,
            carouselList:[
                {
                      
                      src:require('../views/img/takeout/takeout1.png')
                 },
                {
                      src:require('../views/img/takeout/takeout2.png')
                 },
                {
                      src:require('../views/img/takeout/takeout3.png')
                 },
                {
                      src:require('../views/img/takeout/takeout4.png')
                 },
            ],
            TabList:[
                {
                     src:require('../views/img/MenuTabsIcon/雪人奇缘.png'),
                   label:"雪人<br />奇缘<br />全系列"
                },
                {
                   src:require('../views/img/MenuTabsIcon/安格斯.png'),
                    label:"安格斯<br />黑金<br />系列"
                },
                 {
                      src:require('../views/img/MenuTabsIcon/超值三件套.png'),
                    label:"超值<br />三件套"
                },
                 {
                    src:require('../views/img/MenuTabsIcon/随心配.png'),
                    label:"随心配<br />1+1=12"
                },
                 {
                     src:require('../views/img/MenuTabsIcon/全家桶.png'),
                    label:"金拱门<br />桶"
                },
                 {
                      src:require('../views/img/MenuTabsIcon/500大卡套餐.png'),
                    label:"500<br />大卡<br />套餐"
                },
                 {
                      src:require('../views/img/MenuTabsIcon/开心乐园.png'),
                    label:"开心<br />乐园餐"
                },
                 {
                      src:require('../views/img/MenuTabsIcon/小吃.png'),
                    label:"小食<br />甜点<br />玩具"
                },
                 {
                      src:require('../views/img/MenuTabsIcon/主食.png'),
                    label:"主食"
                },
                {
                     src:require('../views/img/MenuTabsIcon/饮品.png'),
                    label:"饮品"
                },
            ]
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        change(index){
            this.cur=index;
            this.open=index;
        },
     
    }
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1451681 */
  src: url('//at.alicdn.com/t/font_1451681_a1rz7adghrl.eot');
  src: url('//at.alicdn.com/t/font_1451681_a1rz7adghrl.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1451681_a1rz7adghrl.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1451681_a1rz7adghrl.woff') format('woff'),
  url('//at.alicdn.com/t/font_1451681_a1rz7adghrl.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1451681_a1rz7adghrl.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    font-size: 6vw;
    color: #9D9D9D;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
    
.head{
    height: 10vw;
    width: 100%;
    padding: 2%;
    background-color: #ffffff;
    position: fixed;
    top:0;
    z-index: 999999;
    .icon{
        width: 0vw;
       padding-top: 2%;
    }
}
 .main{
    height: 100%;
    background-color: #F8F8F8;
    margin-top:14%;
    img{
        width: 100vw;
        height: 45vw;
    }
   .TabContent{
        background-color: #F8F8F8;
        width: 84vw;
        height: 236vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        .MenuList{
            padding: 0;
            .MenuCard{
                list-style:none;
                border-radius: 3%;
                box-shadow: 0px 0px 3px 0px #A6A5A1;
                width: 70vw;
                height: 55vw;
                margin-top: 5%;
            }
            }
        
    }
    
}
 
</style>
<style lang='scss'>
 .MenuTabs{
        display: flex;
        flex-direction: row;
         margin-top:3vw; 
    .Tab{
       
        ul{
            padding: 0;
            margin: 0;
            li{
                background-color: #fff;
                list-style: none;
                border-bottom:1px solid #F8F8F8;
                width: 19vw;
                height: 20vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                span{
                      color: #2c2b2b;
                      font-size: 3.5vw;
                      text-align: center
                  }
            }
            .search{
                  i{
                    font-size: 5vw;
                    color: #000;
                    }
                  
            }
            .is_active{
                border-left:1vw solid #FFC836;
                background-color: #F8F8F8 ;
                height: 33vw;
                 img{
                    width: 8vw;
                    height: 8vw;
                    margin:10% 0; 
                }
                .drink{
                    width: 5vw;
                    height: 10vw;
                }
            }
            
        }
    }
    }
</style>