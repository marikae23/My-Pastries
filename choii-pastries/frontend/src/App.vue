<template>
    <section>
      <header>
        <a href="#"><img src="https://64.media.tumblr.com/1936810ee5acb3bdb6788245bbc1913e/541a4958c10d89bb-ec/s640x960/21641a93473dd520d5b8e85b6b41232031bbbec4.pnj" class="logo"></a>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/menu">Menu</router-link></li>
          <li><router-link to="/aboutus">About us</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </header>
      <div class="content">
        <div class="textBox">
          <h2>Welcome to<br><span>Choii </span> pastries!</h2>
          <p>Embrace the artistry of baking with our curated collection of exquisite recipes, meticulously crafted by talented artisans and seasoned pastry connoisseurs. From the delicate flakiness of French croissants to the decadent richness of velvety chocolate cakes, each creation embodies the essence of indulgence and refinement.</p>
          <p>Join our community and share your own baking masterpieces. Let's bake memories together!</p>
          <button class="btn-21"><span>Let's go!</span></button>
        </div>
        <div>
          <img src="https://64.media.tumblr.com/054b12bd5cfc909ef84aafcd1f05ed2c/56235be97afe8473-19/s500x750/7bf7864488a030a3e2c41fcfba48ea953c7e8e61.pnj" class="cake">
          <img src="https://64.media.tumblr.com/412fd0f6d8f95dd3c030e676bdbe2ead/f5f9d2dd82d83c43-e9/s1280x1920/66d7d343f033db1ad8ae7a3d8c99dd5c6156586c.pnj" class="flower">
        </div>
      </div>
      <ul class="thumb">
        <li><img src="https://64.media.tumblr.com/5926c18934b4b63c0cd6db97e5646739/119c9d60fa5bba8d-d3/s400x600/536642ff070e4b49ca3e616590f7cbaf0a08d498.pnj"></li>
        <li><img src="https://64.media.tumblr.com/9861e8d5f7de632d165022b7e8c284d1/119c9d60fa5bba8d-0e/s400x600/a62ab8e665b04108c3732a944840744b61b99573.pnj"></li>
        <li><img src="https://64.media.tumblr.com/366150cc36ce460716913b18bf5fd69c/119c9d60fa5bba8d-95/s400x600/4c4b183408c4260faeca4b542ecb61ce719b814f.pnj"></li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Se precisar de dados específicos do componente, coloque-os aqui
      };
    },
    methods: {
      // Se precisar de métodos específicos do componente, coloque-os aqui
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
*

{
    margin: 0;
    padding:0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
}

section{
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 10px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f0efeb;
}

header{
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

header .logo{
    position: relative;
    max-width: 95px;
}

header ul{
    position: relative;
    display: flex;
}

header ul li{
    list-style: none;
}

header ul li a{
    display: inline-block;
    color: #333;
    font-weight: 600;
    margin-left: 40px;
    text-decoration: none;
}

.content{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content .textBox{
    position: relative;
    max-width: 750px;
}

.content .textBox h2{
    color: #333;
    font-size: 3.0em;
    font-weight: 900;
}

.content .textBox h2 span{
    color: #ef476f;
    font-size: 1.5em;
    font-weight: 900;
}

.content .textBox p{
    color: #333;
    
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

.content .cake {
    position: absolute;
    margin-right: 20px;
    max-width: auto;
    height: 550px;
    top: 48%;
    left: 85%;
    transform: translate(-50%, -50%);
    z-index: 0;

  }

.content .flower {
    position: absolute;
    height: 160px;
    top: 74%;
    left: 88%;
  
  }

.thumb{
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    display: flex;
}

.thumb li{
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
    transition: 0.5s;
}

.thumb li:hover{
    transform: translateY(-15px);
}

.thumb li img{
    margin-top: 60px;
    width: 110px;
    height: auto;
}

.sci{
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
  </style>
  