<template>
    <div class="shopCar" v-show="isCount">
        <div class="shopCarList" v-show="showList">
            <div class="shopCarList-nav">
                <div>已选产品</div>
                <div class="empty" @click="toempty"><i class="iconfont empty-icon">&#xe635;</i>清空</div>
            </div>
            <ul class="productList">
                <li 
                class="listDetail"
                v-for="(item,index) in foodList"
                :key="index"
                >   
                    <div class="listLeft">
                        <span>{{item.name}}</span>
                        <span class="comboConsist" v-if="item.stapleFoodName">{{item.stapleFoodName}}+{{item.HScrollChecked1}}+{{item.HScrollChecked2}}</span>
                        <span class="productPrice">￥ {{item.price}}</span>
                    </div>
                    <div class="listRight">
                        <i class="iconfont" @click.stop="reduceCar(index)">&#xe620;</i>
                        <span class="itemsCount">{{item.count}}</span>
                        <i class="iconfont" @click.stop="addCar(index)">&#xe626;</i>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mask" v-show="showList" @click="showCarList"></div>
        <div class="shopCarButtom">
            <div class="shopCarLeft">
                <div class="logo" @click="showCarList">
                    <div class="circle">{{itemsCount}}</div>
                </div>
            <div class="totalPrice">￥ {{totalPrice}}</div>
            </div>
            <div class="shopCarRight">
                <div class="addbuttom" @click="toSettlement">
                        选好了
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['foodList','distribution','formatedTime'],
    data(){
        return{
            isCount:false,
            showList:false
        }
    },
    created(){

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
            if(num!==0){
                this.isCount=true;
            }else{
                this.isCount=false;
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
    methods:{
        addCar(index){
            this.foodList[index].count++;
        },
        reduceCar(index){
            this.foodList[index].count--;
        },
        showCarList(){
            this.showList=!this.showList;
        },
        toSettlement(){
            this.$router.push({path:'/settlement',query:{foodList:this.foodList,distribution:this.distribution,formatedTime:this.formatedTime}})
        },
        toempty(){
            sessionStorage.removeItem('list');
            this.$emit('changeList');
        }
    }
}
</script>

<style lang="scss">
.shopCar{
     position: fixed;
     z-index: 6;
     bottom: 0;
     background-color: #fff;
    .shopCarList{
        z-index: 8;
        position: fixed;
        bottom: 15vw;
        .shopCarList-nav{
            height: 10vw;
            background-color: #fff;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 5vw;
            font-size: 3.5vw;
             border-bottom:1px solid #adacac;
            .empty{
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                width: 30vw;
                .empty-icon{
                    color:#000;
                }
            }
        }
    .productList{
            background-color: #fff;
            max-height: 80vw;
            width: 100vw;
            overflow-y: scroll;
            .listDetail{
                height: 25vw;
                border-bottom:1px solid #adacac;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 0 5vw;
                i{
                    color: #000;
                    font-size: 5vw; 
                }
            .listLeft{
                flex:8;
                display: flex;
                flex-direction: column;
                .comboConsist{
                    margin-top: 2vw;
                    font-size: 3vw;
                    color: #adacac;
                }
                .productPrice{
                    margin-top: 2vw;
                }
            }
            .listRight{
                flex:2;
            }
        }  
    }
    }
    .mask{
        background: rgba(0,0,0,0.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        bottom: 15vw;
    }
    .shopCarButtom{
        border-top:1px solid #adacac;
        background-color: #fff;
        width: 100vw;
        height: 15vw;
        z-index: 8;
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
}

</style>