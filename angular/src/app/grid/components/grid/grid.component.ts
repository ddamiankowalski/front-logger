import { ChangeDetectionStrategy, Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
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
export class GridComponent implements OnInit, AfterViewInit {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(
    private grid: GridService
  ) {}

  @Input() public appName: string = '';

  public columnDefs: ColDef[] = this.grid.getColumnDefs();
  public defaultColDefs: ColDef = this.grid.getDefaultColDefs();
  public rowData$?: Observable<any> | undefined;

  public getRowId = (params: any) => params.data.id;

  ngOnInit(): void {
    this.rowData$ = this.grid.getData(this.appName);
  }

  public gridUpdated(event: any) {
    console.log(event)
  }

  public handleRowSelect(event: any) {
    console.log(event)
    this.agGrid.api.forEachNode(el => console.log(el))
  }

  ngAfterViewInit(): void {

  }
}
