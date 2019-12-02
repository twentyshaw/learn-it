<template>
	<div id="message">
		<h3 class="ttl">Chat</h3>
		<el-container style="height: 580px; border: 1px solid #eee;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
			<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<ul class="chat-list">
					<li><span class="cus-icon"><img src="../../assets/tx05.png"></span><span class="cus-name">mori</span></li>
					<li style="background: #c4c8cf;"><span class="cus-icon"><img src="../../assets/tx01.jpg"></span><span class="cus-name">hayashi</span></li>
					<li><span class="cus-icon"><img src="../../assets/tx02.jpg"></span><span class="cus-name">sato</span></li>
					<li><span class="cus-icon"><img src="../../assets/tx03.jpg"></span><span class="cus-name">hiroshi</span></li>
					<li><span class="cus-icon"><img src="../../assets/tx04.jpg"></span><span class="cus-name">kata</span></li>
				</ul>
			</el-aside>
			
			<el-container>
				<el-header style="text-align: left; font-size: 18px">
				<span class="user-name">hayashi</span>
				</el-header>
				
				<el-main>
					<div class="message-box">
						<dl>
							<dt><span class="cus-icon"><img src="../../assets/tx01.jpg"></span></dt>
							<dd>こんにちは！</dd>
						</dl>
						<dl>
							<dt><span class="cus-icon"><img src="../../assets/user.jpg"></span></dt>
							<dd>hello！</dd>
						</dl>
					</div>
					<div class="chat-box">
						<div class="chat-kit"></div>
						<div class="chat-input">
							<div class="input-area">
								<el-input
									type="textarea"
									:rows="6"
									placeholder="please input your message"
									v-model="textarea">
								</el-input>
								<el-button type="success" plain>send</el-button>
							</div>
							
						</div>
					</div>
				</el-main>
			</el-container>
		</el-container>

	</div>
</template>
<style type="text/css" src="./message.css"></style>
<script src="./message.js"></script>