import { emitirTextos, excluirDocumento, selecionarDocumento } from "./socket-front-document.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const textoEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");
const botaoExcluir = document.getElementById("excluir-documento")

tituloDocumento.textContent = nomeDocumento || "Documento sem título";

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {

    emitirTextos({
        texto: textoEditor.value,
        nomeDocumento
    })
})

function atualizaTexto(texto) {
    textoEditor.value = texto;
}

botaoExcluir.addEventListener("click", () => {
    excluirDocumento(nomeDocumento);
})

function redirect(nome) {
    if (nome === nomeDocumento) {
        alert(`Documento ${nome} deletado!`)
        window.location.href = "/"
    }
}

export { atualizaTexto, redirect }