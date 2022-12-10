import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { GridModule } from '../grid/grid.module';

@NgModule({
    declarations: [
        AppContainerComponent
    ],
    imports: [ 
        CommonModule,
        GridModule
    ],
    exports: [
        AppContainerComponent
    ],
    providers: [],
})
export class GlobalModule {}