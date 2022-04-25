// Módulo FuncionarioMensalista.
// Classe FuncionarioMensalista herda Funcionario.
// É uma SubClasse de Funcionario.
// FuncionarioMensalista também demonstra programação por diferença.
//


import { Funcionario } from "./funcionario";
export class FuncionarioMensalista extends Funcionario {

    protected faltas : number= 0;
    protected valorFalta : number= 0.0;

    constructor (primeiroNome: string, 
                 ultimoNome: string, 
                 salario:number, 
                 faltas:number, 
                 valorFalta:number) {
        super(primeiroNome, ultimoNome, salario);
        this.faltas = faltas; 
        this.valorFalta=valorFalta; 
    }

    calcularPagamento(): number {
        return (this.salario - (this.faltas * this.valorFalta));
    }

    
    
}