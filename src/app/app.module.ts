import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AdminPrincipalComponent } from './pages/administrador/admin-principal/admin-principal.component';
import { SidenavComponent } from './pages/administrador/sidenav/sidenav.component';
import { ToolbarComponent } from './pages/administrador/toolbar/toolbar.component';
import { ErrorComponent } from './pages/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    AdminPrincipalComponent,
    SidenavComponent,
    ToolbarComponent,
    ErrorComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
