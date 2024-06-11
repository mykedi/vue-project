<template>
  <form :class="styles.form" @submit.prevent="onSubmit">
    <div :class="styles.item">
      <div>
        <div :class="styles.label">Имя<span :class="styles.required">*</span>:</div>
        <input id="firstName" :class="styles.input" v-model="firstName" type="text" />
      </div>
      <div :class="styles.error">{{ errors['firstName'] }}</div>
    </div>

    <div :class="styles.item">
      <div>
        <div :class="styles.label">Фамилия<span :class="styles.required">*</span>:</div>
        <input :class="styles.input" id="lastName" v-model="lastName" type="text" />
      </div>
      <div :class="styles.error">{{ errors['lastName'] }}</div>
    </div>

    <div :class="styles.item">
      <div>
        <div :class="styles.label">Email<span :class="styles.required">*</span>:</div>
        <input :class="styles.input" id="email" v-model="email" type="email" />
      </div>
      <div :class="styles.error">{{ errors['email'] }}</div>
    </div>

    <div :class="styles.item">
      <div>
        <div :class="styles.label">Страна<span :class="styles.required">*</span>:</div>
        <select :class="styles.select" id="country" v-model="country" @blur="country.handleBlur" @change="loadCities">
          <option value="" disabled>Выберите страну</option>
          <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
        </select>
      </div>
      <div :class="styles.error">{{ errors['country'] }}</div>
    </div>

    <div :class="styles.item">
      <div>
        <div :class="styles.label">Город<span :class="styles.required">*</span>:</div>
        <select :class="styles.select" id="city" v-model="city" required>
          <option value="" disabled>Выберите город</option>
          <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
        </select>
      </div>
      <div :class="styles.error">{{ errors['city'] }}</div>
    </div>

    <div :class="styles.item">
      <div :class="styles.agreement">
        <input :class="styles.checkbox" type="checkbox" v-model="agreement" required />
        <div :class="styles.label">Согласие на обработку персональных данных<span :class="styles.required">*</span></div>
      </div>
      <div :class="styles.error">{{ errors['agreement'] }}</div>
    </div>
    <div>
      <Button :class="styles.submitButton" type="submit" :loading="isPending" :disable="!!Object.keys(errors).length">
        {{!isFormSent ? `Оформить заказ` : `Заказ оформлен`}}
      </Button>
    </div>
  </form>
</template>

<script setup>
import styles from './OrderForm.module.css'
import { ref } from 'vue'
import Button from "@/components/common/Button/Button.vue";
import * as yup from 'yup'
import { useField, useFormErrors, useForm } from "vee-validate";
import api from '@/api/services/test-service.js'

const isFormSent = ref(false)
const isPending = ref(false)
const countries = ref(['Россия', 'Казахстан', 'Турция'])
const cities = ref([])

const schema = yup.object({
  firstName: yup.string().required('Обязательное поле').min(4, 'Минимум 4 символа'),
  lastName: yup.string().required('Обязательное поле').min(4, 'Минимум 4 символа'),
  email: yup.string().email('Введите корректный email').required('Обязательное поле'),
  country: yup.string().required('Обязательное поле'),
  city: yup.string().required('Обязательное поле'),
  agreement: yup.bool().required(),
})

const {handleSubmit, resetForm, validate } = useForm({
  validationSchema: schema,
})

const {value: firstName} = useField('firstName')
const {value: lastName} = useField('lastName')
const {value: email} = useField('email')
const {value: country} = useField('country')
const {value: city} = useField('city')
const {value: agreement} = useField('agreement')

const errors = useFormErrors()

const loadCities = () => {
  switch (country.value) {
    case 'Россия':
      cities.value = ['Москва', 'Санкт-Петербург', 'Омск']
      break
    case 'Казахстан':
      cities.value = ['Астана', 'Алмата', 'Актау']
      break
    case 'Турция':
      cities.value = ['Анкара', 'Стамбул', 'Анталия']
      break
    default:
      cities.value = []
  }
}

const onSubmit = handleSubmit(async (values) => {
  const response = await validate?.()
  isPending.value = true
  try {
    if (response?.valid) {
      const res = await api.sendData(values)
      if (res.status === 200) isFormSent.value = true
    }
  } catch (e) {
    isFormSent.value = false
    console.warn(e)
  } finally {
    isPending.value = false
    resetForm()
  }
})
</script>

