import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../app/_model/Login'
import { Reponse } from '../../app/_model/response'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
/**
 * Clase encargada de obtener la información del login ("correo y contraseña").
 * @autor César Téllez
 * @autor Juan Páez
 * @autor Eison Morales
 * @autor Diego Cobos
 * @autor Carlos Urquiza
 * @since 1.0.0
 * @version 1.8.2
 */
export class ConsultaService {

  url2:string = `${environment.HOST}api/login`;

  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) { }

  login(form:Login):Observable<Reponse>{
    return this.http.post<Reponse>(`${this.url2}/login`,form);
  }

}
