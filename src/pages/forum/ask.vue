<template>
	<div id="forum-ask">
    <div class="box">
        <h3 class="ttl">Ask A Question</h3>
        <div class="ask-inner">
        <el-form :model="addAsk" :rules="rules" ref="addAsk" label-width="100px" class="demo-addAsk">
        <el-form-item label="Title" prop="name">
            <el-input v-model="addAsk.name"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="desc">
            <el-input type="textarea" v-model="addAsk.desc" rows="15"></el-input>
        </el-form-item>
        <div class="tags">
            <el-form-item label="Tags">
            <div class="tags-inner">
            <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
            </el-tag>
            <el-tooltip class="item" effect="dark" content="Add up to 5 tags to describe what your question is about" placement="right">
            <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-tooltip>
            </div>
            </el-form-item>
        </div>
        <el-form-item class="btn-wrapper">
            <el-button type="primary" @click="submitForm('addAsk')">Post</el-button>
            <el-button @click="resetForm('addAsk')">Cancel</el-button>
        </el-form-item>
        </el-form>
        </div>
    </div>
	</div>
</template>
<style scoped>
.ask-inner{
    text-align: left;
}
.tags{
    margin-bottom: 22px;
}
.tags h4{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

}
.el-tag + .el-tag {
margin-left: 10px;
}
.button-new-tag {
margin-left: 10px;
height: 32px;
line-height: 30px;
padding-top: 0;
padding-bottom: 0;
}
.input-new-tag {
width: 90px;
margin-left: 10px;
vertical-align: bottom;
}
.btn-wrapper{
    text-align: center;
}
</style>
<script>
import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        addAsk: {
          name: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'The Title field is required', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: 'The Description field is required', trigger: 'blur' }
          ]
        },
        dynamicTags: [],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      ...mapActions(['createForum']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.createForum({title:this.addAsk.name,desc:this.addAsk.desc})
              .then(res=>{
                console.log("ask:")
                console.log(res)
                this.$router.push({path:`/user/forum/forum_detail/:${res.id}`})
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },


    }
  }
</script>