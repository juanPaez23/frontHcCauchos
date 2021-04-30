import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hcCauchos';
  estadoToolBar: boolean = true;

  ocultarToolBar():void{
    this.estadoToolBar = false;
  }
}
