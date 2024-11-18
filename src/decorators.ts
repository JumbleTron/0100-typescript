function log(_: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Wywołano metodę ${propertyKey} z argumentami ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Metoda ${propertyKey} zwróciła ${result}`);
    return result;
  };

  return descriptor;
}

//@todo add decorator to the class
class Car2 {
  brand: string;
  model: string;
  year: number;


  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  @log
  startEngine() {
    console.log('adsd');
    return 'Engine started!';
  }

}

const audi4 = new Car2('Audi', 'a4', 2024);
audi4.startEngine();
audi4.startEngine();