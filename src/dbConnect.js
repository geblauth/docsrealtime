import { MongoClient } from "mongodb";

const cliente = new MongoClient();

let documentosColecao

try {
    await cliente.connect();

    const db = cliente.db("Alura-websockets")
    documentosColecao = db.collection("documentos");

    console.log("Conectadossss")
} catch (error) {
    console.log(error)
}

export {documentosColecao};