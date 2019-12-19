<template>
    <div class="orderDetail">
        <headerNav></headerNav>
        <div class="foodCode">
            <span>订单号</span>
            <span class="number">{{orderId}}</span>
        </div>
        <div class="mealTime">取餐时间：{{getMealTime}}</div>
        <ul class="orderList" 
        v-for="(food,index) in foodList"
        :key="index"
        >
            <li class="foodName">{{food.name}} ￥{{food.price}}</li>
            <li class="amount"><i class="iconfont icon">&#xe619;</i>{{food.count}}</li>
        </ul>
        <div class="total">
            <span>合计</span>
            <span>￥{{totalPrice}}</span>
        </div>
    </div>
</template>

<script>
import headerNav from './headerNav'

export default {
    components:{
        headerNav
    },
    data(){
        return{
            foodList:this.$route.query.foodList,
            getMealTime:this.$route.query.getMealTime,
            orderId:this.$route.query.orderId,
        }
    },
    computed:{
        totalPrice(){
            let totalPrice=0;
            for(let i = 0;i<this.foodList.length;i++){
                totalPrice+=this.foodList[i].price*this.foodList[i].count;
            }
            return totalPrice;
        },
    }
}
</script>

<style lang="scss">
.orderDetail{   
    min-height: 100vh;
    padding:15vw 0;
    background-color: #f8f8f8;
    .foodCode{
        width: 100vw;
        height: 30vw;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
            margin-bottom: 2vw;
        }
        .number{
            font-size: 6vw;
        }
    }
    .mealTime{
        margin:2vw 0;
        height: 10vw;
        background-color: #fff;
        font-size: 3.5vw;
        line-height: 10vw;
        padding-left: 5vw;
    }
    .orderList{
        padding: 6vw 4vw;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        .foodName{
            flex:5;
        }
        .amount{
            flex: 1;
            .icon{
                color: #000;
                font-size: 3vw;
            }
        }
        .price{
            flex: 1;
        }
    }
    .total{
        border-top: 1px solid #747373;
        background-color: #fff;
        padding: 3vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}
</style>