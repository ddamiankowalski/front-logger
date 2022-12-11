import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  private configuration: any = {};

  public getConfig(): any {
    return this.configuration;
  }

  public getApps(): Array<any> {
    return this.configuration.apps;
  }

  public setConfigApps(apps: any): void {
    this.configuration.apps = apps;
  }
}
