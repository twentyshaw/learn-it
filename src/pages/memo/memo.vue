<template>
	<div id="memo">
		<template v-if="!isdetail">
		<h3 class="ttl">Memo List</h3>
		<div class="memo-list">
		<el-card shadow="hover" class="box-card" v-for="memo in memos" :key="memo">
			<div slot="header" class="clearfix">
			<span class="card-ttl"><span class="ttl-name">{{memo.attributes.memottl}}</span><span class="memo-time">{{ formatDate(memo.updatedAt) }}</span></span>
			<el-button @click="deleteItem(memo.id)" style="padding: 3px 0" type="text">削除</el-button>
			</div>
			<router-link :to="'/user/memo/memo_detail/:'+ memo.id">
			<div class="text item">
			{{memo.attributes.memoDesc}}
			</div>
			</router-link>	
		</el-card>
		<el-card class="addMemo">
			<el-tooltip class="item" effect="dark" content="Click to create a memo" placement="right-start">
				<span class="add-icon" @click="linkToCreate"><i class="el-icon-plus"></i></span>
			</el-tooltip>
		</el-card>
		</div>
		</template>
		<template v-if="isdetail">
			<div id="detail-area">
				<router-view></router-view>
			</div>
		</template>
	</div>
</template>
<style type="text/css" src="./memo.css" scoped></style>
<script src="./memo.js"></script>
