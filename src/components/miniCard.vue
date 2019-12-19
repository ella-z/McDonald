<template>
    <div class="miniCard" id="miniCard" @click="toDetail">
        <!--<div class="button">加入购物车</div>-->
        <div>
            <span>{{miniCard.name}}</span>
            <img :src='miniCard.src'/>
        </div>
    </div>
</template>
<script>
export default {
    name:'miniCard',
    props:['miniCard'],
    data(){
        return{
         
        }
    },
    methods:{
        toDetail(){
             this.$router.push({path:'/detail',query:{src:this.miniCard.src}})
        }
    }
}
</script>
<style lang="scss" >
.miniCard{
            background-color: #fff;
            height: 55vw;
            border-radius:1vw; 
            padding: 0 4vw 4vw 4vw;
            margin-bottom: 4vw;
            .button{
                position:absolute;
                margin:43vw 0 0 7vw;
                z-index:2;
                width: 21vw;
                height: 6vw;
                font-size: 2.6vw;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10vw;
                background-color: #FFBC0D;
            }
            span{
                display: block;
                font-size: 3vw;
                padding:4vw 0;
            }
            img{
                width: 82vw;
                height: 42vw;
                border-radius: 1vw;
                -moz-background-size:100% 100%;
                background-size:100% 100%;//照片自适应框
                box-shadow:0.7vw 0.7vw 1vw 0 #dfdede;
            }
        }
</style>