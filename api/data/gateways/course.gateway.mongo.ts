import { Course } from "../../domain/course";
import { CourseGateway } from  "../../domain/course.contract";
import { CourseRepository } from "../connectors/mongo-db.connector";

import { Service } from 'typedi';

@Service("mongo.gateway")
export class CourseMongoGateway implements CourseGateway {

  getAllCourses(): Promise<Course[]> {
    return CourseRepository.get({});
  }

}
