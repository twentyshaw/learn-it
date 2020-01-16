<template>
	<div id="blog">
		<template v-if="!isdetail && !ask">
		<div class="forum-top">
			<div class="search">
				<el-input
				placeholder="Search..."
				v-model="input"
				clearable
				class="s-input">
				</el-input>
				<el-button icon="el-icon-search" circle></el-button>
			</div>
			<div class="ask">
				<router-link to="/user/forum/forum_ask">Ask Question</router-link>
			</div>
		</div>
		<div class="forum-main box">
		<h3 class="ttl">Trending Post</h3>
		<div class="recent-inner">
			<el-card class="box-card" v-for="forum in forums" :key="forum">
				<div class="header-inner">
				<div class="card-ttl">
					<div class="cus-icon"><img :src="forum.attributes.avatar" class="commicon"></div>
					<div class="cus-info">
						<p class="cus-ttl"><router-link :to="'/user/forum/forum_detail/:'+ forum.id">{{forum.attributes.forumttl}}</router-link></p>
						<p class="cus-user"><span class="cus-name">{{forum.attributes.poster}}</span><span class="cus-time">{{ formatDate(forum.updatedAt) }}</span></p>
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
		</div>
		</div>
		</template>
		<template v-if="isdetail">
			<router-view></router-view>
		</template>
		<template v-if="ask">
			<router-view></router-view>
		</template>
	</div>
</template>
<style scoped type="text/css" src="./forum.css"></style>
<script src="./forum.js"></script>