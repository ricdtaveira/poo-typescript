"use strict";
//
//
//
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manobrista = void 0;
var Manobrista = /** @class */ (function () {
    function Manobrista() {
    }
    Manobrista.prototype.estaciona = function (veiculo) {
        veiculo.ligarVeiculo();
        veiculo.virarDireita();
        veiculo.virarEsquerda();
        veiculo.freiar();
        veiculo.desligarVeiculo();
    };
    return Manobrista;
}());
exports.Manobrista = Manobrista;
//# sourceMappingURL=manobrista.js.map