<template>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 px-8 lg:grid-cols-5">
        <MealItem v-for="meal of meals.data" :key="meal.idMeal" :meal="meal" />

    </div>

    <div v-if="!meals.data.length" class="flex justify-center text-gray-600 p-8">
        There are no Meals.
    </div>
</template>

<script setup>
import MealItem from './MealItem.vue';

const { meals } = defineProps({
    meals: {
        required: true,
        type: Object,
    }
})

</script>