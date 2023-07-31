import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'registros', component: RegistrosComponent},
  { path: 'registro/:id', component: RegistroComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ingreso', component: IngresoComponent, canActivate: [AuthGuard]},
  { path: 'ingreso/:codigo', component: IngresoComponent, canActivate: [AuthGuard]},
  { path: 'protegida', component: ProtegidaComponent, canActivate: [AuthGuard]},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
