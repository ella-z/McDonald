<template>
  <div id="app">
  <index></index>
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

<style>
#app,html,body{
  margin:0;
  padding: 0;

}
</style>
