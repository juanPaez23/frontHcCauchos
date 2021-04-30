import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../app/_model/Login'


@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  url2:string = `${environment.HOST}/api/login`;

  constructor(private http: HttpClient) { }

  login(form:Login){
    return this.http.post<string>(`${this.url2}/login`,form);
  }

}
