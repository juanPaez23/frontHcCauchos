import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../../_model/Empleado';


@Injectable({
  providedIn: 'root'
})
/**
 * Clase que obtiene la lista  servicio de Empleado
 * @autor César Téllez
 * @autor Juan Páez
 * @autor Eison Morales
 * @autor Diego Cobos
 * @autor Carlos Urquiza
 * @since 1.0.0
 * @version 1.8.2
 */

export class EmpleadoService {

private url: string = `${environment.HOST2}/users`;
/**
 * 
 * @param http 
 */
  constructor( private http: HttpClient) { }

  retornar(){
    return this.http.get<Empleado[]>(this.url);
  }
}
