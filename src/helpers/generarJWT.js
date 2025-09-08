import jwt from "jsonwebtoken";

const generarJWT = async (nombreUsuario, email, id) => {
  try {
    // generar el payload
    const payload = { nombreUsuario, email, id };
    // firmar el token
    const token = await jwt.sign(payload, process.env.SECRET_JWT, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    console.error(error);
    throw new Error("Error al generar el JWT");
  }
};

export default generarJWT;
