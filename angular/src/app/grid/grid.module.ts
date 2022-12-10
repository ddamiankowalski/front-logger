import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
    declarations: [
    GridComponent
  ],
    imports: [ 
        CommonModule,
        AgGridModule
    ],
    exports: [
      GridComponent
    ],
    providers: [],
})
export class GridModule {}