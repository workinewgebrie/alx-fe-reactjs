import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],          // your list of recipes
  searchTerm: '',       // current search text
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();  // filter whenever search term changes
  },
  filteredRecipes: [],  // filtered recipes after search
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
  addRecipe: (recipe) =>
    set(state => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.filteredRecipes, recipe],
    })),
  // ...other actions (updateRecipe, deleteRecipe)
}));

export { useRecipeStore };
