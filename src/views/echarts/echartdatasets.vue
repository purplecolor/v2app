<template>
  <div class="box">
      <div id="myEchart"></div>
  </div>
</template>

<script>
export default {
    name:"echartdatasets",
    data(){
        return {
            options:null,
            myechart:null,
        }
    },
    mounted(){
        this.initEcharts()
    },
    methods:{
        initEcharts(){
            this.myechart=this.$echarts.init(document.getElementById('myEchart'))
            this.myechart.setOption({
                title: {
                    text: 'ECharts \n datasets',
                },
                legend:{
                    type:"plain",
                    show:true
                },
                tooltip: {},
                xAxis: {
                    type:"category"
                },
                yAxis:{},
                dataset:{
                    source:[
                        ["jan",34,20,24,2],
                        ["Feb",28,14,35,38],
                        ["Mar",120,32,56,75],
                        ["Apr",80,46,75,80],
                        ["May",55,24,85,35],
                        ["Jun",43,23,28,25],
                        ["Jul",33,23,32,10],
                        ["Aug",23,13,55,5],
                        ["Sep",23,16,12,8],
                        ["Oct",33,20,45,30],
                        ["Nov",39,24,70,27],
                        ["Dev",5,15,62,25],
                    ],
                    // dimensions:["date","open","close","highets","lowest"]
                },
                series: [
                    {
                        type: 'line',
                        encode:{x:0,y:1}
                    },
                    {
                        type: 'line',
                        encode:{x:0,y:2}
                    },
                    {
                        type: 'line',
                        encode:{x:0,y:3}
                    },
                    {
                        type: 'bar',
                        encode:{x:0,y:4}
                    },
                ]
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#myEchart{
    width:700px;
    height:400px;
}
</style>