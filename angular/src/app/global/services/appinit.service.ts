import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { BackendService } from "./backend.service";
import { ConfigurationService } from "./configuration.service";

@Injectable()
export class AppInitService {
    constructor(
        private backend: BackendService,
        private configuration: ConfigurationService
    ) {}

    initializeApplication(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.backend.getApps()
                .pipe(
                    map(apps => apps.filter((app: any) => app.isActive))
                )
                .subscribe(apps => {
                    this.configuration.setConfigApps(apps);
                    console.log('Apps configured', this.configuration.getConfig());
                    resolve();
                })
        })
    }
}