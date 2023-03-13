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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
