const itens = document.querySelectorAll(".item");

itens.forEach((item, indice) => {
    console.log((indice + 1) + ": " + item.textContent);

    if (indice === 2) {
        item.classList.add("destaque");
    };
});

