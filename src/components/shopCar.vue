<template>
    <div class="shopCar">
        <div class="shopCarLeft">
            <div class="logo">
                <div class="circle">{{itemsCount}}</div>
            </div>
        <div class="totalPrice">￥ {{totalPrice}}</div>
        </div>
        <div class="shopCarRight">
            <div class="addbuttom">
                    选好了
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['foodList'],
    data(){
        return{

        }
    },
    computed:{
        itemsCount(){
            let num=0;
            for(let i=0;i<this.foodList.length;i++){
                num+=this.foodList[i].count;
                if(num>99){
                    return '99+';
                }
            }
            return num;
        },
        totalPrice(){
            let price=0;
            for(let i=0;i<this.foodList.length;i++){
                price+=this.foodList[i].count*this.foodList[i].price;
            }
            return price;
        }
    },
}
</script>

<style lang="scss">
.shopCar{
    background-color: #fff;
    width: 100vw;
    height: 15vw;
    z-index: 5;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    .shopCarLeft{
        flex: 3;
        display: flex;
        flex-direction: row;
        align-items: center;
        .totalPrice{
            font-size: 5vw;
        }
        .logo{
            margin-right: 2vw;
            width: 12vw;
            height: 12vw;
            background-image: url('http://localhost:80/mcdonald/assets/img/MCbag.png');
            background-size: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            .circle{
                min-width: 5vw;
                height: 5vw;
                line-height: 5vw;
                text-align: center;
                border-radius: 50%;
                background-color: #fff;
                border:1px solid #000;
            }
    }
    }
    .shopCarRight{
       flex:1.5;
        .addbuttom{
                width: 20vw;
                height: 10vw;
                font-size: 3.5vw;
                background-color: #FFC836;
                border-radius: 4.5vw;
                line-height: 10vw;
                text-align: center;
        }  
    }

}
</style>