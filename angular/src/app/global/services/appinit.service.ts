import { Injectable } from "@angular/core";

@Injectable()
export class AppInitService {
    constructor() {}

    initializeApplication(): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log('App has been succesfully initialized');
            resolve();
        })
    }
}