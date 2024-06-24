<template>
  <section>
    <div class="content">
      <div class="textBox">
        <h2>About Us!</h2>
        <p>Choii Pastries is more than just a bakery; it is the realized dream of Maria Eduarda de Moura Eguchi, a talented 20-year-old whose passion for pastry-making began in her childhood. This is a tale of perseverance, creativity, and love for the art of making sweets, which transcends the boundaries of a simple cake shop.</p>
        <h3>The Origin of <span>Choii Pastries</span>!</h3>
        <p>Maria Eduarda, affectionately nicknamed "Eguchoii" by her friends and family, grew up in a small town in Japan where she developed an early interest in culinary arts. Her grandmother, a skilled baker, was the first to teach her the magic of combining simple ingredients to create something truly special. Together, they spent hours in the kitchen, baking cakes and preparing sweets for family gatherings.</p>
        <p>Over time, Eguchoii discovered that baking was her true passion. After high school, she decided to delve deeper into the world of gastronomy and enrolled in a renowned culinary school. There, she honed her skills and learned advanced techniques that helped transform her creations into true masterpieces.</p>
      </div>
      <img src="https://64.media.tumblr.com/04389b70f0b58d50f63108506e192be1/56235be97afe8473-e8/s500x750/930dfe571adcc9eb2b457f0bca9713c2956cf1be.pnj" class="cake">
    </div>
    <div class="flower">
      <img src="https://64.media.tumblr.com/f888f81c0e556e911ed09579d2656be1/5d0caca365cc47b9-77/s500x750/fdcac12aadc917a74b623b2a754e645fc5715583.pnj"
    </div>
    <div class="content2 brown-background">
      <img src="https://64.media.tumblr.com/f069d49495ca6458e7db5aa3e5ea4357/b7c040c8d2bfde21-a2/s500x750/eb284289a5a3d0ffc6c53acd6727f694a11d076a.pnj" class="cake2">
      <div class="textBox">
        <h2>Birth of the Brand</h2>
        <p>At just 20 years old, Maria decided it was time to share her talent with the world. Thus, Choii Pastries was born, a bakery that stands out not only for its unparalleled flavors but also for its commitment to quality and innovation. Inspired by childhood memories and her grandmother's recipes, Choii developed a menu that blends traditional and contemporary elements, offering a unique experience for each customer.</p>
        <h3>Mission and Vision</h3>
        <p>Choii Pastries' mission is to bring moments of happiness through sweets that delight all the senses. Choii believes that every dessert should be a work of art, made with care and dedication, using only the finest ingredients. Maria's vision is to transform her bakery into a point of reference for food lovers, where every visit is a celebration of flavor and creativity.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs'
};
</script>

<style scoped>
section {
  min-height: 100vh;
  padding: 10px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  margin-top: 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
}

.textBox {
  margin-top: 1%;
  max-width: 50%;
}

.textBox h2, .textBox h3 {
  color: #22223b;
}

.textBox h2 {
  font-size: 2.5em;
  font-weight: 900;
}

.textBox h2 span {
  color: #ef476f;
}

.textBox h3 {
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 20px;
}

.textBox h3 span {
  color: #ef476f;
}

.textBox p {
  color: #4a4e69;
  margin-top: 10px;
}

.cake {
  width: 40%; /* Reduzindo o tamanho das imagens */
  height: auto;
  margin-left: 19px;
}

.small-image {
  max-width: 100%; /* Garante que as imagens não ultrapassem o tamanho máximo */
}

.content2 {
  margin-top: 1%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
}

.cake2 {
  width: 34%; /* Reduzindo o tamanho das imagens */
  height: auto;
  margin-left: 19px;
}

.brown-background {
  background-color: #f4acb7; /* Defina a cor de fundo desejada */
  padding: 20px; /* Adicione padding para separar o conteúdo da borda */
  border-radius: 10px; /* Arredonda as bordas do fundo */
}
</style>
