import { Component, OnInit } from '@angular/core';
import { GridService } from 'src/app/grid/services/grid.service';

@Component({
  selector: 'button-section',
  templateUrl: './button-section.component.html'
})
export class ButtonSectionComponent implements OnInit {

  constructor(
  ) { }

  public buttons: Array<any> = [
    {
      text: 'Delete marked',
      disabled: true
    },
    {
      text: 'Mark all',
      disabled: false
    },
    {
      text: 'Reset',
      disabled: false
    },
  ];

  public refreshGrid(): void {
  }

  ngOnInit(): void {
  }

}
