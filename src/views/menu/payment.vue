<template>
    <div class="payment">
        <div class="markedWord">
            <i class="iconfont icon">&#xe744;</i>
            <span>已成功下单</span>
        </div>
        <div class="hint">
            <span>订单号：{{orderId}}</span>
            <span v-show="isEatIn">取餐时间：{{arriveTime}}</span>
            <span v-show="isEatIn">就餐方式：{{valueWay}}</span>
            <span v-show="isTakeOut">预计到达时间：{{arriveTime}}</span>
        </div>
        <div class="backButtom" @click="backIndex">返回首页</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            valueWay:this.$route.query.valueWay,
            valueTime:this.$route.query.valueTime,
            distribution:this.$route.query.distribution,
            arriveTime:this.$route.query.arriveTime,
            foodList:this.$route.query.foodList,
            isTakeOut:false,
            isEatIn:true,
            num:this.$store.state.num //orderId
        }
    },
    created(){
      if(this.distribution==='到店取餐'){
          this.isEatIn=true;
          this.isTakeOut=false;
      }else{
          this.isEatIn=false;
          this.isTakeOut=true;
      }
      if(window.localStorage.num){
          this.num=window.localStorage.num;
      }
    },
    computed:{
        orderId(){
                let date=new Date();
                let y = date.getFullYear().toString();
                let m = (date.getMonth()+1).toString();
                let d = date.getDate().toString();
                var len = 3;    //显示的长度
                this.num = parseInt(this.num, 10) + 1;
                this.$store.commit('setNum',this.num)
                this.num = this.num.toString();
                while(this.num.length < len) {
                    this.num = '0' + this.num;
                }
                return y+m+d+this.num;
                },
        getMonth(){
                let data=new Date();
                let m =(data.getMonth()+1).toString();
                return m-2;
        } 
    },
    methods:{
        backIndex(){
            let that=this;
            this.axios.post('http://localhost:80/mcdonald/order.php',{
                    'orderId':that.orderId,
                    'account':window.sessionStorage.account,
                    'foodList':that.foodList,
                    'getMealTime':that.arriveTime,
                    'month':that.getMonth
                },{
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then(function(response){
            },function(err){
                console.log(err);
            }) 
            sessionStorage.removeItem('list');
            this.$store.dispatch('getdata');
            this.$router.push('/');
        },
        
    }
}
</script>

<style lang="scss" scoped>
.payment{
    background-color: #fff;
    width: 100vw;
    min-height: 100vh;
     display: flex;
    flex-direction: column;
    align-items: center;
    .markedWord{
        width: 50vw;
        height: 20vw;
        margin:30vw auto 15vw;
        font-size: 6vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .icon{
            color: rgb(38, 185, 38);
            font-size: 10vw;
            margin-right:5vw;
        }
    }
    .hint{
        span{
            display: block;
            margin-bottom: 5vw;
        }
    }
    .backButtom{
        width: 40vw;
        height: 10vw;
        border-radius: 5vw;
        background-color: #FFC836;
        margin-top: 40vw;
        line-height: 10vw;
        text-align: center;
    }
}
</style>