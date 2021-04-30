
import { environment } from './../../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppComponent } from './../../../app.component';

/**
 * Método heredado de la clase "Component" que permite
 * asignarle al componente "ToolbarComponent" 
 * características como: selector, templateUrl y styleUrls.
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
/**
 * Clase del componente toolBar
 * @autor César Téllez
 * @autor Juan Páez
 * @autor Eison Morales
 * @autor Diego Cobos
 * @autor Carlos Urquiza
 * @since 1.0.0
 * @version 1.8.2
 */
export class ToolbarComponent implements OnInit {
  /**
   * Variable de tipo "MatSidenav", la cuál, hace uso
   * de la clase "Input" para usar los conceptos de la misma.
   */
  @Input() inputSideNav: MatSidenav;
  /**
   * Constructor de la clase "ToolbarComponent"
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
  }
  
  /**
   * Método que elimina el "Token" y cierra
   * la sesión del usuario. Además, cambia la visibilidad
   * del toolBar principal.
   */
  logout() {
    sessionStorage.removeItem(environment.TOKEN);
    this.estado.estadoToolBar = true;
  }

  /**
   * Método get que obtiene el "Token" y compara su estado.
   */
  public get logIn(): boolean {
    return (localStorage.getItem(environment.TOKEN) !== null);
  }

}
