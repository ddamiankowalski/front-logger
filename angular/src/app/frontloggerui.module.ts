import { NgModule, Component, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalModule } from './global/global.module';

import { AppInitService } from './global/services/appinit.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

function appInitFactory(appInitService: AppInitService) {
  return (): Promise<any> => appInitService.initializeApplication();
}

@Component({
  selector: 'front-logger-ui',
  template: `
    <app-container></app-container>
  `
})
export class FrontLoggerUI {
  constructor() {}
}

@NgModule({
  declarations: [
    FrontLoggerUI
  ],
  imports: [
    BrowserModule,
    GlobalModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER, 
      useFactory: appInitFactory,
      deps: [AppInitService],
      multi: true
    },
  ],
  bootstrap: [FrontLoggerUI]
})
export class FrontLoggerModule { }
