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
		if (typeof newFrom !== 'number' || newFrom < 0) {
			throw new TypeError('Insert the number');
		}
		this._from = newFrom;
	}
	get from() {
		return this._from;
	}

	set to(newTo) {
		if (typeof newTo !== 'number' || this._from > newTo) {
			throw new TypeError('Insert the number');
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