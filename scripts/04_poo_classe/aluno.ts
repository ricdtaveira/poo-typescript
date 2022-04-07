//
//
//

// O export será usado para permitir que o código da classe Aluno seja usado por outro arquivo
// TypeScript
export class Aluno {

    // Atributos com visibilidade publica. 
    // Não é necessário explicitar a palavra public
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

    setcpf(cpf: string): void {
        this.cpf = cpf;
    } 

    setDataNascimento(dataNascimento: Date) : void {
        this.dataNascimento = dataNascimento;
    }


}