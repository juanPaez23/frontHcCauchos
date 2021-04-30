import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.css']
})
export class AdminPrincipalComponent implements OnInit {
  tabla: boolean;
  bienvenida: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
