//
// Módulo FuncionarioComissionado
// Classe EmpregadoComissionado demonstra herança de atributos e métodos de Empregado.
// EmpregadoComissionado também demonstra programação por diferença. Ou seja, a classe
// filha herda de uma classe mãe(atributos e métodos) e adiciona apenas o código que
// a torna diferente da classe mãe.
//

import { Funcionario } from "./funcionario";

export class FuncionarioComissionado extends Funcionario {

    protected comissao : number= 0;
    protected unidadesVendidas : number = 0;

    constructor (primeiroNome: string, 
        ultimoNome: string, 
        salario:number, 
        comissao:number,
        unidadesVendidas:number) {
        super(primeiroNome, ultimoNome, salario);
        this.comissao = comissao;
        this.unidadesVendidas = unidadesVendidas;
    }

    calcularPagamento(): number {
        return (this.salario + (this.comissao * this.unidadesVendidas))
    } 
    
    adicionarVendas(unidades: number): void {
        this.unidadesVendidas += unidades
    }
        
    iniciarVendas(): void {
        this.unidadesVendidas = 0
    }




    
}