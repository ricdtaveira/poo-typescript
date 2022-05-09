"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaFiscal = void 0;
var NotaFiscal = /** @class */ (function () {
    /* Métodos */
    /* Método Construtor */
    function NotaFiscal(id, codigo, data, cliente) {
        this.id = id;
        this.codigo = codigo;
        this.data = data;
        this.cliente = cliente;
        this.valorNota = 0.0;
        this.items = new Array();
    }
    /* Métodos Acessores */
    NotaFiscal.prototype.getid = function () {
        return this.id;
    };
    NotaFiscal.prototype.getcodigo = function () {
        return this.codigo;
    };
    NotaFiscal.prototype.getdata = function () {
        return this.data;
    };
    /* Métodos Modificadores */
    NotaFiscal.prototype.setcodigo = function (codigo) {
        this.codigo = codigo;
    };
    NotaFiscal.prototype.setdata = function (data) {
        this.data = data;
    };
    NotaFiscal.prototype.adicionarItem = function (item) {
        this.items.push(item);
    };
    NotaFiscal.prototype.calcularValorNotaFiscal = function () {
        var valorCalculado = 0;
        return valorCalculado;
    };
    return NotaFiscal;
}());
exports.NotaFiscal = NotaFiscal;
//# sourceMappingURL=nota_fiscal.js.map