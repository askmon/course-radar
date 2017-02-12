import { Course } from "../../domain/course";
import { CourseGateway } from  "../../domain/course.contract";
import { CourseRepository } from "../connectors/mongo-db.connector";

export class CourseMongoGateway implements CourseGateway {

  getAllCourses(): Promise<Course[]> {
    return CourseRepository.get({});
  }

}
