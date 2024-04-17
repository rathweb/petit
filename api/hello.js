// Importa el módulo db desde la carpeta utils
import db from "../utils/db";

// Definir el controlador de la ruta de la API
export default function handler(req, res) {
  // Llama a las funciones de conexión y desconexión del módulo db
  db.connectDb();
  db.disconnectDb();
  
  // Envía una respuesta JSON
  res.status(200).json({ name: "John Doe" });
}
