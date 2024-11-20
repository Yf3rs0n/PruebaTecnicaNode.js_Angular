import { Component, Input } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Data } from '../../models/categoria.model';
import { CategoriasService } from '../../../services/categorias.service';
import { AdministracionCategoriasComponent } from '../../administracion-categorias/administracion-categorias.component';

@Component({
  selector: 'app-tabla-gestion-categorias',
  templateUrl: './tabla-gestion-categorias.component.html',
  styleUrl: './tabla-gestion-categorias.component.scss',
})
export class TablaGestionCategoriasComponent {
  @Input() categoriasDataTable: Data[] = [];
  items: MenuItem[] | undefined;
  searchValue: string = '';
  displayModal: boolean = false;
  constructor(private messageService: MessageService,private categoriasService: CategoriasService,private DataTable: AdministracionCategoriasComponent) {}
  ngOnInit() {
  }
  buildMenuItems(category: any): void {
    this.items = [
      category.estado === true
        ? {
            label: 'Inactivar',
            icon: 'pi pi-refresh',
            command: () => {
              this.inactivarCategoria(category.id);
            },
          }
        : {
            label: 'Activar',
            icon: 'pi pi-check',
            command: () => {
              this.activarCategoria(category.id);
            },
          },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          this.eliminarCategoria(category.id);
        },
      },
    ];
}

  inactivarCategoria(id: number): void {
    this.categoriasService.putCategoriasByInactivarId(id).subscribe(
      response => {
        if (response == true) {
          this.DataTable.obtenerCategorias();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Categoría actualizada' });
        }
      },
      error => {
        console.error('Error al actualizar categoría:', error);
      }
    );
  }

  activarCategoria(id: number): void {
    this.categoriasService.putCategoriasByActivarId(id).subscribe(
      response => {
        if (response == true) {
          this.DataTable.obtenerCategorias();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Categoría actualizada' });
        }
      },
      error => {
        console.error('Error al actualizar categoría:', error);
      }
    );
  }

  eliminarCategoria(id: number): void {
    this.categoriasService.DeleteCategoriaById(id).subscribe(
      (response) => {
        
        if (response.estado === true) {
          this.DataTable.obtenerCategorias();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: response.message });
        }
      },
      (error) => {
        console.error('Error al eliminar la categoría:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      }
    );
  }
  openModal() {
    this.displayModal = true;
  }

  closeModal() {
    this.displayModal = false;
    this.DataTable.obtenerCategorias();
  }
}
