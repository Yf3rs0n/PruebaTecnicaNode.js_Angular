import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
import { Categorias, SubCategorias, CrearData } from '../../models/categoria.model';
import { from } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modal-categorias',
  templateUrl: './modal-categorias.component.html',
  styleUrls: ['./modal-categorias.component.scss']
})
export class ModalCategoriasComponent implements OnInit {
  categoriasData: Categorias[] = [];
  subCategoriasData: SubCategorias[] = [];
  selectedCategoria: string | undefined;
  agrupacionCategoria: string | undefined;
  descripcion: string = '';

  categorias = [
    { label: 'Categoría', value: 'Categoria' },
    { label: 'Subcategoría', value: 'Subcategoria' },
    { label: 'Tema', value: 'Tema' }
  ];

  constructor(private categoriasService: CategoriasService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.obtenerCategorias();
    this.obtenerSubCategorias();
  }

  obtenerCategorias(): void {
    this.categoriasService.getCategorias().subscribe(
      (data: Categorias[]) => {
        this.categoriasData = data;
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

  obtenerSubCategorias(): void {
    this.categoriasService.getSubCategorias().subscribe(
      (data: SubCategorias[]) => {
        this.subCategoriasData = data;
      },
      (error) => {
        console.error('Error al obtener subcategorías:', error);
      }
    );
  }

  enviarFormulario(form: any): void {
    if (form.valid) {
      const newCategory: CrearData = {
        nombre: this.descripcion,
        tipo: this.selectedCategoria || '',
        jerarquia: this.agrupacionCategoria ? parseInt(this.agrupacionCategoria, 10) : null 
      };

      this.categoriasService.postCategorias(newCategory).subscribe(
        (response) => {
          if (response == true) {
            console.log('Categoría creada con éxito:', response);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Categoría creada con éxito' });
          }
          form.reset();
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al crear la categoría' });
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
