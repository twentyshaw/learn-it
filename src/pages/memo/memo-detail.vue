<template>
	<div id="memo-detail">
        <form label-width="80px">
        <div class="form-item memo-ttl">
            <input v-model="memoCont.title" placeholder="Memo Title">
        </div>
        <div class="form-item memo-desc">
            <textarea v-model="memoCont.desc" placeholder="Write your note here..."></textarea>
        </div>
        <div class="form-item">
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button @click="backTo">Return</el-button>
        </div>
        </form>
	</div>
</template>
<style scoped>
input,textarea{
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    outline: none;
    font-size: inherit;
    cursor: pointer;
    width: 100%;
    border: none;
    background: none;
}
input:hover,
textarea:hover{
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;   
}
input:focus,
textarea:focus{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    color: #606266;
}
.form-item{
    margin: 0 100px 20px;
}
.memo-ttl input{
    text-align: center;
    color: #00A491;
    font-size: 1.17em;
    font-weight: bold;
}
.memo-desc textarea{
    height: calc(100vh - 280px);
}

</style>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    props:['memoID'],
    computed:{
      ...mapGetters(['memoTTl','memoDes']),
      memoCont(){
        return {
          title: this.memoTTl || '' ,
          desc: this.memoDes || ''
        }
      },
      id(){
        return this.memoID.split(':')[1]
      }
    },
    methods: {
      ...mapActions(['createMemo','memoInfo','updateMemo']),
      ...mapMutations(['setMemo']),
      onSubmit() {
        if (this.memoID) {
          this.updateMemo({memoID:this.id,title:this.memoCont.title,desc:this.memoCont.desc})
        }else{
          this.createMemo({title:this.memoCont.title,desc:this.memoCont.desc})
        }
      },
      backTo(){
        this.$router.push('/user/memo')
        this.setMemo({memoTTl:"",memoDes:""})
      }
    },
    created:function(){
      if (this.memoID) {
        this.memoInfo({memoID:this.id})
      }
    }
  }
</script>