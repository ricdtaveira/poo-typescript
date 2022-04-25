//
//
//

import { Funcionario } from "./funcionario";
export class FuncionarioHorista extends Funcionario {

    protected horasTrabalhadas : number= 0;
    
    constructor (primeiroNome: string, 
                 ultimoNome: string, 
                 salario:number, 
                 horasTrabalhadas:number) {
        super(primeiroNome, ultimoNome, salario);
        this.horasTrabalhadas = horasTrabalhadas; 
    }

    calcularPagamento(): number {
        return (this.salario - (this.faltas * this.valorFalta));
    }

    
    
}