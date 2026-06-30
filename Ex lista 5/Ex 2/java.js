const valor = document.querySelector("#valor");
const button = document.querySelector("#btn-inc");
const button2 = document.querySelector("#btn-dec");

let contador = 0;
valor.textContent = contador;

button.addEventListener("click", () => {
    contador++;
    valor.textContent = contador;

    if (contador > 0) {
        button2.disabled = false;
    }
});

button2.addEventListener("click", () => {
    if(contador) {
        contador--;
        valor.textContent = contador;
    }

    if (contador === 0) {
        button2.disabled = true;
    }
});

button2.disabled = true;
