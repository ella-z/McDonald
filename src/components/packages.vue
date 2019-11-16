<template>
    <div class="packages">
       <div class="header">
            <i class="iconfont icon" @click="back()">&#xe61b;</i>
            <span>88元超值购！</span>
            <span class="share">分享</span>
        </div>
        <div class="poster" >
            <img src="../views/img/discover/88.png" alt="">
        </div>
        <div v-for="(item,index) in combos" :key="index">
            <div class="packages-card" v-for="(good,index) in item.goods" :key="index">
                <div class="intro">
                    <img src="../views/img/discover/橙标.png">
                    {{good.intro}}
                </div>
                <img :src="good.img" class="piture">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
             combos:[
               {
                   name:"88元超值购!",
                   poster:require("../views/img/discover/88.png"),
                   goods:[
                       {
                            intro:"美味嫩滑的鸡翅炸得金黄热辣，刺激滋味瞬间爆棚！",
                            img:require("../views/img/discover/麦辣鸡翅多次券.png"),
                       },
                       {
                            intro:"冰淇淋的香滑与奥利奥饼干的香酥融为一体，创造无限新奇滋味。",
                            img:require("../views/img/discover/奥利奥麦旋风.png"),
                       },
                       {
                            intro:"严格挑选优质鸡肉，秘制蘸料，精密控制火候，锁住肉汁和香味，令外面金黄酥脆，内在鲜嫩多汁。",
                            img:require("../views/img/discover/麦乐鸡多次券.png"),
                       },
                       {
                            intro:"外皮炸得金黄酥脆，内里又保留了鱼肉的鲜嫩多汁。美味鱼肉与滋味沙拉酱配搭，风味独特。",
                            img:require("../views/img/discover/麦香鱼多次.png"),
                       },
                       {
                            intro:"活力满分一整天！",
                            img:require("../views/img/discover/大脆鸡扒麦满分.png"),
                       }
                   ]
               },
               {
                   name:"麦乐送畅点卡",
                   poster:"../views/img/discover/麦乐送畅点卡.png",
                   goods:[
                       {
                           intro:"香而脆的满足感，开启一天的美好！",
                           img:require("../views/img/discover/早餐畅点卡.png")
                       },
                        {
                           intro:"美味嫩滑的鸡翅炸得金黄热辣，刺激滋味瞬间爆棚！",
                           img:require("../views/img/discover/辣翅畅点卡.png")
                       },
                        {
                           intro:"牛肉与双层香软芝士融为一体，加上松软面包及美味酱料，两倍滋味诱惑！",
                            img:require("../views/img/discover/牛气冲天卡.png")
                       },
                        {
                           intro:"鲜辣好滋味辣腿堡+0油添加板烧，多重滋味，一次打动您挑剔的味蕾",
                            img:require("../views/img/discover/就爱吃鸡卡.png")
                       }
                   ]
               }
           ]
        }
    },
    methods:{
        back(){
             this.$router.go(-1);
        }
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

.packages
{
    width: 100vw;
    background-color: #f8f8f8;
    .header{
        position: fixed;
        top:0;
        z-index: 5;
        height: 12vw;
        width: 100vw;
        background-color: #fff;
        font-size: 2.2vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .icon{
            margin-left: 3vw;
        }
        .share{
            margin-right: 4vw;
            font-size: 3vw;
        }
    }
    .poster{
        width: 100vw;
        height: 70vw;
        margin-top: 12vw;
        background-color: pink;
        img{
            width: 100vw;
            height: 70vw;
        }
    }
    .packages-card{
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:3vw;
        .intro{ 
            font-size: 3vw;
            width: 80vw;
            line-height: 3.5vw;
            margin: 3vw 0;
            img{
                margin-right: 1vw;
                width: 3.5vw;
                height: 1.7vw;
            }
        }
        .piture{
          height: 40vw;
           width: 80vw;
           box-shadow:0.7px 0.7px 5px 0px #9D9D9D
        }
    }
}

</style>