<template>
    <div class="orderDetail">
        <headerNav></headerNav>
        <div class="foodCode">
            <span>请关注您的取餐码</span>
            <span class="number">123456</span>
        </div>
        <div class="mealTime">取餐时间：</div>
        <div class="orderList">
            <span class="foodName">123 ￥12</span>
            <span class="amount">x1</span>
        </div>
        <div class="orderList">
            <span class="foodName">123 ￥12</span>
            <span class="amount">x1</span>
        </div>
        <div class="total">
            <span>合计</span>
            <span>$123</span>
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

        }
    }
}
</script>

<style lang="scss">
.orderDetail{   
    padding-top: 15vw;
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
            font-size: 3vw;
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