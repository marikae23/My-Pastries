<template>
  <div class="auth-container">
    <h1>Sign Up</h1>
    <form @submit.prevent="signup">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
      </div>
      <p v-if="error" class="error">{{ error }}</p>
      <button type="submit" class="btn-21"><span>Sign Up</span></button>
    </form>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'SignupView',
  data() {
    return {
      username: '',
      password: '',
      error: null
    };
  },
  methods: {
    async signup() {
      try {
        await this.$store.dispatch('signup', { username: this.username, password: this.password });
        this.$router.push('/login');
      } catch (error) {
        this.error = 'Signup failed. Username might already be taken.';
      }
    }
  }
};
</script>

<style scoped>
.auth-container {
  max-width: 450px;
  margin: 8% auto; /* Margin para afastar do header */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.auth-container h1 {
  margin-bottom: 20px;
  color: #22223b;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  color: #4a4e69;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

p {
  margin-top: 20px;
  color: #4a4e69;
}

.router-link {
  color: #ef476f;
  text-decoration: none;
}

.router-link:hover {
  text-decoration: underline;
}
</style>
