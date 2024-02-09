<template>
    <a :href="href" target="_blank"
        class="px-3 py-2 rounded border-2 border-red-600 bg-red-600 text-white hover:bg-white hover:text-black transition-colors">
        <slot>Youtube</slot>
        <slot name="GoToYTB"></slot>
    </a>
    <!-- <router-link to="/"
            class="px-3 py-2 rounded border-2 border-orange-400 bg-orange-400 text-white hover:bg-white hover:text-black transition-colors">
            View
          </router-link> -->
</template>

<script setup>

const props = defineProps({
    href: String,
})


</script>

<style></style>