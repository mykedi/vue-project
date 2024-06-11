<template>
  <button
      :class="[styles.button, styles.green, styles[props.size]]"
      :disabled="disable || loading"
      @click="onClick"
  >
    <LoaderIcon v-if="loading" :class="styles.loader"/>
    <slot></slot>
    <slot name="icon"></slot>
  </button>
</template>

<script setup>
import styles from './Button.module.css';
import LoaderIcon from '@/assets/icon-loader.svg'

const props = defineProps({
  text: {
    type: String,
  },
  icon: {
    type: () => Element,
  },
  size: {
    type: String,
    default: 'medium'
  },
  disable: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits()

const onClick = () => {
  emits('when-click')
}
</script>