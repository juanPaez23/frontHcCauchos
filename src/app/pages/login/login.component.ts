import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsultaService } from '../../_service/consulta.service';
import { Login } from '../../_model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    correo: new FormControl('', [
      Validators.required,
      Validators.email]),
      clave: new FormControl('', Validators.required),
    aplicacionId: new FormControl('', Validators.required),
    
  });
  hide=true;
  constructor(private api: ConsultaService) {
  }

  ngOnInit(): void {
  }
  
  onLogin(form: Login) {
    
    this.api.login(form).subscribe(
      data => {
        console.log(data);
      },
    );
    console.log(form);
  }
  
}
