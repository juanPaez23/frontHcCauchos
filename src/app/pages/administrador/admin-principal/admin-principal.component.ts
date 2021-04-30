import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../../app.component';

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.css']
})

export class AdminPrincipalComponent implements OnInit {
  tabla: boolean;
  bienvenida: boolean = true;
  constructor(
    private estado: AppComponent
  ) { }

  ngOnInit(): void {
    this.estado.estadoToolBar = false;
  }

}
