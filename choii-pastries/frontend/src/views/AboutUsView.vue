<template>
    <div>
        <!-- Nav e logo -->
        <header>
            <a href="#"><img src="https://64.media.tumblr.com/1936810ee5acb3bdb6788245bbc1913e/541a4958c10d89bb-ec/s640x960/21641a93473dd520d5b8e85b6b41232031bbbec4.pnj" class="logo"></a>
            <ul>
              <li><a href="Home.vue">Home</a></li>
              <li><a href="Menu.vue">Menu</a></li>
              <li><a href="AboutUs.vue">About us</a></li>
              <li><a href="Login.vue">Login</a></li>
          </ul>
        </header>

        <!-- Conteúdo principal -->
        <div class="content2">
            <div class="textBox2">
                <h2>Título Principal <span>Subtítulo</span></h2>
                <p>Texto de exemplo aqui.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUs',
    data() {
        return {
            // dados para o componente
        }
    },
    methods: {
        // métodos para o componente
    }
}
</script>

<style scoped>
body {
    background: #ef476f;
}

.content2 {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px auto 20px;
    padding: 20px;
}

.content2 .textBox2 {
    position: relative;
    max-width: 59%;
    margin-bottom: 20px;
}

.content2 .textBox2 h2 {
    color: #333;
    font-size: 3.0em;
    font-weight: 900;
}

.content2 .textBox2 h2 span {
    color: #ef476f;
    font-size: 1em;
    font-weight: 900;
}

.content2 .textBox2 p {
    color: #333;
}
</style>
