<template>
  <div class="flex flex-col justify-center items-center gap-2">
    <h1 class="font-bold text-lg">\\ Posts //</h1>
    <div class="flex flex-row gap-3">
      <MyButton @click="fetchPosts">Get posts</MyButton>
      <MyButton @click="showDialog">Create Post</MyButton>
    </div>
    <div class="flex flex-row justify-center items-center gap-2">
      <h2>Filters:</h2>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <MyInput
      v-focus
      v-model="searchQuery"
      placeholder="Search..."
      class="max-w-xs"
    />
    <MyDialog v-model:show="dialogVisible"
      ><PostForm @create="createPost"
    /></MyDialog>
    <PostList :posts="sortedAndSearchedPosts" @remove="removePost" />
    <div class="h-7" v-intersection="loadMorePosts"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import IPost from "@/components/interfaces/post.interface";
import MyInput from "@/components/UI/MyInput.vue";

export default defineComponent({
  name: "PostPage",
  components: {
    PostForm,
    PostList,
    MyInput,
  },
  data() {
    return {
      posts: [] as IPost[],
      dialogVisible: false,
      selectedSort: "" as string,
      searchQuery: "" as string,
      page: 1 as number,
      limit: 10 as number,
      totalPages: 0 as number,
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
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(res.headers["x-total-count"] / this.limit);
        this.posts = res.data;
      } catch (e) {
        console.log(e);
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(res.headers["x-total-count"] / this.limit);
        this.posts = [...this.posts, ...res.data];
      } catch (e) {
        console.log(e);
      }
    },
    changePage(pageNum: number) {
      this.page = pageNum;
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
    sortedAndSearchedPosts(): IPost[] {
      return this.sortedPosts.filter((post: IPost) => {
        return post.title.toLowerCase().includes(this.searchQuery);
      });
    },
  },
});
</script>
