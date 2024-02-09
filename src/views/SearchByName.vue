<template>
  <div class="p-8 pb-0 mb-5">
    <h1 class="font-bold text-4xl text-orange-600">Search Meals by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <input type="text" v-model="keyword" @change="searchMeals"
      class="rounded border-2 border-gray-200 w-full focus:ring-orange-600 focus:border-orange-600"
      placeholder="Search for Meals" />
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import Meals from '../components/Meals.vue';
import { useRoute } from "vue-router"
import { computed, onMounted, ref } from "vue";
import store from "../store";

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch('searchMeals', keyword.value)
  }
  else {
    store.commit('setSearchedMeals', [])
  }

}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})

</script>

<style></style>