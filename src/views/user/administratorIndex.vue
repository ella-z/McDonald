<template>
    <div class="administratorIndex">
        <div class="choice" @click="toOrder">
            <i class="iconfont ico">&#xe623;</i>
            <span>所有订单</span>
        </div>
         <div class="choice" @click="toStatistics">
            <i class="iconfont ico">&#xe609;</i>
            <span>统计数据</span>
        </div>
    </div>
</template>

<script>
export default {
        methods:{
        toOrder(){
            this.$router.push('/index/user/administrator/allOrder');
        },
        toStatistics(){
            this.$router.push('/index/user/administrator/statistics');
        }
    }
}
</script>

<style lang="scss">
.administratorIndex{
    height: 100vh;
    width: 100vw;
    background-color: #f8f8f8;
    padding-top: 25vw;
    .choice{
        margin: 10vw auto ;
        border-radius: 2vw;
        box-shadow:0.7px 0.7px 5px 0px #9D9D9D;
        width: 40vw;
        height: 40vw;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .ico{
            font-size: 15vw;
            color: rgb(250, 211, 102);
            margin-bottom: 5vw;
        }
    }
}
</style>