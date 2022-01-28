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
        <div class="blank"></div>
        <div id="content" class="site-content">
                <div id="primary" class="content-area">
                     <main id="main" class="site-main" role="main">
                            <article id="post-1709" class="post-1709 page type-page status-publish hentry">
                                <header class="entry-header">
                                    <h1 class="entry-title">Book List</h1>
                                </header>
                                <div class="toc-container">
                                    <div class="toc"></div>
                                </div>
                                <div class="entry-content">
                                    <h3>
                                        Wish List... 
                                        <a href="https://2heng.xin/donate_me/" target="_blank" rel="nofollow">
                                            DONATE ME <i class="fa fa-smile-o" aria-hidden="true"></i>
                                        </a>
                                    </h3>
                                    
                                    <son-book-list></son-book-list>

                                    <p>
                                        <strong>行动的勇气：金融危机及其余波回忆录</strong>
                                        <br/>
                                        2008年时任美联储主席<strong>本·伯南克</strong>
                                        著，对金融危机救赎内幕的披露与反思.<br/>
                                        <a href="https://item.jd.com/10292226402.html" target="_blank" rel="nofollow">
                                            Purchase Link <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <p>
                                        <strong>赢者的诅咒·经济生活中的悖论与反常现象</strong>
                                        <br/>
                                        2017年诺贝尔经济学奖获得者<strong>理查德·泰勒</strong>
                                        著, 行为经济学经典.<br/>
                                        <a href="https://item.jd.com/11225247.html" target="_blank" rel="nofollow">
                                            Purchase Link <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <p>
                                        <strong>“错误”的行为：行为不端 [Misbehaving：The Making of Behavioral Economics]</strong>
                                        <br/>
                                        2017年诺贝尔经济学奖获得者<strong>理查德·泰勒</strong>
                                        著.<br/>
                                        <a href="https://item.jd.com/11870829.html" target="_blank" rel="nofollow">
                                            Purchase Link <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <p>
                                        <strong>Python核心编程（第3版） [Core Python Applications Programming（3rd Edition）]</strong>
                                        .<br/>
                                        <a href="https://item.jd.com/11936238.html" target="_blank" rel="nofollow">
                                            Purchase Link <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <p>
                                        <strong>Python Cookbook（第3版）中文版</strong>
                                        .<br/>
                                        <a href="https://item.jd.com/11681561.html" target="_blank" rel="nofollow">
                                            Purchase Link <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <p>
                                        <strong>利用Python进行数据分析 [Python for Data Analysis]</strong>
                                        .<br/>
                                        <a href="https://item.jd.com/11352441.html" target="_blank" rel="nofollow">
                                            Purchase Link <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <p>
                                        <strong>深入浅出Node.js</strong>
                                        .<br/>
                                        <a href="https://item.jd.com/11355978.html" target="_blank" rel="nofollow">
                                            Purchase Link <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <h3>I'm Reading:</h3>
                                    <p>
                                        <strong>Hands-On Machine Learning with Scikit-Learn and TensorFlow</strong>
                                        <br/>
                                        <a href="https://cloud.moezx.cc/Document/O%27Reilly/Hands-On%20Machine%20Learning%20with%20Scikit-Learn%20and%20TensorFlow.pdf" target="_blank" rel="nofollow">
                                            PDF <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <p>
                                        <strong>The Complete NGINX Cookbook</strong>
                                        <br/>
                                        <a href="https://cloud.moezx.cc/Document/O%27Reilly/Complete_NGINX_Cookbook.pdf" target="_blank" rel="nofollow">
                                            PDF <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <p>
                                        <strong>Data Analysis with Open Source Tools</strong>
                                        <br/>
                                        <a href="https://cloud.moezx.cc/Document/O%27Reilly/Data_Analysis_with_Open_Source_Tools_%28Oreilly-2011-Ed1%29.pdf" target="_blank" rel="nofollow">
                                            PDF <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <p>
                                        <strong>R for Data Science</strong>
                                        <br/>
                                        Which also named as Data Science with R in Hands-On Programming with R.<br/>
                                        <a href="http://r4ds.had.co.nz/index.html" target="_blank" rel="nofollow">
                                            Read online <i class="fa fa-book" aria-hidden="true"></i>
                                        </a>
                                        or 
                                        <a href="https://cloud.moezx.cc/Document/O%27Reilly/OReilly_HandsOn_Programming_with_R_2014.pdf" target="_blank" rel="nofollow">
                                            PDF <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <p>
                                        <strong>JavaScript高级程序设计 [Professional JavaScript for Web]</strong>
                                        .<br/>
                                        <a href="https://book.douban.com/subject/10546125/" target="_blank" rel="nofollow">
                                            Detail <i class="fa fa-bookmark" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <p>
                                        <strong>Python Crash Course</strong>
                                        .<br/>
                                        <a href="https://io.shino.cc/index.php?share/file&amp;user=1&amp;sid=MJ4XaTsv" target="_blank" rel="nofollow">
                                            PDF <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                                        </a>
                                    </p>
                                    <p>
                                        <strong>
                                            <a href="https://github.com/MashiroBookmark" target="_blank" rel="nofollow">
                                                GitHub Bookmarks <i class="fa fa-bookmark" aria-hidden="true"></i>
                                            </a>
                                        </strong>
                                    </p>
                                </div>
                                <footer class="entry-footer"></footer>
                            </article>
                        </main>
                </div>
        </div>
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
import Comment from '../components/Comment.vue';
import SonBookList from '../components/SonBookList.vue';
export default {
  name: "BookList",
  components: {
      MobileSidebar,
      MyFoot,
      MySelf,
      HeaderOther,
      Comment,
      SonBookList,
  },
};
</script>

<style scoped>
.pattern-center::before,
.pattern-center-sakura::before {
  display: none;
}
</style>
