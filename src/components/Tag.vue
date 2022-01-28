<template>
  <!-- 文章标签 -->
  <div class="mytag">
    <i class="iconfont icon-tags"></i>
    <a :href="tag.url" rel="tag">{{tag.name}}</a>
  </div>
</template>

<script>
export default {
  props:{
      tag:Object
  },
  name: "Tag",
};
</script>

<style scoped>
.mytag{
    display: inline-block;
}
</style>
