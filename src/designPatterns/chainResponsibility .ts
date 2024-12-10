interface OrderState {
	cancelOrder(): void;
	verifyPayment(): void;
	shipOrder(): void;
}

class Order2 {
	private state: OrderState;

	constructor() {
		this.state = new OrderPlacedState(this);
	}

	setState(state: OrderState) {
		this.state = state;
	}

	cancelOrder() {
		this.state.cancelOrder();
	}

	verifyPayment() {
		this.state.verifyPayment();
	}

	shipOrder() {
		this.state.shipOrder();
	}
}

class OrderPlacedState implements OrderState {
	constructor(private order: Order2) {}

	cancelOrder() {
		console.log("Anulowanie zamówienia...");
	}

	verifyPayment() {
		console.log("Weryfikacja płatności...");
		this.order.setState(new PaymentVerifiedState(this.order));
	}

	shipOrder() {
		console.log("Nie można wysłać nieopłaconego zamówienia")
	}
}

class PaymentVerifiedState implements OrderState {
	constructor(private order: Order2) {}

	cancelOrder() {
		console.log("Nie można anulować opłaconego zamówienia");
	}

	verifyPayment() {
		console.log("Płatność została już potweirdzona");
	}

	shipOrder() {
		console.log("Wysyłka zamówienia...")
	}
}
const order123 = new Order2();
order123.verifyPayment();
order123.shipOrder();