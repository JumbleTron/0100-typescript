class Order {
	products: string[];
	deliveryAddress: string;
	paymentMethod: string;

	constructor(builder: OrderBuilder) {
		this.products = builder.products;
		this.deliveryAddress = builder.deliveryAddress;
		this.paymentMethod = builder.paymentMethod;
	}
}

class OrderBuilder {
	products: string[] = [];
	deliveryAddress: string = "";
	paymentMethod: string = "";

	withProducts(products: string[]): OrderBuilder {
		this.products = products;
		return this;
	}

	withDeliveryAddress(address: string): OrderBuilder {
		this.deliveryAddress = address;
		return this;
	}

	withPaymentMethod(method: string): OrderBuilder {
		this.paymentMethod = method;
		return this;
	}

	build(): Order {
		return new Order(this);
	}
}

const order = new OrderBuilder()
	.withProducts(["product1", "product2"])
	.withDeliveryAddress("Example Street 123")
	.withPaymentMethod("Credit Card")
	.build();

console.log(order);