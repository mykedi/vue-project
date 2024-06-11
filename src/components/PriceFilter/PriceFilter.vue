<template>
  <div :class="styles.wrapper">
    <div :class="styles.block">
      <label for="from">От</label>
      <input
          :class="styles.input"
          type="number"
          name="from"
          v-model.number="priceRange.from"
          @keydown="checkDigit"
      >
    </div>
    <div :class="styles.block">
      <label for="to">До</label>
      <input
          :class="styles.input"
          type="number"
          name="to"
          v-model.number="priceRange.to"
          @keydown="checkDigit"
      >
    </div>
  </div>
</template>

<script setup>
import styles from "./PriceInput.module.css";
import {ref} from "vue";

const priceRange = ref({
  from: '',
  to: '',
})

const checkDigit = (event) => {
  if (event.key.length === 1 && isNaN(Number(event.key))) {
    event.preventDefault();
  }
}
</script>
