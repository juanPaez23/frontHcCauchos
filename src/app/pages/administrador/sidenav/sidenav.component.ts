import { Component, OnInit } from '@angular/core';
import { AdminPrincipalComponent } from '../admin-principal/admin-principal.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    private estado: AdminPrincipalComponent
  ) { }

  ngOnInit(): void {
  }

  mostrarTabla(){
    this.estado.tabla = true;
  }

}
