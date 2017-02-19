import { Db, Server } from "mongodb";
import { Config } from "../../../config";

let dbName = Config.db.name;
let host = Config.db.host;
let port = Config.db.port;
let serverOptions = {auto_reconnect: true};
let dbOptions = {w:  1};

let db = new Db(dbName,
                new Server(host, port, serverOptions),
                dbOptions);

export class CourseRepository {
  private static courseCollection = db.collection("courses");


  static get(query: Object): Promise<any[]> {
    return db.open().then((db: Db): Promise<any[]> => {
      return db.collection("courses").find(query).toArray();
    });
  }
}
