<template>
  <button class="ea-button" :class="buttonStyle">
    <slot />
  </button>
</template>

<script  setup>
import "./styles/index.scss";
import { computed } from "vue";
defineOptions({ name: "k-button" });
const buttonProps = defineProps(['type']);

const buttonStyle = computed(() => {
  return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
});
</script>


