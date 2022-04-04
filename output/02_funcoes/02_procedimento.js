"use strict";
//
// Um Prodimento é uma função que não retorna nemuma valor ou objeto.
// Apenas executa o código e utiliza os paramettros de entrada.
//
function enviarEmail(para, assunto, // o parametro assunto tem o seu valor pré-definido
remetente // A interrogação define o parametro remetente como opcional
) {
    if (assunto === void 0) { assunto = "Sem assunto"; }
    console.log({
        para: para,
        assunto: assunto,
        remetente: remetente
    });
}
// Chamada do procedimento com um parametro
enviarEmail("joao@hcode.com.br");
// Chamado do procedimento com todos os parametros
enviarEmail("joao@hcode.com.br", "Demonstração de Função", "alex@ifce.edu.br");
//# sourceMappingURL=02_procedimento.js.map