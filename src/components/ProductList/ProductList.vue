<template>
  <div>
    <div v-if="filteredProducts.length && !isPending">
      <div :class="styles.filterWrapper">
        <div :class="styles.filter">
          <Filter
              v-for="(category, index) in Object.keys(categories)"
              :key="index"
              :text="categories[category]"
              :is-active="activeFilter === category"
              @on-filter="filterList(category)"
          />
        </div>
        <div>{{ activeFilter !== 'all' ? `Найдено: ${filteredProducts.length}` : '' }}</div>
      </div>
      <div :class="styles.list">
        <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
        />
      </div>
    </div>
    <div v-else :class="styles.list">
      <Skeleton
          v-for="index in 4"
          :key="index"
          width="23.333%"
          height="550px"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductList/ProductCard.vue';
import { ref, onMounted } from 'vue';
import styles from './ProductList.module.css'
import Skeleton from "@/components/common/Skeleton/Skeleton.vue";
import Filter from "@/components/common/Filter/Filter.vue";

const products = ref([]);
const filteredProducts = ref([]);
const isPending = ref(false);
const activeFilter = ref('all')
const categories = {
  all: 'Все',
  clothing: 'Одежда',
  electronics: 'Электроника',
  jewelery: 'Ювелирные украшения',
}
const handleUrl = 'https://fakestoreapi.com/products'

const getProducts = async () => {
  isPending.value = true;
  try {
    const data = await fetch(handleUrl);
    products.value = await data.json();
    filteredProducts.value = products.value;
  } catch (error) {
  } finally {
    isPending.value = false;
  }
}

onMounted(async () => {
  await getProducts()
})

const filterList = (filter) => {
  activeFilter.value = filter;

  if (filter === 'all') {
    filteredProducts.value = products.value;
  } else {
    filteredProducts.value = products.value.filter(({category}) => category.includes(filter));
  }
}
</script>