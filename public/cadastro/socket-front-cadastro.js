const socket = io();

function emitirCadastrarUsuario(dados) {
  socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastro_sucesso", ()=> alert("Cadastro efetuado com sucesso!"))

socket.on("cadastro_erro", ()=> alert("Erro no cadastro!"))
socket.on("usuario_existe", ()=> alert("Usuario já existe"))


export { emitirCadastrarUsuario };