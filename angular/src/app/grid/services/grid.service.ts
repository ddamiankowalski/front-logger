import { Injectable } from "@angular/core";
import { ColDef } from "ag-grid-community";
import { Observable, Subject } from "rxjs";
import { BackendService } from "src/app/global/services/backend.service";

@Injectable()
export class GridService {
    constructor(
        private backend: BackendService
    ) {}

    public getColumnDefs(): ColDef[] {
        return [
            { 
                field: 'logValue', 
                checkboxSelection: true, 
                headerName: 'Log Value',
                minWidth: 150,
                flex: 2
            },
            { 
                field: 'createdAt', 
                headerName: 'Date Created',
                minWidth: 150,
                valueFormatter: this.dateFormatter
            },
        ];
    }

    public getDefaultColDefs(): ColDef {
        return {
            sortable: true,
            filter: true,
            resizable: true,
            flex: 1,
        }
    }

    public getData(appName: string): Observable<any> {
        return this.backend.getLogs(appName);
    }

    private dateFormatter(params: any): string {
        return new Date(Date.parse(params.value)).toLocaleDateString();
    }

    public refresh$: Subject<any> = new Subject();

    public refreshGrid(): void {
        this.refresh$.next(true);
    }
}