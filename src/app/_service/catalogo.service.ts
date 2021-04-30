import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../app/_model/Login'
import { Reponse } from '../../app/_model/response'
import { Observable } from 'rxjs';
import { Catalogo } from './../_model/catalogo';

/**
 * se importa el metodo root para ...
 */
@Injectable({
  providedIn: 'root'
})
/**
 * Clase que obtiene la lista de servicio de los catalogos.
 * @autor César Téllez
 * @autor Juan Páez
 * @autor Eison Morales
 * @autor Diego Cobos
 * @autor Carlos Urquiza
 * @since 1.0.0
 * @version 1.8.2
 */

export class CatalogoService {

  url2:string = `${environment.HOST}/api/Usuario`;

  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) { }

  obtenerProductos():Observable<Catalogo[]>{
    return this.http.get<Catalogo[]>(`${this.url2}/catalogo`);
  }

}