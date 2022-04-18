"use strict";
// Funcionario é uma classe abstrata que inicia uma hierarquia de Herança.
// Nesse exemplo, todos os empregados tem um primeiro_nome,  ultimo_nome, e um salário. 
// Cada empregado pode calcular o seu salario. 
// Todavia, o mecanismo  para calcular o salário depende do tipo de empregado. (Polimorfismo)
// Assim, cada subtipo deve definir, o modo como calcular o seu salário.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(primeiroNome, ultimoNome, salario) {
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.salario = salario;
    }
    // Método Acessor retorna _primeiroNome
    Funcionario.prototype.getprimeiroNome = function () {
        return this.primeiroNome;
    };
    // Método Acessor retorna _ultimoNome 
    Funcionario.prototype.getultimoNome = function () {
        return this.ultimoNome;
    };
    // Método Acessor retorna _salario 
    Funcionario.prototype.getsalario = function () {
        return this.salario;
    };
    // Método Modificador altera  primeiroNome 
    Funcionario.prototype.setprimeiroNome = function (primeiroNome) {
        this.primeiroNome = primeiroNome;
    };
    // Método Modificador altera  ultimoNome
    Funcionario.prototype.setultimoNome = function (ultimoNome) {
        this.ultimoNome = ultimoNome;
    };
    // Método Modificador altera  salario
    Funcionario.prototype.setsalario = function (salario) {
        this.salario = salario;
    };
    // Método 
    Funcionario.prototype.imprimirCheckPagamento = function () {
        var nomeCompleto = this.ultimoNome + ", " + this.primeiroNome;
        return ("Pagamento= " + nomeCompleto + " R$ " + this.calcularPagamento());
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
//# sourceMappingURL=funcionario.js.map