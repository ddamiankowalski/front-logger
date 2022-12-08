import * as express from 'express';
import { Request, Response } from 'express';
import { sayHi } from './database/db';

sayHi()

const app = express();

declare const module: any;
var server: any;
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}

const {
  PORT = 3000,
} = process.env;
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'nietak',
  });
});

server = app.listen(PORT, () => {
  console.log('server startesd at http://localhsost:'+PORT);
});