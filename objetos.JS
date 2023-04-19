class Pessoa {

    id = 1;
    arrayPessoas = [];

    salvar() {
        let pessoa = this.lerDados();

        if (this.validaCampos(pessoa)) {
            this.adicionar(pessoa);

        }
        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = '';
        for (let i = 0; i < this.arrayPessoas.length; i++) {
            let tr = tbody.insertRow();


            let td_nome = tr.insertCell()
            let td_idade = tr.insertCell()
            let td_cpf = tr.insertCell()

            td_nome.innerText = this.arrayPessoas[i].nome;
            td_idade.innerText = this.arrayPessoas[i].idade;
            td_cpf.innerText = this.arrayPessoas[i].cpf;

            td_nome.classList.add('center');
            td_idade.classList.add('center');
            td_cpf.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'images/editar-texto.png';

            let imgCancel = document.createElement('img')
            imgCancel.src = 'images/lixeira-de-reciclagem.png';
            imgCancel.setAttribute("onclick", "pessoa.deletar('" + this.arrayPessoas[i].nome + "')");

            imgEdit.classList.add('img-list')
            imgCancel.classList.add('img-cancel')
            td_cpf.appendChild(imgEdit)
            td_cpf.appendChild(imgCancel)

            console.log(this.arrayPessoas);

        }
    }

    adicionar(pessoa) {
        this.arrayPessoas.push(pessoa);
        this.id++;
    }

    lerDados() {
        let pessoa = {}
        pessoa.nome = document.getElementById("nome").value;
        pessoa.idade = document.getElementById("idade").value;
        pessoa.cpf = document.getElementById("cpf").value;

        return pessoa;
    }

    validaCampos(pessoa) {
        let mensagem = '';

        if (pessoa.nome == '' && pessoa.idade == '' && pessoa.cpf == '') {
            alert('Informe os dados');
            return false;
        }

        if (pessoa.nome == '') {
            mensagem += 'Informe o nome \n';
        }

        if (pessoa.idade == '') {
            mensagem += 'Informe a idade \n';
        }

        if (pessoa.cpf == '') {
            mensagem += 'Informe o CPF';
        }

        if (mensagem != '') {
            alert(mensagem);
            return false
        }

        return true;


    }

    cancelar() {
        document.getElementById("nome").value = '';
        this.idade = document.getElementById("idade").value = '';
        this.cpf = document.getElementById("cpf").value = '';
    }

    deletar(nome) {
        let tbody = document.getElementById('tbody');

        for (let i = 0; i < this.arrayPessoas.length; i++) {
            if (this.arrayPessoas[i].nome == nome) {
                this.arrayPessoas.splice(i, 1);
                tbody.deleteRow();
            }
        }

    }
}

adicionarMascaraCpf(document.getElementById("cpf"))
adicionarMascaraIdade(document.getElementById("idade"))

const pessoa = new Pessoa();