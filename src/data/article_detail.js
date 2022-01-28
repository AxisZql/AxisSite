const article_detail = {
    id: 222,//文章id
    title: '基于 SCSS mixin 的 flex gap polyfill',
    author: {
        id:1,
        name:'AxisZql',
        avatar:'https://s3.mashiro.top/avatar/cd2b3a164c977539712929f66cad335c?s=96&d=mm&r=g',
        url:'https://2heng.xin/author/Mashiro/'//所有该作者发表的文章
    },
    cover:'https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg',
    cover_is_video:true,
    video:'https://cdn.jsdelivr.net/gh/moezx/hls@1.0.0/src/westlife.hello.my.love.m3u8',
    created_time: '2021-07-29',
    views: '7,491',
    url: 'https://2heng.xin/2021/07/30/flex-gap-polyfill-with-scss-mixins/',//文章地址
    likes: 200,//文章点赞数
    content: '<p>你好</p> <a>晚上</a>',//文章内容
    pre: {
        id: 2323,
        title: '解决移动端浏览器 vh 单位异常问题',//前一篇文章
        cover:"https://2heng.xin/wp-content/uploads//2018/06/child-1024x576.jpg"
    },
    next: {
        id: 34433,
        title: '基于 SCSS mixin 的 flex gap polyfill',//下一篇文章
        cover: 'https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-1024x877.jpg'
    },
    tags: [//文章标签
        {
            name: "docker",
            url: "https://www.baidu.com"
        },
        {
            name: 'scss',
            url: "https://github.com/AxisZql"
        }
    ],
    comments_num:41//评论数目
}

export default article_detail