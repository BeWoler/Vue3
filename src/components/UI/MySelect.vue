<template>
  <select
    class="border-2 border-black p-1 max-w-fit"
    :value="modelValue"
    @change="changeOption"
  >
    <option disabled value="">Choose from list</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { PropType } from "vue";
import IOption from "../interfaces/option.interface";

export default {
  name: "MySelect",
  props: {
    modelValue: {
      type: String as PropType<string>,
    },
    options: {
      type: Array as PropType<IOption[]>,
      default: () => [] as IOption[],
    },
  },
  methods: {
    changeOption(event: Event) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.$emit(
        "update:modelValue",
        (event.target as HTMLSelectElement).value
      );
    },
  },
};
</script>
