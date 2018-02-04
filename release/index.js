(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define("ngx-charts", ["@angular/core", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["ngx-charts"] = factory(require("@angular/core"), require("@angular/platform-browser"));
	else
		root["ngx-charts"] = factory(root["@angular/core"], root["@angular/platform-browser"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/uploadcare-widget/uploadcare.min.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 * Uploadcare (3.2.1)
 * Date: 2017-11-13 12:27:13 +0000
 * Rev: 810dcc9e5f
 */
!function(e,t){e.document&&("object"==typeof module&&module.exports?module.exports=t(e,__webpack_require__("./node_modules/jquery/dist/jquery.js")):e.uploadcare=t(e))}("undefined"!=typeof window?window:this,function(e,r){var a,n=e.document;return function(){a={__exports:{}},a.namespace=function(e,t){var r,i,n,o,l;if(i=a,e)for(l=e.split("."),n=0,o=l.length;o>n;n++)r=l[n],i[r]||(i[r]={}),i=i[r];return t(i)},a.expose=function(e,t){var r,i,n,o,l,s,c;for(n=e.split("."),r=n.pop(),l=a.__exports,o=a,s=0,c=n.length;c>s;s++)i=n[s],l[i]||(l[i]={}),l=l[i],o=null!=o?o[i]:void 0;return l[r]=t||o[r]}}.call(this),function(){var t,i;if(i=a,i.version="3.2.1",i.jQuery=r||e.jQuery,"undefined"==typeof i.jQuery)throw new ReferenceError("jQuery is not defined");t=i.expose,t("version"),t("jQuery"),t("plugin",function(e){return e(i)})}.call(this),e.XDomainRequest&&a.jQuery.ajaxTransport(function(e){if(e.crossDomain&&e.async){e.timeout&&(e.xdrTimeout=e.timeout,delete e.timeout);var t;return{send:function(r,i){function a(e,r,a,n){t.onload=t.onerror=t.ontimeout=function(){},t=void 0,i(e,r,a,n)}t=new XDomainRequest,t.onload=function(){a(200,"OK",{text:t.responseText},"Content-Type: "+t.contentType)},t.onerror=function(){a(404,"Not Found")},t.onprogress=function(){},t.ontimeout=function(){a(0,"timeout")},t.timeout=e.xdrTimeout||Number.MAX_VALUE,t.open(e.type,e.url.replace(/^https?:/,"")),t.send(e.hasContent&&e.data||null)},abort:function(){t&&(t.onerror=function(){},t.abort())}}}}),function(){a.namespace("utils.abilities",function(t){var r,i,a,o;t.fileAPI=!!(e.File&&e.FileList&&e.FileReader),t.sendFileAPI=!(!e.FormData||!t.fileAPI),t.dragAndDrop=function(){var e;return e=n.createElement("div"),"draggable"in e||"ondragstart"in e&&"ondrop"in e}(),t.canvas=function(){var e;return e=n.createElement("canvas"),!(!e.getContext||!e.getContext("2d"))}(),t.fileDragAndDrop=t.fileAPI&&t.dragAndDrop,t.iOSVersion=null,(r=/^[^(]+\(iP(?:hone|od|ad);\s*(.+?)\)/.exec(navigator.userAgent))&&(a=/OS (\d)_(\d)/.exec(r[1]))&&(t.iOSVersion=+a[1]+a[2]/10),t.Blob=!1;try{new e.Blob&&(t.Blob=e.Blob)}catch(l){}return i=e.URL||e.webkitURL||!1,t.URL=i&&i.createObjectURL&&i,t.FileReader=(null!=(o=e.FileReader)?o.prototype.readAsArrayBuffer:void 0)&&e.FileReader})}.call(this),function(){var e,t={}.hasOwnProperty,r=function(e,r){for(var i in r)t.call(r,i)&&(e[i]=r[i]);function a(){this.constructor=e}return a.prototype=r.prototype,e.prototype=new a,e.__super__=r.prototype,e},i=[].indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(t in this&&this[t]===e)return t;return-1},n=function(e,t){return function(){return e.apply(t,arguments)}},o=[].slice;e=a.jQuery,a.namespace("utils",function(t){var a;return t.Collection=function(){function t(t){var r,i,a;for(null==t&&(t=[]),this.onAdd=e.Callbacks(),this.onRemove=e.Callbacks(),this.onSort=e.Callbacks(),this.onReplace=e.Callbacks(),this.__items=[],i=0,a=t.length;a>i;i++)r=t[i],this.add(r)}return t.prototype.add=function(e){return this.__add(e,this.__items.length)},t.prototype.__add=function(e,t){return this.__items.splice(t,0,e),this.onAdd.fire(e,t)},t.prototype.remove=function(t){var r;return r=e.inArray(t,this.__items),-1!==r?this.__remove(t,r):void 0},t.prototype.__remove=function(e,t){return this.__items.splice(t,1),this.onRemove.fire(e,t)},t.prototype.clear=function(){var e,t,r,i,a,n;for(r=this.get(),this.__items.length=0,n=[],e=i=0,a=r.length;a>i;e=++i)t=r[e],n.push(this.onRemove.fire(t,e));return n},t.prototype.replace=function(t,r){var i;return t!==r&&(i=e.inArray(t,this.__items),-1!==i)?this.__replace(t,r,i):void 0},t.prototype.__replace=function(e,t,r){return this.__items[r]=t,this.onReplace.fire(e,t,r)},t.prototype.sort=function(e){return this.__items.sort(e),this.onSort.fire()},t.prototype.get=function(e){return null!=e?this.__items[e]:this.__items.slice(0)},t.prototype.length=function(){return this.__items.length},t}(),t.UniqCollection=function(e){r(t,e);function t(){return a=t.__super__.constructor.apply(this,arguments)}return t.prototype.add=function(e){return i.call(this.__items,e)>=0?void 0:t.__super__.add.apply(this,arguments)},t.prototype.__replace=function(e,r,a){return i.call(this.__items,r)>=0?this.remove(e):t.__super__.__replace.apply(this,arguments)},t}(t.Collection),t.CollectionOfPromises=function(t){r(a,t);function a(){this.onAnyProgress=n(this.onAnyProgress,this),this.onAnyFail=n(this.onAnyFail,this),this.onAnyDone=n(this.onAnyDone,this),this.anyDoneList=e.Callbacks(),this.anyFailList=e.Callbacks(),this.anyProgressList=e.Callbacks(),this._thenArgs=null,this.anyProgressList.add(function(t,r){return e(t).data("lastProgress",r)}),a.__super__.constructor.apply(this,arguments)}return a.prototype.onAnyDone=function(e){var t,r,i,a,n;for(this.anyDoneList.add(e),a=this.__items,n=[],r=0,i=a.length;i>r;r++)t=a[r],"resolved"===t.state()?n.push(t.done(function(){return e.apply(null,[t].concat(o.call(arguments)))})):n.push(void 0);return n},a.prototype.onAnyFail=function(e){var t,r,i,a,n;for(this.anyFailList.add(e),a=this.__items,n=[],r=0,i=a.length;i>r;r++)t=a[r],"rejected"===t.state()?n.push(t.fail(function(){return e.apply(null,[t].concat(o.call(arguments)))})):n.push(void 0);return n},a.prototype.onAnyProgress=function(t){var r,i,a,n,o;for(this.anyProgressList.add(t),n=this.__items,o=[],i=0,a=n.length;a>i;i++)r=n[i],o.push(t(r,e(r).data("lastProgress")));return o},a.prototype.lastProgresses=function(){var t,r,i,a,n;for(a=this.__items,n=[],r=0,i=a.length;i>r;r++)t=a[r],n.push(e(t).data("lastProgress"));return n},a.prototype.add=function(e){return e&&e.then?(this._thenArgs&&(e=e.then.apply(e,this._thenArgs)),a.__super__.add.apply(this,arguments),this.__watchItem(e)):void 0},a.prototype.__replace=function(e,t,r){return t&&t.then?(a.__super__.__replace.apply(this,arguments),this.__watchItem(t)):this.remove(e)},a.prototype.__watchItem=function(e){var t,r=this;return t=function(t){return function(){return i.call(r.__items,e)>=0?t.fire.apply(t,[e].concat(o.call(arguments))):void 0}},e.then(t(this.anyDoneList),t(this.anyFailList),t(this.anyProgressList))},a.prototype.autoThen=function(){var e,t,r,i,a,n;if(this._thenArgs)throw new Error("CollectionOfPromises.then() could be used only once");for(this._thenArgs=arguments,a=this.__items,n=[],e=r=0,i=a.length;i>r;e=++r)t=a[e],n.push(this.__replace(t,t.then.apply(t,this._thenArgs),e));return n},a}(t.UniqCollection)})}.call(this),function(){var e;e=a.jQuery,a.namespace("utils",function(t){var r;return r=function(t,r){var i,a=this;return i=e.Deferred(),r&&(t.src=r),t.complete?i.resolve(t):(e(t).one("load",function(){return i.resolve(t)}),e(t).one("error",function(){return i.reject(t)})),i.promise()},t.imageLoader=function(i){return e.isArray(i)?e.when.apply(null,e.map(i,t.imageLoader)):i.src?r(i):r(new Image,i)},t.videoLoader=function(t){var r;return r=e.Deferred(),e("<video/>").on("loadeddata",r.resolve).on("error",r.reject).attr("src",t).get(0).load(),r.promise()}})}.call(this),function(){var t=[].slice;a.namespace("utils",function(r){var i,a;return r.log=function(){var t;try{return null!=(t=e.console)&&"function"==typeof t.log?t.log.apply(t,arguments):void 0}catch(r){}},r.debug=function(){var i,a;if(null!=(i=e.console)?!i.debug:!0)return r.log.apply(r,["Debug:"].concat(t.call(arguments)));try{return(a=e.console).debug.apply(a,arguments)}catch(n){}},r.warn=function(){var i,a;if(null!=(i=e.console)?!i.warn:!0)return r.log.apply(r,["Warning:"].concat(t.call(arguments)));try{return(a=e.console).warn.apply(a,arguments)}catch(n){}},a={},r.warnOnce=function(e){return null==a[e]?(a[e]=!0,r.warn(e)):void 0},i={publicKey:"Global public key not set. Uploads may not work!\nAdd this to the <head> tag to set your key:\n\n<script>\nUPLOADCARE_PUBLIC_KEY = 'your_public_key';\n</script>"},r.commonWarning=function(e){return null!=i[e]?r.warnOnce(i[e]):void 0}})}.call(this),function(){var t;t=a.jQuery,a.namespace("utils",function(r){var i,a=this;return i={},t(e).on("message",function(e){var t,r,a,n,o,l,s;t=e.originalEvent;try{a=JSON.parse(t.data)}catch(c){return}if(a.type in i){for(l=i[a.type],s=[],n=0,o=l.length;o>n;n++)r=l[n],t.source===r[0]?s.push(r[1](a)):s.push(void 0);return s}}),r.registerMessage=function(e,t,r){return e in i||(i[e]=[]),i[e].push([t,r]);
},r.unregisterMessage=function(e,r){return e in i?i[e]=t.grep(i[e],function(e){return e[0]!==r}):void 0}})}.call(this),function(){var e,t=[].indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(t in this&&this[t]===e)return t;return-1},r=[].slice;e=a.jQuery,a.namespace("utils",function(i){var a;return i.unique=function(e){var r,i,a,n;for(i=[],a=0,n=e.length;n>a;a++)r=e[a],t.call(i,r)<0&&i.push(r);return i},i.defer=function(e){return setTimeout(e,0)},i.gcd=function(e,t){var r;while(t)r=e%t,e=t,t=r;return e},i.once=function(e){var t,r;return t=!1,r=null,function(){return t||(r=e.apply(this,arguments),t=!0),r}},i.wrapToPromise=function(t){return e.Deferred().resolve(t).promise()},i.then=function(t,r,i,a){var n,o;return o=e.Deferred(),n=function(e,t){return e&&t?function(){return t.call(this,e.apply(this,arguments))}:e||t},t.then(n(r,o.resolve),n(i,o.reject),n(a,o.notify)),o.promise()},i.bindAll=function(t,r){var i;return i={},e.each(r,function(r,a){var n;return n=t[a],e.isFunction(n)?i[a]=function(){var e;return e=n.apply(t,arguments),e===t?i:e}:i[a]=n}),i},i.upperCase=function(e){return e.replace(/([A-Z])/g,"_$1").toUpperCase()},i.publicCallbacks=function(e){var t;return t=e.add,t.add=e.add,t.remove=e.remove,t},i.uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t,r;return t=16*Math.random()|0,r="x"===e?t:3&t|8,r.toString(16)})},i.splitUrlRegex=/^(?:([^:\/?#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)\??([^\#]*)\#?(.*)$/,i.uuidRegex=/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i,i.groupIdRegex=new RegExp(""+i.uuidRegex.source+"~[0-9]+","i"),i.cdnUrlRegex=new RegExp("^/?("+i.uuidRegex.source+")(?:/(-/(?:[^/]+/)+)?([^/]*))?$","i"),i.splitCdnUrl=function(e){return i.cdnUrlRegex.exec(i.splitUrlRegex.exec(e)[3])},i.escapeRegExp=function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},i.globRegexp=function(t,r){var a;return null==r&&(r="i"),a=e.map(t.split("*"),i.escapeRegExp),new RegExp("^"+a.join(".+")+"$",r)},i.normalizeUrl=function(e){var t;return t=n.location.protocol,"http:"!==t&&(t="https:"),e.replace(/^\/\//,t+"//").replace(/\/+$/,"")},i.fitText=function(e,t){var r,i;return e.length>t?(r=Math.ceil((t-3)/2),i=Math.floor((t-3)/2),e.slice(0,r)+"..."+e.slice(-i)):e},i.fitSizeInCdnLimit=function(e){return i.fitSize(e,[2048,2048])},i.fitSize=function(e,t,r){var i,a;return e[0]>t[0]||e[1]>t[1]||r?(a=t[0]/e[0],i=t[1]/e[1],!t[0]||t[1]&&a>i?[Math.round(i*e[0]),t[1]]:[t[0],Math.round(a*e[1])]):e.slice()},i.applyCropCoordsToInfo=function(t,r,i,a){var n,o,l,s,c,u,p;return u=a.width,o=a.height,s=r.preferedSize,l="",p=u===i[0]&&o===i[1],p||(l+="-/crop/"+u+"x"+o+"/"+a.left+","+a.top+"/"),n=r.downscale&&(u>s[0]||o>s[1]),c=r.upscale&&(u<s[0]||o<s[1]),n||c?(a.sw=s[0],a.sh=s[1],l+="-/resize/"+s.join("x")+"/"):p||(l+="-/preview/"),t=e.extend({},t),t.cdnUrlModifiers=l,t.cdnUrl=""+t.originalUrl+(l||""),t.crop=a,t},i.fileInput=function(t,r,i){var a,n,o;return n=null,a=r.inputAcceptTypes,""===a&&(a=r.imagesOnly?"image/*":null),(o=function(){return n=e(r.multiple?'<input type="file" multiple>':'<input type="file">').attr("accept",a).css({position:"absolute",top:0,opacity:0,margin:0,padding:0,width:"auto",height:"auto",cursor:t.css("cursor")}).on("change",function(){return i(this),e(this).hide(),o()}),t.append(n)})(),t.css({position:"relative",overflow:"hidden"}).mousemove(function(t){var r,i,a,o;return o=e(this).offset(),r=o.left,i=o.top,a=n.width(),n.css({left:t.pageX-r-a+10,top:t.pageY-i-10})})},i.fileSelectDialog=function(t,r,i){var a;return a=r.inputAcceptTypes,""===a&&(a=r.imagesOnly?"image/*":null),e(r.multiple?'<input type="file" multiple>':'<input type="file">').attr("accept",a).css({position:"fixed",bottom:0,opacity:0}).on("change",function(){return i(this),e(this).remove()}).appendTo(t).focus().click().hide()},i.fileSizeLabels="B KB MB GB TB PB EB ZB YB".split(" "),i.readableFileSize=function(e,t,r,a){var n,o,l,s;if(null==t&&(t=""),null==r&&(r=""),null==a&&(a=""),e=parseInt(e,10),isNaN(e))return t;n=2,l=0,s=1e3-5*Math.pow(10,2-Math.max(n,3));while(e>s&&l<i.fileSizeLabels.length-1)l++,e/=1024;return e+=1e-15,o=Math.max(0,n-Math.floor(e).toFixed(0).length),e=Number(e.toFixed(o)),""+r+e+" "+i.fileSizeLabels[l]+a},i.ajaxDefaults={dataType:"json",crossDomain:!0,cache:!1},i.jsonp=function(t,r,a){return e.isPlainObject(r)&&(a=r,r="GET"),e.ajax(e.extend({url:t,type:r,data:a},i.ajaxDefaults)).then(function(t){var r;return t.error?(r=t.error.content||t.error,e.Deferred().reject(r)):t},function(e,r,a){var n;return n=""+r+" ("+a+")",i.warn("JSONP unexpected error: "+n+" while loading "+t),n})},i.canvasToBlob=function(e,t,r,i){var a,n,o,l,s,c;if(HTMLCanvasElement.prototype.toBlob)return e.toBlob(i,t,r);for(o=e.toDataURL(t,r),o=o.split(","),n=atob(o[1]),a=new Uint8Array(n.length),l=s=0,c=n.length;c>s;l=s+=1)a[l]=n.charCodeAt(l);return i(new Blob([a],{type:/:(.+\/.+);/.exec(o[0])[1]}))},i.taskRunner=function(e){var t,r,a,n;return n=0,t=[],r=function(){var e;return t.length?(e=t.shift(),i.defer(function(){return e(r)})):n-=1},a=function(a){return!e||e>n?(n+=1,i.defer(function(){return a(r)})):t.push(a)}},a=[["notify","progress",2],["resolve","done",0],["reject","fail",1]],i.fixedPipe=function(){var t,i;return i=arguments[0],t=2<=arguments.length?r.call(arguments,1):[],e.Deferred(function(r){return e.each(a,function(a,n){var o;return o=e.isFunction(t[n[2]])&&t[n[2]],i[n[1]](function(){var t;return t=o&&o.apply(this,arguments),t&&e.isFunction(t.promise)?t.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[n[0]+"With"](this===i?r.promise():this,o?[t]:arguments)})})}).promise()}})}.call(this),function(){var t,r,i,n=[].indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(t in this&&this[t]===e)return t;return-1};r=a.expose,i=a.utils,t=a.jQuery,a.namespace("settings",function(o){var l,s,c,u,p,d,h,f,_,g;return s={live:!0,manualStart:!1,locale:null,localePluralize:null,localeTranslations:null,systemDialog:!1,crop:!1,previewStep:!1,imagesOnly:!1,clearable:!1,multiple:!1,multipleMax:0,multipleMin:1,multipleMaxStrict:!1,imageShrink:!1,pathValue:!0,tabs:"file camera url facebook gdrive gphotos dropbox instagram evernote flickr skydrive",preferredTypes:"",inputAcceptTypes:"",doNotStore:!1,publicKey:null,secureSignature:"",secureExpire:"",pusherKey:"79ae88bd931ea68464d9",cdnBase:"https://ucarecdn.com",urlBase:"https://upload.uploadcare.com",socialBase:"https://social.uploadcare.com",imagePreviewMaxSize:26214400,multipartMinSize:26214400,multipartPartSize:5242880,multipartMinLastPartSize:1048576,multipartConcurrency:4,multipartMaxAttempts:3,parallelDirectUploads:10,passWindowOpen:!1,scriptBase:"//ucarecdn.com/widget/"+a.version+"/uploadcare/",debugUploads:!1},f={tabs:{all:"file camera url facebook gdrive gphotos dropbox instagram evernote flickr skydrive box vk huddle","default":s.tabs}},_=function(e){return t.isArray(e)||(e=t.trim(e),e=e?e.split(" "):[]),e},l=function(e,t){var r,a,n,o,l,s,c,u;for(l=0,c=t.length;c>l;l++){if(a=t[l],o=n=_(e[a]),f.hasOwnProperty(a))for(o=[],s=0,u=n.length;u>s;s++)r=n[s],f[a].hasOwnProperty(r)?o=o.concat(_(f[a][r])):o.push(r);e[a]=i.unique(o)}return e},g=function(e,t){var r,a,n;for(a=0,n=t.length;n>a;a++)r=t[a],null!=e[r]&&(e[r]=i.normalizeUrl(e[r]));return e},c=function(e,r){var i,a,n,o;for(n=0,o=r.length;o>n;n++)i=r[n],null!=e[i]&&(a=e[i],"string"===t.type(a)?(a=t.trim(a).toLowerCase(),e[i]=!("false"===a||"disabled"===a)):e[i]=!!a);return e},u=function(e,t){var r,i,a;for(i=0,a=t.length;a>i;i++)r=t[i],null!=e[r]&&(e[r]=parseInt(e[r]));return e},d=function(e){var r,i;return i=/^([0-9]+)([x:])([0-9]+)\s*(|upscale|minimum)$/i,r=i.exec(t.trim(e.toLowerCase()))||[],{downscale:"x"===r[2],upscale:!!r[4],notLess:"minimum"===r[4],preferedSize:r.length?[+r[1],+r[3]]:void 0}},h=function(e){var r,a,n;return r=/^([0-9]+)x([0-9]+)(?:\s+(\d{1,2}|100)%)?$/i,a=r.exec(t.trim(e.toLowerCase()))||[],a.length?(n=a[1]*a[2],n>5e6?(i.warnOnce("Shrinked size can not be larger than 5MP. "+("You have set "+a[1]+"x"+a[2]+" (")+(""+Math.ceil(n/1e3/100)/10+"MP).")),!1):{quality:a[3]?a[3]/100:void 0,size:n}):!1},p=function(e){return l(e,["tabs","preferredTypes"]),g(e,["cdnBase","socialBase","urlBase","scriptBase"]),
c(e,["doNotStore","imagesOnly","multiple","clearable","pathValue","previewStep","systemDialog","debugUploads","multipleMaxStrict"]),u(e,["multipleMax","multipleMin","multipartMinSize","multipartPartSize","multipartMinLastPartSize","multipartConcurrency","multipartMaxAttempts","parallelDirectUploads"]),e.crop===!1||t.isArray(e.crop)||(/^(disabled?|false|null)$/i.test(e.crop)?e.crop=!1:t.isPlainObject(e.crop)?e.crop=[e.crop]:e.crop=t.map((""+e.crop).split(","),d)),e.imageShrink&&!t.isPlainObject(e.imageShrink)&&(e.imageShrink=h(e.imageShrink)),(e.crop||e.multiple)&&(e.previewStep=!0),i.abilities.sendFileAPI||(e.systemDialog=!1),e.validators&&(e.validators=e.validators.slice()),e},r("defaults",t.extend({allTabs:f.tabs.all},s)),o.globals=function(){var t,r,a;a={};for(t in s)r=e["UPLOADCARE_"+i.upperCase(t)],void 0!==r&&(a[t]=r);return a},o.common=i.once(function(e,r){var a;return r||(s=t.extend(s,o.globals())),a=p(t.extend(s,e||{})),a.publicKey||i.commonWarning("publicKey"),o.waitForSettings.fire(a),a}),o.build=function(e){var r;return r=t.extend({},o.common()),t.isEmptyObject(e)||(r=p(t.extend(r,e))),r},o.waitForSettings=t.Callbacks("once memory"),o.CssCollector=function(){function e(){this.urls=[],this.styles=[]}return e.prototype.addUrl=function(e){if(!/^https?:\/\//i.test(e))throw new Error("Embedded urls should be absolute. "+e);return n.call(this.urls,e)>=0?void 0:this.urls.push(e)},e.prototype.addStyle=function(e){return this.styles.push(e)},e}(),a.tabsCss=new o.CssCollector,s._emptyKeyText='<div class="uploadcare--tab__content">\n<div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">Hello!</div>\n<div class="uploadcare--text">Your <a class="uploadcare--link" href="https://uploadcare.com/dashboard/">public key</a> is not set.</div>\n<div class="uploadcare--text">Add this to the &lt;head&gt; tag to start uploading files:</div>\n<div class="uploadcare--text uploadcare--text_pre">&lt;script&gt;\nUPLOADCARE_PUBLIC_KEY = \'your_public_key\';\n&lt;/script&gt;</div>\n</div>'})}.call(this),function(){a.namespace("locale.translations",function(e){return e.en={uploading:"Uploading... Please wait.",loadingInfo:"Loading info...",errors:{"default":"Error",baddata:"Incorrect value",size:"File too big",upload:"Can’t upload",user:"Upload canceled",info:"Can’t load info",image:"Only images allowed",createGroup:"Can’t create file group",deleted:"File was deleted"},draghere:"Drop a file here",file:{one:"%1 file",other:"%1 files"},buttons:{cancel:"Cancel",remove:"Remove",choose:{files:{one:"Choose a file",other:"Choose files"},images:{one:"Choose an image",other:"Choose images"}}},dialog:{close:"Close",openMenu:"Open menu",done:"Done",showFiles:"Show files",tabs:{names:{"empty-pubkey":"Welcome",preview:"Preview",file:"Local Files",url:"Direct Link",camera:"Camera",facebook:"Facebook",dropbox:"Dropbox",gdrive:"Google Drive",gphotos:"Google Photos",instagram:"Instagram",vk:"VK",evernote:"Evernote",box:"Box",skydrive:"OneDrive",flickr:"Flickr",huddle:"Huddle"},file:{drag:"drag & drop<br>any files",nodrop:"Upload files from your&nbsp;computer",cloudsTip:"Cloud storages<br>and social networks",or:"or",button:"Choose a local file",also:"or choose from"},url:{title:"Files from the Web",line1:"Grab any file off the web.",line2:"Just provide the link.",input:"Paste your link here...",button:"Upload"},camera:{title:"File from web camera",capture:"Take a photo",mirror:"Mirror",startRecord:"Record a video",stopRecord:"Stop",cancelRecord:"Cancel",retry:"Request permissions again",pleaseAllow:{title:"Please allow access to your camera",text:"You have been prompted to allow camera access from this site.<br>In order to take pictures with your camera you must approve this request."},notFound:{title:"No camera detected",text:"Looks like you have no camera connected to this device."}},preview:{unknownName:"unknown",change:"Cancel",back:"Back",done:"Add",unknown:{title:"Uploading... Please wait for a preview.",done:"Skip preview and accept"},regular:{title:"Add this file?",line1:"You are about to add the file above.",line2:"Please confirm."},image:{title:"Add this image?",change:"Cancel"},crop:{title:"Crop and add this image",done:"Done",free:"free"},video:{title:"Add this video?",change:"Cancel"},error:{"default":{title:"Oops!",text:"Something went wrong during the upload.",back:"Please try again"},image:{title:"Only image files are accepted.",text:"Please try again with another file.",back:"Choose image"},size:{title:"The file you selected exceeds the limit.",text:"Please try again with another file."},loadImage:{title:"Error",text:"Can’t load image"}},multiple:{title:"You’ve chosen %files%.",question:"Add %files%?",tooManyFiles:"You’ve chosen too many files. %max% is maximum.",tooFewFiles:"You’ve chosen %files%. At least %min% required.",clear:"Remove all",done:"Add",file:{preview:"Preview %file%",remove:"Remove %file%"}}}},footer:{text:"powered by",link:"uploadcare"}}}}),a.namespace("locale.pluralize",function(e){return e.en=function(e){return 1===e?"one":"other"}})}.call(this),function(){var e,t,r;r=a.utils,t=a.settings,e=a.jQuery,a.namespace("locale",function(i){var a,n,o,l,s;return n="en",o={lang:n,translations:i.translations[n],pluralize:i.pluralize[n]},s=function(t){var r,a,n;return r=t.locale||o.lang,n=e.extend(!0,{},i.translations[r],t.localeTranslations),a=e.isFunction(t.localePluralize)?t.localePluralize:i.pluralize[r],{lang:r,translations:n,pluralize:a}},a=r.once(function(){return s(t.build())}),i.rebuild=function(e){var r;return r=s(t.build(e)),a=function(){return r}},l=function(e,t){var r,i,a,n;for(r=e.split("."),a=0,n=r.length;n>a;a++){if(i=r[a],null==t)return null;t=t[i]}return t},i.t=function(e,t){var r,i,n;return r=a(),i=l(e,r.translations),null==i&&r.lang!==o.lang&&(r=o,i=l(e,r.translations)),null!=t&&(i=null!=r.pluralize?(null!=(n=i[r.pluralize(t)])?n.replace("%1",t):void 0)||t:""),i||""}})}.call(this),function(){var e,t,r;t=a.locale,r=a.utils,e=a.jQuery,a.namespace("templates",function(i){return i.JST={},i.tpl=function(n,o){var l;return null==o&&(o={}),l=i.JST[n],null!=l?l(e.extend({t:t.t,utils:r,uploadcare:a},o)):""}})}.call(this),a.templates.JST.dialog=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--dialog">\r\n  <div class="uploadcare--dialog__container">\r\n    <button type="button" title="',(""+t("dialog.close")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'"\r\n            class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--dialog__close">\r\n      <svg role="presentation" width="32" height="32" class="uploadcare--icon">\r\n        <use xlink:href="#uploadcare--icon-close"></use>\r\n      </svg>\r\n    </button>\r\n    <div class="uploadcare--dialog__placeholder"></div>\r\n  </div>\r\n  <div class="uploadcare--powered-by uploadcare--dialog__powered-by">\r\n    ',(""+t("dialog.footer.text")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n    <a class="uploadcare--link uploadcare--powered-by__link" href="https://uploadcare.com/?utm_campaign=widget&utm_source=copyright&utm_medium=desktop&utm_content=',(""+a.version).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'"\r\n       target="_blank">\r\n      <svg width="32" height="32" role="presentation" class="uploadcare--icon uploadcare--powered-by__logo"><use xlink:href="#uploadcare--icon-uploadcare"></use></svg>\r\n      ',(""+t("dialog.footer.link")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\r\n    </a>\r\n  </div>\r\n</div>\r\n");return __p.join("")},a.templates.JST.dialog__panel=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--panel">\r\n  <div class="uploadcare--menu uploadcare--panel__menu">\r\n    <button type="button" title="',(""+t("dialog.openMenu")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'"\r\n            class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--menu__toggle">\r\n      <svg role="presentation" width="32" height="32"\r\n           class="uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_menu">\r\n        <use xlink:href="#uploadcare--icon-menu"></use>\r\n      </svg>\r\n      <svg role="presentation" width="32" height="32"\r\n           class="uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_back">\r\n        <use xlink:href="#uploadcare--icon-back"></use>\r\n      </svg>\r\n    </button>\r\n    <div class="uploadcare--menu__items"></div>\r\n  </div>\r\n\r\n  <div class="uploadcare--panel__content">\r\n\r\n    <div class="uploadcare--footer uploadcare--panel__footer">\r\n      <div class="uploadcare--footer__additions uploadcare--panel__message"></div>\r\n\r\n      <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--panel__show-files">\r\n        ',(""+t("dialog.showFiles")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),' <div class="uploadcare--panel__file-counter"></div>\r\n      </button>\r\n\r\n      <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--panel__done">\r\n          ',(""+t("dialog.done")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n      </button>\r\n    </div>\r\n\r\n    <div class="uploadcare--powered-by uploadcare--panel__powered-by">\r\n        ',(""+t("dialog.footer.text")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n      <a class="uploadcare--link uploadcare--powered-by__link" href="https://uploadcare.com/?utm_campaign=widget&utm_source=copyright&utm_medium=desktop&utm_content=',(""+a.version).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'"\r\n         target="_blank">\r\n        <svg width="32" height="32" role="presentation" class="uploadcare--icon uploadcare--powered-by__logo"><use xlink:href="#uploadcare--icon-uploadcare"></use></svg>\r\n          ',(""+t("dialog.footer.link")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
return __p.join("")},a.templates.JST.icons=function(e){var __p=[],t=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<svg width="0" height="0" style="position:absolute"><symbol viewBox="0 0 32 32" id="uploadcare--icon-back"><path d="M21.132 9.06a1.5 1.5 0 0 0-2.122-2.12L9.88 16.07l9.06 9.061a1.5 1.5 0 1 0 2.122-2.121l-6.94-6.94 7.01-7.01z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-box"><path d="M4.962 9C4.385 9 4 9.384 4 9.96v8.243C4 20.793 6.213 23 8.811 23c1.829 0 3.464-1.043 4.33-2.578.866 1.535 2.406 2.578 4.33 2.578 2.695 0 4.812-2.206 4.812-4.797 0-2.686-2.117-4.886-4.811-4.886-1.829 0-3.465 1.043-4.33 2.578-.77-1.535-2.406-2.578-4.33-2.578a4.957 4.957 0 0 0-2.887.96V9.958c0-.48-.482-.959-.963-.959zm17.08 4.257a.841.841 0 0 0-.33.15c-.385.288-.5.965-.211 1.349l2.526 3.357-2.526 3.358c-.289.384-.174 1.061.21 1.35.385.287 1.065.173 1.354-.21l2.105-2.879 2.105 2.878c.288.384.968.498 1.353.21.385-.288.499-.965.21-1.349l-2.526-3.358 2.526-3.357c.289-.384.175-1.061-.21-1.35-.385-.287-1.065-.203-1.353.18l-2.105 2.879-2.105-2.878c-.217-.288-.657-.406-1.023-.33zm-13.23 2.068c1.539 0 2.886 1.344 2.886 2.878.096 1.535-1.25 2.878-2.887 2.878a2.89 2.89 0 0 1-2.886-2.878c0-1.63 1.347-2.878 2.886-2.878zm8.66 0a2.89 2.89 0 0 1 2.886 2.878c0 1.535-1.347 2.878-2.886 2.878a2.89 2.89 0 0 1-2.887-2.878c0-1.63 1.347-2.878 2.887-2.878z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-camera"><path d="M21 10h3c1.653 0 3 1.343 3 3v9c0 1.656-1.344 3-3.001 3H8A3 3 0 0 1 5 22v-9a3 3 0 0 1 3-3h3v-.999C11 7.901 11.895 7 13 7h6c1.113 0 2 .896 2 2.001V10zm-5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-close"><path d="M10.06 7.94a1.5 1.5 0 0 0-2.12 2.12L13.878 16l-5.94 5.94a1.5 1.5 0 0 0 2.122 2.12L16 18.122l5.94 5.94a1.5 1.5 0 0 0 2.12-2.122L18.122 16l5.94-5.94a1.5 1.5 0 0 0-2.122-2.12L16 13.878l-5.94-5.94z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-crop-free"><path d="M8 12a2.004 2.004 0 0 1-2-2.01V8.01C6 6.897 6.893 6 8.01 6h1.98c1.109 0 2.005.888 2.01 2h8c.005-1.107.896-2 2.01-2h1.98C25.103 6 26 6.893 26 8.01v1.98A2.004 2.004 0 0 1 24 12v8c1.107.005 2 .896 2 2.01v1.98c0 1.112-.893 2.01-2.01 2.01h-1.98A2.004 2.004 0 0 1 20 24h-8a2.004 2.004 0 0 1-2.01 2H8.01A2.004 2.004 0 0 1 6 23.99v-1.98c0-1.109.888-2.005 2-2.01v-8zm2 0v8a2.004 2.004 0 0 1 2 2h8a2.004 2.004 0 0 1 2-2v-8a2.004 2.004 0 0 1-2-2h-8a2.004 2.004 0 0 1-2 2zm12 10.01v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01h-1.98c-.01 0-.01 0-.01.01zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C24 8 24 8 23.99 8h-1.98C22 8 22 8 22 8.01zm-14 14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01H8.01C8 22 8 22 8 22.01zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C10 8 10 8 9.99 8H8.01C8 8 8 8 8 8.01z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-dropbox"><path d="M11.06 4L16 8.433l-7.118 4.726L4 8.956 11.06 4zM4 17.362l4.882-4.203L16 17.884l-4.94 4.434L4 17.362zm12 .522l7.118-4.725L28 17.362l-7.06 4.956L16 17.884zm12-8.928l-4.882 4.203L16 8.433 20.94 4 28 8.956zm-11.986 9.882l4.955 4.42 2.12-1.488v1.669L16.014 28 8.94 23.439V21.77l2.12 1.489 4.954-4.42z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-empty-pubkey"><path d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13.704a1.296 1.296 0 1 0 0-2.592 1.296 1.296 0 0 0 0 2.592z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-error"><path d="M18.122 23.93V21a.583.583 0 0 0-.179-.434.585.585 0 0 0-.423-.175h-2.616a.585.585 0 0 0-.424.175.583.583 0 0 0-.179.434v2.93c0 .172.06.316.18.433.118.117.26.175.423.175h2.616a.585.585 0 0 0 .423-.175.583.583 0 0 0 .18-.434zm-.037-6.326l.339-9.05a.404.404 0 0 0-.189-.351c-.163-.135-.313-.203-.452-.203H14.64c-.138 0-.288.068-.452.203-.125.086-.188.215-.188.388l.32 9.013c0 .123.063.224.188.304.126.08.277.12.452.12h2.484c.176 0 .324-.04.443-.12a.41.41 0 0 0 .198-.304z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-evernote"><path d="M7.998 8.648h2.245a.233.233 0 0 0 .232-.233s-.028-1.931-.028-2.468v-.006c0-.441.093-.825.253-1.148l.077-.144a.05.05 0 0 0-.026.014l-4.359 4.34a.05.05 0 0 0-.016.025c.09-.044.213-.106.23-.113.38-.172.84-.267 1.392-.267M24.196 6.56c-.553-.2-1.675-.408-3.084-.575-1.134-.134-2.467-.123-3.272-.098-.097-.665-.56-1.272-1.08-1.482-1.384-.56-3.523-.424-4.071-.27-.437.123-.92.373-1.188.76-.18.258-.297.59-.298 1.051 0 .262.007.878.014 1.426.006.548.014 1.04.014 1.043a.887.887 0 0 1-.884.888H8.103c-.479 0-.845.08-1.124.208-.28.127-.478.3-.628.503-.3.404-.352.902-.351 1.411 0 0 .004.416.104 1.22.083.622.756 4.971 1.394 6.294.248.514.413.73.9.956 1.083.466 3.559.984 4.72 1.133 1.158.148 1.885.46 2.318-.451.002-.003.087-.227.204-.557.377-1.144.43-2.16.43-2.894 0-.075.108-.078.108 0 0 .519-.098 2.354 1.283 2.847.545.194 1.676.367 2.826.502 1.039.12 1.793.53 1.793 3.208 0 1.628-.34 1.851-2.122 1.851-1.444 0-1.994.038-1.994-1.113 0-.932.917-.834 1.596-.834.304 0 .083-.226.083-.8 0-.572.357-.902.02-.91-2.35-.066-3.733-.003-3.733 2.947 0 2.679 1.021 3.176 4.357 3.176 2.614 0 3.536-.086 4.616-3.45.213-.663.73-2.69 1.043-6.092.197-2.15-.187-8.644-.491-10.282-.178-.958-.746-1.43-1.259-1.616zm-3.3 8.792a4.75 4.75 0 0 0-.923.056c.081-.66.353-1.473 1.316-1.439 1.066.037 1.216 1.049 1.22 1.734-.45-.201-1.006-.33-1.613-.35"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-facebook"><path d="M18.67 5c-3.233 0-5.323 2.125-5.323 5.414v2.902h-2.895a.45.45 0 0 0-.452.448v3.213a.45.45 0 0 0 .452.448h2.895v9.127c0 .247.202.448.453.448h3.775c.25 0 .453-.201.453-.448v-9.127h3.383a.45.45 0 0 0 .453-.448l.002-3.213a.45.45 0 0 0-.453-.448h-3.385v-2.521c0-1.018.244-1.534 1.58-1.534l1.94-.001A.45.45 0 0 0 22 8.812V5.454a.45.45 0 0 0-.45-.45L18.67 5z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-file"><path d="M19 6l5 5h-4c-.556 0-1-.448-1-1V6zm5 7v11.192c0 .995-.808 1.808-1.804 1.808H9.804A1.808 1.808 0 0 1 8 24.2V7.74C8 6.602 8.627 6 9.778 6H17v4.994c0 1.12.898 2.006 2.006 2.006H24z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-flickr"><path d="M11 20c-2.212 0-4-1.79-4-4s1.79-4 4-4a4 4 0 0 1 0 8zm10.001 0a4 4 0 1 1-.002-8 4 4 0 0 1 .002 8z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-gdrive"><path d="M19.461 6l7.109 12h-7.004L12.539 6h6.922zm-9.27 19l3.467-6H27l-3.466 6H10.192zM5 18.841l6.618-11.36 3.566 5.929-6.722 11.36L5 18.84z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-gphotos"><path d="M21.845 21.452l-2.562-4.03h6.69l-4.128 4.03zm-5.758-3.986L14.533 16.1l1.38-1.566 1.555 1.366-1.38 1.566zm-1.5 8.512l-4.037-4.121 4.036-2.559v6.68zm-8.56-11.4l4.128-4.03 2.562 4.03h-6.69zm11.387-8.555l4.036 4.12-4.036 2.559v-6.68zM28.479 15.9h-5.01v-5.757l-6.866-6.912c-.397-.4-.713-.267-.713.29v5.013h-5.735l-6.924 6.854c-.4.396-.267.712.29.712h5.01v5.757l6.866 6.912c.397.4.713.267.713-.29v-5.012h5.735l6.924-6.855c.4-.396.267-.712-.29-.712z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-huddle"><path d="M13.63 14.39c.07-.102.17-.26.2-.313 1.474-2.683 6.857-2.686 8.49 1.002.43.968.67 1.97.675 3.023.008 1.978.004 3.957.002 5.936 0 1.192-.68 1.945-1.763 1.962-1.087.016-1.856-.766-1.865-1.944-.014-1.874.003-3.749-.006-5.623-.006-1.351-.654-2.388-1.719-2.793-1.775-.675-3.59.305-3.892 2.159-.122.747-.104 1.52-.114 2.281-.016 1.336-.002 2.673-.005 4.01-.003 1.125-.669 1.866-1.707 1.907-1.06.042-1.828-.668-1.922-1.78-.007-.086-.003-.173-.003-.26 0-5.31-.002-10.622.002-15.932 0-1.2.731-2.016 1.79-2.025 1.05-.01 1.832.74 1.837 1.792.01 2.013.003 4.026.005 6.04 0 .12.002.391-.005.558"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-instagram"><path d="M16 5c2.987 0 3.362.013 4.535.066 1.171.054 1.97.24 2.67.511a5.391 5.391 0 0 1 1.949 1.27 5.392 5.392 0 0 1 1.269 1.948c.272.7.457 1.499.51 2.67.054 1.173.067 1.548.067 4.535s-.013 3.362-.066 4.535c-.054 1.171-.24 1.97-.511 2.67a5.392 5.392 0 0 1-1.27 1.949 5.391 5.391 0 0 1-1.948 1.269c-.7.271-1.499.457-2.67.51-1.173.054-1.548.067-4.535.067s-3.362-.013-4.535-.066c-1.171-.054-1.97-.24-2.67-.511a5.392 5.392 0 0 1-1.949-1.27 5.391 5.391 0 0 1-1.268-1.948c-.273-.7-.458-1.499-.512-2.67C5.013 19.362 5 18.987 5 16s.013-3.362.066-4.535c.054-1.171.24-1.97.512-2.67a5.391 5.391 0 0 1 1.268-1.949 5.392 5.392 0 0 1 1.949-1.269c.7-.271 1.499-.457 2.67-.51C12.638 5.012 13.013 5 16 5zm0 1.982c-2.937 0-3.285.011-4.445.064-1.072.049-1.655.228-2.042.379-.514.2-.88.438-1.265.823a3.41 3.41 0 0 0-.823 1.264c-.15.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.072.228 1.655.379 2.043.2.513.438.88.823 1.264.385.385.751.624 1.265.823.387.15.97.33 2.042.379 1.16.053 1.508.064 4.445.064 2.937 0 3.285-.011 4.445-.064 1.072-.049 1.655-.228 2.042-.379.514-.2.88-.438 1.265-.823.385-.385.624-.751.823-1.264.15-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.072-.228-1.655-.379-2.043-.2-.513-.438-.88-.823-1.264a3.408 3.408 0 0 0-1.265-.823c-.387-.15-.97-.33-2.042-.379-1.16-.053-1.508-.064-4.445-.064zm0 3.37a5.649 5.649 0 1 1 0 11.297 5.649 5.649 0 0 1 0-11.298zm0 9.315a3.667 3.667 0 1 0 0-7.334 3.667 3.667 0 0 0 0 7.334zm7.192-9.539a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-menu"><path d="M7.5 10a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-more"><path d="M21 16a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-8 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-8 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-remove"><path d="M22.142 24.009c-.078 1.1-1.044 1.991-2.15 1.991h-7.983c-1.11 0-2.073-.897-2.151-1.991l-.786-11.002A.924.924 0 0 1 10.007 12h11.986c.556 0 .975.45.935 1.007l-.786 11.002zM13 7V6c0-.556.444-1 .99-1h4.02A1 1 0 0 1 19 6v1h4c.556 0 1 .447 1 .999v1.002A.997.997 0 0 1 23 10H9c-.555 0-1-.447-1-.999V7.999A.996.996 0 0 1 9 7h4z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-skydrive"><path d="M11.715 16.427c.584-2.413 2.699-4.177 5.209-4.177 1.483 0 2.873.621 3.878 1.7.425-.14.922-.248 1.364-.258v-.16c0-3.054-2.214-5.532-4.944-5.532-1.952 0-3.624 1.278-4.428 3.115a3.55 3.55 0 0 0-2.033-.658c-2.142 0-3.877 1.94-3.877 4.336 0 .258.028.51.068.754-1.652.167-2.946 1.9-2.946 3.79 0 .02.005.037.005.056-.001.017-.011.035-.011.052 0 .757.257 1.449.673 2.007a3.14 3.14 0 0 0 2.568 1.317h1.513a4.49 4.49 0 0 1-.477-1.987c-.001-2.138 1.476-3.93 3.438-4.355zm13.752 2.375c-.03 0-.06.01-.09.01.008-.09.026-.18.026-.273 0-1.812-1.431-3.279-3.198-3.279-.703 0-1.347.24-1.877.635-.655-1.249-1.924-2.107-3.405-2.107-2.146 0-3.885 1.784-3.885 3.984 0 .029.008.053.009.082a2.764 2.764 0 0 0-.431-.045c-1.602 0-2.898 1.33-2.898 2.973 0 .205.02.406.059.599C10.05 22.87 11.322 24 12.856 24h12.847v-.023C26.99 23.85 28 22.753 28 21.402c0-1.435-1.134-2.6-2.533-2.6z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-uploadcare"><path fill="#ffd800" d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13.704a1.296 1.296 0 1 0 0-2.592 1.296 1.296 0 0 0 0 2.592z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-url"><path d="M16 5c6.074 0 11 4.926 11 11s-4.926 11-11 11S5 22.074 5 16 9.926 5 16 5zm6.076 6.327a.992.992 0 1 0-1.403-1.403l-1.128 1.128c-1.431-.92-3.47-.768-4.697.461l-3.186 3.185a3.7 3.7 0 0 0-1.09 2.636c0 .748.22 1.46.624 2.067l-1.272 1.272a.992.992 0 1 0 1.402 1.403l1.273-1.272c.606.405 1.32.623 2.067.623.997 0 1.933-.386 2.634-1.089l3.187-3.186a3.729 3.729 0 0 0 .464-4.7l1.125-1.125zm-4.252 3.841a.982.982 0 0 0 .701-.29l.95-.95c.067.188.114.385.114.591 0 .466-.178.904-.505 1.23l-3.186 3.187c-.472.47-1.197.588-1.813.382l.793-.792a.992.992 0 1 0-1.404-1.404l-.801.802a1.752 1.752 0 0 1-.115-.59c0-.468.179-.905.506-1.232l3.186-3.186a1.736 1.736 0 0 1 1.23-.507c.207 0 .404.049.592.116l-.948.95a.992.992 0 0 0 .7 1.693z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-vk"><path d="M27.791 21.484c-.416-.767-1.212-1.708-2.386-2.824l-.038-.038c-.558-.532-.895-.882-1.037-1.06-.258-.341-.316-.686-.175-1.036.1-.264.475-.821 1.125-1.673.341-.451.612-.813.812-1.086 1.441-1.959 2.066-3.21 1.874-3.756l-.074-.127c-.05-.077-.18-.147-.387-.211-.209-.064-.475-.075-.8-.032l-3.599.025a.457.457 0 0 0-.25.007l-.163.038-.062.032-.05.039a.56.56 0 0 0-.137.134.882.882 0 0 0-.125.223 21.072 21.072 0 0 1-1.337 2.875 27.31 27.31 0 0 1-.85 1.373c-.258.388-.475.673-.65.856a4.57 4.57 0 0 1-.475.44c-.141.112-.25.158-.324.141a8.987 8.987 0 0 1-.213-.05.843.843 0 0 1-.281-.314 1.425 1.425 0 0 1-.144-.498c-.025-.2-.04-.373-.044-.518-.003-.144-.002-.349.007-.613.008-.264.012-.443.012-.536 0-.324.007-.675.019-1.054l.031-.901c.009-.222.013-.456.013-.703 0-.247-.015-.44-.044-.581a2.02 2.02 0 0 0-.131-.409.684.684 0 0 0-.256-.307 1.426 1.426 0 0 0-.419-.172c-.441-.102-1.004-.158-1.687-.166-1.55-.017-2.545.085-2.986.307a1.69 1.69 0 0 0-.475.383c-.15.187-.171.29-.063.306.5.077.854.26 1.062.55l.075.153c.059.11.117.307.175.588.059.28.096.592.113.932.041.622.041 1.154 0 1.597-.042.443-.081.788-.119 1.035a2.107 2.107 0 0 1-.169.6 2.55 2.55 0 0 1-.15.281.217.217 0 0 1-.062.064.918.918 0 0 1-.337.064c-.117 0-.259-.06-.425-.179a3.024 3.024 0 0 1-.519-.492c-.179-.208-.38-.5-.606-.875a15.385 15.385 0 0 1-.7-1.328l-.2-.37a32.156 32.156 0 0 1-.512-1.042 20.306 20.306 0 0 1-.575-1.323.84.84 0 0 0-.3-.408l-.062-.039a.85.85 0 0 0-.2-.108 1.304 1.304 0 0 0-.287-.083L4.8 9.64c-.35 0-.587.081-.712.243l-.05.077a.421.421 0 0 0-.038.204c0 .094.025.209.075.345.5 1.201 1.043 2.36 1.63 3.475C6.294 15.1 6.804 16 7.237 16.68c.433.681.875 1.324 1.325 1.929.45.604.748.992.893 1.162.146.17.26.298.344.384l.312.306c.2.205.494.45.881.735.388.285.817.566 1.287.843.471.277 1.019.503 1.644.677a5.564 5.564 0 0 0 1.824.211h1.437c.292-.026.512-.12.662-.281l.05-.064a.858.858 0 0 0 .094-.236c.029-.107.044-.224.044-.351a4.301 4.301 0 0 1 .08-.99c.063-.294.134-.516.213-.665a1.632 1.632 0 0 1 .482-.562.806.806 0 0 1 .1-.045c.2-.068.434-.002.705.199.271.2.525.447.763.74.237.295.522.625.856.99.333.367.625.64.874.818l.25.154c.167.102.384.196.65.28.266.086.5.107.7.065l3.199-.051c.316 0 .562-.054.737-.16.175-.107.279-.224.312-.351.034-.128.035-.273.007-.435a1.632 1.632 0 0 0-.088-.338 1.694 1.694 0 0 0-.082-.16z"/></symbol></svg>\n');
return __p.join("")},a.templates.JST.progress__text=function(e){var __p=[],t=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--progress__text-container">\r\n  <div class="uploadcare--progress__text"></div>\r\n</div>\r\n');return __p.join("")},a.templates.JST.styles=function(e){var __p=[],t=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('.uploadcare--jcrop-handle{box-sizing:border-box;padding:12.5px;width:45px;height:45px;background:transparent;z-index:2147483621}@media (min-width:760px){.uploadcare--jcrop-handle{height:35px;width:35px;padding:10px}}.uploadcare--jcrop-handle:before{content:"";display:block;width:20px;height:20px;background:#fff;box-shadow:inset 0 0 0 1px rgba(0,0,0,.2);border-radius:50%}@media (min-width:760px){.uploadcare--jcrop-handle:before{height:15px;width:15px}}.uploadcare--jcrop-handle.ord-nw{margin-top:-22.5px;margin-left:-22.5px;top:0;left:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-nw{margin-left:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-ne{margin-top:-22.5px;margin-right:-22.5px;top:0;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-ne{margin-right:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-se{margin-bottom:-22.5px;margin-right:-22.5px;bottom:0;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-se{margin-right:-17.5px;margin-bottom:-17.5px}}.uploadcare--jcrop-handle.ord-sw{margin-bottom:-22.5px;margin-left:-22.5px;bottom:0;left:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-sw{margin-left:-17.5px;margin-bottom:-17.5px}}.uploadcare--jcrop-hline{width:100%;height:1px!important;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);z-index:2147483620}.uploadcare--jcrop-hline.bottom{bottom:0}.uploadcare--jcrop-vline{width:1px!important;height:100%;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);z-index:2147483620}.uploadcare--jcrop-vline.right{right:0}.uploadcare--jcrop-tracker{height:100%;width:100%;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uploadcare--jcrop-holder img{max-width:none;max-height:none}.uploadcare--text{margin:0 0 10px;padding:0;font-size:17.5px;line-height:25px}.uploadcare--text:empty{display:none}.uploadcare--text_muted{color:#a4a2a1}.uploadcare--text_pre{box-sizing:border-box;overflow-x:auto;padding:20px;max-width:100%;background:#e3e1e1;font-family:monospace;white-space:pre;text-align:left}.uploadcare--text_size_small{font-size:15px;line-height:20px}.uploadcare--text_size_medium{font-size:20px;font-weight:700;line-height:25px}.uploadcare--text_size_large{font-size:22px;font-weight:700;line-height:25px}.uploadcare--text_size_extra-large{font-size:35px;line-height:45px}@media (min-width:760px){.uploadcare--text_size_extra-large{font-size:42.5px;line-height:50px}}.uploadcare--icon{all:initial;color:inherit;fill:currentColor;margin:0;padding:0;max-width:100%;width:32px;height:32px;cursor:inherit}.uploadcare--link,.uploadcare--link:link,.uploadcare--link:visited{cursor:pointer;color:#157cfc;text-decoration:underline}.uploadcare--link:focus,.uploadcare--link:hover{color:#3891ff;text-decoration:none}.uploadcare--link:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--link:active{color:#0969ee}.uploadcare--button{all:initial;-ms-flex-negative:0;flex-shrink:0;display:inline-block;overflow:hidden;box-sizing:border-box;margin:0;padding:10px;width:auto;min-width:100px;height:auto;min-height:0;border-radius:6px;border:1px solid #157cfc;background:transparent;color:#157cfc;cursor:default;white-space:nowrap;text-overflow:ellipsis;text-align:center;font-family:inherit;font-size:15px;font-weight:400;font-style:normal;line-height:20px;box-shadow:none;text-shadow:none;transition:background .3s,color .3s,border .3s}.uploadcare--button:focus,.uploadcare--button:hover{background:transparent;border-color:#3891ff;color:#3891ff;font-weight:400;font-style:normal;box-shadow:none;text-shadow:none}.uploadcare--button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--button:active{border-color:#0969ee;color:#0969ee}.uploadcare--button:disabled,.uploadcare--button[aria-disabled=true]{background:transparent!important;border-color:#d4d2d2!important;color:#d4d2d2!important;cursor:not-allowed}@media (min-width:760px){.uploadcare--button{padding:10px 20px;font-size:17.5px;line-height:25px}}.uploadcare--button_icon{padding:14px;min-width:0;width:60px;height:60px}.uploadcare--button_muted{border-color:transparent!important;color:#a4a2a1;border-radius:0}.uploadcare--button_muted:focus,.uploadcare--button_muted:hover{color:#157cfc}.uploadcare--button_muted:disabled,.uploadcare--button_muted[aria-disabled=true]{border-color:transparent!important}.uploadcare--button_overlay{background:rgba(53,53,53,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:focus,.uploadcare--button_overlay:hover{background:hsla(0,0%,40%,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:active{background:rgba(33,33,33,.5)}.uploadcare--button_primary{background:#157cfc;border-color:#157cfc;color:#fff}.uploadcare--button_primary:focus,.uploadcare--button_primary:hover{background:#3891ff;border-color:#3891ff;color:#fff}.uploadcare--button_primary:active{background:#0969ee;border-color:#0969ee}.uploadcare--button_primary:disabled,.uploadcare--button_primary[aria-disabled=true]{background:#d4d2d2!important;border-color:#d4d2d2!important;color:#fff!important}.uploadcare--button_size_big{padding:10px 25px;font-size:20px;line-height:30px}.uploadcare--button_size_small{padding:5px 10px;min-width:80px;font-size:15px;line-height:20px}.uploadcare--input{-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-negative:0;flex-shrink:0;display:block;box-sizing:border-box;margin:5px 0 15px;padding:10px 15px;width:100%;font-size:17.5px;line-height:25px;background:#fff;color:#353535;border:1px solid #a4a2a1;border-radius:2px;box-shadow:none}.uploadcare--input:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--input::-webkit-input-placeholder{color:#a4a2a1}.uploadcare--input:-ms-input-placeholder,.uploadcare--input::-ms-input-placeholder{color:#a4a2a1}.uploadcare--input::placeholder{color:#a4a2a1}.uploadcare--form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;max-width:400px;width:100%}.uploadcare--error{color:#e66a6a}.uploadcare--powered-by{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:7.5px 0;font-size:12.5px;line-height:15px;color:#fff;text-align:center}.uploadcare--powered-by__link{color:inherit!important;text-decoration:none!important}.uploadcare--powered-by__link,.uploadcare--powered-by__logo{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.uploadcare--powered-by__logo{width:20px;height:15px;vertical-align:text-bottom}.uploadcare--progress__canvas{width:100%;height:100%}.uploadcare--progress__text{display:table-cell;vertical-align:middle;text-align:center;font-size:60%;line-height:1}.uploadcare--progress__text-container{width:100%;height:100%;display:table;white-space:normal}.uploadcare--progress_type_canvas{padding:2px;width:32px;height:32px;color:#ffd800;border-color:#e3e1e1}.uploadcare--progressbar{overflow:hidden;width:100%;height:100%;background:#e3e1e1;border-radius:6px}.uploadcare--progressbar__value{width:0;height:100%;background:#ffd800}.uploadcare--menu{-ms-flex-negative:0;flex-shrink:0;width:100%;width:100vw;max-width:100%;height:100%;overflow:hidden}@media (min-width:760px){.uploadcare--menu{width:60px}}@media (max-width:759px){.uploadcare--menu{height:60px}}.uploadcare--menu__icon{-ms-flex-negative:0;flex-shrink:0;margin:14px}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__item_current:not(.uploadcare--menu__item_tab_file) .uploadcare--menu__icon{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin-left:0}}.uploadcare--menu__item{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;height:60px;overflow:hidden;cursor:default;background:#e3e1e1;color:#666;transition:background .3s,color .3s}@media (min-width:760px){.uploadcare--menu__item{width:60px}}.uploadcare--menu__item:focus,.uploadcare--menu__item:hover{color:#157cfc}.uploadcare--menu__item:active{background-color:#fff;color:#0969ee}.uploadcare--menu__item:focus{outline:none;box-shadow:inset 0 0 0 2px rgba(21,124,252,.5)}.uploadcare--menu__item[aria-disabled=true]{background:#e3e1e1!important;color:#666!important;cursor:not-allowed}.uploadcare--menu__item:after{content:attr(title);-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;height:30px;font-size:17px;line-height:30px;white-space:nowrap}@media (min-width:760px){.uploadcare--menu__item:after{overflow:hidden;max-width:170px;text-overflow:ellipsis}}.uploadcare--menu__item_current,.uploadcare--menu__item_current:active,.uploadcare--menu__item_current:focus,.uploadcare--menu__item_current:hover{background-color:#fff;color:#353535}.uploadcare--menu__item_hidden{display:none}.uploadcare--menu__items{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;padding-right:100vw;overflow-y:auto;overflow-x:hidden;background:#e3e1e1}.uploadcare--menu__toggle{width:60px;height:60px;transition:none}.uploadcare--menu__toggle:focus{outline-offset:-2px}@media (min-width:760px){.uploadcare--menu__toggle{display:none}}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__toggle-icon_back{display:none}}@media (max-width:759px){.uploadcare--menu_opened{position:relative;z-index:1000;height:100%}.uploadcare--menu_opened .uploadcare--menu__toggle{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;text-align:left;background:#e3e1e1}.uploadcare--menu_opened .uploadcare--menu__toggle-icon_menu{display:none}.uploadcare--menu_opened .uploadcare--menu__items{height:calc(100% - 60px)}}.uploadcare--footer{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;width:100%;margin-top:10px;padding:5px 20px 15px}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer{display:block}}.uploadcare--footer:empty{display:none}.uploadcare--footer__additions{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;padding:0 0 15px;text-align:center}@media (max-width:759px) and (orientation:landscape){.uploadcare--footer__additions{padding:0 20px}}@media (max-width:500px) and (orientation:landscape){.uploadcare--footer__additions{display:none}}@media (min-width:760px){.uploadcare--footer__additions{padding:0 20px}}.uploadcare--footer__additions:empty{visibility:hidden;padding:0}.uploadcare--footer__button{margin-top:5px;margin-bottom:5px}.uploadcare--footer__button:first-of-type{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.uploadcare--footer__button:nth-of-type(2){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}@media (max-width:759px){.uploadcare--footer__button{max-width:calc(50% - 20px)}}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer__button:first-of-type{float:left}.uploadcare--footer__button:nth-of-type(2){float:right}}.uploadcare--dragging .uploadcare--draganddrop{margin:20px;background:#e3e1e1;color:#a4a2a1;border:2px dashed;border-radius:20px}.uploadcare--draganddrop.uploadcare--dragging{color:#157cfc!important}@media (max-width:759px){.uploadcare--draganddrop__title{display:none}}.uploadcare--draganddrop:not(.uploadcare--draganddrop_supported) .uploadcare--draganddrop__supported,.uploadcare--draganddrop_supported .uploadcare--draganddrop__not-supported,.uploadcare--dragging .uploadcare--dialog__close,.uploadcare--dragging__show{display:none}.uploadcare--dragging .uploadcare--dragging__show{display:block}.uploadcare--dragging .uploadcare--dragging__hide{display:none}.uploadcare--file{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;box-sizing:border-box;padding:5px 0 5px 20px;color:#353535;cursor:default}.uploadcare--file:hover{background:rgba(21,124,252,.1)}.uploadcare--file__description{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:0;padding-right:20px;text-align:left}.uploadcare--file__description:focus,.uploadcare--file__description:focus .uploadcare--file__preview,.uploadcare--file__description:hover,.uploadcare--file__description:hover .uploadcare--file__preview{color:#157cfc}.uploadcare--file__description:active,.uploadcare--file__description:active .uploadcare--file__preview{color:#0969ee}.uploadcare--file__description:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:2px}.uploadcare--file__icon{max-width:100%;max-height:100%}.uploadcare--file__name{overflow:hidden;margin:0;max-width:calc(100vw - 200px);line-height:25px;white-space:nowrap;text-overflow:ellipsis;transition:color .3s}@media (min-width:760px){.uploadcare--file__name{max-width:350px}}.uploadcare--file__preview{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;float:left;box-sizing:border-box;margin-right:10px;padding:2px;width:60px;height:60px;overflow:hidden;border:1px solid;border-radius:6px;background:transparent;color:#e3e1e1;transition:border .3s}.uploadcare--file__progressbar{-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:center;align-self:center;margin:0 10px;width:60px;height:10px}.uploadcare--file__size{font-size:12.5px;color:#a4a2a1}.uploadcare--file_status_error,.uploadcare--file_status_error .uploadcare--file__description,.uploadcare--file_status_error .uploadcare--file__preview{color:#e66a6a!important}.uploadcare--file_status_error .uploadcare--file__name{color:hsla(0,71%,66%,.5)!important}.uploadcare--file_status_error .uploadcare--file__progressbar,.uploadcare--file_status_error .uploadcare--file__size,.uploadcare--file_status_uploaded .uploadcare--file__progressbar{display:none}.uploadcare--file_status_uploading,.uploadcare--file_status_uploading .uploadcare--file__description{color:#353535!important}.uploadcare--file_status_uploading .uploadcare--file__name{max-width:calc(100vw - 280px)}@media (min-width:760px){.uploadcare--file_status_uploading .uploadcare--file__name{max-width:270px}}.uploadcare--file_status_uploading .uploadcare--file__preview{background:#ffd800;color:#ffd800!important}.uploadcare--files{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;width:100%;height:100%}.uploadcare--files__item{-ms-flex-negative:0;flex-shrink:0}.uploadcare--crop-sizes{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.uploadcare--crop-sizes__item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;height:65px;background:transparent;border-color:transparent;color:#353535}.uploadcare--crop-sizes__item:focus,.uploadcare--crop-sizes__item:hover{background:transparent;border-color:transparent;color:#157cfc}.uploadcare--crop-sizes__item:active{background:transparent;border-color:transparent;color:#0969ee}.uploadcare--crop-sizes__item:disabled,.uploadcare--crop-sizes__item[aria-disabled=true]{border-color:transparent!important}.uploadcare--crop-sizes__item:after{content:attr(data-caption);display:block;font-size:14px;line-height:25px;text-transform:uppercase}@media (max-width:400px),(max-width:600px) and (orientation:landscape){.uploadcare--crop-sizes__item:after{font-size:12px}}.uploadcare--crop-sizes__item:before{content:"";display:block;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;margin:1px 0;width:6px;height:6px;background:transparent;border-radius:50%}.uploadcare--crop-sizes__item_current:active,.uploadcare--crop-sizes__item_current:focus,.uploadcare--crop-sizes__item_current:hover{color:#353535}.uploadcare--crop-sizes__item_current:before{background:#157cfc}.uploadcare--crop-sizes__icon{box-sizing:border-box;width:30px;height:30px;border:2px solid;border-radius:2px;color:inherit;-webkit-transform:scale(.666);transform:scale(.666)}.uploadcare--crop-sizes__icon_free{border:none;border-radius:0;-webkit-transform:none;transform:none}.uploadcare--file-source{margin:10px;border-color:#e3e1e1;background:#e3e1e1;color:#353535}.uploadcare--file-source_all{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;border-color:currentColor;background:transparent;color:#157cfc}.uploadcare--file-sources{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}@media (max-width:759px) and (max-height:450px),(min-width:760px){.uploadcare--file-sources{display:none}}.uploadcare--file-sources__caption{margin:15px 0 5px}@media (max-width:759px) and (max-height:550px){.uploadcare--file-sources__item:nth-child(4),.uploadcare--file-sources__item:nth-child(5),.uploadcare--file-sources__item:nth-child(6){display:none}}.uploadcare--file-sources__items{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-width:300px}.uploadcare--file-sources__items:empty,.uploadcare--file-sources__items:not(.uploadcare--file-sources__items_many) .uploadcare--file-source__all{display:none}.uploadcare--media{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;width:100%}.uploadcare--media__image{position:absolute;top:50%;left:50%;max-width:100%;max-height:100%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.uploadcare--media__video{all:initial;width:auto;max-width:100%;height:auto;min-height:100px;max-height:100%}@media (max-width:759px) and (max-height:379px){.uploadcare--media__video{max-height:120px}}@media (max-width:759px) and (min-height:380px) and (max-height:499px){.uploadcare--media__video{max-height:160px}}@media (max-width:759px) and (min-height:500px),(min-width:760px){.uploadcare--media__video{max-height:300px}}.uploadcare--camera__button{margin:5px 10px}.uploadcare--camera__button_type_mirror{position:absolute;top:15px;left:50%;margin:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.uploadcare--camera__video{transition:-webkit-transform .8s cubic-bezier(.23,1,.32,1);transition:transform .8s cubic-bezier(.23,1,.32,1);transition:transform .8s cubic-bezier(.23,1,.32,1),-webkit-transform .8s cubic-bezier(.23,1,.32,1)}.uploadcare--camera__video_mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.uploadcare--camera__video-container{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;position:relative;margin-bottom:10px}.uploadcare--camera_status_denied .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_capture,.uploadcare--camera_status_denied .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_denied .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_denied .uploadcare--camera__controls,.uploadcare--camera_status_denied .uploadcare--camera__not-found,.uploadcare--camera_status_denied .uploadcare--camera__please-allow,.uploadcare--camera_status_denied .uploadcare--camera__video-container,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_capture,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_retry,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_not-founded .uploadcare--camera__controls,.uploadcare--camera_status_not-founded .uploadcare--camera__please-allow,.uploadcare--camera_status_not-founded .uploadcare--camera__video-container,.uploadcare--camera_status_ready .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_ready .uploadcare--camera__button_type_retry,.uploadcare--camera_status_ready .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_ready .uploadcare--camera__not-found,.uploadcare--camera_status_ready .uploadcare--camera__please-allow,.uploadcare--camera_status_recording .uploadcare--camera__button_type_capture,.uploadcare--camera_status_recording .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_recording .uploadcare--camera__button_type_retry,.uploadcare--camera_status_recording .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_recording .uploadcare--camera__not-found,.uploadcare--camera_status_recording .uploadcare--camera__please-allow,.uploadcare--camera_status_requested .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_capture,.uploadcare--camera_status_requested .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_requested .uploadcare--camera__button_type_retry,.uploadcare--camera_status_requested .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_requested .uploadcare--camera__controls,.uploadcare--camera_status_requested .uploadcare--camera__not-found,.uploadcare--camera_status_requested .uploadcare--camera__video-container{display:none}.uploadcare--crop-widget>.uploadcare--preview__image{-webkit-filter:brightness(60%);filter:brightness(60%);-webkit-transform:none;transform:none}.uploadcare--tab{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;text-align:center}.uploadcare--tab,.uploadcare--tab__content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploadcare--tab__content{-ms-flex-negative:1;flex-shrink:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:auto;padding:0 20px}.uploadcare--tab__header{-ms-flex-negative:0;flex-shrink:0;padding:0 20px;overflow:hidden}@media (min-width:760px){.uploadcare--tab__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:60px;height:60px}}.uploadcare--tab__iframe{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;height:100%;border:0;opacity:0}.uploadcare--tab__title{margin-top:10px;margin-bottom:10px}.uploadcare--tab:not(.uploadcare--tab_current),.uploadcare--tab_name_preview.uploadcare--tab_current~.uploadcare--panel__footer{display:none}.uploadcare--tab_remote.uploadcare--tab_current~.uploadcare--panel__footer{margin-top:0}.uploadcare--panel{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;box-sizing:border-box;overflow:hidden;width:100%;height:500px;border:1px solid #a4a2a1;border-radius:6px;background:#fff;color:#353535;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:15px;line-height:20px}@media (min-width:760px){.uploadcare--panel{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.uploadcare--panel__content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.uploadcare--panel__file-counter{display:inline}.uploadcare--panel__footer{padding-top:15px;background:#fff9d8}.uploadcare--panel__icon{box-sizing:border-box;padding:3px}.uploadcare--panel__menu_hidden{display:none}.uploadcare--panel__message_hidden{color:#d4d2d2}.uploadcare--panel__powered-by{background:#353535;color:hsla(0,0%,100%,.5)}@media (min-width:760px){.uploadcare--panel__powered-by{display:none}}.uploadcare--tab:not(:nth-child(2)).uploadcare--tab_current~.uploadcare--panel__powered-by{display:none}@media (max-width:759px){.uploadcare--panel_menu-hidden .uploadcare--tab__header{padding:6px 60px 0;min-height:60px}}.uploadcare--panel:not(.uploadcare--panel_multiple) .uploadcare--panel__footer{display:none}.uploadcare--panel_multiple .uploadcare--tab_name_preview{height:100%}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__content{padding-left:0;padding-right:0}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer{position:relative;margin-top:0;padding-top:15px}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer:before{content:"";position:absolute;top:0;left:20px;width:calc(100% - 40px);height:1px;background:#e3e1e1}.uploadcare--preview__content{overflow:hidden}.uploadcare--preview__content_crop{padding:10px 20px}.uploadcare--dialog{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;position:fixed;top:0;left:0;z-index:2147483647;box-sizing:border-box;overflow:hidden;width:100%;height:100%;background:#fff;color:#353535;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:15px;line-height:20px;opacity:0;transition:opacity .33s cubic-bezier(.05,.7,.25,1)}@media (min-width:760px){.uploadcare--dialog{-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:auto;background:rgba(0,0,0,.5)}}@media (min-width:760px) and (max-height:559px){.uploadcare--dialog{padding-top:30px}}@media (min-width:760px) and (min-height:560px){.uploadcare--dialog{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.uploadcare--dialog__close{position:absolute;top:0;right:0;z-index:49}.uploadcare--dialog__close:focus{outline-offset:-2px}.uploadcare--dialog__container{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;overflow:hidden}@media (max-width:759px){.uploadcare--dialog__container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;height:100%}}@media (min-width:760px){.uploadcare--dialog__container{width:calc(100% - 60px);max-width:900px;height:calc(100% - 60px);min-height:500px;max-height:660px;border-radius:6px}}@media (min-width:1210px){.uploadcare--dialog__container{max-width:1050px}}.uploadcare--dialog__panel{height:100%;border:none;border-radius:0}@media (min-width:1210px){.uploadcare--dialog__panel .uploadcare--menu,.uploadcare--dialog__panel .uploadcare--menu__item{width:250px}}.uploadcare--dialog__powered-by{-ms-flex-negative:0;flex-shrink:0}@media (max-width:759px){.uploadcare--dialog__powered-by{display:none}}.uploadcare--dialog_status_active{opacity:1}.uploadcare--widget{display:inline-block;vertical-align:baseline}.uploadcare--dragging .uploadcare--widget,.uploadcare--widget.uploadcare--dragging{position:relative}.uploadcare--widget__button{all:initial;display:inline-block;box-sizing:border-box;margin:0;padding:.4em 1em;width:auto;min-width:0;height:auto;min-height:0;border-radius:6px;border:none;background:#c3c3c3;color:#fff;cursor:default;text-align:center;white-space:nowrap;font:inherit;line-height:inherit;box-shadow:none;text-shadow:inherit;transition:background .3s}.uploadcare--widget__button:focus,.uploadcare--widget__button:hover{background:#b3b3b3;color:#fff;font:inherit;box-shadow:none;text-shadow:inherit}.uploadcare--widget__button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--widget__button:active{background:#b3b3b3}.uploadcare--widget__button:disabled{background:#c3c3c3;color:#fff;cursor:not-allowed}.uploadcare--widget__button_type_open{background:#157cfc;color:#fff}.uploadcare--widget__button_type_open:focus,.uploadcare--widget__button_type_open:hover{background:#3891ff}.uploadcare--widget__button_type_open:active{background:#0969ee}.uploadcare--widget__button_type_open:disabled{background:#c3c3c3}.uploadcare--widget__dragndrop-area{position:absolute;top:0;left:0;box-sizing:border-box;min-width:100%;min-height:100%;margin:0;padding:calc(.4em - 1.5px) 1em;font:inherit;line-height:inherit;text-align:center;white-space:nowrap;border:1.5px dashed;border-radius:6px;background:#e3e1e1;color:#a4a2a1;transition:color .3s;display:none}.uploadcare--dragging .uploadcare--widget__dragndrop-area{display:block}.uploadcare--widget.uploadcare--dragging .uploadcare--widget__dragndrop-area{color:#157cfc}.uploadcare--widget__file-name,.uploadcare--widget__file-size{display:inline}.uploadcare--widget__progress{display:inline-block;width:1.8em;height:1.8em;margin:0 .2em 0 0;padding:0;line-height:0;vertical-align:middle}.uploadcare--widget__text{display:inline-block;box-sizing:border-box;margin-right:.2em;padding:.4em 0;white-space:nowrap}.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_error .uploadcare--widget__button_type_remove,.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_loaded .uploadcare--widget__button_type_remove,.uploadcare--widget_option_clearable.uploadcare--widget_status_error .uploadcare--widget__button_type_open,.uploadcare--widget_status_error .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_error .uploadcare--widget__progress,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_open,.uploadcare--widget_status_loaded .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_ready .uploadcare--widget__button_type_remove,.uploadcare--widget_status_ready .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__text,.uploadcare--widget_status_started .uploadcare--widget__button_type_open,.uploadcare--widget_status_started .uploadcare--widget__button_type_remove{display:none}.uploadcare--page{width:auto;min-width:0;max-width:100%;height:auto;min-height:0;max-height:100%;overflow:hidden}.uploadcare--mouse-focused:focus{outline:none}\n\r\n');
return __p.join("")},a.templates.JST["tab-camera"]=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--tab__content">\r\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">',(""+t("dialog.tabs.camera.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\r\n\r\n  <div class="uploadcare--media uploadcare--camera__video-container">\r\n    <video muted class="uploadcare--media__video uploadcare--camera__video uploadcare--camera__video_mirrored"></video>\r\n\r\n    <button type="button" class="uploadcare--button uploadcare--button_size_small uploadcare--button_overlay uploadcare--camera__button uploadcare--camera__button_type_mirror">\r\n      ',(""+t("dialog.tabs.camera.mirror")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n    </button>\r\n  </div>\r\n\r\n  <div class="uploadcare--camera__controls">\r\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_start-record">\r\n      ',(""+t("dialog.tabs.camera.startRecord")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n    </button>\r\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_capture">\r\n      ',(""+t("dialog.tabs.camera.capture")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n    </button>\r\n    <button type="button" class="uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_cancel-record">\r\n      ',(""+t("dialog.tabs.camera.cancelRecord")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n    </button>\r\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_stop-record">\r\n      ',(""+t("dialog.tabs.camera.stopRecord")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n    </button>\r\n  </div>\r\n\r\n  <div class="uploadcare--camera__please-allow">\r\n    <div class="uploadcare--text uploadcare--text_size_medium">\r\n        ',(""+t("dialog.tabs.camera.pleaseAllow.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n    </div>\r\n    <div class="uploadcare--text">\r\n        ',t("dialog.tabs.camera.pleaseAllow.text"),'\r\n    </div>\r\n  </div>\r\n\r\n  <div class="uploadcare--camera__not-found">\r\n    <div class="uploadcare--text uploadcare--text_size_medium">\r\n        ',(""+t("dialog.tabs.camera.notFound.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n    </div>\r\n    <div class="uploadcare--text">\r\n        ',(""+t("dialog.tabs.camera.notFound.text")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n    </div>\r\n  </div>\r\n\r\n  <button type="button" class="uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_retry">\r\n    ',(""+t("dialog.tabs.camera.retry")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\r\n  </button>\r\n</div>\r\n");return __p.join("")},a.templates.JST["tab-file"]=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--tab__content uploadcare--draganddrop">\r\n  <div class="uploadcare--text uploadcare--text_size_extra-large uploadcare--dragging__show">\r\n    ',t("draghere"),'\r\n  </div>\r\n\r\n  <div class="uploadcare--draganddrop__title uploadcare--dragging__hide">\r\n    <div class="uploadcare--draganddrop__supported">\r\n      <div class="uploadcare--text uploadcare--text_size_extra-large">\r\n        ',t("dialog.tabs.file.drag"),'\r\n      </div>\r\n      <div class="uploadcare--text uploadcare--text_size_small uploadcare--text_muted">\r\n        ',(""+t("dialog.tabs.file.or")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n      </div>\r\n    </div>\r\n\r\n    <div class="uploadcare--text uploadcare--text_size_large uploadcare--draganddrop__not-supported">\r\n      ',t("dialog.tabs.file.nodrop"),'\r\n    </div>\r\n  </div>\r\n\r\n  <button type="button" class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--tab__action-button needsclick  uploadcare--dragging__hide">\r\n    ',(""+t("dialog.tabs.file.button")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n  </button>\r\n\r\n  <div class="uploadcare--file-sources uploadcare--dragging__hide">\r\n    <div class="uploadcare--text uploadcare--text_size_small uploadcare--text_muted uploadcare--file-sources__caption">\r\n      ',(""+t("dialog.tabs.file.also")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n    </div>\r\n    <div class="uploadcare--file-sources__items">\r\n      <button type="button" class="uploadcare--button uploadcare--button_icon uploadcare--file-source uploadcare--file-source_all uploadcare--file-sources_item">\r\n          <svg role="presentation" width="32" height="32" class="uploadcare--icon">\r\n              <use xlink:href="#uploadcare--icon-more"></use>\r\n          </svg>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n');return __p.join("")},a.templates.JST["tab-preview-error"]=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--tab__content uploadcare--preview__content uploadcare--error">\r\n    <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\r\n      ',(""+t("dialog.tabs.preview.error."+error+".title")||t("dialog.tabs.preview.error.default.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n    </div>\r\n\r\n    <div class="uploadcare--text">',(""+t("dialog.tabs.preview.error."+error+".text")||t("dialog.tabs.preview.error.default.text")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\r\n\r\n    <button type="button" class="uploadcare--button uploadcare--preview__back">\r\n        ',(""+t("dialog.tabs.preview.error."+error+".back")||t("dialog.tabs.preview.error.default.back")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\r\n    </button>\r\n</div>\r\n");return __p.join("")},a.templates.JST["tab-preview-image"]=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--tab__header">\r\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\r\n    ',(""+t("dialog.tabs.preview.image.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n  </div>\r\n</div>\r\n\r\n<div class="uploadcare--tab__content uploadcare--preview__content">\r\n  <div class="uploadcare--media"><!--\r\n      1162x684 is 1.5 size of conteiner\r\n      TODO Use picture and srcset for create responsive image\r\n    --><img\r\n        src="',(""+src).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'"\r\n        title="',(""+(name||"")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'"\r\n        alt="',(""+(name||"")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'"\r\n      class="uploadcare--media__image uploadcare--preview__image"\r\n    />\r\n  </div>\r\n</div>\r\n\r\n<div class="uploadcare--footer uploadcare--tab__footer">\r\n  <div class="uploadcare--footer__additions">\r\n    '),
crop&&__p.push('\r\n    <div class="uploadcare--crop-sizes">\r\n      <div role="button" tabindex="0"\r\n           class="uploadcare--button uploadcare--button_icon uploadcare--crop-sizes__item" data-caption="free">\r\n        <div class="uploadcare--crop-sizes__icon"></div>\r\n      </div>\r\n    </div>\r\n    '),__p.push('\r\n  </div>\r\n\r\n  <!-- TODO Change Cancel to Remove -->\r\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\r\n      ',(""+t("dialog.tabs.preview.image.change")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n  </button>\r\n\r\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\r\n      ',(""+t("dialog.tabs.preview.done")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\r\n  </button>\r\n</div>\r\n");return __p.join("")},a.templates.JST["tab-preview-multiple-file"]=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--file uploadcare--files__item uploadcare--file_status_uploading">\r\n  <div class="uploadcare--file__description" tabindex="0">\r\n    <div class="uploadcare--file__preview"></div>\r\n    <div class="uploadcare--file__name">\r\n        ',(""+t("dialog.tabs.preview.unknownName")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n    </div>\r\n    <div class="uploadcare--file__size"></div>\r\n    <div class="uploadcare--file__error"></div>\r\n  </div>\r\n\r\n  <div class="uploadcare--file__progressbar">\r\n    <div class="uploadcare--progressbar">\r\n      <div class="uploadcare--progressbar__value"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <button type="button" class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--file__remove">\r\n    <svg role="presentation" width="32" height="32" class="uploadcare--icon">\r\n      <use xlink:href="#uploadcare--icon-remove"></use>\r\n    </svg>\r\n  </button>\r\n</div>\r\n');return __p.join("")},a.templates.JST["tab-preview-multiple"]=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--tab__header">\r\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title"></div>\r\n</div>\r\n\r\n<div class="uploadcare--tab__content uploadcare--preview__content">\r\n  <div class="uploadcare--files"></div>\r\n</div>\r\n\r\n<div class="uploadcare--footer uploadcare--tab__footer">\r\n  <div class="uploadcare--footer__additions uploadcare--preview__message"></div>\r\n\r\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\r\n      ',(""+t("dialog.tabs.preview.multiple.clear")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n  </button>\r\n\r\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\r\n      ',(""+t("dialog.tabs.preview.multiple.done")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\r\n  </button>\r\n</div>\r\n");return __p.join("")},a.templates.JST["tab-preview-regular"]=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--tab__header">\r\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">',(""+t("dialog.tabs.preview.regular.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\r\n</div>\r\n\r\n<div class="uploadcare--tab__content uploadcare--preview__content">\r\n  <div class="uploadcare--text uploadcare--preview__file-name">\r\n    ',(""+(file.name||t("dialog.tabs.preview.unknownName"))).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"",(""+utils.readableFileSize(file.size,"",", ")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n  </div>\r\n</div>\r\n\r\n<div class="uploadcare--footer uploadcare--tab__footer">\r\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\r\n      ',(""+t("dialog.tabs.preview.change")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n  </button>\r\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\r\n      ',(""+t("dialog.tabs.preview.done")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\r\n  </button>\r\n</div>\r\n\r\n");return __p.join("")},a.templates.JST["tab-preview-unknown"]=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--tab__header">\r\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\r\n    ',(""+t("dialog.tabs.preview.unknown.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n  </div>\r\n</div>\r\n\r\n<div class="uploadcare--tab__content uploadcare--preview__content">\r\n  <div class="uploadcare--text uploadcare--preview__file-name"></div>\r\n</div>\r\n\r\n<div class="uploadcare--footer uploadcare--tab__footer">\r\n  <!-- TODO Change Cancel to Remove -->\r\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\r\n      ',(""+t("dialog.tabs.preview.change")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n  </button>\r\n\r\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\r\n      ',(""+t("dialog.tabs.preview.unknown.done")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\r\n  </button>\r\n</div>\r\n");return __p.join("")},a.templates.JST["tab-preview-video"]=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--tab__header">\r\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\r\n    ',(""+t("dialog.tabs.preview.video.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n  </div>\r\n</div>\r\n\r\n<div class="uploadcare--tab__content uploadcare--preview__content">\r\n  <div class="uploadcare--media">\r\n    <video controls class="uploadcare--media__video uploadcare--preview__video"></video>\r\n  </div>\r\n</div>\r\n\r\n<div class="uploadcare--footer uploadcare--tab__footer">\r\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\r\n      ',(""+t("dialog.tabs.preview.video.change")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\r\n  </button>\r\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\r\n      ',(""+t("dialog.tabs.preview.done")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\r\n  </button>\r\n</div>\r\n");return __p.join("");
},a.templates.JST["tab-url"]=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--tab__content">\r\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">',(""+t("dialog.tabs.url.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\r\n\r\n  <div class="uploadcare--text">',(""+t("dialog.tabs.url.line1")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\r\n  <div class="uploadcare--text">',(""+t("dialog.tabs.url.line2")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\r\n\r\n  <form class="uploadcare--form">\r\n    <input type="text" class="uploadcare--input" placeholder="',(""+t("dialog.tabs.url.input")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'">\r\n    <button type="submit" class="uploadcare--button uploadcare--button_primary uploadcare--tab__action-button" type="submit">',(""+t("dialog.tabs.url.button")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"</button>\r\n  </form>\r\n</div>\r\n");return __p.join("")},a.templates.JST["widget-button"]=function(e){var __p=[],t=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<button type="button" class="uploadcare--widget__button uploadcare--widget__button_type_',name,'">\r\n    ',(""+caption).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\r\n</button>\r\n");return __p.join("")},a.templates.JST["widget-file-name"]=function(e){var __p=[],t=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--link uploadcare--widget__file-name"\r\n     tabindex="0" role="link">',(""+utils.fitText(name,20)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div><!--\r\n--><div class="uploadcare--widget__file-size">,\r\n    ',(""+utils.readableFileSize(size)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\r\n</div>\r\n");return __p.join("")},a.templates.JST.widget=function(e){var __p=[],r=function(){__p.push.apply(__p,arguments)};with(e||{})__p.push('<div class="uploadcare--widget">\r\n  <div class="uploadcare--widget__dragndrop-area">',(""+t("draghere")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\r\n  <div class="uploadcare--widget__progress"></div>\r\n  <div class="uploadcare--widget__text"></div>\r\n</div>\r\n');return __p.join("")},function(){var e,t;e=a.jQuery,t=a.templates.tpl,a.settings.waitForSettings.add(function(r){var i,a;return i=t("styles",{settings:r}),a=n.createElement("style"),a.setAttribute("type","text/css"),null!=a.styleSheet?a.styleSheet.cssText=i:a.appendChild(n.createTextNode(i)),e("head").prepend(a)})}.call(this),function(t){t.Jcrop=function(e,r){var i=t.extend({},t.Jcrop.defaults),a,o;function l(e){return Math.round(e)+"px"}function s(e){return i.baseClass+"-"+e}function c(){return t.fx.step.hasOwnProperty("backgroundColor")}function u(e){var r=t(e).offset();return[r.left,r.top]}function p(e){return[e.pageX-a[0],e.pageY-a[1]]}function d(e){"object"!=typeof e&&(e={}),i=t.extend(i,e),t.each(["onChange","onSelect","onRelease","onDblClick"],function(e,t){"function"!=typeof i[t]&&(i[t]=function(){})})}function h(e,t){if(a=u(T),"move"===e)return $.activateHandlers(_(t),y);var r=Q.getFixed(),i=g(e),n=Q.getCorner(g(i));Q.setPressed(Q.getCorner(i)),Q.setCurrent(n),$.activateHandlers(f(e,r),y)}function f(e,t){return function(r){if(i.aspectRatio)switch(e){case"e":r[1]=t.y+1;break;case"w":r[1]=t.y+1;break;case"n":r[0]=t.x+1;break;case"s":r[0]=t.x+1}else switch(e){case"e":r[1]=t.y2;break;case"w":r[1]=t.y2;break;case"n":r[0]=t.x2;break;case"s":r[0]=t.x2}Q.setCurrent(r),X.update()}}function _(e){var t=e;return Z.watchKeys(),function(e){Q.moveOffset([e[0]-t[0],e[1]-t[1]]),t=e,X.update()}}function g(e){switch(e){case"n":return"sw";case"s":return"nw";case"e":return"nw";case"w":return"ne";case"ne":return"sw";case"nw":return"se";case"se":return"nw";case"sw":return"ne"}}function m(e){return function(t){return i.disabled?!1:"move"!==e||i.allowMove?(a=u(T),K=!0,h(e,p(t)),t.stopPropagation(),t.preventDefault(),!1):!1}}function b(e,t,r){var i=e.width(),a=e.height();i>t&&t>0&&(i=t,a=t/e.width()*e.height()),a>r&&r>0&&(a=r,i=r/e.height()*e.width()),N=e.width()/i,V=e.height()/a,e.width(i).height(a)}function v(e){return{x:e.x*N,y:e.y*V,x2:e.x2*N,y2:e.y2*V,w:e.w*N,h:e.h*V}}function y(e){var t=Q.getFixed();X.enableHandles(),X.done()}function w(e){Q.setCurrent(e),X.update()}function x(){var e=t("<div></div>").addClass(s("tracker"));return e.css({opacity:0,backgroundColor:"white"}),e}"object"!=typeof e&&(e=t(e)[0]),"object"!=typeof r&&(r={}),d(r);var k={border:"none",visibility:"visible",margin:0,padding:0,position:"absolute",top:0,left:0},C=t(e),z=!0;if("IMG"==e.tagName){if(0!=C[0].width&&0!=C[0].height)C.width(C[0].width),C.height(C[0].height);else{var S=new Image;S.src=C[0].src,C.width(S.width),C.height(S.height)}var T=C.clone().removeAttr("id").css(k).show();T.width(C.width()),T.height(C.height()),C.after(T).hide()}else T=C.css(k).show(),z=!1,null===i.shade&&(i.shade=!0);b(T,i.boxWidth,i.boxHeight);var j=T.width(),F=T.height(),A=t("<div />").width(j).height(F).addClass(s("holder")).css({position:"relative",backgroundColor:i.bgColor}).insertAfter(C).append(T);i.addClass&&A.addClass(i.addClass);var D=t("<div />"),I=t("<div />").width("100%").height("100%").css({zIndex:310,position:"absolute",overflow:"hidden"}),P=t("<div />").css({position:"absolute",zIndex:600}).dblclick(function(){var e=Q.getFixed();i.onDblClick.call(de,e)}).insertBefore(T).append(I);z&&(D=t("<img />").attr("src",T.attr("src")).css(k).width(j).height(F),I.append(D));var O=i.boundary,U=x().width(j+2*O).height(F+2*O).css({position:"absolute",top:l(-O),left:l(-O),zIndex:290}),M=i.bgColor,E=i.bgOpacity,R,L,B,q,N,V,W=!0,K,G,H;a=u(T);var J=function(){function e(){var e={},t=["touchstart","touchmove","touchend"],r=n.createElement("div"),i;try{for(i=0;i<t.length;i++){var a=t[i];a="on"+a;var o=a in r;o||(r.setAttribute(a,"return;"),o="function"==typeof r[a]),e[t[i]]=o}return e.touchstart&&e.touchend&&e.touchmove}catch(l){return!1}}function t(){return i.touchSupport===!0||i.touchSupport===!1?i.touchSupport:e()}return{createDragger:function(e){return function(t){return t.pageX=t.originalEvent.changedTouches[0].pageX,t.pageY=t.originalEvent.changedTouches[0].pageY,i.disabled?!1:"move"!==e||i.allowMove?(K=!0,h(e,p(t)),t.stopPropagation(),t.preventDefault(),!1):!1}},isSupported:e,support:t()}}(),Q=function(){var e=0,t=0,r=0,a=0,n,o;function l(i){i=h(i),r=e=i[0],a=t=i[1]}function s(e){e=h(e),n=e[0]-r,o=e[1]-a,r=e[0],a=e[1]}function c(){return[n,o]}function u(i){var n=i[0],o=i[1];0>e+n&&(n-=n+e),0>t+o&&(o-=o+t),a+o>F&&(o+=F-(a+o)),r+n>j&&(n+=j-(r+n)),e+=n,r+=n,t+=o,a+=o}function p(e){var t=d();switch(e){case"ne":return[t.x2,t.y];case"nw":return[t.x,t.y];case"se":return[t.x2,t.y2];case"sw":return[t.x,t.y2]}}function d(){if(!i.aspectRatio)return _();var n=i.aspectRatio,o=i.minSize[0]/N,l=i.maxSize[0]/N,s=i.maxSize[1]/V,c=r-e,u=a-t,p=Math.abs(c),d=Math.abs(u),h=p/d,m,b,v,y;return 0===l&&(l=10*j),0===s&&(s=10*F),n>h?(b=a,v=d*n,m=0>c?e-v:v+e,0>m?(m=0,y=Math.abs((m-e)/n),b=0>u?t-y:y+t):m>j&&(m=j,y=Math.abs((m-e)/n),b=0>u?t-y:y+t)):(m=r,y=p/n,b=0>u?t-y:t+y,0>b?(b=0,v=Math.abs((b-t)*n),m=0>c?e-v:v+e):b>F&&(b=F,v=Math.abs(b-t)*n,m=0>c?e-v:v+e)),m>e?(o>m-e?m=e+o:m-e>l&&(m=e+l),b=b>t?t+(m-e)/n:t-(m-e)/n):e>m&&(o>e-m?m=e-o:e-m>l&&(m=e-l),b=b>t?t+(e-m)/n:t-(e-m)/n),0>m?(e-=m,m=0):m>j&&(e-=m-j,m=j),0>b?(t-=b,b=0):b>F&&(t-=b-F,b=F),g(f(e,t,m,b));
}function h(e){return e[0]<0&&(e[0]=0),e[1]<0&&(e[1]=0),e[0]>j&&(e[0]=j),e[1]>F&&(e[1]=F),[e[0],e[1]]}function f(e,t,r,i){var a=e,n=r,o=t,l=i;return e>r&&(a=r,n=e),t>i&&(o=i,l=t),[a,o,n,l]}function _(){var i=r-e,n=a-t,o;return R&&Math.abs(i)>R&&(r=i>0?e+R:e-R),L&&Math.abs(n)>L&&(a=n>0?t+L:t-L),q/V&&Math.abs(n)<q/V&&(a=n>0?t+q/V:t-q/V),B/N&&Math.abs(i)<B/N&&(r=i>0?e+B/N:e-B/N),0>e&&(r-=e,e-=e),0>t&&(a-=t,t-=t),0>r&&(e-=r,r-=r),0>a&&(t-=a,a-=a),r>j&&(o=r-j,e-=o,r-=o),a>F&&(o=a-F,t-=o,a-=o),e>j&&(o=e-F,a-=o,t-=o),t>F&&(o=t-F,a-=o,t-=o),g(f(e,t,r,a))}function g(e){return{x:e[0],y:e[1],x2:e[2],y2:e[3],w:e[2]-e[0],h:e[3]-e[1]}}return{flipCoords:f,setPressed:l,setCurrent:s,getOffset:c,moveOffset:u,getCorner:p,getFixed:d}}(),Y=function(){var e=!1,r=t("<div />").css({position:"absolute",zIndex:240,opacity:0}),a={top:c(),left:c().height(F),right:c().height(F),bottom:c()};function n(e,t){a.left.css({height:l(t)}),a.right.css({height:l(t)})}function o(){return s(Q.getFixed())}function s(e){a.top.css({left:l(e.x),width:l(e.w),height:l(e.y)}),a.bottom.css({top:l(e.y2),left:l(e.x),width:l(e.w),height:l(F-e.y2)}),a.right.css({left:l(e.x2),width:l(j-e.x2)}),a.left.css({width:l(e.x)})}function c(){return t("<div />").css({position:"absolute",backgroundColor:i.shadeColor||i.bgColor}).appendTo(r)}function u(){e||(e=!0,r.insertBefore(T),o(),X.setBgOpacity(1,0,1),D.hide(),p(i.shadeColor||i.bgColor,1),X.isAwake()?h(i.bgOpacity,1):h(1,1))}function p(e,t){ue(_(),e,t)}function d(){e&&(r.remove(),D.show(),e=!1,X.isAwake()?X.setBgOpacity(i.bgOpacity,1,1):(X.setBgOpacity(1,1,1),X.disableHandles()),ue(A,0,1))}function h(t,a){e&&(i.bgFade&&!a?r.animate({opacity:1-t},{queue:!1,duration:i.fadeTime}):r.css({opacity:1-t}))}function f(){i.shade?u():d(),X.isAwake()&&h(i.bgOpacity)}function _(){return r.children()}return{update:o,updateRaw:s,getShades:_,setBgColor:p,enable:u,disable:d,resize:n,refresh:f,opacity:h}}(),X=function(){var e,r={},a={},o={},c=!1;function u(e){var r=t("<div />").css({position:"absolute"}).addClass(s(e));return P.append(r),r}function p(e){var r=t("<div />").mousedown(m(e)).css({cursor:e+"-resize",position:"absolute"}).append("<div/>").addClass("ord-"+e);return J.support&&r.on("touchstart.jcrop",J.createDragger(e)),P.append(r),r}function d(e){return p(e).addClass(s("handle"))}function h(e){var t,i;for(i=0;i<e.length;i++){switch(e[i]){case"n":t="hline";break;case"s":t="hline bottom";break;case"e":t="vline right";break;case"w":t="vline"}r[e[i]]=u(t)}}function f(e){var t;for(t=0;t<e.length;t++)a[e[t]]=d(e[t])}function _(e,t){i.shade||D.css({top:l(-t),left:l(-e)}),P.css({top:l(t),left:l(e)})}function g(e,t){P.width(Math.round(e)).height(Math.round(t))}function b(){var e=Q.getFixed();Q.setPressed([e.x,e.y]),Q.setCurrent([e.x2,e.y2]),y()}function y(t){return e?w(t):void 0}function w(t){var r=Q.getFixed();g(r.w,r.h),_(r.x,r.y),i.shade&&Y.updateRaw(r),e||C(),t?i.onSelect.call(de,v(r)):i.onChange.call(de,v(r))}function k(t,r,a){(e||r)&&(i.bgFade&&!a?T.animate({opacity:t},{queue:!1,duration:i.fadeTime}):T.css("opacity",t))}function C(){P.show(),i.shade?Y.opacity(E):k(E,!0),e=!0}function z(){j(),P.hide(),i.shade?Y.opacity(1):k(1),e=!1,i.onRelease.call(de)}function S(){return c=!0,i.allowResize?!0:void 0}function j(){c=!1}function F(e){e?(G=!0,j()):(G=!1,S())}function A(){F(!1),b()}t.isArray(i.createHandles)&&f(i.createHandles),i.drawBorders&&t.isArray(i.createBorders)&&h(i.createBorders),t(n).on("touchstart.jcrop-ios",function(e){t(e.currentTarget).hasClass("jcrop-tracker")&&e.stopPropagation()});var O=x().mousedown(m("move")).css({cursor:"move",position:"absolute",zIndex:360});return J.support&&O.on("touchstart.jcrop",J.createDragger("move")),I.append(O),j(),{updateVisible:y,update:w,release:z,refresh:b,isAwake:function(){return e},setCursor:function(e){O.css("cursor",e)},enableHandles:S,enableOnly:function(){c=!0},disableHandles:j,animMode:F,setBgOpacity:k,done:A}}(),$=function(){var e=function(){},r=function(){},a=i.trackDocument;function o(){U.css({zIndex:450}),J.support&&t(n).on("touchmove.jcrop",d).on("touchend.jcrop",h),a&&t(n).on("mousemove.jcrop",s).on("mouseup.jcrop",c)}function l(){U.css({zIndex:290}),t(n).off(".jcrop")}function s(t){return e(p(t)),!1}function c(t){return t.preventDefault(),t.stopPropagation(),K&&(K=!1,r(p(t)),X.isAwake()&&i.onSelect.call(de,v(Q.getFixed())),l(),e=function(){},r=function(){}),!1}function u(t,i){return K=!0,e=t,r=i,o(),!1}function d(e){return e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,s(e)}function h(e){return e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,c(e)}return a||U.mousemove(s).mouseup(c).mouseout(c),T.before(U),{activateHandlers:u}}(),Z=function(){var e=t('<input type="radio" />').css({position:"fixed",left:"-120px",width:"12px"}).addClass("jcrop-keymgr"),r=t("<div />").css({position:"absolute",overflow:"hidden"}).append(e);function a(){i.keySupport&&(e.show(),e.focus())}function n(t){e.hide()}function o(e,t,r){i.allowMove&&(Q.moveOffset([t,r]),X.updateVisible(!0)),e.preventDefault(),e.stopPropagation()}function l(e){if(e.ctrlKey||e.metaKey)return!0;H=e.shiftKey?!0:!1;var t=H?10:1;switch(e.keyCode){case 37:o(e,-t,0);break;case 39:o(e,t,0);break;case 38:o(e,0,-t);break;case 40:o(e,0,t);break;case 9:return!0}return!1}return i.keySupport&&(e.keydown(l).blur(n),e.css({position:"absolute",left:"-20px"}),r.append(e).insertBefore(T)),{watchKeys:a}}();function ee(e){A.removeClass().addClass(s("holder")).addClass(e)}function te(e){re([e[0]/N,e[1]/V,e[2]/N,e[3]/V]),i.onSelect.call(de,v(Q.getFixed())),X.enableHandles()}function re(e){Q.setPressed([e[0],e[1]]),Q.setCurrent([e[2],e[3]]),X.update()}function ie(){return v(Q.getFixed())}function ae(){return Q.getFixed()}function ne(e){d(e),pe()}function oe(){i.disabled=!0,X.disableHandles(),X.setCursor("default")}function le(){i.disabled=!1,pe()}function se(){X.done(),$.activateHandlers(null,null)}function ce(){A.remove(),C.show(),C.css("visibility","visible"),t(e).removeData("Jcrop")}function ue(e,t,r){var a=t||i.bgColor;i.bgFade&&c()&&i.fadeTime&&!r?e.animate({backgroundColor:a},{queue:!1,duration:i.fadeTime}):e.css("backgroundColor",a)}function pe(e){i.allowResize?e?X.enableOnly():X.enableHandles():X.disableHandles(),X.setCursor(i.allowMove?"move":"default"),i.hasOwnProperty("trueSize")&&(N=i.trueSize[0]/j,V=i.trueSize[1]/F),i.hasOwnProperty("setSelect")&&(te(i.setSelect),X.done(),delete i.setSelect),Y.refresh(),i.bgColor!=M&&(ue(i.shade?Y.getShades():A,i.shade?i.shadeColor||i.bgColor:i.bgColor),M=i.bgColor),E!=i.bgOpacity&&(E=i.bgOpacity,i.shade?Y.refresh():X.setBgOpacity(E)),R=i.maxSize[0]||0,L=i.maxSize[1]||0,B=i.minSize[0]||0,q=i.minSize[1]||0,i.hasOwnProperty("outerImage")&&(T.attr("src",i.outerImage),delete i.outerImage),X.refresh()}pe(!0);var de={setSelect:te,setOptions:ne,tellSelect:ie,tellScaled:ae,setClass:ee,disable:oe,enable:le,cancel:se,release:X.release,destroy:ce,focus:Z.watchKeys,getBounds:function(){return[j*N,F*V]},getWidgetSize:function(){return[j,F]},getScaleFactor:function(){return[N,V]},getOptions:function(){return i},ui:{holder:A,selection:P}};return C.data("Jcrop",de),de},t.fn.Jcrop=function(e,r){var i;return this.each(function(){if(t(this).data("Jcrop")){if("api"===e)return t(this).data("Jcrop");t(this).data("Jcrop").setOptions(e)}else"IMG"==this.tagName?t.Jcrop.Loader(this,function(){t(this).css({display:"block",visibility:"hidden"}),i=t.Jcrop(this,e),t.isFunction(r)&&r.call(i)}):(t(this).css({display:"block",visibility:"hidden"}),i=t.Jcrop(this,e),t.isFunction(r)&&r.call(i))}),this},t.Jcrop.Loader=function(r,i,a){var n=t(r),o=n[0];function l(){o.complete?(n.off(".jcloader"),t.isFunction(i)&&i.call(o)):e.setTimeout(l,50)}n.on("load.jcloader",l).on("error.jcloader",function(e){n.off(".jcloader"),t.isFunction(a)&&a.call(o)}),o.complete&&t.isFunction(i)&&(n.off(".jcloader"),i.call(o))},t.Jcrop.defaults={allowMove:!0,allowResize:!0,trackDocument:!0,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:.6,bgFade:!1,aspectRatio:0,keySupport:!0,createHandles:["n","s","e","w","nw","ne","se","sw"],createBorders:["n","s","e","w"],drawBorders:!0,dragEdges:!0,
fixedSupport:!0,touchSupport:null,shade:null,boxWidth:0,boxHeight:0,boundary:2,fadeTime:400,animationDelay:20,swingSpeed:3,maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){},onDblClick:function(){},onRelease:function(){}}}(a.jQuery),function(){var e,t;e=a.jQuery,t=a.utils,a.namespace("crop",function(r){return r.CropWidget=function(){var r;function i(t,r,i){this.element=t,this.originalSize=r,null==i&&(i={}),this.__api=e.Jcrop(this.element[0],{trueSize:this.originalSize,baseClass:"uploadcare--jcrop",addClass:"uploadcare--crop-widget",createHandles:["nw","ne","se","sw"],bgColor:"transparent",bgOpacity:.8}),this.setCrop(i),this.setSelection()}return i.prototype.setCrop=function(e){return this.crop=e,this.__api.setOptions({aspectRatio:e.preferedSize?e.preferedSize[0]/e.preferedSize[1]:0,minSize:e.notLess?t.fitSize(e.preferedSize,this.originalSize):[0,0]})},i.prototype.setSelection=function(e){var r,i,a,n;return e?(r=e.center,a=[e.width,e.height]):(r=!0,a=this.originalSize),this.crop.preferedSize&&(a=t.fitSize(this.crop.preferedSize,a,!0)),r?(i=(this.originalSize[0]-a[0])/2,n=(this.originalSize[1]-a[1])/2):(i=e.left||0,n=e.top||0),this.__api.setSelect([i,n,a[0]+i,a[1]+n])},r=/-\/crop\/([0-9]+)x([0-9]+)(\/(center|([0-9]+),([0-9]+)))?\//i,i.prototype.__parseModifiers=function(e){var t;return(t=null!=e?e.match(r):void 0)?{width:parseInt(t[1],10),height:parseInt(t[2],10),center:"center"===t[4],left:parseInt(t[5],10)||void 0,top:parseInt(t[6],10)||void 0}:void 0},i.prototype.setSelectionFromModifiers=function(e){return this.setSelection(this.__parseModifiers(e))},i.prototype.getSelection=function(){var e,t,r;return e=this.__api.tellSelect(),t=Math.round(Math.max(0,e.x)),r=Math.round(Math.max(0,e.y)),{left:t,top:r,width:Math.round(Math.min(this.originalSize[0],e.x2))-t,height:Math.round(Math.min(this.originalSize[1],e.y2))-r}},i.prototype.applySelectionToFile=function(e){var r=this;return e.then(function(e){return t.applyCropCoordsToInfo(e,r.crop,r.originalSize,r.getSelection())})},i}()})}.call(this),function(){var e,t,r,i,n=function(e,t){return function(){return e.apply(t,arguments)}},o=[].slice;t=a.namespace,r=a.settings,e=a.jQuery,i=a.utils,t("files",function(t){return t.BaseFile=function(){function t(t,r,i){var a;this.settings=r,this.sourceInfo=null!=i?i:{},this.__extendApi=n(this.__extendApi,this),this.__cancel=n(this.__cancel,this),this.__resolveApi=n(this.__resolveApi,this),this.__rejectApi=n(this.__rejectApi,this),this.__runValidators=n(this.__runValidators,this),this.__fileInfo=n(this.__fileInfo,this),this.__handleFileData=n(this.__handleFileData,this),this.__updateInfo=n(this.__updateInfo,this),this.__completeUpload=n(this.__completeUpload,this),this.fileId=null,this.fileName=null,this.sanitizedName=null,this.fileSize=null,this.isStored=null,this.cdnUrlModifiers=null,this.isImage=null,this.imageInfo=null,this.mimeType=null,this.s3Bucket=null,(a=this.sourceInfo).source||(a.source=this.sourceName),this.onInfoReady=e.Callbacks("once memory"),this.__setupValidation(),this.__initApi()}return t.prototype.__startUpload=function(){return e.Deferred().resolve()},t.prototype.__completeUpload=function(){var e,t,r,a,n=this;return r=0,this.settings.debugUploads&&(i.debug("Load file info.",this.fileId,this.settings.publicKey),t=setInterval(function(){return i.debug("Still waiting for file ready.",r,n.fileId,n.settings.publicKey)},5e3),this.apiDeferred.done(function(){return i.debug("File uploaded.",r,n.fileId,n.settings.publicKey)}).always(function(){return clearInterval(t)})),a=100,(e=function(){return"pending"===n.apiDeferred.state()?(r+=1,n.__updateInfo().done(function(){return setTimeout(e,a),a+=50})):void 0})()},t.prototype.__updateInfo=function(){var e=this;return i.jsonp(""+this.settings.urlBase+"/info/",{jsonerrors:1,file_id:this.fileId,pub_key:this.settings.publicKey,wait_is_ready:+this.onInfoReady.fired()}).fail(function(t){return e.settings.debugUploads&&i.log("Can't load file info. Probably removed.",e.fileId,e.settings.publicKey,t),e.__rejectApi("info")}).done(this.__handleFileData)},t.prototype.__handleFileData=function(e){return this.fileName=e.original_filename,this.sanitizedName=e.filename,this.fileSize=e.size,this.isImage=e.is_image,this.imageInfo=e.image_info,this.mimeType=e.mime_type,this.isStored=e.is_stored,this.s3Bucket=e.s3_bucket,e.default_effects&&(this.cdnUrlModifiers="-/"+e.default_effects),this.s3Bucket&&this.cdnUrlModifiers&&this.__rejectApi("baddata"),this.onInfoReady.fired()||this.onInfoReady.fire(this.__fileInfo()),e.is_ready?this.__resolveApi():void 0},t.prototype.__progressInfo=function(){var e;return{state:this.__progressState,uploadProgress:this.__progress,progress:"ready"===(e=this.__progressState)||"error"===e?1:.9*this.__progress,incompleteFileInfo:this.__fileInfo()}},t.prototype.__fileInfo=function(){var e;return e=this.s3Bucket?"https://"+this.s3Bucket+".s3.amazonaws.com/"+this.fileId+"/"+this.sanitizedName:""+this.settings.cdnBase+"/"+this.fileId+"/",{uuid:this.fileId,name:this.fileName,size:this.fileSize,isStored:this.isStored,isImage:!this.s3Bucket&&this.isImage,originalImageInfo:this.imageInfo,mimeType:this.mimeType,originalUrl:this.fileId?e:null,cdnUrl:this.fileId?""+e+(this.cdnUrlModifiers||""):null,cdnUrlModifiers:this.cdnUrlModifiers,sourceInfo:this.sourceInfo}},t.prototype.__setupValidation=function(){return this.validators=this.settings.validators||this.settings.__validators||[],this.settings.imagesOnly&&this.validators.push(function(e){if(e.isImage===!1)throw new Error("image")}),this.onInfoReady.add(this.__runValidators)},t.prototype.__runValidators=function(e){var t,r,i,a,n,o;e=e||this.__fileInfo();try{for(n=this.validators,o=[],i=0,a=n.length;a>i;i++)r=n[i],o.push(r(e));return o}catch(l){return t=l,this.__rejectApi(t.message)}},t.prototype.__initApi=function(){return this.apiDeferred=e.Deferred(),this.__progressState="uploading",this.__progress=0,this.__notifyApi()},t.prototype.__notifyApi=function(){return this.apiDeferred.notify(this.__progressInfo())},t.prototype.__rejectApi=function(e){return this.__progressState="error",this.__notifyApi(),this.apiDeferred.reject(e,this.__fileInfo())},t.prototype.__resolveApi=function(){return this.__progressState="ready",this.__notifyApi(),this.apiDeferred.resolve(this.__fileInfo())},t.prototype.__cancel=function(){return this.__rejectApi("user")},t.prototype.__extendApi=function(e){var t=this;return e.cancel=this.__cancel,e.pipe=e.then=function(){return t.__extendApi(i.fixedPipe.apply(i,[e].concat(o.call(arguments))))},e},t.prototype.promise=function(){var e,t=this;return this.__apiPromise||(this.__apiPromise=this.__extendApi(this.apiDeferred.promise()),this.__runValidators(),"pending"===this.apiDeferred.state()&&(e=this.__startUpload(),e.done(function(){return t.__progressState="uploaded",t.__progress=1,t.__notifyApi(),t.__completeUpload()}),e.progress(function(e){return e>t.__progress?(t.__progress=e,t.__notifyApi()):void 0}),e.fail(function(){return t.__rejectApi("upload")}),this.apiDeferred.always(e.reject))),this.__apiPromise},t}()}),t("utils",function(e){return e.isFile=function(e){return e&&e.done&&e.fail&&e.cancel},e.valueToFile=function(t,r){return t&&!e.isFile(t)&&(t=a.fileFrom("uploaded",t,r)),t||null}})}.call(this),function(){var t,r,i,o,l,s,c;t=a.jQuery,l=a.utils,s=a.utils,c=s.abilities,r=c.Blob,i=c.FileReader,o=c.URL,a.namespace("utils.image",function(a){var s,c;return s=e.DataView,c=l.taskRunner(1),a.shrinkFile=function(e,i){var n,u=this;return n=t.Deferred(),o&&s&&r?(c(function(t){var r;return n.always(t),r=l.imageLoader(o.createObjectURL(e)),r.always(function(e){return o.revokeObjectURL(e.src)}),r.fail(function(){return n.reject("not image")}),r.done(function(t){return n.notify(.1),a.getExif(e).always(function(e){var o,s;return n.notify(.2),s="resolved"===r.state(),r=a.shrinkImage(t,i),r.progress(function(e){return n.notify(.2+.6*e)}),r.fail(n.reject),r.done(function(t){var o,c;return o="image/jpeg",c=i.quality||.8,!s&&a.hasTransparency(t)&&(o="image/png",c=void 0),l.canvasToBlob(t,o,c,function(i){return t.width=t.height=1,n.notify(.9),e?(r=a.replaceJpegChunk(i,225,[e.buffer]),r.done(n.resolve),r.fail(function(){return n.resolve(i);
})):n.resolve(i)})}),o=null})})}),n.promise()):n.reject("support")},a.shrinkImage=function(e,r){var i,a,o,s,c,u,p,d,h,f,_,g,m,b;return a=t.Deferred(),m=.71,e.width*m*e.height*m<r.size?a.reject("not required"):(g=p=e.width,_=e.height,d=g/_,b=Math.floor(Math.sqrt(r.size*d)),o=Math.floor(r.size/Math.sqrt(r.size*d)),u=5e6,c=4096,h=function(){return b>=g?void a.resolve(e):l.defer(function(){var t;return g=Math.round(g*m),_=Math.round(_*m),b>g*m&&(g=b,_=o),g*_>u&&(g=Math.floor(Math.sqrt(u*d)),_=Math.floor(u/Math.sqrt(u*d))),g>c&&(g=c,_=Math.round(g/d)),_>c&&(_=c,g=Math.round(d*_)),t=n.createElement("canvas"),t.width=g,t.height=_,t.getContext("2d").drawImage(e,0,0,g,_),e.src="//:0",e.width=e.height=1,e=t,a.notify((p-g)/(p-b)),h()})},f=function(){var t,r;return t=n.createElement("canvas"),t.width=b,t.height=o,r=t.getContext("2d"),r.imageSmoothingQuality="high",r.drawImage(e,0,0,b,o),e.src="//:0",e.width=e.height=1,a.resolve(t)},i=n.createElement("canvas").getContext("2d"),s=navigator.userAgent.match(/\ Chrome\//),"imageSmoothingQuality"in i&&!s?f():h(),a.promise())},a.drawFileToCanvas=function(e,r,i,s,c){var u,p;return u=t.Deferred(),o?(p=l.imageLoader(o.createObjectURL(e)),p.always(function(e){return o.revokeObjectURL(e.src)}),p.fail(function(){return u.reject("not image")}),p.done(function(t){return u.always(function(){return t.src="//:0"}),c&&t.width*t.height>c?u.reject("max source"):a.getExif(e).always(function(e){var o,c,p,d,h,f,_,g,m,b;return h=a.parseExifOrientation(e)||1,_=h>4,f=_?[t.height,t.width]:[t.width,t.height],m=l.fitSize(f,[r,i]),d=m[0],p=m[1],(g=[[1,0,0,1,0,0],[-1,0,0,1,d,0],[-1,0,0,-1,d,p],[1,0,0,-1,0,p],[0,1,1,0,0,0],[0,1,-1,0,d,0],[0,-1,-1,0,d,p],[0,-1,1,0,0,p]][h-1])?(o=n.createElement("canvas"),o.width=d,o.height=p,c=o.getContext("2d"),c.transform.apply(c,g),_&&(b=[p,d],d=b[0],p=b[1]),s&&(c.fillStyle=s,c.fillRect(0,0,d,p)),c.drawImage(t,0,0,d,p),u.resolve(o,f)):u.reject("bad image")})}),u.promise()):u.reject("support")},a.readJpegChunks=function(e){var r,a,n,o,l;return l=function(e,t){var a;return a=new i,a.onload=function(){return t(new s(a.result))},a.onerror=function(e){return r.reject("reader",e)},a.readAsArrayBuffer(e)},n=function(){return l(e.slice(a,a+128),function(e){var t,r,i;for(t=r=0,i=e.byteLength;i>=0?i>r:r>i;t=i>=0?++r:--r)if(255===e.getUint8(t)){a+=t;break}return o()})},o=function(){var t;return t=a,l(e.slice(a,a+=4),function(i){var o,s;return 4!==i.byteLength||255!==i.getUint8(0)?r.reject("corrupted"):(s=i.getUint8(1),218===s?r.resolve():(o=i.getUint16(2)-2,l(e.slice(a,a+=o),function(e){return e.byteLength!==o?r.reject("corrupted"):(r.notify(t,o,s,e),n())})))})},r=t.Deferred(),i&&s?(a=2,l(e.slice(0,2),function(e){return 65496!==e.getUint16(0)?r.reject("not jpeg"):n()}),r.promise()):r.reject("support")},a.replaceJpegChunk=function(e,i,n){var o,l,c,u;return o=t.Deferred(),c=[],l=[],u=a.readJpegChunks(e),u.fail(o.reject),u.progress(function(e,t,r){return r===i?(c.push(e),l.push(t)):void 0}),u.done(function(){var t,a,u,p,d,h,f,_,g;for(p=[e.slice(0,2)],h=0,_=n.length;_>h;h++)t=n[h],u=new s(new ArrayBuffer(4)),u.setUint16(0,65280+i),u.setUint16(2,t.byteLength+2),p.push(u.buffer),p.push(t);for(d=2,a=f=0,g=c.length;g>=0?g>f:f>g;a=g>=0?++f:--f)c[a]>d&&p.push(e.slice(d,c[a])),d=c[a]+l[a]+4;return p.push(e.slice(d,e.size)),o.resolve(new r(p,{type:e.type}))}),o.promise()},a.getExif=function(e){var r,i;return r=null,i=a.readJpegChunks(e),i.progress(function(e,t,i,a){return!r&&225===i&&a.byteLength>=14&&1165519206===a.getUint32(0)&&0===a.getUint16(4)?r=a:void 0}),i.then(function(){return r},function(e){return t.Deferred().reject(r,e)})},a.parseExifOrientation=function(e){var t,r,i,a,n;if(!e||e.byteLength<14||1165519206!==e.getUint32(0)||0!==e.getUint16(4))return null;if(18761===e.getUint16(6))i=!0;else{if(19789!==e.getUint16(6))return null;i=!1}if(42!==e.getUint16(8,i))return null;for(a=8+e.getUint32(10,i),t=e.getUint16(a-2,i),r=n=0;t>=0?t>n:n>t;r=t>=0?++n:--n){if(e.byteLength<a+10)return null;if(274===e.getUint16(a,i))return e.getUint16(a+8,i);a+=12}return null},a.hasTransparency=function(e){var t,r,i,a,o,l,s;for(o=50,t=n.createElement("canvas"),t.width=t.height=o,r=t.getContext("2d"),r.drawImage(e,0,0,o,o),i=r.getImageData(0,0,o,o).data,t.width=t.height=1,a=l=3,s=i.length;s>l;a=l+=4)if(i[a]<254)return!0;return!1}})}.call(this),function(){var e,t,r=function(e,t){return function(){return e.apply(t,arguments)}},i={}.hasOwnProperty,n=function(e,t){for(var r in t)i.call(t,r)&&(e[r]=t[r]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};e=a.jQuery,t=a.utils,a.namespace("files",function(i){return i.ObjectFile=function(i){var a;n(o,i),a=null,o.prototype.sourceName="local";function o(e){this.__file=e,this.setFile=r(this.setFile,this),o.__super__.constructor.apply(this,arguments),this.fileName=this.__file.name||"original",this.__notifyApi()}return o.prototype.setFile=function(e){return e&&(this.__file=e),this.sourceInfo.file=this.__file,this.__file?(this.fileSize=this.__file.size,this.fileType=this.__file.type||"application/octet-stream",this.settings.debugUploads&&t.debug("Use local file.",this.fileName,this.fileType,this.fileSize),this.__runValidators(),this.__notifyApi()):void 0},o.prototype.__startUpload=function(){var r,i,a,n=this;return this.apiDeferred.always(function(){return n.__file=null}),this.__file.size>=this.settings.multipartMinSize&&t.abilities.Blob?(this.setFile(),this.multipartUpload()):(i=t.abilities.iOSVersion,!this.settings.imageShrink||i&&8>i?(this.setFile(),this.directUpload()):(r=e.Deferred(),a=.4,t.image.shrinkFile(this.__file,this.settings.imageShrink).progress(function(e){return r.notify(e*a)}).done(this.setFile).fail(function(){return n.setFile(),a=.1*a}).always(function(){return r.notify(a),n.directUpload().done(r.resolve).fail(r.reject).progress(function(e){return r.notify(a+e*(1-a))})}),r))},o.prototype.__autoAbort=function(e){return this.apiDeferred.fail(e.abort),e},o.prototype.directRunner=function(e){return a||(a=t.taskRunner(this.settings.parallelDirectUploads)),a(e)},o.prototype.directUpload=function(){var t,r=this;return t=e.Deferred(),this.__file?this.fileSize>104857600?(this.__rejectApi("size"),t):(this.directRunner(function(i){var a;return t.always(i),"pending"===r.apiDeferred.state()?(a=new FormData,a.append("UPLOADCARE_PUB_KEY",r.settings.publicKey),a.append("signature",r.settings.secureSignature),a.append("expire",r.settings.secureExpire),a.append("UPLOADCARE_STORE",r.settings.doNotStore?"":"auto"),a.append("file",r.__file,r.fileName),a.append("file_name",r.fileName),a.append("source",r.sourceInfo.source),r.__autoAbort(e.ajax({xhr:function(){var r;return r=e.ajaxSettings.xhr(),r.upload&&r.upload.addEventListener("progress",function(e){return t.notify(e.loaded/e.total)},!1),r},crossDomain:!0,type:"POST",url:""+r.settings.urlBase+"/base/?jsonerrors=1",headers:{"X-PINGOTHER":"pingpong"},contentType:!1,processData:!1,data:a,dataType:"json",error:t.reject,success:function(e){return(null!=e?e.file:void 0)?(r.fileId=e.file,t.resolve()):t.reject()}}))):void 0}),t):(this.__rejectApi("baddata"),t)},o.prototype.multipartUpload=function(){var t,r=this;return t=e.Deferred(),this.__file?this.settings.imagesOnly?(this.__rejectApi("image"),t):(this.multipartStart().done(function(e){return r.uploadParts(e.parts,e.uuid).done(function(){return r.multipartComplete(e.uuid).done(function(e){return r.fileId=e.uuid,r.__handleFileData(e),t.resolve()}).fail(t.reject)}).progress(t.notify).fail(t.reject)}).fail(t.reject),t):t},o.prototype.multipartStart=function(){var e,r=this;return e={UPLOADCARE_PUB_KEY:this.settings.publicKey,signature:this.settings.secureSignature,expire:this.settings.secureExpire,filename:this.fileName,source:this.sourceInfo.source,size:this.fileSize,content_type:this.fileType,part_size:this.settings.multipartPartSize,UPLOADCARE_STORE:this.settings.doNotStore?"":"auto"},this.__autoAbort(t.jsonp(""+this.settings.urlBase+"/multipart/start/?jsonerrors=1","POST",e).fail(function(i){return r.settings.debugUploads?t.log("Can't start multipart upload.",i,e):void 0}))},o.prototype.uploadParts=function(r,i){var a,n,o,l,s,c,u,p,d,h,f,_=this;for(s=[],
l=e.now(),d=function(t,r){var i,n,o;if(s[t]=r,!(e.now()-l<250)){for(l=e.now(),i=0,n=0,o=s.length;o>n;n++)r=s[n],i+=r;return a.notify(i/_.fileSize)}},a=e.Deferred(),o=0,p=0,u=0,c=function(){var n,l,h,f,g;if(!(u>=_.fileSize))return h=u+_.settings.multipartPartSize,_.fileSize<h+_.settings.multipartMinLastPartSize&&(h=_.fileSize),l=_.__file.slice(u,h),u=h,f=p,o+=1,p+=1,n=0,(g=function(){return"pending"===_.apiDeferred.state()?(s[f]=0,_.__autoAbort(e.ajax({xhr:function(){var t;return t=e.ajaxSettings.xhr(),t.upload&&t.upload.addEventListener("progress",function(e){return d(f,e.loaded)},!1),t},url:r[f],crossDomain:!0,type:"PUT",processData:!1,contentType:_.fileType,data:l,error:function(){return n+=1,n>_.settings.multipartMaxAttempts?(_.settings.debugUploads&&t.info("Part #"+f+" and file upload is failed.",i),a.reject()):(_.settings.debugUploads&&t.debug("Part #"+f+"("+n+") upload is failed.",i),g())},success:function(){return o-=1,c(),o?void 0:a.resolve()}}))):void 0})()},n=h=0,f=this.settings.multipartConcurrency;f>=0?f>h:h>f;n=f>=0?++h:--h)c();return a},o.prototype.multipartComplete=function(e){var r,i=this;return r={UPLOADCARE_PUB_KEY:this.settings.publicKey,uuid:e},this.__autoAbort(t.jsonp(""+this.settings.urlBase+"/multipart/complete/?jsonerrors=1","POST",r).fail(function(r){return i.settings.debugUploads?t.log("Can't complete multipart upload.",e,i.settings.publicKey,r):void 0}))},o}(i.BaseFile)})}.call(this),function(){var e,t,r=function(e,t){return function(){return e.apply(t,arguments)}},i={}.hasOwnProperty,n=function(e,t){for(var r in t)i.call(t,r)&&(e[r]=t[r]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};e=a.jQuery,t=a.utils,a.namespace("files",function(i){return i.InputFile=function(i){n(a,i),a.prototype.sourceName="local-compat";function a(i){this.__input=i,this.__cleanUp=r(this.__cleanUp,this),a.__super__.constructor.apply(this,arguments),this.fileId=t.uuid(),this.fileName=e(this.__input).val().split("\\").pop(),this.__notifyApi()}return a.prototype.__startUpload=function(){var t,r,i,a;return t=e.Deferred(),a=""+this.settings.urlBase+"/iframe/",i="uploadcare--iframe-"+this.fileId,this.__iframe=e("<iframe>").attr({id:i,name:i}).css("display","none").appendTo("body").on("load",t.resolve).on("error",t.reject),r=function(t,r){return e("<input/>",{type:"hidden",name:t,value:r})},e(this.__input).attr("name","file"),this.__iframeForm=e("<form>").attr({method:"POST",action:a,enctype:"multipart/form-data",target:i}).append(r("UPLOADCARE_PUB_KEY",this.settings.publicKey)).append(r("UPLOADCARE_SIGNATURE",this.settings.secureSignature)).append(r("UPLOADCARE_EXPIRE",this.settings.secureExpire)).append(r("UPLOADCARE_FILE_ID",this.fileId)).append(r("UPLOADCARE_STORE",this.settings.doNotStore?"":"auto")).append(r("UPLOADCARE_SOURCE",this.sourceInfo.source)).append(this.__input).css("display","none").appendTo("body").submit(),t.always(this.__cleanUp)},a.prototype.__cleanUp=function(){var e,t;return null!=(e=this.__iframe)&&e.off("load error").remove(),null!=(t=this.__iframeForm)&&t.remove(),this.__iframe=null,this.__iframeForm=null},a}(i.BaseFile)})}.call(this),function(){var t,r;!function(){void 0===Function.prototype.scopedTo&&(Function.prototype.scopedTo=function(e,t){var r=this;return function(){return r.apply(e,Array.prototype.slice.call(t||[]).concat(Array.prototype.slice.call(arguments)))}}),t=function(e,r){this.options=r||{},this.key=e,this.channels=new t.Channels,this.global_emitter=new t.EventsDispatcher;var i=this;this.checkAppKey(),this.connection=new t.Connection(this.key,this.options),this.connection.bind("connected",function(){i.subscribeAll()}).bind("message",function(e){var t=0===e.event.indexOf("pusher_internal:");if(e.channel){var r;(r=i.channel(e.channel))&&r.emit(e.event,e.data)}t||i.global_emitter.emit(e.event,e.data)}).bind("disconnected",function(){i.channels.disconnect()}).bind("error",function(e){t.warn("Error",e)}),t.instances.push(this),t.isReady&&i.connect()},t.instances=[],t.prototype={channel:function(e){return this.channels.find(e)},connect:function(){this.connection.connect()},disconnect:function(){this.connection.disconnect()},bind:function(e,t){return this.global_emitter.bind(e,t),this},bind_all:function(e){return this.global_emitter.bind_all(e),this},subscribeAll:function(){var e;for(channelName in this.channels.channels)this.channels.channels.hasOwnProperty(channelName)&&this.subscribe(channelName)},subscribe:function(e){var t=this,r=this.channels.add(e,this);return"connected"===this.connection.state&&r.authorize(this.connection.socket_id,this.options,function(i,a){i?r.emit("pusher:subscription_error",a):t.send_event("pusher:subscribe",{channel:e,auth:a.auth,channel_data:a.channel_data})}),r},unsubscribe:function(e){this.channels.remove(e),"connected"===this.connection.state&&this.send_event("pusher:unsubscribe",{channel:e})},send_event:function(e,t,r){return this.connection.send_event(e,t,r)},checkAppKey:function(){(null===this.key||void 0===this.key)&&t.warn("Warning","You must pass your app key when you instantiate Pusher.")}},t.Util={extend:function r(e,t){for(var i in t)t[i]&&t[i].constructor&&t[i].constructor===Object?e[i]=r(e[i]||{},t[i]):e[i]=t[i];return e},stringify:function a(){for(var t=["Pusher"],r=0;r<arguments.length;r++)"string"==typeof arguments[r]?t.push(arguments[r]):void 0==e.JSON?t.push(arguments[r].toString()):t.push(JSON.stringify(arguments[r]));return t.join(" : ")},arrayIndexOf:function(e,t){var r=Array.prototype.indexOf;if(null==e)return-1;if(r&&e.indexOf===r)return e.indexOf(t);for(i=0,l=e.length;i<l;i++)if(e[i]===t)return i;return-1}},t.debug=function(){t.log&&t.log(t.Util.stringify.apply(this,arguments))},t.warn=function(){if(e.console&&e.console.warn)e.console.warn(t.Util.stringify.apply(this,arguments));else{if(!t.log)return;t.log(t.Util.stringify.apply(this,arguments))}},t.VERSION="1.12.2",t.host="ws.pusherapp.com",t.ws_port=80,t.wss_port=443,t.channel_auth_endpoint="/pusher/auth",t.cdn_http="http://js.pusher.com/",t.cdn_https="https://d3dy5gmtp8yhk7.cloudfront.net/",t.dependency_suffix=".min",t.channel_auth_transport="ajax",t.activity_timeout=12e4,t.pong_timeout=3e4,t.isReady=!1,t.ready=function(){t.isReady=!0;for(var e=0,r=t.instances.length;r>e;e++)t.instances[e].connect()}}(),function(){function e(){this._callbacks={}}e.prototype.get=function(e){return this._callbacks[this._prefix(e)]},e.prototype.add=function(e,t){var r=this._prefix(e);this._callbacks[r]=this._callbacks[r]||[],this._callbacks[r].push(t)},e.prototype.remove=function(e,r){if(this.get(e)){var i=t.Util.arrayIndexOf(this.get(e),r);this._callbacks[this._prefix(e)].splice(i,1)}},e.prototype._prefix=function(e){return"_"+e};function r(t){this.callbacks=new e,this.global_callbacks=[],this.failThrough=t}r.prototype.bind=function(e,t){return this.callbacks.add(e,t),this},r.prototype.unbind=function(e,t){return this.callbacks.remove(e,t),this},r.prototype.emit=function(e,t){for(var r=0;r<this.global_callbacks.length;r++)this.global_callbacks[r](e,t);var i=this.callbacks.get(e);if(i)for(var r=0;r<i.length;r++)i[r](t);else this.failThrough&&this.failThrough(e,t);return this},r.prototype.bind_all=function(e){return this.global_callbacks.push(e),this},t.EventsDispatcher=r}(),function(){function e(e){return e.substr(0,1).toUpperCase()+e.substr(1)}function r(e,t,r){void 0!==t[e]&&t[e](r)}function i(e,r,i){t.EventsDispatcher.call(this),this.state=void 0,this.errors=[],this.stateActions=i,this.transitions=r,this.transition(e)}i.prototype.transition=function(i,a){var n=this.state,o=this.stateActions;if(n&&-1==t.Util.arrayIndexOf(this.transitions[n],i))throw this.emit("invalid_transition_attempt",{oldState:n,newState:i}),new Error("Invalid transition ["+n+" to "+i+"]");r(n+"Exit",o,a),r(n+"To"+e(i),o,a),r(i+"Pre",o,a),this.state=i,this.emit("state_change",{oldState:n,newState:i}),r(i+"Post",o,a)},i.prototype.is=function(e){return this.state===e},i.prototype.isNot=function(e){return this.state!==e},t.Util.extend(i.prototype,t.EventsDispatcher.prototype),t.Machine=i}(),function(){var r=function(){var r=this;t.EventsDispatcher.call(this),void 0!==e.addEventListener&&(e.addEventListener("online",function(){
r.emit("online",null)},!1),e.addEventListener("offline",function(){r.emit("offline",null)},!1))};r.prototype.isOnLine=function(){return void 0===e.navigator.onLine?!0:e.navigator.onLine},t.Util.extend(r.prototype,t.EventsDispatcher.prototype),t.NetInfo=r}(),function(){var e={initialized:["waiting","failed"],waiting:["connecting","permanentlyClosed"],connecting:["open","permanentlyClosing","impermanentlyClosing","waiting"],open:["connected","permanentlyClosing","impermanentlyClosing","waiting"],connected:["permanentlyClosing","waiting"],impermanentlyClosing:["waiting","permanentlyClosing"],permanentlyClosing:["permanentlyClosed"],permanentlyClosed:["waiting","failed"],failed:["permanentlyClosed"]},r=2e3,i=2e3,a=2e3,o=5*r,l=5*i,s=5*a;function c(e){e.connectionWait=0,"flash"===t.TransportType?e.openTimeout=5e3:e.openTimeout=2e3,e.connectedTimeout=2e3,e.connectionSecure=e.compulsorySecure,e.connectionAttempts=0}function u(u,p){var d=this;t.EventsDispatcher.call(this),this.options=t.Util.extend({encrypted:!1},p),this.netInfo=new t.NetInfo,this.netInfo.bind("online",function(){d._machine.is("waiting")&&(d._machine.transition("connecting"),S("connecting"))}),this.netInfo.bind("offline",function(){d._machine.is("connected")&&(d.socket.onclose=void 0,d.socket.onmessage=void 0,d.socket.onerror=void 0,d.socket.onopen=void 0,d.socket.close(),d.socket=void 0,d._machine.transition("waiting"))}),this._machine=new t.Machine("initialized",e,{initializedPre:function(){d.compulsorySecure=d.options.encrypted,d.key=u,d.socket=null,d.socket_id=null,d.state="initialized"},waitingPre:function(){d.connectionWait>0&&d.emit("connecting_in",d.connectionWait),S(d.netInfo.isOnLine()&&d.connectionAttempts<=4?"connecting":"unavailable"),d.netInfo.isOnLine()&&(d._waitingTimer=setTimeout(function(){d._machine.transition("connecting")},b()))},waitingExit:function(){clearTimeout(d._waitingTimer)},connectingPre:function(){if(d.netInfo.isOnLine()===!1)return d._machine.transition("waiting"),void S("unavailable");var e=f(d.key,d.connectionSecure);t.debug("Connecting",e),d.socket=new t.Transport(e),d.socket.onopen=v,d.socket.onclose=C,d.socket.onerror=z,d._connectingTimer=setTimeout(_,d.openTimeout)},connectingExit:function(){clearTimeout(d._connectingTimer),d.socket.onopen=void 0},connectingToWaiting:function(){h()},connectingToImpermanentlyClosing:function(){h()},openPre:function(){d.socket.onmessage=w,d.socket.onerror=z,d.socket.onclose=C,d._openTimer=setTimeout(_,d.connectedTimeout)},openExit:function(){clearTimeout(d._openTimer),d.socket.onmessage=void 0},openToWaiting:function(){h()},openToImpermanentlyClosing:function(){h()},connectedPre:function(e){d.socket_id=e,d.socket.onmessage=x,d.socket.onerror=z,d.socket.onclose=C,c(d),d.connectedAt=(new Date).getTime(),g()},connectedPost:function(){S("connected")},connectedExit:function(){m(),S("disconnected")},impermanentlyClosingPost:function(){d.socket&&(d.socket.onclose=C,d.socket.close())},permanentlyClosingPost:function(){d.socket?(d.socket.onclose=function(){c(d),d._machine.transition("permanentlyClosed")},d.socket.close()):(c(d),d._machine.transition("permanentlyClosed"))},failedPre:function(){S("failed"),t.debug("WebSockets are not available in this browser.")},permanentlyClosedPost:function(){S("disconnected")}});function h(){d.connectionWait<o&&(d.connectionWait+=r),d.openTimeout<l&&(d.openTimeout+=i),d.connectedTimeout<s&&(d.connectedTimeout+=a),d.compulsorySecure!==!0&&(d.connectionSecure=!d.connectionSecure),d.connectionAttempts++}function f(e,r){var i=t.ws_port,a="ws://";(r||"https:"===n.location.protocol)&&(i=t.wss_port,a="wss://");var o="flash"===t.TransportType?"true":"false";return a+t.host+":"+i+"/app/"+e+"?protocol=5&client=js&version="+t.VERSION+"&flash="+o}function _(){d._machine.transition("impermanentlyClosing")}function g(){d._activityTimer&&clearTimeout(d._activityTimer),d._activityTimer=setTimeout(function(){d.send_event("pusher:ping",{}),d._activityTimer=setTimeout(function(){d.socket.close()},d.options.pong_timeout||t.pong_timeout)},d.options.activity_timeout||t.activity_timeout)}function m(){d._activityTimer&&clearTimeout(d._activityTimer)}function b(){var e=d.connectionWait;if(0===e&&d.connectedAt){var t=1e3,r=(new Date).getTime()-d.connectedAt;t>r&&(e=t-r)}return e}function v(){d._machine.transition("open")}function y(e,t){d.emit("error",{type:"PusherError",data:{code:e,message:t}}),4e3===e?(d.compulsorySecure=!0,d.connectionSecure=!0,d.options.encrypted=!0,_()):4100>e?d._machine.transition("permanentlyClosing"):4200>e?(d.connectionWait=1e3,d._machine.transition("waiting")):4300>e?_():d._machine.transition("permanentlyClosing")}function w(e){var t=k(e);void 0!==t&&("pusher:connection_established"===t.event?d._machine.transition("connected",t.data.socket_id):"pusher:error"===t.event&&y(t.data.code,t.data.message))}function x(e){g();var r=k(e);if(void 0!==r){switch(t.debug("Event recd",r),r.event){case"pusher:error":d.emit("error",{type:"PusherError",data:r.data});break;case"pusher:ping":d.send_event("pusher:pong",{})}d.emit("message",r)}}function k(e){try{var t=JSON.parse(e.data);if("string"==typeof t.data)try{t.data=JSON.parse(t.data)}catch(r){if(!(r instanceof SyntaxError))throw r}return t}catch(r){d.emit("error",{type:"MessageParseError",error:r,data:e.data})}}function C(){d._machine.transition("waiting")}function z(e){d.emit("error",{type:"WebSocketError",error:e})}function S(e,r){var i=d.state;d.state=e,i!==e&&(t.debug("State changed",i+" -> "+e),d.emit("state_change",{previous:i,current:e}),d.emit(e,r))}}u.prototype.connect=function(){this._machine.is("failed")||t.Transport?this._machine.is("initialized")?(c(this),this._machine.transition("waiting")):this._machine.is("waiting")&&this.netInfo.isOnLine()===!0?this._machine.transition("connecting"):this._machine.is("permanentlyClosed")&&(c(this),this._machine.transition("waiting")):this._machine.transition("failed")},u.prototype.send=function(e){if(this._machine.is("connected")){var t=this;return setTimeout(function(){t.socket.send(e)},0),!0}return!1},u.prototype.send_event=function(e,r,i){var a={event:e,data:r};return i&&(a.channel=i),t.debug("Event sent",a),this.send(JSON.stringify(a))},u.prototype.disconnect=function(){this._machine.is("permanentlyClosed")||(this._machine.is("waiting")||this._machine.is("failed")?this._machine.transition("permanentlyClosed"):this._machine.transition("permanentlyClosing"))},t.Util.extend(u.prototype,t.EventsDispatcher.prototype),t.Connection=u}(),function(){t.Channels=function(){this.channels={}},t.Channels.prototype={add:function(e,r){var i=this.find(e);if(i)return i;var a=t.Channel.factory(e,r);return this.channels[e]=a,a},find:function(e){return this.channels[e]},remove:function(e){delete this.channels[e]},disconnect:function(){for(var e in this.channels)this.channels[e].disconnect()}},t.Channel=function(e,r){var i=this;t.EventsDispatcher.call(this,function(r,i){t.debug("No callbacks on "+e+" for "+r)}),this.pusher=r,this.name=e,this.subscribed=!1,this.bind("pusher_internal:subscription_succeeded",function(e){i.onSubscriptionSucceeded(e)})},t.Channel.prototype={init:function(){},disconnect:function(){this.subscribed=!1,this.emit("pusher_internal:disconnected")},onSubscriptionSucceeded:function(e){this.subscribed=!0,this.emit("pusher:subscription_succeeded")},authorize:function(e,t,r){return r(!1,{})},trigger:function(e,t){return this.pusher.send_event(e,t,this.name)}},t.Util.extend(t.Channel.prototype,t.EventsDispatcher.prototype),t.Channel.PrivateChannel={authorize:function(e,r,i){var a=this,n=new t.Channel.Authorizer(this,t.channel_auth_transport,r);return n.authorize(e,function(e,t){e||a.emit("pusher_internal:authorized",t),i(e,t)})}},t.Channel.PresenceChannel={init:function(){this.members=new e(this)},onSubscriptionSucceeded:function(e){this.subscribed=!0}};var e=function(e){var t=this,r=function(){this._members_map={},this.count=0,this.me=null};r.call(this),e.bind("pusher_internal:authorized",function(r){var i=JSON.parse(r.channel_data);e.bind("pusher_internal:subscription_succeeded",function(r){t._members_map=r.presence.hash,t.count=r.presence.count,t.me=t.get(i.user_id),e.emit("pusher:subscription_succeeded",t);
})}),e.bind("pusher_internal:member_added",function(r){null===t.get(r.user_id)&&t.count++,t._members_map[r.user_id]=r.user_info,e.emit("pusher:member_added",t.get(r.user_id))}),e.bind("pusher_internal:member_removed",function(r){var i=t.get(r.user_id);i&&(delete t._members_map[r.user_id],t.count--,e.emit("pusher:member_removed",i))}),e.bind("pusher_internal:disconnected",function(){r.call(t)})};e.prototype={each:function(e){for(var t in this._members_map)e(this.get(t))},get:function(e){return this._members_map.hasOwnProperty(e)?{id:e,info:this._members_map[e]}:null}},t.Channel.factory=function(e,r){var i=new t.Channel(e,r);return 0===e.indexOf("private-")?t.Util.extend(i,t.Channel.PrivateChannel):0===e.indexOf("presence-")&&(t.Util.extend(i,t.Channel.PrivateChannel),t.Util.extend(i,t.Channel.PresenceChannel)),i.init(),i}}(),function(){t.Channel.Authorizer=function(e,t,r){this.channel=e,this.type=t,this.authOptions=(r||{}).auth||{}},t.Channel.Authorizer.prototype={composeQuery:function(e){var t="&socket_id="+encodeURIComponent(e)+"&channel_name="+encodeURIComponent(this.channel.name);for(var r in this.authOptions.params)t+="&"+encodeURIComponent(r)+"="+encodeURIComponent(this.authOptions.params[r]);return t},authorize:function(e,r){return t.authorizers[this.type].call(this,e,r)}},t.auth_callbacks={},t.authorizers={ajax:function(r,i){var a=this,n;n=t.XHR?new t.XHR:e.XMLHttpRequest?new e.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),n.open("POST",t.channel_auth_endpoint,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var o in this.authOptions.headers)n.setRequestHeader(o,this.authOptions.headers[o]);return n.onreadystatechange=function(){if(4==n.readyState)if(200==n.status){var e,r=!1;try{e=JSON.parse(n.responseText),r=!0}catch(a){i(!0,"JSON returned from webapp was invalid, yet status code was 200. Data was: "+n.responseText)}r&&i(!1,e)}else t.warn("Couldn't get auth info from your webapp",n.status),i(!0,n.status)},n.send(this.composeQuery(r)),n},jsonp:function(e,r){void 0!==this.authOptions.headers&&t.warn("Warn","To send headers with the auth request, you must use AJAX, rather than JSONP.");var i=n.createElement("script");t.auth_callbacks[this.channel.name]=function(e){r(!1,e)};var a="Pusher.auth_callbacks['"+this.channel.name+"']";i.src=t.channel_auth_endpoint+"?callback="+encodeURIComponent(a)+this.composeQuery(e);var o=n.getElementsByTagName("head")[0]||n.documentElement;o.insertBefore(i,o.firstChild)}}}();var r=function(){function e(e,t){n.addEventListener?e.addEventListener("load",t,!1):e.attachEvent("onreadystatechange",function(){("loaded"==e.readyState||"complete"==e.readyState)&&t()})}function t(t,r){var i=n.getElementsByTagName("head")[0],a=n.createElement("script");a.setAttribute("src",t),a.setAttribute("type","text/javascript"),a.setAttribute("async",!0),e(a,function(){r()}),i.appendChild(a)}return function(e,r){for(var i=0,a=0;a<e.length;a++)t(e[a],function(){e.length==++i&&setTimeout(r,0)})}}();!function(){!e.WebSocket&&e.MozWebSocket&&(e.WebSocket=e.MozWebSocket),e.WebSocket&&(t.Transport=e.WebSocket,t.TransportType="native");var i="http:"==n.location.protocol?t.cdn_http:t.cdn_https,a=i+t.VERSION,o=[];e.JSON||o.push(a+"/json2"+t.dependency_suffix+".js"),e.WebSocket||(e.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0,o.push(a+"/flashfallback"+t.dependency_suffix+".js"));var l=function(){return e.WebSocket?function(){t.ready()}:function(){e.WebSocket?(t.Transport=e.WebSocket,t.TransportType="flash",e.WEB_SOCKET_SWF_LOCATION="https://s3.amazonaws.com/uploadcare-static/WebSocketMainInsecure.swf",WebSocket.__addTask(function(){t.ready()}),WebSocket.__initialize()):(t.Transport=null,t.TransportType="none",t.ready())}}(),s=function(e){var t=function(){n.body?e():setTimeout(t,0)};t()},c=function(){s(l)};o.length>0?r(o,c):c()}(),this.Pusher=t}.call(a),function(){var e,t={}.hasOwnProperty,r=function(e,r){for(var i in r)t.call(r,i)&&(e[i]=r[i]);function a(){this.constructor=e}return a.prototype=r.prototype,e.prototype=new a,e.__super__=r.prototype,e};e=a.jQuery,a.namespace("utils.pusher",function(t){var i,n,o;return n={},a.Pusher.prototype.constructor=a.Pusher,i=function(t){r(i,t);function i(){return o=i.__super__.constructor.apply(this,arguments)}return i.prototype.subscribe=function(e){return this.disconnectTimeout&&(clearTimeout(this.disconnectTimeout),this.disconnectTimeout=null),this.connect(),i.__super__.subscribe.apply(this,arguments)},i.prototype.unsubscribe=function(t){var r=this;return i.__super__.unsubscribe.apply(this,arguments),e.isEmptyObject(this.channels.channels)?this.disconnectTimeout=setTimeout(function(){return r.disconnectTimeout=null,r.disconnect()},5e3):void 0},i}(a.Pusher),t.getPusher=function(e){return null==n[e]&&(n[e]=new i(e)),n[e].connect(),n[e]}})}.call(this),function(){var e,t,r,i=function(e,t){return function(){return e.apply(t,arguments)}},n={}.hasOwnProperty,o=function(e,t){for(var r in t)n.call(t,r)&&(e[r]=t[r]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};e=a.jQuery,r=a.utils,t=a.utils.pusher,a.namespace("files",function(a){var n,l;return a.UrlFile=function(t){o(a,t),a.prototype.sourceName="url",a.prototype.allEvents="progress success error fail";function a(e){var t,n;if(this.__url=e,this.__listenWatcher=i(this.__listenWatcher,this),a.__super__.constructor.apply(this,arguments),n=r.splitUrlRegex.exec(this.__url)[3].split("/").pop())try{this.fileName=decodeURIComponent(n)}catch(o){t=o,this.fileName=n}this.__notifyApi()}return a.prototype.setName=function(e){return this.fileName=e,this.__realFileName=e,this.__notifyApi()},a.prototype.setIsImage=function(e){return this.isImage=e,this.__notifyApi()},a.prototype.__startUpload=function(){var t,i,a,o,s=this;return i=e.Deferred(),o=new l(this.settings),a=new n(this.settings),t={pub_key:this.settings.publicKey,signature:this.settings.secureSignature,expire:this.settings.secureExpire,source_url:this.__url,filename:this.__realFileName||"",source:this.sourceInfo.source,store:this.settings.doNotStore?"":"auto",jsonerrors:1},r.defer(function(){return"pending"===s.apiDeferred.state()?r.jsonp(""+s.settings.urlBase+"/from_url/",t).fail(function(e){return s.settings.debugUploads&&r.debug("Can't start upload from URL.",e,t),i.reject()}).done(function(t){var n;if("pending"===s.apiDeferred.state())return s.settings.debugUploads&&(r.debug("Start watchers.",t.token),n=setInterval(function(){return r.debug("Still watching.",t.token)},5e3),i.done(function(){return r.debug("Stop watchers.",t.token)}).always(function(){return clearInterval(n)})),s.__listenWatcher(i,e([o,a])),i.always(function(){return e([o,a]).off(s.allEvents),o.stopWatching(),a.stopWatching()}),e(o).one(s.allEvents,function(){return a.interval?(s.settings.debugUploads&&r.debug("Start using pusher.",t.token),a.stopWatching()):void 0}),o.watch(t.token),a.watch(t.token)}):void 0}),i},a.prototype.__listenWatcher=function(t,r){var i=this;return r.on("progress",function(e,r){return i.fileSize=r.total,t.notify(r.done/r.total)}).on("success",function(r,a){return e(r.target).trigger("progress",a),i.fileId=a.uuid,i.__handleFileData(a),t.resolve()}).on("error fail",t.reject)},a}(a.BaseFile),l=function(){function r(e){this.settings=e;try{this.pusher=t.getPusher(this.settings.pusherKey)}catch(r){this.pusher=null}}return r.prototype.watch=function(t){var r,i=this;return this.token=t,this.pusher?(r=this.pusher.subscribe("task-status-"+this.token),r.bind_all(function(t,r){return e(i).trigger(t,r)})):void 0},r.prototype.stopWatching=function(){return this.pusher?this.pusher.unsubscribe("task-status-"+this.token):void 0},r}(),n=function(){function t(e){this.settings=e,this.poolUrl=""+this.settings.urlBase+"/from_url/status/"}return t.prototype.watch=function(e){var t,r=this;return this.token=e,(t=function(){return r.interval=setTimeout(function(){return r.__updateStatus().done(function(){return r.interval?t():void 0})},333)})()},t.prototype.stopWatching=function(){return this.interval&&clearTimeout(this.interval),this.interval=null},t.prototype.__updateStatus=function(){var t=this;return r.jsonp(this.poolUrl,{token:this.token}).fail(function(r){
return e(t).trigger("error")}).done(function(r){return e(t).trigger(r.status,r)})},t}()})}.call(this),function(){var e,t,r={}.hasOwnProperty,i=function(e,t){for(var i in t)r.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};e=a.jQuery,t=a.utils,a.namespace("files",function(e){return e.UploadedFile=function(e){i(r,e),r.prototype.sourceName="uploaded";function r(e){var i;r.__super__.constructor.apply(this,arguments),i=t.splitCdnUrl(e),i?(this.fileId=i[1],i[2]&&(this.cdnUrlModifiers=i[2])):this.__rejectApi("baddata")}return r}(e.BaseFile),e.ReadyFile=function(e){i(t,e),t.prototype.sourceName="uploaded";function t(e){t.__super__.constructor.apply(this,arguments),e?(this.fileId=e.uuid,this.__handleFileData(e)):this.__rejectApi("deleted")}return t}(e.BaseFile)})}.call(this),function(){var e,t,r,i,n,o,l,s=[].slice,c={}.hasOwnProperty,u=function(e,t){for(var r in t)c.call(t,r)&&(e[r]=t[r]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};t=a.namespace,e=a.jQuery,o=a.utils,l=a.locale,i=l.t,r=a.settings,n=a.files,t("files",function(t){return t.FileGroup=function(){function t(t,i){var a=this;this.__uuid=null,this.settings=r.build(i),this.__fileColl=new o.CollectionOfPromises(t),this.__allFilesDf=e.when.apply(e,this.files()),this.__fileInfosDf=function(){var r;return t=function(){var t,i,a,n;for(a=this.files(),n=[],t=0,i=a.length;i>t;t++)r=a[t],n.push(r.then(null,function(t,r){return e.when(r)}));return n}.call(a),e.when.apply(e,t)}(),this.__createGroupDf=e.Deferred(),this.__initApiDeferred()}return t.prototype.files=function(){return this.__fileColl.get()},t.prototype.__save=function(){var e=this;return this.__saved?void 0:(this.__saved=!0,this.__allFilesDf.done(function(){return e.__createGroup().done(function(t){return e.__uuid=t.id,e.__buildInfo(function(t){return e.settings.imagesOnly&&!t.isImage?e.__createGroupDf.reject("image",t):e.__createGroupDf.resolve(t)})}).fail(function(){return e.__createGroupDf.reject("createGroup")})}))},t.prototype.promise=function(){return this.__save(),this.__apiDf.promise()},t.prototype.__initApiDeferred=function(){var t,r,i,a=this;return this.__apiDf=e.Deferred(),this.__progressState="uploading",r=function(e){return a.__buildInfo(function(t){return a.__apiDf.reject(e,t)})},i=function(e){return a.__apiDf.resolve(e)},t=function(){return a.__apiDf.notify(a.__progressInfo())},t(),this.__fileColl.onAnyProgress(t),this.__allFilesDf.done(function(){return a.__progressState="uploaded",t()}).fail(r),this.__createGroupDf.done(function(e){return a.__progressState="ready",t(),i(e)}).fail(r)},t.prototype.__progressInfo=function(){var e,t,r,i,a;for(e=0,r=this.__fileColl.lastProgresses(),i=0,a=r.length;a>i;i++)t=r[i],e+=((null!=t?t.progress:void 0)||0)/r.length;return{state:this.__progressState,uploadProgress:e,progress:"ready"===this.__progressState?1:.9*e}},t.prototype.__buildInfo=function(e){var t;return t={uuid:this.__uuid,cdnUrl:this.__uuid?""+this.settings.cdnBase+"/"+this.__uuid+"/":null,name:i("file",this.__fileColl.length()),count:this.__fileColl.length(),size:0,isImage:!0,isStored:!0},this.__fileInfosDf.done(function(){var r,i,a,n;for(r=1<=arguments.length?s.call(arguments,0):[],i=0,n=r.length;n>i;i++)a=r[i],t.size+=a.size,a.isImage||(t.isImage=!1),a.isStored||(t.isStored=!1);return e(t)})},t.prototype.__createGroup=function(){var t,r=this;return t=e.Deferred(),this.__fileColl.length()?this.__fileInfosDf.done(function(){var e,i;return i=1<=arguments.length?s.call(arguments,0):[],o.jsonp(""+r.settings.urlBase+"/group/","POST",{pub_key:r.settings.publicKey,signature:r.settings.secureSignature,expire:r.settings.secureExpire,files:function(){var t,r,a;for(a=[],t=0,r=i.length;r>t;t++)e=i[t],a.push("/"+e.uuid+"/"+(e.cdnUrlModifiers||""));return a}()}).fail(function(e){return r.settings.debugUploads&&o.log("Can't create group.",r.settings.publicKey,e),t.reject()}).done(t.resolve)}):t.reject(),t.promise()},t.prototype.api=function(){return this.__api||(this.__api=o.bindAll(this,["promise","files"])),this.__api},t}(),t.SavedFileGroup=function(e){u(t,e);function t(e,r){var i;this.__data=e,i=a.filesFrom("ready",this.__data.files,r),t.__super__.constructor.call(this,i,r)}return t.prototype.__createGroup=function(){return o.wrapToPromise(this.__data)},t}(t.FileGroup)}),t("",function(t){return t.FileGroup=function(e,t){var r,i,a,l,s,c,u,p;for(null==e&&(e=[]),i=[],l=0,c=e.length;c>l;l++)if(a=e[l],o.isFile(a))i.push(a);else if(o.isFileGroup(a))for(p=a.files(),s=0,u=p.length;u>s;s++)r=p[s],i.push(r);return new n.FileGroup(i,t).api()},t.loadFileGroup=function(t,i){var a,l,s=this;return i=r.build(i),a=e.Deferred(),l=o.groupIdRegex.exec(t),l?o.jsonp(""+i.urlBase+"/group/info/",{jsonerrors:1,pub_key:i.publicKey,group_id:l[0]}).fail(function(e){return i.debugUploads&&o.log("Can't load group info. Probably removed.",l[0],i.publicKey,e),a.reject()}).done(function(e){var t;return t=new n.SavedFileGroup(e,i),a.resolve(t.api())}):a.reject(),a.promise()}}),t("utils",function(t){return t.isFileGroup=function(e){return e&&e.files&&e.promise},t.valueToGroup=function(r,i){var n,o;if(r)if(e.isArray(r))n=function(){var e,a,n;for(n=[],e=0,a=r.length;a>e;e++)o=r[e],n.push(t.valueToFile(o,i));return n}(),r=a.FileGroup(n,i);else if(!t.isFileGroup(r))return a.loadFileGroup(r,i);return t.wrapToPromise(r||null)},t.isFileGroupsEqual=function(e,r){var i,a,n,o,l,s;if(e===r)return!0;if(!t.isFileGroup(e)||!t.isFileGroup(r))return!1;if(a=e.files(),n=r.files(),a.length!==n.length)return!1;for(o=l=0,s=a.length;s>l;o=++l)if(i=a[o],i!==n[o])return!1;return!0}})}.call(this),function(){var e,t,r,i;i=a.utils,e=a.jQuery,t=a.files,r=a.settings,a.namespace("",function(i){var a;return i.fileFrom=function(e,t,r){return i.filesFrom(e,[t],r)[0]},i.filesFrom=function(t,i,n){var o,l,s,c,u;for(n=r.build(n||{}),u=[],s=0,c=i.length;c>s;s++)l=i[s],o=null,e.isArray(l)&&(o=l[1],l=l[0]),u.push(new a[t](l,n,o).promise());return u},a={object:t.ObjectFile,input:t.InputFile,url:t.UrlFile,uploaded:t.UploadedFile,ready:t.ReadyFile}})}.call(this),function(){var e,t,r;r=a.utils,t=a.settings,e=a.jQuery,a.namespace("dragdrop",function(i){return i.support=r.abilities.fileDragAndDrop,i.uploadDrop=function(e,r,n){return n=t.build(n),i.receiveDrop(e,function(e,t){return r(n.multiple?a.filesFrom(e,t,n):a.fileFrom(e,t[0],n))})},i.support?(i.receiveDrop=function(t,r){return i.watchDragging(t),e(t).on({dragover:function(e){return e.preventDefault(),e.originalEvent.dataTransfer.dropEffect="copy"},drop:function(t){var i,a,n,o,l,s;if(t.preventDefault(),i=t.originalEvent.dataTransfer){if(i.files.length)return r("object",i.files);for(n=[],s=i.getData("text/uri-list").split(),o=0,l=s.length;l>o;o++)a=s[o],a=e.trim(a),a&&"#"!==a[0]&&n.push(a);return n?r("url",n):void 0}}})},i.watchDragging=function(t,r){var i,a,n;return n=!1,a=0,i=function(r){return n!==r?e(t).toggleClass("uploadcare--dragging",n=r):void 0},e(r||t).on({dragenter:function(){return a+=1,i(!0)},dragleave:function(){return a-=1,0===a?i(!1):void 0},"drop mouseenter":function(){return a=0,i(!1)}})},i.watchDragging("body",n)):i.receiveDrop=function(){}})}.call(this),function(){var e,t,r,i,n,o,l=function(e,t){return function(){return e.apply(t,arguments)}},s={}.hasOwnProperty,c=function(e,t){for(var r in t)s.call(t,r)&&(e[r]=t[r]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};r=a.files,e=a.jQuery,n=a.utils,t=n.abilities,o=a.templates,i=o.tpl,a.namespace("ui.progress",function(r){return r.Circle=function(){function e(e){this.update=l(this.update,this),t.canvas?this.renderer=new r.CanvasRenderer(e):this.renderer=new r.TextRenderer(e),this.observed=null}return e.prototype.listen=function(e,t){var r,i=this;return this.reset(),r=null!=t?function(e){return e[t]}:function(e){return e},this.observed=e,"resolved"===this.observed.state()?this.renderer.setValue(1,!0):this.observed.progress(function(t){return e===i.observed?i.renderer.setValue(r(t)):void 0}).always(function(t){return e===i.observed?i.renderer.setValue(1,!1):void 0}),this},e.prototype.reset=function(e){
return null==e&&(e=!1),this.observed=null,this.renderer.setValue(e?1:0,!0)},e.prototype.update=function(){return this.renderer.update()},e}(),r.BaseRenderer=function(){function t(t){this.element=e(t),this.element.data("uploadcare-progress-renderer",this),this.element.addClass("uploadcare--progress")}return t.prototype.update=function(){},t}(),r.TextRenderer=function(e){c(t,e);function t(){t.__super__.constructor.apply(this,arguments),this.element.addClass("uploadcare--progress_type_text"),this.element.html(i("progress__text")),this.text=this.element.find(".uploadcare--progress__text")}return t.prototype.setValue=function(e){return e=Math.round(100*e),this.text.html(""+e+" %")},t}(r.BaseRenderer),r.CanvasRenderer=function(t){c(r,t);function r(){r.__super__.constructor.apply(this,arguments),this.canvasEl=e("<canvas>").addClass("uploadcare--progress__canvas").get(0),this.element.addClass("uploadcare--progress_type_canvas"),this.element.html(this.canvasEl),this.setValue(0,!0)}return r.prototype.update=function(){var e,t,r,i;return r=Math.floor(Math.min(this.element.width(),this.element.height())),i=2*r,r?((this.canvasEl.width!==i||this.canvasEl.height!==i)&&(this.canvasEl.width=i,this.canvasEl.height=i),t=this.canvasEl.getContext("2d"),e=function(e,i){var a;return a=-Math.PI/2,t.beginPath(),t.moveTo(r,r),t.arc(r,r,e,a,a+2*Math.PI*i,!1),t.fill()},t.clearRect(0,0,i,i),t.globalCompositeOperation="source-over",t.fillStyle=this.element.css("border-left-color"),e(r-.5,1),t.fillStyle=this.element.css("color"),e(r,this.val),t.globalCompositeOperation="destination-out",e(r/7,1)):void 0},r.prototype.__animateValue=function(e){var t,r,i,a=this;return i=this.val,r=new Date,t=e>i?2:-2,this.__animIntervalId=setInterval(function(){var n;return n=i+(new Date-r)/1e3*t,n=(t>0?Math.min:Math.max)(n,e),n===e&&a.__stopAnimation(),a.__setValue(n)},15)},r.prototype.__stopAnimation=function(){return this.__animIntervalId&&clearInterval(this.__animIntervalId),this.__animIntervalId=null},r.prototype.__setValue=function(e){return this.val=e,this.update()},r.prototype.setValue=function(e,t){return null==t&&(t=!1),this.__stopAnimation(),t?this.__setValue(e):this.__animateValue(e)},r}(r.BaseRenderer)})}.call(this),function(){var e,t,r,i,n,o,l,s;e=a.jQuery,n=a.utils,o=a.ui,t=o.progress,l=a.locale,r=l.t,s=a.templates,i=s.tpl,a.namespace("widget",function(a){return a.Template=function(){function a(r,a){this.settings=r,this.element=a,this.content=e(i("widget")),this.element.after(this.content),this.circle=new t.Circle(this.content.find(".uploadcare--widget__progress").removeClass("uploadcare--widget__progress")),this.content.find(".uploadcare--progress").addClass("uploadcare--widget__progress"),this.statusText=this.content.find(".uploadcare--widget__text"),this.content.toggleClass("uploadcare--widget_option_clearable",this.settings.clearable)}return a.prototype.addButton=function(t,r){return null==r&&(r=""),e(i("widget-button",{name:t,caption:r})).appendTo(this.content)},a.prototype.setStatus=function(e){var t;return t="uploadcare--widget_status_",this.content.removeClass(t+this.content.attr("data-status")),this.content.attr("data-status",e),this.content.addClass(t+e),this.element.trigger(""+e+".uploadcare")},a.prototype.reset=function(){return this.circle.reset(),this.setStatus("ready"),this.__file=null},a.prototype.loaded=function(){return this.setStatus("loaded"),this.circle.reset(!0)},a.prototype.listen=function(e){var t=this;return this.__file=e,this.circle.listen(e,"uploadProgress"),this.setStatus("started"),e.progress(function(i){if(e===t.__file)switch(i.state){case"uploading":return t.statusText.text(r("uploading"));case"uploaded":return t.statusText.text(r("loadingInfo"))}})},a.prototype.error=function(e){return this.statusText.text(r("errors."+(e||"default"))),this.setStatus("error")},a.prototype.setFileInfo=function(e){return this.statusText.html(i("widget-file-name",e)).find(".uploadcare--widget__file-name").toggleClass("needsclick",this.settings.systemDialog)},a}()})}.call(this),function(){var e,t,r,i,n,o,l,s=function(e,t){return function(){return e.apply(t,arguments)}};n=a.utils,t=a.dragdrop,o=a.locale,r=o.t,e=a.jQuery,l=a.templates,i=l.tpl,a.namespace("widget.tabs",function(a){return a.FileTab=function(){function a(e,t,r,a,n){this.container=e,this.tabButton=t,this.dialogApi=r,this.settings=a,this.name=n,this.__initTabsList=s(this.__initTabsList,this),this.container.append(i("tab-file")),this.__setupFileButton(),this.__initDragNDrop(),this.__initTabsList()}return a.prototype.__initDragNDrop=function(){var e,r=this;return e=this.container.find(".uploadcare--draganddrop"),n.abilities.fileDragAndDrop?(t.receiveDrop(e,function(e,t){return r.dialogApi.addFiles(e,t),r.dialogApi.switchTab("preview")}),e.addClass("uploadcare--draganddrop_supported")):void 0},a.prototype.__setupFileButton=function(){var e,t=this;return e=this.container.find(".uploadcare--tab__action-button"),n.abilities.sendFileAPI?e.on("click",function(){return n.fileSelectDialog(t.container,t.settings,function(e){return t.dialogApi.addFiles("object",e.files),t.dialogApi.switchTab("preview")}),!1}):n.fileInput(e,this.settings,function(e){return t.dialogApi.addFiles("input",[e]),t.dialogApi.switchTab("preview")})},a.prototype.__initTabsList=function(){var e,t,r,i,a,n,o,l=this;for(t=this.container.find(".uploadcare--file-sources__items"),t.remove(".uploadcare--file-sources__item:not(.uploadcare--file-source_all)"),r=0,o=this.settings.tabs,a=0,n=o.length;n>a;a++)i=o[a],"file"!==i&&"url"!==i&&"camera"!==i&&this.dialogApi.isTabVisible(i)&&(r+=1,r>5||t.append([this.__tabButton(i)," "]));return e=t.find(".uploadcare--file-source_all").on("click",function(){return l.dialogApi.openMenu()}),r>5&&t.addClass("uploadcare--file-sources__items_many"),this.container.find(".uploadcare--file-sources").attr("hidden",0===r)},a.prototype.__tabButton=function(t){var i,a,n=this;return a=e("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-"+t+"'/></svg>").attr("role","presentation").attr("class","uploadcare--icon uploadcare--file-source__icon"),i=e("<button>").addClass("uploadcare--button").addClass("uploadcare--button_icon").addClass("uploadcare--file-source").addClass("uploadcare--file-source_"+t).addClass("uploadcare--file-sources__item").attr("type","button").attr("title",r("dialog.tabs.names."+t)).attr("data-tab",t).append(a).on("click",function(){return n.dialogApi.switchTab(t)})},a}()})}.call(this),function(){var e,t,r,i;e=a.jQuery,i=a.templates,r=i.tpl,t=a.locale.t,a.namespace("widget.tabs",function(t){return t.UrlTab=function(){var t,i;i=/^[a-z][a-z0-9+\-.]*:?\/\//,t=function(t){return t=e.trim(t),i.test(t)?t:"http://"+t};function a(i,a,n,o,l){var s,c,u=this;this.container=i,this.tabButton=a,this.dialogApi=n,this.settings=o,this.name=l,this.container.append(r("tab-url")),c=this.container.find(".uploadcare--input"),c.on("change keyup input",function(){return s.attr("disabled",!e.trim(this.value))}),s=this.container.find(".uploadcare--button[type=submit]").attr("disabled",!0),this.container.find(".uploadcare--form").on("submit",function(){var e;return(e=t(c.val()))&&(u.dialogApi.addFiles("url",[[e,{source:"url-tab"}]]),c.val("").trigger("change")),!1})}return a}()})}.call(this),function(){var t,r,i,o,l=function(e,t){return function(){return e.apply(t,arguments)}};i=a.utils,t=a.jQuery,o=a.templates,r=o.tpl,a.namespace("widget.tabs",function(a){var o;return o="https:"===n.location.protocol,a.CameraTab=function(){function a(e,t,i,a,n){var s,c=this;return this.container=e,this.tabButton=t,this.dialogApi=i,this.settings=a,this.name=n,this.__cancelRecording=l(this.__cancelRecording,this),this.__stopRecording=l(this.__stopRecording,this),this.__startRecording=l(this.__startRecording,this),this.__capture=l(this.__capture,this),this.__mirror=l(this.__mirror,this),this.__revoke=l(this.__revoke,this),this.__requestCamera=l(this.__requestCamera,this),this.__setState=l(this.__setState,this),this.__checkCompatibility()?(this.__loaded=!1,this.mirrored=!0,this.container.append(r("tab-camera")),this.container.addClass("uploadcare--camera"),this.container.addClass("uploadcare--camera_status_requested"),this.container.find(".uploadcare--camera__button_type_capture").on("click",this.__capture),
s=this.container.find(".uploadcare--camera__button_type_start-record").on("click",this.__startRecording),this.container.find(".uploadcare--camera__button_type_stop-record").on("click",this.__stopRecording),this.container.find(".uploadcare--camera__button_type_cancel-record").on("click",this.__cancelRecording),this.container.find(".uploadcare--camera__button_type_mirror").on("click",this.__mirror),this.container.find(".uploadcare--camera__button_type_retry").on("click",this.__requestCamera),(!this.MediaRecorder||this.settings.imagesOnly)&&s.hide(),this.video=this.container.find(".uploadcare--camera__video"),this.video.on("loadeddata",function(){return this.play()}),this.dialogApi.progress(function(e){if(e===c.name){if(!c.__loaded)return c.__requestCamera()}else if(c.__loaded&&o)return c.__revoke()}),void this.dialogApi.always(this.__revoke)):void this.dialogApi.hideTab(this.name)}return a.prototype.__checkCompatibility=function(){var t;return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?this.getUserMedia=function(e,t,r){return navigator.mediaDevices.getUserMedia(e).then(t)["catch"](r)}:this.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,this.URL=e.URL||e.webkitURL,this.MediaRecorder=e.MediaRecorder,o||i.warn("Camera is not allowed for HTTP. Please use HTTPS connection."),t="localhost"===n.location.hostname,!!this.getUserMedia&&Uint8Array&&(o||t)},a.prototype.__setState=function(e){var t;return t=["","ready","requested","denied","not-founded","recording"].join(" uploadcare--camera_status_"),this.container.removeClass(t).addClass("uploadcare--camera_status_"+e)},a.prototype.__requestCamera=function(){var e=this;return this.__loaded=!0,this.getUserMedia.call(navigator,{audio:!0,video:{optional:[{minWidth:320},{minWidth:640},{minWidth:1024},{minWidth:1280},{minWidth:1920}]}},function(t){return e.__setState("ready"),e.__stream=t,"srcObject"in e.video[0]?(e.video.prop("srcObject",t),e.video.on("loadedmetadata",function(){return e.video[0].play()})):(e.URL?(e.__streamObject=e.URL.createObjectURL(t),e.video.prop("src",e.__streamObject)):e.video.prop("src",t),e.video[0].play())},function(t){return"NO_DEVICES_FOUND"===t||"DevicesNotFoundError"===t.name?e.__setState("not-founded"):e.__setState("denied"),e.__loaded=!1})},a.prototype.__revoke=function(){var e;return this.__setState("requested"),this.__loaded=!1,this.__stream?(this.__streamObject&&this.URL.revokeObjectURL(this.__streamObject),this.__stream.getTracks?t.each(this.__stream.getTracks(),function(){return"function"==typeof this.stop?this.stop():void 0}):"function"==typeof(e=this.__stream).stop&&e.stop(),this.__stream=null):void 0},a.prototype.__mirror=function(){return this.mirrored=!this.mirrored,this.video.toggleClass("uploadcare--camera__video_mirrored",this.mirrored)},a.prototype.__capture=function(){var e,t,r,a,o,l=this;return a=this.video[0],o=a.videoWidth,r=a.videoHeight,e=n.createElement("canvas"),e.width=o,e.height=r,t=e.getContext("2d"),this.mirrored&&(t.translate(o,0),t.scale(-1,1)),t.drawImage(a,0,0,o,r),i.canvasToBlob(e,"image/jpeg",.9,function(t){return e.width=e.height=1,t.name="camera.jpg",l.dialogApi.addFiles("object",[[t,{source:"camera"}]]),l.dialogApi.switchTab("preview")})},a.prototype.__startRecording=function(){var e=this;return this.__setState("recording"),this.__chunks=[],this.__recorder=new this.MediaRecorder(this.__stream),this.__recorder.start(),this.__recorder.ondataavailable=function(t){return e.__chunks.push(t.data)}},a.prototype.__stopRecording=function(){var e=this;return this.__setState("ready"),this.__recorder.onstop=function(){var t,r;return r=e.__recorder.mimeType,r=r?r.split("/")[1]:"webm",t=new Blob(e.__chunks,{type:"video/"+r}),t.name="record."+r,e.dialogApi.addFiles("object",[[t,{source:"camera"}]]),e.dialogApi.switchTab("preview"),e.__chunks=[]},this.__recorder.stop()},a.prototype.__cancelRecording=function(){return this.__setState("ready"),this.__recorder.stop(),this.__chunks=[]},a}()})}.call(this),function(){var t,r,i,n,o,l,s,c=function(e,t){return function(){return e.apply(t,arguments)}};i=a.locale,l=a.utils,o=a.tabsCss,t=a.jQuery,s=a.locale,n=s.t,r=a.files,a.namespace("widget.tabs",function(i){return i.RemoteTab=function(){function i(e,t,r,i,a){var n=this;this.container=e,this.tabButton=t,this.dialogApi=r,this.settings=i,this.name=a,this.__createIframe=c(this.__createIframe,this),this.dialogApi.progress(function(e){return e===n.name&&n.__createIframe(),n.__sendMessage({type:"visibility-changed",visible:e===n.name})})}return i.prototype.remoteUrl=function(){return""+this.settings.socialBase+"/window3/"+this.name+"?"+t.param({lang:this.settings.locale,public_key:this.settings.publicKey,widget_version:a.version,images_only:this.settings.imagesOnly,pass_window_open:this.settings.passWindowOpen})},i.prototype.__sendMessage=function(e){var t,r;return null!=(t=this.iframe)&&null!=(r=t[0].contentWindow)?r.postMessage(JSON.stringify(e),"*"):void 0},i.prototype.__createIframe=function(){var i,a=this;if(!this.iframe)return this.iframe=t("<iframe>",{src:this.remoteUrl(),marginheight:0,marginwidth:0,frameborder:0,allowTransparency:"true"}).addClass("uploadcare--tab__iframe").appendTo(this.container).on("load",function(){var e,t,r,i,n,l,s,c;for(a.iframe.css("opacity","1"),s=o.urls,r=0,n=s.length;n>r;r++)t=s[r],a.__sendMessage({type:"embed-css",url:t});for(c=o.styles,i=0,l=c.length;l>i;i++)e=c[i],a.__sendMessage({type:"embed-css",style:e})}),this.container.addClass("uploadcare--tab_remote"),i=this.iframe[0].contentWindow,l.registerMessage("file-selected",i,function(e){var i,n,o;return o=function(){var t,r,i,n,o;if(e.alternatives)for(o=a.settings.preferredTypes,i=0,n=o.length;n>i;i++){r=o[i],r=l.globRegexp(r);for(t in e.alternatives)if(r.test(t))return e.alternatives[t]}return e.url}(),n=t.extend({source:a.name},e.info||{}),i=new r.UrlFile(o,a.settings,n),e.filename&&i.setName(e.filename),null!=e.is_image&&i.setIsImage(e.is_image),a.dialogApi.addFiles([i.promise()])}),l.registerMessage("open-new-window",i,function(t){var r,i,n;return a.settings.debugUploads&&l.debug("Open new window message.",a.name),(i=e.open(t.url,"_blank"))?(n=function(){return a.settings.debugUploads&&l.debug("Window is closed.",a.name),a.__sendMessage({type:"navigate",fragment:""})},"closed"in i?r=setInterval(function(){return i.closed?(clearInterval(r),n()):void 0},100):i.addEventListener("exit",n)):void l.warn("Can't open new window. Possible blocked.",a.name)}),this.dialogApi.done(function(){return l.unregisterMessage("file-selected",i),l.unregisterMessage("open-new-window",i)})},i}()})}.call(this),function(){var e,t,r,i;r=a.ui,i=r.progress,t=i.Circle,e=a.jQuery,a.namespace("widget.tabs",function(r){return r.BasePreviewTab=function(){function r(e,t,r,i,a){var n,o=this;this.container=e,this.tabButton=t,this.dialogApi=r,this.settings=i,this.name=a,this.__initTabButtonCircle(),this.container.addClass("uploadcare--preview"),n=":not(:disabled)",this.container.on("click",".uploadcare--preview__back"+n,function(){return o.dialogApi.fileColl.clear()}),this.container.on("click",".uploadcare--preview__done"+n,this.dialogApi.resolve)}return r.prototype.__initTabButtonCircle=function(){var r,i,a,n,o=this;return a=this.tabButton.find(".uploadcare--panel__icon"),i=e.Deferred(),n=function(){var e,t,r,a,n;for(e=o.dialogApi.fileColl.lastProgresses(),t=0,a=0,n=e.length;n>a;a++)r=e[a],t+=((null!=r?r.progress:void 0)||0)/e.length;return i.notify(t)},this.dialogApi.fileColl.onAnyProgress(n),this.dialogApi.fileColl.onAdd.add(n),this.dialogApi.fileColl.onRemove.add(n),n(),r=new t(a).listen(i.promise()),this.dialogApi.progress(r.update)},r}()})}.call(this),function(){var e,t,r,i,n,o,l,s,c,u,p,d,h,f=function(e,t){return function(){return e.apply(t,arguments)}},_={}.hasOwnProperty,g=function(e,t){for(var r in t)_.call(t,r)&&(e[r]=t[r]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};l=a.utils,s=a.utils,c=s.abilities,r=c.URL,u=a.ui,i=u.progress,p=a.templates,o=p.tpl,e=a.jQuery,d=a.crop,t=d.CropWidget,h=a.locale,n=h.t,a.namespace("widget.tabs",function(i){return i.PreviewTab=function(i){g(a,i);function a(t,r,i,n,o){
var l=this;this.container=t,this.tabButton=r,this.dialogApi=i,this.settings=n,this.name=o,this.populateCropSizes=f(this.populateCropSizes,this),this.initImage=f(this.initImage,this),this.__setState=f(this.__setState,this),this.__tryToLoadVideoPreview=f(this.__tryToLoadVideoPreview,this),this.__tryToLoadImagePreview=f(this.__tryToLoadImagePreview,this),this.__setFile=f(this.__setFile,this),a.__super__.constructor.apply(this,arguments),e.each(this.dialogApi.fileColl.get(),function(e,t){return l.__setFile(t)}),this.dialogApi.fileColl.onAdd.add(this.__setFile),this.widget=null,this.__state=null}return a.prototype.__setFile=function(e){var t,r,i,a=this;return this.file=e,t=function(t){return function(){return e===a.file?t.apply(null,arguments):void 0}},r=l.once(this.__tryToLoadImagePreview),i=l.once(this.__tryToLoadVideoPreview),this.__setState("unknown",{}),this.file.progress(t(function(t){var n,o,s;return t=t.incompleteFileInfo,o=(t.name||"")+l.readableFileSize(t.size,"",", "),a.container.find(".uploadcare--preview__file-name").text(o),s=t.sourceInfo,n=l.abilities.Blob,s.file&&n&&s.file instanceof n?r(e,s.file).fail(function(){return i(e,s.file)}):void 0})),this.file.done(t(function(e){var t,r;if("video"!==a.__state)return e.isImage?"image"!==a.__state?(r=e.originalUrl,r+="-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/",t=e.originalImageInfo,a.__setState("image",{src:r,name:e.name,info:e}),a.initImage([t.width,t.height],e.cdnUrlModifiers)):void 0:a.__setState("regular",{file:e})})),this.file.fail(t(function(e,t){return a.__setState("error",{error:e,file:t})}))},a.prototype.__tryToLoadImagePreview=function(t,i){var a,n=this;return a=e.Deferred(),"pending"!==t.state()||!i.size||i.size>=this.settings.multipartMinSize?a.reject().promise():(l.image.drawFileToCanvas(i,1550,924,"#ffffff",this.settings.imagePreviewMaxSize).done(function(e,i){return l.canvasToBlob(e,"image/jpeg",.95,function(o){var l;return a.resolve(),e.width=e.height=1,"pending"===t.state()&&"pending"===n.dialogApi.state()&&n.file===t?(l=r.createObjectURL(o),n.dialogApi.always(function(){return r.revokeObjectURL(l)}),"image"!==n.__state?(n.__setState("image",{src:l,name:""}),n.initImage(i)):void 0):void 0})}).fail(a.reject),a.promise())},a.prototype.__tryToLoadVideoPreview=function(t,i){var a,n,o,s=this;return a=e.Deferred(),r&&i.size?(o=r.createObjectURL(i),n=l.videoLoader(o),n.fail(function(){return r.revokeObjectURL(o),a.reject()}).done(function(){return a.resolve(),s.dialogApi.always(function(){return r.revokeObjectURL(o)}),s.__setState("video"),s.container.find(".uploadcare--preview__video").attr("src",o)}),a.promise()):a.reject().promise()},a.prototype.__setState=function(e,t){return this.__state=e,t=t||{},t.crop=this.settings.crop,this.container.empty().append(o("tab-preview-"+e,t)),this.container.removeClass(function(e,t){return t.split(" ").filter(function(e){return!!~e.indexOf("uploadcare--preview_status_")}).join(" ")}),"unknown"===e&&this.settings.crop&&this.container.find(".uploadcare--preview__done").hide(),"error"===e?this.container.addClass("uploadcare--preview_status_error-"+t.error):void 0},a.prototype.initImage=function(e,r){var i,a,o,s,c=this;return a=this.container.find(".uploadcare--preview__image"),i=this.container.find(".uploadcare--preview__done"),o=l.imageLoader(a[0]).done(function(){return c.container.addClass("uploadcare--preview_status_loaded")}).fail(function(){return c.file=null,c.__setState("error",{error:"loadImage"})}),s=function(){return c.container.find(".uploadcare--crop-sizes__item").attr("aria-disabled",!1).attr("tabindex",0),i.attr("disabled",!1),c.widget=new t(a,e,c.settings.crop[0]),r&&c.widget.setSelectionFromModifiers(r),i.on("click",function(){var e;return e=c.widget.applySelectionToFile(c.file),c.dialogApi.fileColl.replace(c.file,e),!0})},this.settings.crop?(this.container.find(".uploadcare--preview__title").text(n("dialog.tabs.preview.crop.title")),this.container.find(".uploadcare--preview__content").addClass("uploadcare--preview__content_crop"),i.attr("disabled",!0),i.text(n("dialog.tabs.preview.crop.done")),this.populateCropSizes(),this.container.find(".uploadcare--crop-sizes__item").attr("aria-disabled",!0).attr("tabindex",-1),o.done(function(){return l.defer(s)})):void 0},a.prototype.populateCropSizes=function(){var t,r,i,a=this;return t=this.container.find(".uploadcare--crop-sizes"),i=t.children(),r="uploadcare--crop-sizes__item_current",e.each(this.settings.crop,function(o,s){var c,u,p,d,h,f;return h=s.preferedSize,h?(u=l.gcd(h[0],h[1]),c=""+h[0]/u+":"+h[1]/u):c=n("dialog.tabs.preview.crop.free"),d=i.clone().appendTo(t).attr("data-caption",c).on("click",function(i){"true"!==e(i.currentTarget).attr("aria-disabled")&&!e(i.currentTarget).hasClass(r)&&a.settings.crop.length>1&&a.widget&&(a.widget.setCrop(s),t.find(">*").removeClass(r),d.addClass(r))}),h?(f=l.fitSize(h,[30,30],!0),d.children().css({width:Math.max(20,f[0]),height:Math.max(12,f[1])})):(p=e("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-crop-free'/></svg>").attr("role","presentation").attr("class","uploadcare--icon"),d.children().append(p).addClass("uploadcare--crop-sizes__icon_free"))}),i.remove(),t.find(">*").eq(0).addClass(r)},a}(i.BasePreviewTab)})}.call(this),function(e){function t(e){this.targets=e,this.last=null,this.update()}t.prototype={update:function(){var t={};this.targets.each(function(r){var i=e(this).offset();i.top in t||(t[i.top]=[]),t[i.top].push([i.left+this.offsetWidth/2,this])}),this.rows=t},find:function(e,t){var r=1/0,i=this.rows,a,n,o;for(n in i){var l=Math.abs(n-t);r>l&&(r=l,a=i[n])}r=Math.abs(a[0][0]-e),o=a[0][1];for(var s=1;s<a.length;s++){var l=Math.abs(a[s][0]-e);r>l&&(r=l,o=a[s][1])}return o},findNotLast:function(e,t){var r=this.find(e,t);return this.last&&r&&this.last==r?null:this.last=r}};var r="uploadcareMovable",i="uploadcareSortable",a={};a[r]=function(t){t=e.extend({distance:4,anyButton:!1,axis:!1,zIndex:1e3,start:e.noop,move:e.noop,finish:e.noop,items:null,keepFake:!1,touch:!0},t);function i(e){if(t.touch){var r,i;if(i=e.originalEvent.touches,i&&i.length)r=i[0];else{if(i=e.originalEvent.changedTouches,!i||!i.length)return;r=i[0]}e.pageX=r.pageX,e.pageY=r.pageY,e.which=1}}var a="mousedown.{} touchstart.{}".replace(/\{}/g,r);this.on(a,t.items,null,function(a){if(i(a),t.anyButton||1==a.which){a.preventDefault();var o=!1,l=e(this),s=!1,c=l.position();c.top+=l.offsetParent().scrollTop(),c.left+=l.offsetParent().scrollLeft();var u="mousemove.{} touchmove.{}".replace(/\{}/g,r);e(n).on(u,function(e){if(i(e),!o&&(Math.abs(e.pageX-a.pageX)>t.distance||Math.abs(e.pageY-a.pageY)>t.distance)&&(o=!0,s=l.clone().css({position:"absolute",zIndex:t.zIndex,width:l.width()}).appendTo(l.offsetParent()),t.start({event:e,dragged:l,fake:s})),o){e.preventDefault();var r="y"==t.axis?0:e.pageX-a.pageX,n="x"==t.axis?0:e.pageY-a.pageY;s.css({left:r+c.left,top:n+c.top}),t.move({event:e,dragged:l,fake:s,dx:r,dy:n})}});var u="mouseup.{} touchend.{} touchcancel.{} touchleave.{}";e(n).on(u.replace(/\{}/g,r),function(c){i(c);var u="mousemove.{} touchmove.{} mouseup.{} touchend.{} touchcancel.{} touchleave.{}";if(e(n).off(u.replace(/\{}/g,r)),o){c.preventDefault();var p=c.pageX-a.pageX,d=c.pageY-a.pageY;o=!1,t.finish({event:c,dragged:l,fake:s,dx:p,dy:d}),t.keepFake||s.remove()}})}})},a[i]=function(i){var a=e.extend({items:">*"},i),i=e.extend({checkBounds:function(){return!0},start:e.noop,attach:e.noop,move:e.noop,finish:e.noop},i),n,o=!1,l=this;return a.start=function(e){i.start(e),n=new t(l.find(a.items).not(e.fake)),o=e.dragged.next()},a.move=function(t){if(t.nearest=null,i.checkBounds(t)){var r=t.fake.offset(),a=n.findNotLast(r.left+t.dragged.width()/2,r.top);t.nearest=e(a),a&&a!=t.dragged[0]&&(t.dragged.nextAll().filter(a).length>0?t.dragged.insertAfter(a):t.dragged.insertBefore(a),i.attach(t),n.last=null,n.update())}else null!==n.last&&(n.last=null,o.length?t.dragged.insertBefore(o):t.dragged.parent().append(t.dragged),i.attach(t),n.update());i.move(t)},a.finish=function(t){var r=t.fake.offset();t.nearest=null,i.checkBounds(t)&&(t.nearest=e(n.find(r.left+t.dragged.width()/2,r.top))),i.finish(t),n=null},this[r](a)},e.fn.extend(a);
}(a.jQuery),function(){var e,t,r,i,n,o,l,s,c,u=function(e,t){return function(){return e.apply(t,arguments)}},p={}.hasOwnProperty,d=function(e,t){for(var r in t)p.call(t,r)&&(e[r]=t[r]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};o=a.utils,l=a.ui,t=l.progress,s=a.templates,i=s.tpl,e=a.jQuery,c=a.locale,r=c.t,n=a,a.namespace("widget.tabs",function(t){return t.PreviewTabMultiple=function(t){d(a,t);function a(){this.__fileReplaced=u(this.__fileReplaced,this),this.__fileRemoved=u(this.__fileRemoved,this),this.__fileAdded=u(this.__fileAdded,this),this.__fileFailed=u(this.__fileFailed,this),this.__fileDone=u(this.__fileDone,this),this.__fileProgress=u(this.__fileProgress,this),this.__updateContainerView=u(this.__updateContainerView,this);var t=this;a.__super__.constructor.apply(this,arguments),this.container.append(i("tab-preview-multiple")),this.__fileTpl=e(i("tab-preview-multiple-file")),this.fileListEl=this.container.find(".uploadcare--files"),this.doneBtnEl=this.container.find(".uploadcare--preview__done"),e.each(this.dialogApi.fileColl.get(),function(e,r){return t.__fileAdded(r)}),this.__updateContainerView(),this.dialogApi.fileColl.onAdd.add(this.__fileAdded,this.__updateContainerView),this.dialogApi.fileColl.onRemove.add(this.__fileRemoved,this.__updateContainerView),this.dialogApi.fileColl.onReplace.add(this.__fileReplaced,this.__updateContainerView),this.dialogApi.fileColl.onAnyProgress(this.__fileProgress),this.dialogApi.fileColl.onAnyDone(this.__fileDone),this.dialogApi.fileColl.onAnyFail(this.__fileFailed),this.fileListEl.addClass(this.settings.imagesOnly?"uploadcare--files_type_tiles":"uploadcare--files_type_table"),this.__setupSorting()}return a.prototype.__setupSorting=function(){var e=this;return this.fileListEl.uploadcareSortable({touch:!1,axis:this.settings.imagesOnly?"xy":"y",start:function(e){return e.dragged.css("visibility","hidden")},finish:function(t){var r,i;return t.dragged.css("visibility","visible"),r=e.container.find(".uploadcare--file"),i=function(t){return r.index(e.__fileToEl(t))},e.dialogApi.fileColl.sort(function(e,t){return i(e)-i(t)})}})},a.prototype.__updateContainerView=function(){var e,t,i,a,n,o,l;return t=this.dialogApi.fileColl.length(),o=0!==this.settings.multipleMax&&t>this.settings.multipleMax,n=t<this.settings.multipleMin,i=o||n,this.doneBtnEl.attr("disabled",i),a=r("dialog.tabs.preview.multiple.question").replace("%files%",r("file",t)),this.container.find(".uploadcare--preview__title").text(a),e=this.container.find(".uploadcare--preview__message"),e.empty(),i?(l=o?r("dialog.tabs.preview.multiple.tooManyFiles").replace("%max%",this.settings.multipleMax):t&&n?r("dialog.tabs.preview.multiple.tooFewFiles").replace("%min%",this.settings.multipleMin).replace("%files%",r("file",t)):void 0,e.addClass("uploadcare--error").text(l)):void 0},a.prototype.__updateFileInfo=function(e,t){var i;return i=t.name||r("dialog.tabs.preview.unknownName"),e.find(".uploadcare--file__name").text(i),e.find(".uploadcare--file__description").attr("title",r("dialog.tabs.preview.multiple.file.preview").replace("%file%",i)),e.find(".uploadcare--file__remove").attr("title",r("dialog.tabs.preview.multiple.file.remove").replace("%file%",i)),e.find(".uploadcare--file__size").text(o.readableFileSize(t.size,"–"))},a.prototype.__fileProgress=function(e,t){var r;return r=this.__fileToEl(e),r.find(".uploadcare--progressbar__value").css("width",Math.round(100*t.progress)+"%"),this.__updateFileInfo(r,t.incompleteFileInfo)},a.prototype.__fileDone=function(t,r){var i,a,o,l=this;return a=this.__fileToEl(t).removeClass("uploadcare--file_status_uploading").addClass("uploadcare--file_status_uploaded"),a.find(".uploadcare--progressbar__value").css("width","100%"),this.__updateFileInfo(a,r),r.isImage?(i=""+r.cdnUrl+"-/quality/lightest/-/preview/108x108/",o=e("<img>").attr("src",i).addClass("uploadcare--file__icon")):o=e("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-file'/></svg>").attr("role","presentation").attr("class","uploadcare--icon uploadcare--file__icon"),a.find(".uploadcare--file__preview").html(o),a.find(".uploadcare--file__description").on("click",function(){return n.openPreviewDialog(t,l.settings).done(function(e){return l.dialogApi.fileColl.replace(t,e)})})},a.prototype.__fileFailed=function(t,i,a){var n,o;return n=this.__fileToEl(t).removeClass("uploadcare--file_status_uploading").addClass("uploadcare--file_status_error"),n.find(".uploadcare--file__error").text(r("errors."+i)),o=e("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-error'/></svg>").attr("role","presentation").attr("class","uploadcare--icon uploadcare--file__icon"),n.find(".uploadcare--file__preview").html(o)},a.prototype.__fileAdded=function(e){var t;return t=this.__createFileEl(e),t.appendTo(this.fileListEl)},a.prototype.__fileRemoved=function(t){return this.__fileToEl(t).remove(),e(t).removeData()},a.prototype.__fileReplaced=function(e,t){var r;return r=this.__createFileEl(t),r.insertAfter(this.__fileToEl(e)),this.__fileRemoved(e)},a.prototype.__fileToEl=function(t){return e(t).data("dpm-el")||e()},a.prototype.__createFileEl=function(t){var r,i=this;return r=this.__fileTpl.clone().on("click",".uploadcare--file__remove",function(){return i.dialogApi.fileColl.remove(t)}),e(t).data("dpm-el",r),r},a}(t.BasePreviewTab)})}.call(this),function(){var t,r,i,o,l,s,c,u,p,d,h=function(e,t){return function(){return e.apply(t,arguments)}};c=a.utils,u=a.locale,o=u.t,p=a.templates,s=p.tpl,r=a.files,d=a.widget,l=d.tabs,i=a.settings,t=a.jQuery,a.namespace("",function(u){var p,d,f,_,g,m=this;return f=function(e,t){var r,i;return i=e.scrollTop(),r=e.scrollLeft(),t&&e.scrollTop(0).scrollLeft(0),function(){return e.scrollTop(i).scrollLeft(r)}},t(e).on("keydown",function(e){return u.isDialogOpened()&&27===e.which?(e.stopImmediatePropagation(),"undefined"!=typeof d&&null!==d?d.reject():void 0):void 0}),d=null,_="uploadcare--page",u.isDialogOpened=function(){return null!==d},u.closeDialog=function(){var e;e=[];while(d)e.push(d.reject());return e},u.openDialog=function(r,i,a){var o,l,c;return u.closeDialog(),l=t(s("dialog")).appendTo("body"),c=u.openPanel(l.find(".uploadcare--dialog__placeholder"),r,i,a),l.find(".uploadcare--panel").addClass("uploadcare--dialog__panel"),l.addClass("uploadcare--dialog_status_active"),c.dialogElement=l,o=f(t(e),"absolute"===l.css("position")),t("html, body").addClass(_),l.find(".uploadcare--dialog__close").on("click",c.reject),l.on("dblclick",function(e){var r;if(t.contains(n.documentElement,e.target)&&(r=".uploadcare--dialog__panel, .uploadcare--dialog__powered-by",!t(e.target).is(r)&&!t(e.target).parents(r).length))return c.reject()}),d=c.always(function(){return t("html, body").removeClass(_),d=null,l.remove(),o()})},u.openPreviewDialog=function(e,r){var i,n,o=this;return n=d,d=null,r=t.extend({},r,{multiple:!1,tabs:""}),i=a.openDialog(e,"preview",r),null!=n&&n.dialogElement.addClass("uploadcare--dialog_status_inactive"),i.always(function(){return d=n,null!=n?(t("html, body").addClass(_),n.dialogElement.removeClass("uploadcare--dialog_status_inactive")):void 0}),i.onTabVisibility(function(e,t){return"preview"!==e||t?void 0:i.reject()}),i},u.openPanel=function(e,r,n,o){var l,s;return t.isPlainObject(n)&&(o=n,n=null),r?c.isFileGroup(r)?r=r.files():t.isArray(r)||(r=[r]):r=[],o=i.build(o),s=new p(o,e,r,n).publicPromise(),l=function(e){return o.multiple?a.FileGroup(e,o):e[0]},c.then(s,l,l).promise(s)},g={},u.registerTab=function(e,t){return g[e]=t},u.registerTab("file",l.FileTab),u.registerTab("url",l.UrlTab),u.registerTab("camera",l.CameraTab),u.registerTab("facebook",l.RemoteTab),u.registerTab("dropbox",l.RemoteTab),u.registerTab("gdrive",l.RemoteTab),u.registerTab("gphotos",l.RemoteTab),u.registerTab("instagram",l.RemoteTab),u.registerTab("flickr",l.RemoteTab),u.registerTab("vk",l.RemoteTab),u.registerTab("evernote",l.RemoteTab),u.registerTab("box",l.RemoteTab),u.registerTab("skydrive",l.RemoteTab),u.registerTab("huddle",l.RemoteTab),u.registerTab("empty-pubkey",function(e,t,r,i){return e.append(i._emptyKeyText)}),u.registerTab("preview",function(e,t,r,i,a){var n;return new(n=i.multiple?l.PreviewTabMultiple:l.PreviewTab)(e,t,r,i,a);
}),p=function(){function e(e,r,i,a){var n,o=this;this.settings=e,this.openMenu=h(this.openMenu,this),this.isTabVisible=h(this.isTabVisible,this),this.hideTab=h(this.hideTab,this),this.showTab=h(this.showTab,this),this.switchTab=h(this.switchTab,this),this.__closePanel=h(this.__closePanel,this),this.__updateFooter=h(this.__updateFooter,this),this.__reject=h(this.__reject,this),this.__resolve=h(this.__resolve,this),this.addFiles=h(this.addFiles,this),this.dfd=t.Deferred(),this.dfd.always(this.__closePanel),n=".uploadcare--panel",this.content=t(s("dialog__panel")),this.panel=this.content.find(n).add(this.content.filter(n)),this.placeholder=t(r),this.placeholder.replaceWith(this.content),this.panel.append(t(s("icons"))),this.settings.multiple&&this.panel.addClass("uploadcare--panel_multiple"),this.panel.find(".uploadcare--menu__toggle").on("click",function(){return o.panel.find(".uploadcare--menu").toggleClass("uploadcare--menu_opened")}),this.files=new c.CollectionOfPromises(i),this.files.onRemove.add(function(){return 0===o.files.length()?o.hideTab("preview"):void 0}),this.__autoCrop(this.files),this.tabs={},this.__prepareFooter(),this.onTabVisibility=t.Callbacks().add(function(e,t){return o.panel.find(".uploadcare--menu__item_tab_"+e).toggleClass("uploadcare--menu__item_hidden",!t)}),this.settings.publicKey?this.__prepareTabs(a):this.__welcome()}return e.prototype.publicPromise=function(){return this.promise||(this.promise=this.dfd.promise({reject:this.__reject,resolve:this.__resolve,fileColl:this.files,addFiles:this.addFiles,switchTab:this.switchTab,hideTab:this.hideTab,showTab:this.showTab,isTabVisible:this.isTabVisible,openMenu:this.openMenu,onTabVisibility:c.publicCallbacks(this.onTabVisibility)})),this.promise},e.prototype.addFiles=function(e,t){var r,i,a;for(t&&(e=u.filesFrom(e,t,this.settings)),this.settings.multiple||this.files.clear(),i=0,a=e.length;a>i;i++)r=e[i],this.settings.multipleMaxStrict&&0!==this.settings.multipleMax&&this.files.length()>=this.settings.multipleMax?r.cancel():this.files.add(r);return this.settings.previewStep?(this.showTab("preview"),this.settings.multiple?void 0:this.switchTab("preview")):this.__resolve()},e.prototype.__autoCrop=function(e){var t,r,i,a,n=this;if(this.settings.crop&&this.settings.multiple){for(a=this.settings.crop,r=0,i=a.length;i>r;r++)if(t=a[r],!t.preferedSize)return;return e.autoThen(function(e){var t,r;return!e.isImage||e.cdnUrlModifiers||e.crop?e:(t=e.originalImageInfo,r=c.fitSize(n.settings.crop[0].preferedSize,[t.width,t.height],!0),c.applyCropCoordsToInfo(e,n.settings.crop[0],[t.width,t.height],{width:r[0],height:r[1],left:Math.round((t.width-r[0])/2),top:Math.round((t.height-r[1])/2)}))})}},e.prototype.__resolve=function(){return this.dfd.resolve(this.files.get())},e.prototype.__reject=function(){return this.dfd.reject(this.files.get())},e.prototype.__prepareTabs=function(e){var t,r,i,a;for(this.addTab("preview"),a=this.settings.tabs,r=0,i=a.length;i>r;r++)t=a[r],this.addTab(t);return this.files.length()?(this.showTab("preview"),this.switchTab("preview")):(this.hideTab("preview"),this.switchTab(e||this.__firstVisibleTab())),0===this.settings.tabs.length?(this.panel.addClass("uploadcare--panel_menu-hidden"),this.panel.find(".uploadcare--panel__menu").addClass("uploadcare--panel__menu_hidden")):void 0},e.prototype.__prepareFooter=function(){var e,t=this;return this.footer=this.panel.find(".uploadcare--panel__footer"),e=":not(:disabled)",this.footer.on("click",".uploadcare--panel__show-files"+e,function(){return t.switchTab("preview")}),this.footer.on("click",".uploadcare--panel__done"+e,this.__resolve),this.__updateFooter(),this.files.onAdd.add(this.__updateFooter),this.files.onRemove.add(this.__updateFooter)},e.prototype.__updateFooter=function(){var e,t,i;return r=this.files.length(),i=0!==this.settings.multipleMax&&r>this.settings.multipleMax,t=r<this.settings.multipleMin,this.footer.find(".uploadcare--panel__done").attr("disabled",i||t),this.footer.find(".uploadcare--panel__show-files").attr("disabled",0===r),e=i?o("dialog.tabs.preview.multiple.tooManyFiles").replace("%max%",this.settings.multipleMax):r&&t?o("dialog.tabs.preview.multiple.tooFewFiles").replace("%min%",this.settings.multipleMin):o("dialog.tabs.preview.multiple.title"),this.footer.find(".uploadcare--panel__message").toggleClass("uploadcare--panel__message_hidden",0===r).toggleClass("uploadcare--error",i||t).text(e.replace("%files%",o("file",r))),this.footer.find(".uploadcare--panel__file-counter").toggleClass("uploadcare--error",i||t).text(r?"("+r+")":"")},e.prototype.__closePanel=function(){return this.panel.replaceWith(this.placeholder),this.content.remove()},e.prototype.addTab=function(e){var r,i,a,n,l=this;if(!(e in this.tabs)){if(r=g[e],!r)throw new Error("No such tab: "+e);return n=t("<div>").addClass("uploadcare--tab").addClass("uploadcare--tab_name_"+e).insertBefore(this.footer),a="preview"===e?t('<div class="uploadcare--menu__icon uploadcare--panel__icon">'):t("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-"+e+"'/></svg>").attr("role","presentation").attr("class","uploadcare--icon uploadcare--menu__icon"),i=t("<div>",{role:"button",tabindex:"0"}).addClass("uploadcare--menu__item").addClass("uploadcare--menu__item_tab_"+e).attr("title",o("dialog.tabs.names."+e)).append(a).appendTo(this.panel.find(".uploadcare--menu__items")).on("click",function(){return e===l.currentTab?l.panel.find(".uploadcare--panel__menu").removeClass("uploadcare--menu_opened"):l.switchTab(e)}),this.tabs[e]=new r(n,i,this.publicPromise(),this.settings,e)}},e.prototype.switchTab=function(e){var t;if(e)return this.currentTab=e,this.panel.find(".uploadcare--panel__menu").removeClass("uploadcare--menu_opened").attr("data-current",e),this.panel.find(".uploadcare--menu__item").removeClass("uploadcare--menu__item_current").filter(".uploadcare--menu__item_tab_"+e).addClass("uploadcare--menu__item_current"),t="uploadcare--tab",this.panel.find("."+t).removeClass(""+t+"_current").filter("."+t+"_name_"+e).addClass(""+t+"_current"),this.dfd.notify(e)},e.prototype.showTab=function(e){return this.onTabVisibility.fire(e,!0)},e.prototype.hideTab=function(e){return this.onTabVisibility.fire(e,!1),this.currentTab===e?this.switchTab(this.__firstVisibleTab()):void 0},e.prototype.isTabVisible=function(e){return!this.panel.find(".uploadcare--menu__item_tab_"+e).is(".uploadcare--menu__item_hidden")},e.prototype.openMenu=function(){return this.panel.find(".uploadcare--panel__menu").addClass("uploadcare--menu_opened")},e.prototype.__firstVisibleTab=function(){var e,t,r,i;for(i=this.settings.tabs,t=0,r=i.length;r>t;t++)if(e=i[t],this.isTabVisible(e))return e},e.prototype.__welcome=function(){var e,t,r,i;for(this.addTab("empty-pubkey"),this.switchTab("empty-pubkey"),i=this.settings.tabs,t=0,r=i.length;r>t;t++)e=i[t],this.__addFakeTab(e);return null},e.prototype.__addFakeTab=function(e){var r;return r=t("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-"+e+"'/></svg>").attr("role","presentation").attr("class","uploadcare--icon uploadcare--menu__icon"),"empty-pubkey"===e&&r.addClass("uploadcare--panel__icon"),t("<div>").addClass("uploadcare--menu__item").addClass("uploadcare--menu__item_tab_"+e).attr("aria-disabled",!0).attr("title",o("dialog.tabs.names."+e)).append(r).appendTo(this.panel.find(".uploadcare--menu__items"))},e}()})}.call(this),function(){var e,t,r,i,n,o=function(e,t){return function(){return e.apply(t,arguments)}};i=a.utils,e=a.jQuery,t=a.dragdrop,n=a.locale,r=n.t,a.namespace("widget",function(n){return n.BaseWidget=function(){function l(t,r){var a=this;this.element=t,this.settings=r,this.reloadInfo=o(this.reloadInfo,this),this.__setObject=o(this.__setObject,this),this.__reset=o(this.__reset,this),this.validators=this.settings.validators=[],this.currentObject=null,this.__onDialogOpen=e.Callbacks(),this.__onUploadComplete=e.Callbacks(),this.__onChange=e.Callbacks().add(function(e){return null!=e?e.promise().done(function(e){return a.__onUploadComplete.fire(e)}):void 0}),this.__setupWidget(),this.element.on("change.uploadcare",this.reloadInfo),this.__hasValue=!1,i.defer(function(){return a.__hasValue?void 0:a.reloadInfo();
})}return l.prototype.__setupWidget=function(){var e,i=this;return this.template=new n.Template(this.settings,this.element),e=["buttons.choose"],e.push(this.settings.imagesOnly?"images":"files"),e.push(this.settings.multiple?"other":"one"),this.template.addButton("open",r(e.join("."))).toggleClass("needsclick",this.settings.systemDialog).on("click",function(){return i.openDialog()}),this.template.addButton("cancel",r("buttons.cancel")).on("click",function(){return i.__setObject(null)}),this.template.addButton("remove",r("buttons.remove")).on("click",function(){return i.__setObject(null)}),this.template.content.on("click",".uploadcare--widget__file-name",function(){return i.openDialog()}),t.receiveDrop(this.template.content,this.__handleDirectSelection),this.template.reset()},l.prototype.__infoToValue=function(e){return e.cdnUrlModifiers||this.settings.pathValue?e.cdnUrl:e.uuid},l.prototype.__reset=function(){var e;return e=this.currentObject,this.currentObject=null,null!=e&&"function"==typeof e.cancel&&e.cancel(),this.template.reset()},l.prototype.__setObject=function(e){return e!==this.currentObject?(this.__reset(),e?(this.currentObject=e,this.__watchCurrentObject()):this.element.val(""),this.__onChange.fire(this.currentObject)):void 0},l.prototype.__watchCurrentObject=function(){var e,t=this;return e=this.__currentFile(),e?(this.template.listen(e),e.done(function(r){return e===t.__currentFile()?t.__onUploadingDone(r):void 0}).fail(function(r){return e===t.__currentFile()?t.__onUploadingFailed(r):void 0})):void 0},l.prototype.__onUploadingDone=function(e){return this.element.val(this.__infoToValue(e)),this.template.setFileInfo(e),this.template.loaded()},l.prototype.__onUploadingFailed=function(e){return this.template.reset(),this.template.error(e)},l.prototype.__setExternalValue=function(e){return this.__setObject(i.valueToFile(e,this.settings))},l.prototype.value=function(e){return void 0!==e?(this.__hasValue=!0,this.__setExternalValue(e),this):this.currentObject},l.prototype.reloadInfo=function(){return this.value(this.element.val())},l.prototype.openDialog=function(e){var t=this;return this.settings.systemDialog?i.fileSelectDialog(this.template.content,this.settings,function(e){return t.__handleDirectSelection("object",e.files)}):this.__openDialog(e)},l.prototype.__openDialog=function(e){var t;return t=a.openDialog(this.currentObject,e,this.settings),this.__onDialogOpen.fire(t),t.done(this.__setObject)},l.prototype.api=function(){return this.__api||(this.__api=i.bindAll(this,["openDialog","reloadInfo","value","validators"]),this.__api.onChange=i.publicCallbacks(this.__onChange),this.__api.onUploadComplete=i.publicCallbacks(this.__onUploadComplete),this.__api.onDialogOpen=i.publicCallbacks(this.__onDialogOpen),this.__api.inputElement=this.element.get(0)),this.__api},l}()})}.call(this),function(){var e,t,r,i=function(e,t){return function(){return e.apply(t,arguments)}},n={}.hasOwnProperty,o=function(e,t){for(var r in t)n.call(t,r)&&(e[r]=t[r]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};r=a.utils,t=a.files,e=a.jQuery,a.namespace("widget",function(e){var t;return e.Widget=function(e){o(r,e);function r(){return this.__handleDirectSelection=i(this.__handleDirectSelection,this),t=r.__super__.constructor.apply(this,arguments)}return r.prototype.__currentFile=function(){return this.currentObject},r.prototype.__handleDirectSelection=function(e,t){var r;return r=a.fileFrom(e,t[0],this.settings),this.settings.systemDialog||!this.settings.previewStep?this.__setObject(r):this.__openDialog("preview").addFiles([r])},r}(e.BaseWidget),e.Widget._name="SingleWidget"})}.call(this),function(){var e,t,r,i,n=function(e,t){return function(){return e.apply(t,arguments)}},o={}.hasOwnProperty,l=function(e,t){for(var r in t)o.call(t,r)&&(e[r]=t[r]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};r=a.utils,e=a.jQuery,i=a.locale,t=i.t,a.namespace("widget",function(e){var i;return e.MultipleWidget=function(e){l(o,e);function o(){return this.__handleDirectSelection=n(this.__handleDirectSelection,this),this.__setObject=n(this.__setObject,this),i=o.__super__.constructor.apply(this,arguments)}return o.prototype.__currentFile=function(){var e;return null!=(e=this.currentObject)?e.promise():void 0},o.prototype.__setObject=function(e){return r.isFileGroupsEqual(this.currentObject,e)?e?void 0:(this.__reset(),this.element.val("")):o.__super__.__setObject.apply(this,arguments)},o.prototype.__setExternalValue=function(e){var i,a=this;return this.__lastGroupPr=i=r.valueToGroup(e,this.settings),e&&(this.template.setStatus("started"),this.template.statusText.text(t("loadingInfo"))),i.done(function(e){return a.__lastGroupPr===i?a.__setObject(e):void 0}).fail(function(){return a.__lastGroupPr===i?a.__onUploadingFailed("createGroup"):void 0})},o.prototype.__handleDirectSelection=function(e,t){var r;return r=a.filesFrom(e,t,this.settings),this.settings.systemDialog?this.__setObject(a.FileGroup(r,this.settings)):this.__openDialog("preview").addFiles(r)},o}(e.BaseWidget),e.MultipleWidget._name="MultipleWidget"})}.call(this),function(){var t,r,i;i=a.utils,r=a.settings,t=a.jQuery,a.namespace("",function(a){var n,o,l,s,c;return o="uploadcareWidget",c='[role~="uploadcare-uploader"]',a.initialize=function(e){var r,i,a,n,o,s;for(null==e&&(e=":root"),i=[],s=t(e),n=0,o=s.length;o>n;n++)r=s[n],a=l(r.querySelectorAll(c)),i=i.concat(a);return i},l=function(e){var r,i,a,n,l;for(l=[],a=0,n=e.length;n>a;a++)r=e[a],i=t(r).data(o),i&&i.inputElement===r||l.push(s(r));return l},a.SingleWidget=function(e){return s(e,a.widget.Widget)},a.MultipleWidget=function(e){return s(e,a.widget.MultipleWidget)},a.Widget=function(e){return s(e)},s=function(e,l){var s,c,u,p,d;if(u=t(e),0===u.length)throw new Error("No DOM elements found matching selector");if(u.length>1&&i.warn("There are multiple DOM elements matching selector"),e=u.eq(0),p=r.build(e.data()),s=p.multiple?a.widget.MultipleWidget:a.widget.Widget,l&&s!==l)throw new Error("This element should be processed using "+s._name);return c=e.data(o),c&&c.inputElement===e[0]||(n(e),d=new s(e,p),c=d.api(),e.data(o,c),d.template.content.data(o,c)),c},n=function(e){return e.off(".uploadcare").each(function(){var e,r;return r=t(this).next(".uploadcare--widget"),e=r.data(o),e&&e.inputElement===this?r.remove():void 0})},a.start=i.once(function(e,t){return e=r.common(e,t),t?void 0:(e.live&&setInterval(a.initialize,100),a.initialize())}),t(function(){return e.UPLOADCARE_MANUAL_START?void 0:a.start()})})}.call(this),function(){var e,t,r,i,o,l;e=a.jQuery,t=function(e){var t;return t="[data-status=started], [data-status=error]",!e.find(".uploadcare--widget").is(t)},i=function(e,t){return e.attr("data-uploadcare-submitted",t),e.find(":submit").attr("disabled",t)},l='[role~="uploadcare-upload-form"]',o=l+"[data-uploadcare-submitted]",e(n).on("submit",l,function(){var r;return r=e(this),t(r)?!0:(i(r,!0),!1)}),e(n).on("loaded.uploadcare",o,function(){return e(this).submit()}),r="ready.uploadcare error.uploadcare",e(n).on(r,o,function(){var r;return r=e(this),t(r)?i(r,!1):void 0})}.call(this),function(){var e,t,r,i;i=a.utils,e=a.jQuery,t=[".uploadcare--menu__item",".uploadcare--file__description",".uploadcare--crop-sizes__item"].join(", "),r="uploadcare--mouse-focused",e(n.documentElement).on("mousedown",t,function(t){return i.defer(function(){var t;return t=n.activeElement,t&&t!==n.body?e(t).addClass(r).one("blur",function(){return e(t).removeClass(r)}):void 0})}).on("keypress",t,function(t){return 13===t.which||32===t.which?(e(this).click(),t.preventDefault(),t.stopPropagation()):void 0})}.call(this),function(){var e;e=a.expose,e("globals",a.settings.common),e("start"),e("initialize"),e("fileFrom"),e("filesFrom"),e("FileGroup"),e("loadFileGroup"),e("openDialog"),e("closeDialog"),e("openPanel"),e("registerTab"),e("Circle",a.ui.progress.Circle),e("SingleWidget"),e("MultipleWidget"),e("Widget"),e("tabsCss"),e("dragdrop.support"),e("dragdrop.receiveDrop"),e("dragdrop.uploadDrop")}.call(this),function(){a.namespace("locale.translations",function(e){return e.ar={
uploading:"جاري الرفع... الرجاء الانتظار",loadingInfo:"جار تحميل المعلومات ...",errors:{"default":"خطأ",baddata:"قيمة غير صحيحة",size:"ملف كبير جداً",upload:"يتعذر الرفع",user:"تم إلغاء الرفع",info:"يتعذر تحميل المعلومات",image:"يسمح بالصور فقط",createGroup:"لا يمكن إنشاء مجموعة ملفات",deleted:"تم حذف الملف"},draghere:"أسقط ملف هنا",file:{one:"%1 ملف",other:"%1 ملفات"},buttons:{cancel:"إلغاء",remove:"إزالة",choose:{files:{one:"اختر ملف",other:"اختر ملفات"},images:{one:"اختر صورة",other:"اختر صور"}}},dialog:{close:"أغلق",openMenu:"افتح القائمة",done:"موافق",showFiles:"اظهار الملفات",tabs:{names:{"empty-pubkey":"مرحبا!",preview:"معاينة",file:"ملفات محلية",url:"رابط مباشر",camera:"كاميرا",facebook:"فيس بوك",dropbox:"دروب بوكس",gdrive:"جوجل دريف",gphotos:"صور غوغل",instagram:"إينستجرام",vk:"في كي",evernote:"إيفرنوت",box:"بوكس",skydrive:"ون درايف",flickr:"فليكر",huddle:"هادل"},file:{drag:"سحب وإفلات<br>أي ملف",nodrop:"رفع ملفات من&nbsp;الحاسوب",cloudsTip:"مخازن على السحابة<br>والشبكات الاجتماعية",or:"أو",button:"اختر ملف محلي",also:"أو اختر من"},url:{title:"ملفات من شبكة الإنترنت",line1:"التقاط أي ملف من على شبكة الإنترنت",line2:"فقط قم بتوفير الرابط",input:"الصق الرابط هنا...",button:"رفع"},camera:{title:"ملف من كاميرا الويب",capture:"التقاط صورة",mirror:"عكس الصورة",startRecord:"سجل فيديو",stopRecord:"توقف",cancelRecord:"إلغاء",retry:"طلب الإذن مرة أخرى",pleaseAllow:{title:"يرجى السماح بالوصول إلى الكاميرا",text:"تمت مطالبتك بالسماح بالدخول إلى الكاميرا من هذا الموقع<br>من أجل التقاط الصور من الكاميرا يجب عليك الموافقة على هذا الطلب"},notFound:{title:"لم يتم اكتشاف أي كاميرا",text:"يبدو أنه ليس لديك كاميرا متصلة بهذا الجهاز"}},preview:{unknownName:"غير معروف",change:"إلغاء",back:"الرجوع",done:"إضافة",unknown:{title:"جار الرفع ... يرجى الانتظار للحصول على معاينة",done:"تخطي المعاينة والقبول"},regular:{title:"إضافة هذا الملف؟",line1:"أنت على وشك إضافة الملف أعلاه",line2:"يرجى التأكيد"},image:{title:"إضافة هذة الصورة",change:"إلغاء"},crop:{title:"قص وإضافة هذه الصورة",done:"موافق",free:"حر"},video:{title:"إضافة هذا الفيديو",change:"إلغاء"},error:{"default":{title:"عفوا آسف",text:"حدث خطأ أثناء الرفع",back:"حاول مرة اخرى"},image:{title:"يتم قبول ملفات الصور فقط",text:"الرجاء إعادة المحاولة باستخدام ملف آخر",back:"اختر صورة"},size:{title:"الملف الذي حددتة يتجاوز الحد المسموح بة",text:"الرجاء إعادة المحاولة باستخدام ملف آخر"},loadImage:{title:"خطأ",text:"لا يمكن تحميل الصورة"}},multiple:{title:"لقد اخترت %files%",question:"إضافة %files%?",tooManyFiles:"لقد اخترت عددا كبيرا جدا من الملفات %max% هو الحد الأقصى",tooFewFiles:"لقد اخترت %files%. على الأقل %min% مطلوب",clear:"حذف الكل",done:"إضافة",file:{preview:"معاينة %file%",remove:"حذف %file%"}}}},footer:{text:"مدعوم بواسطة",link:"ابلود كير"}}}}),a.namespace("locale.pluralize",function(e){return e.ar=function(e){var t;return 0===e?"zero":1===e?"one":2===e?"two":(t=e%100,t>=3&&10>=t?"few":t>=11&&99>=t?"many":"other")}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.az={uploading:"Yüklənilir... Lütfən, gözləyin.",loadingInfo:"İnfo yüklənilir...",errors:{"default":"Xəta",baddata:"Yanlış dəyər",size:"Fayl çox böyükdür",upload:"Yüklənilə bilmədi",user:"Yükləmə ləğv edildi",info:"İnfo yüklənə bilmədi",image:"Yalnız təsvirlərə icazə verilir",createGroup:"Fayl qrupu yaradıla bilmir",deleted:"Fayl silindi"},draghere:"Faylı bura atın",file:{one:"%1 fayl",other:"%1 fayl"},buttons:{cancel:"Ləğv edin",remove:"Silin",choose:{files:{one:"Fayl seçin",other:"Fayllar seçin"},images:{one:"Təsvir seçin",other:"Təsvirlər seçin"}}},dialog:{done:"Hazırdır",showFiles:"Faylları göstərin",tabs:{names:{"empty-pubkey":"Xoş gəlmisiniz",preview:"Önbaxış",file:"Lokal Fayllar",url:"İxtiyari linklər",camera:"Kamera",gdrive:"Google Disk"},file:{drag:"Faylı bura atın",nodrop:"Kompüterinizdən faylları yükləyin",cloudsTip:"Bulud yaddaşlar <br>və sosial xidmətlər",or:"or",button:"Lokal fayl seçin",also:"Həmçinin, buradan seçə bilərsiniz"},url:{title:"Vebdən fayllar",line1:"Vebdən istənilən faylı götürün.",line2:"Sadəcə, link verin.",input:"Linkinizi bura yerləşdirin...",button:"Yükləyin"},camera:{capture:"Şəkil çəkin",mirror:"Güzgü",retry:"Yenidən icazə sorğusu göndərin.",pleaseAllow:{title:"Lütfən, kameranıza giriş hüququ verin",text:"Bu saytdan kameranıza daxil olmaq icazəsi verildi. Kameranız ilə şəkil çəkmək üçün bu sorğunu təsdiq etməlisiniz."},notFound:{title:"Kamera aşkar edilmədi",text:"Görünür, bu cihaza kamera qoşulmayıb."}},preview:{unknownName:"naməlum",change:"Ləğv edin",back:"Geri",done:"Əlavə edin",unknown:{title:"Yüklənilir... Lütfən, önbaxış üçün gözləyin.",done:"Önbaxışı ötürün və qəbul edin"},regular:{title:"Bu fayl əlavə edilsin?",line1:"Yuxarıdakı faylı əlavə etmək üzrəsiniz.",line2:"Lütfən, təsdiq edin."},image:{title:"Bu təsvir əlavə edilsin?",change:"Ləğv edin"},crop:{title:"Bu təsviri kəsin və əlavə edin",done:"Hazırdır",free:"pulsuz"},error:{"default":{title:"Ups!",text:"Yükləmə zamanı nəsə xəta baş verdi.",back:"Lütfən, y enidən cəhd edin."},image:{title:"Yaınız təsvir faylları qəbul olunur.",text:"Lütfən, başqa fayl ilə cəhd edin.",back:"Təsvir seçin"},size:{title:"Seçdiyiniz fayl limiti keçir.",text:"Lütfən, başqa fayl ilə cəhd edin."},loadImage:{title:"Xəta",text:"Təsvir yüklənilə bilmir"}},multiple:{title:"%files% fayl seçdiniz.",question:"Bütün bu faylları əlavə etmək istəyirsiniz?",tooManyFiles:"Həddindən çox fayl seçdiniz. %max% maksimumdur.",tooFewFiles:"%files% fayl seçdiniz. Ən azı %min% tələb olunur.",clear:"Hamısını silin",done:"Hazırdır"}}}}}}),a.namespace("locale.pluralize",function(e){return e.az=function(e){return"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.ca={uploading:"Carregant... Si us plau esperi.",loadingInfo:"Carregant informació...",errors:{"default":"Error",baddata:"Valor incorrecte",size:"Massa gran",upload:"No s'ha pogut carregar",user:"Carrega cancel·lada",info:"No s'ha pogut carregar la informació",image:"Només es permeten imatges",createGroup:"No es pot crear el grup d'arxius",deleted:"Fitxer eliminat"},draghere:"Arrossega els fitxers fins aquí",file:{one:"%1 fitxer",other:"%1 fitxers"},buttons:{cancel:"Cancel·lar",remove:"Eliminar",choose:{files:{one:"Escull un fitxer",other:"Escull fitxers"},images:{one:"Escull una imatge",other:"Escull imatges"}}},dialog:{done:"Fet",showFiles:"Mostra fitxers",tabs:{names:{"empty-pubkey":"Benvingut",preview:"Avanci",file:"Ordinador",url:"Enllaços arbitraris",camera:"Càmera"},file:{drag:"Arrossega un fitxer aquí",nodrop:"Carrega fitxers des del teu ordinador",cloudsTip:"Emmagatzematge al núvol<br>i xarxes socials",or:"o",button:"Escull un fitxer des del teu ordinador",also:"També pots seleccionar-lo de"},url:{title:"Fitxers de la web",line1:"Selecciona qualsevol fitxer de la web.",line2:"Només proporcioni el link.",input:"Copiï el link aquí...",button:"Pujar"},camera:{capture:"Realitza una foto",mirror:"Mirall",retry:"Demanar permisos una altra vegada",pleaseAllow:{title:"Si us plau, permet accés a la teva càmera",text:"Aquest lloc t'ha demanat de permetre accés a la càmera. Per tal de realitzar imatges amb la teva càmera has d'acceptar aquesta petició."},notFound:{title:"No s'ha detectat cap càmera",text:"Sembla que no tens cap càmera connectada a aquest dispositiu."}},preview:{unknownName:"desconegut",change:"Cancel·lar",back:"Endarrere",done:"Pujar",unknown:{title:"Carregant. Si us plau esperi per la visualització prèvia.",done:"Saltar visualització prèvia i acceptar"},regular:{title:"Vols pujar aquest fitxer?",line1:"Estàs a punt de pujar el fitxer superior.",line2:"Confirmi, si us plau."},image:{title:"Vols pujar aquesta imatge?",change:"Cancel·lar"},crop:{title:"Tallar i pujar aquesta imatge",done:"Fet",free:"lliure"},error:{"default":{title:"La pujada ha fallat!",text:"S'ha produït un error durant la pujada.",back:"Si us plau, provi-ho de nou."},image:{title:"Només s'accepten fitxers d'imatges.",text:"Si us plau, provi-ho de nou amb un altre fitxer.",back:"Escull imatge"},size:{title:"La mida del fitxer que has seleccionat sobrepassa el límit.",text:"Si us plau, provi-ho de nou amb un altre fitxer."},loadImage:{title:"Error",text:"No s'ha pogut carregar la imatge"
}},multiple:{title:"N'has escollit %files%",question:"Vols afegir tots aquests fitxers?",tooManyFiles:"Has escollit massa fitxers. %max% és el màxim.",tooFewFiles:"Has escollit %files%. Com a mínim en calen %min%.",clear:"Eliminar-los tots",done:"Fet"}}}}}}),a.namespace("locale.pluralize",function(e){return e.ca=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.cs={uploading:"Nahrávám... Malý moment.",loadingInfo:"Nahrávám informace...",errors:{"default":"Chyba",baddata:"Neplatná hodnota",size:"Soubor je příliš velký",upload:"Nelze nahrát",user:"Nahrávání zrušeno",info:"Nelze nahrát informace",image:"Lze nahrát pouze obrázky",createGroup:"Nelze vytvořit adresář",deleted:"Soubor byl smazán"},draghere:"Přetáhněte soubor sem",file:{one:"%1 soubor",few:"%1 soubory",many:"%1 souborů"},buttons:{cancel:"Zrušit",remove:"Odstranit",choose:{files:{one:"Vyberte soubor",other:"Vyberte soubory"},images:{one:"Vyberte obrázek",other:"Vyberte obrázky"}}},dialog:{done:"Hotovo",showFiles:"Zobrazit soubory",tabs:{names:{"empty-pubkey":"Vítejte",preview:"Náhled",file:"Soubor z počítače",url:"Soubor z internetu",camera:"Webkamera",facebook:"Facebook",dropbox:"Dropbox",gdrive:"Google Drive",instagram:"Instagram",vk:"VK",evernote:"Evernote",box:"Box",skydrive:"OneDrive",flickr:"Flickr",huddle:"Huddle"},file:{drag:"Přetáhněte soubor sem",nodrop:"Nahrajte soubory z vašeho počítače",cloudsTip:"Cloudové úložiště<br>a sociální sítě",or:"nebo",button:"Vyberte soubor z počítače",also:"Můžete také nahrát soubor z"},url:{title:"Soubory z internetu",line1:"Nahrajte jakýkoliv soubor z internetu.",line2:"Stačí vložit odkaz.",input:"Odkaz vložte zde...",button:"Nahrát"},camera:{capture:"Pořídit fotografii",mirror:"Zrcadlo",retry:"Znovu požádat o povolení",pleaseAllow:{title:"Prosím povolte přístup k webkameře",text:"Byl(a) jste požádán(a) o přístup k webkameře. Abyste mohl(a) pořídit fotografii, musíte přístup povolit."},notFound:{title:"Nebyla nalezena webkamera",text:"Zdá se, že k tomuto zařízení není připojena žádná webkamera."}},preview:{unknownName:"neznámý",change:"Zrušit",back:"Zpět",done:"Přidat",unknown:{title:"Nahrávám... Prosím vyčkejte na náhled.",done:"Přeskočit náhled a odeslat"},regular:{title:"Přidat tento soubor?",line1:"Tímto přidáte výše vybraný soubor.",line2:"Prosím potvrďte."},image:{title:"Přidat tento obrázek?",change:"Zrušit"},crop:{title:"Oříznout a přidat tento obrázek",done:"Hotovo",free:"zdarma"},error:{"default":{title:"Jejda!",text:"Něco se v průběhu nahrávání nepodařilo.",back:"Zkuste to prosím znovu."},image:{title:"Lze nahrávat pouze obrázky.",text:"Zkuste to prosím s jiným souborem.",back:"Vyberte obrázek"},size:{title:"Soubor přesahuje povolenou velikost.",text:"Prosím zkuste to s jiným souborem."},loadImage:{title:"Chyba",text:"Nelze nahrát obrázek"}},multiple:{title:"Bylo vybráno %files% souborů",question:"Chcete přidat všechny tyto soubory?",tooManyFiles:"Bylo vybráno moc souborů. Maximum je %max%",tooFewFiles:"Bylo vybráno %files% souborů. Musíte vybrat minimálně %min%",clear:"Odstranit vše",done:"Hotovo"}}}}}}),a.namespace("locale.pluralize",function(e){return e.cs=function(e){return 1===e?"one":e>=2&&4>=e?"few":"many"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.da={uploading:"Uploader... Vent venligst.",loadingInfo:"Henter information...",errors:{"default":"Fejl",baddata:"Forkert værdi",size:"Filen er for stor",upload:"Kan ikke uploade / sende fil",user:"Upload fortrudt",info:"Kan ikke hente information",image:"Kun billeder er tilladt",createGroup:"Kan ikke oprette fil gruppe",deleted:"Filen blev slettet"},draghere:"Drop en fil her",file:{one:"%1 fil",other:"%1 filer"},buttons:{cancel:"Annuller",remove:"Fjern",choose:{files:{one:"Vælg en fil",other:"Vælg filer"},images:{one:"Vælg et billede",other:"Vælg billeder"}}},dialog:{done:"Færdig",showFiles:"Vis filer",tabs:{names:{preview:"Vis",file:"Computer",gdrive:"Google Drev",url:"Direkte link"},file:{drag:"Drop en fil her",nodrop:"Hent filer fra din computer",or:"eller",button:"Hent fil fra din computer",also:"Du kan også hente fra"},url:{title:"Filer fra en Web adresse",line1:"Vælg en fil fra en web adresse.",line2:"Skriv bare linket til filen.",input:"Indsæt link her...",button:"Upload / Send"},preview:{unknownName:"ukendt",change:"Annuller",back:"Tilbage",done:"Fortsæt",unknown:{title:"Uploader / sender... Vent for at se mere.",done:"Fortsæt uden at vente på resultat"},regular:{title:"Tilføje fil?",line1:"Du er ved at tilføje filen ovenfor.",line2:"Venligst accepter."},image:{title:"Tilføj billede?",change:"Annuller"},crop:{title:"Beskær og tilføj dette billede",done:"Udfør"},error:{"default":{title:"Hov!",text:"Noget gik galt under upload.",back:"Venligst prøv igen"},image:{title:"Du kan kun vælge billeder.",text:"Prøv igen med en billedfil.",back:"Vælg billede"},size:{title:"Den fil du valgte, er desværre større end tilladt.",text:"Venligst prøv med en mindre fil."},loadImage:{title:"Fejl",text:"Kan ikke åbne billede"}},multiple:{title:"Du har valgt %files% filer",question:"Vil du tilføje alle disse filer?",tooManyFiles:"Du har valgt for mange filer. %max% er maximum.",tooFewFiles:"Du har valgt %files% filer. Men du skal vælge mindst %min%.",clear:"Fjern alle",done:"Fortsæt"}}}}}}),a.namespace("locale.pluralize",function(e){return e.da=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.de={uploading:"Hochladen... Bitte warten.",loadingInfo:"Laden der Informationen...",errors:{"default":"Error",baddata:"Falscher Wert",size:"Datei zu groß",upload:"Kann nicht hochgeladen werden",user:"Hochladen abgebrochen",info:"Informationen können nicht geladen werden",image:"Nur Bilder sind erlaubt",createGroup:"Datei-Gruppe kann nicht erstellt werden",deleted:"Datei wurde gelöscht"},draghere:"Ziehen Sie eine Datei hier hinein",file:{one:"%1 Datei",other:"%1 Dateien"},buttons:{cancel:"Abbrechen",remove:"Löschen",choose:{files:{one:"Wählen Sie eine Datei",other:"Wählen Sie die Dateien"},images:{one:"Wählen Sie ein Bild",other:"Wählen Sie Bilder"}}},dialog:{done:"Fertig",showFiles:"Dateien anzeigen",tabs:{names:{"empty-pubkey":"Willkommen",preview:"Vorschau",file:"Lokale Dateien",url:"Web-Links",camera:"Kamera"},file:{drag:"Ziehen Sie eine Datei hier hinein",nodrop:"Laden Sie Dateien von Ihrem PC hoch",cloudsTip:"Cloud Speicher<br>und soziale Dienste",or:"oder",button:"Wählen Sie eine lokale Datei",also:"Sie können sie auch wählen von"},url:{title:"Dateien vom Web",line1:"Holen Sie sich irgendeine Datei vom Web.",line2:"Geben Sie einfach den Link an.",input:"Bitte geben Sie den Link hier an...",button:"Hochladen"},camera:{capture:"Machen Sie ein Foto",mirror:"Spiegel",retry:"Berechtigungen erneut anfordern",pleaseAllow:{title:"Bitte erlauben Sie den Zugriff auf Ihre Kamera",text:"Sie wurden gebeten, dieser Website den Zugriff auf Ihre Kamera zu erlauben. Um mit Ihrer Kamera Fotos machen zu können, müssen Sie diese Erlaubnis erteilen."},notFound:{title:"Keine Kamera festgestellt",text:"Es sieht so aus, als hätten Sie keine Kamera an dieses Gerät angeschlossen."}},preview:{unknownName:"nicht bekannt",change:"Abbrechen",back:"Zurück",done:"Hinzufügen",unknown:{title:"Hochladen... Bitte warten Sie auf die Vorschau.",done:"Vorschau überspringen und Datei annehmen"},regular:{title:"Diese Datei hinzufügen?",line1:"Diese Datei wird nun hinzugefügt.",line2:"Bitte bestätigen Sie."},image:{title:"Dieses Bild hinzufügen?",change:"Abbrechen"},crop:{title:"Dieses Bild beschneiden und hinzufügen",done:"Fertig",free:"frei"},error:{"default":{title:"Oops!",text:"Etwas ist während dem Hochladen schief gelaufen.",back:"Bitte versuchen Sie es erneut"},image:{title:"Nur Bilder sind akzeptiert.",text:"Bitte veruschen Sie es erneut mit einer anderen Datei.",back:"Bild wählen"},size:{title:"Die gewählte Datei überschreitet das Limit.",text:"Bitte veruschen Sie es erneut mit einer anderen Datei."},loadImage:{title:"Fehler",text:"Das Bild kann nicht geladen werden"}},multiple:{title:"Sie haben %files% Dateien gewählt",question:"Möchten Sie all diese Datein hinzufügen?",
tooManyFiles:"Sie haben zu viele Dateien gewählt. %max% ist das Maximum.",tooFewFiles:"Sie haben %files% Dateien. Es sind mindestens %min% nötig.",clear:"Alle löschen",done:"Fertig"}}}}}}),a.namespace("locale.pluralize",function(e){return e.de=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.es={uploading:"Subiendo... Por favor espere.",loadingInfo:"Cargando información...",errors:{"default":"Error",baddata:"Valor incorrecto",size:"Archivo demasiado grande",upload:"No se puede subir",user:"Subida cancelada",info:"No se puede cargar la información",image:"Solo se permiten imágenes",createGroup:"No se puede crear el grupo de archivos",deleted:"El archivo fue eliminado"},draghere:"Arrastra un archivo aquí",file:{one:"%1 archivo",other:"%1 archivos"},buttons:{cancel:"Cancelar",remove:"Eliminar",choose:{files:{one:"Escoge un archivo",other:"Escoge archivos"},images:{one:"Escoge una imagen",other:"Escoge imágenes"}}},dialog:{done:"Hecho",showFiles:"Mostrar archivos",tabs:{names:{"empty-pubkey":"Bienvenido",preview:"Previsualización",file:"Archivos locales",url:"Enlaces arbitrarios",camera:"Cámara"},file:{drag:"Arrastra un archivo aquí",nodrop:"Sube fotos desde tu ordenador",cloudsTip:"Almacenamiento en la nube<br>y redes sociales",or:"o",button:"Elige un archivo de tu ordenador",also:"Tambien puedes seleccionarlo de"},url:{title:"Archivos de la Web",line1:"Coge cualquier archivo de la web.",line2:"Solo danos el link.",input:"Pega tu link aquí...",button:"Subir"},camera:{capture:"Hacer una foto",mirror:"Espejo",retry:"Solicitar permisos de nuevo",pleaseAllow:{title:"Por favor, permite el acceso a tu cámara",text:"Este sitio ha pedido permiso para acceder a la cámara. Para tomar imágenes con tu cámara debes aceptar esta petición."},notFound:{title:"No se ha detectado ninguna cámara",text:"Parece que no tienes ninguna cámara conectada a este dispositivo."}},preview:{unknownName:"desconocido",change:"Cancelar",back:"Atrás",done:"Añadir",unknown:{title:"Subiendo. Por favor espera para una vista previa.",done:"Saltar vista previa y aceptar"},regular:{title:"¿Quieres subir este archivo?",line1:"Estás a punto de subir el archivo de arriba.",line2:"Confírmalo por favor."},image:{title:"¿Quieres subir esta imagen?",change:"Cancelar"},crop:{title:"Cortar y añadir esta imagen",done:"Listo",free:"libre"},error:{"default":{title:"Ups!",text:"Algo salió mal durante la subida.",back:"Por favor, inténtalo de nuevo."},image:{title:"Solo se aceptan archivos de imagen.",text:"Por favor, inténtalo de nuevo con otro archivo.",back:"Escoger imagen"},size:{title:"El archivo que has seleccinado excede el límite.",text:"Por favor, inténtalo de nuevo con otro archivo."},loadImage:{title:"Error",text:"No puede cargar la imagen"}},multiple:{title:"Has escogido %files%",question:"¿Quieres añadir todos estos archivos?",tooManyFiles:"Has escogido demasiados archivos. %max% es el máximo.",tooFewFiles:"Has escogido %files%. Hacen falta al menos %min%.",clear:"Eliminar todo",done:"Hecho"}}}}}}),a.namespace("locale.pluralize",function(e){return e.es=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.et={uploading:"Üleslaadimine… Palun oota.",loadingInfo:"Info laadimine...",errors:{"default":"Viga",baddata:"Incorrect value",size:"Fail on liiga suur",upload:"Ei saa üles laadida",user:"Üleslaadimine tühistatud",info:"Ei saa infot laadida",image:"Ainult pildid lubatud",createGroup:"Ei saa luua failigruppi",deleted:"Fail on kustutatud"},draghere:"Tiri fail siia",file:{one:"%1 fail",other:"%1 failid"},buttons:{cancel:"Tühista",remove:"Kustuta",choose:{files:{one:"Vali fail",other:"Vali failid"},images:{one:"Vali pilt",other:"Vali pildid"}}},dialog:{done:"Valmis",showFiles:"Näita faile",tabs:{names:{"empty-pubkey":"Tere",preview:"Eelvaade",file:"Failid Kõvakettalt",url:"Veebilink",camera:"Kaamera"},file:{drag:"Tiri failid siia",nodrop:"Lae failid arvutist",cloudsTip:"Pilv<br>ja sotsiaalmeedia",or:"või",button:"Vali fail kõvakettalt",also:"Saad samuti valida"},url:{title:"Failid veebist",line1:"Ükskõik mis fail otse veebist.",line2:"Lihtsalt sisesta URL.",input:"Kleebi link siia...",button:"Lae üles"},camera:{capture:"Take a photo",mirror:"Mirror",startRecord:"Record a video",stopRecord:"Stop",cancelRecord:"Cancel",retry:"Request permissions again",pleaseAllow:{title:"Please allow access to your camera",text:"You have been prompted to allow camera access from this site. In order to take pictures with your camera you must approve this request."},notFound:{title:"No camera detected",text:"Looks like you have no camera connected to this device."}},preview:{unknownName:"teadmata",change:"Tühista",back:"Tagasi",done:"Lisa",unknown:{title:"Üleslaadimine... Palun oota eelvaadet.",done:"Jäta eelvaade vahele ja nõustu"},regular:{title:"Lisa see fail?",line1:"Oled lisamas ülaltoodud faili.",line2:"Palun kinnita."},image:{title:"Lisa pilt?",change:"Tühista"},crop:{title:"Lõika ja lisa pilt",done:"Valmis",free:"vaba"},video:{title:"Lisa video?",change:"Tühista"},error:{"default":{title:"Oihh!",text:"Midagi läks üleslaadimisel valesti.",back:"Palun proovi uuesti"},image:{title:"Ainult pildifailid on lubatud.",text:"Palun proovi uuesti teise failiga.",back:"Vali pilt"},size:{title:"Valitud fail ületab maksimaalse suuruse.",text:"Palun proovi uuesti teise failiga."},loadImage:{title:"Viga",text:"Ei saa pilti laadida"}},multiple:{title:"Oled valinud %files%",question:"Kas sa soovid lisada kõik failid?",tooManyFiles:"Oled valinud liiga suure hulga faile. %max% on maksimaalne.",tooFewFiles:"Oled valinud %files%. Vähemalt %min% nõutud.",clear:"Eemalda kõik",done:"Valmis"}}}}}}),a.namespace("locale.pluralize",function(e){return e.et=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.fr={uploading:"Envoi en cours... Merci de patienter.",loadingInfo:"Chargement des informations...",errors:{"default":"Erreur",baddata:"Valeur incorrecte",size:"Fichier trop volumineux",upload:"Envoi impossible",user:"Envoi annulé",info:"Impossible de charger les informations",image:"Seules les images sont autorisées",createGroup:"Création d'1 groupe impossible",deleted:"Le fichier a été supprimé"},draghere:"Glissez-déposez un fichier ici",file:{one:"%1 fichier",other:"%1 fichiers"},buttons:{cancel:"Annuler",remove:"Supprimer",choose:{files:{one:"Sélectionner un fichier",other:"Sélectionner des fichiers"},images:{one:"Sélectionner une image",other:"Sélectionner des images"}}},dialog:{done:"Terminer",showFiles:"Voir les fichiers",tabs:{names:{preview:"Avant-première",file:"Fichier en local",url:"Une adresse web","empty-pubkey":"Bienvenue",camera:"Appareil photo"},file:{drag:"Glissez-déposez un fichier ici",nodrop:"Envoyez des fichiers depuis votre ordinateur",cloudsTip:"Stockage sur le cloud<br>et réseaux sociaux",or:"ou",button:"Choisir un fichier local",also:"Vous pouvez également le sélectionner depuis"},url:{title:"Fichiers depuis le Web",line1:"Prenez n'importe quel fichier depuis un site web.",line2:"Saisissez simplement son adresse.",input:"Collez le lien ici...",button:"Envoi"},camera:{capture:"Prendre une photo",mirror:"Miroir",retry:"Envoyer une nouvelle demande de permission",pleaseAllow:{title:"Autorisez l'accès à votre appareil photo",text:"Vous avez été invité à autoriser l'accès à votre appareil photo. Pour prendre des photos avec votre appareil photo vous devez approuver cette demande."},notFound:{title:"Aucun appareil photo détecté",text:"Il semblerait que vous n'ayez pas d'appareil photo connecté à cet appareil."}},preview:{unknownName:"inconnu",change:"Annuler",back:"Retour",done:"Ajouter",unknown:{title:"Envoi en cours... Merci de patienter pour prévisualiser.",done:"Passer la prévisualisation et accepter"},regular:{title:"Ajouter ce fichier ?",line1:"Vous êtes sur le point d'ajouter le fichier ci-dessus.",line2:"Merci de confirmer."},image:{title:"Ajouter cette image ?",change:"Annuler"},crop:{title:"Recadrer et ajouter cette image",done:"Terminer",free:"libre"},error:{"default":{title:"Oups!",text:"Quelque chose n'a pas fonctionné pendant l'envoi.",
back:"Merci de bien vouloir recommencer"},image:{title:"Seules les images sont acceptées.",text:"Merci de bien vouloir recommencer avec un autre fichier.",back:"Choisir une image"},size:{title:"Le fichier sélectionné est trop volumineux.",text:"Merci de bien vouloir recommencer avec un autre fichier."},loadImage:{title:"Erreur",text:"Impossible de charger l'image"}},multiple:{title:"Vous avez choisi %files%",question:"Voulez vous ajouter tous ces fichiers ?",clear:"Tout retirer",done:"Terminer",tooManyFiles:"Vous avez choisi trop de fichiers. %max% est le maximum.",tooFewFiles:"Vous avez choisi %fichiers%. %min% est le minimum."}}}}}}),a.namespace("locale.pluralize",function(e){return e.fr=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.he={uploading:"טוען... אנא המתן.",loadingInfo:"טוען מידע...",errors:{"default":"שגיאה",baddata:"ערך שגוי",size:"קובץ גדול מידי",upload:"לא ניתן להעלות",user:"העלאה בוטלה",info:"לא ניתן לטעון מידע",image:"ניתן להעלות רק תמונות",createGroup:"לא ניתן ליצור קבוצה",deleted:"הקובץ נמחק"},draghere:"שחרר כאן קובץ",file:{one:"קובץ %1",other:"%1 קבצים"},buttons:{cancel:"ביטול",remove:"הסר",choose:{files:{one:"בחר קובץ",other:"בחר קבצים"},images:{one:"בחר תמונה",other:"בחר תמונות"}}},dialog:{done:"סיום",showFiles:"הצג קבצים",tabs:{names:{facebook:"פייסבוק",dropbox:"דרופבוקס",gdrive:"כונן גוגל",instagram:"אינסטגרם",url:"לינק מהאינטרנט"},file:{drag:"שחרר כאן קובץ",nodrop:"העלה קבצים מהמחשב",or:"או",button:"בחר קובץ מהמחשב",also:"ניתן לבחור גם מ"},url:{title:"קובץ מהאינטרנט",line1:"גרור קובץ מהאינטרנט",line2:"ספק את כתובת הקובץ",input:"הדבק את כתובת הקובץ...",button:"העלה"},preview:{unknownName:"לא ידוע",change:"ביטול",back:"חזרה",done:"הוסף",unknown:{title:"מעלה... נא המתן לתצוגה מקדימה.",done:"דלג על תצוגה מקדימה"},regular:{title:"להוסיף קובץ זה?",line1:"קובץ זה יועלה",line2:"נא אשר."},image:{title:"להוסיף תמונה זו?",change:"ביטול"},crop:{title:"חתוך והוסף תמונה זו",done:"סיום"},error:{"default":{title:"אופס!",text:"משהו השתבש בזמן ההעלאה.",back:"נא נסה שוב"},image:{title:"ניתן לקבל רק קבצי תמונות.",text:"נא נסה שוב עם קובץ אחר.",back:"בחר תמונה"},size:{title:"הקובץ שבחרת חורג מהגבול.",text:"נא נסה שוב עם קובץ אחר."},loadImage:{title:"שגיאה",text:"טעינת התמונה נכשלה"}},multiple:{title:"בחרת %files%",question:"אתה מעוניין להוסיף את כל הקבצים האלו?",tooManyFiles:"בחרת יותר מידי קבצים. יש לבחור מקסימום %max% קבצים.",tooFewFiles:"בחרת %files%. יש לבחור לפחות %min%.",clear:"הסר הכל",done:"סיום"}}}}}}),a.namespace("locale.pluralize",function(e){return e.he=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.it={uploading:"Caricamento in corso... Si prega di attendere.",loadingInfo:"Caricamento informazioni in corso...",errors:{"default":"Errore",baddata:"Valore errato",size:"Il file è troppo grande",upload:"Impossibile fare l’upload",user:"Upload cancellato",info:"Impossibile caricare le informazioni",image:"Sono ammesse solo immagini",createGroup:"Impossibile creare gruppo di file",deleted:"Il file è stato eliminato"},draghere:"Trascina un file qui",file:{one:"file %1",other:"file %1"},buttons:{cancel:"Cancella",remove:"Rimuovi",choose:{files:{one:"Seleziona un file",other:"Seleziona file"},images:{one:"Seleziona un’immagine",other:"Seleziona immagini"}}},dialog:{done:"Fatto",showFiles:"Mostra file",tabs:{names:{"empty-pubkey":"Benvenuto",preview:"Anteprima",file:"File locali",url:"Link arbitrari",camera:"Fotocamera"},file:{drag:"Trascina un file qui",nodrop:"Carica file dal tuo computer",cloudsTip:"Salvataggi nel cloud<br>e servizi sociali",or:"o",button:"Seleziona un file locale",also:"Puoi anche scegliere da"},url:{title:"File dal web",line1:"Preleva un file dal web.",line2:"È sufficiente fornire il link.",input:"Incolla il tuo link qui...",button:"Carica"},camera:{capture:"Scatta una foto",mirror:"Specchio",retry:"Richiedi di nuovo le autorizzazioni",pleaseAllow:{title:"Consenti l’accesso alla tua fotocamera",text:"Ti è stato richiesto di consentire l’accesso alla fotocamera da questo sito. Per scattare le foto con la tua fotocamera devi accettare questa richiesta."},notFound:{title:"Nessuna fotocamera rilevata",text:"Non risulta che tu non abbia una fotocamera collegata a questo dispositivo."}},preview:{unknownName:"sconosciuto",change:"Cancella",back:"Indietro",done:"Aggiungi",unknown:{title:"Caricamento in corso... Attendi l’anteprima.",done:"Salta l’anteprima e accetta"},regular:{title:"Vuoi aggiungere questo file?",line1:"Stai per aggiungere il file sopra.",line2:"Conferma."},image:{title:"Vuoi aggiungere questa immagine?",change:"Cancella"},crop:{title:"Ritaglia e aggiungi questa immagine",done:"Fatto",free:"gratis"},error:{"default":{title:"Ops!",text:"Si è verificato un problema durante l’upload.",back:"Si prega di riprovare"},image:{title:"Sono accettati solo file immagine.",text:"Riprova con un altro file.",back:"Scegli immagine"},size:{title:"Il file selezionato supera il limite.",text:"Riprova con un altro file."},loadImage:{title:"Errore",text:"Impossibile caricare l’immagine"}},multiple:{title:"Hai selezionato %files%",question:"Vuoi aggiungere tutti questi file?",tooManyFiles:"Hai selezionato troppi file. %max% è il massimo.",tooFewFiles:"Hai selezionato %files%. È richiesto almeno %min%.",clear:"Rimuovi tutto",done:"Fatto"}}}}}}),a.namespace("locale.pluralize",function(e){return e.it=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.ja={uploading:"アップロードしています… 完了までお待ち下さい。",loadingInfo:"読み込み中…",errors:{"default":"エラー",baddata:"間違った値",size:"ファイルが大きすぎます",upload:"アップロードできませんでした",user:"アップロードがキャンセルされました",info:"読み込みに失敗しました",image:"アップロードできるのは画像ファイルのみです",createGroup:"グループの作成に失敗しました",deleted:"削除されたファイルです"},draghere:"ここにファイルをドロップ",file:{other:"%1ファイル"},buttons:{cancel:"キャンセル",remove:"削除",choose:{files:{one:"ファイルを選択",other:"ファイルを選択"},images:{one:"画像を選択",other:"画像を選択"}}},dialog:{done:"完了",showFiles:"ファイルを表示",tabs:{names:{preview:"プレビュー",file:"ローカルファイル",url:"URLを直接入力"},file:{drag:"ここにファイルをドロップ",nodrop:"ファイルを選択してアップロード",cloudsTip:"クラウドストレージ<br>およびソーシャルサービス",or:"もしくは",button:"ローカルのファイルを選択",also:"次からも選択可能です："},url:{title:"ウェブ上のファイル",line1:"ウェブ上からファイルを取得します。",line2:"URLを入力してください。",input:"ここにURLを貼り付けしてください…",button:"アップロード"},preview:{unknownName:"不明なファイル",change:"キャンセル",back:"戻る",done:"追加",unknown:{title:"アップロードしています… プレビューの表示をお待ちください。",done:"プレビューの確認をスキップして完了"},regular:{title:"このファイルを追加しますか？",line1:"こちらのファイルを追加しようとしています。",line2:"確認してください。"},image:{title:"この画像を追加しますか？",change:"キャンセル"},crop:{title:"画像の切り取りと追加",done:"完了",free:"リセット"},error:{"default":{title:"失敗しました",text:"アップロード中に不明なエラーが発生しました。",back:"もう一度お試し下さい"},image:{title:"画像ファイルのみ許可されています",text:"他のファイルで再度お試し下さい。",back:"画像を選択"},size:{title:"ファイルサイズが大きすぎます。",text:"他のファイルで再度お試し下さい。"},loadImage:{title:"エラー",text:"画像のロードに失敗しました。"}},multiple:{title:"%files%つのファイルを選択中",question:"これら全てのファイルを追加しますか？",tooManyFiles:"選択ファイルが多すぎます。%max%つ以下にしてください。",tooFewFiles:"選択ファイルが少なすぎます。%files%つ選択中です。少なくとも%min%つ選択してください。",clear:"全て削除",done:"完了"}}}}}}),a.namespace("locale.pluralize",function(e){return e.ja=function(e){return"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.ko={uploading:"업로드중 기다려주세요",loadingInfo:"정보 로드중...",errors:{"default":"오류",baddata:"잘못된 값",size:"파일용량 초과",upload:"업로드 실패",user:"업로드 취소됨",info:"정보를 불러올 수 없습니다",image:"허용된 이미지만 가능",createGroup:"파일 그룹 만들기 실패",deleted:"파일이 삭제되었습니다"},draghere:"여기에 끌어다 놓기",file:{one:"%1 파일",other:"%1 파일"},buttons:{cancel:"취소",remove:"삭제",choose:{files:{one:"파일 첨부",other:"파일 첨부"},images:{one:"이미지 첨부",other:"이미지 첨부"}}},dialog:{close:"닫기",openMenu:"메뉴 열기",done:"완료",showFiles:"파일 표시",tabs:{names:{"empty-pubkey":"반갑습니다",preview:"미리보기",file:"파일 첨부",url:"링크 연결",camera:"카메라",facebook:"페이스북",dropbox:"드롭박스",gdrive:"구글 드라이브",gphotos:"구글 포토",instagram:"인스타그램",evernote:"에버노트",box:"박스",skydrive:"스카이드라이브",flickr:"플리커"},file:{drag:"모든 파일을<br>드래그 & 드롭",nodrop:"파일 업로드",cloudsTip:"클라우드 스토리지 및 소셜",or:"또는",button:"파일 선택",also:"또는 선택하십시오"},url:{title:"웹에서 파일 링크 연결",line1:"웹에서 모든파일을 가져옵니다",line2:"링크만 연결합니다.",input:"링크 붙여 넣기...",
button:"업로드"},camera:{title:"카메라 연결",capture:"사진 찍기",mirror:"거울",startRecord:"비디오 녹화",stopRecord:"정지",cancelRecord:"취소",retry:"재 시도",pleaseAllow:{title:"카메라 접근 허용",text:"카메라 접근을 허용하시겠습니까?<br>승인 요청을 해주셔야 합니다"},notFound:{title:"카메라가 없습니다",text:"이 기기에 연결된 카메라가 없습니다"}},preview:{unknownName:"알수없음",change:"취소",back:"뒤로",done:"추가",unknown:{title:"업로드중, 기다려주세요",done:"미리보기 건너뛰기"},regular:{title:"이 파일을 추가하시겠습니까?",line1:"위 파일을 추가하려고 합니다",line2:"확인 하십시오"},image:{title:"이미지를 추가하시겠습니까?",change:"취소"},crop:{title:"이미지 자르기 및 추가",done:"완료",free:"무료"},video:{title:"비디오를 추가하시겠습니까?",change:"취소"},error:{"default":{title:"죄송합니다",text:"업로드에 문제가 있습니다",back:"다시 시도해 주세요"},image:{title:"이미지 파일만 허용됩니다",text:"다른 파일로 다시 시도하세요",back:"이미지 선택"},size:{title:"선택한 파일이 한도 초과하였습니다",text:"다른 파일로 다시 시도하세요"},loadImage:{title:"오류",text:"이미지를 불러올 수 없습니다"}},multiple:{title:"%files%을(를) 선택하였습니다",question:"%files%을 추가하시겠습니까?",tooManyFiles:"너무 많은 파일을 추가하셨습니다. %max%가 최대 한도입니다",tooFewFiles:"%files%을(를) 선택하였습니다 최소 %min%이상 필요합니다",clear:"모두 삭제",done:"추가",file:{preview:"%file% 미리보기",remove:"%file% 삭제"}}}},footer:{text:"powered by",link:"uploadcare"}}}}),a.namespace("locale.pluralize",function(e){return e.ko=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.lv={uploading:"Augšupielādē... Lūdzu, gaidiet.",errors:{"default":"Kļūda",image:"Atļauti tikai attēli"},draghere:"Velciet failus šeit",file:{zero:"%1 failu",one:"%1 fails",other:"%1 faili"},buttons:{cancel:"Atcelt",remove:"Dzēst"},dialog:{title:"Ielādēt jebko no jebkurienes",poweredby:"Darbināts ar",support:{images:"Attēli",audio:"Audio",video:"Video",documents:"Dokumenti"},tabs:{file:{title:"Mans dators",line1:"Paņemiet jebkuru failu no jūsu datora.",line2:"Izvēlēties ar dialogu vai ievelciet iekšā.",button:"Meklēt failus"},url:{title:"Faili no tīmekļa",line1:"Paņemiet jebkuru failu no tīmekļa.",line2:"Tikai uzrādiet linku.",input:"Ielīmējiet linku šeit...",button:"Ielādēt"}}}}}),a.namespace("locale.pluralize",function(e){return e.lv=function(e){return 0===e?"zero":e%10===1&&e%100!==11?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.nb={uploading:"Laster opp... Vennligst vent.",loadingInfo:"Laster inn info...",errors:{"default":"Feil",baddata:"Ugyldig verdi",size:"Filen er for stor",upload:"Kan ikke laste opp",user:"Opplasting avbrutt",info:"Kan ikke laste inn info",image:"Kun bilder er tillatt",createGroup:"Kan ikke opprette filgruppe",deleted:"Filen er slettet"},draghere:"Dra en fil hit",file:{one:"%1 fil",other:"%1 filer"},buttons:{cancel:"Avbryt",remove:"Fjern",choose:{files:{one:"Velg en fil",other:"Velg filer"},images:{one:"Velg et bilde",other:"Velg bilder"}}},dialog:{done:"Ferdig",showFiles:"Vis filer",tabs:{names:{preview:"Forhåndsvising",file:"Lokale filer",url:"Direktelink"},file:{drag:"Dra og slipp en fil her",nodrop:"Last opp filer fra datamaskinen",cloudsTip:"Skylagring<br>og sosiale tjenester",or:"eller",button:"Velg en lokal fil",also:"Du kan også velge det fra"},url:{title:"Filer fra internett",line1:"Velg hvilken som helst fil fra internett.",line2:"Bare gi oss linken.",input:"Lim inn linken her...",button:"Last opp"},preview:{unknownName:"ukjent",change:"Avbryt",back:"Tilbake",done:"Legg til",unknown:{title:"Laster opp... Vennligst vent på forhåndsvisning.",done:"Hopp over forhåndsvisning og godkjenn"},regular:{title:"Legge til denne filen?",line1:"Filen legges nå til.",line2:"Vennligst bekreft."},image:{title:"Legge til dette bildet?",change:"Avbryt"},crop:{title:"Kutt og legg til dette bildet",done:"Ferdig",free:"frigjør"},error:{"default":{title:"Ops!",text:"Noe gikk galt under opplastingen.",back:"Vennligst prøv igjen"},image:{title:"Kun bilder er akseptert.",text:"Prøv igjen med en annen fil.",back:"Velg bilde"},size:{title:"Den valgte filen overskrider tilatt størrelse.",text:"Vennligst prøv igjen med en annen fil."},loadImage:{title:"Feil",text:"Kan ikke laste bildet"}},multiple:{title:"Du har valgt %files%",question:"Ønsker du å legge til alle filene?",tooManyFiles:"Du har valgt for mange filer. %max% er maksimum.",tooFewFiles:"Du har valgt %files%. Minimum %min% er påkrevd.",clear:"Fjern alle",done:"Ferdig"}}}}}}),a.namespace("locale.pluralize",function(e){return e.nb=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.nl={uploading:"Uploaden... Even geduld.",loadingInfo:"Laden informatie...",errors:{"default":"Fout",baddata:"Ongeldige waarde",size:"Bestand is te groot",upload:"Kan niet uploaden",user:"Upload geannulleerd",info:"Kan informatie niet laden",image:"Alleen afbeeldingen toegestaan",createGroup:"Kan bestandsgroep niet maken",deleted:"Bestand is verwijderd"},draghere:"Drop hier een bestand",file:{one:"%1 bestand",other:"%1 bestanden"},buttons:{cancel:"Annuleren",remove:"Verwijderen",choose:{files:{one:"Kies een bestand",other:"Kies bestanden"},images:{one:"Kies een afbeelding",other:"Kies afbeeldingen"}}},dialog:{done:"Klaar",showFiles:"Toon bestanden",tabs:{names:{preview:"Voorvertoning",file:"Computer",url:"Directe links"},file:{drag:"Drop hier een bestand",nodrop:"Upload bestanden van je computer",or:"of",button:"Selecteer een bestand van je computer",also:"Je kan ook selecteren van"},url:{title:"Bestanden van het web",line1:"Selecteer een bestand van het web.",line2:"Voer de link in.",input:"Plak de link hier...",button:"Upload"},preview:{unknownName:"onbekend",change:"Annuleren",back:"Terug",done:"Toevoegen",unknown:{title:"Uploaden... Wacht op de voorvertoning.",done:"Voorvertoning overslaan an accepteren"},regular:{title:"Dit bestand toevoegen?",line1:"Je staat op het punt bovenstaand bestand toe te voegen.",line2:"Bevestig."},image:{title:"Voeg deze afbeelding toe?",change:"Annuleren"},crop:{title:"Afbeelding bijknippen en toevoegen",done:"Klaar"},error:{"default":{title:"Oeps!",text:"Er is een fout opgetreden tijdens het uploaden.",back:"Probeer het nog eens"},image:{title:"Alleen afbeeldingen worden geaccepteerd.",text:"Probeer het nog eens met een andere bestand.",back:"Selecteer afbeelding"},size:{title:"Het geselecteerd bestand is groter dan de limiet.",text:"Probeer het nog eens met een andere bestand."},loadImage:{title:"Fout",text:"Kan afbeelding niet laden"}},multiple:{title:"Je hebt de volgende bestanden geselecteerd %files%",question:"Wil je al deze bestanden toevoegen?",tooManyFiles:"Je hebt teveel bestanden geselecteerd. %max% is het maximum.",tooFewFiles:"Je hebt de volgende bestanden geselecteerd %files%. Minimaal %min% is verplicht.",clear:"Verwijder alle bestanden",done:"Klaar"}}}}}}),a.namespace("locale.pluralize",function(e){return e.nl=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.pl={uploading:"Przesyłanie... Proszę czekać.",loadingInfo:"Loading info...",errors:{"default":"Błąd",baddata:"Niepoprawna wartość",size:"Plik zbyt duży",upload:"Nie udało się przesłać",user:"Przesyłanie anulowane",info:"Nie udało się załadować informacji",image:"Dozwolone są tylko obrazy",createGroup:"Nie udało się utworzyć grupy plików",deleted:"Plik został usunięty"},draghere:"Upuść plik tutaj",file:{one:"%1 plik",few:"%1 pliki",many:"%1 plików"},buttons:{cancel:"Anuluj",remove:"Usuń",choose:{files:{one:"Wybierz plik",other:"Wybierz pliki"},images:{one:"Wybierz obraz",other:"Wybierz obrazy"}}},dialog:{done:"Wykonano",showFiles:"Pokaż pliki",tabs:{names:{"empty-pubkey":"Witaj",preview:"Podgląd",file:"Pliki lokalne",url:"Plik z Sieci",camera:"Aparat"},file:{drag:"Upuść plik tutaj",nodrop:"Prześlij pliki z Twojego komputera",cloudsTip:"Dane w chmurze<br>i sieci społecznościowe",or:"lub",button:"Wybierz plik lokalny",also:"Możesz również wybrać z"},url:{title:"Pliki z Sieci",line1:"Złap jakikolwiej plik z sieci.",line2:"Podaj adres.",input:"Wklej link...",button:"Prześlij"},camera:{capture:"Zrób zdjęcie",mirror:"Lustro",retry:"Poproś ponownie o dostęp",pleaseAllow:{title:"Prośba o udostępnienie aparatu",text:"Zostałeś poproszony przez tę stronę o dostęp do aparatu. Aby robić zdjecia, musisz zaakceptować tę prośbę."},notFound:{title:"Nie wykryto aparatu.",
text:"Wygląda na to, że nie masz podłączonego aparatu do tego urządzenia."}},preview:{unknownName:"nieznany",change:"Anuluj",back:"Wstecz",done:"Dodaj",unknown:{title:"Przesyłanie... Proszę czekać na podgląd.",done:"Omiń podgląd i zaakceptuj."},regular:{title:"Dodać ten plik?",line1:"Zamierzasz dodać nowy plik.",line2:"Potwierdź, proszę."},image:{title:"Dodać ten obraz?",change:"Anuluj"},crop:{title:"Przytnij i dodaj ten obraz",done:"Wykonano",free:"wolny"},error:{"default":{title:"Oops!",text:"Coś poszło nie tak podczas przesyłania.",back:"Spróbuj ponownie"},image:{title:"Akceptowane są tylko obrazy.",text:"Spróbuj ponownie z innym plikiem.",back:"Wybierz obraz"},size:{title:"Plik, który wybrałeś, przekracza dopuszczalny rozmiar",text:"Spróbuj ponownie z innym plikiem."},loadImage:{title:"Błąd",text:"Nie udało się załadować obrazu"}},multiple:{title:"Wybrałeś %files%",question:"Czy chcesz dodać wszystkie te pliki?",tooManyFiles:"Wybrałeś zbyt wiele plików. Maksimum to %max%.",tooFewFiles:"Wybrałeś %files%. Wymagane jest co najmniej %min%.",clear:"Usuń wszystkie",done:"Wykonano"}}}}}}),a.namespace("locale.pluralize",function(e){return e.pl=function(e){var t;return 1===e?"one":2<=(t=e%10)&&4>=t&&1!==(e/10%10|0)?"few":"many"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.pt={uploading:"Fazendo upload... Aguarde.",loadingInfo:"Carregando informações...",errors:{"default":"Erro",baddata:"Valor incorreto",size:"Arquivo muito grande",upload:"Não foi possível fazer o upload",user:"Upload cancelado",info:"Não foi possível carregar as informações",image:"Apenas imagens são permitidas",createGroup:"Não foi possível criar o grupo de arquivos",deleted:"O arquivo foi excluído"},draghere:"Arraste um arquivo aqui",file:{one:"%1 arquivo",other:"%1 arquivos"},buttons:{cancel:"Cancelar",remove:"Excluir",choose:{files:{one:"Escolha um arquivo",other:"Escolha arquivos"},images:{one:"Escolha uma imagem",other:"Escolha imagens"}}},dialog:{done:"OK",showFiles:"Mostrar arquivos",tabs:{names:{preview:"Pré-estréia",file:"Computador",url:"Link da web"},file:{drag:"Arraste um arquivo aqui",nodrop:"Faça upload de arquivos do seu computador",or:"ou",button:"Escolha um arquivo do computador",also:"Você também pode escolher arquivos de"},url:{title:"Arquivos da web",line1:"Faça upload de qualquer arquivo da web.",line2:"Apenas informe o link.",input:"Cole seu link aqui...",button:"Upload"},camera:{capture:"Tirar uma foto",mirror:"Espelhar",startRecord:"Gravar um vídeo",stopRecord:"Parar",cancelRecord:"Cancelar",retry:"Requisitar permissão novamente",pleaseAllow:{title:"Por favor permita o acesso a sua câmera",text:"Você foi solicitado a permitir o acesso à câmera a partir deste site. Para tirar fotos com sua câmera, você deve aprovar este pedido."},notFoud:{title:"Câmera não detectada",text:"Parece que você não tem uma câmera conectada a este dispositivo"}},preview:{unknownName:"desconhecido",change:"Cancelar",back:"Voltar",done:"Adicionar",unknown:{title:"Fazendo upload... Aguarde a visualização.",done:"Pular visualização e aceitar"},regular:{title:"Adicionar esse arquivo?",line1:"Você está prestes a adicionar o arquivo acima.",line2:"Por favor, confirme."},image:{title:"Adicionar essa imagem?",change:"Cancelar"},crop:{title:"Cortar e adicionar essa imagem",done:"OK",free:"livre"},error:{"default":{title:"Oops!",text:"Alguma coisa deu errado durante o upload.",back:"Por favor, tente novamente"},image:{title:"Apenas arquivos de imagem são aceitos.",text:"Por favor, tente novamente com outro arquivo.",back:"Escolher a imagem"},size:{title:"O arquivo que você escolheu excede o limite.",text:"Por favor, tente novamente com outro arquivo."},loadImage:{title:"Erro",text:"Não foi possível carregar a imagem"}},multiple:{title:"Você escolheu",question:"Você quer adicionar todos esses arquivos?",clear:"Excluir todos",done:"OK"}}}}}}),a.namespace("locale.pluralize",function(e){return e.pt=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.ru={uploading:"Идет загрузка",loadingInfo:"Загрузка информации...",errors:{"default":"Ошибка",baddata:"Некорректные данные",size:"Слишком большой файл",upload:"Ошибка при загрузке",user:"Загрузка прервана",info:"Ошибка при загрузке информации",image:"Разрешены только изображения",createGroup:"Не удалось создать группу файлов",deleted:"Файл удалён"},draghere:"Перетащите файл сюда",file:{one:"%1 файл",few:"%1 файла",many:"%1 файлов"},buttons:{cancel:"Отмена",remove:"Удалить",choose:{files:{one:"Выбрать файл",other:"Выбрать файлы"},images:{one:"Выбрать изображение",other:"Выбрать изображения"}}},dialog:{done:"Готово",showFiles:"Показать файлы",tabs:{names:{preview:"Предпросмотр","empty-pubkey":"Приветствие",file:"Локальные файлы",vk:"ВКонтакте",url:"Ссылка",camera:"Камера"},file:{drag:"Перетащите файл сюда",nodrop:"Загрузка файлов с вашего компьютера",cloudsTip:"Облачные хранилища<br>и социальные сети",or:"или",button:"Выберите локальный файл",also:"Вы также можете загрузить файлы, используя:"},url:{title:"Файлы с других сайтов",line1:"Загрузите любой файл из сети.",line2:"",input:"Укажите здесь ссылку...",button:"Загрузить"},camera:{capture:"Сделать снимок",mirror:"Отразить",retry:"Повторно запросить разрешение",pleaseAllow:{title:"Пожалуйста, разрешите доступ к камере",text:"Для того, чтобы сделать снимок, мы запросили разрешение на доступ к камере с этого сайта."},notFound:{title:"Камера не найдена",text:"Скорее всего камера не подключена или не настроена."}},preview:{unknownName:"неизвестно",change:"Отмена",back:"Назад",done:"Добавить",unknown:{title:"Загрузка... Пожалуйста подождите.",done:"Пропустить предварительный просмотр"},regular:{title:"Загрузить этот файл?",line1:"Вы собираетесь добавить этот файл:",line2:"Пожалуйста, подтвердите."},image:{title:"Добавить это изображение?",change:"Отмена"},video:{title:"Добавить это видео?",change:"Отмена"},crop:{title:"Обрезать и добавить это изображение",done:"Готово",free:"произв."},error:{"default":{title:"Ой!",text:"Что-то пошло не так во время загрузки.",back:"Пожалуйста, попробуйте ещё раз"},image:{title:"Можно загружать только изображения.",text:"Попробуйте загрузить другой файл.",back:"Выберите изображение"},size:{title:"Размер выбранного файла превышает лимит.",text:"Попробуйте загрузить другой файл."},loadImage:{title:"Ошибка",text:"Изображение не удалось загрузить"}},multiple:{title:"Вы выбрали %files%",question:"Добавить все эти файлы?",tooManyFiles:"Вы выбрали слишком много файлов. %max% максимум.",tooFewFiles:"Вы выбрали %files%. Нужно не меньше %min%.",clear:"Удалить все",done:"Добавить",file:{preview:"Предпросмотр %file%",remove:"Удалить %file%"}}}}}}}),a.namespace("locale.pluralize",function(e){return e.ru=function(e){return 1===(e/10%10|0)||e%10===0||e%10>4?"many":e%10===1?"one":"few"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.sv={uploading:"Laddar... Var god vänta.",loadingInfo:"Laddar info...",errors:{"default":"Error",baddata:"Felaktigt värde",size:"Filen är för stor",upload:"Kan inte ladda upp",user:"Uppladdning avbruten",info:"Kan inte ladda informationen",image:"Endast bilder tillåtna",createGroup:"Kan inte skapa filgrupp",deleted:"Fil raderad"},draghere:"Dra filen hit",file:{one:"%1 fil",other:"%1 filer"},buttons:{cancel:"Avbryt",remove:"Ta bort",choose:{files:{one:"Välj fil",other:"Välj filer"},images:{one:"Välj en fil",other:"Välj filer"}}},dialog:{done:"Klar",showFiles:"Visa filer",tabs:{names:{"empty-pubkey":"Välkommen",preview:"Förhandsgranskning",file:"Lokala filer",url:"Direkta länkar",camera:"Kamera"},file:{drag:"Släpp filen här",nodrop:"Ladda upp filer från din dator",cloudsTip:"Cloud storages<br>och sociala nätverk",or:"eller",button:"Välj en lokal fil",also:"Du kan också välja den från"},url:{title:"Filer från webben",line1:"Välj en fil från en web adress.",line2:"Agge bara länken til filen.",input:"Klistra in din länk här...",button:"Ladda upp"},camera:{capture:"Ta ett foto",mirror:"Spegel",retry:"Begär tillstånd igen",pleaseAllow:{title:"Vänligen ge tillgång till din kamera",text:"Du har uppmanats att tillåta att denna webbplats får tillgång till din kamera.För att ta bilder med din kamera måste du godkänna denna begäran."
},notFound:{title:"Ingen kamera funnen",text:"Det varkar som att du inte har något kamera ansluten till denna enheten."}},preview:{unknownName:"okänd",change:"Avbryt",back:"Tillbaka",done:"Lägg till",unknown:{title:"Laddar... Vänligen vänta på förhandsgranskning.",done:"Skippa förhandsgranskning och acceptera"},regular:{title:"Lägg till denna filen?",line1:"Du håller på att lägga till filen ovan.",line2:"Vänligen bekräfta."},image:{title:"Lägg till denna bilden?",change:"Avbryt"},crop:{title:"Beskär och lägg till denna bild",done:"Klar",free:"free"},error:{"default":{title:"Oops!",text:"Någonting gick fel under uppladdningen.",back:"Vänligen försök igen"},image:{title:"Endast bildfiler accepteras.",text:"Vänligen försök igen med en annan fil.",back:"Välj bild"},size:{title:"Filen du har valt är för stor.",text:"Vänligen försök igen med en annan fil."},loadImage:{title:"Error",text:"Kan inte ladda bild"}},multiple:{title:"Du har valt %files%",question:"Vill du lägga till alla dessa filer?",tooManyFiles:"Du har valt för många filer. %max% är max.",tooFewFiles:"Du har valt %files%. Minst %min% krävs.",clear:"Ta bort alla",done:"Klar"}}}}}}),a.namespace("locale.pluralize",function(e){return e.sv=function(e){return 1===e?"one":"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.tr={uploading:"Yükleniyor... Lütfen bekleyin.",loadingInfo:"Bilgiler yükleniyor...",errors:{"default":"Hata",baddata:"Geçersiz değer",size:"Dosya çok büyük",upload:"Yüklenemedi",user:"Yükleme iptal edildi",info:"Bilgiler getirilemedi",image:"Sadece resim dosyası yüklenebilir",createGroup:"Dosya grubu yaratılamıyor",deleted:"Dosya silinmiş"},draghere:"Buraya bir dosya bırakın",file:{other:"%1 dosya"},buttons:{cancel:"İptal",remove:"Kaldır",choose:{files:{one:"Dosya Seçin",other:"Dosya Seçin"},images:{one:"Resim Dosyası Seçin",other:"Resim Dosyası Seçin"}}},dialog:{done:"Bitti",showFiles:"Dosyaları Göster",tabs:{names:{"empty-pubkey":"Hoş geldiniz",preview:"Önizleme",file:"Bilgisayar",url:"Dış Bağlantılar",camera:"Kamera"},file:{drag:"Buraya bir dosya bırakın",nodrop:"Bilgisayarınızdan dosya yükleyin",or:"ya da",button:"Bilgisayardan bir dosya seç",also:"Diğer yükleme seçenekleri",cloudsTip:"Bulut depolamalar<br>ve sosyal hizmetler"},url:{title:"Webden dosyalar",line1:"Webden herhangi bir dosya seçin.",line2:"Dosya bağlantısını sağlayın.",input:"Bağlantınızı buraya yapıştırın...",button:"Yükle"},camera:{capture:"Fotoğraf çek",mirror:"Ayna",retry:"Tekrar izin iste",pleaseAllow:{title:"Lütfen kameranıza erişilmesine izin verin",text:"Bu siteden kamera erişimine izin vermeniz talep ediliyor. Kameranızla fotoğraf çekmek için bu isteği onaylamanız gerekmektedir."},notFound:{title:"Kamera algılanamadı",text:"Bu cihaza kamera bağlantısının olmadığı görünüyor."}},preview:{unknownName:"bilinmeyen",change:"İptal",back:"Geri",done:"Ekle",unknown:{title:"Yükleniyor... Önizleme için lütfen bekleyin.",done:"Önizlemeyi geç ve kabul et"},regular:{title:"Bu dosya eklensin mi?",line1:"Yukarıdaki dosyayı eklemek üzeresiniz.",line2:"Lütfen onaylayın."},image:{title:"Bu görsel eklensin mi?",change:"İptal"},crop:{title:"Bu görseli kes ve ekle",done:"Bitti"},error:{"default":{title:"Aman!",text:"Yükleme sırasında bir hata oluştu.",back:"Lütfen tekrar deneyin."},image:{title:"Sadece resim dosyaları kabul edilmektedir.",text:"Lütfen başka bir dosya ile tekrar deneyin.",back:"Resim dosyası seç"},size:{title:"Seçtiğiniz dosya limitleri aşıyor.",text:"Lütfen başka bir dosya ile tekrar deneyin."},loadImage:{title:"Hata",text:"Resim dosyası yüklenemedi"}},multiple:{title:"%files% dosya seçtiniz",question:"Bu dosyaların hepsini eklemek istiyor musunuz?",tooManyFiles:"Fazla sayıda dosya seçtiniz, en fazla %max% dosya olabilir.",tooFewFiles:"%files% dosya seçtiniz, en az %min% dosya olmalıdır.",clear:"Hepsini kaldır",done:"Bitti"}}}}}}),a.namespace("locale.pluralize",function(e){return e.tr=function(e){return"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.zhTW={uploading:"上傳中...請等待",loadingInfo:"正在讀取資訊...",errors:{"default":"錯誤",baddata:"錯誤資料",size:"檔案太大",upload:"無法上傳",user:"上傳被取消",info:"無法讀取資訊",image:"只允許圖片檔案",createGroup:"無法建立檔案群組",deleted:"檔案已被刪除"},draghere:"拖放檔案到這裡",file:{other:"%1 個檔案"},buttons:{cancel:"取消",remove:"刪除",choose:{files:{one:"選擇檔案",other:"選擇檔案"},images:{one:"選擇圖片",other:"選擇圖片"}}},dialog:{done:"完成",showFiles:"顯示檔案",tabs:{names:{"empty-pubkey":"歡迎",preview:"預覽",file:"從本機上傳",url:"任意圖片連結",camera:"相機"},file:{drag:"拖放檔案到這裡",nodrop:"從你的本機中上傳",cloudsTip:"雲端硬碟<br>與社群網站",or:"或者",button:"從本機中選取檔案",also:"你也可以選自"},url:{title:"來自網際網路的檔案",line1:"從網際網路選取檔案",line2:"只需提供連結",input:"將連結複製至此...",button:"上傳"},camera:{capture:"拍照",mirror:"鏡像",retry:"重新取得相機權限",pleaseAllow:{title:"請允許使存取您的相機",text:"你一直在提示允許來自這個網站的訪問攝像頭。為了拍照用你的相機，你必須批准這一請求。"},notFound:{title:"沒有找到相機",text:"看起來你有沒有將連接相機。"}},preview:{unknownName:"未知",change:"取消",back:"返回",done:"加入",unknown:{title:"上傳中...請等待預覽",done:"跳過預覽，直接接受"},regular:{title:"加入這個檔案？",line1:"你將加入上面的檔案。",line2:"請確認。"},image:{title:"加入這個圖片？",change:"取消"},crop:{title:"裁切並加入這個圖片",done:"完成",free:"自由裁切"},error:{"default":{title:"錯誤！",text:"上傳過程中出錯。",back:"請重試"},image:{title:"只允許上傳圖片檔案。",text:"請選擇其他檔案重新上傳。",back:"選擇圖片"},size:{title:"你選取的檔案超過了100MB的上限",text:"請用另一個檔案再試一次。"},loadImage:{title:"錯誤",text:"無法讀取圖片"}},multiple:{title:"你已經選擇 %files%",question:"你要加入所有檔案嗎？",tooManyFiles:"你選了太多的檔案. 最多可選擇%max%. 請刪除一些。",tooFewFiles:"你所選擇的檔案 %files%. 至少要 %min% .",clear:"清空",done:"完成"}}}}}}),a.namespace("locale.pluralize",function(e){return e.zhTW=function(e){return"other"}})}.call(this),function(){a.namespace("locale.translations",function(e){return e.zh={uploading:"上传中...请等待",loadingInfo:"正在读取信息...",errors:{"default":"错误",baddata:"错误数据",size:"文件太大",upload:"无法上传",user:"上传被取消",info:"无法读取信息",image:"只允许图形文件",createGroup:"无法建立文件组",deleted:"文件已被删除"},draghere:"拖放文件到这里",file:{other:"%1 个文件"},buttons:{cancel:"取消",remove:"删除"},dialog:{done:"完成",showFiles:"显示文件",tabs:{names:{url:"任意图片链接"},file:{drag:"拖放文件到这里",nodrop:"从你的电脑中上传",or:"或者",button:"从电脑中选取文件",also:"你也可以选自"},url:{title:"来自互联网的文件",line1:"从互联网选取文件",line2:"只需提供链接",input:"将链接拷贝至此...",button:"上传"},preview:{unknownName:"未知",change:"取消",back:"返回",done:"添加",unknown:{title:"上传中...请等待预览",done:"跳过预览，直接接受"},regular:{title:"添加这个文件?",line1:"你将添加上面的文件。",line2:"请确认。"},image:{title:"添加这个图片?",change:"取消"},crop:{title:"剪裁并添加这个图片",done:"完成"},error:{"default":{title:"错误!",text:"上传过程中出错。",back:"请重试"},image:{title:"只允许上传图片文件。",text:"请选择其他文件重新上传。",back:"选择图片"},size:{title:"你选取的文件超过了100MB的上限",text:"请用另一个文件再试一次。"},loadImage:{title:"错误",text:"无法读取图片"}},multiple:{title:"你已经选择 %files%",question:"你要添加所有文件吗？",tooManyFiles:"你选了太多的文件. 最多可选择%max%. 请删除一些。",clear:"清空",done:"完成"}}}}}}),a.namespace("locale.pluralize",function(e){return e.zh=function(){return"other"}})}.call(this),function(){var e;a.expose("locales",function(){var t;t=[];for(e in a.locale.translations)t.push(e);return t}())}.call(this),a.__exports});

/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ucWidget__ = __webpack_require__("./src/ucWidget/index.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UcWidgetComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__ucWidget__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UcWidgetModule", function() { return __WEBPACK_IMPORTED_MODULE_0__ucWidget__["b"]; });



/***/ }),

/***/ "./src/ucWidget/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ucWidget_component__ = __webpack_require__("./src/ucWidget/ucWidget.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ucWidget_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ucWidget_module__ = __webpack_require__("./src/ucWidget/ucWidget.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ucWidget_module__["a"]; });




/***/ }),

/***/ "./src/ucWidget/ucWidget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("@angular/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget__ = __webpack_require__("./node_modules/uploadcare-widget/uploadcare.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uploadcare_widget__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UcWidgetComponent = /** @class */ (function () {
    function UcWidgetComponent(element) {
        this.publicKey = 'demopublickey';
        this.cdnUrl = null;
        this.uploadComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.element = element;
    }
    UcWidgetComponent.prototype.ngAfterViewInit = function () {
        var inputElement = __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default.a.jQuery(this.element.nativeElement).children('input')[0];
        var widget = __WEBPACK_IMPORTED_MODULE_1_uploadcare_widget___default.a.SingleWidget(inputElement);
        var that = this;
        widget.onUploadComplete(function (fileInfo) {
            that.uploadComplete.emit(fileInfo);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('public-key'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "publicKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('multiple'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "multiple", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('multiple-max'),
        __metadata("design:type", Number)
    ], UcWidgetComponent.prototype, "multipleMax", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('multiple-min'),
        __metadata("design:type", Number)
    ], UcWidgetComponent.prototype, "multipleMin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('images-only'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "imagesOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('preview-step'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "previewStep", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('crop'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "crop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('image-shrink'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "imageShrink", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('clearable'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "clearable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tabs'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "tabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('input-accept-types'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "inputAcceptTypes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('preferred-types'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "preferredTypes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('system-dialog'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "systemDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('secure-signature'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "secureSignature", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('secure-expire'),
        __metadata("design:type", String)
    ], UcWidgetComponent.prototype, "secureExpire", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cdn-url'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "cdnUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('do-not-store'),
        __metadata("design:type", Boolean)
    ], UcWidgetComponent.prototype, "doNotStore", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('upload-complete'),
        __metadata("design:type", Object)
    ], UcWidgetComponent.prototype, "uploadComplete", void 0);
    UcWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-uploadcare-widget',
            template: "<input type=\"hidden\"\n                attr.data-public-key={{publicKey}}\n                [attr.data-multiple]=\"multiple\"\n                [attr.data-multiple-max]=\"multipleMax\"\n                [attr.data-multiple-min]=\"multipleMin\"\n                [attr.data-images-only]=\"imagesOnly\"\n                [attr.data-preview-step]=\"previewStep\"\n                [attr.data-crop]=\"crop\"\n                [attr.data-image-shrink]=\"imageShrink\"\n                [attr.data-clearable]=\"clearable\"\n                [attr.data-tabs]=\"tabs\"\n                [attr.data-input-accept-types]=\"inputAcceptTypes\"\n                [attr.data-preferred-types]=\"preferredTypes\"\n                [attr.data-system-dialog]=\"systemDialog\"\n                [attr.data-secure-signature]=\"secureSignature\"\n                [attr.data-secure-expire]=\"secureExpire\"\n                [value]=\"cdnUrl\"\n                [attr.data-do-not-store]=\"doNotStore\"\n              />",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], UcWidgetComponent);
    return UcWidgetComponent;
}());



/***/ }),

/***/ "./src/ucWidget/ucWidget.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcWidgetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("@angular/platform-browser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("@angular/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ucWidget_component__ = __webpack_require__("./src/ucWidget/ucWidget.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UcWidgetModule = /** @class */ (function () {
    function UcWidgetModule() {
    }
    UcWidgetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ucWidget_component__["a" /* UcWidgetComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"]
            ],
            providers: [],
            bootstrap: []
        })
    ], UcWidgetModule);
    return UcWidgetModule;
}());



/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "@angular/platform-browser":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map