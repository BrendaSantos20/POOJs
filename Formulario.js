class Formulario {

    #inputNome = document.querySelector('#nome');
    #inputIdade = document.querySelector('#idade');
    #inputCpf = document.querySelector('#cpf');
    #btnLimpar = document.querySelector('#btn-limpar');
    #btnSalvar = document.querySelector('#btn-salvar');
    #tabela;

    nome = '';
    idade = null;
    cpf = '';

    constructor(tabela) {
        this.#tabela = tabela;

        this.#inputNome.addEventListener('input', () => {
            this.nome = this.#inputNome.value;
        });

        this.#inputIdade.addEventListener('input', () => {
            this.idade = +this.#inputIdade.value;
        });

        this.#inputCpf.addEventListener('input', () => {
            this.cpf = this.#inputCpf.value;
        });

        this.#btnLimpar.addEventListener('click', () => {
            this.limpar();
        });

        this.#btnSalvar.addEventListener('click', () => {
            this.salvar()
        });
    }

    limpar() {
        this.#inputNome.value = '';
        this.#inputIdade.value = '';
        this.#inputCpf.value = '';

        this.nome = '';
        this.idade = null;
        this.cpf = '';

    }

    salvar() {
        if (this.formularioInvalido()) {
            alert("Preencha os campos corretamente.")
            return
        }


        this.#tabela.adicionarPessoa(this.nome, this.idade, this.cpf);
        this.limpar();
    }

    formularioInvalido() {
        return !this.nome || this.idade == null || this.idade < 0 || !this.cpf;
    }
}





