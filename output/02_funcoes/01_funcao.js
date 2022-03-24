"use strict";
//
//
//
// Parametros são definidos com a notaçãode Union Type
function mostrarMensagem(texto) {
    console.log(texto);
    return true;
}
console.log(mostrarMensagem("Ifce"));
console.log(mostrarMensagem(100));
console.log(mostrarMensagem({ url: "https://www.ifce.edu.br" }));
// definição de uma variavel que recebe uma função
// O tipo retornado pela função é um union type
// Poderetornar um numero, uma data ou um objeto 
const show = (codigo) => {
    // return new Date(); // retorna um Date
    // return codigo;     // reorna um numero
    return { linguagem: "TypeScript" }; // retorna um objeto no formato JSON
    // Mais sobre JSON ver a página
    // https://www.w3schools.com/js/js_json_intro.asp
};
console.log(show(100));
//# sourceMappingURL=01_funcao.js.map