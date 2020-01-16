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
import { mapGetters } from 'vuex';
export default {
  components: {
    "v-chart": ECharts
  },
  computed:{
      ...mapGetters(['courseTests']),
      bar() {
            return {
                title: {
                    text: 'Score',
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
                    data:['ITPassport'],
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
                        name:'ITPassport',
                        type:'bar',
                        data:[
                            this.courseTests[0].testPoint, 
                            this.courseTests[1].testPoint, 
                            this.courseTests[2].testPoint, 
                            this.courseTests[3].testPoint, 
                            this.courseTests[4].testPoint, 
                            this.courseTests[5].testPoint, 
                            this.courseTests[6].testPoint]
                    }
                ]
            }
        }
    }
}
</script>
<style type="text/css" src="./chart.css"></style>
