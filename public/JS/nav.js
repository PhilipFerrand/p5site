const body = document.querySelector("body");

function createNavBar() {
  const nav = document.createElement("nav");
  nav.innerHTML = ` 
  <div class="left">
    <a href="./"><img src="./public/img/logo.png" alt="Logo" /></a>
  </div>
  <div class="right">
    <a href="./club.html" aria-label="Club page">Le club</a>
    <a href="#" aria-label="Information sur le club">Informations</a>
    <a href="#" aria-label="Les photos du club">Diaporama</a>
    <a href="#" aria-label="Nous contacter">Contact</a>
    <a href="#" aria-label="Formulaire d'inscription">Inscription</a>
  </div>

  <div class="hamburger-icone">
    <i class="bx bx-menu"></i>
  </div>`;

  body.prepend(nav);

  const hamburgerIcone = document.querySelector(".hamburger-icone");
  const menu = document.querySelector(".right");

  hamburgerIcone.addEventListener("click", activeMenu);

  function activeMenu() {
    menu.classList.toggle("active-menu");
  }
}

createNavBar();
