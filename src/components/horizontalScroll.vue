<template>
    <div class="horizontalScroll">
        <div class="title">
                <span>{{ScrollName}}</span>
                <span class="all"><!--全部<i class="iconfont">&#xe731;</i>--></span>
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
                        <span class="radioName">{{item.name}}</span>
                        <van-radio :name='index' checked-color="#FFC836" class="radio" @click="changRadio(item.name)"></van-radio>
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
                checkedName:'',
        }
    },
    watch:{
        items(val){
            this.checkedName=this.items[0].name;
        },
        checkedName(val){
            this.$emit('updateChecked',val);
        }
    },
    methods:{
        changRadio(name){
            this.checkedName=name;
            
        }
    }
}
</script>

<style lang="scss">
.horizontalScroll{
    background-color: #fff;
    width: 100%;
        height: 65vw;
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
        height: 50vw;
        width: 100vw;
        border-radius: 2vw;
        .cube-scroll-content{
             display: inline-block; 
             
        }
        .list-wrapper{
            padding: 0 10px;
            line-height: 10vw;
            white-space: nowrap;
        }
        .list-item{
            display: inline-block;
            background-color: #fff;
            height: 40vw;
            width: 50vw;
            .pri{ 
                    margin:0 auto;
                    width: 28vw;
                    height: 30vw;
                    background-size: 100%;
                    background-repeat: no-repeat;  
                    background-position: center;
            }
            .radioName{
                font-size: 3.5vw; 
                display: block;
                width: 100%;
                text-align: center;
            }
            .radio{
                width: 6vw;
                height: 5vw;
                margin:0 auto;
            }
        }
    }
}
</style>