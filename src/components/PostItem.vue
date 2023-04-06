<template>
  <div class="border-2 border-black p-3 max-w-fit">
    <div><strong class="mr-1">Title:</strong>{{ post.title }}</div>
    <div><strong class="mr-1">Body:</strong>{{ post.body }}</div>
    <div class="flex gap-2 mt-2">
      <MyButton @click="$router.push(`/posts/${post.id}`)">Open</MyButton>
      <MyButton @click="$emit('remove', post)">Remove</MyButton>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import IPost from "./interfaces/post.interface";

export default {
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
};
</script>
