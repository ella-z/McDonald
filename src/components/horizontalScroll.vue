<template>
    <div class="horizontalScroll">
        <div class="title">
                <span>{{ScrollName}}</span>
                <span class="all">全部<i class="iconfont">&#xe731;</i></span>
        </div>
        <cube-scroll
            ref="scroll"
            :data="items"
            direction="horizontal"
            class="horizontal-scroll-list-wrap">
            <ul class="list-wrapper">
                <van-radio-group v-model="radio">
                    <li v-for="(item,index) in items" :key="index" class="list-item" >
                        <div class="pri" :style="{backgroundImage:'url('+item.picture+')',backgroundSize: '100%' }"></div>
                        <span>{{items.name}}</span>
                        <van-radio :name='index' checked-color="#FFC836" class="radio"></van-radio>
                    </li>
                </van-radio-group>
            </ul>
        </cube-scroll>
    </div>
</template>

<script>
export default {
    props:['items','ScrollName'],
    data(){
        return{
                radio:0,
                
        }
    },
    mounted(){

    }
}
</script>

<style lang="scss">
.horizontalScroll{
    background-color: #fff;
    width: 100%;
        height: 60vw;
        background-color: #fff;
        .title{
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
    .horizontal-scroll-list-wrap{
        height: 40vw;
        width: 100vw;
        border-radius: 5px;
        .cube-scroll-content{
             display: inline-block; 
             
        }
        .list-wrapper{
            padding: 0 10px;
            line-height: 60px;
            white-space: nowrap;
        }
        .list-item{
            display: inline-block;
            background-color: #fff;
            height: 40vw;
            width: 40vw;
            .pri{ 
                    margin:auto;
                    width: 28vw;
                    height: 30vw;
                    background-size: 100%;
                    background-repeat: no-repeat;  
                    background-position: center;
            }
   
            .radio{
                width: 6vw;
                margin:0 auto;
            }
        }
    }
}
</style>