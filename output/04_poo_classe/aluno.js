"use strict";
//
//
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
// O export será usado para permitir que o código da classe Aluno seja usado por outro arquivo
// TypeScript
var Aluno = /** @class */ (function () {
    /* Métodos */
    /* Método Construtor */
    /* Instancia um objeto da Classe aluno na Memória */
    function Aluno(nomeDoAluno, cpf, dataNascimento) {
        this.nomeDoAluno = nomeDoAluno;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }
    /* Métodos Acessores */
    /* Metodos Acessores possuem o prefixo  get.
    /* Retorna o valor de um atributo */
    /* Ou retorna um calculo */
    Aluno.prototype.getnomeDoAluno = function () {
        return this.nomeDoAluno;
    };
    Aluno.prototype.getcpf = function () {
        return this.cpf;
    };
    Aluno.prototype.getdataNascimento = function () {
        return this.dataNascimento;
    };
    /* Métodos Modificadores */
    /* Metodos Modificadores possuem o prefixo  set.
    /* São chamados para modificar os atributos de um objeto */
    Aluno.prototype.setnomedoAluno = function (nomeDoAluno) {
        this.nomeDoAluno = nomeDoAluno;
    };
    Aluno.prototype.setcpf = function (cpf) {
        this.cpf = cpf;
    };
    Aluno.prototype.setDataNascimento = function (dataNascimento) {
        this.dataNascimento = dataNascimento;
    };
    return Aluno;
}());
exports.Aluno = Aluno;
//# sourceMappingURL=aluno.js.map