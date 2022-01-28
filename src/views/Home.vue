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
                    <video id="bgvideo" class="video" video-name="" src="" width="auto" preload="auto"></video>
                    <div id="video-btn" class="loadvideo videolive"></div>
                    <div id="video-add"></div>
                    <div class="video-stu"></div>
                </div>
                <div class="headertop-down faa-float animated" onclick="headertop_down()">
                    <span>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div id="page" class="site wrapper">
               
               <!-- 头部导航栏 -->
               <my-header></my-header>

                <div class="blank"></div>
                <div id="content" class="site-content">
                    <div id="primary" class="content-area">
                        <main id="main" class="site-main" role="main">
                            <h1 class="main-title" style="font-family: 'Ubuntu', sans-serif;">
                                <i class="fa fa-envira" aria-hidden="true"></i>
                                Discovery
                            </h1>
                            <!-- 文章列表 -->
                            <ArcticleDesc v-for="a in arcticle_lists" :key="a.id" :arcticle="a"></ArcticleDesc>
                        </main>
                        <div id="pagination">
                            <a href="https://2heng.xin/page/2/">Previous</a>
                        </div>
                    </div>
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
                        <a href="https://axiszql.top">不明之夜的黎明</a>
                    </h1>
                </div>
            </div>
        </section>

        <!-- 移动端侧边栏 -->
        <mobile-sidebar></mobile-sidebar>
       
        <a href="#" class="cd-top faa-float animated "></a>
        <button onclick="topFunction()" class="mobile-cd-top" id="moblieGoTop" title="Go to top">
            <i class="fa fa-chevron-up" aria-hidden="true"></i>
        </button>
        <form class="js-search search-form search-form--modal" method="get" action="https://2heng.xin" role="search">
            <div class="search-form__inner">
                <div>
                    <p class="micro mb-">想要找点什么呢？</p>
                    <i class="iconfont icon-search"></i>
                    <input class="text-input" type="search" name="s" placeholder="Search" required>
                </div>
            </div>
            <div class="search_close"></div>
        </form>
        <div id="aplayer-float" style="z-index: 100;" class="aplayer" data-id="2288037900" data-server="netease" data-type="playlist" data-fixed="true" data-preload="none" data-order="random" data-theme="orange"></div>
        <!-- 转动的齿轮 -->
        <div class="changeSkin-gear no-select">
            <div class="keys">
                <span id="open-skinMenu">
                    <i class="iconfont icon-gear inline-block rotating"></i>
                </span>
            </div>
        </div>
        <div class="skin-menu no-select">
            <div class="font-family-controls row-container">
                <button type="button" class="control-btn-serif selected" data-mode="serif" onclick="mashiro_global.font_control.change_font()">Serif</button>
                <button type="button" class="control-btn-sans-serif" data-mode="sans-serif" onclick="mashiro_global.font_control.change_font()">Sans Serif</button>
            </div>
        </div>
        <canvas id="night-mode-cover"></canvas>
        
</div>
</template>

<script>
import AxisZql from '../utils/index'
import arcticle_list from '../data/arcticle'
import ArcticleDesc from '../components/ArticleDesc.vue';
import MobileSidebar from '../components/MobileSidebar.vue';
import MyFoot from '../components/MyFoot.vue'
import MyHeader from '../components/MyHeader.vue';
import MySelf from '../components/MySelf.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components:{
      ArcticleDesc,
      MobileSidebar,
      MyFoot,
      MyHeader,
      MySelf,
    },
  data() {
      return {
          arcticle_lists: []
      }
  },
  methods: {
  // 添加判断方法
  isMobile() {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    return flag;
   }
},

  mounted () {
    // 输出基本日志信息
    console.info(AxisZql)
    this.arcticle_lists=arcticle_list
  }
}
</script>

<style>
.site-top .lower nav {
  display: block !important;
}

.author-profile i,
.post-like a,
.post-share .show-share,
.sub-text,
.we-info a,
span.sitename,
.post-more i:hover,
#pagination a:hover,
.post-content a:hover,
.float-content i:hover {
  color: #fe9600;
}

.feature i,
        /*.feature-title span ,*/
        .download,
        .navigator i:hover,
        .links ul li:before,
        .ar-time i,
        span.ar-circle,
        .object,
        .comment .comment-reply-link,
        .siren-checkbox-radio:checked+.siren-checkbox-radioInput:after {
  background: #fe9600;
}

::-webkit-scrollbar-thumb {
  background: #fe9600;
}

.download,
.navigator i:hover,
.link-title,
.links ul li:hover,
#pagination a:hover,
.comment-respond input[type="submit"]:hover {
  border-color: #fe9600;
}

.entry-content a:hover,
.site-info a:hover,
.comment h4 a,
#comments-navi a.prev,
#comments-navi a.next,
.comment h4 a:hover,
.site-top ul li a:hover,
.entry-title a:hover,
#archives-temp h3,
span.page-numbers.current,
.sorry li a:hover,
.site-title a:hover,
i.iconfont.js-toggle-search.iconsearch:hover,
.comment-respond input[type="submit"]:hover {
  color: #fe9600;
}

.comments .comments-main {
  display: block !important;
}

.comments .comments-hidden {
  display: none !important;
}

.centerbg {
  background-image: url("https://api.2heng.xin/cover/");
  background-position: center center;
  background-attachment: inherit;
}
</style>
