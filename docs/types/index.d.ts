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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Slice, MultiSlice } from '@stdlib/types/slice';

/**
* Interface defining a MultiSlice constructor which is both "newable" and "callable".
*/
interface Constructor {
	/**
	* MultiSlice constructor.
	*
	* @param slice - slices
	* @returns MultiSlice instance
	*
	* @example
	* var Slice = require( `@stdlib/slice/ctor` );
	*
	* var s = new Slice( 10 );
	* // returns <Slice>
	*
	* var ms = new MultiSlice( 2, s, 1 );
	* // returns <MultiSlice>
	*/
	new( ...slice: Array<Slice | number | null | undefined> ): MultiSlice;

	/**
	* MultiSlice constructor.
	*
	* @param slice - slices
	* @returns MultiSlice instance
	*
	* @example
	* var Slice = require( `@stdlib/slice/ctor` );
	*
	* var s = new Slice( 10 );
	* // returns <Slice>
	*
	* var ms = MultiSlice( 2, s, 1 );
	* // returns <MultiSlice>
	*/
	( ...slice: Array<Slice | number | null | undefined> ): MultiSlice;
}

/**
* MultiSlice constructor.
*
* @param slice - slices
* @returns MultiSlice instance
*
* @example
* var Slice = require( `@stdlib/slice/ctor` );
*
* var s = new Slice( 10 );
* // returns <Slice>
*
* var ms = new MultiSlice( 2, s, 1 );
* // returns <MultiSlice>
*/
declare var ctor: Constructor;


// EXPORTS //

export = ctor;
