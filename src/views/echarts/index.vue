<template>
  <div class="box">
      <div id="myEchart"></div>
  </div>
</template>

<script>
export default {
    name:"echarts",
    data(){
        return {
            options:null,
            myechart:null,
            initOption:{
                title: {
                    text: 'ECharts \n示例'
                },
                legend:[{
                    type:"plain",
                    show:true,
                    right:0,
                    top:0,
                    itemGap:10,//图例每项之间的间隔
                    icon:"rect",
                    itemHeight : 4,//图例标记的图形高度。
                    itemWidth : 20,//图例标记的图形宽度
                }],
                tooltip: {
                    trigger:"axis",
                    show:true,
                    showContent:true,
                    alwaysShowContent:true,//是否一直显示弹窗（默认鼠标溢出后消失）
                    triggerOn:"mousemove",//弹窗出现事件类型
                    enterable:true,//鼠标是否可以进入弹窗中
                    className:"opaClass",//弹窗节点css类
                    // backgroundColor:"rgba(250,250,210,0.5)",//背景颜色
                    borderColor:"none",
                    borderWidth:"0",
                    textStyle:{
                        // color:"red"
                    },
                    extraCssText:"",//额外添加到浮层的样式
                    order:"seriesDesc",//提示框排列顺序 seriesAsc:根据系列声明升序排列 , seriesDesc:根据系列声明降序排列
                },
                xAxis: {
                    data: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',],
                    type: 'category'
                },
                yAxis:[
                    {
                        type:"value",
                        data:[10,20,30,40,50],
                        color:"#5470c6",
                        name:"十位",
                        min:"0",
                        top:10
                    },
                    {
                        type:"value",
                        data:[100,200,300,400,500],
                        color:"#91cc75",
                        name:"百位"
                    },
                ],
                series: [
                    {
                        name: '销量',
                        type: 'line',
                        data: [5, 20, 5, 10, 10, 18],
                        xAxisIndex:0,
                        yAxisIndex:0,
                        showSymbol : false,
                        smooth: true,
                    },
                    {
                        name: '同月输出',
                        type: 'line',
                        data: [80, 120, 100, 80, 150, 400],
                        xAxisIndex:0,
                        yAxisIndex:1,
                        showSymbol : false,
                        smooth: true,
                    },
                    {
                        name: '报废',
                        type: 'line',
                        data: [15, 6, 4, 6, 2, 3],
                        xAxisIndex:0,
                        yAxisIndex:0,
                        showSymbol : false,
                        smooth: true,
                    },
                    {
                        name: '收入(w)',
                        type: 'line',
                        data: [80, 120, 360, 80, 150, 400],
                        xAxisIndex:0,
                        yAxisIndex:1,
                        showSymbol : false,
                        smooth: true,
                    },
                    {
                        name: '支出(w)',
                        type: 'line',
                        data: [35, 55, 165, 45, 70, 185],
                        xAxisIndex:0,
                        yAxisIndex:1,
                        showSymbol : false,
                        smooth: true,
                    },
                ]
            }
        }
    },
    mounted(){
        this.initEcharts()
        // this.allLooad()
    },
    methods:{
        initEcharts(){
            this.myechart=this.$echarts.init(document.getElementById('myEchart'))
            this.myechart.setOption(this.initOption)
            // setTimeout(this.allLooad(0),1000)
            this.allLooad(0)
            
        },
        allLooad(count,data){
            let initOption=this.initOption;
            let xAxis=initOption.xAxis.data.slice(0,6)
            initOption.xAxis.data.push(...xAxis)
            initOption.series.forEach((item,index)=>{
                item.data=item.data.concat(item.data.slice(0,6))
            })
            this.initOption=initOption
            count++
            if(count&&count>3){
                return
            }else{
                this.myechart.setOption(this.initOption)
                if(!data){
                    var data={
                        initOption:this.initOption,
                        name:"data",
                        myechart:this.myechart,
                        allLooad:this.allLooad
                    }
                    setTimeout(this.allLooad.bind(data,count,data),1000)
                }else{
                    setTimeout(this.allLooad.bind(this,count,data),1000)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#myEchart{
    width:1000px;
    height:400px;
    text-align: left;
}
// /deep/.opaClass{//tooltip额外样式
//     background-color:rgba(0,0,0,0.3) !important;
//     color:white !important;
//     height:50px !important;
//     div,span{
//         color:white !important;
//     }
// }
.testVw{
    width:1.33vw;
}
</style>