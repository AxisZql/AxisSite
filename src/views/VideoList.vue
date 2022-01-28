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
          <div class="pattern-attachment-img">
            <img
              src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.1/img/svg/loader/orange.progress-bar-stripe-loader.svg#lazyload-blur"
              data-src="https://view.moezx.cc/images/2017/12/03/writing.jpg"
              class="lazyload"
              onerror="imgError(this,3)"
              style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                pointer-events: none;
              "
            />
          </div>
          <header class="pattern-header">
            <h1 class="cat-title">我的追番计划</h1>
            <span class="cat-des"></span>
          </header>
        </div>
        <!-- 文章主体内容 -->
        <div id="content" class="site-content">
          <header class="page-header">
                        <h1 class="cat-title">番组计划</h1>
                        <span class="cat-des">
                            <p>这里将是永远的回忆</p>
                        </span>
                    </header>
                    <article class="post-item ">
                        <div class="bangumi">
                            <div class="row">
                               <son-video-list></son-video-list>

                                <son-video-list></son-video-list>
                            </div>

                        </div>
                    </article>
        </div>
      </div>

      <!-- 页脚 -->
      <my-foot></my-foot>
      <div class="openNav no-select">
        <div class="iconflat no-select">
          <div class="icon"></div>
        </div>
        <div class="site-branding">
          <h1 class="site-title">
            <a href="https://axiszql.top">Axis的小窝</a>
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
import MobileSidebar from "../components/MobileSidebar.vue";
import MyFoot from "../components/MyFoot.vue";
import MySelf from "../components/MySelf.vue";
import HeaderOther from "../components/HeaderOther.vue";
import SonVideoList from '../components/SonVideoList.vue'
export default {
  name: "VideoList",
  components: {
      MobileSidebar,
      MyFoot,
      MySelf,
      HeaderOther,
      SonVideoList
  },
};
</script>


