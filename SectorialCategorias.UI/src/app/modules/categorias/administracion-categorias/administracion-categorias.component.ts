import { Component } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { Data } from '../models/categoria.model';

@Component({
  selector: 'app-administracion-categorias',
  templateUrl: './administracion-categorias.component.html',
  styleUrl: './administracion-categorias.component.scss'
})
export class AdministracionCategoriasComponent {
  categoriasData: Data[] = [];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(): void {
    this.categoriasService.getData().subscribe(
      (data: Data[]) => {
        this.categoriasData = data;
        console.log('Categorías:', this.categoriasData);
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }
}
