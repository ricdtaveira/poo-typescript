//
//
// 
// 

import {Iveiculo} from "./iveiculo";
export class Jegue implements Iveiculo {
    ligarVeiculo(): string {
        return "Ligou Jegue!";
    }

    desligarVeiculo(): string {
        return "Desligou o Jegue !";
    }
    virarDireita(): string {
        return "Virou Jegue para Direita!";
    }

    virarEsquerda(): string {
        return "Virou o Jegue para a Esquerda!";
    }

    acelerar(): string {
        return "Acelerou o Jegue!";
    }

    freiar(): string {
        return "Freiou o Jegue!";

    }
}
