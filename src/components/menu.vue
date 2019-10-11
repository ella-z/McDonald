<template>
    <div>
        <div class="header">
            <div class="icon" @click="back()">
                <i class="iconfont">&#xe61b;</i>
            </div>
        </div>
        <div class="main">
        </div>
    </div>
</template>
<script>
export default {
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
<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1451681 */
  src: url('//at.alicdn.com/t/font_1451681_p658g2xww2i.eot');
  src: url('//at.alicdn.com/t/font_1451681_p658g2xww2i.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1451681_p658g2xww2i.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1451681_p658g2xww2i.woff') format('woff'),
  url('//at.alicdn.com/t/font_1451681_p658g2xww2i.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1451681_p658g2xww2i.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    font-size: 7vw;
    color: #9D9D9D;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
    
.header{
    height: 12vw;
    padding: 2%;
    background-color: #ffffff;
    .icon{
        width: 0vw;
       padding-top: 2%;
    }
}
.main{
    height: 80vw;
    background-color: #F8F8F8;
}
</style>