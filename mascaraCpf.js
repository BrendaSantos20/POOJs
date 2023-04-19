function adicionarMascaraCpf(elementInput) {
    elementInput.addEventListener("keydown", (e) => {
        var v = e.target.value.replace(/\D/g, "");

        v = v.replace(/(\d{3})(\d)/, "$1.$2");

        v = v.replace(/(\d{3})(\d)/, "$1.$2");

        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        e.target.value = v.slice(0, 13);
    });

}
