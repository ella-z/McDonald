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
                <div class="Tabs">
                    <ul>
                        <li :key='index' 
                            v-for="(item,index) in 10"
                            @click="change(index+1)"
                             :class="{is_active:cur==index+1}">{{item}}</li>
                    </ul>
                </div>
                <div class="TabContent">
                    <div :key="index" v-for="(item,index) in 10" v-show="cur==index+1">{{item}}</div>
                </div>
            </div>
            <div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            activeName:'1',
            cur:0,
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
            ]
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        change(index){
            this.cur=index;
        }
    }
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1451681 */
  src: url('//at.alicdn.com/t/font_1451681_p658g2xww2i.eot');
  src: url('//at.alicdn.com/t/font_1451681_p658g2xww2i.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1451681_p658g2xww2i.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1451681_p658g2xww2i.woff') format('woff'),
  url('//at.alicdn.com/t/font_1451681_p658g2xww2i.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1451681_p658g2xww2i.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    font-size: 7vw;
    color: #9D9D9D;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
    
.head{
    height: 12vw;
    padding: 2%;
    background-color: #ffffff;
    .icon{
        width: 0vw;
       padding-top: 2%;
    }
}
 .main{
    height: 100%;
    background-color: #F8F8F8;
    img{
        width: 100vw;
        height: 45vw;
    }
    .MenuTabs{
        display: flex;
        flex-direction: row;
         margin-top:3vw; 
    .Tabs{
       
        ul{
            padding: 0;
            margin: 0;
            li{
                background-color: #fff;
                list-style: none;
                border-bottom:1px solid #F8F8F8;
                width: 15vw;
                height: 15vw;
            }
            .is_active{
                border-left:1vw solid #FFC836;
                background-color: #F8F8F8 ;
                height: 28vw;
            }
            
        }
    }
    .TabContent{
        background-color: #F8F8F8;
        width: 84vw;
        height: 100vw;
    }
    }
}
 
</style>
