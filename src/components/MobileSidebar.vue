<template>
     <div id="mo-nav">
            <div class="m-avatar">
                <img src="../../public/img/axiszql.jpg">
            </div>
            <p style="text-align: center; color: #333; font-weight: 900; font-family: 'Ubuntu', sans-serif; letter-spacing: 1.5px">AXIS FOR...</p>
            <p style="text-align: center; word-spacing: 20px;">
                <a href="https://twitter.com/axiszql" class="fa fa-twitter" target="_blank" style="color: #00aced; padding-right:10px"></a>
                <a href="https://weibo.com/5991548006" class="fa fa-weibo" target="_blank" style="color: #dd4b39; padding-right:10px"></a>
                <a href="http://github.com/AxisZql" class="fa fa-github" target="_blank" style="color: #333; padding-right:10px"></a>
                <a onclick="    ()" class="fa fa-envelope" style="color: #ffbf00; padding-right:10px"></a>
            </p>
            <div class="m-search">
                <form class="m-search-form" method="get" action="https://2heng.xin" role="search">
                    <input class="m-search-input" type="search" name="s" placeholder="搜索..." required>
                </form>
            </div>
            <ul id="menu-new-1" class="menu">
                <li class="current-menu-item">
                    <a href="/#/home" aria-current="page">
                        <span class="faa-parent animated-hover">
                            <i class="el-icon-guide" aria-hidden="true"></i>
                            首页
                        </span>
                    </a>
                </li>
                <li>
                    <a href="/time-series/">
                        <span class="faa-parent animated-hover">
                            <i class="el-icon-receiving" aria-hidden="true"></i>
                            归档
                        </span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="/#/articleList">
                                <i class="el-icon-s-promotion" aria-hidden="true"></i>
                                极客
                            </a>
                        </li>
                        <li>
                            <a href="/#/articleList">
                                <i class="el-icon-document" aria-hidden="true"></i>
                                文章
                            </a>
                        </li>
                        <li>
                            <a href="/#/articleList">
                                <i class="el-icon-film" aria-hidden="true"></i>
                                影评
                            </a>
                        </li>
                        <li>
                            <a href="/#/articleList">
                                <i class="el-icon-chat-line-square" aria-hidden="true"></i>
                                随想
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener" href="http://axiszql.top/">
                                <i class="el-icon-edit" aria-hidden="true"></i>
                                笔记
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a>
                        <span class="faa-parent animated-hover">
                            <i class="el-icon-notebook-2" aria-hidden="true"></i>
                            清单
                        </span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="/#/bookList">
                                <i class="el-icon-reading" aria-hidden="true"></i>
                                书单
                            </a>
                        </li>
                        <li>
                            <a href="/#/videoList">
                                <i class="el-icon-wind-power" aria-hidden="true"></i>
                                番组
                            </a>
                        </li>
                        
                    </ul>
                </li>
                <li>
                    <a href="/#/leaveComment">
                        <span class="faa-parent animated-hover">
                            <i class="el-icon-message" aria-hidden="true"></i>
                            留言板
                        </span>
                    </a>
                </li>
  

                <li>
                    <a href="#">
                        <span class="faa-parent animated-hover">
                            <i class="el-icon-ship" aria-hidden="true"></i>
                            关于
                        </span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="https://2heng.xin/about/">
                                <i class="el-icon-user" aria-hidden="true"></i>
                                我？
                            </a>
                        </li>
                        <li>
                            <a href="https://2heng.xin/analytics/">
                                <i class="el-icon-data-line" aria-hidden="true"></i>
                                统计
                            </a>
                        </li>
                        
                    </ul>
                </li>
               
            </ul>
            <p style="text-align: center; font-size: 13px; color: #b9b9b9;">&copy;2022 Axis的小窝</p>
        </div> 
</template>

<script>
export default {
    name:'MobileSidebar'
}
</script>