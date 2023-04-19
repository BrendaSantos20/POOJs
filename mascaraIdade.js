function adicionarMascaraIdade(elementInput) {
    elementInput.addEventListener("keydown", (e) => {
        var v = e.target.value.replace(/\D/g, "");

        e.target.value = v.slice(0, 2);
    });



} 