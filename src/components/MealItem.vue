<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal"
                class="rounded-t-xl h-48 w-full object-cover hover:opacity-80">

        </router-link>

        <div class="p-3">
            <h3 class="font-semibold hover:opacity-80">{{ meal.strMeal }}</h3>
            <p class="mb-4">
                {{ $filters.truncateWords(meal.strInstructions, 10) }}
            </p>

            <div class=" mt-4 flex items-center justify-between">
                <YoutubeBtn :href="meal.strYoutube" />
            </div>
        </div>
    </div>
</template>

<script setup>
import YoutubeBtn from '../components/YoutubeBtn.vue';
const { meal } = defineProps({
    meal: Object
})

</script>

<style></style>