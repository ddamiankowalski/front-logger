import { Injectable } from "@angular/core";
import { ColDef } from "ag-grid-community";
import { Observable, of } from "rxjs";

@Injectable()
export class GridService {
    constructor() {}

    public getColumnDefs(): ColDef[] {
        return [
            { field: 'make' },
            { field: 'price' },
            { field: 'model' },
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

    public getData(): Observable<any> {
        return of(
            { make: 'Toyota', model: 'Celica', price: 35000 },
            { make: 'Ford', model: 'Mondeo', price: 32000 },
            { make: 'Porsche', model: 'Boxster', price: 72000 }
        )
    }
}