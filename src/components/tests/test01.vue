<template>
    <div id="test01">
    <p class="mypoint"><template v-if="this.myTests[0].testResult"><span class="icon"><i class="iconfont icon-fenshu"></i></span>score:<span class="myscore">{{ myTests[0].testPoint }}</span></template></p>
    <div class="test-inner">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>1. マーケティングミックスの検討に用いる考え方の一つであり，売り手側の視点を分類したものはどれか。</span>
        </div>
        <div class="text item">
            <ul id="q1">
                <li class="answer"><input type="radio" id="slecte1a" v-model="answerlist[0]" value="a"/><label for="slecte1a">4C</label></li>
                <li class="answer"><input type="radio" id="slecte1b" v-model="answerlist[0]" value="b"/><label for="slecte1b">4P</label></li>
                <li class="answer"><input type="radio" id="slecte1c" v-model="answerlist[0]" value="c"/><label for="slecte1c">PPM</label></li>
                <li class="answer"><input type="radio" id="slecte1d" v-model="answerlist[0]" value="d"/><label for="slecte1d">SWOT</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[0] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>2. 経営戦略策定の過程で，今後力を入れるべき事業，撤退すべき事業の分析に用いる手法として適切なものはどれか。</span>
        </div>
        <div class="text item">
            <ul id="q2">
                <li class="answer"><input type="radio" id="slecte2a" v-model="answerlist[1]" value="a"/><label for="slecte2a">BPR</label></li>
                <li class="answer"><input type="radio" id="slecte2b" v-model="answerlist[1]" value="b"/><label for="slecte2b">BSC</label></li>
                <li class="answer"><input type="radio" id="slecte2c" v-model="answerlist[1]" value="c"/><label for="slecte2c">CSF</label></li>
                <li class="answer"><input type="radio" id="slecte2d" v-model="answerlist[1]" value="d"/><label for="slecte2d">PPM</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[1] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>3. 消費財メーカにおけるBSC(バランススコアカード)で，顧客の視点に関する業績評価指標として，最も適切なものはどれか。</span>
        </div>
        <div class="text item">
            <ul id="q3">
                <li class="answer"><input type="radio" id="slecte3a" v-model="answerlist[2]" name="q3" value="a"/><label for="slecte3a">開発効率</label></li>
                <li class="answer"><input type="radio" id="slecte3b" v-model="answerlist[2]" name="q3" value="b"/><label for="slecte3b">キャッシュフロー</label></li>
                <li class="answer"><input type="radio" id="slecte3c" v-model="answerlist[2]" name="q3" value="c"/><label for="slecte3c">市場占有率</label></li>
                <li class="answer"><input type="radio" id="slecte3d" v-model="answerlist[2]" name="q3" value="d"/><label for="slecte3d">特許取得件数</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[2] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>4. 新商品の市場への浸透において重要であるといわれているオピニオンリーダの説明として，適切なものはどれか。</span>
        </div>
        <div class="text item">
            <ul id="q4">
                <li class="answer"><input type="radio" id="slecte4a" v-model="answerlist[3]" name="q4" value="a"/><label for="slecte4a">多くの人が当該商品を利用していることを確認してから購入する層</label></li>
                <li class="answer"><input type="radio" id="slecte4b" v-model="answerlist[3]" name="q4" value="b"/><label for="slecte4b">比較的慎重であり，早期購入者に相談するなどしてから当該商品を追随的に購入する層</label></li>
                <li class="answer"><input type="radio" id="slecte4c" v-model="answerlist[3]" name="q4" value="c"/><label for="slecte4c">比較的早期に自らの価値判断で当該商品を購入し，後続する消費者層に影響を与える層</label></li>
                <li class="answer"><input type="radio" id="slecte4d" v-model="answerlist[3]" name="q4" value="d"/><label for="slecte4d">冒険的で率先して当該商品を購入する層</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[3] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>5. 中堅家電メーカA社では，自社の製品群に対する資金投資の優先度を検討するために，将来性と競争力によって製品をグループ分けしたい。このとき用いる分析手法として，最も適切なものはどれか。</span>
        </div>
        <div class="text item">
            <ul id="q5">
                <li class="answer"><input type="radio" id="slecte5a" v-model="answerlist[4]" name="q5" value="a"/><label for="slecte5a">自社製品の価格と客層に関するクラスタ分析</label></li>
                <li class="answer"><input type="radio" id="slecte5b" v-model="answerlist[4]" name="q5" value="b"/><label for="slecte5b">自社製品の購入顧客に関するRFM分析</label></li>
                <li class="answer"><input type="radio" id="slecte5c" v-model="answerlist[4]" name="q5" value="c"/><label for="slecte5c">自社製品のシェアと市場成長率に関するPPM分析</label></li>
                <li class="answer"><input type="radio" id="slecte5d" v-model="answerlist[4]" name="q5" value="d"/><label for="slecte5d">自社製品の不具合の原因に関する主成分分析</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[4] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>6. バランススコアカードを用いて戦略立案する際，策定した戦略目標ごとに，その実現のために明確化する事項として，適切なものはどれか。</span>
        </div>
        <div class="text item">
            <ul id="q6">
                <li class="answer"><input type="radio" id="slecte6a" v-model="answerlist[5]" name="q6" value="a"/><label for="slecte6a">企業倫理</label></li>
                <li class="answer"><input type="radio" id="slecte6b" v-model="answerlist[5]" name="q6" value="b"/><label for="slecte6b">経営理念</label></li>
                <li class="answer"><input type="radio" id="slecte6c" v-model="answerlist[5]" name="q6" value="c"/><label for="slecte6c">重要成功要因</label></li>
                <li class="answer"><input type="radio" id="slecte6d" v-model="answerlist[5]" name="q6" value="d"/><label for="slecte6d">ビジョン</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[5] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>7. 企業が，他の企業の経営資源を活用する手法として，企業買収や企業提携がある。企業買収と比較したときの企業提携の一般的なデメリットだけを全て挙げたものはどれか。<br>①相手企業の組織や業務プロセスの改革が必要となる。<br>②経営資源の活用に関する相手企業の意思決定への関与が限定的である。<br>③必要な投資が大きく，財務状況への影響が発生する。</span>
        </div>
        <div class="text item">
            <ul id="q7">
                <li class="answer"><input type="radio" id="slecte7a" v-model="answerlist[6]" name="q7" value="a"/><label for="slecte7a">①</label></li>
                <li class="answer"><input type="radio" id="slecte7b" v-model="answerlist[6]" name="q7" value="b"/><label for="slecte7b">①②③</label></li>
                <li class="answer"><input type="radio" id="slecte7c" v-model="answerlist[6]" name="q7" value="c"/><label for="slecte7c">①③</label></li>
                <li class="answer"><input type="radio" id="slecte7d" v-model="answerlist[6]" name="q7" value="d"/><label for="slecte7d">②</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[6] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>8. A社では営業部員の行動予定を把握したい。このとき利用するソフトウェアとして，最も適切なものはどれか。</span>
        </div>
        <div class="text item">
            <ul id="q8">
                <li class="answer"><input type="radio" id="slecte8a" v-model="answerlist[7]" name="q8" value="a"/><label for="slecte8a">CRMソフトウェア</label></li>
                <li class="answer"><input type="radio" id="slecte8b" v-model="answerlist[7]" name="q8" value="b"/><label for="slecte8b">ERPソフトウェア</label></li>
                <li class="answer"><input type="radio" id="slecte8c" v-model="answerlist[7]" name="q8" value="c"/><label for="slecte8c">SCMソフトウェア</label></li>
                <li class="answer"><input type="radio" id="slecte8d" v-model="answerlist[7]" name="q8" value="d"/><label for="slecte8d">グループウェア</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[7] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>9. SCMの導入効果として，最も適切なものはどれか。</span>
        </div>
        <div class="text item">
            <ul id="q9">
                <li class="answer"><input type="radio" id="slecte9a" v-model="answerlist[8]" name="q9" value="a"/><label for="slecte9a">売掛金に対する顧客の支払状況を迅速に把握できる。</label></li>
                <li class="answer"><input type="radio" id="slecte9b" v-model="answerlist[8]" name="q9" value="b"/><label for="slecte9b">顧客に対するアプローチ方法を営業部門全体で共有できる。</label></li>
                <li class="answer"><input type="radio" id="slecte9c" v-model="answerlist[8]" name="q9" value="c"/><label for="slecte9c">顧客の要求に合わせてタイムリーに商品を供給できる。</label></li>
                <li class="answer"><input type="radio" id="slecte9d" v-model="answerlist[8]" name="q9" value="d"/><label for="slecte9d">個々の商品への顧客のニーズに対する理解を深めることができる。</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[8] }}</template></p>
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>10. SWOT分析で用いる四つの視点の一つである"脅威"になり得る事例はどれか。</span>
        </div>
        <div class="text item">
            <ul id="q10">
                <li class="answer"><input type="radio" id="slecte10a" v-model="answerlist[9]" name="q10" value="a"/><label for="slecte10a">家電メーカA社：技術力の低下によって，新製品開発件数が減少している。</label></li>
                <li class="answer"><input type="radio" id="slecte10b" v-model="answerlist[9]" name="q10" value="b"/><label for="slecte10b">自動車販売会社B社：営業員のモチベーションが以前に比べて下降気味である。</label></li>
                <li class="answer"><input type="radio" id="slecte10c" v-model="answerlist[9]" name="q10" value="c"/><label for="slecte10c">ブランドショップC社：ブランド好感度が下がってきている。</label></li>
                <li class="answer"><input type="radio" id="slecte10d" v-model="answerlist[9]" name="q10" value="d"/><label for="slecte10d">輸出企業D社：為替レートが円高基調で推移している。</label></li>
            </ul>
            <p class="r-answer"><template v-if="mytetsResult">right answer: {{ rightAnswerlist[9] }}</template></p>
        </div>
        </el-card>
        </div>
        <div class="test-submit"><Confirmbox v-bind:selected="answerlist" v-on:showResult="resultOn"/></div>
    </div>
</template>

<script>
import Confirmbox from './confirmbox'
import { mapGetters, mapActions } from 'vuex'
export default {
    name:"Test01",
    data(){
        return{
            answerlist:['','','','','','','','','',''],
            rightAnswerlist:['b','d','c','c','c','c','d','d','c','d'],
            mytetsResult:false
        }
    },
    computed:{
        ...mapGetters(['courseId','courseTests']),
        myTests(){
            return this.courseTests
        }
    },
    components:{ Confirmbox },
    methods:{
        ...mapActions(['addPoints']),
        resultOn:function(){
            this.myTests[0].testResult = true
            this.mytetsResult = true
            if (this.myTests[0].testPoint>0) {
                this.myTests[0].testPoint = 0
            }
            var radios = document.querySelectorAll('.item')
            for (let i = 0; i < this.answerlist.length; i++) {
                if (this.answerlist[i]) {
                    if (this.answerlist[i] === this.rightAnswerlist[i]) {
                        radios[i].classList.add('right')
                        this.myTests[0].testPoint++
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
        }
    }
}

var listItem = document.querySelectorAll('.answer')

function fn(){
    listItem.forEach(item=>{
    console.log(item)
    item.addEventListener('click',callback,true)
})
}
fn()
function callback(e){
    listItem.classList.add('onClicked')
    console.log('e.target')
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