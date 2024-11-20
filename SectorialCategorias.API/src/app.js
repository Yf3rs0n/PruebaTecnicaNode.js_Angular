import express from 'express';
import cors from 'cors';
import categoriasRoutes from './routes/categorias.routes.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use(categoriasRoutes);
export default app;