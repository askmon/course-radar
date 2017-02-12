import { Db, Server } from "mongodb";

let dbName = "courseRadar";
let host = "localhost";
let port = 27017;
let serverOptions = {auto_reconnect: true};
let dbOptions = {w:  1};

let db = new Db("courseRadar",
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
