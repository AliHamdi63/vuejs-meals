<template>
  <div class="p-8 pb-0 mb-5">
    <h1 class="font-bold text-4xl text-orange-600">Meals By Letter</h1>
  </div>

  <div class="flex flex-wrap gap-3 mb-5 px-8 justify-center ">
    <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-600 hover:scale-150 transition-all">
      {{ letter }}
    </router-link>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import Meals from '../components/Meals.vue';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

const route = useRoute();
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)

})

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>

<style></style>