<template>
    <div class="user">
          <router-view></router-view>
    </div>
</template>
<script>
export default {
 data(){
     return{}
 },
 created(){
     this.$router.push('/index/user/member');
 }   
}
</script>
<style lang="scss">
.user{
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
}
</style>