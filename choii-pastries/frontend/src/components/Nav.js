class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        <!-- Side navigation -->
        <div class="sidenav">
        <div class="imagehere" style="background-image: url('https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image-768x576.jpg')"></div><br>
        <h2>Maria Eduarda<br>Moura Eguchi</h2>
          <a href="HomeView.vue">Home</a>
          <a href="menu.html">Menu</a>
          <a href="worldtemplate.html">Projects</a>
          <a href="worldtemplate.html">Game OCs</a>
          <a href="worldtemplate.html">Fandom OCs</a>
          <a href="worldtemplate.html">Tabletop Game</a>
          <a href="worldtemplate.html">Misc Characters</a>
          <a href="worldtemplate.html">Change These</a>
        </div>
        
            `;
          }
        }
        
        customElements.define('header-component', Header);