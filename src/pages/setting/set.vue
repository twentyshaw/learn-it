<template>
  <div id="setting">
      <div class="set-inner box">
          <section class="set-main">
              <el-tooltip class="item" effect="dark" content="Click to select a picture" placement="right-start">
              <div class="set-avatar">
                <input type="file" id="avatar" name="avatar" @change="onchange">
                <el-avatar v-if="imagePreview" icon="el-icon-user-solid" shape="square" size="80" :src="imagePreview"></el-avatar>
                <el-avatar v-else icon="el-icon-user-solid" shape="square" size="80" :src="insIcon"></el-avatar>
              </div>
              </el-tooltip>
              <div class="avatar-upload">
                  <el-button type="primary" @click="save">Upload Now<i class="el-icon-upload el-icon--right"></i></el-button>
              </div>
          </section>
          <section class="set-profile">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="Username" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="Birthday" prop="date1">
                <el-date-picker type="date" placeholder="Select Date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="Gender" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                <el-radio label="Male"></el-radio>
                <el-radio label="Female"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Bio" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Save</el-button>
                <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
            </el-form>              
          </section>
      </div>
  </div>
</template>
<script src="./set.js"></script>
<style scoped src="./set.css"></style>