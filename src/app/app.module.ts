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
import { DatePickerComponent } from './pages/date-picker/date-picker.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './pages/administrador/table/table.component';
import { PiePaginaComponent } from './pages/pie-pagina/pie-pagina.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    AdminPrincipalComponent,
    SidenavComponent,
    ToolbarComponent,
    ErrorComponent,
    DatePickerComponent,
    CatalogoComponent,
    TableComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
