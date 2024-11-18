interface Cake {
  bake(): void;
}

class Brownie implements Cake {
    bake(): void {
        throw new Error("Method not implemented.");
    }
}

const someMethod = (cake: Brownie) => {};
const someMethod2 = (cake: Cake) => {};

interface PaymentGateway {
  pay(amount: number): void;
}

interface PaymentGatewayWithLogger extends PaymentGateway {

}

interface PaymentGatewayWithLogger {

}

type PaymentGatewayWithMetrics = {
  pay(amount: number): void;
}

interface Abc extends PaymentGatewayWithMetrics {

}

class PaymentGatewayA implements PaymentGateway {
  pay(amount: number): void {}
}
class PaymentGatewayB implements PaymentGateway {
  pay(amount: number): void {}
}

class StripePaymentGateway {
  payForBasket(basketId: number, amount: number) {}
}

const checkout = (gateway: PaymentGateway) => {
  gateway.pay(500);
}

checkout(new PaymentGatewayB())

class Base {

}

class Base2 {

}

class Nested extends Base implements PaymentGateway, PaymentGatewayA {
    pay(amount: number): void {
        throw new Error("Method not implemented.");
    }
}




