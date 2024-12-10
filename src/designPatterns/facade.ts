interface FoodOrderingSystem {
	placeOrder(): void;
}

class OnlineMenu {
	getAvailableItems(): void {
		console.log('Displaying the available items in the online menu...');
	}

	selectItem(): void {
		console.log('Selecting an item from the online menu...');
	}
}

class Cart {
	addItem(): void {
		console.log('Adding an item to the cart...');
	}

	removeItem(): void {
		console.log('Removing an item from the cart...');
	}

	checkout(): void {
		console.log('Checking out the items in the cart...');
	}
}

class Payment {
	processPayment(): void {
		console.log('Processing the payment for the order...');
	}
}

class FoodOrderingFacade implements FoodOrderingSystem {
	private onlineMenu: OnlineMenu;
	private cart: Cart;
	private payment: Payment;

	constructor() {
		this.onlineMenu = new OnlineMenu();
		this.cart = new Cart();
		this.payment = new Payment();
	}

	placeOrder(): void {
		this.onlineMenu.getAvailableItems();
		this.onlineMenu.selectItem();
		this.cart.addItem();
		//this.cart.removeItem();
		this.cart.checkout();
		this.payment.processPayment();
		console.log('Received the order successfully!');
	}
}

class Customer {
	private foodOrderingSystem: FoodOrderingSystem;

	constructor() {
		this.foodOrderingSystem = new FoodOrderingFacade();
	}

	orderFood(): void {
		console.log('Placing an order for food...');
		this.foodOrderingSystem.placeOrder();
	}
}

// Usage
const customer = new Customer();
customer.orderFood();