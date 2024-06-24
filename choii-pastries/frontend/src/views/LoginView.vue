<template>
  <div class="auth-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
      </div>
      <p v-if="error" class="error">{{ error }}</p>
      <button type="submit" class="btn-21"><span>Login</span></button>
    </form>
    <div class="social-login">
      <button @click="loginWithGoogle" class="btn-google"><span>Login with Google</span></button>
      <button @click="loginWithFacebook" class="btn-facebook"><span>Login with Facebook</span></button>
      <button @click="loginWithTwitter" class="btn-twitter"><span>Login with Twitter</span></button>
    </div>
    <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login() {
      this.error = null; // Reset error message
      try {
        await this.$store.dispatch('login', { username: this.username, password: this.password });
        this.$router.push('/recipes');
      } catch (error) {
        this.error = 'Login failed. Please check your username and password.';
      }
    },
    loginWithGoogle() {
      window.location.href = 'http://localhost:5000/auth/google';
    },
    loginWithFacebook() {
      window.location.href = 'http://localhost:5000/auth/facebook';
    },
    loginWithTwitter() {
      window.location.href = 'http://localhost:5000/auth/twitter';
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

.social-login {
  margin-top: 20px;
}

.social-login button {
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.btn-google {
  background-color: #db4437;
}

.btn-facebook {
  background-color: #4267B2;
}

.btn-twitter {
  background-color: #1DA1F2;
}

.error {
  color: red;
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
