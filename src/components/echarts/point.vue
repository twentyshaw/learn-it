<template>
  <div id="charts-point">
    <v-chart class="my-chart" :options="pie"/>
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/pie";
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
export default {
  components: {
    "v-chart": ECharts
  },
  data: function() {
    return {
      pie: {
        title : {
            text: 'Point Chart',
            left: 'center',
            textStyle:{
              color:'#00A491'
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            left: 'center',
            bottom: 10,
            data: ['ログイン','授業','テスト','質問','回答'],
            selected:  {'ログイン':true,'授業':true,'テスト':true,'質問':true,'回答':true}
        },
        series : [
            {
                name: '得点',
                type: 'pie',
                radius : '55%',
                // center: ['50%', '62%'],
                data: [{name:'ログイン',value:33},{name:'授業',value:32},{name:'テスト',value:26},{name:'質問',value:12},{name:'回答',value:3}],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
    }
  }
}


</script>
<style>

</style>
