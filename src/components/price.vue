<template>
    <div class="price">
        <div class="unitPrice">
            <span>单价 ￥{{product.price}}</span>
            <van-stepper 
                v-model="value" 
                integer
                @plus="onplus"
                @minus="onminus"
            />
        </div>
        <div class="totalPrice">
            <div class="total">
                合计 ￥
                <span class="totalMoney">{{totalValue}}</span>
            </div>
        <div class="add" @click="addCar">加入购物车</div>
        </div>
    </div>    
</template>

<script>
import Vue from "vue"

export default {
    props:['product'],
    data(){
        return{
            value:1
        }
    },
    computed:{
        totalValue(){
            return this.value*this.product.price;
        }
    },
    methods:{
        onplus(){
            this.value++;
        },
        onminus(){
            this.value--;
        },
        addCar(){
            if(!this.product.count){
                Vue.set(this.product,"count",this.value);
            }else{
                this.product.count+=this.value;
            }
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss">
.price{
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
</style>