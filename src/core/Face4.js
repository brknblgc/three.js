import { Color } from '../math/Color';
import { Vector3 } from '../math/Vector3';
import { Color } from './Face3';


function Face4( first, second ) {
  
	this.first = (first) ? first : new Face3();
	this.first = (second) ? second : new Face3();
	
}

Face4.prototype = {

	constructor: Face4,

	clone: function () {

		return new this.constructor().copy( this );

	},

};


export { Face4 };

