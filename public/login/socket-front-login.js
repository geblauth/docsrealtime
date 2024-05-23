import { definirCookie } from "../utils/cookies.js";

const socket = io();

function autenticarUsuario(dados) {
    socket.emit("autenticar_usuario", dados);
}
socket.on("autenticacao_sucesso", (tokenJwt) => {
    definirCookie("tokenJwt", tokenJwt);

    alert("Autenticado com Sucesso!")
    window.location.href = "/";
})
socket.on("autenticacao_erro", () => alert("Autenticação Falhou!"))
socket.on("usuario_nao_existe", () => alert("Usuario não existe!"))

export { autenticarUsuario }