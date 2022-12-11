import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html'
})
export class AppContainerComponent implements OnInit {

  constructor(
    public menu: MenuService
  ) { }

  ngOnInit(): void {
  }

  public closeMenu(): void {
    this.menu.expanded$.next(false);
  }

}
