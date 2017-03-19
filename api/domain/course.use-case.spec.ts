import 'es6-shim';
import 'reflect-metadata';
import { expect } from 'chai';
import 'mocha';
import { CourseMockGateway } from "../data/gateways/course.gateway.mock";
import { CourseUseCases } from "./course.use-case";
import { Course } from "./course";

describe('Get courses use case', () => {
  it('should return messages', async () => {
    let courseMockGateway = new CourseMockGateway();
    let courseUseCases = new CourseUseCases(courseMockGateway);
    let coursesActual = await courseUseCases.getCourses();
    let coursesExpected = await courseMockGateway.getAllCourses();
    expect(coursesActual.length).to.be.equal(coursesExpected.length);

  });
});
