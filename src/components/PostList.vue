<template>
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

<script lang="ts" setup>
import { defineProps } from "vue";
import { type PropType } from "vue";
import IPost from "./interfaces/post.interface";

defineProps({
  posts: {
    type: Array as PropType<Array<IPost>>,
    required: true,
  },
});
</script>
