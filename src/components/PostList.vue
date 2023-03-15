<template>
  <div class="flex-col flex-wrap">
    <h3 class="px-3">Posts:</h3>
    <div class="flex flex-wrap gap-5 p-3">
      <PostItem
        class="border-2 border-black p-3 max-w-fit"
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </div>
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
