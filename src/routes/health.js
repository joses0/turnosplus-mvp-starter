// Importa el Router de Express para crear un conjunto de rutas modular.
import { Router } from "express";
// Crea una instancia de router.
const router = Router();
// GET /health (recordá que en index.js se monta como "/health")
// Responde con un JSON para verificar que el servicio está vivo.
router.get("/", (req, res) => {
 res.json({
 status: "ok",
 timestamp: new Date().toISOString(),
 });
});
// Exporta el router para usarlo en index.js
export default router;
