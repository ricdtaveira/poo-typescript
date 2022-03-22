//
// Um Array é um conjunto de valores que podeem ser ou não do mesmo tipo. 
// 

const livrosCategorias: (string | number)[] = ["Literatura", "Romance", "Física", "Programação"];

// livrosCategorias.push("Compiladores");
// livrosCategorias.push(200);

console.log(livrosCategorias);

const filmesAnos: Array<number | string> = [];

filmesAnos.push("Relação Anos");

for (let ano = 2010; ano <= new Date().getFullYear(); ano++) {

    filmesAnos.push(ano);

}

console.log(filmesAnos);