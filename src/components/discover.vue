<template>
    <div>
        <div class="nav"></div>
        <div class="Dcontent">
            <el-tabs v-model="activeName">
                <el-tab-pane label="正餐新品" name="first">
                    <List :list='list1'></List>
                </el-tab-pane>
                <el-tab-pane label="早餐新品" name="second">
                    <List :list='breakfastList'></List>
                </el-tab-pane>
                <el-tab-pane label="麦乐送" name="third">
                     <List :list='takeoutList'></List>
                </el-tab-pane>
                <el-tab-pane label="会员活动" name="fourth">
                     <List :list='memberList'></List>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import List from '../components/list'
export default {
    components:{List},
    data()
    {
        return{
             activeName: 'first',
             list1:[
                {
                    src:require('../views/img/list1.png')
                },
                {
                     src:require('../views/img/list2.png')
                },
                 {
                     src:require('../views/img/list3.png')
                },
                 {
                     src:require('../views/img/list4.png')
                },
             ],
             breakfastList:[
                 {
                      src:require('../views/img/breakfast/breakfast1.png')
                 },
                  {
                      src:require('../views/img/breakfast/breakfast2.png')
                 },
                  {
                      src:require('../views/img/breakfast/breakfast3.png')
                 },
                  {
                      src:require('../views/img/breakfast/breakfast4.png')
                 },
             ],
             takeoutList:[
                 {
                      src:require('../views/img/takeout/takeout1.png')
                 },
                {
                      src:require('../views/img/takeout/takeout2.png')
                 },
                {
                      src:require('../views/img/takeout/takeout3.png')
                 },
                {
                      src:require('../views/img/takeout/takeout4.png')
                 },
             ],
             memberList:[
                 {
                      src:require('../views/img/member/member1.png')
                 },
                  {
                      src:require('../views/img/member/member2.png')
                 },
             ]
        };
    }
}
</script>
<style lang="scss" >
.nav{
 height: 10vw;
 border-bottom:0.5px solid grey;
}
.Dcontent{
    display: flex;
    justify-content: space-around;
       .el-tabs__item{
           color: #7F7F7F;
           padding-left:20px !important;
           padding-right:20px !important;
           background-color: #fff;
       } 
       .el-tabs__item.is-active{
           color:#000
       }
       .el-tabs__active-bar{
           background-color: #000;
       }
}
</style>