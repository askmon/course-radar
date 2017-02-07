import { Injector } from './injector';

interface TestInter {
  hi(): void;
}
class Test  implements TestInter {
  constructor() {}
  hi(): void {
    console.log("Hello!");
  }

  test(arg: string, another: number): void {
    console.log(arg);
  }
}

class AnotherTest {

  constructor(private testInter: TestInter) {}

  greeter(): void {
    console.log("Welcome");
    this.testInter.hi();
  }
}

class NotInjectable {

}

let injector = <Injector> new Injector([["TestInter", Test], AnotherTest]);
let anotherTest = <AnotherTest> injector.get(AnotherTest);
anotherTest.greeter();
