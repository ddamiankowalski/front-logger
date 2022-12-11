import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    constructor(
        private http: HttpClient
    ) {}

    private backendUrl: string | undefined;

    private getRequest(suffix: string, options?: any): Observable<any> {
        const url = options?.appName ? suffix + '/' + options?.appName : suffix;
        return this.http.get('http://localhost:3000/' + url)
            .pipe(catchError(err => of([])));
    }

    public getLogs(appName: string): Observable<any> {
        return this.getRequest('log', { appName });
    }

    public getApps(): Observable<any> {
        return this.getRequest('apps');
    }
}