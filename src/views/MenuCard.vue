<template>
    <div class="MenuCard">
        <headerNav :title="title"></headerNav>
        <div class="poster"  ></div>
        <div class="introduction">
            <span class="productName">双层安格斯厚牛菠萝堡套餐</span>
            <span class="englishName">Thick Angus Double Beef Burger with pineapple</span>
            <span class="intro">12mm厚切菠萝搭配16mm厚制牛肉饼，口味丰富而又清新不油腻，酸甜果味与双重肉感的味觉三重奏。搭配椰子水水饮与薯条，3件套就能满足吃一顿。</span>
        </div>
        <div class="snack">
            <horizontalScroll :items='snackItems'></horizontalScroll>
        </div>
        <div class="drink">
           <horizontalScroll :items='drinkItems'></horizontalScroll>
        </div>
        <div class="stapleFood">
            <span>主食</span>
            <div class="food"></div>
            <div class="foodName">双层安格斯厚牛菠萝堡套餐</div>
        </div>
        <div class="Price">
              <div class="unitPrice">
                  <span>单价 ￥40</span>
                  <van-stepper v-model="value" />
              </div>
              <div class="totalPrice">
                  <div class="total">
                      合计 ￥
                      <span class="totalMoney">40</span>
                  </div>
                  <div class="add">加入购物车</div>
              </div>
        </div>
    </div>
</template>
<script>
import headerNav from '../components/headerNav'
import horizontalScroll from '../components/horizontalScroll'

export default {
    components:{headerNav,horizontalScroll},
    data(){
        return{
            title:"双层安格斯厚牛菠萝堡套餐",
            value:1,
            snackItems:[
                {
                    name:"",
                    img:"http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2017/09/201709121712579051.png"
                },
                                {
                    name:"",
                    img:"http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2017/09/201709121712579051.png"
                },
                                {
                    name:"",
                    img:"http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/10/201510282052093110.png"
                },
                                {
                    name:"",
                    img:"http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2016/10/201610141806169974.png"
                },
            ],
            drinkItems:[
                {
                    name:"",
                    img:"http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2019/10/201910101704455569.png"
                },
                {
                    name:"",
                    img:"http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061811257892.png"
                },
                                {
                    name:"",
                    img:"http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061811032770.png"
                },
                                {
                    name:"",
                    img:"http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061817247401.png"
                },

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
<style lang="scss">
.MenuCard{
    background-color: #f8f8f8;
    .poster{
        height: 58vw;
        margin-top: 12vw;
        background-size: 100%;
        background-image: url('../assets/img/menuCard/安格斯/安格斯厚牛培根堡套餐(poster).png');
    }
    .introduction{
        height: 25vw;
        background-color: #f8f8f8;
        padding: 8vw 5vw;
        display: flex;
        flex-direction: column;
        .productName{
            line-height: 8vw;
            font-size: 5.5vw;
            font-weight: 500;
        }
        .intro{
            margin-top: 5vw;
            font-size: 2.8vw;
            line-height: 4vw;
        }
    }
    .stapleFood{
        height: 60vw;
        margin-bottom: 30vw;
        padding: 5vw 6vw;
        border-top: 1px solid #adacac;  
        background-color: #fff;
        .food{
            background-color: pink;
            margin:8vw auto;
            width: 30vw;
            height: 30vw;
            background: url('http://localhost:80/mcdonald/assets/img/hamburger/双层安格斯厚牛芝士堡1.png') no-repeat center; 
            background-size: 100%;
        }
        .foodName{
            text-align: center;
            margin:auto;
        }
    }
    .Price{
        width: 100%;
        height: 30vw;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        z-index:5;
        .unitPrice{
            height: 10vw;
            border:1px solid #adacac;
            border-style: solid none;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 6vw;
        }
        .totalPrice{
            height: 20vw;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 6vw;
            .totalMoney{
                font-size: 6vw;
                font-weight: 500;
            }
            .add{
                width: 30vw;
                height: 9vw;
                background-color: #FFC836;
                border-radius: 4.5vw;
                line-height: 9vw;
                text-align: center;
            }
        }

    }
}

</style>