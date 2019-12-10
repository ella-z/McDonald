<template>
    <div class="orderCard" @click="toMenuDetail">
            <div class="order">
              <span>订单号</span>
              <span class="number">{{orderId}}</span>
            </div>
            <div class="detail" >
                 <span>{{firstFood}} 共{{foodCount}}件</span> 
                <span>￥{{totalPrice}}</span>
            </div>
    </div>
</template>

<script>
export default {
    props:['orderId',"getMealTime","foodList"],
    data(){
        return{
            foodCount:this.foodList.length,
            firstFood:this.foodList[0].name
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
    },
    methods:{
        toMenuDetail(){
            this.$router.push({path:'/index/user/administratorIndex/allOrder/orderDetail',query:{
                foodList:this.foodList,
                getMealTime:this.getMealTime,
                orderId:this.orderId
            }});
        }
    }
}
</script>

<style lang="scss">
.orderCard{
        width: 100vw;
        height: 35vw;
        background-color: #fff;
        padding-top: 3vw;
        margin-bottom: 5vw;
        .order{
            margin:0 auto;
            width: 90vw; 
            border-bottom:1px solid #adacac;
            height: 25vw;
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
        .detail{
            width: 90vw;
            height: 8vw;
            margin:auto;
            display: flex;
            font-display: row;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>