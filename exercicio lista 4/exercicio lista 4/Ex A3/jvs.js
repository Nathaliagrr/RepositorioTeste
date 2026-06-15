const caixa = document.querySelector("#caixa");
caixa.classList.add("destaque");

const alerta = document.querySelector("#alerta");
alerta.classList.add("oculto");

const card = document.querySelector("#card");
card.classList.add("erro");

console.log(caixa.classList.contains("destaque"));
console.log(alerta.classList.contains("oculto"));
console.log(card.classList.contains("erro"));
