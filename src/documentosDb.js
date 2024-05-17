import { documentosColecao } from "./dbConnect.js";


function obterDocumentos(){
    const documento = documentosColecao.find().toArray();
    return documento
}

function adicionarDocumento(nome){
    const resultado = documentosColecao.insertOne({
        nome,
        texto: "",
    })
    return resultado;
}

function encontrarDocument(nome) {
    const documento = documentosColecao.findOne({
        nome
    })
    return documento;
}

function atualizaDocumento(nome, texto) {

    const atualizacao = documentosColecao.updateOne(
        { nome },
        { $set: { texto, }, })

        return atualizacao
}

function excluirDocumento(nome){
    const resultado = documentosColecao.deleteOne({
        nome
    });
    return resultado;
}
export { encontrarDocument, atualizaDocumento, obterDocumentos, adicionarDocumento, excluirDocumento };