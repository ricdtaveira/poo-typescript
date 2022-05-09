"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemNotaFiscal = void 0;
var ItemNotaFiscal = /** @class */ (function () {
    /* Métodos */
    /* Método Construtor */
    function ItemNotaFiscal(id, sequencial, quantidade, produto) {
        this.id = id;
        this.sequencial = sequencial;
        this.quantidade = quantidade;
        this.produto = produto;
        this.valorUnitario = valorUnitario;
    }
    /* Métodos Acessores */
    ItemNotaFiscal.prototype.getid = function () {
        return this.id;
    };
    ItemNotaFiscal.prototype.getsequencial = function () {
        return this.sequencial;
    };
    ItemNotaFiscal.prototype.getquantidade = function () {
        return this.quantidade;
    };
    ItemNotaFiscal.prototype.getvalorUnitario = function () {
        return this.valorUnitario;
    };
    /* Métodos Modificadores */
    ItemNotaFiscal.prototype.setsequencial = function (sequencial) {
        this.sequencial = sequencial;
    };
    ItemNotaFiscal.prototype.setvalorUnitario = function (valorUnitario) {
        this.valorUnitario = valorUnitario;
    };
    return ItemNotaFiscal;
}());
exports.ItemNotaFiscal = ItemNotaFiscal;
//
//
//
//# sourceMappingURL=item_nota_fiscal.js.map