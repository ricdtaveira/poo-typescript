//
// Parametros Rest é uma coleção de valores no formato de um array com
// elementos variaveis.

function calcularSomaSalarios(...meses: number[]): number {

    return meses.reduce((rendaTotal: number, rendaAtual: number) => rendaTotal + rendaAtual, 0);

}

console.log(calcularSomaSalarios(250, 250, 500, 500, 500));