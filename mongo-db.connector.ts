import * as Mongo from "mongodb";

let dbName = "courseRadar";
let host = "localhost";
let port = 27017;
let serverOptions = {auto_reconnect: true};
let dbOptions = {w:  1};

let db = new Mongo.Db("courseRadar",
                new Mongo.Server(host, port, serverOptions),
                dbOptions);

export class CourseRepository {
  private static courseCollection = db.collection("courses");


  static get(query: Object, callback: (results: any[]) => void): void {
    db.open((err: Error, db: Mongo.Db): void => {
      db.collection("courses")
        .find(query).toArray().then((results: any[]) => {
          callback(results);
          db.close();
        });
    });
  }
}
