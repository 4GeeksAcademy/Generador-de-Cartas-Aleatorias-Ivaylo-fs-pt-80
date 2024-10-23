/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const palos = ["♦", "♥", "♠", "♣"];

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const valorAleatorio = getRandomElement(valores);
  const paloAleatorio = getRandomElement(palos);

  const valorElemento = document.querySelector(".valor");
  const paloSuperior = document.querySelector(".palo-superior");
  const paloInferior = document.querySelector(".palo-inferior");

  valorElemento.innerHTML = valorAleatorio;
  paloSuperior.innerHTML = paloAleatorio;
  paloInferior.innerHTML = paloAleatorio;

  if (paloAleatorio === "♦" || paloAleatorio === "♥") {
    paloSuperior.style.color = "red";
    paloInferior.style.color = "red";
    valorElemento.style.color = "red";
  } else {
    paloSuperior.style.color = "black";
    paloInferior.style.color = "black";
    valorElemento.style.color = "black";
  }
};
