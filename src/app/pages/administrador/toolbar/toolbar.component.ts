
import { environment } from './../../../../environments/environment';

import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() inputSideNav: MatSidenav;
  constructor() { }

  ngOnInit(): void {
  }
  
  logout() {
    sessionStorage.removeItem(environment.TOKEN);
  }

  public get logIn(): boolean {
    return (localStorage.getItem(environment.TOKEN) !== null);
  }
}
