<template>
    <div class="discover">
        <div class="header">
            超值好礼
        </div>
        <div class="Card">
            <div class="want MR" @click="overflow">
                <img src='../views/img/discover/我要超值.png'/>
                <span>我要超值</span>
                物超所值，就点这
            </div>
            <div class="want" @click="gift">
                <img src='../views/img/discover/我要送礼.png'/>
                <span>我要送礼</span>
                纠结送啥，就点这
            </div>
        </div>
        <div class="recommend">
            <div class="selection">精选推荐</div>
            <miniCard :miniCard="miniCard[0]"></miniCard>
            <miniCard :miniCard="miniCard[1]"></miniCard>
            <mealCard :mealCard="mealCard[0]"></mealCard>
            <miniCard :miniCard="miniCard[2]"></miniCard>
            <mealCard :mealCard="mealCard[1]"></mealCard>
        </div>
        <cart></cart>
    </div>
</template>
<script>
import miniCard from './miniCard'
import mealCard from './mealCard'
import cart from './cart'

export default {
    components:{
        miniCard,
        mealCard,
        cart
    },
   data(){
       return{
            miniCard:[
                {
                    name:"早餐频次卡-10份板烧鸡腿麦满分组合",
                    src:require('../views/img/discover/板烧鸡腿堡组合套餐.png')
                },
                {
                    name:"早餐频次卡-脆薯饼满分早餐券",
                    src:require('../views/img/discover/薯饼10次券.png')
                },
                {
                    name:"20份小杯鲜煮咖啡",
                    src:require('../views/img/discover/咖啡达人卡.png')
                }
            ],
            mealCard:[
                  {
                    src1:require('../views/img/discover/88元超值购.png'),
                    src2:require('../views/img/discover/88辣翅达人卡.png'),
                    src3:require('../views/img/discover/88麦旋风乐享卡.png'),
                    name1:"88辣翅达人卡",
                    price1:"￥88.00",
                    discountPrice1:"￥94.50",
                    name2:"88麦旋风乐享卡",
                     price2:"￥88.00",
                    discountPrice2:"￥125.00",
                },
                {
                    src1:require('../views/img/discover/麦乐送畅点卡.png'),
                    src2:require('../views/img/discover/辣翅畅点卡.png'),
                    src3:require('../views/img/discover/牛气冲天卡.png'),
                    name1:"6.6元麦辣鸡翅5次券",
                    price1:"￥33.00",
                    discountPrice1:"￥57.50",
                    name2:"36元双吉薯条3次券",
                     price2:"￥108.00",
                    discountPrice2:"￥141.00",
                }
            ]
       }
   },
   methods:{
       overflow(){
           this.$router.push({path:'/want',query:{mealCard:this.mealCard,title:"我要超值"}});
       },
       gift(){
            this.$router.push({path:'/want',query:{miniCard:this.miniCard,title:"我要送礼"}});
       }
   }
}
</script>
<style lang="scss" scoped>
.MR{
    margin-right: 2vw;
}
.discover{
      background-color: #f8f8f8;
    .header{
        position: fixed;
        top:0;
        z-index: 5;
        height: 14vw;
        width: 100%;
        background-color: #fff;
        line-height: 14vw;
        text-align: center;
        font-size: 2.2vh;
    }
    .Card{
        margin-top: 7vh;
        height: 17vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .want{
            background-color: #fff;
            width: 43vw;
            height: 12vh;
            border-radius: 5px;
            border: 1px solid rgb(212, 212, 212);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1vh;
            font-weight: 200;
            img{
                width: 5vh;
                height: 5vh;
                margin-bottom: 1vh;
            }
            span{
                margin:0.5vh 0;
                font-size: 1.8vh;
            }
        }
    }
    .recommend{
        padding:0 5%;
        margin-bottom: 15vw;
        .selection{
            font-size: 2vh;
            font-weight: 700;
            margin:1.5vh 0;
        }
    }
}
</style>