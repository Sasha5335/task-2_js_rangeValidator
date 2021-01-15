'use strict';

class RangeValidator {
	/**
	 * @param {number} from 
	 * @param {number} to 
	 */

	constructor(from, to) {
		if (from >= to) {
			throw new RangeError('Number greater than maximum');
		}
		this._from = from;
		this._to = to;
	}

	set from(newFrom) {
		if (newFrom === 'number') {
			throw new TypeError('Insert the number');
		}
		this._from = newFrom;
	}
	get from() {
		return this._from;
	}

	set to(newTo) {
		if (newFrom === 'number') {
			throw new TypeError('Insert the number');
		}
		this._to = newTo;
	}
	get to() {
		return this._to;
	}

	getValidate(num) {
		if (num >= this.from && num <= this.to) {
			return num;
		}
		throw new TypeError('Number is out of range');
	}
}

const rangeValidator = new RangeValidator(18, 22);