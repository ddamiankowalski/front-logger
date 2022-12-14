import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './app-information.component.html'
})
export class AppInformationComponent implements OnInit {

  constructor() { }

  @Input() public header: string | undefined;
  @Input() public icon: string | undefined;

  public appDescription: string = 'Some description of the application'

  ngOnInit(): void {
  }

}
