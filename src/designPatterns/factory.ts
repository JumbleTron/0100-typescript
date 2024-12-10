interface AnimalFactoryInterface {
	kind: string;
	voice(): void;
}

class Dog2 implements AnimalFactoryInterface {
	kind: string;

	constructor(kind: string, age: number) {
		this.kind = kind;
	}

	voice() {
		console.log("Hau hau!");
	}
}

class Cat implements AnimalFactoryInterface {
	kind: string;

	constructor(kind: string) {
		this.kind = kind;
	}

	voice() {
		console.log("Miau miau!");
	}
}

class Bird implements AnimalFactoryInterface {
	kind: string;

	constructor(kind: string) {
		this.kind = kind;
	}

	voice() {
		console.log("Ciu ciu!");
	}
}

class AnimalFactory {
	static create(kind: string): AnimalFactoryInterface {
		switch (kind) {
			case "dog":
				return new Dog2(kind, 20);
			case "cat":
				return new Cat(kind);
			case "bird":
				return new Bird(kind);
			default:
				throw new Error("Unknow kind of animal!");
		}
	}
}

AnimalFactory.create('dog');
AnimalFactory.create('dog');
AnimalFactory.create('dog');