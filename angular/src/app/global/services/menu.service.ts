import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    constructor() {}

    public expanded$: Subject<boolean> = new Subject();
}