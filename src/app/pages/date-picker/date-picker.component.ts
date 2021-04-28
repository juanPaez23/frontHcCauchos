import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  textFormControl = new FormControl('', [
    Validators.required,
]);

  constructor() { }

  ngOnInit(): void {
  }

}
