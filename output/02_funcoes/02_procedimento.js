"use strict";
//
// Um Prodimento é uma função que não retorna nemuma valor ou objeto.
// Apenas executa o código e utiliza os paramettros de entrada.
//
function enviarEmail(para, assunto = "Sem assunto", // o parametro assunto tem o seu valor pré-definido
remetente // A interrogação define o parametro remetente como opcional
) {
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
//# sourceMappingURL=02_procedimento.js.map