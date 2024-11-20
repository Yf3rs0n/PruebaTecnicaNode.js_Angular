import { getConnection } from "../database/conexion.js";
import sql from "mssql";


export const getData = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM categorias");
  res.json(result.recordset);
};

export const getCategorias = async (req, res) => {
  const pool = await getConnection();
  const query = `
  SELECT *
  FROM categorias
  WHERE tipo IN ('Categoria');
`;
  const result = await pool.request().query(query);
  res.json(result.recordset);
};

export const getSubcategorias  = async (req, res) => {
  const pool = await getConnection();
  const query = `
  SELECT *
  FROM categorias
  WHERE tipo = 'Subcategoria';
`;
  const result = await pool.request().query(query);
  res.json(result.recordset);
};

export const postCategorias = async (req, res) => {
    console.log(req.body);

    const pool = await getConnection()
    const result = await pool.request()
        .input('nombre', sql.VarChar, req.body.nombre)
        .input('tipo', sql.VarChar, req.body.tipo)
        .input('jerarquia', sql.Int, req.body.jerarquia || null)
        .query('INSERT INTO categorias (nombre, tipo, jerarquiaId) VALUES (@nombre, @tipo, @jerarquia)')
        res.send(true);
};

export const putCategoriasInactivar = async (req, res) => {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query('UPDATE categorias SET estado = 0 WHERE id = @id');
    res.send(true);
};

export const putCategoriasActivar = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool.request()
    .input('id', sql.Int, id)
    .query('UPDATE categorias SET estado = 1 WHERE id = @id');
  res.send(true);
};

export const deleteCategorias = async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await getConnection();

    // Busca si hay relacionadas con esta categoría
    const relatedCategories = await pool.request()
      .input('id', sql.Int, id)
      .query(`
        SELECT id, nombre 
        FROM categorias 
        WHERE jerarquiaId = @id
      `);

    if (relatedCategories.recordset.length > 0) {
      return res.status(400).json({
        message: "No se puede eliminar esta categoría porque tiene relaciones.",
        estado: false
      });
    }

    // Eliminar la categoría si no hay relaciones
    await pool.request()
      .input('id', sql.Int, id)
      .query('DELETE FROM categorias WHERE id = @id');

    return res.status(200).json({
      message: "Categoría eliminada correctamente.",
      estado: true
    });
    
  } catch (error) {
    console.error('Error al eliminar la categoría:', error);
    return res.status(500).json({
      message: "Error al eliminar la categoría."
    });
  }
};

