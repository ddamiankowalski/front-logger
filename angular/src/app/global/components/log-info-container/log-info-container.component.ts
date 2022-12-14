import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'log-info-container',
  templateUrl: './log-info-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInfoContainerComponent implements OnInit {

  constructor() { }

  public information: Array<any> = [
    {
      name: 'all logs',
      icon: 'rocket_launh'
    },
    {
      name: 'erorrs',
      icon: 'error'
    },
    {
      name: 'alerts',
      icon: 'person'
    }
  ];

  ngOnInit(): void {
  }

}
