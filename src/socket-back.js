import io from "./server.js"
import { adicionarDocumento, atualizaDocumento, encontrarDocument, excluirDocumento, obterDocumentos } from "./documentosDb.js";

io.on("connection", (socket) => {
    socket.on("obter_documentos", async (devolverDocumentos) => {
        const documentos = await obterDocumentos();
        devolverDocumentos(documentos);

    });


    socket.on("adicionar_documento", async (nome) => {

        const documentoExiste = (await encontrarDocument(nome)) !== null;

        if (documentoExiste) {
            socket.emit("documento_existente", nome);
        } else {
            const resultado = await adicionarDocumento(nome);
            if (resultado.acknowledged) {
                io.emit("adicionar_documento_interface", nome);
            }
        }



    })
});




io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID:", socket.id)

    socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento);
        const documento = await encontrarDocument(nomeDocumento);

        console.log(documento);

        if (documento) {
            devolverTexto(documento.texto);
        }
    })

    socket.on("texto_editor", async ({ texto, nomeDocumento }) => {

        const atualizacao = await atualizaDocumento(nomeDocumento, texto);

        if (atualizacao.modifiedCount) {
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
        }
    });
    
    socket.on("excluir_documento", async (nomeDocumento)=>{
        const resultado = await excluirDocumento(nomeDocumento)

        if(resultado.deletedCount){
            io.emit("excluir_documento_sucesso", nomeDocumento);
        }
    })
});

