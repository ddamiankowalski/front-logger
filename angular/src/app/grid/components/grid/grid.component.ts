import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { GridService } from '../../services/grid.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  providers: [GridService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(
    private grid: GridService
  ) {}

  public columnDefs: ColDef[] = this.grid.getColumnDefs();
  public defaultColDefs: ColDef = this.grid.getDefaultColDefs();
  public rowData$?: Observable<any> = this.grid.getData();


  ngOnInit(): void {
    this.rowData$ = this.grid.getData();
  }
}
