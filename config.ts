import * as dotenv from 'dotenv';
dotenv.config();

declare var process;

export class Config {

  static db: any =
  {
    name: process.env.DB_NAME || 'courseRadar',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
  }
}
