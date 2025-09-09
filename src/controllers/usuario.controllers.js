import { token, token, token } from "morgan";
import generarJWT from "../helpers/generarJWT";

export const login = async (req, res) => {
  try {
    // 1- verificar si el email existe, si no existe enviar un mensaje de error
    const { email, password } = req.body;
    const usuarioExistente = await usuario.findOne({ email: email });
    if (!usuarioExistente) {
      return res.status(404).json({ mensaje: " No se encontro el usuario" });
    }
    // 2-si existe el email, verificar el password. Si no coincide enviar un mensaje de error
    const passwordVerificado = bcrypt.compareSync(
      password,
      usuarioExistente.password
    );
    if (!passwordVerificado) {
      return res.status(401).json({ mensaje: "credencial incorrecta" });
    }
    // 3- generar el token de seguridad
    const token = await generarJWT(usuarioExistente.nombreUsuario, token);
    // 4- enviar el token al frontend
    res.status(200).json({
      mensaje: "login existoso",
      nombreUsuario: nombreUsuario.nombreUsuario,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al loguear al usuario" });
  }
};
