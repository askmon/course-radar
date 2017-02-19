var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /^\s*(_?)(.+?)\1\s*$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

export class Injector {


  private servicesMap: Object;

  constructor(services: any[]) {
    this.servicesMap = new Object();
    for (let service of services) {
      if (service instanceof Function) {
        this.servicesMap[service.name.toLowerCase()] = service;
      } else {
        this.servicesMap[service[0].toLowerCase()] = service[1];
      }
    }
  }


  get(service: any): any {
    return this.getByName(service.name.toLowerCase());
  }

  private getByName(serviceName: string): any {
    if (serviceName in this.servicesMap) {
      let args = this.getArguments(this.servicesMap[serviceName]);
      let services = [];
      for (let arg of args) {
        services.push(this.getByName(arg.toLowerCase()));
      }
      return new this.servicesMap[serviceName](...services);
    } else {
      throw new Error("Class wasn`t passed in constructor");
    }
  }


  private removeComments(functionDefinition: Function): string {
    return functionDefinition.toString().replace(STRIP_COMMENTS,'');
  }

  private getArguments(functionDefinitionCleared: Function): string[] {
    let args = this.removeComments(functionDefinitionCleared)
                .match(FN_ARGS)[1]
    if (args === ''){
      return [];
    } else {
      return args.split(FN_ARG_SPLIT);
    }
  }

}
