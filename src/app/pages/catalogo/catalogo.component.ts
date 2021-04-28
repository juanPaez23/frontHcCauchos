import { Component, OnInit } from '@angular/core';

interface Filtrado {
  value: string;
  viewValue: string;
}

interface Productos{
  imagen: string;
  producto: string;
  referencia: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productos: Productos[]=[
    {imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_692672-MCO43298125053_082020-F.webp',producto: 'moto',referencia: '121121',precio: 80000,stock: 2},
    {imagen: 'https://http2.mlstatic.com/D_NQ_NP_623575-MCO41888189647_052020-O.webp',producto: 'moto',referencia: '121121',precio: 80000,stock: 2},
    {imagen: 'https://http2.mlstatic.com/D_NQ_NP_930964-MCO43876335471_102020-O.webp',producto: 'moto',referencia: '121121',precio: 80000,stock: 2}
  ]
   
  filtrado: Filtrado[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  selectedFiltrado = "";
}
