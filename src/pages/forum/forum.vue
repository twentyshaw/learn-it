<template>
	<div id="blog">
		<h3 class="ttl">Trending Post</h3>
		<div class="recent-inner">
			<el-card class="box-card">
				<div class="header-inner">
				<div class="card-ttl">
					<div class="cus-icon"><img src="../../assets/tx05.png"></div>
					<div class="cus-info">
						<p class="cus-ttl">Vuexでオブジェクトや配列の変更を画面に反映したい</p>
						<p class="cus-user"><span class="cus-name">mori</span><span class="cus-time">{{ currentDate }}</span></p>
					</div>
				</div>
				<el-button type="text"><i class="iconfont icon-tag"></i></el-button>
				</div>
				<div class="text item">
					<div class="item-tag"><el-tag>vue</el-tag><el-tag>js</el-tag><el-tag>web</el-tag></div>
					<div class="item-social">
						<span class="like"><i class="iconfont icon-dianzan"></i>162 votes</span>
						<span class="comment"><i class="iconfont icon-pinglun_huaban"></i>88 replies</span>
						<span class="view"><i class="iconfont icon-chakan"></i>360 views</span>
					</div>
				</div>
			</el-card>
			<el-card class="box-card">
				<div class="header-inner">
				<div class="card-ttl">
					<div class="cus-icon"><img src="../../assets/tx01.jpg"></div>
					<div class="cus-info">
						<p class="cus-ttl">state 変数は 1 つにすべきですか、たくさん使うべきですか？</p>
						<p class="cus-user"><span class="cus-name">kata</span><span class="cus-time">{{ currentDate }}</span></p>
					</div>
				</div>
				<el-button type="text"><i class="iconfont icon-tag"></i></el-button>
				</div>
				<div class="text item">
					<div class="item-tag"><el-tag>vue</el-tag><el-tag>js</el-tag></div>
					<div class="item-social">
						<span class="like"><i class="iconfont icon-dianzan"></i>120 votes</span>
						<span class="comment"><i class="iconfont icon-pinglun_huaban"></i>80 replies</span>
						<span class="view"><i class="iconfont icon-chakan"></i>200 views</span>
					</div>
				</div>
			</el-card>
			<el-card class="box-card">
				<div class="header-inner">
				<div class="card-ttl">
					<div class="cus-icon"><img src="../../assets/tx03.jpg"></div>
					<div class="cus-info">
						<p class="cus-ttl">React チュートリアル：初めてのアプリを作成して安全にする</p>
						<p class="cus-user"><span class="cus-name">hiroshi</span><span class="cus-time">{{ currentDate }}</span></p>
					</div>
				</div>
				<el-button type="text"><i class="iconfont icon-tag"></i></el-button>
				</div>
				<div class="text item">
					<div class="item-tag"><el-tag>react</el-tag><el-tag>web</el-tag></div>
					<div class="item-social">
						<span class="like"><i class="iconfont icon-dianzan"></i>106 votes</span>
						<span class="comment"><i class="iconfont icon-pinglun_huaban"></i>72 replies</span>
						<span class="view"><i class="iconfont icon-chakan"></i>206 views</span>
					</div>
				</div>
			</el-card>
			<el-card class="box-card">
				<div class="header-inner">
				<div class="card-ttl">
					<div class="cus-icon"><img src="../../assets/tx02.jpg"></div>
					<div class="cus-info">
						<p class="cus-ttl">localStorageに複数のテキストを保存、取得したいです</p>
						<p class="cus-user"><span class="cus-name">hayashi</span><span class="cus-time">{{ currentDate }}</span></p>
					</div>
				</div>
				<el-button type="text"><i class="iconfont icon-tag"></i></el-button>
				</div>
				<div class="text item">
					<div class="item-tag"><el-tag>JavaScript</el-tag><el-tag>API</el-tag><el-tag>web</el-tag></div>
					<div class="item-social">
						<span class="like"><i class="iconfont icon-dianzan"></i>106 votes</span>
						<span class="comment"><i class="iconfont icon-pinglun_huaban"></i>98 replies</span>
						<span class="view"><i class="iconfont icon-chakan"></i>366 views</span>
					</div>
				</div>
			</el-card>
			<el-card class="box-card">
				<div class="header-inner">
				<div class="card-ttl">
					<div class="cus-icon"><img src="../../assets/tx04.jpg"></div>
					<div class="cus-info">
						<p class="cus-ttl">JavaScriptで追加した要素にイベントをつける方法</p>
						<p class="cus-user"><span class="cus-name">mori</span><span class="cus-time">{{ currentDate }}</span></p>
					</div>
				</div>
				<el-button type="text"><i class="iconfont icon-tag"></i></el-button>
				</div>
				<div class="text item">
					<div class="item-tag"><el-tag>JavaScript</el-tag><el-tag>API</el-tag></div>
					<div class="item-social">
						<span class="like"><i class="iconfont icon-dianzan"></i>60 votes</span>
						<span class="comment"><i class="iconfont icon-pinglun_huaban"></i>26 replies</span>
						<span class="view"><i class="iconfont icon-chakan"></i>140 views</span>
					</div>
				</div>
			</el-card>
		</div>
	</div>
</template>
<style scoped type="text/css" src="./forum.css"></style>
<script src="./forum.js"></script>