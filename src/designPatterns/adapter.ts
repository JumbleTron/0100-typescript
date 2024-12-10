interface PaymentProcessor {
	processPayment(amount: number): void;
}

class PaymentGateway {
	makePayment(amount: number) {
		console.log(`Payment of ${amount} processed by PaymentGateway.`);
	}
}

class PaymentAdapter implements PaymentProcessor {
	private paymentGateway: PaymentGateway;

	constructor() {
		this.paymentGateway = new PaymentGateway();
	}

	processPayment(amount: number) {
		this.paymentGateway.makePayment(amount);
	}
}

const paymentProcessor: PaymentProcessor = new PaymentAdapter();
paymentProcessor.processPayment(100);