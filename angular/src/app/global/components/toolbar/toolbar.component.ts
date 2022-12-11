import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  public buttons: Array<any> = [
    { name: 'FrontLogger', active: true, hasIcon: true },
    { name: 'Settings', active: false },
    { name: 'GitHub', active: false }
  ]

  ngOnInit(): void {
  }

}
