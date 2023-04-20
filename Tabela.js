class Tabela {
    #tableBodyRef = document.querySelector("#tbody");

    pessoas = [];

    constructor() {
        const pessoa1 = new Pessoa();
        pessoa1.nome = 'Brenda';
        pessoa1.idade = 21;
        pessoa1.cpf = '507.314.798-74';
        pessoa1.id = 1;

        const pessoa2 = new Pessoa();
        pessoa2.nome = 'Juninho Portugal';
        pessoa2.idade = 65;
        pessoa2.cpf = '758.695.758-75';
        pessoa2.id = 2;

        this.pessoas.push(pessoa1, pessoa2);
        this.renderizarTabela();
    }

    renderizarTabela() {
        this.#tableBodyRef.innerHTML = '';

        this.pessoas.forEach((pessoa) => {
            this.#tableBodyRef.innerHTML += ` 
            <tr>
                <td class="center">${pessoa.nome}</td>
                <td class="center">${pessoa.idade}</td>
                <td class="center">${pessoa.cpf}</td>
            </tr>
            `
        })
    }

    adicionarPessoa(nome, idade, cpf) {
        const pessoa = new Pessoa();
        pessoa.nome = nome;
        pessoa.idade = idade;
        pessoa.cpf = cpf;
        pessoa.id = this.pessoas[this.pessoas.length - 1].id + 1;

        this.pessoas.push(pessoa);
        this.renderizarTabela();
    }
}

