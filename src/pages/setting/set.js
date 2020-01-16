import { mapActions, mapGetters } from 'vuex'
import { Message } from 'element-ui'

export default {
    data() {
        return {
          imageUrl:'',
          imagePreview:"",
          ruleForm: {
            name: '',
            email:'',
            date1: '',
            resource: '',
            desc: ''
          },
          rules: {
            name: [
              { required: true, message: 'The Username field is required', trigger: 'blur' },
              // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            email: [
                { required: true, message: 'The Email field is required', trigger: 'blur' },
                // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
          }
        };
      },
      computed:{
        ...mapGetters(['usericon','iconID']),
        insIcon(){
          if(this.usericon){
            return this.usericon
          }
        }
      },
      methods: {
        ...mapActions(['saveAvatar','avatarDelete']),
        onchange(e){
            this.imageUrl = e.target.files[0]
            console.log("this.imageUrl")
            console.log(this.imageUrl)
            var isImg = this.beforeAvatarUpload(this.imageUrl)
            if(isImg){
              this.imagePreview = URL.createObjectURL(this.imageUrl)
            }
        },
        save(){
            if(this.iconID){
              this.avatarDelete({id:this.iconID})
            }
            this.saveAvatar({image:this.imageUrl})
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isJPG) {
            Message.error({
              message:'Type wrong!',
              customClass:'message-popup'
            })
          }
          if (!isLt2M) {
            Message.error({
              message:'Size over!',
              customClass:'message-popup'
            })
          }
          return isJPG && isLt2M;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }
      },
      mounted(){
        setBtn()
      } 
}

function setBtn(){
  var imgBtn = document.querySelector('#avatar')
  var imgHolder = document.querySelector('.set-avatar')
  imgHolder.addEventListener('click',function(){
    imgBtn.click()
  })
}
