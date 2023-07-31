/*1. Verifiying if you're a new folk entering here to show the entrance page*/
let startPage = document.getElementsByClassName("start")[0];
let mainPage = document.getElementsByClassName("main")[0];
let slideEl = document.getElementsByClassName("slide");

window.onload = function(){
  if (localStorage.getItem("new")){
    startPage.remove();
    mainPage.classList.add("active");
  }
  slideEl[0].classList.add("active");
}

//1.1. Button "No" trick
function no(){
  document.getElementsByClassName("warning-buttons")[1].classList.add("disabled");
  document.getElementsByClassName("warning-buttons")[0].innerText = "JUST YES :3";
}

//1.2. Button "Yes" magic. It makes a fake dynamic job to the static page.
function yes(){
  localStorage.setItem("new",false);
  mainPage.classList.add("active");
  startPage.remove()
}