import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './components/grid/grid.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
      GridComponent
  ],
    imports: [ 
        CommonModule,
        AgGridModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
      GridComponent
    ],
    providers: [],
})
export class GridModule {}