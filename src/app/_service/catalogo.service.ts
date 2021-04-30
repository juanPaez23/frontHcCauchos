import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../app/_model/Login'
import { Reponse } from '../../app/_model/response'
import { Observable } from 'rxjs';
import { Catalogo } from './../_model/catalogo';


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  url2:string = `${environment.HOST}/api/Usuario`;

  constructor(private http: HttpClient) { }

  obtenerProductos():Observable<Catalogo[]>{
    return this.http.get<Catalogo[]>(`${this.url2}/catalogo`);
  }

}