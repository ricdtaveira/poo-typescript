//
//
//
//

import {Iveiculo} from "./iveiculo";

export class Manobrista {
    estaciona(veiculo: Iveiculo) {
        veiculo.ligarVeiculo();
        veiculo.virarDireita();
        veiculo.virarEsquerda();
        veiculo.freiar();
        veiculo.desligarVeiculo();
    }
}