import { Service, Inject } from "typedi";
import { Db } from 'mongodb';
import { Course } from "../../domain/course";
import { CourseGateway } from  "../../domain/course.contract";
import { CourseRepository } from "../connectors/mongo-db.connector";

@Service()
export class CourseMongoGateway implements CourseGateway {

  private collectionName: string = "courses";

  constructor(@Inject("database") private db: Db) {}

  async getAllCourses(): Promise<Course[]> {
    try {
      return this.db.collection(this.collectionName).find({}).toArray();
    } catch (e) {
      console.log(e);
      return [];
    }
  }

}
