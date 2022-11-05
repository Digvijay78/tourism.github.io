"use strict";

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

// navToggleBtn.addEventListener("click", function () {
//   this.classList.toggle("active");
//   header.classList.toggle("active");
// });

$("[data-nav-toggle-btn]").click(function () {
  $(this).toggleClass("active");
  $("[data-header]").toggleClass("active");
});

/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let btnclose = document.querySelector(".close-modal");
let btnopen = document.querySelector(".btn-primary");

// btnopen.addEventListener('click',function(){
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// })

// btnclose.addEventListener('click',function(){
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
//   console.log("button clicked")
// })

$(".close-modal").click(function () {
  $(".modal").addClass("hidden");
  $(".overlay").addClass("hidden");
});

$(".btn-primary").click(function () {
  $(".modal").removeClass("hidden");
  $(".overlay").removeClass("hidden");
});
