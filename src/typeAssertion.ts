let exampleValue: any = 'Hello';
let exampleValueLength: number = (exampleValue as string).length;
let exampleValueLength2: number = (<string>exampleValue).length;
let listOfString:string[] = [];

type Animal4 = {
	name: string
}

function getAnimalAndCategoryName(animal: Animal4): string {
	if (!animal.name) {
		return 'N/A';
	}

	return getAnimalCategory(animal.name) +  animal.name;
}
const getAnimalCategory = (name: string): string => {
	if (name === 'Wolf') {
		return 'Mammal'
	}
	return 'N/A';
}

getAnimalAndCategoryName({ name: null } as unknown as Animal4)
const animalExample = { name: null };

setTimeout(() => {
	return getAnimalCategory(animalExample.name!) +  animalExample.name;
})

type OrderId = string & { readonly brand: unique symbol};
type UserId = string & { readonly brand: unique symbol};

let id: OrderId = 'adsd' as unknown as OrderId;
let userUd: UserId = 'bcd' as unknown as UserId;

function queryUser(id: UserId): void {
	console.log(id);
}
//queryUser("gg");
interface Array<T> {
	odd<U>(list: U[]): T[]
}

Array.prototype.odd = function <T>(this: T[]): T[] {
	return this.filter((v) => v as number % 2 === 0)
}