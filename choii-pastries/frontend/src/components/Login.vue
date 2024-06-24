<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username" required>
<input v-model="password" type="password" placeholder="Password" required>
<button type="submit">Login</button>
</form>
<p>Don't have an account? <a @click="signup">Sign up</a></p>

  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', { username: this.username, password: this.password });
    },
    signup() {
      this.$store.dispatch('signup', { username: this.username, password: this.password });
    },
  },
};
</script>
<style scoped>
h1 {
  color: #2c3e50;
}
</style>