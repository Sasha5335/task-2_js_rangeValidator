'use strict';

class RangeValidator {
	/**
	 * @param {number} from 
	 * @param {number} to 
	 */

	constructor(from, to) {
		this._from = from;
		this._to = to;
	}

	set from(newFrom) {
		if (newFrom >= this.to || newFrom < 0) {
			throw new RangeError('Number greater than maximum or less than allowed');
		}
		this._from = newFrom;
	}
	get from() {
		return this._from;
	}

	set to(newTo) {
		this._to = newTo;
	}
	get to() {
		return this._to;
	}

	getterRange() {

	}

	validate(num) {
		if (num >= this.from && num <= this.to) {
			return true;
		}
		return false;
	}
}

const rangeValidator = new RangeValidator(18, 22);