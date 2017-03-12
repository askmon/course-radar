import { Config } from './config';
import { Server } from './server';

Config.configureDB().then(() => {
  let app = new Server();
  app.start("3000");
});
