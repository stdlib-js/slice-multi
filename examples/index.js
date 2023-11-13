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

/* eslint-disable new-cap */

'use strict';

var S = require( '@stdlib/slice-ctor' );
var MultiSlice = require( './../lib' );

// Alias `undefined` for more concise expressions:
var _ = void 0;

// Create a 6-dimensional slice:
var s = new MultiSlice( S( 9, -10, -1 ), S( 2, _, 2 ), 2, S( 5, _, 2 ), 3, _ );
// returns <MultiSlice>

// Serialize the slice to a string:
var str = s.toString();
console.log( str );
// => 'MultiSlice(Slice(9,-10,-1),Slice(2,null,2),2,Slice(5,null,2),3,null)'

// Serialize the slice to JSON:
var o = s.toJSON();
console.log( JSON.stringify( o ) );
// => '{"type":"MultiSlice","data":[{"type":"Slice","data":[9,-10,-1]},{"type":"Slice","data":[2,null,2]},2,{"type":"Slice","data":[5,null,2]},3,null]}'
