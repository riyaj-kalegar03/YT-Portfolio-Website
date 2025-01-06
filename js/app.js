$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });

  let hamberger = document.querySelector(".hamberger");
  let times = document.querySelector(".times");
  let mobileNav = document.querySelector(".mobile-nav");
  let display_ham = document.querySelector(".ham-img");

  hamberger.addEventListener("click", function () {
    mobileNav.classList.add("open");
    display_ham.classList.add("display-ham");
  });

  times.addEventListener("click", function () {
    mobileNav.classList.remove("open");
    display_ham.classList.remove("display-ham");
  });
});

let header = document.querySelector("header");

setTimeout(() => {
  header.classList.add("clip-path");
}, 2000);

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#3dcfd3",
  "#3dcfd3",
  "#3dcfd3",
  "#3dcfd3",
  "#3dcfd3",
  "#3dcfd3",
  "#3dcfd3",
  "#3dcfd3",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
