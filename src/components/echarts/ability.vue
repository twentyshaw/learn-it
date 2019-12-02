<template>
  <div id="charts-ability">
    <v-chart class="my-chart" :options="bar"/>
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/bar";

import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
export default {
  components: {
    "v-chart": ECharts
  },
  data: function() {
    return {
      bar: {
        title: {
            text: '得点',
            top: 0,
            left: 'center',
            textStyle:{
              color:'#00A491'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        legend: {
            data:['Python','JavaScript','HTML','CSS','SQL'],
            top: 30,
            left: 'center'
        },
        grid: {
            left: '0',
            right: '2%',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'Python',
                type:'bar',
                data:[2, 4, 3, 6, 5, 7, 7]
            },
            {
                name:'JavaScript',
                type:'bar',
                data:[4, 4, 6, 5, 4, 7, 6],
                markLine : {
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data : [
                        [{type : 'min'}, {type : 'max'}]
                    ]
                }
            },
            {
                name:'HTML',
                type:'bar',
                data:[6, 5, 5, 7, 8, 8, 10]
            },
            {
                name:'CSS',
                type:'bar',
                data:[6, 7, 7, 8, 10, 9, 10]
            },
            {
                name:'SQL',
                type:'bar',
                data:[2, 3, 2, 3, 3, 5, 4]
            }
        ]
      }
    }
  }
}
</script>
<style type="text/css" src="./chart.css"></style>
