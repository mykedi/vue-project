<template>
<div :class="styles.productCard">
  <div :class="styles.imgWrapper">
    <img :src="props.product.image" :alt="props.product.title">
  </div>
  <div :class="styles.price">{{ props.product.price }} ₽</div>
  <h2>{{ props.product.title }}</h2>
  <div :class="styles.description">{{ props.product.description }}</div>
  <div>
    <span :class="styles.rate">Рейтинг: {{ props.product.rating.rate }}</span> <span :class="styles.count">({{ props.product.rating.count }} отзывов)</span>
  </div>
  <div :class="styles.toCartBtn">
    <Button
        @when-click="addToCart"
    >
      Добавить в корзину
    </Button>
  </div>
</div>
</template>

<script setup>
import styles from './ProductCard.module.css'
import Button from "@/components/common/Button/Button.vue";

const props = defineProps({
  product: {
    type: Object,
  }
});

const addToCart = () => {}
</script>
