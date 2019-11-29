<template>
    <div class="allOrder">
        <div class="orderCard">
            <div class="order">
               <span>鸡腿堡</span> 
                <span>jiage</span>
            </div>
            <div class="detail">订单详情</div>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss" scoped>
.allOrder{
    width: 100vw;
    height: 100vh;
    background-color: #f8f8f8;
    padding-top: 15vw;
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
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            span{
                font-size: 4.5vw;
            }    
        }
        .detail{
            margin:auto;
            width: 90vw; 
            height: 5vw;
        }
    }
}
</style>