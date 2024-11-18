var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
function log(_, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Wywo\u0142ano metod\u0119 ".concat(propertyKey, " z argumentami ").concat(args));
        var result = originalMethod.apply(this, args);
        console.log("Metoda ".concat(propertyKey, " zwr\u00F3ci\u0142a ").concat(result));
        return result;
    };
    return descriptor;
}
//@todo add decorator to the class
var Car2 = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _startEngine_decorators;
    return _a = /** @class */ (function () {
            function Car2(brand, model, year) {
                this.brand = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.brand = brand;
                this.model = model;
                this.year = year;
            }
            Car2.prototype.startEngine = function () {
                console.log('adsd');
                return 'Engine started!';
            };
            return Car2;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _startEngine_decorators = [log];
            __esDecorate(_a, null, _startEngine_decorators, { kind: "method", name: "startEngine", static: false, private: false, access: { has: function (obj) { return "startEngine" in obj; }, get: function (obj) { return obj.startEngine; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var audi4 = new Car2('Audi', 'a4', 2024);
audi4.startEngine();
audi4.startEngine();