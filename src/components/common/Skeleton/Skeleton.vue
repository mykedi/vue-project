<template>
  <div
      :class="styles.skeleton"
      :style="{width: props.width, height: props.height}"
  />
</template>

<script setup>
import styles from './Skeleton.module.css'
const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
})
</script>