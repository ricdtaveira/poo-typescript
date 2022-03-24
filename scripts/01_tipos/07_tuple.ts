//
//  Tupla é uma um tipo que consiste de elementos que são componentes de uma estrutura
//  de variaveis tipadas.
//

// Tupla Professor (Nome, Ano Ingresso, Disciplina) 
let professor: [string, number, string]; 

professor = ["Ricardo Taveira", 1991, "Sistemas Operacionais"];

console.log(typeof professor);

let diasDaSemana: [string, string, string, string, string, string, string];

diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

console.log(professor[0]);