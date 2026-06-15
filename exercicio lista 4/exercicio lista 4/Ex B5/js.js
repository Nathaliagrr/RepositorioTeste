const item1 = document.querySelector("#item-1");
const item2 = document.querySelector("#item-2");
const item3 = document.querySelector("#item-3");
const novoElemento = document.createElement("li");
const lista = document.querySelector("#lista");
const novoItem1 = document.createElement("li");

item2.remove();

lista.insertBefore(novoElemento, item3);
lista.replaceChild(novoItem1, item1);
novoElemento.textContent = "Item inserido via JS";
novoItem1.textContent = "Item substituido";


console.log(lista.innerHTML);