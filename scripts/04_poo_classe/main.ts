//
// Instanciar um Objeto da Classe Aluno
//

const alunoInfo = new Aluno("Alan José", "123456789-11", new Date("2022-12-18"));

console.log(alunoInfo.getnomeDoAluno());
console.log(alunoInfo.getcpf());
console.log(alunoInfo.getdataNascimento());

const profInfo = new Professor("Jo´se Edmar", 'edmar@ifce.edu.br', new Date("1956-05-10"));

console.log(profInfo.getNome());
console.log(profInfo.getEmail());
console.log(profInfo.getDataNascimento());