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
    valor: number;    

    /* Métodos */

    /* Método Construtor */    
    constructor (id : number, sequencial: number, quantidade: number, produto: Produto) {
        this.id = id;
        this.sequencial = sequencial;
        this.quantidade = quantidade;
        this.produto = produto; 
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
        return this.valor;
    }

        /* Métodos Modificadores */     
    setsequencial(sequencial: number): void {
        this.sequencial = sequencial;
    }

    setcodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setvalorUnitario(valorUnitario: number): void {
        this.valorUnitario = valorUnitario;
    } 
    
}
//
//
//

