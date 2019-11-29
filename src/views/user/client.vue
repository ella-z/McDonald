<template>
    <div class="client">
        <headerNav></headerNav>
        <div class="card">
            <span class="userName">用户名</span>
            <span>可用积分</span>
        </div>
        <div class="list">
            <div class="listItem orders">
                <span>所有订单</span>
                <i class="iconfont icon">&#xe731;</i>
            </div>
            <div class="address listItem">
                <span>送餐地址</span>
                <i class="iconfont icon">&#xe731;</i>
            </div>
        </div>
        <div class="list">
            <div class="orders listItem">
                <span>投诉与建议</span>
                <i class="iconfont icon">&#xe731;</i>
            </div>
            <div class="address listItem">
                <span>条款与规则</span>
                <i class="iconfont icon">&#xe731;</i>
            </div>
        </div>
    </div>
</template>

<script>
import headerNav from '../../components/headerNav'

export default {
    components:{headerNav},
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
.client{
    height: 100vh;
    width: 100vw;
    background-color: #f8f8f8;
    display:flex;
    flex-direction: column;
    align-items: center;
     .card{
        margin-top: 16vw;    
        width: 75vw;
        height: 42vw;
        border-radius: 2.5vw;
        box-shadow: 4px 4px 5px rgb(177, 177, 177);
        background-color: #fff;
        background: url('http://localhost:80/mcdonald/assets/img/member/card.png') no-repeat center;
        background-size: 100%;
        
        .userName{
            padding-top:5vw;
            font-size:3.8vw;
            font-weight: 700;
        }
        span{
            display: block;
            margin: 10vw 5vw 0;
            font-size: 3.2vw;
        }
    }
    .list{
        margin-top: 5vw;
        width: 80vw;
        height: 20vw;
        background-color: #fff;
        border-radius: 2vw;
        .listItem{
            width: 70vw;
            height: 10vw;
            margin:0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            span{
                font-size: 3.5vw;
            }
            .icon{
                font-size: 3.5vw;
                font-weight: 700;
                color: #000;
            }
        }
    }
}
</style>