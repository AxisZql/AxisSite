<template>
    <section id="comments" class="comments">
      <div class="commentwrap comments-hidden">
        <div class="notification">
          <i class="iconfont icon-mark"></i>
          查看评论 - <span class="noticom">41 条评论 </span>
        </div>
      </div>
      <div class="comments-main">
        <h3 id="comments-list-title">
          Comments | <span class="noticom">41 条评论 </span>
        </h3>
        <!-- 加载动画 -->
        <div id="loading-comments" style="display:block !important" v-show="false">
          <span></span>
        </div>

        <!-- 评论主体 -->
        <div v-show="true">
          <son-comment></son-comment>
        </div>
        

        <!-- 评论分页导航 -->
        <nav id="comments-navi">
          <span
            style="color:rgb(255, 178, 89)"
            @click="PrePage()"
            >« 更早</span>
          <span
            style="padding:5px"
            class="page-numbers"
            href="#"
            >1</span>

          <span aria-current="page" class="page-numbers current">2</span>
          <span  style="color:rgb(255, 178, 89)" @click="NextPage()">最近 »</span>
        </nav>

<!-- 评论编辑 -->
      <edit-comment v-show="this.$root.showEditComment"></edit-comment>
      </div>
    </section>
</template>

<script>

import EditComment from './EditComment.vue';
import Emoji from './Emoji.vue';
import SonComment from './SonComment.vue';
export default {
  components: { Emoji, SonComment, EditComment },
  name: "Comment",
  data() {
    return {
      comment_input:'',
    }
  },
  methods:{
    SubmitHandel(){
      console.log("hello09654rtyuiohgeui")
    },

    PrePage(){
      console.log("前一页")
    },

    NextPage(){
      console.log("后一页")
    },
    
  }
};
</script>
