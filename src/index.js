// Importa el framework Express para crear el servidor HTTP y definir rutas.
import express from "express";
// Habilita CORS para permitir peticiones desde otros orígenes (por ejemplo, un frontendseparado).
import cors from "cors";
// Carga variables de entorno desde el archivo .env (puerto, secretos, etc.).
import dotenv from "dotenv";
// Importa el enrutador para /health (verifica que el servicio esté vivo).
import healthRouter from "./routes/health.js";
// Carga las variables definidas en .env a process.env
dotenv.config();
// Crea la aplicación de Express (servidor).
const app = express();
// ---------- Middlewares globales ----------
// Permite solicitudes desde otros dominios (útil para conectar front y back).
app.use(cors());
// Permite recibir y entender cuerpos JSON en las peticiones.
app.use(express.json());
// ---------- Rutas de la API ----------
// Todas las peticiones que empiecen por /health serán atendidas por healthRouter.
app.use("/health", healthRouter);
// Ruta raíz opcional para probar el arranque.
app.get("/", (req, res) => {
 res.json({
 name: "TurnosPlus MVP Starter",
 message: "Bienvenido a la API base",
 docs: "Agrega aquí el enlace a tu documentación",
 });
});
// Middleware 404: si ninguna ruta coincidió, responde 'no encontrada'.
app.use((req, res) => {
 res.status(404).json({ error: "Ruta no encontrada" });
});
// Toma el puerto desde variables de entorno o usa 3000 por defecto.
const PORT = process.env.PORT || 3000;
// Inicia el servidor y muestra la URL local en consola.
app.listen(PORT, () => {
 console.log(`Servidor corriendo en http://localhost:${PORT}`);
});