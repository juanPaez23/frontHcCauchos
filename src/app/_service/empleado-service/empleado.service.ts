import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../../_model/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

private url: string = `${environment.HOST}/api/Admin/ListarEmpleados`;

  constructor( private http: HttpClient) { }

  retornar(){
    return this.http.get<Empleado[]>(this.url);
  }
}
