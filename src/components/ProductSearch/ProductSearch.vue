<template>
  <div :class="styles.wrapper">
    <Search/>
  </div>
</template>

<script setup>

import Search from "@/components/common/SearchInput/SearchInput.vue";
import styles from './ProductSearch.module.css'
</script>
