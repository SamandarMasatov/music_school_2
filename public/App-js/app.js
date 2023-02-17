;

// ------------- Swipper 2 -------------

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 300,
  loop: true,
  crossFade: true,
  autoplay: {
    delay: 5000,
  },
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});
// ----------------------------------------

// -----------------------------------------------------------------------------------------------------------
const batafsil = document.querySelector(".team_link");
const closeBatafsil = document.querySelector(".close_batafsil");

// -----------------------
batafsil.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".all_card_item").style.display = "block";
  batafsil.style.display = "none";
});

closeBatafsil.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".all_card_item").style.display = "none";
  batafsil.style.display = "block";
});

// -----------------------------------------------------------------------------------------
