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
#app,html,body{
  margin:0;
  padding: 0;
}
</style>
