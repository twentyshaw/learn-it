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
		<div class="social-inner box-wrapper">
			<div class="user-memo box">
				<h3 class="ttl">Memo</h3>
				<div class="memo-inner">
				<dl v-for="memo in memos" :key="memo">
					<dt><router-link :to="'/user/memo/memo_detail/:'+ memo.id"><span class="memo-ttl">{{memo.attributes.memottl}}</span><span class="memo-time">{{ formatDate(memo.updatedAt) }}</span></router-link></dt>
					<dd>{{memo.attributes.memoDesc}}</dd>
				</dl>
				</div>
				<div class="btn-wrapper"><router-link to="/user/memo" class="btn">Read More</router-link></div>
			</div>
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
		<div class="recent box">
			<h3 class="ttl">Recent Activities</h3>
			<div class="recent-inner">
			<dl class="recent-user" v-for="forum in forums" :key="forum">
				<dt>
					<span class="cus-icon"><img :src="forum.attributes.avatar" class="commicon"></span><span class="cus-name">{{forum.attributes.poster}}</span>
				</dt>
				<dd><span class="rec-text"><router-link :to="'/user/forum/forum_detail/:'+ forum.id">{{forum.attributes.forumttl}}</router-link></span><span class="rec-time">{{ formatDate(forum.updatedAt) }}</span></dd>
			</dl>
			</div>
		</div><!-- recent -->
		</div>
	</div>
</template>

<style type="text/css" src="./home.css"></style>
<script type="text/javascript" src="./home.js"></script>
