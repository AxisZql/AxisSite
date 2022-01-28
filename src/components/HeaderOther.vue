<template>
    <header class="site-header no-select " role="banner">
                    <div class="site-top">
                        <div class="site-branding">
                            <span class="site-title">
                                <span class="logolink moe-mashiro">
                                    <a href="https://axiszql.top" alt="不明之夜的黎明">
                                        <ruby>
                                            <span class="sakuraso">不明な夜</span>
                                            <span class="no">の</span>
                                            <span class="shironeko">明け</span>
                                            <rp></rp>
                                            <rt class="chinese-font">不明之夜的黎明</rt>
                                            <rp></rp>
                                        </ruby>
                                    </a>
                                </span>
                            </span>
                        </div>
                        <div class="lower-cantiner">
                            <div class="lower">
                                <div id="show-nav" class="showNav mobile-fit">
                                    <div class="line line1"></div>
                                    <div class="line line2"></div>
                                    <div class="line line3"></div>
                                </div>
                                <nav class="mobile-fit-control hide">
                                    <ul id="menu-new" class="menu">
                                        <li>
                                            <a href="/#/home">
                                                <span class="faa-parent animated-hover">
                                                    <i class="fa fa-fort-awesome faa-horizontal" aria-hidden="true"></i>
                                                    首页
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            
                                            <a href="/#/articleList">
                                                <span class="faa-parent animated-hover">
                                                    <i class="fa fa-archive faa-shake" aria-hidden="true"></i>
                                                    归档
                                                </span>
                                            </a>
                                            <ul class="sub-menu">
                                                <li class="current-post-ancestor current-menu-parent">
                                                    
                                                    <a href="/#/articleList">
                                                        <i class="fa fa-terminal" aria-hidden="true"></i>
                                                        极客
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#/articleList">
                                                        <i class="fa fa-file-text-o" aria-hidden="true"></i>
                                                        文章
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#/articleList">
                                                        <i class="fa fa-quote-right" aria-hidden="true"></i>
                                                        影评
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#/articleList">
                                                        <i class="fa fa-commenting-o" aria-hidden="true"></i>
                                                        随想
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank" rel="noopener" href="/#/articleList">
                                                        <i class="fa fa-book" aria-hidden="true"></i>
                                                        笔记
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>
                                                <span class="faa-parent animated-hover">
                                                    <i class="fa fa-list-ul faa-vertical" aria-hidden="true"></i>
                                                    清单
                                                </span>
                                            </a>
                                            <ul class="sub-menu">
                                                <li>
                                                    <a href="/#/bookList">
                                                        <i class="fa fa-th-list faa-bounce" aria-hidden="true"></i>
                                                        书单
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#/videoList">
                                                        <i class="fa fa-film faa-vertical" aria-hidden="true"></i>
                                                        番组
                                                    </a>
                                                </li>
                                              
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/#/leaveComment">
                                                <span class="faa-parent animated-hover">
                                                    <i class="fa fa-pencil-square-o  faa-tada" aria-hidden="true"></i>
                                                    留言板
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="faa-parent animated-hover">
                                                    <i class="fa fa-leaf faa-wrench" aria-hidden="true"></i>
                                                    关于
                                                </span>
                                            </a>
                                            <ul class="sub-menu">
                                                <li>
                                                    <a href="https://2heng.xin/about/">
                                                        <i class="fa fa-grav" aria-hidden="true"></i>
                                                        我？
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://2heng.xin/analytics/">
                                                        <i class="fa fa-area-chart" aria-hidden="true"></i>
                                                        统计
                                                    </a>
                                                </li>
                        
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="header-user-avatar">
                            <a href="https://2heng.xin/wp-login.php">
                                <img class="faa-shake animated-hover" src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/none.png" width="30" height="30">
                            </a>
                            <div class="header-user-menu">
                                <div class="herder-user-name no-logged">
                                    Whether to <a href="https://2heng.xin/login/" target="_blank" style="color:#333;font-weight:bold;text-decoration:none">log in</a>
                                    now?
                                </div>
                            </div>
                        </div>
                        <div class="searchbox">
                            <i class="iconfont js-toggle-search iconsearch icon-search"></i>
                        </div>
                    </div>
                </header>
</template>

<script>
export default {
    name: 'HeaderOther',
    data() {
        return {
            hostname: this.$hostname
        }
    },
}
</script>