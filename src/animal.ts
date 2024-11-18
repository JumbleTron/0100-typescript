class Animal2 {
  constructor(
    public readonly years: number,
    public readonly hasTail: boolean
  ) {}

  howhow() {
    console.log(`aaaaa`);
  }

  protected getHumanAge() {
    return this.years * 4;
  }
}

class Dog extends Animal2 {
  constructor(years: number, public readonly name: string) {
    super(years, true);
  }


  howhow() {
    super.howhow();
    console.log(`${this.name} howhowhowo`);
  }

  getAge() {
    return this.getHumanAge();
  }

}

const someAnimal = new Animal2(1, false);
const burek = new Dog(3, 'Burek');
console.log(burek.hasTail);
burek.howhow();
console.log(burek.getAge());