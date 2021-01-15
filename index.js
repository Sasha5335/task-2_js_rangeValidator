'use strict';

class RangeValidator {
	/**
	 * @param {number} from 
	 * @param {number} to 
	 */

	constructor(from, to) {
		this.from = from;
		this.to = to;
	}

	set from(newFrom) {
		if (typeof newFrom !== 'number') {
			throw new TypeError('Insert the number');
		}
		if (newFrom < 0) {
			throw new RangeError();
		}
		this._from = newFrom;
	}
	get from() {
		return this._from;
	}

	set to(newTo) {
		if (typeof newTo !== 'number') {
			throw new TypeError('Insert the number');
		}
		if (this._from > newTo) {
			throw new RangeError();
		}
		this._to = newTo;
	}
	get to() {
		return this._to;
	}

	get range() {
		return [this._from, this._to];
	}

	validate(num) {
		if (num >= this.from && num <= this.to) {
			return num;
		}
		throw new TypeError('Number is out of range');
	}
}

const rangeValidator = new RangeValidator(18, 22);