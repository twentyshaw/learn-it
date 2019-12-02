<template>
    <div id="q-list">
        <div class="tag-group">
        <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            effect="dark">
            {{ item.label }}
        </el-tag>
        </div>
    </div>
</template>
<style scoped>
#q-list .tag-group{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
}
#q-list .tag-group .el-tag{
    width: calc(100%/5 - 5px);
    margin: 5px 0;
    text-align: center;
}
</style>
<script>
  export default {
    props:['highlight'],
    computed:{
      items() {
        return [
            { type: this.highlight[0]?'success':'info', label: 'Q1' },
            { type: this.highlight[1]?'success':'info', label: 'Q2' },
            { type: this.highlight[2]?'success':'info', label: 'Q3' },
            { type: this.highlight[3]?'success':'info', label: 'Q4' },
            { type: this.highlight[4]?'success':'info', label: 'Q5' },
            { type: this.highlight[5]?'success':'info', label: 'Q6' },
            { type: this.highlight[6]?'success':'info', label: 'Q7' },
            { type: this.highlight[7]?'success':'info', label: 'Q8' },
            { type: this.highlight[8]?'success':'info', label: 'Q9' },
            { type: this.highlight[9]?'success':'info', label: 'Q10' }
          ]
      } 
    }
  }
</script>