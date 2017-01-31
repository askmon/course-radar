import * as Mongo from "mongodb";

let dbName = "courseRadar";
let host = "localhost";
let port = 27017;
let serverOptions = {auto_reconnect: true};
let dbOptions = {w:  1};

let db = new Mongo.Db("courseRadar",
                new Mongo.Server(host, port, serverOptions),
                dbOptions);
db.open(function() {});

export class CourseRepository {
  private courseCollection = db.collection("courses");

  get(query: Object, callback: (results: any[]) => void): void {
    this.courseCollection.find(query).toArray(
      function(err: Error, results: any[]): void {
          if (err != null) callback(results);
        }
      );
  }
}
