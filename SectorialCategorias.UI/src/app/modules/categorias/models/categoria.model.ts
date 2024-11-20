export interface Data {
    id: number;
    nombre: string;
    tipo: string;
    jerarquiaId: string;
    estado: boolean;
}
export interface Categorias {
    id: number;
    nombre: string;
    tipo: string;
}
export interface SubCategorias {
    id: number;
    nombre: string;
    tipo: string;
}

export interface CrearData {
    nombre: string;
    tipo: string;
    jerarquia: number | null; 
}