//
//
//
//

import {Cliente} from "./cliente"
import {TipoCliente} from "./tipo_cliente"
import {Produto} from "./produto"
import {NotaFiscal} from "./nota_fiscal"
import {ItemNotaFiscal} from "./item_nota_fiscal"

//Criar um Cliente 

let cliente = new Cliente(1, "José Maria da Silva", 100, "200.345.987-11",TipoCliente.PESSOA_FISICA);
console.log("=========================");
console.log(cliente);
console.log("=========================");
console.log("Id=" + cliente.getid());
console.log("Nome=" + cliente.getnome());
console.log("Codigo=" + cliente.getcodigo());
console.log("CnpjCpf=" + cliente.getcnpjcpf());
console.log("TipoCliente=" + cliente.gettipo());

let p1 = new Produto(1, 150, "Arroz Tio Joao", 8.00);
let p2 = new Produto(2, 200,"Feijão Janjão", 7.00);
let p3 = new Produto(3, 300, "Farinha da Boa", 5.50);

let nf = new NotaFiscal(1, 201, cliente);

let itnf1 = new ItemNotaFiscal(1, 1, 10, p1, 10);
let itnf2 = new ItemNotaFiscal(2, 2, 10, p2)