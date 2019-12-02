<template>
    <div class="orderCard" @click="toMenuDetail">
            <div class="order">
              <span>请关注您的取餐码</span>
              <span class="number">123456</span>
            </div>
            <div class="detail" >
                 <span>鸡腿堡</span> 
                <span>jiage</span>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
       methods:{
        toMenuDetail(){
            this.$router.push('/index/user/administrator/allOrder/orderDetail')
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
        .order{
            margin:0 auto;
            width: 90vw; 
            border:1px solid #adacac;
            border-style: solid none;
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