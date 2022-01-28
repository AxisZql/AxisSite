<template>
    <article :class="arcticle.style" itemscope="" itemtype="http://schema.org/BlogPosting">
                                <div class="post-thumb">
                                    <a href="https://2heng.xin/2021/07/30/flex-gap-polyfill-with-scss-mixins/">
                                        <img class="lazyload" id="post-th-4573" :src="arcticle.lazy_img" onerror="imgError(this,3)" :data-src="arcticle.or_img">
                                    </a>
                                </div>
                                <div class="post-content-wrap">
                                    <div class="post-content">
                                        <div class="post-date">
                                            <i class="iconfont icon-time"></i>
                                            发布于 {{arcticle.created_time}}
                                        </div>
                                        <a href="https://2heng.xin/2021/07/30/flex-gap-polyfill-with-scss-mixins/" class="post-title">
                                            <h3>{{arcticle.title}}</h3>
                                        </a>
                                        <div class="post-meta">
                                            <span>
                                                <i class="iconfont icon-attention"></i>
                                                {{arcticle.views}} 热度
                                            </span>
                                            <span class="comments-number">
                                                <i class="iconfont icon-mark"></i>
                                                <a href="https://2heng.xin/2021/07/30/flex-gap-polyfill-with-scss-mixins/#comments">{{arcticle.comments_count}} 条评论</a>
                                            </span>
                                            <span>
                                                <i class="iconfont icon-file"></i>
                                                <a href="https://2heng.xin/nonsense/">{{arcticle.label}}</a>
                                            </span>
                                        </div>
                                        <div class="float-content">
                                            <p>{{arcticle.summary}}
                                            <div class="post-bottom">
                                                <a href="https://2heng.xin/2021/07/30/flex-gap-polyfill-with-scss-mixins/" class="button-normal">
                                                    <i class="iconfont icon-caidan"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
</template>

<script>
export default {
  name: 'ArcticleDesc',
  props:{
    arcticle:Object  
  },
  data () {
    return {
      arcticle_lists: [
        {
            id:'',//文章id
            title:'',//文章标题
            views:'',//文章点击量
            label:'',//文章标签
            summary:'',//文章摘要
            comments_count:'',//文章评论数
            style:'post post-list-thumb post-list-thumb-left"',//文章简介图片位置样式
            lazy_img:'https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-150x128.jpg#lazyload-blur',//缩略图
            or_img:'https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-1024x877.jpg',//原图封面
            created_time:'2021-07-30',//文章发布时间
        }
      ]
    }
  }

}
</script>
