<template>
  <nav class="flex gap-3 mb-4">
    <MyButton @click="$router.push('/')">Main</MyButton>
    <MyButton @click="$router.push('/posts')">Posts</MyButton>
    <MyButton @click="$router.push('/about')">About</MyButton>
  </nav>
</template>

<script lang="ts">
import MyButton from "./UI/MyButton.vue";

export default { components: { MyButton } };
</script>
