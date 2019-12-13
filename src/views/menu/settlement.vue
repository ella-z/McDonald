<template>
    <div class="settlement">
        <headerNav ></headerNav>  
        <van-overlay :show="show" class="wrong">
             <div class="iwrong">
                 <i class="iconfont">&#xe685;</i>
                 <span>请先登录</span>
                 <div class="comfirmation" @click="login">去登录</div>
             </div>
        </van-overlay>
        <div class="mealTime">
            <span v-show="iseatIn">取餐时间</span>
            <div class="eatIn" v-show="iseatIn">
                <van-radio-group v-model="timeRadio">
                    <div class="eatIn-radio">
                        <van-radio name="time1" checked-color="#FFC836" @click="getTimeRadioVal('现在取餐')" >现在取餐</van-radio>
                        <van-radio name="time2" checked-color="#FFC836" @click="getTimeRadioVal('10分钟之后取餐')" >10分钟之后取餐</van-radio>
                    </div>
                    <div class="eatIn-radio">
                        <van-radio name="time3" checked-color="#FFC836" @click="getTimeRadioVal('20分钟之后取餐')" >20分钟之后取餐</van-radio>
                        <van-radio name="time4" checked-color="#FFC836" @click="getTimeRadioVal('30分钟之后取餐')" >30分钟之后取餐</van-radio>
                    </div>
                </van-radio-group>
            </div>
            <span v-show="istakeOut">预计到达时间</span>
            <div class="takeOut" v-show="istakeOut">
                <span>{{arriveTime}}</span>
            </div>
        </div>
        <div class="mealWay" v-show="iseatIn">
            <span>选择就餐方式</span>
            <van-radio-group v-model="wayRadio">
                <van-cell-group>
                    <van-cell title="堂食" clickable @click="radio = '1'">
                    <van-radio slot="right-icon" name="way1" checked-color="#FFC836" @click="getWayRadioVal('堂食')"/>
                    </van-cell>
                    <van-cell title="外带" clickable @click="radio = '2'">
                    <van-radio slot="right-icon" name="way2" checked-color="#FFC836" @click="getWayRadioVal('外带')"/>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </div>
        <div class="settlementList">
            <ul>
                <li
                    class="settlementLi"
                    v-for="(item,index) in foodList"
                    :key="index"
                >
                <div class="listLeft">
                        <span>{{item.name}}</span>
                        <span class="productPrice">￥ {{item.price}}</span>
                    </div>
                    <div class="listRight">
                        <i class="iconfont">&#xe619;</i>
                        <span class="itemsCount">{{item.count}}</span>
                    </div>
                </li>
                <li class="settlementLi">
                    <div class="listLeft">合计</div>
                    <div class="listRight">￥ {{totalPrice}}</div>
                </li>
            </ul>
        </div>
        <div class="payment" @click="topay">
            <div class="paymenyLeft">合计￥ {{totalPrice}}</div>
            <div class="paymenyRight">去支付</div>
        </div>
      
       
    </div>    
</template>

<script>
import  headerNav from '../../components/headerNav'
export default {
    components:{
        headerNav
    },
    data(){
        return{
            timeRadio:"time1",
            wayRadio:"way1",
            foodList:this.$route.query.foodList,
            distribution:this.$route.query.distribution,
            formatedTime:this.$route.query.formatedTime,
            isWrong:false,
            show:false,
            valueTime:'',
            valueWay:'',
            iseatIn:true,
            istakeOut:false,
            takeOutTime:'',
            isReserve:this.$store.state.isReserve
        }
    },
    watch:{

    },
    computed:{
        totalPrice(){
            let totalPrice=0;
            for(let i=0;i<this.foodList.length;i++){
                totalPrice+=this.foodList[i].count*this.foodList[i].price;
            }
            return totalPrice;
        },
        arriveTime(){
                let date=new Date();
                let y = date.getFullYear().toString();
                let m = (date.getMonth()+1).toString();
                let d = date.getDate();
                let hh = date.getHours()<10 ? '0'+date.getHours() : date.getHours();
                let mf = date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes();
                mf=parseInt(mf);
                if(this.iseatIn){
                    switch(this.takeOutTime){
                        case '现在取餐':  
                            break;
                        case '10分钟之后取餐':
                            mf+=10;          
                            break;
                        case '20分钟之后取餐':
                            mf+=20;              
                            break;
                        case '30分钟之后取餐':
                            mf+=30;              
                            break;
                    }
                }else{
                    mf+=30;
                }
                if(mf>=60){
                    hh++;
                    mf-=60;
                    if(mf<10){
                        mf='0'+mf.toString();
                    }else if(hh>=24){
                        hh='00';
                        d++;
                    }
                }
                hh=hh.toString();
                mf=mf.toString();
                d=d.toString();
                let arriveTime='';
                if(this.isReserve===false){
                    arriveTime=y+'/'+m+'/'+d+' '+hh+':'+mf;
                }else{
                    arriveTime=this.formatedTime;
                }
                return arriveTime;
        }
    },
    created(){
        this.getTimeRadioVal('现在取餐');
        this.getWayRadioVal('堂食');
        if(this.distribution==='到店取餐'){
            this.iseatIn=true;
            this.istakeOut=false;
        }else{
            this.iseatIn=false;
            this.istakeOut=true;
        }
    },
    methods:{
        topay(){
            if(window.sessionStorage.account){
                this.$router.push({path:'/payment',query:{
                    valueTime:this.valueTime,
                    valueWay:this.valueWay,
                    distribution:this.distribution,
                    arriveTime:this.arriveTime,
                    foodList:this.foodList}});
                    let that = this;
            }
            else{
                this.show=true;
            }
        },
        login(){
        this.show=false;
        this.$router.push({path:'/index/user/member'});
        this.$store.state.ischecked=3;
        },
        getTimeRadioVal(value){
            this.takeOutTime=value;
            this.valueTime=value;
        },
        getWayRadioVal(value){
            this.valueWay=value;
        }
    },
    
}
</script>

<style lang="scss" scoped>
.settlement{
    background-color: #f8f8f8;
    width: 100vw;
    min-height: 100vh;
    margin-top:13vw;
    .mealTime{
        border-top: 0.5px solid #c2c2c2;
        background-color: #fff;
        height: 30vw;
        font-size: 3.5vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
        padding: 5vw 5vw;
        .eatIn{
            margin-top: 4vw;
            .eatIn-radio{
                font-size: 3.5vw;
                display: flex;
                flex-direction: row;
                margin-bottom: 4vw;
                justify-content: space-between;
            }
        }
        .takeOut{
            margin: 10vw auto ;
            font-size: 6vw;
        }
    }
    .mealWay{
        margin:3vw 0;
        background-color: #fff;
        height: 28vw;
        font-size: 3.5vw;
        padding: 2vw 5vw 0;
    }
    .settlementList{
        background-color: #fff;
        width: 100vw;
        min-height: 10vw;
        margin:4vw 0 20vw;
        .settlementLi{
            border-bottom: 1px solid #c2c2c2;
            height: 20vw;
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
                .productPrice{
                    margin-top: 4vw;
                }
            }
            .listRight{
                flex:2;
            }
        } 
        
    }
    .payment{
        background-color: #fff;
        border-top: 1px solid #c2c2c2;
        height: 15vw;
        width: 90vw;
        position: fixed;
        bottom: 0;
        z-index:2;
        font-size: 5vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 5vw;
        .paymenyRight{
            width: 25vw;
            height: 10vw;
            border-radius: 5vw;
            background-color: #FFC836;
            line-height: 10vw;
            text-align: center;
        }
    }
    .wrong{
        z-index:3;
        display: flex;
        align-items: center;
        justify-content: center;
        .iwrong{
            background-color: #fff;
            width: 70vw;
            height: 45vw;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            border-radius: 2vw;
            i{
                font-size: 10vw;
                color: #FFC836;
            }
            span{
                font-size: 5vw;
            }
            .comfirmation{
                background-color: #FFC836;
                width: 25vw;
                height: 9vw;
                line-height: 8vw;
                text-align: center;
                border-radius: 5vw;
            }
        }
    }
}
</style>