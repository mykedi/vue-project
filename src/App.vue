<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section class="page">
    <RouterLink to="/">Главная</RouterLink>

    <header>
      <h2 class="header">Список товаров:</h2>
    </header>

    <RouterView />
  </section>
</template>

<style scoped>
.page {
  width: 100%;
}

.header {
  margin: 16px 0 8px;
  font-weight: bold;
}
</style>
