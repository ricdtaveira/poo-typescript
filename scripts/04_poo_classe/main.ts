//
// Instanciar um Objeto da Classe Aluno
//

import {Aluno} from "./aluno";
import {Professor} from "./professor";

const alunoInfo = new Aluno("Alan José", "123456789-11", new Date("2022-12-18"));

console.log("== Mostrar atributos do objeto alunoInfo ==");
console.log(alunoInfo.getnomeDoAluno());
console.log(alunoInfo.getcpf());
console.log(alunoInfo.getdataNascimento());

// Consegue acessar diretamente o atributo
// Fere a regra sugerida pelo encapsulamentp
// Isto é os atributos de um objeto devem ser privados
alunoInfo.nomeDoAluno = "Nome Alterado";  
console.log(alunoInfo.getnomeDoAluno());

const profInfo = new Professor("José Edmar ", 'edmar@ifce.edu.br', new Date("1956-05-10"));

console.log("== Mostrar atributos do objeto profInfo ==");
console.log(profInfo.getNome());
console.log(profInfo.getEmail());
console.log(profInfo.getDataNascimento());

// profInfo.nome = "José Pereira";

profInfo.setnome("Edmar Pereira");
console.log(profInfo.getNome());
