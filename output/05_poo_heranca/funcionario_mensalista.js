"use strict";
// Módulo FuncionarioMensalista.
// Classe FuncionarioMensalista herda Funcionario.
// É uma SubClasse de Funcionario.
// FuncionarioMensalista também demonstra programação por diferença.
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
exports.FuncionarioMensalista = void 0;
var funcionario_1 = require("./funcionario");
var FuncionarioMensalista = /** @class */ (function (_super) {
    __extends(FuncionarioMensalista, _super);
    function FuncionarioMensalista(primeiroNome, ultimoNome, salario, faltas, valorFalta) {
        var _this = _super.call(this, primeiroNome, ultimoNome, salario) || this;
        _this.faltas = 0;
        _this.valorFalta = 0.0;
        _this.faltas = faltas;
        _this.valorFalta = valorFalta;
        return _this;
    }
    FuncionarioMensalista.prototype.calcularPagamento = function () {
        return (this.getsalario() - (this.faltas * this.valorFalta));
    };
    return FuncionarioMensalista;
}(funcionario_1.Funcionario));
exports.FuncionarioMensalista = FuncionarioMensalista;
//# sourceMappingURL=funcionario_mensalista.js.map