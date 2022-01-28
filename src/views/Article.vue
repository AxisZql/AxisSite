<template>
  <div>
    <div class="scrollbar" id="bar"></div>
    <section id="main-container">
      <div class="headertop filter-dot">
        <div id="banner_wave_1"></div>
        <div id="banner_wave_2"></div>

        <!-- 个人社交软件介绍 -->
        <my-self></my-self>
        <!-- 播放介绍视频 -->
        <div id="video-container" style="">
          <video
            id="bgvideo"
            class="video"
            video-name=""
            src=""
            width="auto"
            preload="auto"
          ></video>
          <div id="video-btn" class="loadvideo videolive"></div>
          <div id="video-add"></div>
          <div class="video-stu"></div>
        </div>
        <div
          class="headertop-down faa-float animated"
          onclick="headertop_down()"
        >
          <span>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </span>
        </div>
      </div>
      <div id="page" class="site wrapper">
        <!-- 头部导航栏 -->
        <HeaderOther></HeaderOther>
        <div class="pattern-center-blank"></div>
        <div class="pattern-center single-center">
          <!-- 文章封面 -->
          <div
            class="pattern-attachment-img"
            :style="article.cover_is_video == true ? 'height: auto;' : ''"
          >
            <img
              v-if="!article.cover_is_video"
              src="../assets/images/orange.progress-bar-stripe-loader.svg"
              :data-src="article.cover"
              class="lazyload"
              onerror="imgError(this,3)"
              style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                pointer-events: none;
              "
            />

            <video
              muted
              v-if="article.cover_is_video"
              loop
              id="coverVideo"
              class="hls"
              style="width: 100%; height: 100%"
              :poster="article.cover"
              :data-src="article.video"
            ></video>
          </div>

          <!-- 标题和作者介绍 -->
          <header class="pattern-header single-header">
            <h1 class="entry-title">
              {{ article.title }}
              <!-- 如果封面是视频 -->
              <button
                v-if="article.cover_is_video"
                @click="playVideo()"
                id="coverVideo-btn"
                class=".constant-width-to-height-ratio"
                onclick="coverVideo()"
              >
                <i class="fa fa-pause" aria-hidden="true"></i>
              </button>
            </h1>
            <p class="entry-census">
              <span>
                <a :href="article.author.url">
                  <img :src="article.author.avatar" />
                </a>
              </span>
              <span>
                <a :href="article.author.url">{{ article.author.name }}</a>
              </span>
              <span class="bull">·</span>
              {{ article.created_time }}<span class="bull">·</span>
              {{ article.views }} 次阅读
            </p>
          </header>
        </div>
        <!-- 文章主体内容 -->
        <div id="content" class="site-content">
          <div id="primary" class="content-area">
            <main id="main" class="site-main" role="main">
              <article id="post-4573" class="tag-scss">
                <div class="entry-content">
                  <div v-html="article.content"></div>

                  <p class="head-copyright">
                    「Axis的小窝」原创文章：<a :href="article.url"
                      >《{{ article.title }}》</a
                    >
                    ，转载请保留出处！{{ article.url }}
                  </p>
                  <p>
                    Q.E.D.
                    <i
                      class="fa fa-meetup"
                      aria-hidden="true"
                      style="color: #d34836"
                    ></i>
                  </p>
                  <h2
                    class="footer-comment-flag"
                    style="opacity: 0; max-height: 0; margin: 0"
                  >
                    Comments
                  </h2>
                </div>
                <div class="single-reward">
                  <div class="reward-open">
                    赏
                    <div class="reward-main">
                      <ul class="reward-row">
                        <li class="alipay-code">
                          <!-- 支付宝付款码 -->
                          <img src="" />
                        </li>
                        <li class="wechat-code">
                          <!-- 微信付款码 -->
                          <img src="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <footer class="post-footer">
                  <div class="post-lincenses">
                    <a
                      href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
                      target="_blank"
                      rel="nofollow"
                    >
                      <i class="fa fa-creative-commons" aria-hidden="true"></i>
                      知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议
                    </a>
                  </div>
                  <!-- 标签 -->
                  <div class="post-tags">
                    <tag
                      v-for="(t, index) in article.tags"
                      :key="index"
                      :tag="t"
                    ></tag>
                  </div>
                  <!-- 文章点赞数 -->
                  <div class="post-like">
                    <a href="javascript:;">
                      <i class="iconfont icon-like"></i>
                      <span class="count">{{ article.likes }}</span>
                    </a>
                  </div>
                  <div class="post-share">
                    <div class="social-share sharehidden"></div>
                    <i class="iconfont show-share icon-forward"></i>
                  </div>
                </footer>
              </article>
              <div class="toc-container">
                <div class="toc"></div>
              </div>
              <!-- 前一篇文章，下一篇文章 -->
              <section class="post-squares nextprev">
                <div class="post-nepre half previous">
                  <a
                    href="https://2heng.xin/2019/09/18/fix-100-vh-in-mobile-browser/"
                    rel="prev"
                  >
                    <div class="background">
                      <img
                        class="lazyload"
                        :data-src="article.pre.cover"
                        style="
                          width: 100%;
                          height: 100%;
                          object-fit: cover;
                          pointer-events: none;
                        "
                        onerror="imgError(this,3)"
                        src="../assets/images/orange.progress-bar-stripe-loader.svg"
                      />
                    </div>
                    <span class="label">Previous Post</span>
                    <div class="info">
                      <h3>{{ article.pre.title }}</h3>
                      <hr />
                    </div>
                  </a>
                </div>
                <div class="post-nepre half next">
                  <a
                    href="https://2heng.xin/2021/07/30/flex-gap-polyfill-with-scss-mixins/"
                    rel="next"
                  >
                    <div class="background">
                      <img
                        class="lazyload"
                        :data-src="article.next.cover"
                        style="
                          width: 100%;
                          height: 100%;
                          object-fit: cover;
                          pointer-events: none;
                        "
                        onerror="imgError(this,3)"
                        src="../assets/images/orange.progress-bar-stripe-loader.svg"
                      />
                    </div>
                    <span class="label">Next Post</span>
                    <div class="info">
                      <h3>{{ article.next.title }}</h3>
                      <hr />
                    </div>
                  </a>
                </div>
              </section>
            </main>
          </div>
        </div>

        <!-- 评论部分 -->
        <comment></comment>
      </div>

      <!-- 页脚 -->
      <my-foot></my-foot>
      <div class="openNav no-select">
        <div class="iconflat no-select">
          <div class="icon"></div>
        </div>
        <div class="site-branding">
          <h1 class="site-title">
            <a href="https://axiszql.top">不明之夜的黎明</a>
          </h1>
        </div>
      </div>
    </section>
    <!-- 移动端侧边栏 -->
    <mobile-sidebar></mobile-sidebar>
    <a href="#" class="cd-top faa-float animated"></a>
    <button
      onclick="topFunction()"
      class="mobile-cd-top"
      id="moblieGoTop"
      title="Go to top"
    >
      <i class="fa fa-chevron-up" aria-hidden="true"></i>
    </button>
    <!-- 搜索页 -->
    <form
      class="js-search search-form search-form--modal"
      method="get"
      action="https://2heng.xin"
      role="search"
    >
      <div class="search-form__inner">
        <div>
          <p class="micro mb-">想要找点什么呢？</p>
          <i class="iconfont icon-search"></i>
          <input
            class="text-input"
            type="search"
            name="s"
            placeholder="Search"
            required
          />
        </div>
      </div>
      <div class="search_close"></div>
    </form>
    <!-- 音乐播放列表 -->
    <div
      id="aplayer-float"
      style="z-index: 100"
      class="aplayer"
      data-id="2288037900"
      data-server="netease"
      data-type="playlist"
      data-fixed="true"
      data-preload="none"
      data-order="random"
      data-theme="orange"
    ></div>
    <!-- 转动的齿轮 -->
    <div class="changeSkin-gear no-select">
      <div class="keys">
        <span id="open-skinMenu">
          <i class="iconfont icon-gear inline-block rotating"></i>
        </span>
      </div>
    </div>
    <!-- 切换字体 -->
    <div class="skin-menu no-select">
      <div class="font-family-controls row-container">
        <button
          type="button"
          class="control-btn-serif selected"
          data-mode="serif"
          onclick="mashiro_global.font_control.change_font()"
        >
          Serif
        </button>
        <button
          type="button"
          class="control-btn-sans-serif"
          data-mode="sans-serif"
          onclick="mashiro_global.font_control.change_font()"
        >
          Sans Serif
        </button>
      </div>
    </div>
    <canvas id="night-mode-cover"></canvas>
  </div>
</template>

<script>
import Comment from "../components/Comment.vue";
import MobileSidebar from "../components/MobileSidebar.vue";
import MyFoot from "../components/MyFoot.vue";
import MySelf from "../components/MySelf.vue";
import HeaderOther from "../components/HeaderOther.vue";
import Tag from "../components/Tag.vue";
import article_detail from "../data/article_detail";
export default {
  components: {
    MySelf,
    Comment,
    MyFoot,
    MobileSidebar,
    HeaderOther,
    Tag,
  },
  name: "Article",
  data() {
    return {
      article: {},
      videoPlay: false,
    };
  },
  mounted() {
    this.article = article_detail;
  },
  methods: {
    playVideo() {
      this.videoPlay = !this.videoPlay;
      console.log(this.videoPlay);
    },
  },
};
</script>

<style scoped>
.pattern-center::before,
.pattern-center-sakura::before {
  display: none;
}
</style>
