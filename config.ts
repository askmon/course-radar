import { MongoClient, Db } from 'mongodb';
import { Container } from 'typedi';
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

  static async configureDB(): Promise<void> {
    try {
      let db = await MongoClient.connect(Config.getConnectionUrl());
      Container.set("database", db);
      return;
    } catch (e) {
      console.log(e);
      throw new Error("Falied to connect to database.");
    }
  }

  static getConnectionUrl(): string {
     return 'mongodb://' + Config.db.host + ':' + Config.db.port + '/' + Config.db.name;
  }
}
