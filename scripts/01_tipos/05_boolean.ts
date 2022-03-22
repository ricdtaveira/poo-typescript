//
// 
// 

let aluno: boolean = true;
console.log(aluno);
//
aluno = Boolean(undefined);
console.log(aluno);
//
let senha: string = "123456789";
let senhaCorreta: boolean;

senhaCorreta = (senha.length > 8);
console.log(senhaCorreta);