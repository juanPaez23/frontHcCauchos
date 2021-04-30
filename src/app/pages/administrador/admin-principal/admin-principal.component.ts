import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../../app.component';

/**
 * Método heredado de la clase "Component" que permite
 * asignarle al componente "AdminPrincipalComponent" 
 * características como: selector, templateUrl y styleUrls.
 */
@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.css']
})
/**
 * Clase del componente principal (rol administrador)
 * @autor César Téllez
 * @autor Juan Páez
 * @autor Eison Morales
 * @autor Diego Cobos
 * @autor Carlos Urquiza
 * @since 1.0.0
 * @version 1.8.2
 */
export class AdminPrincipalComponent implements OnInit {
  /**
   * Contiene un valor (boolean) para determinar
   * la visibilidad de la tabla de empleados, en la
   * interfáz del administrador.
   */
  tabla: boolean;
  /**
   * Contiene un valor (boolean) para determinar
   * la visibilidad de la bienvenida
   * en la interfáz del administrador.
   */
  bienvenida: boolean = true;
  /**
   * Constructor de la clase "AdminPrincipalComponent"
   * que permite inyectar valores.
   * @param estado 
   */
  constructor(
    private estado: AppComponent
  ) { }

  /**
   * Método que se ejecuta inmediatamente después
   * del constructor y que activa todo su contenido al
   * cargar el componente.
   */
  ngOnInit(): void {
    this.estado.estadoToolBar = false;
  }

}
