<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import index from './views/index'

export default {
  name: 'app',
  components: {
   index
  },
  created(){ 
      if(this.$router.path !== '/index'){
          this.$router.replace('/index')
      }
}
}
</script>

<style  lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1451681 */
  src: url('//at.alicdn.com/t/font_1451681_gu41eusb8zk.eot');
  src: url('//at.alicdn.com/t/font_1451681_gu41eusb8zk.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1451681_gu41eusb8zk.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1451681_gu41eusb8zk.woff') format('woff'),
  url('//at.alicdn.com/t/font_1451681_gu41eusb8zk.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1451681_gu41eusb8zk.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    font-size: 6vw;
    color: #9D9D9D;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
#app,html,body{
  margin:0;
  padding: 0;
  font-size: 4vw;
}
</style>
