import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenteComponent } from './pages/componente/componente.component';
import { InicioComponent } from './pages/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    LoginComponent,
    InicioComponent
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
