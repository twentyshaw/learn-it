<template>
  <div id="charts-compara">
    <v-chart class="my-chart" :options="line"/>
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/line";

import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import { mapGetters } from 'vuex';
export default {
  components: {
    "v-chart": ECharts
  },
  computed: {
      ...mapGetters(['courseTests']),
      line(){
      return {
        title: {
            text: 'Ability Chart',
            top: 0,
            left: 'center',
            textStyle:{
              color:'#00A491'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer : {
                type : 'line'
            }
        },
        legend: {
            data:['average score','my score'],
            top: 30,
            left: 'center'
        },
        grid: {
            left: '0',
            right: '4%',
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
                name:'average score',
                data: [4.6, 3.2, 5.8, 6.3, 4.1, 7.9, 8.2],
                type: 'line'
            },
            {
                name:'my score',
                data: [
                  this.courseTests[0].testPoint, 
                  this.courseTests[1].testPoint, 
                  this.courseTests[2].testPoint, 
                  this.courseTests[3].testPoint, 
                  this.courseTests[4].testPoint, 
                  this.courseTests[5].testPoint, 
                  this.courseTests[6].testPoint
                  ],
                type: 'line'
            }    
        ]
      }
      }
  }
}
</script>
<style type="text/css" src="./chart.css"></style>