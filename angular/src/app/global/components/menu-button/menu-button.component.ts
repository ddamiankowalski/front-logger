import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-button',
  templateUrl: './menu-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuButtonComponent implements OnInit {

  constructor() { }

  @Input() public isActive: boolean = false;
  @Input() public buttonName: string | undefined;
  @Input() public icon: boolean = false;

  ngOnInit(): void {
  }

}
