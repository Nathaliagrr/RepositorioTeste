const container = document.querySelector("#container");

const h2 = container.firstElementChild;
console.log(h2.textContent);

const p = h2.nextElementSibling;
console.log(p.textContent);

const span = p.nextElementSibling;
const voltacontainer = span.parentElement;
console.log(voltacontainer.textContent);