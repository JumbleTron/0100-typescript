let someNumber:'abc' = 'abc';
someNumber = 'abc';

let value = true;
value = false;
let someVar: any = false;
someVar = 25;
someVar = 'abbb';

let httpResponse: unknown = 5;
if (typeof httpResponse === 'number') {
  console.log(httpResponse + 1);
}

const someArray: number[] = [];
const person: [string, number, boolean] = ["Jan", 24, false];

enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isSunday(day: DaysOfWeek) {
  if (day === DaysOfWeek.Sunday) {
    console.log("Dzisiaj jest niedziela!");
  } else {
    console.log("Dzisiaj nie jest niedziela.");
  }
}

isSunday(DaysOfWeek.Monday);

const Person = {
  age: 24
} as const

//Person.age = 28;

type Colors = 'red' | 'green' | 'yellow';

type UserEmail = string;
const emailAddress: UserEmail = "test@mail.com";

let numberOrString: string | number = 'abc';
numberOrString = 5;

type Human = {
  age: number
}
type Animal = {
  kind: string
}

type Inter = Human & Animal;

const inter: Inter = {
  age: 5,
  kind: 'abc'
}

function createArray<T = string>(value: T, length: number): T[] {
  return Array(length).fill(value);
}

createArray<string>('abc', 5);
// createArray<false>(true, 5);
createArray(1, 5);
const interArray = createArray<Inter>(inter, 5);

class Queue<T = string> {
  private items: T[] = [];

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}

const stringQueue: Queue = new Queue();
stringQueue.enqueue('aaaa');

const numberQueue: Queue<number> = new Queue<number>();
numberQueue.enqueue(6);

// function reverseArray<T extends Array<U>, U>(arr: T): U[] {
//   return arr.length;
// }

// reverseArray([1,2,4,4]);
// const t= reverseArray(['ad', 'asds']);
// reverseArray('adsdsd');
// reverseArray(2);

function addNumbers(a: number, b: number): number {
  return a + b;
}
const sum: number = addNumbers(2,4);

function hello(name: string, age = 5): string {
  if (age) {
    return  `Hello ${name}, you are ${age} years old`
  }
  return `Hello ${name}`;
}
hello('aaa')

// function multiply(a: number, b: number): number {
//   return a * b;
// }
// function multiply(a: string, b: number): number {
//   return a.length * b;
// }

type ApiData = {
  total_items: number;
  data: unknown;
}

async function getDataFromApi(): Promise<ApiData> {
  const response = await fetch('https://api.example.com/data');
  return await response.json();
}
// (async () => {
//   const data = await getDataFromApi();
//   data.total_items;
// })();


function operation(a: number, b: number, onCompleted: (result: number) => string): void
{
  onCompleted(a+b);
}

operation(5,10, (result) => {
  console.log(result);
  return 'll';
})

const methodWIthAny = (someVar: any) => {

}
