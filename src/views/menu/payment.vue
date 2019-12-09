<template>
    <div class="payment">
        <div class="markedWord">
            <i class="iconfont icon">&#xe744;</i>
            <span>已成功下单</span>
        </div>
        <div class="hint">
            <span>订单号：1232</span>
            <span v-show="isEatIn">取餐时间：{{valueTime}}</span>
            <span v-show="isEatIn">就餐方式：{{valueWay}}</span>
            <span v-show="isTakeOut">预计到达时间：2019-10-15 00:00</span>
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
            isTakeOut:false,
            isEatIn:true
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
    },
    computed:{

    },
    methods:{
        backIndex(){
            sessionStorage.removeItem('list');
            this.$store.dispatch('getdata');
            this.$router.push('/');
        }
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