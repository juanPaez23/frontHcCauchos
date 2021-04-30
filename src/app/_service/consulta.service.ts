import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../app/_model/Login'
import { Reponse } from '../../app/_model/response'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  url2:string = `${environment.HOST}/login`;

  constructor(private http: HttpClient) { }

  login(form:Login):Observable<Reponse>{
    return this.http.post<Reponse>(`${this.url2}/login`,form);
  }

}
