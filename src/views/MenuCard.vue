<template>
    <div class="MenuCard">
        <headerNav :title="title"></headerNav>
        <div class="poster" ></div>
        <div class="intro">
            <span>双层安格斯厚牛菠萝堡套餐</span>
        </div>
        <div class="snack">
            <div class="snack-title">
                <span>选择套餐内小食</span>
                <span class="all">全部<i class="iconfont">&#xe731;</i></span>
            </div>
        </div>
        <div class="drink"></div>
        <div class="stapleFood"></div>
    </div>
</template>
<script>
import headerNav from '../components/headerNav'

export default {
    components:{headerNav},
    data(){
        return{
            title:"双层安格斯厚牛菠萝堡套餐"
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss">
.MenuCard{
    background-color: #f8f8f8;
    width: 100%;
    .head{
    height: 12vw;
    width: 100%;
    background-color: #ffffff;
    position: fixed;
    top:0;
    z-index: 999999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    }
    .poster{
        width: 100%;
        height: 58vw;
        margin-top: 12vw;
        background-size: 100%;
        background-image: url('../assets/img/menuCard/安格斯/安格斯厚牛培根堡套餐(poster).png');
    }
    .intro{
        width: 100%;
        height: 40vw;
        background-color: pink;
    }
    .snack{
        width: 100%;
        height: 60vw;
        background-color: skyblue;
        .snack-title{
            padding:3vw 5vw 8vw;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            span{
                font-size: 4.5vw;
            }
            .all{
                font-size: 3.5vw;
            }
            i{
                font-size: 4vw;
                color: #000;
            }
        }
    }
    .drink{
        width: 100%;
        height: 60vw;
        background-color: rgb(16, 197, 16);
    }
    .stapleFood{
        width: 100vw;
        width: 70vw;
        background-color: rgb(250, 250, 73);
    }
}

</style>