<template>
  <PostForm />
  <PostList :posts="posts" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./index.css";
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

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
      title: "",
      body: "",
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = "";
      this.body = "";
    },
    inputTitle(event: Event) {
      const { target } = event;
      if (target) this.title = (target as HTMLInputElement).value;
    },
    inputBody(event: Event) {
      const { target } = event;
      if (target) this.body = (target as HTMLInputElement).value;
    },
  },
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
