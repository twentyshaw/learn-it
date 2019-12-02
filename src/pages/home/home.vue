<template>
	<div id="home">
		<div class="home-top box-wrapper">
		<div class="user-box box">
			<div class="user-box-inner">
			<div class="user-text">
				<p class="ttl">Start learning to code<br>with <strong>LearnIT</strong></p>
			</div>
			<span class="goLearn"><router-link to="/user/course">START</router-link></span>
			</div>
		</div>
		<div class="achievement box">
			<span class="icon"><i class="iconfont icon-rili"></i></span>
			<ul class="achi-inner">
				<li>It has been <span id="achi-days" class="achi-item">79</span>days since you came to LearnIT</li>
				<li>You have studied<span id="achi-lesson" class="achi-item">66</span>lessons </li>
				<li>You have already earned <span id="achi-point" class="achi-item">108</span>points</li>
			</ul>
			<p>Keep fighting!</p>
		</div>
		</div>
		<div class="home-main">
		<div class="user-data box-wrapper">
			<div class="line-data box">
				<div class="data-line">
					<Compara/>
				</div>
			</div>
			<div class="sector-data box">
				<div class="data-sector">
					<Point/>
				</div>
			</div>			
		</div>
		<div class="social box-wrapper">
			<div class="user-memo box">
				<h3 class="ttl">Memo</h3>
				<div class="memo-inner">
				<dl>
					<dt><span class="memo-ttl">フィボナッチ数</span><span class="memo-time">before 26mins</span></dt>
					<dd>フィボナッチ数(1,1,2,3,5,8,13,...)を2**31より小さい範囲まで表示する
					</dd>
				</dl>
				<dl>
					<dt><span class="memo-ttl">JS関数</span><span class="memo-time">before 46mins</span></dt>
					<dd>関数は JavaScript の基本的な構成要素のひとつです。また関数は、JavaScriptの手続き。つまり、タスクや値計算を実行する文の集まりです。</dd>
				</dl>
				<dl>
					<dt><span class="memo-ttl">JavaScript while Loop</span><span class="memo-time">2019.10.27</span></dt>
					<dd>「while文」は、主に回数の決まっていない繰り返し処理を行うために使われるメソッドになります。一般的にプログラムは、上から下へ処理されて1度実行されると終了してしまいます。</dd>
				</dl>
				<dl>
					<dt><span class="memo-ttl">new演算子の使い方</span><span class="memo-time">2019.10.22</span></dt>
					<dd>まず最初に、みなさんはJavaScriptで「new」をどんな時に使うかご存知でしょうか？簡単に言ってしまえば「インスタンスを作成する時」にnew演算子は使われる…、ということなのですが、そもそも「インスタンス」とは何でしょうか？</dd>
				</dl>
				<dl>
					<dt><span class="memo-ttl">new演算子の使い方</span><span class="memo-time">2019.10.22</span></dt>
					<dd>まず最初に、みなさんはJavaScriptで「new」をどんな時に使うかご存知でしょうか？簡単に言ってしまえば「インスタンスを作成する時」にnew演算子は使われる…、ということなのですが、そもそも「インスタンス」とは何でしょうか？</dd>
				</dl>
				<dl>
					<dt><span class="memo-ttl">フィボナッチ数</span><span class="memo-time">before 26mins</span></dt>
					<dd>フィボナッチ数(1,1,2,3,5,8,13,...)を2**31より小さい範囲まで表示する
					</dd>
				</dl>
				<dl>
					<dt><span class="memo-ttl">JS関数</span><span class="memo-time">before 46mins</span></dt>
					<dd>関数は JavaScript の基本的な構成要素のひとつです。また関数は、JavaScriptの手続き。つまり、タスクや値計算を実行する文の集まりです。</dd>
				</dl>
				</div>
				<div class="btn-wrapper"><router-link to="/user/home" class="btn">Read More</router-link></div>
			</div>
			<div class="social-inner">
			<div class="recent box">
			<h3 class="ttl">Recent Activities</h3>
			<div class="recent-inner">
			<dl class="recent-user">
				<dt>
					<span class="cus-icon"><img src="../../assets/tx05.png"></span><span class="cus-name"><em>mori</em>さん</span>
				</dt>
				<dd><span class="rec-text">Vuexでオブジェクトや配列の変更を画面に反映したい</span><span class="rec-time">before 3secs</span></dd>
			</dl>
			<dl class="recent-user">
				<dt>
					<span class="cus-icon"><img src="../../assets/tx01.jpg"></span><span class="cus-name"><em>kata</em>さん</span>
				</dt>
				<dd><span class="rec-text">state 変数は 1 つにすべきですか、たくさん使うべきですか？</span><span class="rec-time">before 6mins</span></dd>
			</dl>
			<dl class="recent-user">
				<dt>
					<span class="cus-icon"><img src="../../assets/tx03.jpg"></span><span class="cus-name"><em>kata</em>さん</span>
				</dt>
				<dd><span class="rec-text">React チュートリアル：初めてのアプリを作成して安全にする</span><span class="rec-time">before 26mins</span></dd>
			</dl>
			<dl class="recent-user">
				<dt>
					<span class="cus-icon"><img src="../../assets/tx02.jpg"></span><span class="cus-name"><em>hiroshi</em>さん</span>
				</dt>
				<dd><span class="rec-text">localStorageに複数のテキストを保存、取得したいです</span><span class="rec-time">12:26</span></dd>
			</dl>
			<dl class="recent-user">
				<dt>
					<span class="cus-icon"><img src="../../assets/tx04.jpg"></span><span class="cus-name"><em>sato</em>さん</span>
				</dt>
				<dd><span class="rec-text">JavaScriptで追加した要素にイベントをつける方法</span><span class="rec-time">14:36</span></dd>
			</dl>
			</div>
			</div><!-- recent -->
			<div class="rank box">
			<h3 class="ttl">Ranking</h3>
			<div class="rank-inner">
			<dl>
				<dt>
					<span class="cus-icon"><img src="../../assets/tx05.png"></span><span class="cus-name"><em>mori</em>さん</span>
				</dt>
				<dd>No.<span class="rank-num">24</span></dd>
			</dl>
			<dl>
				<dt>
					<span class="cus-icon"><img src="../../assets/tx01.jpg"></span><span class="cus-name"><em>hayashi</em>さん</span>
				</dt>
				<dd>No.<span class="rank-num">25</span></dd>
			</dl>
			<dl>
				<dt>
					<span class="cus-icon"><img src="../../assets/tx02.jpg"></span><span class="cus-name"><em>sato</em>さん</span>
				</dt>
				<dd>No.<span class="rank-num">26</span></dd>
			</dl>
			<dl>
				<dt>
					<span class="cus-icon"><img src="../../assets/tx03.jpg"></span><span class="cus-name"><em>hiroshi</em>さん</span>
				</dt>
				<dd>No.<span class="rank-num">27</span></dd>
			</dl>
			<dl>
				<dt>
					<span class="cus-icon"><img src="../../assets/tx04.jpg"></span><span class="cus-name"><em>kata</em>さん</span>
				</dt>
				<dd>No.<span class="rank-num">28</span></dd>
			</dl>	
			</div>		
			</div> <!-- rank -->
			</div><!-- social-inner -->
		</div>
		</div>
	</div>
</template>

<style type="text/css" src="./home.css"></style>
<script type="text/javascript" src="./home.js"></script>
