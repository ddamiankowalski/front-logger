export declare class FrontLogger {
    private static _instance;
    private static _backendInstance;
    private static _socketServer;
    constructor();
    static getInstance(): FrontLogger;
    static setConfig(backend: string, options?: any): void;
    static socketConection(): Promise<any>;
    static log(message: any): Promise<any>;
}
