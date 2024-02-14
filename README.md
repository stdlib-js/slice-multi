<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# MultiSlice

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multi-slice constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import MultiSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/slice-multi/tags). For example,

```javascript
import MultiSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@v0.2.0-esm/index.mjs';
```

<a name="main"></a>

#### MultiSlice( ...slice )

Returns a `MultiSlice` instance.

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';

var s = new Slice( 0, 10 );
// returns <Slice>

var ms = new MultiSlice( 2, s, null );
// returns <MultiSlice>
```

The constructor accepts the following arguments:

-   **slice**: a single-dimensional slice. May be either a [`Slice`][@stdlib/slice/ctor], `null`, `undefined`, or an integer.

* * *

### Properties

<a name="static-prop-name"></a>

#### MultiSlice.name

String value of the `MultiSlice` constructor name.

```javascript
var str = MultiSlice.name;
// returns 'MultiSlice'
```

<a name="prop-ndims"></a>

#### MultiSlice.prototype.ndims

**Read-only** property returning the number of slice dimensions.

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';

var s = new Slice( 0, 10 );
// returns <Slice>

var ms = new MultiSlice( 2, s, null );
// returns <MultiSlice>

var ndims = ms.ndims;
// returns 3
```

<a name="prop-data"></a>

#### MultiSlice.prototype.data

**Read-only** property returning the slice data.

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';

var s = new Slice( 0, 10 );
// returns <Slice>

var ms = new MultiSlice( 2, s, null );
// returns <MultiSlice>

var data = ms.data;
// returns [ 2, <Slice>, null ]
```

* * *

### Methods

<a name="method-to-string"></a>

#### MultiSlice.prototype.toString()

Serializes a `MultiSlice` as a string.

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';

var s = new Slice( 10 );
// returns <Slice>

var ms = new MultiSlice( 2, s, null );
// returns <MultiSlice>

var str = ms.toString();
// returns 'MultiSlice(2,Slice(null,10,null),null)'
```

<a name="method-to-json"></a>

#### MultiSlice.prototype.toJSON()

Serializes a `MultiSlice` as a [JSON][json] object.

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';

var s = new Slice( 10 );
// returns <Slice>

var ms = new MultiSlice( 2, s, null );
// returns <MultiSlice>

var o = ms.toJSON();
// returns { 'type': 'MultiSlice', 'data': [ 2, { 'type': 'Slice', 'data': [ null, 10, null ] }, null ] }
```

`JSON.stringify()` implicitly calls this method when stringifying a `MultiSlice` instance.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   Slice arguments may be either integers, `null`, or `undefined`, where a non-integer value indicates a slice parameter which should be determined based on the slice context (e.g., when used to index into an [`ndarray`][@stdlib/ndarray/ctor]).
-   Multi-slice instances have no explicit functionality; however, they are used by [`ndarray`][@stdlib/ndarray] and other packages for creating views into multi-dimensional data structures.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import S from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';
import MultiSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/slice-ctor`][@stdlib/slice/ctor]</span><span class="delimiter">: </span><span class="description">slice constructor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/slice-multi.svg
[npm-url]: https://npmjs.org/package/@stdlib/slice-multi

[test-image]: https://github.com/stdlib-js/slice-multi/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/slice-multi/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/slice-multi/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/slice-multi?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/slice-multi.svg
[dependencies-url]: https://david-dm.org/stdlib-js/slice-multi/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/slice-multi/tree/deno
[deno-readme]: https://github.com/stdlib-js/slice-multi/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/slice-multi/tree/umd
[umd-readme]: https://github.com/stdlib-js/slice-multi/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/slice-multi/tree/esm
[esm-readme]: https://github.com/stdlib-js/slice-multi/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/slice-multi/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/slice-multi/main/LICENSE

[json]: http://www.json.org/

[@stdlib/ndarray]: https://github.com/stdlib-js/ndarray/tree/esm

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/esm

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor/tree/esm

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
