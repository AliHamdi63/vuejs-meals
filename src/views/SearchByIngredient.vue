<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-5 text-orange-600">Meals for {{ ingredient.strIngredient }}</h1>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import Meals from '../components/Meals.vue';

import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';

const route = useRoute();
const ingredient = computed(() => store.state.ingredient)
const meals = computed(() => store.state.mealsByIngredient)


onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})



</script>

<style></style>