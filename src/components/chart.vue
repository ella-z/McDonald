<template>
    <div>
        <div id="lineContainer" class="container" v-show="isLine"></div>
        <div id="pieContainer" class="container" v-show="isPie"></div>
    </div>
</template>

<script>
import HighCharts from 'highcharts'

export default {
    props:['seriess','chartSeries'],
    data(){
        return{
            isPie:true,
            isLine:false,
            lineOptions :{
                chart: {
                    type: 'line'                          //指定图表的类型，默认是折线图（line）
                },
                title: {
                    text: this.seriess                 // 标题
                },
                xAxis: {
                    categories: ['1月', '2月', '3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']   // x 轴分类
                },
                yAxis: {
                    title: {
                        text: '销售量(千)'                // y 轴标题
                    }
                },
                series: this.chartSeries
            },
            pieOptions:{
                title: {
                    text: '全部'                // 标题
                },
                 series: [{
                    type: 'pie',
                    name: '销售份额',
                    data:this.chartSeries
                }]
             },

        }
    },
    watch:{
        seriess(val){
            if(val==='全部')
            {
                this.isPie=true;
                this.isLine=false;
                HighCharts.chart('pieContainer', this.pieOptions);
            }else{
                this.lineOptions.title.text=val;
                this.lineOptions.series=this.chartSeries;
                this.isPie=false;
                this.isLine=true;
                HighCharts.chart('lineContainer', this.lineOptions);
            }
        },
        chartSeries(val){ 
            if(this.isLine===true){
               this.lineOptions.series=val;
                HighCharts.chart('lineContainer', this.lineOptions);
            }
        },
        pieOptions(val){
            this.pieOptions=val;
            HighCharts.chart('pieContainer', this.pieOptions);
        }
    },
    created(){
        this.pieOptions.series.data=this.chartSeries;
    },
    mounted(){
        this.pieOptions.series.data=this.chartSeries;
        HighCharts.chart('pieContainer', this.pieOptions);
    }
}
</script>

<style lang="scss">
        .container{
            margin-bottom: 15vw;
            width: 100vw;
            height: 100vw;
        }
</style>