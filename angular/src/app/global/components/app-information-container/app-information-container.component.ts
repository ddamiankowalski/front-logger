import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'app-information-container',
  templateUrl: './app-information-container.component.html'
})
export class AppInformationContainerComponent implements OnInit {

  constructor(
    private configuration: ConfigurationService
  ) { }

  public apps: Array<any> = [];

  public informationList: Array<any> = [
    { header: 'Contrain4You', icon: 'phone_android' },
    { header: 'Sanpol', icon: 'shower' },
    { header: 'Bricoman' }
  ]

  ngOnInit(): void {
    this.apps = this.configuration.getApps();
  }

}
