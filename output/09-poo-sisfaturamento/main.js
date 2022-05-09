"use strict";
//
//
//
//
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./cliente");
var tipo_cliente_1 = require("./tipo_cliente");
var produto_1 = require("./produto");
var nota_fiscal_1 = require("./nota_fiscal");
var item_nota_fiscal_1 = require("./item_nota_fiscal");
//Criar um Cliente 
var cliente = new cliente_1.Cliente(1, "José Maria da Silva", 100, "200.345.987-11", tipo_cliente_1.TipoCliente.PESSOA_FISICA);
console.log("=========================");
console.log(cliente);
console.log("=========================");
console.log("Id=" + cliente.getid());
console.log("Nome=" + cliente.getnome());
console.log("Codigo=" + cliente.getcodigo());
console.log("CnpjCpf=" + cliente.getcnpjcpf());
console.log("TipoCliente=" + cliente.gettipo());
var p1 = new produto_1.Produto(1, 150, "Arroz Tio Joao", 8.00);
var p2 = new produto_1.Produto(2, 200, "Feijão Janjão", 7.00);
var p3 = new produto_1.Produto(3, 300, "Farinha da Boa", 5.50);
var nf = new nota_fiscal_1.NotaFiscal(1, 201, cliente);
var itnf1 = new item_nota_fiscal_1.ItemNotaFiscal(1, 1, 10, p1, 10);
var itnf2 = new item_nota_fiscal_1.ItemNotaFiscal(2, 2, 10, p2);
//# sourceMappingURL=main.js.map