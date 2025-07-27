// src/components/recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],

  favorites: [],
  addFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId),
    })),

  recommendations: [],
  generateRecommendations: () =>
    set(state => {
      // Simple mock: recommend recipes NOT favorited with a random filter
      const recommended = state.recipes.filter(
        recipe =>
          !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export { useRecipeStore };
