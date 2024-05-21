<template>
  <button
      :class="[styles.filter, {[styles.active]: props.isActive}]"
      @click.prevent="emits('on-filter')"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
import styles from "./Filter.module.css";

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits()
</script>
