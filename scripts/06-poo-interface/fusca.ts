//
//
//
//

import {Iveiculo} from "./iveiculo";

export class Fusca implements Iveiculo {

    ligarVeiculo(): string {
        return "Ligou Fusca !";
    }

    desligarVeiculo(): string {
        return "Desligou o Fusca !";
    }

    virarDireita(): string {
        return "Virou Fusca para Direita!";
    }

    virarEsquerda(): string {
        return "Virou o Fusca para a Esquerda!";
    }

    acelerar(): string {
        return "Acelerou o Fusca!";
    }

    freiar(): string {
        return "Freiou o Fusca!";

    }
}
