<template>
    <div class="p-8 pb-0 mb-5">
        <h1 class="font-bold text-4xl text-orange-600">Random Meals</h1>
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
import Meals from "../components/Meals.vue";
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";


const meals = ref({
    data: []
})


onMounted(async () => {
    for (let i = 0; i < 10; i++) {
        axiosClient.get('random.php')
            .then(({ data }) => meals.value.data.push(data.meals[0]));
    }
})

</script>

<style></style>