
import "dotenv/config"

import io from "./servidor.js";

import registrarEventos from "./registrarEventos/registrarEventosInicio.js";
import registrarEventosCadastro from "./registrarEventos/registrarEventosCadastro.js";
import registrarEventosDocumento from "./registrarEventos/registrarEventosDocumento.js";
import registrarEventosLogin from "./registrarEventos/registrarEventosLogin.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios")


nspUsuarios.use(autorizarUsuario)

nspUsuarios.on("connection", (socket) =>{
  registrarEventosDocumento(socket, nspUsuarios);
  registrarEventos(socket, nspUsuarios);


})

io.of("/").on("connection", (socket) => {

  registrarEventosCadastro(socket, io)
  registrarEventosLogin(socket, io);

});
