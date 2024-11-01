/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert-is-plain-object' );
var isArray = require( '@stdlib/assert-is-array' );
var Slice = require( '@stdlib/slice-ctor' );
var pkg = require( './../package.json' ).name;
var MultiSlice = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation:nargs=1', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = MultiSlice( i ); // eslint-disable-line new-cap
		if ( !( out instanceof MultiSlice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof MultiSlice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,new:nargs=1', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = new MultiSlice( i );
		if ( !( out instanceof MultiSlice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof MultiSlice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation:nargs=2', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = MultiSlice( 0, i ); // eslint-disable-line new-cap
		if ( !( out instanceof MultiSlice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof MultiSlice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,new:nargs=2', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = new MultiSlice( 0, i );
		if ( !( out instanceof MultiSlice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof MultiSlice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation:nargs=3', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = MultiSlice( 0, i, 1 ); // eslint-disable-line new-cap
		if ( !( out instanceof MultiSlice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof MultiSlice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,new:nargs=3', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = new MultiSlice( 0, i, 1 );
		if ( !( out instanceof MultiSlice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof MultiSlice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation:nargs=4', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = MultiSlice( 0, i, 1, 4 ); // eslint-disable-line new-cap
		if ( !( out instanceof MultiSlice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof MultiSlice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,new:nargs=4', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = new MultiSlice( 0, i, 1, 4 );
		if ( !( out instanceof MultiSlice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof MultiSlice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation:nargs=5', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = MultiSlice( 0, i, 1, 4, 5 ); // eslint-disable-line new-cap
		if ( !( out instanceof MultiSlice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof MultiSlice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,new:nargs=5', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = new MultiSlice( 0, i, 1, 4, 5 );
		if ( !( out instanceof MultiSlice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof MultiSlice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation:nargs=6', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = MultiSlice( 0, i, 1, 4, 5, 6 ); // eslint-disable-line new-cap
		if ( !( out instanceof MultiSlice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof MultiSlice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,new:nargs=6', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = new MultiSlice( 0, i, 1, 4, 5, 6 );
		if ( !( out instanceof MultiSlice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof MultiSlice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:ndims', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new MultiSlice( 10 ),
		new MultiSlice( 15 ),
		new MultiSlice( 0, 10 ),
		new MultiSlice( null, 10 ),
		new MultiSlice( null, 10, null ),
		new MultiSlice( 0, 10, 1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].ndims;
		if ( typeof out !== 'number' ) {
			b.fail( 'should return an integer' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:data', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new MultiSlice( 10 ),
		new MultiSlice( 15 ),
		new MultiSlice( 0, 10 ),
		new MultiSlice( null, 10 ),
		new MultiSlice( null, 10, null ),
		new MultiSlice( 0, 10, 1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].data;
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toString:ndims=1', function benchmark( b ) {
	var values;
	var slices;
	var out;
	var s;
	var i;

	slices = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];
	values = [];
	for ( i = 0; i < slices.length; i++ ) {
		s = slices[ i ];
		values.push( new MultiSlice( s ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].toString();
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toString:ndims=2', function benchmark( b ) {
	var values;
	var slices;
	var out;
	var s;
	var i;

	slices = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];
	values = [];
	for ( i = 0; i < slices.length; i++ ) {
		s = slices[ i ];
		values.push( new MultiSlice( s, s ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].toString();
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toString:ndims=3', function benchmark( b ) {
	var values;
	var slices;
	var out;
	var s;
	var i;

	slices = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];
	values = [];
	for ( i = 0; i < slices.length; i++ ) {
		s = slices[ i ];
		values.push( new MultiSlice( s, s, s ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].toString();
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toString:ndims=4', function benchmark( b ) {
	var values;
	var slices;
	var out;
	var s;
	var i;

	slices = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];
	values = [];
	for ( i = 0; i < slices.length; i++ ) {
		s = slices[ i ];
		values.push( new MultiSlice( s, s, s, s ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].toString();
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toString:ndims=5', function benchmark( b ) {
	var values;
	var slices;
	var out;
	var s;
	var i;

	slices = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];
	values = [];
	for ( i = 0; i < slices.length; i++ ) {
		s = slices[ i ];
		values.push( new MultiSlice( s, s, s, s, s ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].toString();
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toJSON:ndims=1', function benchmark( b ) {
	var values;
	var slices;
	var out;
	var s;
	var i;

	slices = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];
	values = [];
	for ( i = 0; i < slices.length; i++ ) {
		s = slices[ i ];
		values.push( new MultiSlice( s ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].toJSON();
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toJSON:ndims=2', function benchmark( b ) {
	var values;
	var slices;
	var out;
	var s;
	var i;

	slices = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];
	values = [];
	for ( i = 0; i < slices.length; i++ ) {
		s = slices[ i ];
		values.push( new MultiSlice( s, s ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].toJSON();
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toJSON:ndims=3', function benchmark( b ) {
	var values;
	var slices;
	var out;
	var s;
	var i;

	slices = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];
	values = [];
	for ( i = 0; i < slices.length; i++ ) {
		s = slices[ i ];
		values.push( new MultiSlice( s, s, s ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].toJSON();
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toJSON:ndims=4', function benchmark( b ) {
	var values;
	var slices;
	var out;
	var s;
	var i;

	slices = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];
	values = [];
	for ( i = 0; i < slices.length; i++ ) {
		s = slices[ i ];
		values.push( new MultiSlice( s, s, s, s ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].toJSON();
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toJSON:ndims=5', function benchmark( b ) {
	var values;
	var slices;
	var out;
	var s;
	var i;

	slices = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];
	values = [];
	for ( i = 0; i < slices.length; i++ ) {
		s = slices[ i ];
		values.push( new MultiSlice( s, s, s, s, s ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].toJSON();
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
