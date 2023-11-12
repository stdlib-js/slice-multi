/*
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

/* eslint-disable @typescript-eslint/no-unused-expressions */

import Slice = require( '@stdlib/slice-ctor' );
import MultiSlice = require( './index' );


// TESTS //

// The function returns a multi-slice...
{
	const s = new Slice( 2, 10, 1 );

	new MultiSlice(); // $ExpectType MultiSlice

	new MultiSlice( 2 ); // $ExpectType MultiSlice
	new MultiSlice( null ); // $ExpectType MultiSlice
	new MultiSlice( undefined ); // $ExpectType MultiSlice
	new MultiSlice( s ); // $ExpectType MultiSlice

	new MultiSlice( 2, s ); // $ExpectType MultiSlice
	new MultiSlice( null, s ); // $ExpectType MultiSlice
	new MultiSlice( undefined, s ); // $ExpectType MultiSlice
	new MultiSlice( s, s ); // $ExpectType MultiSlice

	new MultiSlice( 2, s, null ); // $ExpectType MultiSlice
	new MultiSlice( null, s, null ); // $ExpectType MultiSlice
	new MultiSlice( undefined, s, null ); // $ExpectType MultiSlice
	new MultiSlice( s, s, null ); // $ExpectType MultiSlice

	new MultiSlice( 2, s, null, 2 ); // $ExpectType MultiSlice
	new MultiSlice( null, s, null, 2 ); // $ExpectType MultiSlice
	new MultiSlice( undefined, s, null, 2 ); // $ExpectType MultiSlice
	new MultiSlice( s, s, null, 2 ); // $ExpectType MultiSlice

	new MultiSlice( 2, s, null, 2, undefined ); // $ExpectType MultiSlice
	new MultiSlice( null, s, null, 2, undefined ); // $ExpectType MultiSlice
	new MultiSlice( undefined, s, null, 2, undefined ); // $ExpectType MultiSlice
	new MultiSlice( s, s, null, 2, undefined ); // $ExpectType MultiSlice

	new MultiSlice( 2, s, null, 2, undefined, s ); // $ExpectType MultiSlice
	new MultiSlice( null, s, null, 2, undefined, s ); // $ExpectType MultiSlice
	new MultiSlice( undefined, s, null, 2, undefined, s ); // $ExpectType MultiSlice
	new MultiSlice( s, s, null, 2, undefined, s ); // $ExpectType MultiSlice

	MultiSlice(); // $ExpectType MultiSlice

	MultiSlice( 2 ); // $ExpectType MultiSlice
	MultiSlice( null ); // $ExpectType MultiSlice
	MultiSlice( undefined ); // $ExpectType MultiSlice
	MultiSlice( s ); // $ExpectType MultiSlice

	MultiSlice( 2, s ); // $ExpectType MultiSlice
	MultiSlice( null, s ); // $ExpectType MultiSlice
	MultiSlice( undefined, s ); // $ExpectType MultiSlice
	MultiSlice( s, s ); // $ExpectType MultiSlice

	MultiSlice( 2, s, null ); // $ExpectType MultiSlice
	MultiSlice( null, s, null ); // $ExpectType MultiSlice
	MultiSlice( undefined, s, null ); // $ExpectType MultiSlice
	MultiSlice( s, s, null ); // $ExpectType MultiSlice

	MultiSlice( 2, s, null, 2 ); // $ExpectType MultiSlice
	MultiSlice( null, s, null, 2 ); // $ExpectType MultiSlice
	MultiSlice( undefined, s, null, 2 ); // $ExpectType MultiSlice
	MultiSlice( s, s, null, 2 ); // $ExpectType MultiSlice

	MultiSlice( 2, s, null, 2, undefined ); // $ExpectType MultiSlice
	MultiSlice( null, s, null, 2, undefined ); // $ExpectType MultiSlice
	MultiSlice( undefined, s, null, 2, undefined ); // $ExpectType MultiSlice
	MultiSlice( s, s, null, 2, undefined ); // $ExpectType MultiSlice

	MultiSlice( 2, s, null, 2, undefined, s ); // $ExpectType MultiSlice
	MultiSlice( null, s, null, 2, undefined, s ); // $ExpectType MultiSlice
	MultiSlice( undefined, s, null, 2, undefined, s ); // $ExpectType MultiSlice
	MultiSlice( s, s, null, 2, undefined, s ); // $ExpectType MultiSlice
}

// The compiler throws an error if the function is provided an invalid argument...
{
	const s = new Slice( 2, 10, 1 );

	MultiSlice( 'abc' ); // $ExpectError
	MultiSlice( true ); // $ExpectError
	MultiSlice( false ); // $ExpectError
	MultiSlice( [] ); // $ExpectError
	MultiSlice( {} ); // $ExpectError
	MultiSlice( ( x: number ): number => x ); // $ExpectError

	MultiSlice( 2, 'abc' ); // $ExpectError
	MultiSlice( 2, true ); // $ExpectError
	MultiSlice( 2, false ); // $ExpectError
	MultiSlice( 2, [] ); // $ExpectError
	MultiSlice( 2, {} ); // $ExpectError
	MultiSlice( 2, ( x: number ): number => x ); // $ExpectError

	MultiSlice( 2, null, 'abc' ); // $ExpectError
	MultiSlice( 2, null, true ); // $ExpectError
	MultiSlice( 2, null, false ); // $ExpectError
	MultiSlice( 2, null, [] ); // $ExpectError
	MultiSlice( 2, null, {} ); // $ExpectError
	MultiSlice( 2, null, ( x: number ): number => x ); // $ExpectError

	MultiSlice( 2, null, s, 'abc' ); // $ExpectError
	MultiSlice( 2, null, s, true ); // $ExpectError
	MultiSlice( 2, null, s, false ); // $ExpectError
	MultiSlice( 2, null, s, [] ); // $ExpectError
	MultiSlice( 2, null, s, {} ); // $ExpectError
	MultiSlice( 2, null, s, ( x: number ): number => x ); // $ExpectError

	MultiSlice( 2, null, s, undefined, 'abc' ); // $ExpectError
	MultiSlice( 2, null, s, undefined, true ); // $ExpectError
	MultiSlice( 2, null, s, undefined, false ); // $ExpectError
	MultiSlice( 2, null, s, undefined, [] ); // $ExpectError
	MultiSlice( 2, null, s, undefined, {} ); // $ExpectError
	MultiSlice( 2, null, s, undefined, ( x: number ): number => x ); // $ExpectError
}
