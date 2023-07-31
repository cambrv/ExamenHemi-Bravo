import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registro, RegistrosService } from '../../services/registros.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  registros:any[];
  registrosEncontrados: Registro[] = [];
  searchTerm: string='';
  constructor(@Inject(DOCUMENT) public document: Document,public auth: AuthService, private activatedRoute: ActivatedRoute, private registrosService: RegistrosService, private Router:Router) {
    this.registros = this.registrosService.getRegistros();
  }
  filtrarObjetos() {
    this.registrosEncontrados = this.registrosService.buscarRegistros(this.searchTerm);
    this.Router.navigate(['/registros'], { queryParams: { searchTerm: this.searchTerm } });  
    console.log('Realizando búsqueda:', this.searchTerm);}  

}

