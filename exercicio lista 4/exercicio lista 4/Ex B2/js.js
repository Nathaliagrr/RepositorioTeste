const foto = document.querySelector("#foto");
foto.setAttribute("src", "https://images.pexels.com/photos/575610/pexels-photo-575610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");

const link = document.querySelector("#link");
link.setAttribute("href", "https://github.com");
link.textContent = "Meu GitHub"
console.log(link.textContent);

const texto = document.querySelector("#campo");
texto.setAttribute("disabled", "");

console.log(foto.getAttribute("src"));

