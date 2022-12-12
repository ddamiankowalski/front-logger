const FILE_NAME = 'frontlogger.json';

const fsp = require('fs').promises,
      path = require('path'),
      fs = require('fs')

let find: any = async (dir = __dirname, prevDir?: string) => {
  let ls = await fsp.readdir(dir);
  if(ls.includes(FILE_NAME))
    return path.join(dir,FILE_NAME);
  else if(dir === '/' || dir === prevDir)
    throw new Error(`In order to use the front-logger please include the ${FILE_NAME} file in the root of the project`);
  else {
    return find(path.resolve(dir,'..'), dir);
  }
}

export const Greeter = async (name: string): Promise<any> => {
    find()
        .then((config: any) => readConfig(config))
        .catch((err: any) => console.log(err))
}; 

const readConfig = (config: string): void => {
    const configJson = fs.readFileSync(config);
    let parsedConfig = JSON.parse(configJson);
    console.log(parsedConfig);
}