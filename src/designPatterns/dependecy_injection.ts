import { injectable, inject } from "inversify";

interface Warrior {
	fight(): string;
	sneak(): string;
}

interface Weapon {
	hit(): string;
}

interface ThrowableWeapon {
	throw(): string;
}

const TYPES = {
	Warrior: Symbol.for("Warrior"),
	Weapon: Symbol.for("Weapon"),
	ThrowableWeapon: Symbol.for("ThrowableWeapon")
};

console.log(TYPES);

@injectable()
class Katana implements Weapon {
	public hit() {
		return "cut!";
	}
}

@injectable()
class Shuriken implements ThrowableWeapon {
	public throw() {
		return "hit!";
	}
}

@injectable()
class Ninja implements Warrior {

	private _katana: Weapon;
	private _shuriken: ThrowableWeapon;

	constructor(
		@inject(TYPES.Weapon) katana: Weapon,
		@inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
	) {
		this._katana = katana;
		this._shuriken = shuriken;
	}

	public fight() { return this._katana.hit(); }
	public sneak() { return this._shuriken.throw(); }

}

export { Ninja, Katana, Shuriken };