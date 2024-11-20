import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import {
  Categorias,
  CrearData,
  Data,
  SubCategorias,
} from '../categorias/models/categoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.api;

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.apiUrl}data`);
  }

  getCategorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(`${this.apiUrl}categorias`);
  }

  getSubCategorias(): Observable<SubCategorias[]> {
    return this.http.get<SubCategorias[]>(`${this.apiUrl}subcategorias`);
  }

  postCategorias(data: CrearData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}categorias`, data);
  }
  putCategoriasByInactivarId(id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}categorias/inactivar/${id}`, {});
  }
  putCategoriasByActivarId(id: number): Observable<any> { // 
    return this.http.put<any>(`${this.apiUrl}categorias/activar/${id}`, {}); // activarId
  }
    DeleteCategoriaById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}categorias/${id}`);
  }
}
