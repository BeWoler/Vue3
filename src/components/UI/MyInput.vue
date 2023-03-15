<template>
  <input
    class="border-2 border-black px-1 w-full h-10"
    :value="modelValue"
    @input="updateInput"
  />
</template>

<script lang="ts">
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event: Event) {
      this.$emit("update:modelValue", (event.target as HTMLInputElement).value);
    },
  },
};
</script>
