<template>
  <form class="bg-slate-400 p-3 mb-4" @submit.prevent>
    <input
      type="text"
      placeholder="Title"
      class="border-2 border-black mr-4 px-1"
      v-model="post.title"
    />
    <input
      type="text"
      placeholder="Description"
      class="border-2 border-black mr-4 px-1"
      v-model="post.body"
    />
    <button class="border-black border-2 bg-slate-100 p-1" @click="createPost">
      Create
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      post: {
        id: 0,
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        id: 0,
        title: "",
        body: "",
      };
    },
  },
});
</script>
