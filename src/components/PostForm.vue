<template>
  <form
    class="flex flex-col gap-5 justify-center items-center p-3"
    @submit.prevent
  >
    <MyInput v-focus type="text" placeholder="Title" v-model="post.title" />
    <MyInput type="text" placeholder="Description" v-model="post.body" />
    <MyButton @click="createPost">Create</MyButton>
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
      if (!this.post.body && !this.post.title) return alert("Fields is empty");
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
