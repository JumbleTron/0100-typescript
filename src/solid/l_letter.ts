class BaseClass {
	exampleMethod() {
		return 'example';
	}
}

export class NestedClass extends BaseClass {
	getName() {
		return 'Nested';
	}
}

export class LiskovClass extends BaseClass {

}

export class LiskovExample {
	constructor(private readonly baseClass: BaseClass) {

	}

	someMethod() {
		this.baseClass.exampleMethod();
	}

	badMethod() {
		if (this.baseClass instanceof NestedClass) {
			this.baseClass.getName();
		}
	}
}

const use = new LiskovExample(new LiskovClass());
use.someMethod();