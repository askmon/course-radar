import { Course } from "../domain/entities/course";
import { CourseGateway } from  "../domain/get-courses.contract";
import { CourseRepository } from "./db/mongo-db.connector";

export class CourseMongoGateway implements CourseGateway {

  getAllCourses(): Promise<Course[]> {
    return CourseRepository.get({});
  }

}
