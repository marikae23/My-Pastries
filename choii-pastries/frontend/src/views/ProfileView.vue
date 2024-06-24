<template>
    <div class="profile">
      <h2>User Profile</h2>
      <div v-if="userProfile">
        <p><strong>Username:</strong> {{ userProfile.username }}</p>
        <p><strong>Email:</strong> {{ userProfile.email }}</p>
        <!-- Adicione outras informações do perfil aqui -->
      </div>
  
      <h2>Recipes Sent</h2>
      <div v-if="recipesSent.length > 0">
        <ul>
          <li v-for="recipe in recipesSent" :key="recipe.id">
            <router-link :to="'/recipe/' + recipe.slug">{{ recipe.title }}</router-link>
          </li>
        </ul>
      </div>
      <p v-else>No recipes sent yet.</p>
  
      <h2>Saved Recipes</h2>
      <div v-if="savedRecipes.length > 0">
        <ul>
          <li v-for="recipe in savedRecipes" :key="recipe.id">
            <router-link :to="'/recipe/' + recipe.slug">{{ recipe.title }}</router-link>
          </li>
        </ul>
      </div>
      <p v-else>No saved recipes yet.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileView',
    computed: {
      userProfile() {
        return this.$store.getters.userProfile;
      },
      recipesSent() {
        return this.$store.getters.recipesSent;
      },
      savedRecipes() {
        return this.$store.getters.savedRecipes;
      }
    },
    created() {
      // Ao carregar o componente, buscar as informações do perfil e as receitas do usuário
      this.$store.dispatch('fetchUserProfile');
      this.$store.dispatch('fetchRecipesSent');
      this.$store.dispatch('fetchSavedRecipes');
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para o componente ProfileView */
  </style>
  