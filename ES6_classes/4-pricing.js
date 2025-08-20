import Currency from './3-currency.js';

export default class Pricing {
	constructor(amount, currency) {
		if (typeof amount !== "number") {
			throw new TypeError("amount mus be a number");
		}
		if (!(currency instanceof Currency)) {
			throw new TypeError("currency must be an instance of Currency");
		}
		this._amount = amount;
		this._currency = currency;
	}

	get amount() {
		return this._amount;
	}

	set amount(newAmount) {
		if (typeof newAmount !== "number") {
			throw new TypeError("amount must be a number");
		}
		this._amount = newAmount;
	}

	get currency() {
		return this._currency;
	}

	set currency(newCurrency) {
		if (!(newCurrency instanceof Currency)) {
			throw new TypeError("currency must be an instance currency");
		}
		this._currency = newCurrency;
	}

	displayFullPrice() {
		return `${this.amount} ${this.currency.name} (${this.currency.code})`;
	}

	static convertPrice(amount, conversionRate) {
		if (typeof amount !== "number") {
			throw new TypeError("amount must be a number");
		}
		if (typeof conversionRate !== "number") {
			throw new TypeError("conversion rate must be a number");
		}
		return amount * conversionRate;
	}
}