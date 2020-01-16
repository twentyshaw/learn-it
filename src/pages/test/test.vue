<template>
	<div id="test">
		<div class="test-box box-wrapper">
		<div class="test-list box">
			<h3 class="ttl">Course List</h3>
			<div class="testlist-inner">
				<ul>
					<li><router-link to="/user/exercise/exam/:exam01">小テスト01<template v-if="topTestResult[0].testResult"><span class="icon"><i class="el-icon-success"></i></span></template></router-link></li>
					<li><router-link to="/user/exercise/exam/:exam02">小テスト02<template v-if="topTestResult[1].testResult"><span class="icon"><i class="el-icon-success"></i></span></template></router-link></li>
					<li><router-link to="/user/exercise/exam/:exam03">小テスト03<template v-if="topTestResult[2].testResult"><span class="icon"><i class="el-icon-success"></i></span></template></router-link></li>
					<li><router-link to="/user/exercise/exam/:exam04">小テスト04<template v-if="topTestResult[3].testResult"><span class="icon"><i class="el-icon-success"></i></span></template></router-link></li>
					<li><router-link to="/user/exercise/exam/:exam05">小テスト05<template v-if="topTestResult[4].testResult"><span class="icon"><i class="el-icon-success"></i></span></template></router-link></li>
					<li><router-link to="/user/exercise/exam/:exam06">小テスト06<template v-if="topTestResult[5].testResult"><span class="icon"><i class="el-icon-success"></i></span></template></router-link></li>
					<li><router-link to="/user/exercise/exam/:exam07">最終テスト<template v-if="topTestResult[6].testResult"><span class="icon"><i class="el-icon-success"></i></span></template></router-link></li>
				</ul>
			</div>
		</div>
		<div class="test-point box">
			<Ability/>	
		</div>
		</div>
		<div class="test-contents box">
			<h3 class="ttl">Take an exam</h3>
			<router-view></router-view>
		</div>
	</div>
</template>
<style type="text/css" src="./test.css"></style>
<script src="./test.js"></script>