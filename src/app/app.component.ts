import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Clase del componente principal (Proyecto)
 * @autor César Téllez
 * @autor Juan Páez
 * @autor Eison Morales
 * @autor Diego Cobos
 * @autor Carlos Urquiza
 * @since 1.0.0
 * @version 1.8.2
 */
export class AppComponent {
  /**
   * Título de la plataforma web
   */
  title = 'hcCauchos';
  /**
   * Contiene un valor (boolean) que describe
   * la visibilidad del toolBar principal.
   */
  estadoToolBar: boolean = true;

  /**
   * Método que cambia el estado
   * del toolBar principal.
   */
  ocultarToolBar():void{
    this.estadoToolBar = false;
  }
}
