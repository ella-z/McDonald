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
  }
}
</script>

<style  lang="scss">
#app,html,body{
  margin:0;
  padding: 0;
}
</style>
