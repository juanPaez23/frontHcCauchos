import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Empleado } from '../../../_model/Empleado';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoService } from './../../../_service/empleado-service/empleado.service';

/**
 * Método heredado de la clase "Component" que permite
 * asignarle al componente "TableComponent" 
 * características como: selector, templateUrl y styleUrls.
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
/**
 * Clase del componente sideNav
 * @autor César Téllez
 * @autor Juan Páez
 * @autor Eison Morales
 * @autor Diego Cobos
 * @autor Carlos Urquiza
 * @since 1.0.0
 * @version 1.8.2
 */
export class TableComponent implements OnInit {
  /**
   * Contiene un array con los indices de la tabla
   * correspondientes a los empleados.
   */
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'correo', 'events'];
  /**
   * Intancia de la clase "MatTableDataSource" que recibe
   * como parámetro el objeto de la clase "Empleado".
   */
  dataSource = new MatTableDataSource<Empleado>();
  /**
   * Variable de tipo "MatSort", la cuál, hace uso
   * de la clase "ViewChild" que recibe como
   * parámetro el componente "MatSort" 
   * para implementar el mismo.
   */
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Constructor de la clase "TableComponent"
   * que permite inyectar valores.
   * @param empService 
   */
  constructor(
    private empService: EmpleadoService
  ) { }
  /**
   * Método que se ejecuta inmediatamente después
   * del constructor y que activa todo su contenido al
   * cargar el componente.
   * Nota: En este método se realiza la petición "get"
   * para insertar los empleados en la tabla.
   */
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

  /**
   * Método que aplica el filtro a la tabla.
   * @param filtro 
   */
  filtrar(filtro: string){
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  /**
   * Método que ordena la tabla
   */
  ordenar():void{
    this.dataSource.sort = this.sort;
  }

}
