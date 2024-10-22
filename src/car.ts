class Car {
  private readonly year: number;
  public readonly model: string;
  private _power: number;

  constructor(y: number, m:string, p:number) {
    this.year = y;
    this.model = m;
    this._power = p;
  }

  set power(value: number) {
    this._power = value;
  }
  get power(): number {
    return this._power;
  }
}

const audi = new Car(2000, 'a4', 100);
console.log(audi.power);
audi.power = 200;
console.log(audi.power);

class CarNew {
  constructor(
    public readonly year: number,
    public readonly model: string,
    public power: number,
  ) {
  }
}

const bmw = new CarNew(2000, '3', 200);
bmw.power = 200;