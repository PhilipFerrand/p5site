const navContainer = document.querySelector(".nav");

function createMenu() {
  const nav = document.createElement("nav");

  nav.innerHTML = `
  
  <div class="left">
    <a href="../index.html"><img src="../public/img/logo.png" alt="" /></a>
  </div>
  <div class="right">
    <a href="../pages/club.html" aria-label="Club page">Le club</a>
    <a href="#" aria-label="Information sur le club">Informations</a>
    <a href="#" aria-label="Les photos du club">Diaporama</a>
    <a href="#" aria-label="Nous contacter">Contact</a>
    <a href="#" aria-label="Formulaire d'inscription">Inscription</a>
  </div>

  <div class="hamburger-icone">
    <i class="bx bx-menu"></i>
  </div>
  `;

  navContainer.append(nav);

  const menu = document.querySelector(".right");
  const iconeHamburger = document.querySelector(".hamburger-icone");

  iconeHamburger.addEventListener("click", activeMenu);

  function activeMenu() {
    menu.classList.toggle("active-menu");
  }
}

createMenu();
