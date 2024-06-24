<template>
  <section class="recipe-detail">
    <div class="recipe-details">
      <h2>{{ recipe.title }}</h2>
      <img v-if="recipe.imageUrl" :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image">
      <p>{{ recipe.description }}</p>
      <div class="recipe-info">
        <p><strong>Created By:</strong> {{ recipe.createdBy }}</p>
        <p><strong>Created At:</strong> {{ formattedDate(recipe.createdAt) }}</p>
      </div>
      <div class="ratings">
        <h3>Rating:</h3>
        <div class="stars">
          <span
            v-for="n in 5"
            :key="n"
            class="star"
            :class="{ 'filled': n <= userRating }"
            @click="rateRecipe(n)"
          >&#9733;</span>
        </div>
        <p>{{ recipe.ratingsCount }} ratings</p>
      </div>
      <div class="comments">
        <h3>Comments:</h3>
        <ul v-if="recipe.comments.length > 0">
          <li v-for="comment in recipe.comments" :key="comment._id">
            <p><strong>{{ comment.user }}</strong>: {{ comment.text }}</p>
          </li>
        </ul>
        <p v-else>No comments yet.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'RecipeDetailView',
  data() {
    return {
      userRating: 0
    };
  },
  computed: {
    ...mapState(['recipe'])
  },
  methods: {
    formattedDate(dateStr) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString('en-US', options);
    },
    rateRecipe(rating) {
      console.log(`User rated with ${rating} stars.`);
      this.userRating = rating;
    },
    fetchRecipe() {
      const recipeId = this.$route.params.id;
      this.$store.dispatch('fetchRecipe', recipeId);
    }
  },
  created() {
    this.fetchRecipe();
  }
};
</script>

<style scoped>
.recipe-detail {
  margin-top: 6.5%;
  padding: 20px;
  background-color: #f0efeb;
  min-height: 100vh;
}

.recipe-details {
  margin: 20px auto;
  max-width: 800px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.recipe-details h2 {
  font-size: 2.5em;
  color: #333;
}

.recipe-details p {
  color: #666;
  line-height: 1.6;
}

.recipe-info {
  margin-top: 20px;
  color: #888;
}

.recipe-info p {
  margin-bottom: 8px;
}

.ratings {
  margin-top: 20px;
}

.ratings h3 {
  font-size: 1.5em;
  color: #333;
}

.stars {
  color: #ffcc00;
}

.star {
  font-size: 1.5em;
  cursor: pointer;
}

.star.filled {
  color: #ffcc00;
}

.comments {
  margin-top: 20px;
}

.comments h3 {
  font-size: 1.5em;
  color: #333;
}

.comments ul {
  padding: 0;
  margin-top: 10px;
  list-style-type: none;
}

.comments ul li {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.comments ul li:last-child {
  border-bottom: none;
}

.comments ul li p {
  margin: 0;
}

footer {
  text-align: center;
  margin-top: 20px;
  color: #888;
}

.recipe-image {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 20px;
}
</style>
