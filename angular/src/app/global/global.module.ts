import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { GridModule } from '../grid/grid.module';
import { CardComponent } from './components/card/card.component';

/**
 * MATERIAL
 */
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GridSectionComponent } from './components/grid-section/grid-section.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DrawerContentComponent } from './components/drawer-content/drawer-content.component';
import { SidenavButtonComponent } from './components/sidenav-button/sidenav-button.component';
import { MatRippleModule } from '@angular/material/core';
import { AppInformationComponent } from './components/app-information/app-information.component';
import { AppInformationContainerComponent } from './components/app-information-container/app-information-container.component';
import { LogInfoContainerComponent } from './components/log-info-container/log-info-container.component';
import { LogInfoComponent } from './components/log-info/log-info.component';

@NgModule({
    declarations: [
        AppContainerComponent,
        CardComponent,
        GridSectionComponent,
        ToolbarComponent,
        MenuButtonComponent,
        DrawerContentComponent,
        SidenavButtonComponent,
        AppInformationComponent,
        AppInformationContainerComponent,
        LogInfoContainerComponent,
        LogInfoComponent,
    ],
    imports: [ 
        CommonModule,
        GridModule,
        MatSlideToggleModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatRippleModule
    ],
    exports: [
        AppContainerComponent
    ],
    providers: [],
})
export class GlobalModule {}