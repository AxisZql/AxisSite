<template>
    <!-- 取消回复按钮 -->
        <div id="respond" class="comment-respond">
          <h3 id="reply-title" class="comment-reply-title">
            <small>
              <a
                rel="nofollow"
                id="cancel-comment-reply-link"
                style="display: none"
                >Cancel Reply</a
              >
            </small>
          </h3>
          <form
            method="post"
            id="commentform"
            class="comment-form"
            novalidate
          >
            <p>
              <i class="iconfont icon-markdown"></i>
              支持Markdown语法,但是不能输入
              <i class="fa fa-code" aria-hidden="true"></i>
            </p>
            <!-- 评论输入框 -->
            <div class="comment-textarea"  id="commentedit" ref="commentedit">
              <textarea
                placeholder="你是我一生只会遇见一次的惊喜 ..."
                name="comment"
                class="commentbody"
                rows="5"
                tabindex="4"
                v-model="comment_input"
              ></textarea>
              <label class="input-label"
                >你是我一生只会遇见一次的惊喜 ...</label
              >
            </div>
            <div id="upload-img-show"></div>
            <!-- 表情包emoji触发 -->
            <p id="emotion-toggle" class="no-select">
              <span class="emotion-toggle-off">戳我试试 OωO</span>
              <span class="emotion-toggle-on">嘿嘿嘿 ヾ(≧∇≦*)ゝ</span>
            </p>
            <div class="emotion-box no-select">
              <table class="motion-switcher-table">
                <tr>
                  <th onclick="motionSwitch('.bili')" class="bili-bar on-hover">
                    bilibili~
                  </th>
                  <th onclick="motionSwitch('.menhera')" class="menhera-bar">
                    (✪ω✪)
                  </th>
                  <th onclick="motionSwitch('.tieba')" class="tieba-bar">
                    Tieba
                  </th>
                </tr>
              </table>
             
             <!-- 导入表情emoji组件 -->
             <emoji></emoji>
            </div>
            <div class="cmt-info-container">
              <div class="comment-user-avatar">
                <img
                  src="https://q2.qlogo.cn/headimg_dl?dst_uin=2543237075&spec=100"
                />
                <div class="socila-check qq-check" style="display: block !important">
                  <i class="fa fa-qq" aria-hidden="true"></i>
                </div>
              </div>
              <div
                class="popup cmt-popup cmt-author"
                onclick="cmt_showPopup(this)"
              >
                <span
                  class="popuptext"
                  id="thePopup"
                  style="margin-left: -115px; width: 230px"
                  >输入QQ号将自动拉取昵称和头像</span
                >
                <input
                  type="text"
                  placeholder="昵称或QQ号 (必须 Name* )"
                  name="author"
                  id="author"
                  value=""
                  size="22"
                  autocomplete="off"
                  tabindex="1"
                  aria-required="true"
                />
              </div>
              <div class="popup cmt-popup" onclick="cmt_showPopup(this)">
                <span
                  class="popuptext"
                  id="thePopup"
                  style="margin-left: -65px; width: 130px"
                  >你将收到回复通知</span
                >
                <input
                  type="text"
                  placeholder="邮箱 (必须 Email* )"
                  name="email"
                  id="email"
                  value=""
                  size="22"
                  tabindex="1"
                  autocomplete="off"
                  aria-required="true"
                />
              </div>
              <div class="popup cmt-popup" onclick="cmt_showPopup(this)">
                <span
                  class="popuptext"
                  id="thePopup"
                  style="margin-left: -55px; width: 110px"
                  >禁止小广告😀</span
                >
                <input
                  type="text"
                  placeholder="网站 (选填 Site)"
                  name="url"
                  id="url"
                  value=""
                  size="22"
                  autocomplete="off"
                  tabindex="1"
                />
              </div>
            </div>
            <label class="siren-checkbox-label">
              <input
                class="siren-checkbox-radio"
                type="checkbox"
                name="no-robot"
              />
              <span
                class="siren-no-robot-checkbox siren-checkbox-radioInput"
              ></span>
              滴，学生卡 | I'm not a robot
            </label>
            <input
              type="text"
              placeholder="QQ"
              name="new_field_qq"
              id="qq"
              value=""
              style="display: none"
              autocomplete="off"
            />
            <p class="form-submit">
              <input
                name="submit"
                type="button"
                value="BiuBiuBiu~"
                @click="SubmitHandel()"
              />
              <input
                type="hidden"
                name="comment_post_ID"
                value="4573"
                id="comment_post_ID"
              />
              <input
                type="hidden"
                name="comment_parent"
                id="comment_parent"
                value="0"
              />
            </p>
            <p style="display: none">
              <input
                type="hidden"
                id="akismet_comment_nonce"
                name="akismet_comment_nonce"
                value="c87e39bbee"
              />
            </p>
            <p style="display: none !important">
              <label>
                &#916;<textarea
                  name="ak_hp_textarea"
                  cols="45"
                  rows="8"
                  maxlength="100"
                ></textarea>
              </label>
              <input type="hidden" id="ak_js" name="ak_js" value="161" />
             
            </p>
          </form>
        </div>
</template>

<script>
//  评论输入组件
import Emoji from './Emoji.vue'
export default {
    components:{
        Emoji
    },
    name:'EditComment',
    data() {
        return {
            comment_input:''
        }
    },
}
</script>