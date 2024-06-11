<template>
  <form :class="styles.wrapper" onsubmit="">
    <input
        :class="styles.input"
        type="search"
        v-model="value"
    >
    <Button size="small">
      <template #icon>
        <SearchIcon/>
      </template>
    </Button>
  </form>

</template>

<script setup>
import { ref } from "vue";
import styles from './SearchInput.module.css'
import Button from "@/components/common/Button/Button.vue";
import SearchIcon from "@/assets/search.svg"

const value = ref('')
</script>