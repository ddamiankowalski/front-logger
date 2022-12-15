import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'log-info',
  templateUrl: './log-info.component.html'
})
export class LogInfoComponent implements OnInit {

  constructor() { }

  public isSelected: boolean = false;

  public selectChip(): void {
    this.isSelected = !this.isSelected;
  }

  @Input() public icon: string | undefined;
  @Input() public name: string | undefined;

  ngOnInit(): void {
  }

}
