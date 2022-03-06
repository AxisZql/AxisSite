import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 设置显示初始评论输入框的全局变量
// Vue.prototype.$showEditComment = false
Vue.prototype.$hostname = 'http://localhost:8080/#/'

new Vue({
  router,
  // 设置可读写的全局变量
  data: function () {
    return {
      showEditComment: true
    }
  },
  render: h => h(App)
}).$mount('#app')
