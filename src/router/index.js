import { createRouter, createWebHistory } from "vue-router"

import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';

import { Home, MealDetails, SearchByIngredient, Ingredients, SearchByLetter, SearchByName } from '../views/'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: SearchByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: SearchByLetter
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: SearchByIngredient
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            },
        ]
    },
    {
        path: '/guest',
        component: GuestLayout
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,

})


export default router