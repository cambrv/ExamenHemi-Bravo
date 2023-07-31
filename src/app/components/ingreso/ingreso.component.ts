import { Component } from '@angular/core';
import { Registro, RegistrosService } from 'src/app/services/registros.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {
    nuevoRegistro: Registro[] = [];
    RegistroEditado: Registro[] = [];
    selectedRegistro: Registro[] | null = null;
    registros: Registro[] = [];
    constructor(private _RegistrosService: RegistrosService){
  
    }
    
    agregarRegistro(Cod: string, Fecha: string, Cliente: string, Tipo: string, Des: string) {
      // Limpia los campos del formulario después de agregar el héroe
      this.nuevoRegistro = [{
        codigo: Cod,
        fecha: Fecha,
        cliente: Cliente,
        tipointeraccion: Tipo,
        descripcion: Des
      }];
      this._RegistrosService.agregarRegistro(this.nuevoRegistro);
    }
  
    editarRegistro(Cod: string, Fecha: string, Cliente: string, Tipo: string, Des: string) {
      const registroEditado: Registro = {
        codigo: Cod,
        fecha: Fecha,
        cliente: Cliente,
        tipointeraccion: Tipo,
        descripcion: Des
      };
      const index = this.registros.findIndex(registro => registro.codigo === Cod);
      if (index !== -1) {
        this.registros[index] = registroEditado;
        this._RegistrosService.editarRegistro(this.RegistroEditado);
      }
    }
    eliminarRegistro(codigo: string) {
      const index = this.registros.findIndex(registro => registro.codigo === codigo);
      if (index !== -1) {
        this.registros.splice(index, 1);
        this._RegistrosService.eliminarRegistro(codigo);
      }
    }
    //Metodo para cargar la imagen
    onFileSelected(event: any) {
      const file: File = event.target.files[0];
      // Aquí puedes realizar cualquier acción con el archivo seleccionado, como cargarlo o mostrar una vista previa.
    }
    
  }