<template>
    <div class="administratorIndex">
        <div class="administratorIndex-nav"></div>
        <div class="greeting">管理员，您好</div>
        <div class="choice" @click="toOrder">
            <i class="iconfont ico">&#xe623;</i>
            <span>所有订单</span>
        </div>
         <div class="choice" @click="toStatistics">
            <i class="iconfont ico">&#xe609;</i>
            <span>统计数据</span>
        </div>
        <div class="removal" @click="remove">注销账号</div>
    </div>
</template>

<script>
export default {
        methods:{
        toOrder(){
            this.$router.push('/index/user/administratorIndex/allOrder');
        },
        toStatistics(){
            this.$router.push('/index/user/administratorIndex/statistics');
        },
        remove(){
            sessionStorage.removeItem('account');
            sessionStorage.removeItem('password');
            sessionStorage.removeItem('identity');
            this.$router.push('/index/user/member');
        }
    }
}
</script>

<style lang="scss" scopedz>
.administratorIndex{
    height: 100vh;
    width: 100vw;
    background-color: #f8f8f8;  
    .administratorIndex-nav{
        background-color: #fff;
        width: 100vw;
        height: 12vw;
    }
    .greeting{
        height: 5vw;
        margin:5vw auto 0;
        text-align: center;
    }
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
    .removal{
        width: 40vw;
        height: 10vw;
        margin:0 auto;
        background-color: rgb(245, 199, 72);
        border-radius: 2vw;
        line-height: 10vw;
        margin-top: 20vw;
        text-align: center;
    }
}
</style>