module.exports = class Usuario {
    constructor(nome, email, login, senha) {
        this.nome = nome;
        this.email = email;
        this.login = login;

        this.senha;

        this.cadastrarSenha(senha);
    }

    autenticar(senha) {
        return this.senha == senha;
    }

    cadastrarSenha(senha) {
        this.senha = senha;
    }
}