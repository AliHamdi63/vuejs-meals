export function setSearchedMeals(state, meals) {
    state.searchedMeals.data = meals || []
    state.searchedMeals.loading = true
}
export function setMealsByLetter(state, meals) {
    state.mealsByLetter.data = meals || []
    state.mealsByLetter.loading = true
}
export function setMealsByIngredient(state, meals) {
    state.mealsByIngredient.data = meals || []
    state.mealsByIngredient.loading = true
}
export function setIngredient(state, ingredient) {
    state.ingredient = ingredient
}