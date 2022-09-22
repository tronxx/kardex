import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from '@models/menu-item';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  public routes: Array<MenuItem> = environment.menu;
  public currentRoute : string;
  @Output() public toggle : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.currentRoute = this.router.url.split("/")[this.router.url.split("/").length - 1]
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd)
        this.currentRoute = this.router.url.split("/")[this.router.url.split("/").length - 1]
    })
  }

  toggleMenu(){
    this.toggle.emit(true);
  }
}