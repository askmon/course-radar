import { Db, Server, Collection } from "mongodb";
import { Config } from "../../config";
import { Course } from "../models/course";
import { CourseRepository } from "./course-repository-interface";

let dbName = Config.db.name;
let host = Config.db.host;
let port = Config.db.port;
let serverOptions = {auto_reconnect: true};
let dbOptions = {w:  1};

let db = new Db(dbName,
                new Server(host, port, serverOptions),
                dbOptions);

export class CourseMongoRepository implements CourseRepository {

  private db: Db;

  constructor() {
    this.db = db;
  }

  update(courses: Array<Course>): Promise<any[]> {
    this.db.open().then(db => {
      let coursesCollection: Collection = db.collection("courses");
      courses.forEach(course => this.updateCourse(course, coursesCollection));
    });
    return null;
  }

  private updateCourse(course: Course, courses: Collection): void {
    courses.update({"course.name": course.name}, course, {upsert: true})
           .catch(console.log);
  }
}
