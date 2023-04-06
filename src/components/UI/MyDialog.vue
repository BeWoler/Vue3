<template>
  <div
    v-show="show"
    class="top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 fixed flex"
    @click="hideDialog"
  >
    <div @click.stop class="m-auto border-2 bg-white h-52 w-96 rounded-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import toggleMixin from "@/mixins/toggleMixin";
export default {
  name: "MyDialog",
  mixins: [toggleMixin],
};
</script>
