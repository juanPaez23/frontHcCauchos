import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { AdminPrincipalComponent } from './pages/administrador/admin-principal/admin-principal.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'administrador', component: AdminPrincipalComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
