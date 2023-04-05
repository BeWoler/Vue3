<template>
  <div class="flex-col flex-wrap" v-if="posts.length > 0">
    <h3>Posts:</h3>
    <div class="flex flex-row flex-wrap gap-5">
      <PostItem
        class="border-2 border-black max-w-md min-w-300 min-h-100 max-h-200 overflow-auto"
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </div>
  </div>
  <div v-else class="flex-col flex-wrap">
    <h3 class="px-3">Posts is missing</h3>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { type PropType } from "vue";
import IPost from "./interfaces/post.interface";
import PostItem from "./PostItem.vue";

defineProps({
  posts: {
    type: Array as PropType<Array<IPost>>,
    required: true,
  },
});
</script>
