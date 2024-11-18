abstract class Shape {
  protected constructor(private name: string) {}
  abstract getArea(): number;

  sayHello() {
    console.log('Hello from abstract ' + this.name);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super('Circle');
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const circle = new Circle(2);
circle.getArea();
circle.sayHello();

class NoExtend {
  private static instance?: NoExtend;

  private constructor() {}
  public static getInstance(): NoExtend {
    if (this.instance == null) {
      this.instance = new NoExtend();
    }
    return this.instance;
  }

  sayHello() {
    console.log('Hello from NoExtend class');
  }

}
//
// class Child extends NoExtend {
//
// }

const classInstance = NoExtend.getInstance();
classInstance.sayHello();