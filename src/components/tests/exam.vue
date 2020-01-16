<template>
    <div id="test01">
    <p class="mypoint"><template v-if="this.myTests[this.examIndex].testResult"><span class="icon"><i class="iconfont icon-fenshu"></i></span>score:<span class="myscore">{{ myTests[this.examIndex].testPoint }}</span></template></p>
    <div class="test-inner">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>1. {{ questions[0].contents }} </span>
        </div>
        <div class="text item">
            <ul id="q1">
                <li class="answer"><input type="radio" id="slecte1a" v-model="answerlist[0]" value="a"/><label for="slecte1a">{{ questions[0].answers[0] }}</label></li>
                <li class="answer"><input type="radio" id="slecte1b" v-model="answerlist[0]" value="b"/><label for="slecte1b">{{ questions[0].answers[1] }}</label></li>
                <li class="answer"><input type="radio" id="slecte1c" v-model="answerlist[0]" value="c"/><label for="slecte1c">{{ questions[0].answers[2] }}</label></li>
                <li class="answer"><input type="radio" id="slecte1d" v-model="answerlist[0]" value="d"/><label for="slecte1d">{{ questions[0].answers[3] }}</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[0] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>2. {{ questions[1].contents }}</span>
        </div>
        <div class="text item">
            <ul id="q2">
                <li class="answer"><input type="radio" id="slecte2a" v-model="answerlist[1]" value="a"/><label for="slecte2a">{{ questions[1].answers[0] }}</label></li>
                <li class="answer"><input type="radio" id="slecte2b" v-model="answerlist[1]" value="b"/><label for="slecte2b">{{ questions[1].answers[1] }}</label></li>
                <li class="answer"><input type="radio" id="slecte2c" v-model="answerlist[1]" value="c"/><label for="slecte2c">{{ questions[1].answers[2] }}</label></li>
                <li class="answer"><input type="radio" id="slecte2d" v-model="answerlist[1]" value="d"/><label for="slecte2d">{{ questions[1].answers[3] }}</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[1] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>3. {{ questions[2].contents }}</span>
        </div>
        <div class="text item">
            <ul id="q3">
                <li class="answer"><input type="radio" id="slecte3a" v-model="answerlist[2]" name="q3" value="a"/><label for="slecte3a">{{ questions[2].answers[0] }}</label></li>
                <li class="answer"><input type="radio" id="slecte3b" v-model="answerlist[2]" name="q3" value="b"/><label for="slecte3b">{{ questions[2].answers[1] }}</label></li>
                <li class="answer"><input type="radio" id="slecte3c" v-model="answerlist[2]" name="q3" value="c"/><label for="slecte3c">{{ questions[2].answers[2] }}</label></li>
                <li class="answer"><input type="radio" id="slecte3d" v-model="answerlist[2]" name="q3" value="d"/><label for="slecte3d">{{ questions[2].answers[3] }}</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[2] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>4. {{ questions[3].contents }}</span>
        </div>
        <div class="text item">
            <ul id="q4">
                <li class="answer"><input type="radio" id="slecte4a" v-model="answerlist[3]" name="q4" value="a"/><label for="slecte4a">{{ questions[3].answers[0] }}</label></li>
                <li class="answer"><input type="radio" id="slecte4b" v-model="answerlist[3]" name="q4" value="b"/><label for="slecte4b">{{ questions[3].answers[1] }}</label></li>
                <li class="answer"><input type="radio" id="slecte4c" v-model="answerlist[3]" name="q4" value="c"/><label for="slecte4c">{{ questions[3].answers[2] }}</label></li>
                <li class="answer"><input type="radio" id="slecte4d" v-model="answerlist[3]" name="q4" value="d"/><label for="slecte4d">{{ questions[3].answers[3] }}</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[3] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>5. {{ questions[4].contents }}</span>
        </div>
        <div class="text item">
            <ul id="q5">
                <li class="answer"><input type="radio" id="slecte5a" v-model="answerlist[4]" name="q5" value="a"/><label for="slecte5a">{{ questions[4].answers[0] }}</label></li>
                <li class="answer"><input type="radio" id="slecte5b" v-model="answerlist[4]" name="q5" value="b"/><label for="slecte5b">{{ questions[4].answers[1] }}</label></li>
                <li class="answer"><input type="radio" id="slecte5c" v-model="answerlist[4]" name="q5" value="c"/><label for="slecte5c">{{ questions[4].answers[2] }}</label></li>
                <li class="answer"><input type="radio" id="slecte5d" v-model="answerlist[4]" name="q5" value="d"/><label for="slecte5d">{{ questions[4].answers[3] }}</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[4] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>6. {{ questions[5].contents }}</span>
        </div>
        <div class="text item">
            <ul id="q6">
                <li class="answer"><input type="radio" id="slecte6a" v-model="answerlist[5]" name="q6" value="a"/><label for="slecte6a">{{ questions[5].answers[0] }}</label></li>
                <li class="answer"><input type="radio" id="slecte6b" v-model="answerlist[5]" name="q6" value="b"/><label for="slecte6b">{{ questions[5].answers[1] }}</label></li>
                <li class="answer"><input type="radio" id="slecte6c" v-model="answerlist[5]" name="q6" value="c"/><label for="slecte6c">{{ questions[5].answers[2] }}</label></li>
                <li class="answer"><input type="radio" id="slecte6d" v-model="answerlist[5]" name="q6" value="d"/><label for="slecte6d">{{ questions[5].answers[3] }}</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[5] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>7. {{ questions[6].contents }}</span>
        </div>
        <div class="text item">
            <ul id="q7">
                <li class="answer"><input type="radio" id="slecte7a" v-model="answerlist[6]" name="q7" value="a"/><label for="slecte7a">{{ questions[6].answers[0] }}</label></li>
                <li class="answer"><input type="radio" id="slecte7b" v-model="answerlist[6]" name="q7" value="b"/><label for="slecte7b">{{ questions[6].answers[1] }}</label></li>
                <li class="answer"><input type="radio" id="slecte7c" v-model="answerlist[6]" name="q7" value="c"/><label for="slecte7c">{{ questions[6].answers[2] }}</label></li>
                <li class="answer"><input type="radio" id="slecte7d" v-model="answerlist[6]" name="q7" value="d"/><label for="slecte7d">{{ questions[6].answers[3] }}</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[6] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>8. {{ questions[7].contents }}</span>
        </div>
        <div class="text item">
            <ul id="q8">
                <li class="answer"><input type="radio" id="slecte8a" v-model="answerlist[7]" name="q8" value="a"/><label for="slecte8a">{{ questions[7].answers[0] }}</label></li>
                <li class="answer"><input type="radio" id="slecte8b" v-model="answerlist[7]" name="q8" value="b"/><label for="slecte8b">{{ questions[7].answers[1] }}</label></li>
                <li class="answer"><input type="radio" id="slecte8c" v-model="answerlist[7]" name="q8" value="c"/><label for="slecte8c">{{ questions[7].answers[2] }}</label></li>
                <li class="answer"><input type="radio" id="slecte8d" v-model="answerlist[7]" name="q8" value="d"/><label for="slecte8d">{{ questions[7].answers[3] }}</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[7] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>9. {{ questions[8].contents }}</span>
        </div>
        <div class="text item">
            <ul id="q9">
                <li class="answer"><input type="radio" id="slecte9a" v-model="answerlist[8]" name="q9" value="a"/><label for="slecte9a">{{ questions[8].answers[0] }}</label></li>
                <li class="answer"><input type="radio" id="slecte9b" v-model="answerlist[8]" name="q9" value="b"/><label for="slecte9b">{{ questions[8].answers[1] }}</label></li>
                <li class="answer"><input type="radio" id="slecte9c" v-model="answerlist[8]" name="q9" value="c"/><label for="slecte9c">{{ questions[8].answers[2] }}</label></li>
                <li class="answer"><input type="radio" id="slecte9d" v-model="answerlist[8]" name="q9" value="d"/><label for="slecte9d">{{ questions[8].answers[3] }}</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[8] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>10. {{ questions[9].contents }}</span>
        </div>
        <div class="text item">
            <ul id="q10">
                <li class="answer"><input type="radio" id="slecte10a" v-model="answerlist[9]" name="q10" value="a"/><label for="slecte10a">{{ questions[9].answers[0] }}</label></li>
                <li class="answer"><input type="radio" id="slecte10b" v-model="answerlist[9]" name="q10" value="b"/><label for="slecte10b">{{ questions[9].answers[1] }}</label></li>
                <li class="answer"><input type="radio" id="slecte10c" v-model="answerlist[9]" name="q10" value="c"/><label for="slecte10c">{{ questions[9].answers[2] }}</label></li>
                <li class="answer"><input type="radio" id="slecte10d" v-model="answerlist[9]" name="q10" value="d"/><label for="slecte10d">{{ questions[9].answers[3] }}</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[9] }}</template></p>
        </div>
        </el-card>
        </div>
        <div class="test-submit"><Confirmbox v-bind:selected="answerlist" v-on:showResult="resultOn"/></div>
    </div>
</template>

<script>
import axios from 'axios'
import Confirmbox from './confirmbox'
import { mapGetters, mapActions } from 'vuex'
export default {
    props:['examid'],
    data(){
        return{
            examIndex:-1,
            answerlist:['','','','','','','','','',''],
            rightAnswerlist:[],
            questions:[],
            mytetsResult:false
        }
    },
    computed:{
        ...mapGetters(['courseId','courseTests']),
        myTests(){
            return this.courseTests
        }
    },
    watch:{
        $route(to,from){
            this.init()
        }
    },
    components:{ Confirmbox },
    methods:{
        ...mapActions(['addPoints']),
        resultOn(){
            this.myTests[this.examIndex].testResult = true
            this.mytetsResult = true
            if (this.myTests[this.examIndex].testPoint>0) {
                this.myTests[this.examIndex].testPoint = 0
            }
            var radios = document.querySelectorAll('.item')
            for (let i = 0; i < this.answerlist.length; i++) {
                if (this.answerlist[i]) {
                    if (this.answerlist[i] === this.rightAnswerlist[i]) {
                        radios[i].classList.add('right')
                        this.myTests[this.examIndex].testPoint++
                    }else{
                        radios[i].classList.add('wrong')
                    }
                }else{
                    var items = radios[i].querySelectorAll('input')
                    for (let m = 0; m < items.length; m++) {
                        if (items[m].value === this.rightAnswerlist[i]) {
                            items[m].classList.add('markAnswer')
                        }
                        
                    }
                } 
            }
            console.log(this.myTests)
            this.addPoints({courseId:this.courseId,tests:this.myTests})
        },
        init(){
            this.mytetsResult = false
            this.answerlist = ['','','','','','','','','','']
            var rights = document.querySelectorAll('.right')
            var wrongs = document.querySelectorAll('.wrong')
            var marks = document.querySelectorAll('.markAnswer')
            console.log(marks)
            for (let i = 0; i < rights.length; i++) {
                rights[i].classList.remove('right')
            }
            for (let i = 0; i < wrongs.length; i++) {
                wrongs[i].classList.remove('wrong')
            }
            for (let i = 0; i < marks.length; i++) {
                marks[i].classList.remove('markAnswer')   
            }
            var param = this.examid
            var file = param.split(':')[1]
            axios.get(`static/tests/${file}.json`)
                .then(res => {
                    this.examIndex = res.data.index
                    this.questions = res.data.questions
                    this.rightAnswerlist = res.data.rightAnswers
                })
        }
    },
    created:function(){
        this.init()
    }
}

var listItem = document.querySelectorAll('.answer')

function fn(){
    listItem.forEach(item=>{
    item.addEventListener('click',callback,true)
})
}
fn()
function callback(e){
    listItem.classList.add('onClicked')
}

</script>
<style scoped>
/* 答案高亮 */
.right ul li input[type="radio"]:checked + label{
    color: green;
}
.wrong ul li input[type="radio"]:checked + label{
    color: red;
}
input.markAnswer + label{
    color: red;
}

/* 选项样式 */
.item li{
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #dcdfe6;
    border-radius: 10px;
}




/* 页面样式 */
.mypoint{
    text-align: right;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 20px;
}
.mypoint span{
    padding: 10px;
    color: #00A491;
}
.mypoint span i{
    font-size: 22px;
}
</style>