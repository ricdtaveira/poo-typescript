"use strict";
//
// A Classe Professor vai ser criadacom atributos privados.
// Modificadores de acesso definem a forma da visibilidade de um
// atributo ou de um método.
// O Encapsulamento é um conceito de POO que utiliza o rcurso dos modificadores de acesso.
// Os modificadores de acesso são:
// Public : é o modificador padrão. Tudoo que for declarado sem um modificador de acesso 
//          automaticamente se torna publico.
// Private: esse modificador não permite que um atributo ou método seja acessado de fora
//          da classe que odefine. 
// Protected: esse modificador é parecido com o private. Porém uma outra classe pode acessar 
//            atributos ou métodos protected se a mesma pertencer a uma hierarquia de Herança.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
// export será usado para permitir que um outro fonte TypeScript acesse o o código da 
// Classe Professor
var Professor = /** @class */ (function () {
    function Professor(nome, email, dataNascimento) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }
    Professor.prototype.getNome = function () {
        return this.nome;
    };
    Professor.prototype.getEmail = function () {
        return this.email;
    };
    Professor.prototype.getDataNascimento = function () {
        return this.dataNascimento;
    };
    Professor.prototype.setEmail = function (email) {
        this.email = email;
    };
    Professor.prototype.setnome = function (nome) {
        this.nome = nome;
    };
    Professor.prototype.setDataNascimento = function (dataNascimento) {
        this.dataNascimento = dataNascimento;
    };
    return Professor;
}());
exports.Professor = Professor;
//# sourceMappingURL=professor.js.map