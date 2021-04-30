import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../../environments/environment';
import { Login } from './../../_model/login';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsultaService } from '../../_service/consulta.service'
import { Router } from '@angular/router';
import { JwtHelperService   } from "@auth0/angular-jwt";
import { AppComponent } from './../../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**
 * Clase encargada de logiar al usuario
 * @autor César Téllez
 * @autor Juan Páez
 * @autor Eison Morales
 * @autor Diego Cobos
 * @autor Carlos Urquiza
 * @since 1.0.0
 * @version 1.8.2
 */
export class LoginComponent implements OnInit {

  /**
   *  Guardan los atributos correo, clave y aplicacionId que ingresa el usuario
   */
  loginForm = new FormGroup({
    
    correo: new FormControl('', [
      Validators.required,
      Validators.email]),
      clave: new FormControl('', Validators.required),
    aplicacionId: new FormControl('', Validators.required),
    
  });


  hide = true;
/**
 * Costrcutor de la clase "loginComponent"
 * @param apiLogin colsulta el post para el login
 * @param router redireciona al usuiario
 * @param snackBar muestar error capturado
 */
  constructor(private apiLogin: ConsultaService, private router: Router, private snackBar: MatSnackBar,
    ) {
  }

  ngOnInit(): void {
    
  }
  

  /**
   * fucion encargda de guardar el token y capturarlos errores en el login 
   * 
   */


  onLogin(form:Login) {
    
    this.apiLogin.login(form).subscribe(data => {

        sessionStorage.setItem(environment.TOKEN, data );
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(data);
        const expirationDate = helper.getTokenExpirationDate(data);
        const isExpired = helper.isTokenExpired(data);

        console.log(decodedToken);
        console.log(expirationDate);
        console.log(isExpired);

        this.router.navigate(['administrador']);
      }, erro =>{
        if(erro.status == 401){
          this.snackBar.open('Usuario y/o cotrasena inconrrecta', 'Advertrencia',{
            duration:2000,
          });
          
        }else if (erro.status == 400) {
          this.snackBar.open(erro.error.message, 'Advertrencias',{
            duration:2000,
          })
        }else 
        this.router.navigate([`/error/${erro.status}/${erro.statusText}`])
      }
      
    );
  }


}
