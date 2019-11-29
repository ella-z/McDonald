<template>
    <div id="container" class="container" option='option'></div>
</template>

<script>
import HighCharts from 'highcharts'

export default {
    data(){
        return{
            /* options :{
                chart: {
                    type: 'line'                          //指定图表的类型，默认是折线图（line）
                },
                title: {
                    text: '安格斯黑金系列'                 // 标题
                },
                xAxis: {
                    categories: ['1月', '2月', '3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']   // x 轴分类
                },
                yAxis: {
                    title: {
                        text: '销售量(千)'                // y 轴标题
                    }
                },
                series: [
                    {                              // 数据列
                        name: '安格斯厚牛菠萝堡套餐',                        // 数据列名
                        data: [1,0,1,0,2,2,0,3,1,1,1,1]                     // 数据
                    }, 
                    {
                        name: '双层安格斯厚牛菠萝堡套餐',
                        data: [0,0,1,0,2,5,1,0,1,0,1,1]
                    },
                    {
                        name: '安格斯厚牛培根堡套餐',
                        data: [0,2,1,3,2,8,1,0,1,0,1,1]
                    },
                    {
                        name: '安格斯厚牛芝士堡套餐',
                        data: [0,2,1,3,2,8,1,0,1,0,1,1]
                    },
                    {
                        name: '双层安格斯厚牛培根堡套餐',
                        data: [0,2,1,6,2,8,1,0,1,0,1,4]
                    },
                    {
                        name: '双层安格斯厚牛芝士堡套餐',
                        data: [10,2,1,3,2,8,1,5,1,0,1,1]
                    },
                ]
             },*/
             options:{
                 series: [{
                    type: 'pie',
                    name: '销售份额',
                    data: [
                        ['安格斯黑金系列', 45.0],
                        ['超值三件套', 26.8], {
                        name: '随心配1+1=12',
                        y: 12.8,
                        sliced: true,  // 突出显示某个扇区，表示强调
                        },
                        ['金拱门桶', 8.5],
                        ['500大卡套餐', 6.2],
                        ['其他', 0.7],
                    ]
                }]
             },

        }
    },
      mounted(){
      HighCharts.chart('container', this.options)
  },
}
</script>

<style lang="scss">
        .container{
            margin-bottom: 15vw;
            width: 100vw;
            height: 100vw;
        }
</style>