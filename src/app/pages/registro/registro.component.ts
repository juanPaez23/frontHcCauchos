import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';


/**
 * Método heredado de la clase "Component" que permite
 * asignarle al componente "RegistroComponent" 
 * características como: selector, templateUrl y styleUrls.
 */


@Component({

  selector: 'app-registro',

  templateUrl: './registro.component.html',

  styleUrls: ['./registro.component.css']

})

/**
 * Clase del componente Registro
 * @autor César Téllez
 * @autor Juan Páez
 * @autor Eison Morales
 * @autor Diego Cobos
 * @autor Carlos Urquiza
 * @since 1.0.0
 * @version 1.8.2
 */

export class RegistroComponent implements OnInit {

  /**
   * Variables encargadas de alojar los valores de contraseña, 
   * repetir contraseña y atributos como color y mensaje que varían
   * dependiendo de los valores ingresados por el usuario
   */
  contrasena1: string;
  contrasena2: string;
  mensaje: string;
  colorVar: string;

/**
 * Objeto de la clase FormControl encargado de validar que
 * el campo de correo cumpla con el formato, además de 
 * evitar guardado de campos vacíos.
 * Envía alerta.
 */
  emailFormControl = new FormControl('', [

    Validators.required,

    Validators.email,

  ]);

  /**
 * Objeto de la clase FormControl encargado de validar que
 * el campo de contraseña no esté vacío. 
 * Envía alerta.
 */
  passFormControl = new FormControl('', [

    Validators.required,

  ]);

  /**
 * Objeto de la clase FormControl encargado de validar que
 * el campo de confirmar contraseña no esté vacío. 
 * Envía alerta.
 */
  confirmFormControl = new FormControl('', [

    Validators.required,

  ]);


/**
 * Objeto de la clase FormControl encargado de validar que
 * el campo de número de documento no esté vacío. 
 * Envía alerta.
 */
  textFormControl = new FormControl('', [

    Validators.required,

  ]);

  /** Contiene un valor (boolean) para determinar
  * la visibilidad de los campos de texto contraseña
  * y confirmar contraseña.
  */
  hide = true;


/**
 * Constructor de la clase Registro
 */
  constructor() { }

    /**
   * Método que se ejecuta inmediatamente después
   * del constructor y que activa todo su contenido al
   * cargar el componente.
   */

  ngOnInit(): void {

  }

/**
 * Método encargado de validar que los campos de contraseña y 
 * confirmar contraseña coincidan.
 * Envía alerta en ambos casos: cuando coinciden y cuando no.
 */
  equalPasswordControl(): void {

    if (this.contrasena1 === this.contrasena2) {
      this.colorVar = 'green';
      this.mensaje = 'Las contraseñas coinciden.';
    } else {
      this.colorVar = 'red';
      this.mensaje = 'Error: Las contraseñas no coinciden.';
    }
  }
}
