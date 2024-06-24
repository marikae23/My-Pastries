<template>
  <div id="app">
    <header>
      <a href="#"><router-link to="/"><img src="https://64.media.tumblr.com/cc89fef611b4e584e8cc48afe5637586/541a4958c10d89bb-35/s640x960/12cabb23a9cd0368f7aa3c5ab868b3041023cb2c.pnj" class="logo"></router-link></a>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/menu">Menu</router-link></li>
        <li><router-link to="/aboutus">About us</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </header>
    <router-view></router-view>
    <footer v-if="!isHome">
      <div class="footer-content">
        <div class="social-media">
          <a href="#"><img src="https://img.icons8.com/?size=100&id=wDv7lZUqdFyQ&format=png&color=000000" alt="Pinterest"></a>
          <a href="#"><img src="https://img.icons8.com/?size=100&id=bVGqATNwfhYq&format=png&color=000000" alt="Github"></a>
          <a href="#"><img src="https://img.icons8.com/?size=100&id=UrgbzHxXKotn&format=png&color=000000" alt="Instagram"></a>
        </div>
        <p>&copy; 2023 Choii Pastries. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isHome() {
      return this.$route.path === '/';
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html, body, #app {
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* Evita estouro horizontal */
}

section {
  width: 100%;
  min-height: 100vh;
  padding: 10px 100px;
  background-color: #f2e9e4;
}

header {
  background-color: #4a4e69;
  position: fixed; /* Fixando a posição do header */
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

header .logo {
  max-width: 95px;
}

header ul {
  display: flex;
}

header ul li {
  list-style: none;
}

header ul li a {
  color: #22223b;
  font-weight: 600;
  margin-left: 40px;
  text-decoration: none;
  transition: color 0.3s ease; /* Adiciona uma transição suave para a mudança de cor */
}

header ul li a:hover {
  color: #ef476f; /* Cor que o texto deve mudar ao passar o mouse por cima */
}

.btn-21,
.btn-21 *,
.btn-21 :after,
.btn-21 :before,
.btn-21:after,
.btn-21:before {
  border: 0 solid;
  box-sizing: border-box;
}
.btn-21 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  display: inline-block;
  margin-top: 20px;
  background-color: #ef476f;
  color: #ef476f;
  cursor: pointer;
  font-size: 100%;
  font-weight: 800;
  line-height: 1.5;
  -webkit-mask-image: -webkit-radial-gradient(#fff, #000);
  padding: 0;
  text-transform: uppercase;
}

.btn-21:disabled {
  cursor: default;
}
.btn-21:-moz-focusring {
  outline: auto;
}
.btn-21 svg {
  display: block;
  vertical-align: middle;
}
.btn-21 [hidden] {
  display: none;
}
.btn-21 {
  border-radius: 99rem;
  border-width: 2px;
  overflow: hidden;
  padding: 0.8rem 3rem;
  position: relative;
}
.btn-21 span {
  mix-blend-mode: difference;
}
.btn-21:before {
  -webkit-animation: move-out 0.3s;
  animation: move-out 0.3s;
  background: #fff;
  content: "";
  height: 100%;
  left: -100%;
  position: absolute;
  top: 0;
  width: 100%;
  will-change: transform;
}
.btn-21:hover:before {
  -webkit-animation: move-in 0.3s forwards;
  animation: move-in 0.3s forwards;
}
@-webkit-keyframes move-in {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
@keyframes move-in {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
@-webkit-keyframes move-out {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(200%);
  }
}
@keyframes move-out {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(200%);
  }
}

footer {
  background-color: #4a4e69; /* Mesma cor de fundo do header */
  color: #fff;
  padding: 20px 100px;
  text-align: center;
  margin-top: 20px; /* Adiciona um espaço no topo do footer */
}

footer .footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer .social-media {
  margin-bottom: 10px;
}

footer .social-media a {
  margin: 0 10px;
  text-decoration: none;
}

footer .social-media img {
  width: 30px;
  height: 30px;
}

html, body, #app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: #f2e9e4; /* Define o fundo preto para toda a página */
}

.auth-container {
  background: #c9ada7; /* Fundo branco para a caixa de signup */
}
</style>
