import jwt from "jsonwebtoken"

function autorizarUsuario (socket, next){

    const tokenJwT = socket.handshake.auth.token;
    
try {
   const payloadToken =  jwt.verify(tokenJwT, process.env.SEGREDO_JWT);
    socket.emit("autorizacao_sucesso", payloadToken);
    next();
} catch (error) {
    next(error)
}

}

export default autorizarUsuario