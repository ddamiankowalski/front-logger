import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drawer-content',
  templateUrl: './drawer-content.component.html',
})
export class DrawerContentComponent implements OnInit {

  constructor() { }

  public buttons: Array<any> = [
    { message: 'Example1' },
    { message: 'Example2' }
  ]

  ngOnInit(): void {
  }

}
