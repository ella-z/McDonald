<template>
    <div id="List">
        <div class="listview">
            <ul>
                <li
                 :key="index"
                v-for="(item,index) in list" >
                <img :src="item.src"/></li>
            </ul>
            </div>
    </div>
</template>
<script>
export default {
    name:'List',
    props:["list"]
}
</script>
<style lang="scss">
.listview{
     ul{
         padding: 0 0 0 3%;
         margin: 0;
          li{
                list-style: none;
                margin-bottom: 3vw;
                img{
                    width: 94vw;
                    height: 38vw;
                    border-radius: 8px;
                    box-shadow: 0px 3px 3px #A6A5A1;
                }
            }
            margin-bottom: 16vw;
     }
 }
</style>