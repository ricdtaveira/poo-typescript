//
// Um Prodimento é uma função que não retorna nemuma valor ou objeto.
// Apenas executa o código e utiliza os paramettros de entrada.
//

function enviarEmail(
    para: string,
    assunto: string = "Sem assunto", // o parametro assunto tem o seu valor pré-definido
    remetente?: string  // A interrogação define o parametro remetente como opcional
): void {               // O void é um tipo que define um valor vazio

    console.log({
        para,
        assunto,
        remetente
    });

}

// Chamada do procedimento com um parametro
enviarEmail("joao@hcode.com.br");

// Chamado do procedimento com todos os parametros
enviarEmail("joao@hcode.com.br", "Demonstração de Função", "alex@ifce.edu.br");