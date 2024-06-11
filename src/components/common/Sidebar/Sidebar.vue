<template>
  <Transition>
    <div v-if="props.isOpen" :class="styles.sidebar">
      <div :class="styles.header">
        <slot name="header"></slot>
        <CloseIcon :class="styles.closeIcon" @click="emits('close')" />
      </div>
      <div :class="styles.content">
        <slot></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { Transition } from "vue";
import CloseIcon from '@/assets/icon-close.svg'
import styles from './Sidebar.module.css'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  }
})

const emits = defineEmits()

const close = () => {
  emits('close')
}

</script>
