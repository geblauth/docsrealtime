import { atualizaTexto, redirect } from "./documento.js";

const socket = io();

function selecionarDocumento(nome){
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTexto(texto);
    });
}

function emitirTextos(dados) {
    socket.emit("texto_editor", dados)

}


socket.on("texto_editor_clientes", (texto) => {
    atualizaTexto(texto)
})

function excluirDocumento(nomeDocumento){
    socket.emit("excluir_documento", nomeDocumento);
}


socket.on("excluir_documento_sucesso",(nome)=>{
    redirect(nome);
})
export { emitirTextos, selecionarDocumento, excluirDocumento };