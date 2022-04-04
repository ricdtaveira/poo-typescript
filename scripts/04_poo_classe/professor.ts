//
// A Classe Professor vai ser criadacom atributos privados.
// Modificadores de acesso definem a forma da visibilidade de um
// atributo ou de um método.
// O Encapsulamento é um conceito de POO que utiliza o rcurso dos modificadores de acesso.
// Os modificadores de acesso são:
// Public : é o modificador padrão. Tudoo que for declarado sem um modificador de acesso 
//          automaticamente se torna publico.
// Private: esse modificador não permite que um atributo ou método seja acessado de fora
//          da classe que odefine. 
// Protected: esse modificador é parecido com o private. Porém uma outra classe pode acessar 
//            atributos ou métodos protected se a mesma pertencer a uma hierarquia de Herança.

class Professor {

    private nome: string;
    private email: string;
    private dataNascimento: Date;

    constructor (nome: string, email: string, dataNascimento: Date) {
        this.nome = nome;
        this.email= email;
        this.dataNascimento = dataNascimento;
    }

    getNome(): string {
        return this.nome;
    }

    getEmail(): string {
        return this.email;
    }

    getDataNascimento(): Date {
        return this.dataNascimento;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setnome(nome: string): void {
        this.nome = nome;
    }

    setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }







}