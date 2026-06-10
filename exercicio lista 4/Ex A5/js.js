const lista = document.querySelector("#lista");

const item1 = document.createElement("li");
const item2 = document.createElement("li");
const item3 = document.createElement("li");

item1.textContent = "C++";
item2.textContent = "C#";
item3.textContent = "HTML, CSS e JavaScript";

lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(item3);