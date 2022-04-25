"use strict";
//
// Módulo FuncionarioComissionado
// Classe EmpregadoComissionado demonstra herança de atributos e métodos de Empregado.
// EmpregadoComissionado também demonstra programação por diferença. Ou seja, a classe
// filha herda de uma classe mãe(atributos e métodos) e adiciona apenas o código que
// a torna diferente da classe mãe.
//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioComissionado = void 0;
var funcionario_1 = require("./funcionario");
var FuncionarioComissionado = /** @class */ (function (_super) {
    __extends(FuncionarioComissionado, _super);
    function FuncionarioComissionado(primeiroNome, ultimoNome, salario, comissao, unidadesVendidas) {
        var _this = _super.call(this, primeiroNome, ultimoNome, salario) || this;
        _this.comissao = 0;
        _this.unidadesVendidas = 0;
        _this.comissao = comissao;
        _this.unidadesVendidas = unidadesVendidas;
        return _this;
    }
    FuncionarioComissionado.prototype.calcularPagamento = function () {
        return (this.salario + (this.comissao * this.unidadesVendidas));
    };
    FuncionarioComissionado.prototype.adicionarVendas = function (unidades) {
        this.unidadesVendidas += unidades;
    };
    FuncionarioComissionado.prototype.iniciarVendas = function () {
        this.unidadesVendidas = 0;
    };
    return FuncionarioComissionado;
}(funcionario_1.Funcionario));
exports.FuncionarioComissionado = FuncionarioComissionado;
//# sourceMappingURL=funcionario_comissionado.js.map