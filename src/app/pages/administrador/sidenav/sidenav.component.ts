import { Component, OnInit } from '@angular/core';
import { AdminPrincipalComponent } from '../admin-principal/admin-principal.component';

/**
 * Método heredado de la clase "Component" que permite
 * asignarle al componente "SidenavComponent" 
 * características como: selector, templateUrl y styleUrls.
 */
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
/**
 * Clase del componente sideNav
 * @autor César Téllez
 * @autor Juan Páez
 * @autor Eison Morales
 * @autor Diego Cobos
 * @autor Carlos Urquiza
 * @since 1.0.0
 * @version 1.8.2
 */
export class SidenavComponent implements OnInit {

  /**
   * Constructor de la clase "SidenavComponent"
   * que permite inyectar valores.
   * @param estado 
   */
  constructor(
    private estado: AdminPrincipalComponent
  ) { }

  /**
   * Método que se ejecuta inmediatamente después
   * del constructor y que activa todo su contenido al
   * cargar el componente.
   */
  ngOnInit(): void {
  }

  /**
   * Método encargado de mostrar los componentes (tabla y bienvenida)
   */
  mostrarTabla(){
    this.estado.tabla = true;
    this.estado.bienvenida = false;
  }

}
