<template>
	<div id="memo">
		<h3 class="ttl">Memo List</h3>
		<div class="memo-inner">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
			<span class="card-ttl">フィボナッチ数<span class="memo-time">{{ currentDate }}</span></span>
			<el-button style="float: right; padding: 3px 0" type="text">編集</el-button>
			</div>
			<div class="text item">
			フィボナッチ数(1,1,2,3,5,8,13,...)を2**31より小さい範囲まで表示する
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
			<span class="card-ttl">JS関数<span class="memo-time">{{ currentDate }}</span></span>
			<el-button style="float: right; padding: 3px 0" type="text">編集</el-button>
			</div>
			<div class="text item">
			関数は JavaScript の基本的な構成要素のひとつです。また関数は、JavaScriptの手続き。つまり、タスクや値計算を実行する文の集まりです。
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
			<span class="card-ttl">JavaScript while Loop<span class="memo-time">{{ currentDate }}</span></span>
			<el-button style="float: right; padding: 3px 0" type="text">編集</el-button>
			</div>
			<div class="text item">
			「while文」は、主に回数の決まっていない繰り返し処理を行うために使われるメソッドになります。一般的にプログラムは、上から下へ処理されて1度実行されると終了してしまいます。
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
			<span class="card-ttl">new演算子の使い方<span class="memo-time">{{ currentDate }}</span></span>
			<el-button style="float: right; padding: 3px 0" type="text">編集</el-button>
			</div>
			<div class="text item">
			まず最初に、みなさんはJavaScriptで「new」をどんな時に使うかご存知でしょうか？簡単に言ってしまえば「インスタンスを作成する時」にnew演算子は使われる…、ということなのですが、そもそも「インスタンス」とは何でしょうか？
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
			<span class="card-ttl">JS関数<span class="memo-time">{{ currentDate }}</span></span>
			<el-button style="float: right; padding: 3px 0" type="text">編集</el-button>
			</div>
			<div class="text item">
			関数は JavaScript の基本的な構成要素のひとつです。また関数は、JavaScriptの手続き。つまり、タスクや値計算を実行する文の集まりです。
			</div>
		</el-card>
		</div>
	</div>
</template>
<style type="text/css" src="./memo.css" scoped></style>
<script src="./memo.js"></script>
