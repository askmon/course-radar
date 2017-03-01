import { Service } from "typedi";
import { Course } from "../../domain/course";
import { CourseGateway } from  "../../domain/course.contract";
import { CourseRepository } from "../connectors/mongo-db.connector";

@Service("course.gateway.mongo")
export class CourseMongoGateway implements CourseGateway {

  getAllCourses(): Promise<Course[]> {
    return CourseRepository.get({});
  }

}
