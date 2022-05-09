 // Funcionario é uma classe abstrata que inicia uma hierarquia de Herança.
 // Nesse exemplo, todos os empregados tem um primeiro_nome,  ultimo_nome, e um salário. 
 // Cada empregado pode calcular o seu salario. 
 // Todavia, o mecanismo  para calcular o salário depende do tipo de empregado. (Polimorfismo)
 // Assim, cada subtipo deve definir, o modo como calcular o seu salário.

export abstract class Funcionario {

    protected primeiroNome : string;
    protected ultimoNome : string;
    protected salario: number;
    
    constructor (primeiroNome: string, ultimoNome: string, salario: number) {
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.salario = salario; 
    }

    // Método Acessor retorna _primeiroNome

    getprimeiroNome(): string {
        return this.primeiroNome;

    }

    // Método Acessor retorna _ultimoNome 
    getultimoNome(): string {
        return this.ultimoNome;

    }

    // Método Acessor retorna _salario 
    getsalario(): number {
        return this.salario;

    }

    // Método Modificador altera  primeiroNome 
    setprimeiroNome(primeiroNome: string): void {
        this.primeiroNome = primeiroNome;
    }

    // Método Modificador altera  ultimoNome
    setultimoNome(ultimoNome: string): void {
        this.ultimoNome = ultimoNome;
    }

    // Método Modificador altera  salario
    setsalario(salario : number): void {
        this.salario = salario;
    }

    // Método Abstrato
    // Será reescrito na subclasse
    abstract calcularPagamento(): number;

    // Método 
    imprimirCheckPagamento(): string {
        let nomeCompleto = this.ultimoNome + ", " + this.primeiroNome
        return ("Pagamento= " +  nomeCompleto + " R$ " + this.calcularPagamento());
    }



    

    

}