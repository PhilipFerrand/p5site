// ALL SELECTION ELEMENTS
const title = document.querySelector(".main-title");
const imgPresentation = document.querySelector(".presentation-img");
const textinfoPara = document.querySelectorAll(".text-presentation");
const titleCoachInfo = document.querySelectorAll(".title-coach-info");
const subtitleCoach = document.querySelectorAll(".subtitle-coach");
const textInfoCoach = document.querySelectorAll(".text-info-coach");
const imgCoach = document.querySelectorAll(".coach-container-img");
const boxingGloves = document.querySelector(".glove-img");

// CARD PRICE INFO CLUB
const cardPrice = document.querySelectorAll(".card-info-price");

cardPrice.forEach((cardPrice) => {
  window.addEventListener("scroll", () => {
    handleAnimElement(cardPrice, "anim-card-price", 0.9);
  });
});

textinfoPara.forEach((text) => {
  window.addEventListener("scroll", () => {
    handleAnimElement(text, "active-text-anim", 0.7);
  });
});

// TITLE COACH SECTION
titleCoachInfo.forEach((title) => {
  window.addEventListener("scroll", () => {
    handleAnimElement(title, "active-title-coach", 0.9);
  });
});

// SUBTITLE COACH SECTION
subtitleCoach.forEach((subtitle) => {
  window.addEventListener("scroll", () => {
    handleAnimElement(subtitle, "active-subtitle-coach", 0.8);
  });
});

// TEXT INFO COACH
textInfoCoach.forEach((textInfo) => {
  window.addEventListener("scroll", () => {
    handleAnimElement(textInfo, "active-text-coach", 0.7);
  });
});

// IMAGE COACH
imgCoach.forEach((imgCoach) => {
  window.addEventListener("scroll", () => {
    handleAnimElement(imgCoach, "active-img-coach", 0.8);
  });
});

// ANIM
window.addEventListener("scroll", () => {
  handleAnimElement(title, "active-title-anim", 0.7);
  handleAnimElement(imgPresentation, "active-img", 0.7);
  // handleAnimElement(boxingGloves, "active-anim-gloves", 0.8)
});





// MAIN FUNCTION
function handleAnimElement(elementName, classNameToAdd, heigthElementMesure) {
  const { scrollTop, clientHeight } = document.documentElement;
  const topElement = elementName.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElement).toFixed() - clientHeight * heigthElementMesure) {
    elementName.classList.add(classNameToAdd);
  }
}
