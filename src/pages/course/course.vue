<template>
	<div id="course">
		<div class="course-list box">
			<h3 class="ttl">Course List</h3>
			<div class="course-inner">
				<ul>
					<li>IT Passport</li>
					<li>Python</li>
					<li>JavaScript</li>
					<li>Vue.js</li>
				</ul>
			</div>
		</div>
		<div class="video-box box-wrapper">
			<div class="video-content box">
				<h3 class="ttl">COURSE: ITパスポート<span><el-progress :percentage="percentage" :color="customColors"></el-progress></span></h3>
				<iframe id="player" width="580" height="315" src="https://www.youtube.com/embed/videoseries?list=PLC9xywNMIf9jgTizhye6GyPjZcuPZ9ou5" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				<div class="btn-group">
					<el-button type="success" @click="increase">completed</el-button>
					<!-- <el-button type="info" @click="giveup">諦めたい(╯°Д°)╯ ┻━┻</el-button> -->
				</div>
			</div>
			<div class="memo-ctrl box">
				<h3 class="ttl">Make a note</h3>
				<div class="memo-ctrl-inner">
			      <form class="form-box" id="memo-form">
			        <div class="form-group">
			          <input type="text" class="form-control" v-model="memoCont.title" placeholder="Title">
			        </div>
			        <div class="form-group">
                  	  <textarea class="form-control" v-model="memoCont.desc" cols="30" rows="5" placeholder="Write your note here."></textarea>
			        </div>
			        <div class="form-group">
			          <el-button type="primary" @click="onSubmit">Create</el-button>
					  <el-button @click="clearOut">Clear</el-button>
			        </div>
			      </form>
				</div>
			</div>
		</div>

	</div>
</template>
<style type="text/css" src="./course.css"></style>
<script src="./course.js"></script>