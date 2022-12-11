import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  constructor(
    private menu: MenuService
  ) {}

  public expandMenu() {
    this.menu.expanded$.next(true);
  }

  public buttons: Array<any> = [
    { name: 'FrontLogger', active: true, hasIcon: true },
    { name: 'Settings', active: false },
    { name: 'GitHub', active: false }
  ]

  ngOnInit(): void {
  }

}
