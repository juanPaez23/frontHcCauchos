import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

interface NumeroIdentificacion {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  colorVar: string;
  contrasena1: string;
  contrasena2: string;
  mensaje: string;
  aux: boolean;
  equalPasswordControl() {
    this.aux = false;
    if(this.contrasena2!='' && this.contrasena1!=''){
    if (this.contrasena1 == this.contrasena2) {
      this.colorVar = 'green';
      this.mensaje = 'Las contraseñas coinciden.';
      this.aux = true;
    } else {
      this.colorVar = 'red';
      this.mensaje = 'Error: Las contraseñas no coinciden.';
    }
  }
  };

  tiposDocumento: NumeroIdentificacion[] = [
    { value: 'cc', viewValue: 'Cédula de ciudadanía' },
    { value: 'ce', viewValue: 'Cédula de extranjería' },
    { value: 'ps', viewValue: 'Pasaporte' }
  ];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passFormControl = new FormControl('', [
    Validators.required,
  ]);
  confirmFormControl = new FormControl('', [
    Validators.required,
  ]);

  textFormControl = new FormControl('', [
    Validators.required,
  ]);


  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
