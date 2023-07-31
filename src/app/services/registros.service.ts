import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
    private storageKey = 'heroes';
    private registros: Registro []=
    [
      {
        codigo: "1",
        fecha: "09-09-23",
        cliente: "Cam B",
        tipointeraccion: "Fijo",
        descripcion:"Registro de prueba"
      },
      {
        codigo: "2",
        fecha: "03-09-23",
        cliente: "Derik A",
        tipointeraccion: "Celular",
        descripcion:"Registro de prueba"
      },
      {
        codigo: "3",
        fecha: "09-09-23",
        cliente: "Jostyn C",
        tipointeraccion: "WhatsApp",
        descripcion:"Registro de prueba"
      },
      {
        codigo: "4",
        fecha: "08-07-23",
        cliente: "Cam B",
        tipointeraccion: "Instagram",
        descripcion:"Registro de prueba"
      },
      {
        codigo: "5",
        fecha: "08-07-23",
        cliente: "Cam B",
        tipointeraccion: "Facebook",
        descripcion:"Registros "
      },{
        codigo: "6",
        fecha: "08-07-23",
        cliente: "Cecy Bravo",
        tipointeraccion: "Instagram",
        descripcion:"Registro IG"
      },{
        codigo: "7",
        fecha: "08-07-23",
        cliente: "Derik B",
        tipointeraccion: "WhatsApp",
        descripcion:"Registro de prueba"
      },{
        codigo: "8",
        fecha: "08-09-23",
        cliente: "Cam B",
        tipointeraccion: "Instagram",
        descripcion:"Registro de prueba"
      },{
        codigo: "9",
        fecha: "08-02-23",
        cliente: "Jostyn B",
        tipointeraccion: "Instagram",
        descripcion:"Registro de prueba 2"
      },{
        codigo: "10",
        fecha: "22-07-23",
        cliente: "Cam B",
        tipointeraccion: "Celular",
        descripcion:"Registro final"
      }
    ];
    registrosEncontrados: Registro[] = [];
  
    getRegistros(){
      return this.registros;
    }
    
    getRegistro(idx:number):Registro{
      return this.registros[idx];
    }
    buscarRegistros(termino: string): Registro[] {
      termino = termino.toLowerCase();
      return this.registros.filter(reg => reg.codigo.toLowerCase().includes(termino)|| reg.cliente.toLowerCase().includes(termino));
    }
    
    constructor() {
      console.log("Servicio listo para usar.");  
      this.cargarRegistros();
    }
  //mmmm
  private cargarRegistros() {
    const heroesGuardados = localStorage.getItem(this.storageKey);
    if (heroesGuardados) {
      this.registros = JSON.parse(heroesGuardados);
    } else {
      // Si no hay datos guardados en localStorage, utilizar los datos predeterminados
      this.registros = this.registros;
    }
  }
  
  private guardarRegistros() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.registros));
  }
  
    agregarRegistro(reg: Registro[]) {
      this.registros.push(reg[0]);
      this.guardarRegistros();
      console.log("Heroes", this.registros[7]);
    }
    
  obtenerRegistros() {
    return this.registros;
  }
  obtenerRegistroPorCodigo(codigo: string) {
    return this.registros.find(registro => registro.codigo === codigo);
  }

  editarRegistro(registro: Registro[]) {
    for (const reg of registro) {
      const index = this.registros.findIndex(r => r.codigo === reg.codigo);
      if (index !== -1) {
        this.registros[index] = reg;
      }
    }
  }
  eliminarRegistro(codigo: string) {
    const index = this.registros.findIndex(registro => registro.codigo === codigo);
    if (index !== -1) {
      this.registros.splice(index, 1);
    }
  }  
  }
  
  export interface Registro{
    codigo: string;
    fecha: string;
    cliente: string;
    tipointeraccion: string;
    descripcion:string;
  }

