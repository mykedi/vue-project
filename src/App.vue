<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section class="page">
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/cart">Корзина</RouterLink>

    <RouterView />
  </section>
</template>

<style scoped>
.page {
  width: 100%;
  padding: 24px 44px;
}
</style>
