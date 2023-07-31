import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ProtegidaComponent } from './components/protegida/protegida.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    NavbarComponent,
    RegistrosComponent,
    RegistroComponent,
    IngresoComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-f58wbhpsjpe6jtnb.us.auth0.com',
      clientId: 'GMsGXT2NYaIQ4fxcAcT5I1QlfPIBbfj7',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
