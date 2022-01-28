<template>
  <ul class="commentwrap">
    <comment-detail v-for="mc in mycomments" :key="mc.id" :value="mc">
    </comment-detail>
  </ul>
</template>

<script>
import comments from "../data/comment";
import CommentDetail from "./CommentDetail.vue";
export default {
  components: {
    CommentDetail,
  },
  name: "SonComment",
  data() {
    return {
      mycomments: [],
    };
  },
  beforeMount() {
    this.mycomments = comments;
    console.log(this.mycomments);
  },
  methods:{
  }
};
</script>
