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
export class LoginComponent implements OnInit {

  
  loginForm = new FormGroup({
    correo: new FormControl('', [
      Validators.required,
      Validators.email]),
      clave: new FormControl('', Validators.required),
    aplicacionId: new FormControl('', Validators.required),
    
  });


  hide = true;
  constructor(private api: ConsultaService, private router: Router, private snackBar: MatSnackBar,
    ) {
  }

  ngOnInit(): void {
    
  }
  
  onLogin(form:Login) {
    
    this.api.login(form).subscribe(data => {

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
