<template>
  <div class="flex flex-col justify-center items-center pt-10 gap-2">
    <h1 class="font-bold text-lg">\\ Posts //</h1>
    <div class="flex flex-row gap-3">
      <MyButton @click="fetchPosts">Get posts</MyButton>
      <MyButton @click="showDialog">Create Post</MyButton>
    </div>
    <div class="flex flex-row justify-center items-center gap-2">
      <h2>Filters:</h2>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <MyDialog v-model:show="dialogVisible"
      ><PostForm @create="createPost"
    /></MyDialog>
    <PostList :posts="sortedPosts" @remove="removePost" />
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
      selectedSort: "" as string,
      sortOptions: [
        { value: "title", name: "Name", id: 1 },
        { value: "describe", name: "Describe", id: 2 },
      ],
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
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts(): IPost[] {
      return [...(this.posts as Array<IPost>)].sort((a: IPost, b: IPost) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return a[this.selectedSort]?.localeCompare(b[this.selectedSort]);
      });
    },
  },
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
