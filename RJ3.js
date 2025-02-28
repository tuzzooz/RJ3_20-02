//# para elementos que não podem ser modificados por outras classes

class Cliente {
    #cpf;
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = [];
    }
    get cpf() {
        return this.#cpf;
    }
    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }

    getNomeMaiusculo() {
        return this.nome.toUpperCase();
    }

    getNomeMinusculo() {
        return this.nome.toLowerCase();
    }

    //toString para formatar uma saída mais legível dos dados

    toString() {
        return `Nome: ${this.nome}\n${this.endereco}\n${this.telefones.map(t => t.toString()).join('\n')}`;
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    toString() {
        return `ddd: ${this.ddd} numero: ${this.numero}`;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    toString() {
        return `Estado: ${this.estado} cidade: ${this.cidade} rua: ${this.rua} numero: ${this.numero}`;
    }
}

class Empresa {
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.telefones = [];
        this.clientes = [];
    }
    get cnpj() {
        return this.#cnpj;
    }
    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }
    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }
    detalhe() {
        return `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n----------------\n${this.clientes.map(c => c.toString()).join('\n\n')}`;
    }
}

const empresa = new Empresa("ABC LTDA", "Mercado Online", "1234567890001", new Endereco("SP", "São José dos Campos", "Av Brasil", 97));
empresa.adicionarTelefone(new Telefone("43", "43423-0909"));
empresa.adicionarTelefone(new Telefone("51", "42033-4300"));

const clientes = [
    new Cliente("Gustavo", "123.456.789-00", new Endereco("SP", "São José dos Campos", "Esplanada", 123)),
    new Cliente("Gabriel", "987.654.321-00", new Endereco("SP", "São José dos Campos", "Aquarius", 423)),
    new Cliente("Marcelo", "111.222.333-44", new Endereco("SP", "São José dos Campos", "Av São João", 543)),
    new Cliente("Rafael", "555.666.777-88", new Endereco("SP", "São José dos Campos", "Av Andrômeda", 532))
];

clientes[0].adicionarTelefone(new Telefone("99", "9953-233"));
clientes[0].adicionarTelefone(new Telefone("52", "9532-002"));

clientes[1].adicionarTelefone(new Telefone("83", "3463-666"));
clientes[1].adicionarTelefone(new Telefone("43", "4363-622"));

clientes[2].adicionarTelefone(new Telefone("77", "0345-789"));
clientes[2].adicionarTelefone(new Telefone("77", "3456-890"));

clientes[3].adicionarTelefone(new Telefone("66", "3249-423"));
clientes[3].adicionarTelefone(new Telefone("66", "4234-222"));

clientes.forEach(cliente => empresa.adicionarCliente(cliente));

console.log(empresa.detalhe());

//use de 0 a 3 para escolher o nome que quiser em minusculo ou maiusculo

console.log(clientes[2].getNomeMaiusculo()); 
console.log(clientes[3].getNomeMinusculo()); 
