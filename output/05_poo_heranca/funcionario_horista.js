"use strict";
//
//
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
exports.FuncionarioHorista = void 0;
var funcionario_1 = require("./funcionario");
var FuncionarioHorista = /** @class */ (function (_super) {
    __extends(FuncionarioHorista, _super);
    function FuncionarioHorista(primeiroNome, ultimoNome, salario, horasTrabalhadas) {
        var _this = _super.call(this, primeiroNome, ultimoNome, salario) || this;
        _this.horasTrabalhadas = 0;
        _this.horasTrabalhadas = horasTrabalhadas;
        return _this;
    }
    FuncionarioHorista.prototype.calcularPagamento = function () {
        return (this.salario * this.horasTrabalhadas);
    };
    return FuncionarioHorista;
}(funcionario_1.Funcionario));
exports.FuncionarioHorista = FuncionarioHorista;
//# sourceMappingURL=funcionario_horista.js.map