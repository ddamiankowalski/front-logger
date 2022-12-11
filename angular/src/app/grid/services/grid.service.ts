import { Injectable } from "@angular/core";
import { ColDef } from "ag-grid-community";
import { Observable } from "rxjs";
import { BackendService } from "src/app/global/services/backend.service";

@Injectable()
export class GridService {
    constructor(
        private backend: BackendService
    ) {}

    public getColumnDefs(): ColDef[] {
        return [
            { field: 'id' },
            { field: 'logValue' },
            { field: 'createdAt' },
        ];
    }

    public getDefaultColDefs(): ColDef {
        return {
            sortable: true,
            filter: true,
            resizable: true,
            flex: 1
        }
    }

    public getData(appName: string): Observable<any> {
        return this.backend.getLogs(appName);
    }
}