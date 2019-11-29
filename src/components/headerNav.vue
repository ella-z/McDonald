<template>
    <div class="headerNav">
        <i class="iconfont icon" @click="back()">&#xe61b;</i>
        <span>{{title}}</span>  
        <span>{{share}}</span>
    </div>
</template>
<script>
export default {
    props:['title','share'],
    data(){
        return{
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
.headerNav{
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
    .icon{
        margin-left: 1.5vw;
    }
}
</style>