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

var tape = require( 'tape' );
var instanceOf = require( '@stdlib/assert-instance-of' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var hasProp = require( '@stdlib/assert-has-property' );
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var isArray = require( '@stdlib/assert-is-array' );
var isSlice = require( '@stdlib/assert-is-slice' );
var isFunction = require( '@stdlib/assert-is-function' );
var S = require( '@stdlib/slice-ctor' );
var MultiSlice = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof MultiSlice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a MultiSlice constructor', function test( t ) {
	var slice;
	var nargs;
	var args;
	var arr;
	var s;
	var i;

	slice = new S( 2, 10, 1 );

	args = [
		[],
		[ 10 ],
		[ null ],
		[ void 0 ],
		[ slice ],
		[ 0, 10 ],
		[ 0, null ],
		[ null, 10 ],
		[ slice, slice ],
		[ 0, 10, 10 ],
		[ 0, slice, void 0 ],
		[ 0, slice, slice, null ],
		[ null, slice, void 0, slice, 10 ]
	];
	for ( i = 0; i < args.length; i++ ) {
		arr = args[ i ];
		nargs = arr.length;
		if ( nargs === 0 ) {
			s = new MultiSlice();
		} else if ( nargs === 1 ) {
			s = new MultiSlice( arr[ 0 ] );
		} else if ( nargs === 2 ) {
			s = new MultiSlice( arr[ 0 ], arr[ 1 ] );
		} else if ( nargs === 3 ) {
			s = new MultiSlice( arr[ 0 ], arr[ 1 ], arr[ 2 ] );
		} else if ( nargs === 4 ) {
			s = new MultiSlice( arr[ 0 ], arr[ 1 ], arr[ 2 ], arr[ 3 ] );
		} else if ( nargs === 5 ) {
			s = new MultiSlice( arr[ 0 ], arr[ 1 ], arr[ 2 ], arr[ 3 ], arr[ 4 ] ); // eslint-disable-line max-len
		} else if ( nargs === 6 ) {
			s = new MultiSlice( arr[ 0 ], arr[ 1 ], arr[ 2 ], arr[ 3 ], arr[ 4 ], arr[ 5 ] ); // eslint-disable-line max-len
		}
		t.strictEqual( instanceOf( s, MultiSlice ), true, 'returns an instance for arguments ' + i );
	}
	t.end();
});

tape( 'the function does not require the `new` keyword', function test( t ) {
	var mslice;
	var slice;
	var args;
	var s;
	var i;

	mslice = MultiSlice;
	slice = new S( 2, 10, 1 );

	args = [
		[],
		[ 10 ],
		[ null ],
		[ void 0 ],
		[ slice ],
		[ 0, 10 ],
		[ 0, null ],
		[ null, 10 ],
		[ s, s ],
		[ 0, 10, 10 ],
		[ 0, s, void 0 ],
		[ 0, s, s, null ],
		[ null, s, void 0, s, 10 ]
	];
	for ( i = 0; i < args.length; i++ ) {
		s = mslice.apply( null, args[ i ] );
		t.strictEqual( instanceOf( s, MultiSlice ), true, 'returns an instance for arguments ' + i );
	}
	t.end();
});

tape( 'attached to the constructor is a `name` property', function test( t ) {
	t.strictEqual( MultiSlice.name, 'MultiSlice', 'returns expected value' );
	t.end();
});

tape( 'the constructor throws an error if provided an invalid first argument (nargs=1,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( value ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid first argument (nargs=2,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( value, 2 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid first argument (nargs=3,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( value, 2, 3 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid first argument (nargs=4,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( value, 2, 3, 4 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid first argument (nargs=5,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( value, 2, 3, 4, 5 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid first argument (nargs=2,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( value, 2 );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid first argument (nargs=3,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( value, 2, 3 );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid first argument (nargs=4,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( value, 2, 3, 4 );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid first argument (nargs=5,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( value, 2, 3, 4, 5 );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid second argument (nargs=2,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( 1, value ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid second argument (nargs=3,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( 1, value, 3 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid second argument (nargs=4,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( 1, value, 3, 4 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid second argument (nargs=5,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( 1, value, 3, 4, 5 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid second argument (nargs=2,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( 1, value );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid second argument (nargs=3,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( 1, value, 3 );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid second argument (nargs=4,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( 1, value, 3, 4 );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid second argument (nargs=5,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( 1, value, 3, 4, 5 );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid third argument (nargs=3,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( 1, 2, value ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid third argument (nargs=4,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( 1, 2, value, 4 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid third argument (nargs=5,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( 1, 2, value, 4, 5 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid third argument (nargs=3,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( 1, 2, value );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid third argument (nargs=4,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( 1, 2, value, 4 );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid third argument (nargs=5,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( 1, 2, value, 4, 5 );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid fourth argument (nargs=4,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( 1, 2, 3, value ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid fourth argument (nargs=5,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( 1, 2, 3, value, 5 ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid fourth argument (nargs=4,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( 1, 2, 3, value );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid fourth argument (nargs=5,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( 1, 2, 3, value, 5 );
		};
	}
});

tape( 'the constructor throws an error if provided an invalid fifth argument (nargs=5,new)', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			new MultiSlice( 1, 2, 3, 4, value ); // eslint-disable-line no-new
		};
	}
});

tape( 'the constructor throws an error if provided an invalid fifth argument (nargs=5,no new)', function test( t ) {
	var values;
	var mslice;
	var i;

	mslice = MultiSlice;

	values = [
		'3',
		3.14,
		NaN,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badvalue() {
			mslice( 1, 2, 3, 4, value );
		};
	}
});

tape( 'a multi-slice has an `ndims` property specifying the number of slice dimensions', function test( t ) {
	var s;

	s = new MultiSlice();
	t.strictEqual( hasOwnProp( s, 'ndims' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'ndims' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( s.ndims ), true, 'is a nonnegative integer' );
	t.strictEqual( s.ndims, 0, 'returns expected value' );

	s = new MultiSlice( 0 );
	t.strictEqual( hasOwnProp( s, 'ndims' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'ndims' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( s.ndims ), true, 'is a nonnegative integer' );
	t.strictEqual( s.ndims, 1, 'returns expected value' );

	s = new MultiSlice( 1, 1 );
	t.strictEqual( hasOwnProp( s, 'ndims' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'ndims' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( s.ndims ), true, 'is a nonnegative integer' );
	t.strictEqual( s.ndims, 2, 'returns expected value' );

	s = new MultiSlice( 2, 2, 2 );
	t.strictEqual( hasOwnProp( s, 'ndims' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'ndims' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( s.ndims ), true, 'is a nonnegative integer' );
	t.strictEqual( s.ndims, 3, 'returns expected value' );

	t.end();
});

tape( 'a multi-slice has a `data` property for retrieving slice data', function test( t ) {
	var slice;
	var data;
	var s;

	slice = new S( 2, 10, 1 );

	s = new MultiSlice();
	t.strictEqual( hasOwnProp( s, 'data' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'data' ), true, 'has property' );
	t.strictEqual( isArray( s.data ), true, 'is an array' );
	t.deepEqual( s.data, [], 'returns expected value' );

	s = new MultiSlice( 2, slice, null );
	t.strictEqual( hasOwnProp( s, 'data' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'data' ), true, 'has property' );
	t.strictEqual( isArray( s.data ), true, 'is an array' );

	data = s.data;
	t.strictEqual( data[ 0 ], 2, 'returns expected value' );
	t.strictEqual( isSlice( data[ 1 ] ), true, 'returns expected value' );
	t.strictEqual( data[ 1 ].start, slice.start, 'returns expected value' );
	t.strictEqual( data[ 1 ].stop, slice.stop, 'returns expected value' );
	t.strictEqual( data[ 1 ].step, slice.step, 'returns expected value' );
	t.strictEqual( data[ 2 ], null, 'returns expected value' );

	t.end();
});

tape( 'a multi-slice has a custom `toString()` method', function test( t ) {
	var slice;
	var s;

	slice = new S( 2, 10, 1 );

	s = new MultiSlice();
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'MultiSlice()', 'returns expected value' );

	s = new MultiSlice( 2, slice, null );
	t.strictEqual( hasOwnProp( s, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( s.toString ), true, 'has method' );
	t.strictEqual( s.toString(), 'MultiSlice(2,Slice(2,10,1),null)', 'returns expected value' );

	t.end();
});

tape( 'a multi-slice has a custom `toJSON()` method', function test( t ) {
	var expected;
	var slice;
	var s;

	slice = new S( 2, 10, 1 );

	s = new MultiSlice();
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'MultiSlice',
		'data': []
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s = new MultiSlice( 2, slice, null );
	t.strictEqual( hasOwnProp( s, 'toJSON' ), false, 'does not have own property' );
	t.strictEqual( hasProp( s, 'toJSON' ), true, 'has property' );
	t.strictEqual( isFunction( s.toJSON ), true, 'has method' );

	expected = {
		'type': 'MultiSlice',
		'data': [
			2,
			{
				'type': 'Slice',
				'data': [ 2, 10, 1 ]
			},
			null
		]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	t.end();
});
