"use strict";
//
// Parametros Rest é uma coleção de valores no formato de um array com
// elementos variaveis.
function calcularSomaSalarios(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
}
console.log(calcularSomaSalarios(250, 250, 500, 500, 500));
//# sourceMappingURL=03_parametros_rest.js.map