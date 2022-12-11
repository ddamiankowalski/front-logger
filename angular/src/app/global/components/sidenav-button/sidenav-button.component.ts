import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sidenav-button',
  templateUrl: './sidenav-button.component.html'
})
export class SidenavButtonComponent implements OnInit {

  constructor() { }

  @Input() public message: string | undefined;

  ngOnInit(): void {
  }

}
