export class FrontLogger {
  private static _instance: FrontLogger;
  private static _backendInstance: string; 
  private static _socketServer: any;

  constructor() {}

  public static getInstance(): FrontLogger {
    if(!FrontLogger._instance) {
      FrontLogger._instance = new FrontLogger();
    }
    return FrontLogger._instance;
  }

  public static setConfig(backend: string, options?: any) {
    FrontLogger._backendInstance = backend;
  }

  public static socketConection(): Promise<any> {
    FrontLogger._socketServer = new WebSocket("ws://localhost:3000");

    return new Promise((resolve, reject) => {
      FrontLogger._socketServer.onopen = () => resolve(FrontLogger._socketServer);
      FrontLogger._socketServer.onerror = () => reject(new Error('There was a problem connecting to WS'))
    })
  }

  public static async log(message: any): Promise<any> {
    return fetch(FrontLogger._backendInstance, { method: 'POST', body: JSON.stringify(message) })
  }
}