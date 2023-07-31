import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registro, RegistrosService } from 'src/app/services/registros.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent {
  registros:Registro[]=[]; 
  registrosEncontrados: Registro[]=[];
  searchTerm: string;
   
   constructor(private activatedRoute: ActivatedRoute, private _registrosService:RegistrosService, private Router:Router){

    this.registrosEncontrados = this._registrosService.registrosEncontrados;
    this.searchTerm = '';
   }
  ngOnInit():void{
   this.activatedRoute.queryParamMap.subscribe((queryParams) => {
     this.searchTerm = queryParams.get('searchTerm') ?? '';
     this.filtrarregistros();
     });
   this.registros = this._registrosService.getRegistros();
   console.log(this.registros);
  }
  filtrarregistros() {
   if (this.searchTerm.trim() === '') {
     this.registrosEncontrados = [];
   } else {
     this.registrosEncontrados = this._registrosService.buscarRegistros(this.searchTerm);
   }}
  //Método para sacar la pos de cada Registro en html en el boton
  verRegistro(idx: number){
   console.log(idx);
   this.Router.navigate(['/registro', idx])
  }}