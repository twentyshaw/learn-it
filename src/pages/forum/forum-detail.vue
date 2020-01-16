<template>
  <div id="forum-detail" class="box">
    <div class="detail-header">
        <div class="author-info">
            <div class="cus-icon"><span class="user-icon" :style="posterAva"></span></div>
            <div class="cus-info">
                <p class="cus-user">
                    <span class="cus-name">{{forumInner.author}}</span>
                    <span class="cus-level">Lv2</span>
                </p>
            </div>
            <div class="cont-info">
                <div class="cus-time">{{ formatDate(forumInner.time) }}</div>
            </div>
        </div>
        <el-button type="primary" @click="addFnds" class="f-btn">Follow</el-button>
    </div>
    <div class="detail-body">
        <div class="question">
            <h4 class="forum-ttl">
                {{forumInner.title}}
            </h4>
            <p class="forum-cont">
                <pre>{{forumInner.desc}}</pre>
            </p>
            <div class="item-social">
                <span class="view"><i class="iconfont icon-chakan"></i>{{forumInner.view}}</span>
                <span class="like" @click="like"><i class="iconfont icon-dianzan"></i>{{forumInner.like}}</span>
                <span class="comment"><i class="iconfont icon-pinglun_huaban"></i>88</span>
            </div>
        </div>
        <div class="answer">
            <div class="my-come comeBox">
                <div class="cus-icon"><span class="user-icon" :style="userAva"></span></div>
                <div class="come-input">
                    <el-input
                    type="textarea"
                    autosize
                    placeholder="Enter your comment here..."
                    v-model="textarea1"
                    class="come-input-area"
                    @focus="showBtn"
                    >
                    </el-input>
                </div>
                <div class="btn-wrapper">
                    <el-button type="primary" @click="comSubmit" class="f-btn">Post</el-button>
                    <el-button type="default" @click="comCancel" class="f-btn">Cancel</el-button>
                </div>
            </div>
            <div class="allAnswer">
                <div class="a-header">
                    <h3 class="a-ttl">All answers</h3>
                    <div class="btn-wrapper">
                        <el-tooltip class="item" effect="light" content="Answers in the order they were provided" placement="bottom">
                        <el-button type="text">Newest</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="light" content="Answers with the highest score first" placement="bottom">
                        <el-button type="text">Votes</el-button>
                        </el-tooltip>
                    </div>
                </div>
                <div class="a-list">
                    <div class="list-item" v-for="comm in comms" :key="comm">
                    <div class="cus-icon"><img :src="comm.attributes.avatar" class="commicon"></div>
                    <div class="text-wrapper">
                    <div class="cus-info">
                        <span class="cus-name">{{comm.attributes.commentor}}</span>
                        <span class="cus-time">{{ formatDate(comm.updatedAt) }}</span>
                    </div>
                    <div class="come-text">
                        <p><pre>{{comm.attributes.content}}</pre></p>
                    </div>
                    <div class="item-social come-footer">
                        <span class="like"><i class="iconfont icon-dianzan"></i> 40</span>
						<span class="comment" @click="showComeBox"><i class="iconfont icon-pinglun_huaban"></i></span>
                        <div class="comeBox">
                            <el-input
                            type="textarea"
                            autosize
                            placeholder="Enter your comment here..."
                            v-model="textarea2">
                            </el-input>
                            <div class="btn-wrapper">
                                <el-button type="primary" @click="comSubmit" class="f-btn">Post</el-button>
                                <el-button type="default" @click="comCancel" class="f-btn">Cancel</el-button>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped type="text/css" src="./forum.css"></style>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "ForumDetail",
  props:['forumID'],
  data(){
    return{
        textarea1:"",
        textarea2:""
    }
  },
  computed:{
    ...mapGetters([
        'forumTTl', 
        'forumDes', 
        'forumTime',
        'forumLike', 
        'forumView',
        'poster', 
        'posterID',
        'posterIcon',
        'forumCome',
        'usericon'
    ]),
    id(){
        return this.forumID.split(':')[1]
    },
    comms(){
        return this.forumCome
    },
    forumInner(){
        return {
            title:this.forumTTl,
            desc:this.forumDes,
            time:this.forumTime,
            like:this.forumLike,
            view:this.forumView,
            author:this.poster,
            authorID:this.posterID,
            comes:this.forumCome
        }
    },
    posterAva(){
        return {
            backgroundImage:"url("+ this.posterIcon +")", //计算属性依赖this.usericon，当该值改变时计算属性会更新
            backgroundRepeat:"no-repeat",
            backgroundSize:'cover',
            backgroundPosition:'center'
        }
    },
    userAva(){
        return {
            backgroundImage:"url("+ this.usericon +")", //计算属性依赖this.usericon，当该值改变时计算属性会更新
            backgroundRepeat:"no-repeat",
            backgroundSize:'cover',
            backgroundPosition:'center'
        }
    }
  },
  methods:{
      ...mapActions(['forumInfo','commentForum','likeForum']),
      addFnds(){
          alert('friend')
      },
      showBtn(){
          var btns = document.querySelector(".my-come .btn-wrapper")
          if(!btns.classList.contains('onshow')){
              btns.classList.add('onshow')
          }
      },
      showComeBox(){
          var box = document.querySelector(".come-footer .comeBox")
          if(!box.classList.contains('onshow')){
              box.classList.add('onshow')
          }else{
              box.classList.remove('onshow')
          }
      },
      comSubmit(){
          this.commentForum({forumID:this.id,text:this.textarea1})
            .then(this.textarea1="")
      },
      comCancel(){
          alert('bye')
      },
      like(){
          console.log(this.id)
          this.likeForum({forumID:this.id})
      },
      init(){
          this.forumInfo({forumID:this.id})
      }
  },
  created(){
      this.init()
  }
};
</script>