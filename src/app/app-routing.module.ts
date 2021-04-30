import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ErrorComponent } from './pages/error/error.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { AdminPrincipalComponent } from './pages/administrador/admin-principal/admin-principal.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'administrador', component: AdminPrincipalComponent},
  {path: '', component: InicioComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
