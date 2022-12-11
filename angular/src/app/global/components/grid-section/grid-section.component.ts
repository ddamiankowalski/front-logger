import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'grid-section',
  templateUrl: './grid-section.component.html'
})
export class GridSectionComponent implements OnInit {

  constructor(
    private configuration: ConfigurationService
  ) { }

  public apps: any;

  ngOnInit(): void {
    this.apps = this.configuration.getApps();
  }

}
