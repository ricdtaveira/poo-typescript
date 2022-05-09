//
//
//
//
import {Produto} from "./produto"

export class ItemNotaFiscal {

    /* Atributos */
    id: number;
    sequencial: number; 
    quantidade: number;
    produto : Produto;
    valorUnitario: number;    

    /* Métodos */

    /* Método Construtor */    
    constructor (id : number, 
                 sequencial: number, 
                 quantidade: number, 
                 produto: Produto
                 ) {
        this.id = id;
        this.sequencial = sequencial;
        this.quantidade = quantidade;
        this.produto = produto; 
        this.valorUnitario = valorUnitario;
    }

    /* Métodos Acessores */
    getid(): number {
        return this.id;
    }

    getsequencial(): number {
        return this.sequencial;
    }

    getquantidade(): number {
        return this.quantidade;
    }

    getvalorUnitario(): number {
        return this.valorUnitario;
    }

        /* Métodos Modificadores */     
    setsequencial(sequencial: number): void {
        this.sequencial = sequencial;
    }

    setvalorUnitario(valorUnitario: number): void {
        this.valorUnitario = valorUnitario;
    } 
    
}
//
//
//

