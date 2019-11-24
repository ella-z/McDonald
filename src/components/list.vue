<template>
    <div id="List">
        <div class="listview">
            <ul>
                <li
                    :key="index"
                    v-for="(item,index) in xlist" 
                    @click="tomenu()"
                    :style="{background: 'url('+item.src+') no-repeat center ',backgroundSize:'100%'}">
                </li>
            </ul>
            </div>
    </div>
</template>
<script>
export default {
    name:'List',
    props:["list"],
    data(){
        return{
            xlist:'',
        }
    },
    watch:{
        list(val){
         this.xlist=val;
        }
    },
    methods:{
        tomenu(){
            this.$router.push('/menu')
        }
    }
}
</script>
<style lang="scss">
.listview{
     ul{
         padding: 0;
         margin: 0;
          li{
                list-style: none;
                margin-bottom: 3vw;
                width: 94vw;
                height: 35vw;
                border-radius: 8px;
                box-shadow: 0px 3px 3px #A6A5A1;
            }
     }
 }
</style>