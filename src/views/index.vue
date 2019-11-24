<template>
<div>
   <router-view></router-view>
    <NavMenu></NavMenu>
</div>
</template>
<script>
import NavMenu from '../components/NavMenu';
export default {
  components: {
   NavMenu
  },
}
</script>

<style lang="scss">

</style>
