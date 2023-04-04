<template>
  <div class="flex flex-col justify-center items-center pt-10 gap-2">
    <h1 class="font-bold text-lg">\\ Posts //</h1>
    <MyButton @click="fetchPosts">Get posts</MyButton>
    <MyButton @click="showDialog">Create Post</MyButton>
    <MyDialog v-model:show="dialogVisible"
      ><PostForm @create="createPost"
    /></MyDialog>
    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
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
      posts: [] as IPost[],
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
    async fetchPosts() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = res.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
