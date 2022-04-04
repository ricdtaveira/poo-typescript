//
//
//

class Aluno {
    /* Atributos */
    nomeDoAluno: string;
    cpf: string;
    dataNascimento: Date;

    /* Métodos */

    /* Método Construtor */
    /* Instancia um objeto da Classe aluno na Memória */
    constructor (nomeDoAluno: string, cpf: string, dataNascimento:Date) {
        this.nomeDoAluno = nomeDoAluno;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    /* Métodos Acessores */
    /* Metodos Acessores possuem o prefixo  get. 
    /* Retorna o valor de um atributo */
    /* Ou retorna um calculo */

    getnomeDoAluno(): string {
        return this.nomeDoAluno;
    }

    getcpf(): string {
        return this.cpf;
    }

    getdataNascimento(): Date {
        return this.dataNascimento;
    }


    /* Métodos Modificadores */
    /* Metodos Modificadores possuem o prefixo  set. 
    /* São chamados para modificar os atributos de um objeto */
   
    setnomedoAluno(nomeDoAluno: string): void {
        this.nomeDoAluno = nomeDoAluno;
    }


}