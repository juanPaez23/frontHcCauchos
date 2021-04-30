import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

/**
 * Componente encargado de seleccionar la fechas que solicita el regitro
 * @autor César Téllez
 * @autor Juan Páez
 * @autor Eison Morales
 * @autor Diego Cobos
 * @autor Carlos Urquiza
 * @since 1.0.0
 * @version 1.8.2
 */
export class DatePickerComponent implements OnInit {

  textFormControl = new FormControl('', [
    Validators.required,
]);
/**
 * Contructor de la clase  DatePicker
 */
  constructor() { }

  ngOnInit(): void {
  }

}
