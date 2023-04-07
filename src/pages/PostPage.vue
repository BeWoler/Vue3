<template>
  <div class="flex flex-col justify-center items-center gap-2">
    <h1 class="font-bold text-lg">\\ Posts //</h1>
    <div class="flex flex-row gap-3">
      <MyButton @click="fetchPosts">Get posts</MyButton>
      <MyButton @click="showDialog">Create Post</MyButton>
    </div>
    <div class="flex flex-row justify-center items-center gap-2">
      <h2>Filters:</h2>
      <MySelect
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>
    <MyInput
      v-focus
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
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
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
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
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
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
    changePage(pageNum: number) {
      this.page = pageNum;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapState({}),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
});
</script>
