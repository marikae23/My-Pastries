<!-- StarRating.vue -->
<template>
    <div class="star-rating">
      <span v-for="n in 5" :key="n" @click="rate(n)" :class="{ 'filled': n <= currentRating }">&#9733;</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      initialRating: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        currentRating: this.initialRating
      };
    },
    methods: {
      rate(rating) {
        // Emitir um evento para informar o componente pai (MenuPage.vue) sobre a nova avaliação
        this.currentRating = rating;
        this.$emit('rated', rating);
      }
    }
  };
  </script>
  
  <style scoped>
  .star-rating {
    font-size: 1.5em;
  }
  
  .star-rating span {
    color: #ccc;
    cursor: pointer;
    transition: color 0.2s;
  }
  
  .star-rating span.filled {
    color: #fdd835;
  }
  </style>
  