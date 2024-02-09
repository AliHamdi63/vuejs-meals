<template>
    <header class="bg-white shadow flex justify-between sm:items-stretch items-center sm:h-16 sm:flex-row flex-col h-32">
        <router-link :to="{ name: 'home' }"
            class="inline-flex items-center h-full px-5 hover:bg-orange-600 hover:text-white text-orange-600 font-bold">
            Home
        </router-link>

        <div class="flex items-center gap-1 sm:flex-row flex-col">
            <router-link :to="{ name: 'byName' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:text-white hover:bg-orange-600">
                Search Meals
            </router-link>

            <router-link :to="{ name: 'byLetter' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:text-white hover:bg-orange-600">
                Meals By Letter
            </router-link>

            <router-link :to="{ name: 'ingredients' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:text-white hover:bg-orange-600">
                Meals By Ingredients
            </router-link>
        </div>
    </header>
</template>

<script setup>

</script>

<style></style>