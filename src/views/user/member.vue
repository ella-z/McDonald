<template>
<div>
    <div class="member">
        <div class="nav"></div>
        <div class="card">
            <div class="cardLeft">
                <img src="http://localhost:80/mcdonald/assets/img/m.png" />
                <span @click="toLogin">立即注册/登录></span>
                <span class="intro">
                    成为麦当劳会员，<br />
                    更多优惠，更快取餐
                </span>
            </div>
            <div class="cardRight"></div>
        </div>
        <div class="content">
            <span>注册/登录后可获得大批优惠券！</span>
        </div>
    </div>   
    <login :open='open' @toClose='close'></login> 
</div>
</template>
<script>
import qs from 'qs'
import login from './login'

export default {
    components:{login},
    data(){
        return{
          open:false,
        }
    },
    created(){
        console.log(window.sessionStorage);
    },
    methods:{
        toLogin(){
            this.open=true;
        },
        close(res){
            this.open=res;
        }
    }
}
</script>
<style lang="scss" scoped>
.iconfont{
    font-size: 3.8vw;
}

.member{
    width: 100vw;
    height: 100vh;
    background-color: #f8f8f8;
    .nav{
    height: 12vw;
    background-color: #fff;
    }
    .card{
        margin: 2% 12% 8%; 
        width: 75vw;
        height: 42vw;
        border-radius: 2.5vw;
        box-shadow: 4px 4px 5px rgb(177, 177, 177);
        background-color: #fff;
        display: flex;
        flex-direction: row;
        .cardLeft{
            width: 40vw;
            margin-left: 5vw;
            display: flex;
            flex-direction: column;
            img{
                width: 7vw;
                height: 6vw;
                margin: 5vw 0 7vw 0;
            }
            .intro{
                margin-top: 1vw;
                color: rgb(124, 124, 124);
                line-height: 3vw;
                font-size: 2.2vw;
            }
            span{
                font-size:4vw;
            }
        }
        .cardRight{
            width: 50vw;
            background-image: url('http://localhost:80/mcdonald/assets/img/cardbackground.png');
            background-size: 100% 100%;
            border-radius: 2.5vw;
        }
        
    }
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            margin-top:5vw;
            font-size: 3.5vw;
        }
    }
}
</style>