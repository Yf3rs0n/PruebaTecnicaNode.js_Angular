import { Router } from "express";
import {
  getData,
  getCategorias,
  getSubcategorias,
  postCategorias,
  putCategoriasActivar,
  putCategoriasInactivar,
  deleteCategorias,
} from "../controllers/categorias.controllers.js";

const router = Router();

router.get("/data", getData); 

router.get("/categorias", getCategorias);

router.get("/subcategorias", getSubcategorias);



router.post("/categorias", postCategorias);

router.put('/categorias/activar/:id', putCategoriasActivar);

router.put('/categorias/inactivar/:id', putCategoriasInactivar);

router.delete("/categorias/:id", deleteCategorias);

export default router;
