"use strict";
//
//
//
Object.defineProperty(exports, "__esModule", { value: true });
var funcionario_mensalista_1 = require("./funcionario_mensalista");
var funcionario_horista_1 = require("./funcionario_horista");
var funcionario_comissionado_1 = require("./funcionario_comissionado");
// Exemplo de Dependencia onde é citado uma classe que está definida em um outro 
// modulo de software.
var funcMensalista = new funcionario_mensalista_1.FuncionarioMensalista("José", "Sales", 2500, 10, 50);
console.log(funcMensalista.imprimirCheckPagamento());
var funcFuncionarioHorista = new funcionario_horista_1.FuncionarioHorista("João", "Paiva", 50, 160);
console.log(funcFuncionarioHorista.imprimirCheckPagamento());
var funcFuncionarioComissionado = new funcionario_comissionado_1.FuncionarioComissionado("Ana", "Barbosa", 1250, 100, 10);
console.log(funcFuncionarioComissionado.imprimirCheckPagamento());
//# sourceMappingURL=main.js.map