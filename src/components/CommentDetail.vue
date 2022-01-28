<template>
  <li
    :class="
      mycomment.is_author == true ? 'comment byuser bypostauthor' : 'comment'
    "
  >
    <div class="contents">
      <div class="comment-arrow">
        <div class="main shadow">
          <div class="profile">
            <a href="javascript: return false;" rel="nofollow">
              <!-- 用户头像 -->
              <img
                src="../assets/images/preload.svg"
                :data-src="mycomment.avatar"
                class="lazyload avatar avatar-24 photo"
                width="24"
                height="24"
              />
            </a>
          </div>
          <!-- 评论内容 -->
          <div class="commentinfo">
            <!-- 评论者 -->
            <section class="commeta">
              <div class="left">
                <h4 class="author">
                  <a href="javascript: return false;" rel="nofollow">
                    <img
                      :src="mycomment.mavatar"
                      class="avatar avatar-24 photo"
                      height="24"
                      width="24"
                      loading="lazy"
                    />
                    <span class="bb-comment isauthor" title="博主">博主</span>
                    {{ mycomment.nickname }}
                    <span
                      :class="'showGrade' + mycomment.level"
                      title="德国骨科"
                    >
                      <img
                        :src="
                          'https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/level/level_' +
                          mycomment.level +
                          '.svg'
                        "
                        style="
                          height: 1.5em;
                          max-height: 1.5em;
                          display: inline-block;
                        "
                      />
                    </span>
                  </a>
                </h4>
              </div>
              <a class="comment-reply-link" @click="EditReply(mycomment.order)"
                >回复</a
              >
              <!-- 评论时间、和评论者IP -->
              <div class="right">
                <div class="info">
                  <time datetime="2021-07-30"
                    >发布于 {{ mycomment.created_time }}</time
                  >
                  &nbsp;&nbsp;
                  <span class="useragent-info">
                    (
                    <img
                      src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/chrome.svg"
                    />
                    &nbsp;{{ mycomment.browser }} &nbsp;&nbsp;<img
                      src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/macos.svg"
                    />&nbsp;{{ mycomment.device }} )
                  </span>
                  <span class="useragent-info-m">
                    (
                    <img
                      src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/chrome.svg"
                    />
                    &nbsp;&nbsp;<img
                      src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/macos.svg"
                    />)
                  </span>
                  &nbsp;{{ mycomment.address }}
                </div>
              </div>
            </section>
          </div>
          <!-- 评论内容 -->
          <div class="body" v-html="mycomment.content"></div>
        </div>
        <div class="arrow-left"></div>
      </div>
    </div>
    <hr />
    <!-- 回复 -->
    <edit-comment v-if="mycomment.isVisitable" ></edit-comment>
    <!-- 子评论 -->
    <ul class="children">
      <comment-detail
        v-for="c in mycomment.children"
        :key="c.id"
        :value="c"
      >
      </comment-detail>
    </ul>
  </li>
</template>

<script>
import EditComment from "./EditComment.vue";
export default {
  name: "CommentDetail",
  props: {
    value: Object,
  },
  data() {
    return {
      isVisitable: false,
      pre_open_order: -1, //记录前一次打开回复的评论号id
      mycomment:this.value,
    };
  },

  components: {
    EditComment,
  },

  methods: {
    // 到达设定的锚点
    goAnchor(selector) {
      var anchor = this.$el.querySelector(selector);
      console.log(anchor);
      document.documentElement.scrollTop = anchor.offsetTop;
    },


    // 回复框
    EditReply(cod){
        this.mycomment.isVisitable=!this.mycomment.isVisitable
        if(this.mycomment.isVisitable){
            this.$root.showEditComment=false
        }else{
            this.$root.showEditComment=true
        }
    }
  },
  
};
</script>
