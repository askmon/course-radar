import { Course } from "../entities/course";
import { CourseGateway } from  "./course.contract";
import { CourseRepository } from "../mongo-db.connector";

export class CourseMongoGateway implements CourseGateway {

  getAllCourses(): Promise<Course[]> {
    return CourseRepository.get({});
  }

}
