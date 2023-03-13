<template>
  <form class="bg-slate-400 p-3 mb-4" @submit.prevent>
    <input
      type="text"
      placeholder="Title"
      class="border-2 border-black mr-4 px-1"
      v-bind:value="title"
      @input="inputTitle"
    />
    <input
      type="text"
      placeholder="Description"
      class="border-2 border-black mr-4 px-1"
      v-bind:value="body"
      @input="inputBody"
    />
    <button class="border-black border-2 bg-slate-100 p-1" @click="createPost">
      Create
    </button>
  </form>
  <div class="flex flex-wrap gap-5 p-3">
    <div
      class="border-2 border-black p-3 max-w-fit"
      v-for="post in posts"
      :key="post.id"
    >
      <div><strong class="mr-1">Title:</strong>{{ post.title }}</div>
      <div><strong class="mr-1">Body:</strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./index.css";

export default defineComponent({
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
