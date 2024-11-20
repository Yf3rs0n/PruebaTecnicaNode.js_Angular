use DB_SECTORIALCATEGORIAS

CREATE TABLE categorias (
    id INT PRIMARY KEY IDENTITY(1,1),
    nombre NVARCHAR(100) NOT NULL,
    tipo NVARCHAR(50) CHECK (Tipo IN ('Categoria', 'Subcategoria', 'Tema')),
    jerarquiaId INT NULL,
    estado BIT DEFAULT 1,
    CONSTRAINT FK_categorias_jerarquiaId FOREIGN KEY (jerarquiaId) REFERENCES categorias(id)
);
select * from categorias
-- Insertar Categoría A
INSERT INTO categorias (nombre, tipo, jerarquiaId, estado)
VALUES ('Categoría A', 'Categoria', NULL, 1);

-- Insertar Subcategoría A1 (hija de Categoría A)
INSERT INTO categorias (nombre, tipo, jerarquiaId, estado)
VALUES ('Subcategoría A1', 'Subcategoria', 1, 1);

-- Insertar Tema A1.1 (hijo de Subcategoría A1)
INSERT INTO categorias (nombre, tipo, jerarquiaId, estado)
VALUES ('Tema A1.1', 'Tema', 2, 1);

