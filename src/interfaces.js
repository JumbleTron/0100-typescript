var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Brownie = /** @class */ (function () {
    function Brownie() {
    }
    Brownie.prototype.bake = function () {
        throw new Error("Method not implemented.");
    };
    return Brownie;
}());
var someMethod = function (cake) { };
var someMethod2 = function (cake) { };
var PaymentGatewayA = /** @class */ (function () {
    function PaymentGatewayA() {
    }
    PaymentGatewayA.prototype.pay = function (amount) { };
    return PaymentGatewayA;
}());
var PaymentGatewayB = /** @class */ (function () {
    function PaymentGatewayB() {
    }
    PaymentGatewayB.prototype.pay = function (amount) { };
    return PaymentGatewayB;
}());
var StripePaymentGateway = /** @class */ (function () {
    function StripePaymentGateway() {
    }
    StripePaymentGateway.prototype.payForBasket = function (basketId, amount) { };
    return StripePaymentGateway;
}());
var checkout = function (gateway) {
    gateway.pay(500);
};
checkout(new PaymentGatewayB());
var Base = /** @class */ (function () {
    function Base() {
    }
    return Base;
}());
var Base2 = /** @class */ (function () {
    function Base2() {
    }
    return Base2;
}());
var Nested = /** @class */ (function (_super) {
    __extends(Nested, _super);
    function Nested() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nested.prototype.pay = function (amount) {
        throw new Error("Method not implemented.");
    };
    return Nested;
}(Base));
