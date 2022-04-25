//
//
//


import { FuncionarioMensalista } from "./funcionario_mensalista";
import { FuncionarioHorista} from "./funcionario_horista";
import { FuncionarioComissionado} from "./funcionario_comissionado";

// Exemplo de Dependencia onde é citado uma classe que está definida em um outro 
// modulo de software.
const funcMensalista = new FuncionarioMensalista ("José", "Sales", 2500, 10, 50);

console.log(funcMensalista.imprimirCheckPagamento());


const funcFuncionarioHorista = new FuncionarioHorista ("João", "Paiva", 50, 160 );
console.log(funcFuncionarioHorista.imprimirCheckPagamento());

const funcFuncionarioComissionado = new FuncionarioComissionado ("Ana", "Barbosa", 1250, 100, 10 );
console.log(funcFuncionarioComissionado.imprimirCheckPagamento());