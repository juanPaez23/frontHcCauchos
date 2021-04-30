import { Component, OnInit } from '@angular/core';
import { Catalogo } from './../../_model/catalogo';
import { CatalogoService } from '../../_service/catalogo.service';

interface Filtrado {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

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
