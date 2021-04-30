import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Empleado } from '../../../_model/Empleado';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoService } from './../../../_service/empleado-service/empleado.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'correo', 'events'];
  dataSource = new MatTableDataSource<Empleado>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private empService: EmpleadoService
  ) { }
  ngOnInit(): void {
    //Petición
    this.empService.retornar().subscribe(
      response =>{
        this.dataSource = new MatTableDataSource(response);
      },
      error =>{
        console.log(error);
      }
    );
  }

  filtrar(filtro: string){
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  ordenar():void{
    this.dataSource.sort = this.sort;
  }

}
