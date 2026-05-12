// =======================
// JOIN BUTTON ALERT
// =======================

const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", () => {

  joinBtn.innerHTML = "WELCOME ❤️";

  setTimeout(() => {

    alert(
      "We are excited to worship with you this Sunday!"
    );

  }, 500);

});


// =======================
// MOBILE MENU
// =======================

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("active");

  // CHANGE ICON

  if(nav.classList.contains("active")){

    menuBtn.classList.remove("fa-bars");
    menuBtn.classList.add("fa-xmark");

  }

  else{

    menuBtn.classList.remove("fa-xmark");
    menuBtn.classList.add("fa-bars");

  }

});


// =======================
// SCROLL REVEAL
// =======================

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener(
  "scroll",
  revealSections
);

function revealSections(){

  reveals.forEach((element) => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    element.getBoundingClientRect().top;

    const revealPoint = 100;

    if(
      revealTop <
      windowHeight - revealPoint
    ){

      element.classList.add("active");

    }

  });

}


// =======================
// PARALLAX EFFECT
// =======================

window.addEventListener("scroll", () => {

  const hero =
  document.querySelector(".hero");

  let offset =
  window.pageYOffset;

  hero.style.backgroundPositionY =
  offset * 0.5 + "px";

});


// =======================
// MOUSE LIGHT EFFECT
// =======================

document.addEventListener(
  "mousemove",
  (e) => {

    const x = e.clientX;
    const y = e.clientY;

    document.body.style.background =
    `radial-gradient(circle at ${x}px ${y}px,
    rgba(255,215,0,0.08),
    #f4f4f4 40%)`;

});


// =======================
// AUTO REVEAL ON LOAD
// =======================

window.onload = () => {

  revealSections();

};