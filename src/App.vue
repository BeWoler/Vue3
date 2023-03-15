<template>
  <div class="flex flex-col justify-center items-center pt-10">
    <MyButton @click="showDialog">Create Post</MyButton>
    <MyDialog v-model:show="dialogVisible"
      ><PostForm @create="createPost"
    /></MyDialog>
    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./index.css";
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import IPost from "./components/interfaces/post.interface";

export default defineComponent({
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "123", body: "Descr" },
        { id: 2, title: "12345", body: "Descr2" },
        { id: 3, title: "123666", body: "Descr3" },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(post: IPost) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post: IPost) {
      this.posts = this.posts.filter((item: IPost) => item.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
