import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registro, RegistrosService } from 'src/app/services/registros.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    registro:any={};
    nuevoRegistro: Registro[] = [];
    RegistroEditado: Registro[] = [];
    selectedRegistro: Registro[] | null = null;
    registros: Registro[] = [];
  constructor(private activatedRoute: ActivatedRoute, private _regService:RegistrosService, private route:Router){

    this.activatedRoute.params.subscribe( params =>{
      this.registro=_regService.getRegistro(params['id'])
      console.log(params['id'])
    })
  }
  redirigir():void{
   this.route.navigate(['registros']);
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
      this._regService.editarRegistro(this.RegistroEditado);
    }
  }
  eliminarRegistro(codigo: string) {
    const index = this.registros.findIndex(registro => registro.codigo === codigo);
    if (index !== -1) {
      this.registros.splice(index, 1);
      this._regService.eliminarRegistro(codigo);
    }
  }
  }

