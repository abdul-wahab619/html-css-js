// buttons selectors

const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const purple = document.querySelector(".purple");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const reset = document.querySelector(".reset");

// body selector

const body = document.querySelector("body");

// event listeners

red.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});

blue.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});

green.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});

yellow.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
});

purple.addEventListener("click", () => {
  body.style.backgroundColor = "purple";
});

orange.addEventListener("click", () => {
  body.style.backgroundColor = "orange";
});

pink.addEventListener("click", () => {
  body.style.backgroundColor = "pink";
});

reset.addEventListener("click", () => {
  body.style.backgroundColor = "white";
});