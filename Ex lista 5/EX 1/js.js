const mensagem = document.querySelector("#mensagem");
const button = document.querySelector("#btn");

let estado = false;

button.addEventListener("click", () => {
    if (estado){ 
        mensagem.textContent = "Clique novamente.";
    } else {
    mensagem.textContent = "Botão clicado!"
    }

    estado = !estado;

});