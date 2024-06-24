<template>
    <section>
      <div class="form-container">
        <form @submit.prevent="createRecipe">
          <div class="form-group">
            <label for="title">Recipe Title:</label>
            <input type="text" id="title" v-model="newRecipe.title" required />
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <textarea id="description" v-model="newRecipe.description" required></textarea>
          </div>
          <div class="form-group">
            <label for="ingredients">Ingredients:</label>
            <textarea id="ingredients" v-model="newRecipe.ingredients" required></textarea>
          </div>
          <div class="form-group">
            <label for="instructions">Instructions:</label>
            <textarea id="instructions" v-model="newRecipe.instructions" required></textarea>
          </div>
          <div class="form-group">
            <label for="image">Recipe Image:</label>
            <input type="file" id="image" @change="onImageChange" required />
          </div>
          <button type="submit">Create Recipe</button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newRecipe: {
          title: '',
          description: '',
          ingredients: '',
          instructions: '',
          image: null,
        },
      };
    },
    methods: {
      onImageChange(event) {
        this.newRecipe.image = event.target.files[0];
      },
      async createRecipe() {
        const formData = new FormData();
        formData.append('title', this.newRecipe.title);
        formData.append('description', this.newRecipe.description);
        formData.append('ingredients', this.newRecipe.ingredients);
        formData.append('instructions', this.newRecipe.instructions);
        formData.append('image', this.newRecipe.image);
  
        try {
          await axios.post('https://api.choiipastries.com/api/recipes', formData);
          // Lógica para após a criação da receita
          this.$router.push('/menu');
        } catch (error) {
          console.error('Error creating recipe:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  header {
    background-color: #cb997e;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  header .logo {
    position: relative;
    max-width: 95px;
  }
  
  header ul {
    position: relative;
    display: flex;
  }
  
  header ul li {
    list-style: none;
  }
  
  header ul li a {
    display: inline-block;
    color: #333;
    font-weight: 600;
    margin-left: 40px;
    text-decoration: none;
  }
  
  .form-container {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    width: 400px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input, textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px;
    background-color: #cb997e;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  