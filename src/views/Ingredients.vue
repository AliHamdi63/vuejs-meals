<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-5 text-orange-600">Ingredients</h1>
  </div>

  <div class="px-8">
    <!-- @change="searchIngredients"  -->
    <input type="text" v-model="keyword"
      class="rounded border-2 border-gray-200 w-full mb-3 focus:ring-orange-600 focus:border-orange-600"
      placeholder="Search for Ingredients" />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <a href="#" @click.prevent="openIngredient(ingredient)" v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient" class="block bg-white shadow rounded p-3 mb-3">
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>

    <!-- <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
      v-for="ingredient of computedIngredients" :key="ingredient.idIngredient"
      class="block bg-white shadow rounded p-3 mb-3">
      <h3 class="tex-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link> -->

  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import axiosClient from '../axiosClient';
import store from '../store';

const router = useRouter();
const keyword = ref('');
const ingredients = ref([]);

const computedIngredients = computed(() => {
  if (!computedIngredients)
    return ingredients
  return ingredients.value.filter(
    i =>
      i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  )
})

function openIngredient(ingredient) {
  store.commit('setIngredient', ingredient)

  router.push({
    name: "byIngredient",
    params: {
      ingredient: ingredient.strIngredient
    }
  })

}
// function searchIngredients() {
//   if (keyword.value) {
//     store.dispatch('searchMeals', keyword.value)
//   }
//   else {
//     store.commit('setSearchedMeals', [])
//   }
// }


onMounted(() => {
  axiosClient.get(`list.php?i`)
    .then(({ data }) => {
      ingredients.value = data.meals
    })
})

</script>

<style></style>