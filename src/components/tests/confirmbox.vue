<template>
  <div>
    <el-button type="primary" @click="open">提出</el-button>
  </div>
</template>

<script>
import Qlist from './qlist'
  export default {
    props:['selected'],
    components:{ Qlist },
    methods: {
      open() {
        this.$msgbox({
          title: '回答内容を送信しますか？',
          message: this.$createElement(Qlist,{props:{highlight:this.selected},ref:'Qlist'}),
          showCancelButton: true,
          confirmButtonText: '送信する',
          cancelButtonText: '戻る',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '送信中...';
              setTimeout(() => {
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
                this.$emit('showResult')
                done();
              }, 3000);
            } else {
              done()
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
    }
  }
</script>