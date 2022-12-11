import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './app-information.component.html'
})
export class AppInformationComponent implements OnInit {

  constructor() { }

  public header: string | undefined = 'Yeader';

  ngOnInit(): void {
  }

}
