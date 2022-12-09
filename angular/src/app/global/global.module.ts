import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContainerComponent } from './app-container/app-container.component';

@NgModule({
    declarations: [
        AppContainerComponent
    ],
    imports: [ 
        CommonModule
    ],
    exports: [
        AppContainerComponent
    ],
    providers: [],
})
export class GlobalModule {}