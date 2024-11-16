const url = "json/champion.json";

// CALL API

async function callAPI(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(response.status);

    const data = await response.json();

    createCardChampion(data);
  } catch (error) {
    console.log(error);
  }
}

const gridContainer = document.querySelector(".grid-container");
function createCardChampion(data) {
  data.forEach((champion) => {
    const card = document.createElement("div");
    card.className = "card-info-champion";

    card.innerHTML = `

    <div class="img-champion">
      <img src="${champion.image}" alt="${champion.alt}" />
    </div>
          
    <div class="description-champion">
      <h3 class="champion-name">${champion.name}</h3>
      <p class="description">
      ${champion.description}
      </p>`;
    gridContainer.append(card);
  });

  // CLICK CARD

  const cardInfoChampion = document.querySelectorAll(".card-info-champion");
  cardInfoChampion.forEach((cardChampion) => {
    cardChampion.addEventListener("click", () => {
      cardChampion.classList.toggle("active-card-champion");
    });
  });
}
callAPI(url);
