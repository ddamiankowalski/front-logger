import { ChangeDetectionStrategy, Component, OnInit, ViewChild, Input } from '@angular/core';
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

  @Input() public appName: string = '';

  public columnDefs: ColDef[] = this.grid.getColumnDefs();
  public defaultColDefs: ColDef = this.grid.getDefaultColDefs();
  public rowData$?: Observable<any> | undefined;

  ngOnInit(): void {
    this.rowData$ = this.grid.getData(this.appName);
  }
}
