<template>
    <div class="want">
        <div class="head">
            <div class="icon" @click="back()">
                <i class="iconfont">&#xe61b;</i>
            </div>
            <span>{{title}}</span>
            <div class="share">分享</div>   
        </div>
        <div  class="content">
            <mealCard v-for="(item,index) in mealCard" :key="index" :mealCard="mealCard[index]"></mealCard>
            <miniCard v-for="(item,index) in miniCard" :key="index" :miniCard="miniCard[index]"></miniCard>
        </div>
    </div>
</template>
<script>
import mealCard from './mealCard'
import miniCard from './miniCard'

export default {
    components:{
        mealCard,
        miniCard
    },
    data()
    {
        return{
            mealCard:this.$route.query.mealCard,
            miniCard:this.$route.query.miniCard,
            title:this.$route.query.title
        }
    },
    methods:{
         back(){
             this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
.iconfont{
    font-size: 5.5vw;
}
.want{
    background-color: #f8f8f8;
    .head{    
        position: fixed;
        top:0;
        z-index: 999;
        height: 12vw;
        width: 100%;
        background-color: #fff;
        font-size: 2.2vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.5px solid #c2c2c2;
        .icon{
            margin-left: 3vw;
        }
        .share{
            margin-right: 8vw;
            font-size: 3.5vw;
        }
    }
    .content{
        padding: 0 5vw;
        position: relative;
        top:16vw;
    }
}

</style>