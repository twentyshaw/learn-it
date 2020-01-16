import Side from '@/components/side'
import Rate from './rate' 
console.log('hi')
import { mapGetters, mapActions } from 'vuex'

export default{
	name:'UserTop',
	components:{Rate},
	data(){
		return {
			customColors: [
			{color: '#F56C6C', percentage: 14},
			{color: '#F56C6C', percentage: 28},
			{color: '#F56C6C', percentage: 42},
			{color: '#E6A23C', percentage: 56},
			{color: '#E6A23C', percentage: 70},
			{color: '#E6A23C', percentage: 84},
			{color: '#67C23A', percentage: 100},
			]
		}
	},
	computed:{
		...mapGetters(['courseId','courseCount','courseTests','memoTTl','memoDes']),
		percentage(){
			return Math.round(((this.courseCount)/7)*100)
		},
		memoCont(){
			return {
			  title: this.memoTTl || '' ,
			  desc: this.memoDes || ''
			}
		},
	},
	methods:{
	  ...mapActions(['createCourse','addCourse','createMemo']),
      increase(e) {
      	e.preventDefault()
      	if (this.courseCount>0) {
      		var mycount = this.courseCount + 1
      		this.addCourse({courseId:this.courseId,courseCount:mycount})
      	}else{
      		this.createCourse({courseCount:1,courseTests:this.courseTests})
      	}
	  },
	  onSubmit() {
        this.createMemo({title:this.memoCont.title,desc:this.memoCont.desc})
	  },
	  clearOut(){
		this.$confirm('Unsaved changes will be lost,are you sure you want to clear the form?', 'Warning', {
			confirmButtonText: 'Yes,clear it',
			cancelButtonText: 'Cancel',
			type: 'warning'
		  }).then(() => {
			document.getElementById("memo-form").reset();
		  }).catch(() => {
			this.$message({
			  type: 'info',
			  message: 'Failed'
			});          
		  });
	  },
	  giveup(){
        this.$msgbox({
			title: '回答内容を送信しますか？',
			message: this.$createElement(Rate,{ref:'Rate'}),
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
	},
	components:{
		Side
	}
}

