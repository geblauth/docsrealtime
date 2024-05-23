const conexoesDocumentos = [];

function encontrarConexao(nomeDocumento, nomeUsuario){
    return conexoesDocumentos.find((conexao)=>{
        return (conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario)
    })


}

function adicionarConexao(conexao){
    conexoesDocumentos.push(conexao)
}


function obterUsuariosDocumento(nomeDocumento){

return conexoesDocumentos
.filter((conexao)=> conexao.nomeDocumento ===nomeDocumento)
.map((conexao)=> conexao.nomeUsuario)
}

function removerConexao(nomeDocumento, nomeUsuario){
    const index = conexoesDocumentos.findIndex((conexao)=>{
        return (conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario)
    })

    if(index !== -1){
        conexoesDocumentos.splice(index, 1)

    }
}


export {adicionarConexao, obterUsuariosDocumento, removerConexao, encontrarConexao}