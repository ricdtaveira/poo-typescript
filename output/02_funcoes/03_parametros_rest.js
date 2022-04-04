"use strict";
//
// Parametros Rest é uma coleção de valores no formato de um array com
// elementos variaveis.
function calcularSomaSalarios() {
    var meses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        meses[_i] = arguments[_i];
    }
    return meses.reduce(function (rendaTotal, rendaAtual) { return rendaTotal + rendaAtual; }, 0);
}
console.log(calcularSomaSalarios(250, 250, 500, 500, 500));
//# sourceMappingURL=03_parametros_rest.js.map