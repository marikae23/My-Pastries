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
        <div class="content">
            <div class="textBox">
                <h2>Choose your <span>favorite</span>!</h2>
                <p>Find Your Favorite Recipe Here! Explore our collection and choose the recipe that excites your taste buds. Whether you're looking for something new or a beloved classic, we have the perfect recipe waiting for you!</p>
            </div>
        </div>
  
        <!-- Containers das receitas -->
        <section class="products">
            <div class="product-container">
                <div class="product" v-for="(recipe, index) in recipes" :key="index">
                    <img :src="recipe.image" :alt="`Recipe ${index + 1}`">
                    <h3>{{ recipe.title }}</h3>
                    <p>{{ recipe.description }}</p>
                </div>
            </div>
        </section>
  
        <section id="about-us">
            <div class="content2">
                <div class="textBox2">
                    <h2>Choose your <span>favorite</span>!</h2>
                    <p>Find Your Favorite Recipe Here! Explore our collection and choose the recipe that excites your taste buds. Whether you're looking for something new or a beloved classic, we have the perfect recipe waiting for you!</p>
                </div>
            </div>
        </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuPage',
    data() {
        return {
            recipes: [
                { image: 'https://via.placeholder.com/200', title: 'Recipe 1', description: 'Delicious and easy to make.' },
                { image: 'https://via.placeholder.com/200', title: 'Recipe 2', description: 'Perfect for any occasion.' },
                // Adicione mais receitas aqui
            ]
        }
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  body {
    background: #f0efeb;
  }
  
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
    margin-bottom: 20px;
  }
  
  .content .textBox h2 {
    color: #333;
    font-size: 3.0em;
    font-weight: 900;
  }
  
  .content .textBox h2 span {
    color: #ef476f;
    font-size: 1em;
    font-weight: 900;
  }
  
  .content .textBox p {
    color: #333;
  }
  
  .products {
    text-align: center;
    padding: 0% 7%;
    margin-top: 20px; /* Ajusta a margem superior */
  }
  
  .products h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .product {
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    width: 16%;
    height: 290px;
    text-align: center;
    transition: transform 0.2s;
  }
  
  .product:hover {
    transform: scale(1.05);
  }
  
  .product img {
    width: 100%;
    height: auto;
    max-height: 150px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
  
  .product h3 {
    font-size: 1em;
    margin: 10px 0;
  }
  
  .product p {
    font-size: 0.8em;
    color: #666;
  }
  </style>
  