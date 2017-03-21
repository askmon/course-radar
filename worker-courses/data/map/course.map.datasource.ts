import { UdacityMapper, CourseraMapper } from './mappers'

export class CourseMapDatasource {

  public getCourseMaps () : Array<any> {
    let maps = [];
    maps.push(new UdacityMapper());
    maps.push(new CourseraMapper());
    return maps;
  }
}
