//
//
// 
// 

import {Iveiculo} from "./iveiculo";

export class Aviao implements Iveiculo {
    ligarVeiculo(): string {
        return "Ligou Avião!";
    }

    desligarVeiculo(): string {
        return "Desligou o Avião!";
    }
    virarDireita(): string {
        return "Virou Avião para Direita!";
    }

    virarEsquerda(): string {
        return "Virou o Avião para a Esquerda!";
    }

    acelerar(): string {
        return "Acelerou o Avião!";
    }

    freiar(): string {
        return "Freiou o Avião!";

    }
}

