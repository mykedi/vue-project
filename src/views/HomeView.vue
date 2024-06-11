<template>
  <main>
    <header>
      <h2 class="header">Список товаров:</h2>
      <Button
          size="small"
          @when-click="isFiltersOpen = !isFiltersOpen"
      >
        Все фильтры
        <template #icon>
          <FilterIcon/>
        </template>
      </Button>
      <Sidebar
          :is-open="isFiltersOpen"
          @close="isFiltersOpen = false"
      >
        <template #header>
          <h2>Все фильтры</h2>
        </template>
        <div>
          <div>
            <div :class="styles.categoryTitle">Категория</div>
          </div>
          <div>
            <div :class="styles.categoryTitle">Цена</div>
            <PriceFilter/>
          </div>
        </div>
      </Sidebar>
      <ProductSearch/>
    </header>
    <ProductList />
  </main>
</template>

<script setup>
import ProductList from '@/components/ProductList/ProductList.vue'
import ProductSearch from "@/components/ProductSearch/ProductSearch.vue";
import Button from "@/components/common/Button/Button.vue";
import {ref} from "vue";
import Sidebar from "@/components/common/Sidebar/Sidebar.vue";
import styles from './HomeView.module.css'
import FilterIcon from '@/assets/filter-icon.svg'
import PriceFilter from "@/components/PriceFilter/PriceFilter.vue";

const isFiltersOpen = ref(false)
</script>