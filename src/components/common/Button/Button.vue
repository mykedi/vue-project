<template>
  <button
      :class="[styles.button, styles.green]"
      @click="onClick"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
import styles from './Button.module.css';

const props = defineProps({
  text: {
    type: String,
  },
})

const emits = defineEmits()

const onClick = () => {
  emits('when-click')
}
</script>