import { Component, OnInit } from '@angular/core';
import { Catalogo } from './../../_model/catalogo';
import { CatalogoService } from '../../_service/catalogo.service';

interface Filtrado {
  value: string;
  viewValue: string;
}

/**
 * Clase del componente principal (Catalogo)
 * @autor César Téllez
 * @autor Juan Páez
 * @autor Eison Morales
 * @autor Diego Cobos
 * @autor Carlos Urquiza
 * @since 1.0.0
 * @version 1.8.2
 */

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

 /**
  * 
  * @param api
  */
  constructor(private api: CatalogoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }
  productos : Catalogo[];
  cargarProductos(){
  this.api.obtenerProductos().subscribe(
    data => {
      this.productos = data;
      console.log(data);
    },
  );

  }
   
  filtrado: Filtrado[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  selectedFiltrado = "";
}
