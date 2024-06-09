<template>
    <div>
      <h1>Menu</h1>
      <div v-for="recipe in recipes" :key="recipe._id">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.ingredients }}</p>
        <p>{{ recipe.instructions }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Menu',
    computed: {
      recipes() {
        return this.$store.state.recipes;
      },
    },
    created() {
      this.$store.dispatch('fetchRecipes');
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
  }
  </style>
  