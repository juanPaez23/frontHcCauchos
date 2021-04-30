
import { environment } from './../../../../environments/environment';

import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppComponent } from './../../../app.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() inputSideNav: MatSidenav;
  constructor(
    private estado: AppComponent
  ) { }

  ngOnInit(): void {
  }
  
  logout() {
    sessionStorage.removeItem(environment.TOKEN);
    this.estado.estadoToolBar = true;
  }

  public get logIn(): boolean {
    return (localStorage.getItem(environment.TOKEN) !== null);
  }

}
