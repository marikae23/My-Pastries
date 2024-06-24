<template>
  <section>
    <div class="content">
      <div class="textBox">
        <h2>Our <span>Menu</span>!</h2>
        <p>Find Your Favorite Recipe Here! Explore our collection and choose the recipe that excites your taste buds. Whether you're looking for something new or a beloved classic, we have the perfect recipe waiting for you!</p>
        <router-link to="/create-recipe">
          <button class="btn-21"><span>Create a recipe</span></button>
        </router-link>
      </div>
    </div>
    <section>
      <div class="menu">
        <!-- Exemplos de Receitas -->
        <router-link v-for="recipe in recipes" :key="recipe.id" :to="'/recipe/' + recipe.id">
          <div class="recipe-card">
            <img :src="recipe.imageUrl" :alt="recipe.title + ' Image'" class="recipe-image" />
            <div class="recipe-details">
              <h3>{{ recipe.title }}</h3>
              <p>{{ recipe.description }}</p>
              <router-link :to="'/recipe/' + recipe.id">View Recipe</router-link>
            </div>
          </div>
        </router-link>
        <!-- Fim dos Exemplos de Receitas -->
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MenuView',
  computed: {
    ...mapState(['recipesSent'])
  },
  methods: {
    fetchRecipes() {
      // Aqui você pode buscar as receitas do servidor ao inicializar o componente
      // Exemplo: this.$store.dispatch('fetchRecipes');
    }
  },
  created() {
    this.fetchRecipes();
  }
};
</script>


<style scoped>
section {
  min-height: 100vh;
  padding: 10px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.content {
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto 20px;
  padding: 20px;
}

.content .textBox {
  position: relative;
  max-width: 59%;
}

.content .textBox h2 {
  color: #22223b;
  font-size: 3.0em;
  font-weight: 900;
}

.content .textBox h2 span {
  color: #ef476f;
  font-size: 1em;
  font-weight: 900;
}

.content .textBox p {
  color: #4a4e69;
}

.menu {
  display: flex;  /* Usar flexbox para alinhar os itens lado a lado */
  justify-content: center;  /* Centralizar os itens na linha */
  flex-wrap: wrap;  /* Permitir que os itens sejam quebrados em várias linhas, se necessário */
  gap: 20px;  /* Espaçamento entre os itens */
  margin: 20px 0;
}

.recipe-card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 250px;  /* Definir largura fixa para os cartões */
  transition: transform 0.3s ease;
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-card .recipe-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.recipe-card .recipe-details {
  margin-top: 10px;
}

.recipe-card h3 {
  margin-bottom: 10px;
  font-size: 1.2em;
}

.recipe-card p {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 15px;
}

.router-link {
  display: block;
  background-color: #cb997e;
  color: white;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.router-link:hover {
  background-color: #af7a5f;
}
</style>
