(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// HELPERS


function _Debugger_unsafeCoerce(value)
{
	return value;
}



// PROGRAMS


var _Debugger_element = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			var currNode = _VirtualDom_virtualize(domNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			var cornerNode = _VirtualDom_doc.createElement('div');
			domNode.parentNode.insertBefore(cornerNode, domNode.nextSibling);
			var cornerCurr = _VirtualDom_virtualize(cornerNode);

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = A2(_VirtualDom_map, $elm$browser$Debugger$Main$UserMsg, view($elm$browser$Debugger$Main$getUserModel(model)));
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view corner

				var cornerNext = $elm$browser$Debugger$Main$cornerView(model);
				var cornerPatches = _VirtualDom_diff(cornerCurr, cornerNext);
				cornerNode = _VirtualDom_applyPatches(cornerNode, cornerCurr, cornerPatches, sendToApp);
				cornerCurr = cornerNext;

				if (!model.popout.b)
				{
					currPopout = undefined;
					return;
				}

				// view popout

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


var _Debugger_document = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var divertHrefToApp = impl.setup && impl.setup(function(x) { return sendToApp($elm$browser$Debugger$Main$UserMsg(x)); });
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view($elm$browser$Debugger$Main$getUserModel(model));
				var nextNode = _VirtualDom_node('body')(_List_Nil)(
					_Utils_ap(
						A2($elm$core$List$map, _VirtualDom_map($elm$browser$Debugger$Main$UserMsg), doc.body),
						_List_Cons($elm$browser$Debugger$Main$cornerView(model), _List_Nil)
					)
				);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view popout

				if (!model.popout.b) { currPopout = undefined; return; }

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


function _Debugger_popout()
{
	return {
		b: undefined,
		a: undefined
	};
}

function _Debugger_isOpen(popout)
{
	return !!popout.b;
}

function _Debugger_open(popout)
{
	return _Scheduler_binding(function(callback)
	{
		_Debugger_openWindow(popout);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}

function _Debugger_openWindow(popout)
{
	var w = $elm$browser$Debugger$Main$initialWindowWidth,
		h = $elm$browser$Debugger$Main$initialWindowHeight,
	 	x = screen.width - w,
		y = screen.height - h;

	var debuggerWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
	var doc = debuggerWindow.document;
	doc.title = 'Elm Debugger';

	// handle arrow keys
	doc.addEventListener('keydown', function(event) {
		event.metaKey && event.which === 82 && window.location.reload();
		event.key === 'ArrowUp'   && (popout.a($elm$browser$Debugger$Main$Up  ), event.preventDefault());
		event.key === 'ArrowDown' && (popout.a($elm$browser$Debugger$Main$Down), event.preventDefault());
	});

	// handle window close
	window.addEventListener('unload', close);
	debuggerWindow.addEventListener('unload', function() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		window.removeEventListener('unload', close);
	});

	function close() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		debuggerWindow.close();
	}

	// register new window
	popout.b = doc;
}



// SCROLL


function _Debugger_scroll(popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msgs = popout.b.getElementById('elm-debugger-sidebar');
			if (msgs && msgs.scrollTop !== 0)
			{
				msgs.scrollTop = 0;
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


var _Debugger_scrollTo = F2(function(id, popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msg = popout.b.getElementById(id);
			if (msg)
			{
				msg.scrollIntoView(false);
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});



// UPLOAD


function _Debugger_upload(popout)
{
	return _Scheduler_binding(function(callback)
	{
		var doc = popout.b || document;
		var element = doc.createElement('input');
		element.setAttribute('type', 'file');
		element.setAttribute('accept', 'text/json');
		element.style.display = 'none';
		element.addEventListener('change', function(event)
		{
			var fileReader = new FileReader();
			fileReader.onload = function(e)
			{
				callback(_Scheduler_succeed(e.target.result));
			};
			fileReader.readAsText(event.target.files[0]);
			doc.body.removeChild(element);
		});
		doc.body.appendChild(element);
		element.click();
	});
}



// DOWNLOAD


var _Debugger_download = F2(function(historyLength, json)
{
	return _Scheduler_binding(function(callback)
	{
		var fileName = 'history-' + historyLength + '.txt';
		var jsonString = JSON.stringify(json);
		var mime = 'text/plain;charset=utf-8';
		var done = _Scheduler_succeed(_Utils_Tuple0);

		// for IE10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
			return callback(done);
		}

		// for HTML5
		var element = document.createElement('a');
		element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		callback(done);
	});
});



// POPOUT CONTENT


function _Debugger_messageToString(value)
{
	if (typeof value === 'boolean')
	{
		return value ? 'True' : 'False';
	}

	if (typeof value === 'number')
	{
		return value + '';
	}

	if (typeof value === 'string')
	{
		return '"' + _Debugger_addSlashes(value, false) + '"';
	}

	if (value instanceof String)
	{
		return "'" + _Debugger_addSlashes(value, true) + "'";
	}

	if (typeof value !== 'object' || value === null || !('$' in value))
	{
		return '…';
	}

	if (typeof value.$ === 'number')
	{
		return '…';
	}

	var code = value.$.charCodeAt(0);
	if (code === 0x23 /* # */ || /* a */ 0x61 <= code && code <= 0x7A /* z */)
	{
		return '…';
	}

	if (['Array_elm_builtin', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.$) >= 0)
	{
		return '…';
	}

	var keys = Object.keys(value);
	switch (keys.length)
	{
		case 1:
			return value.$;
		case 2:
			return value.$ + ' ' + _Debugger_messageToString(value.a);
		default:
			return value.$ + ' … ' + _Debugger_messageToString(value[keys[keys.length - 1]]);
	}
}


function _Debugger_init(value)
{
	if (typeof value === 'boolean')
	{
		return A3($elm$browser$Debugger$Expando$Constructor, $elm$core$Maybe$Just(value ? 'True' : 'False'), true, _List_Nil);
	}

	if (typeof value === 'number')
	{
		return $elm$browser$Debugger$Expando$Primitive(value + '');
	}

	if (typeof value === 'string')
	{
		return $elm$browser$Debugger$Expando$S('"' + _Debugger_addSlashes(value, false) + '"');
	}

	if (value instanceof String)
	{
		return $elm$browser$Debugger$Expando$S("'" + _Debugger_addSlashes(value, true) + "'");
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (tag === '::' || tag === '[]')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ListSeq, true,
				A2($elm$core$List$map, _Debugger_init, value)
			);
		}

		if (tag === 'Set_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$SetSeq, true,
				A3($elm$core$Set$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (tag === 'RBNode_elm_builtin' || tag == 'RBEmpty_elm_builtin')
		{
			return A2($elm$browser$Debugger$Expando$Dictionary, true,
				A3($elm$core$Dict$foldr, _Debugger_initKeyValueCons, _List_Nil, value)
			);
		}

		if (tag === 'Array_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ArraySeq, true,
				A3($elm$core$Array$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (typeof tag === 'number')
		{
			return $elm$browser$Debugger$Expando$Primitive('<internals>');
		}

		var char = tag.charCodeAt(0);
		if (char === 35 || 65 <= char && char <= 90)
		{
			var list = _List_Nil;
			for (var i in value)
			{
				if (i === '$') continue;
				list = _List_Cons(_Debugger_init(value[i]), list);
			}
			return A3($elm$browser$Debugger$Expando$Constructor, char === 35 ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(tag), true, $elm$core$List$reverse(list));
		}

		return $elm$browser$Debugger$Expando$Primitive('<internals>');
	}

	if (typeof value === 'object')
	{
		var dict = $elm$core$Dict$empty;
		for (var i in value)
		{
			dict = A3($elm$core$Dict$insert, i, _Debugger_init(value[i]), dict);
		}
		return A2($elm$browser$Debugger$Expando$Record, true, dict);
	}

	return $elm$browser$Debugger$Expando$Primitive('<internals>');
}

var _Debugger_initCons = F2(function initConsHelp(value, list)
{
	return _List_Cons(_Debugger_init(value), list);
});

var _Debugger_initKeyValueCons = F3(function(key, value, list)
{
	return _List_Cons(
		_Utils_Tuple2(_Debugger_init(key), _Debugger_init(value)),
		list
	);
});

function _Debugger_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}



// BLOCK EVENTS


function _Debugger_updateBlocker(oldBlocker, newBlocker)
{
	if (oldBlocker === newBlocker) return;

	var oldEvents = _Debugger_blockerToEvents(oldBlocker);
	var newEvents = _Debugger_blockerToEvents(newBlocker);

	// remove old blockers
	for (var i = 0; i < oldEvents.length; i++)
	{
		document.removeEventListener(oldEvents[i], _Debugger_blocker, true);
	}

	// add new blockers
	for (var i = 0; i < newEvents.length; i++)
	{
		document.addEventListener(newEvents[i], _Debugger_blocker, true);
	}
}


function _Debugger_blocker(event)
{
	if (event.type === 'keydown' && event.metaKey && event.which === 82)
	{
		return;
	}

	var isScroll = event.type === 'scroll' || event.type === 'wheel';
	for (var node = event.target; node; node = node.parentNode)
	{
		if (isScroll ? node.id === 'elm-debugger-details' : node.id === 'elm-debugger-overlay')
		{
			return;
		}
	}

	event.stopPropagation();
	event.preventDefault();
}

function _Debugger_blockerToEvents(blocker)
{
	return blocker === $elm$browser$Debugger$Overlay$BlockNone
		? []
		: blocker === $elm$browser$Debugger$Overlay$BlockMost
			? _Debugger_mostEvents
			: _Debugger_allEvents;
}

var _Debugger_mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var _Debugger_allEvents = _Debugger_mostEvents.concat('wheel', 'scroll');




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Debugger$Expando$ArraySeq = {$: 'ArraySeq'};
var $elm$browser$Debugger$Overlay$BlockMost = {$: 'BlockMost'};
var $elm$browser$Debugger$Overlay$BlockNone = {$: 'BlockNone'};
var $elm$browser$Debugger$Expando$Constructor = F3(
	function (a, b, c) {
		return {$: 'Constructor', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Dictionary = F2(
	function (a, b) {
		return {$: 'Dictionary', a: a, b: b};
	});
var $elm$browser$Debugger$Main$Down = {$: 'Down'};
var $elm$browser$Debugger$Expando$ListSeq = {$: 'ListSeq'};
var $elm$browser$Debugger$Main$NoOp = {$: 'NoOp'};
var $elm$browser$Debugger$Expando$Primitive = function (a) {
	return {$: 'Primitive', a: a};
};
var $elm$browser$Debugger$Expando$Record = F2(
	function (a, b) {
		return {$: 'Record', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$S = function (a) {
	return {$: 'S', a: a};
};
var $elm$browser$Debugger$Expando$Sequence = F3(
	function (a, b, c) {
		return {$: 'Sequence', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$SetSeq = {$: 'SetSeq'};
var $elm$browser$Debugger$Main$Up = {$: 'Up'};
var $elm$browser$Debugger$Main$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $elm$browser$Debugger$Main$Export = {$: 'Export'};
var $elm$browser$Debugger$Main$Import = {$: 'Import'};
var $elm$browser$Debugger$Main$Open = {$: 'Open'};
var $elm$browser$Debugger$Main$OverlayMsg = function (a) {
	return {$: 'OverlayMsg', a: a};
};
var $elm$browser$Debugger$Main$Resume = {$: 'Resume'};
var $elm$browser$Debugger$Main$isPaused = function (state) {
	if (state.$ === 'Running') {
		return false;
	} else {
		return true;
	}
};
var $elm$browser$Debugger$History$size = function (history) {
	return history.numMessages;
};
var $elm$browser$Debugger$Overlay$Accept = function (a) {
	return {$: 'Accept', a: a};
};
var $elm$browser$Debugger$Overlay$Choose = F2(
	function (a, b) {
		return {$: 'Choose', a: a, b: b};
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$browser$Debugger$Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
var $elm$browser$Debugger$Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$browser$Debugger$Overlay$viewCode = function (name) {
	return A2(
		$elm$html$Html$code,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(name)
			]));
};
var $elm$browser$Debugger$Overlay$addCommas = function (items) {
	if (!items.b) {
		return '';
	} else {
		if (!items.b.b) {
			var item = items.a;
			return item;
		} else {
			if (!items.b.b.b) {
				var item1 = items.a;
				var _v1 = items.b;
				var item2 = _v1.a;
				return item1 + (' and ' + item2);
			} else {
				var lastItem = items.a;
				var otherItems = items.b;
				return A2(
					$elm$core$String$join,
					', ',
					_Utils_ap(
						otherItems,
						_List_fromArray(
							[' and ' + lastItem])));
			}
		}
	}
};
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$browser$Debugger$Overlay$problemToString = function (problem) {
	switch (problem.$) {
		case 'Function':
			return 'functions';
		case 'Decoder':
			return 'JSON decoders';
		case 'Task':
			return 'tasks';
		case 'Process':
			return 'processes';
		case 'Socket':
			return 'web sockets';
		case 'Request':
			return 'HTTP requests';
		case 'Program':
			return 'programs';
		default:
			return 'virtual DOM values';
	}
};
var $elm$browser$Debugger$Overlay$viewProblemType = function (_v0) {
	var name = _v0.name;
	var problems = _v0.problems;
	return A2(
		$elm$html$Html$li,
		_List_Nil,
		_List_fromArray(
			[
				$elm$browser$Debugger$Overlay$viewCode(name),
				$elm$html$Html$text(
				' can contain ' + ($elm$browser$Debugger$Overlay$addCommas(
					A2($elm$core$List$map, $elm$browser$Debugger$Overlay$problemToString, problems)) + '.'))
			]));
};
var $elm$browser$Debugger$Overlay$viewBadMetadata = function (_v0) {
	var message = _v0.message;
	var problems = _v0.problems;
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('The '),
					$elm$browser$Debugger$Overlay$viewCode(message),
					$elm$html$Html$text(' type of your program cannot be reliably serialized for history files.')
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:')
				])),
			A2(
			$elm$html$Html$ul,
			_List_Nil,
			A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewProblemType, problems)),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews1),
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('https://guide.elm-lang.org/types/custom_types.html')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('custom types')
						])),
					$elm$html$Html$text(', in your messages. From there, your '),
					$elm$browser$Debugger$Overlay$viewCode('update'),
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews2)
				]))
		]);
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$browser$Debugger$Overlay$Cancel = {$: 'Cancel'};
var $elm$browser$Debugger$Overlay$Proceed = {$: 'Proceed'};
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$browser$Debugger$Overlay$viewButtons = function (buttons) {
	var btn = F2(
		function (msg, string) {
			return A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-right', '20px'),
						$elm$html$Html$Events$onClick(msg)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(string)
					]));
		});
	var buttonNodes = function () {
		if (buttons.$ === 'Accept') {
			var proceed = buttons.a;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		} else {
			var cancel = buttons.a;
			var proceed = buttons.b;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Cancel, cancel),
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'height', '60px'),
				A2($elm$html$Html$Attributes$style, 'line-height', '60px'),
				A2($elm$html$Html$Attributes$style, 'text-align', 'right'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		buttonNodes);
};
var $elm$browser$Debugger$Overlay$viewMessage = F4(
	function (config, title, details, buttons) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-overlay'),
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100vw'),
					A2($elm$html$Html$Attributes$style, 'height', '100vh'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
					A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
							A2($elm$html$Html$Attributes$style, 'width', '600px'),
							A2($elm$html$Html$Attributes$style, 'height', '100vh'),
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '36px'),
									A2($elm$html$Html$Attributes$style, 'height', '80px'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)'),
									A2($elm$html$Html$Attributes$style, 'padding-left', '22px'),
									A2($elm$html$Html$Attributes$style, 'vertical-align', 'middle'),
									A2($elm$html$Html$Attributes$style, 'line-height', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(title)
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('elm-debugger-details'),
									A2($elm$html$Html$Attributes$style, 'padding', ' 8px 20px'),
									A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
									A2($elm$html$Html$Attributes$style, 'max-height', 'calc(100vh - 156px)'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
								]),
							details),
							A2(
							$elm$html$Html$map,
							config.wrap,
							$elm$browser$Debugger$Overlay$viewButtons(buttons))
						]))
				]));
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$browser$Debugger$Overlay$viewShape = F4(
	function (x, y, angle, coordinates) {
		return A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			'http://www.w3.org/2000/svg',
			'polygon',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'points', coordinates),
					A2(
					$elm$virtual_dom$VirtualDom$attribute,
					'transform',
					'translate(' + ($elm$core$String$fromFloat(x) + (' ' + ($elm$core$String$fromFloat(y) + (') rotate(' + ($elm$core$String$fromFloat(-angle) + ')'))))))
				]),
			_List_Nil);
	});
var $elm$browser$Debugger$Overlay$elmLogo = A4(
	$elm$virtual_dom$VirtualDom$nodeNS,
	'http://www.w3.org/2000/svg',
	'svg',
	_List_fromArray(
		[
			A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '-300 -300 600 600'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'width', '24px'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'height', '24px')
		]),
	_List_fromArray(
		[
			A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			'http://www.w3.org/2000/svg',
			'g',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'transform', 'scale(1 -1)')
				]),
			_List_fromArray(
				[
					A4($elm$browser$Debugger$Overlay$viewShape, 0, -210, 0, '-280,-90 0,190 280,-90'),
					A4($elm$browser$Debugger$Overlay$viewShape, -210, 0, 90, '-280,-90 0,190 280,-90'),
					A4($elm$browser$Debugger$Overlay$viewShape, 207, 207, 45, '-198,-66 0,132 198,-66'),
					A4($elm$browser$Debugger$Overlay$viewShape, 150, 0, 0, '-130,0 0,-130 130,0 0,130'),
					A4($elm$browser$Debugger$Overlay$viewShape, -89, 239, 0, '-191,61 69,61 191,-61 -69,-61'),
					A4($elm$browser$Debugger$Overlay$viewShape, 0, 106, 180, '-130,-44 0,86  130,-44'),
					A4($elm$browser$Debugger$Overlay$viewShape, 256, -150, 270, '-130,-44 0,86  130,-44')
				]))
		]));
var $elm$core$String$length = _String_length;
var $elm$browser$Debugger$Overlay$viewMiniControls = F2(
	function (config, numMsgs) {
		var string = $elm$core$String$fromInt(numMsgs);
		var width = $elm$core$String$fromInt(
			2 + $elm$core$String$length(string));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'bottom', '2em'),
					A2($elm$html$Html$Attributes$style, 'right', '2em'),
					A2($elm$html$Html$Attributes$style, 'width', 'calc(42px + ' + (width + 'ch)')),
					A2($elm$html$Html$Attributes$style, 'height', '36px'),
					A2($elm$html$Html$Attributes$style, 'background-color', '#1293D8'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					$elm$html$Html$Events$onClick(config.open)
				]),
			_List_fromArray(
				[
					$elm$browser$Debugger$Overlay$elmLogo,
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(1ch + 6px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', '1ch')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(string)
						]))
				]));
	});
var $elm$browser$Debugger$Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
var $elm$browser$Debugger$Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$browser$Debugger$Overlay$viewMention = F2(
	function (tags, verbed) {
		var _v0 = A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Overlay$viewCode,
			$elm$core$List$reverse(tags));
		if (!_v0.b) {
			return $elm$html$Html$text('');
		} else {
			if (!_v0.b.b) {
				var tag = _v0.a;
				return A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(verbed),
							tag,
							$elm$html$Html$text('.')
						]));
			} else {
				if (!_v0.b.b.b) {
					var tag2 = _v0.a;
					var _v1 = _v0.b;
					var tag1 = _v1.a;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(verbed),
								tag1,
								$elm$html$Html$text(' and '),
								tag2,
								$elm$html$Html$text('.')
							]));
				} else {
					var lastTag = _v0.a;
					var otherTags = _v0.b;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						A2(
							$elm$core$List$cons,
							$elm$html$Html$text(verbed),
							_Utils_ap(
								A2(
									$elm$core$List$intersperse,
									$elm$html$Html$text(', '),
									$elm$core$List$reverse(otherTags)),
								_List_fromArray(
									[
										$elm$html$Html$text(', and '),
										lastTag,
										$elm$html$Html$text('.')
									]))));
				}
			}
		}
	});
var $elm$browser$Debugger$Overlay$viewChange = function (change) {
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'margin', '8px 0')
			]),
		function () {
			if (change.$ === 'AliasChange') {
				var name = change.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							]))
					]);
			} else {
				var name = change.a;
				var removed = change.b.removed;
				var changed = change.b.changed;
				var added = change.b.added;
				var argsMatch = change.b.argsMatch;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'disc'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '2em')
							]),
						_List_fromArray(
							[
								A2($elm$browser$Debugger$Overlay$viewMention, removed, 'Removed '),
								A2($elm$browser$Debugger$Overlay$viewMention, changed, 'Changed '),
								A2($elm$browser$Debugger$Overlay$viewMention, added, 'Added ')
							])),
						argsMatch ? $elm$html$Html$text('') : $elm$html$Html$text('This may be due to the fact that the type variable names changed.')
					]);
			}
		}());
};
var $elm$browser$Debugger$Overlay$viewReport = F2(
	function (isBad, report) {
		switch (report.$) {
			case 'CorruptHistory':
				return _List_fromArray(
					[
						$elm$html$Html$text('Looks like this history file is corrupt. I cannot understand it.')
					]);
			case 'VersionChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('This history was created with Elm ' + (old + (', but you are using Elm ' + (_new + ' right now.'))))
					]);
			case 'MessageChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('To import some other history, the overall message type must' + ' be the same. The old history has '),
						$elm$browser$Debugger$Overlay$viewCode(old),
						$elm$html$Html$text(' messages, but the new program works with '),
						$elm$browser$Debugger$Overlay$viewCode(_new),
						$elm$html$Html$text(' messages.')
					]);
			default:
				var changes = report.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								isBad ? $elm$browser$Debugger$Overlay$explanationBad : $elm$browser$Debugger$Overlay$explanationRisky)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'none'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '20px')
							]),
						A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewChange, changes))
					]);
		}
	});
var $elm$browser$Debugger$Overlay$view = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		switch (state.$) {
			case 'None':
				return isOpen ? $elm$html$Html$text('') : (isPaused ? A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('elm-debugger-overlay'),
							A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
							A2($elm$html$Html$Attributes$style, 'top', '0'),
							A2($elm$html$Html$Attributes$style, 'left', '0'),
							A2($elm$html$Html$Attributes$style, 'width', '100vw'),
							A2($elm$html$Html$Attributes$style, 'height', '100vh'),
							A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
							A2($elm$html$Html$Attributes$style, 'display', 'flex'),
							A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
							A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'color', 'white'),
							A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
							A2($elm$html$Html$Attributes$style, 'z-index', '2147483646'),
							$elm$html$Html$Events$onClick(config.resume)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Click to Resume')
								])),
							A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs)
						])) : A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs));
			case 'BadMetadata':
				var badMetadata_ = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot use Import or Export',
					$elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			case 'BadImport':
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot Import History',
					A2($elm$browser$Debugger$Overlay$viewReport, true, report),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			default:
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Warning',
					A2($elm$browser$Debugger$Overlay$viewReport, false, report),
					A2($elm$browser$Debugger$Overlay$Choose, 'Cancel', 'Import Anyway'));
		}
	});
var $elm$browser$Debugger$Main$cornerView = function (model) {
	return A5(
		$elm$browser$Debugger$Overlay$view,
		{exportHistory: $elm$browser$Debugger$Main$Export, importHistory: $elm$browser$Debugger$Main$Import, open: $elm$browser$Debugger$Main$Open, resume: $elm$browser$Debugger$Main$Resume, wrap: $elm$browser$Debugger$Main$OverlayMsg},
		$elm$browser$Debugger$Main$isPaused(model.state),
		_Debugger_isOpen(model.popout),
		$elm$browser$Debugger$History$size(model.history),
		model.overlay);
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$foldr = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldr,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $elm$browser$Debugger$Main$getCurrentModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.b;
		return model;
	}
};
var $elm$browser$Debugger$Main$getUserModel = function (model) {
	return $elm$browser$Debugger$Main$getCurrentModel(model.state);
};
var $elm$browser$Debugger$Main$initialWindowHeight = 420;
var $elm$browser$Debugger$Main$initialWindowWidth = 900;
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$browser$Debugger$Main$cachedHistory = function (model) {
	var _v0 = model.state;
	if (_v0.$ === 'Running') {
		return model.history;
	} else {
		var history = _v0.e;
		return history;
	}
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$browser$Debugger$Main$DragEnd = {$: 'DragEnd'};
var $elm$browser$Debugger$Main$getDragStatus = function (layout) {
	if (layout.$ === 'Horizontal') {
		var status = layout.a;
		return status;
	} else {
		var status = layout.a;
		return status;
	}
};
var $elm$browser$Debugger$Main$Drag = function (a) {
	return {$: 'Drag', a: a};
};
var $elm$browser$Debugger$Main$DragInfo = F5(
	function (x, y, down, width, height) {
		return {down: down, height: height, width: width, x: x, y: y};
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$browser$Debugger$Main$decodeDimension = function (field) {
	return A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['currentTarget', 'ownerDocument', 'defaultView', field]),
		$elm$json$Json$Decode$float);
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$browser$Debugger$Main$onMouseMove = A2(
	$elm$html$Html$Events$on,
	'mousemove',
	A2(
		$elm$json$Json$Decode$map,
		$elm$browser$Debugger$Main$Drag,
		A6(
			$elm$json$Json$Decode$map5,
			$elm$browser$Debugger$Main$DragInfo,
			A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float),
			A2(
				$elm$json$Json$Decode$field,
				'buttons',
				A2(
					$elm$json$Json$Decode$map,
					function (v) {
						return v === 1;
					},
					$elm$json$Json$Decode$int)),
			$elm$browser$Debugger$Main$decodeDimension('innerWidth'),
			$elm$browser$Debugger$Main$decodeDimension('innerHeight'))));
var $elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$browser$Debugger$Main$toDragListeners = function (layout) {
	var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
	if (_v0.$ === 'Static') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				$elm$browser$Debugger$Main$onMouseMove,
				$elm$html$Html$Events$onMouseUp($elm$browser$Debugger$Main$DragEnd)
			]);
	}
};
var $elm$browser$Debugger$Main$toFlexDirection = function (layout) {
	if (layout.$ === 'Horizontal') {
		return 'row';
	} else {
		return 'column-reverse';
	}
};
var $elm$browser$Debugger$Main$DragStart = {$: 'DragStart'};
var $elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$browser$Debugger$Main$toPercent = function (fraction) {
	return $elm$core$String$fromFloat(100 * fraction) + '%';
};
var $elm$browser$Debugger$Main$viewDragZone = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2(
					$elm$html$Html$Attributes$style,
					'left',
					$elm$browser$Debugger$Main$toPercent(x)),
					A2($elm$html$Html$Attributes$style, 'margin-left', '-5px'),
					A2($elm$html$Html$Attributes$style, 'width', '10px'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'col-resize'),
					$elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
				]),
			_List_Nil);
	} else {
		var y = layout.c;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2(
					$elm$html$Html$Attributes$style,
					'top',
					$elm$browser$Debugger$Main$toPercent(y)),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'margin-top', '-5px'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '10px'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'row-resize'),
					$elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
				]),
			_List_Nil);
	}
};
var $elm$browser$Debugger$Main$TweakExpandoModel = function (a) {
	return {$: 'TweakExpandoModel', a: a};
};
var $elm$browser$Debugger$Main$TweakExpandoMsg = function (a) {
	return {$: 'TweakExpandoMsg', a: a};
};
var $elm$browser$Debugger$Main$toExpandoPercents = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return _Utils_Tuple2(
			$elm$browser$Debugger$Main$toPercent(1 - x),
			'100%');
	} else {
		var y = layout.c;
		return _Utils_Tuple2(
			'100%',
			$elm$browser$Debugger$Main$toPercent(y));
	}
};
var $elm$browser$Debugger$Main$toMouseBlocker = function (layout) {
	var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
	if (_v0.$ === 'Static') {
		return 'auto';
	} else {
		return 'none';
	}
};
var $elm$browser$Debugger$Expando$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$Index = F3(
	function (a, b, c) {
		return {$: 'Index', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Key = {$: 'Key'};
var $elm$browser$Debugger$Expando$None = {$: 'None'};
var $elm$browser$Debugger$Expando$Toggle = {$: 'Toggle'};
var $elm$browser$Debugger$Expando$Value = {$: 'Value'};
var $elm$browser$Debugger$Expando$blue = A2($elm$html$Html$Attributes$style, 'color', 'rgb(28, 0, 207)');
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$browser$Debugger$Expando$leftPad = function (maybeKey) {
	if (maybeKey.$ === 'Nothing') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'padding-left', '4ch')
			]);
	}
};
var $elm$browser$Debugger$Expando$makeArrow = function (arrow) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'color', '#777'),
				A2($elm$html$Html$Attributes$style, 'padding-left', '2ch'),
				A2($elm$html$Html$Attributes$style, 'width', '2ch'),
				A2($elm$html$Html$Attributes$style, 'display', 'inline-block')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(arrow)
			]));
};
var $elm$browser$Debugger$Expando$purple = A2($elm$html$Html$Attributes$style, 'color', 'rgb(136, 19, 145)');
var $elm$browser$Debugger$Expando$lineStarter = F3(
	function (maybeKey, maybeIsClosed, description) {
		var arrow = function () {
			if (maybeIsClosed.$ === 'Nothing') {
				return $elm$browser$Debugger$Expando$makeArrow('');
			} else {
				if (maybeIsClosed.a) {
					return $elm$browser$Debugger$Expando$makeArrow('▸');
				} else {
					return $elm$browser$Debugger$Expando$makeArrow('▾');
				}
			}
		}();
		if (maybeKey.$ === 'Nothing') {
			return A2($elm$core$List$cons, arrow, description);
		} else {
			var key = maybeKey.a;
			return A2(
				$elm$core$List$cons,
				arrow,
				A2(
					$elm$core$List$cons,
					A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$purple]),
						_List_fromArray(
							[
								$elm$html$Html$text(key)
							])),
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(' = '),
						description)));
		}
	});
var $elm$browser$Debugger$Expando$red = A2($elm$html$Html$Attributes$style, 'color', 'rgb(196, 26, 22)');
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$browser$Debugger$Expando$seqTypeToString = F2(
	function (n, seqType) {
		switch (seqType.$) {
			case 'ListSeq':
				return 'List(' + ($elm$core$String$fromInt(n) + ')');
			case 'SetSeq':
				return 'Set(' + ($elm$core$String$fromInt(n) + ')');
			default:
				return 'Array(' + ($elm$core$String$fromInt(n) + ')');
		}
	});
var $elm$core$String$slice = _String_slice;
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $elm$browser$Debugger$Expando$elideMiddle = function (str) {
	return ($elm$core$String$length(str) <= 18) ? str : (A2($elm$core$String$left, 8, str) + ('...' + A2($elm$core$String$right, 8, str)));
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 1,
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					]));
		} else {
			var field = entries.a;
			var rest = entries.b;
			var nextLength = (length + $elm$core$String$length(field)) + 1;
			if (nextLength > 18) {
				return _Utils_Tuple2(
					length + 2,
					_List_fromArray(
						[
							$elm$html$Html$text('…}')
						]));
			} else {
				var _v1 = A3($elm$browser$Debugger$Expando$viewExtraTinyRecord, nextLength, ',', rest);
				var finalLength = _v1.a;
				var otherHtmls = _v1.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							otherHtmls)));
			}
		}
	});
var $elm$browser$Debugger$Expando$viewTinyHelp = function (str) {
	return _Utils_Tuple2(
		$elm$core$String$length(str),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $elm$browser$Debugger$Expando$viewExtraTiny = function (value) {
	if (value.$ === 'Record') {
		var record = value.b;
		return A3(
			$elm$browser$Debugger$Expando$viewExtraTinyRecord,
			0,
			'{',
			$elm$core$Dict$keys(record));
	} else {
		return $elm$browser$Debugger$Expando$viewTiny(value);
	}
};
var $elm$browser$Debugger$Expando$viewTiny = function (value) {
	switch (value.$) {
		case 'S':
			var stringRep = value.a;
			var str = $elm$browser$Debugger$Expando$elideMiddle(stringRep);
			return _Utils_Tuple2(
				$elm$core$String$length(str),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$red]),
						_List_fromArray(
							[
								$elm$html$Html$text(str)
							]))
					]));
		case 'Primitive':
			var stringRep = value.a;
			return _Utils_Tuple2(
				$elm$core$String$length(stringRep),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$blue]),
						_List_fromArray(
							[
								$elm$html$Html$text(stringRep)
							]))
					]));
		case 'Sequence':
			var seqType = value.a;
			var valueList = value.c;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				A2(
					$elm$browser$Debugger$Expando$seqTypeToString,
					$elm$core$List$length(valueList),
					seqType));
		case 'Dictionary':
			var keyValuePairs = value.b;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				'Dict(' + ($elm$core$String$fromInt(
					$elm$core$List$length(keyValuePairs)) + ')'));
		case 'Record':
			var record = value.b;
			return $elm$browser$Debugger$Expando$viewTinyRecord(record);
		default:
			if (!value.c.b) {
				var maybeName = value.a;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					A2($elm$core$Maybe$withDefault, 'Unit', maybeName));
			} else {
				var maybeName = value.a;
				var valueList = value.c;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					function () {
						if (maybeName.$ === 'Nothing') {
							return 'Tuple(' + ($elm$core$String$fromInt(
								$elm$core$List$length(valueList)) + ')');
						} else {
							var name = maybeName.a;
							return name + ' …';
						}
					}());
			}
	}
};
var $elm$browser$Debugger$Expando$viewTinyRecord = function (record) {
	return $elm$core$Dict$isEmpty(record) ? _Utils_Tuple2(
		2,
		_List_fromArray(
			[
				$elm$html$Html$text('{}')
			])) : A3(
		$elm$browser$Debugger$Expando$viewTinyRecordHelp,
		0,
		'{ ',
		$elm$core$Dict$toList(record));
};
var $elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 2,
				_List_fromArray(
					[
						$elm$html$Html$text(' }')
					]));
		} else {
			var _v1 = entries.a;
			var field = _v1.a;
			var value = _v1.b;
			var rest = entries.b;
			var fieldLen = $elm$core$String$length(field);
			var _v2 = $elm$browser$Debugger$Expando$viewExtraTiny(value);
			var valueLen = _v2.a;
			var valueHtmls = _v2.b;
			var newLength = ((length + fieldLen) + valueLen) + 5;
			if (newLength > 60) {
				return _Utils_Tuple2(
					length + 4,
					_List_fromArray(
						[
							$elm$html$Html$text(', … }')
						]));
			} else {
				var _v3 = A3($elm$browser$Debugger$Expando$viewTinyRecordHelp, newLength, ', ', rest);
				var finalLength = _v3.a;
				var otherHtmls = _v3.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							A2(
								$elm$core$List$cons,
								$elm$html$Html$text(' = '),
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$span, _List_Nil, valueHtmls),
									otherHtmls)))));
			}
		}
	});
var $elm$browser$Debugger$Expando$view = F2(
	function (maybeKey, expando) {
		switch (expando.$) {
			case 'S':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$red]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Primitive':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$blue]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewSequence, maybeKey, seqType, isClosed, valueList);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return A3($elm$browser$Debugger$Expando$viewDictionary, maybeKey, isClosed, keyValuePairs);
			case 'Record':
				var isClosed = expando.a;
				var valueDict = expando.b;
				return A3($elm$browser$Debugger$Expando$viewRecord, maybeKey, isClosed, valueDict);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewConstructor, maybeKey, maybeName, isClosed, valueList);
		}
	});
var $elm$browser$Debugger$Expando$viewConstructor = F4(
	function (maybeKey, maybeName, isClosed, valueList) {
		var tinyArgs = A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$browser$Debugger$Expando$viewExtraTiny),
			valueList);
		var description = function () {
			var _v7 = _Utils_Tuple2(maybeName, tinyArgs);
			if (_v7.a.$ === 'Nothing') {
				if (!_v7.b.b) {
					var _v8 = _v7.a;
					return _List_fromArray(
						[
							$elm$html$Html$text('()')
						]);
				} else {
					var _v9 = _v7.a;
					var _v10 = _v7.b;
					var x = _v10.a;
					var xs = _v10.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text('( '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(', '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_fromArray(
									[
										$elm$html$Html$text(' )')
									]),
								xs)));
				}
			} else {
				if (!_v7.b.b) {
					var name = _v7.a.a;
					return _List_fromArray(
						[
							$elm$html$Html$text(name)
						]);
				} else {
					var name = _v7.a.a;
					var _v11 = _v7.b;
					var x = _v11.a;
					var xs = _v11.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text(name + ' '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(' '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_Nil,
								xs)));
				}
			}
		}();
		var _v4 = function () {
			if (!valueList.b) {
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					A2($elm$html$Html$div, _List_Nil, _List_Nil));
			} else {
				if (!valueList.b.b) {
					var entry = valueList.a;
					switch (entry.$) {
						case 'S':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Primitive':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Sequence':
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewSequenceOpen(subValueList)));
						case 'Dictionary':
							var keyValuePairs = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)));
						case 'Record':
							var record = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewRecordOpen(record)));
						default:
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewConstructorOpen(subValueList)));
					}
				} else {
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(isClosed),
						isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : $elm$browser$Debugger$Expando$viewConstructorOpen(valueList));
				}
			}
		}();
		var maybeIsClosed = _v4.a;
		var openHtml = _v4.b;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, maybeIsClosed, description)),
					openHtml
				]));
	});
var $elm$browser$Debugger$Expando$viewConstructorEntry = F2(
	function (index, value) {
		return A2(
			$elm$html$Html$map,
			A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, index),
			A2(
				$elm$browser$Debugger$Expando$view,
				$elm$core$Maybe$Just(
					$elm$core$String$fromInt(index)),
				value));
	});
var $elm$browser$Debugger$Expando$viewConstructorOpen = function (valueList) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, valueList));
};
var $elm$browser$Debugger$Expando$viewDictionary = F3(
	function (maybeKey, isClosed, keyValuePairs) {
		var starter = 'Dict(' + ($elm$core$String$fromInt(
			$elm$core$List$length(keyValuePairs)) + ')');
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
				]));
	});
var $elm$browser$Debugger$Expando$viewDictionaryEntry = F2(
	function (index, _v2) {
		var key = _v2.a;
		var value = _v2.b;
		switch (key.$) {
			case 'S':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			case 'Primitive':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			default:
				return A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Key, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('key'),
								key)),
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('value'),
								value))
						]));
		}
	});
var $elm$browser$Debugger$Expando$viewDictionaryOpen = function (keyValuePairs) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewDictionaryEntry, keyValuePairs));
};
var $elm$browser$Debugger$Expando$viewRecord = F3(
	function (maybeKey, isClosed, record) {
		var _v1 = isClosed ? _Utils_Tuple3(
			$elm$browser$Debugger$Expando$viewTinyRecord(record).b,
			$elm$html$Html$text(''),
			$elm$html$Html$text('')) : _Utils_Tuple3(
			_List_fromArray(
				[
					$elm$html$Html$text('{')
				]),
			$elm$browser$Debugger$Expando$viewRecordOpen(record),
			A2(
				$elm$html$Html$div,
				$elm$browser$Debugger$Expando$leftPad(
					$elm$core$Maybe$Just(_Utils_Tuple0)),
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					])));
		var start = _v1.a;
		var middle = _v1.b;
		var end = _v1.c;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						start)),
					middle,
					end
				]));
	});
var $elm$browser$Debugger$Expando$viewRecordEntry = function (_v0) {
	var field = _v0.a;
	var value = _v0.b;
	return A2(
		$elm$html$Html$map,
		$elm$browser$Debugger$Expando$Field(field),
		A2(
			$elm$browser$Debugger$Expando$view,
			$elm$core$Maybe$Just(field),
			value));
};
var $elm$browser$Debugger$Expando$viewRecordOpen = function (record) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Expando$viewRecordEntry,
			$elm$core$Dict$toList(record)));
};
var $elm$browser$Debugger$Expando$viewSequence = F4(
	function (maybeKey, seqType, isClosed, valueList) {
		var starter = A2(
			$elm$browser$Debugger$Expando$seqTypeToString,
			$elm$core$List$length(valueList),
			seqType);
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewSequenceOpen(valueList)
				]));
	});
var $elm$browser$Debugger$Expando$viewSequenceOpen = function (values) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, values));
};
var $elm$browser$Debugger$Main$viewExpando = F3(
	function (expandoMsg, expandoModel, layout) {
		var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
		var _v0 = $elm$browser$Debugger$Main$toExpandoPercents(layout);
		var w = _v0.a;
		var h = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'block'),
					A2($elm$html$Html$Attributes$style, 'width', 'calc(' + (w + ' - 4em)')),
					A2($elm$html$Html$Attributes$style, 'height', 'calc(' + (h + ' - 4em)')),
					A2($elm$html$Html$Attributes$style, 'padding', '2em'),
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'overflow', 'auto'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', block),
					A2($elm$html$Html$Attributes$style, '-webkit-user-select', block),
					A2($elm$html$Html$Attributes$style, '-moz-user-select', block),
					A2($elm$html$Html$Attributes$style, '-ms-user-select', block),
					A2($elm$html$Html$Attributes$style, 'user-select', block)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
							A2($elm$html$Html$Attributes$style, 'padding', '0 0 1em 0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-- MESSAGE')
						])),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$TweakExpandoMsg,
					A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoMsg)),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
							A2($elm$html$Html$Attributes$style, 'padding', '1em 0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-- MODEL')
						])),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$TweakExpandoModel,
					A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoModel))
				]));
	});
var $elm$browser$Debugger$Main$Jump = function (a) {
	return {$: 'Jump', a: a};
};
var $elm$virtual_dom$VirtualDom$lazy = _VirtualDom_lazy;
var $elm$html$Html$Lazy$lazy = $elm$virtual_dom$VirtualDom$lazy;
var $elm$browser$Debugger$Main$toHistoryPercents = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return _Utils_Tuple2(
			$elm$browser$Debugger$Main$toPercent(x),
			'100%');
	} else {
		var y = layout.c;
		return _Utils_Tuple2(
			'100%',
			$elm$browser$Debugger$Main$toPercent(1 - y));
	}
};
var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$browser$Debugger$History$idForMessageIndex = function (index) {
	return 'msg-' + $elm$core$String$fromInt(index);
};
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$browser$Debugger$History$viewMessage = F3(
	function (currentIndex, index, msg) {
		var messageName = _Debugger_messageToString(msg);
		var className = _Utils_eq(currentIndex, index) ? 'elm-debugger-entry elm-debugger-entry-selected' : 'elm-debugger-entry';
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(
					$elm$browser$Debugger$History$idForMessageIndex(index)),
					$elm$html$Html$Attributes$class(className),
					$elm$html$Html$Events$onClick(index)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$title(messageName),
							$elm$html$Html$Attributes$class('elm-debugger-entry-content')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(messageName)
						])),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('elm-debugger-entry-index')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(index))
						]))
				]));
	});
var $elm$browser$Debugger$History$consMsg = F3(
	function (currentIndex, msg, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		return _Utils_Tuple2(
			index + 1,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$elm$core$String$fromInt(index),
					A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewMessage, currentIndex, index, msg)),
				rest));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$browser$Debugger$History$maxSnapshotSize = 31;
var $elm$browser$Debugger$History$showMoreButton = function (numMessages) {
	var nextIndex = (numMessages - 1) - ($elm$browser$Debugger$History$maxSnapshotSize * 2);
	var labelText = 'View more messages';
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('elm-debugger-entry'),
				$elm$html$Html$Events$onClick(nextIndex)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$title(labelText),
						$elm$html$Html$Attributes$class('elm-debugger-entry-content')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(labelText)
					])),
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('elm-debugger-entry-index')
					]),
				_List_Nil)
			]));
};
var $elm$browser$Debugger$History$styles = A3(
	$elm$html$Html$node,
	'style',
	_List_Nil,
	_List_fromArray(
		[
			$elm$html$Html$text('\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 40px);\n  padding: 0 5px;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 40px;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n')
		]));
var $elm$core$Basics$ge = _Utils_ge;
var $elm$browser$Debugger$History$viewSnapshot = F3(
	function (selectedIndex, index, _v0) {
		var messages = _v0.messages;
		return A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_Nil,
			A3(
				$elm$core$Array$foldr,
				$elm$browser$Debugger$History$consMsg(selectedIndex),
				_Utils_Tuple2(index, _List_Nil),
				messages).b);
	});
var $elm$browser$Debugger$History$consSnapshot = F3(
	function (selectedIndex, snapshot, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		var nextIndex = index + $elm$core$Array$length(snapshot.messages);
		var selectedIndexHelp = ((_Utils_cmp(nextIndex, selectedIndex) > 0) && (_Utils_cmp(selectedIndex, index) > -1)) ? selectedIndex : (-1);
		return _Utils_Tuple2(
			nextIndex,
			A2(
				$elm$core$List$cons,
				A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewSnapshot, selectedIndexHelp, index, snapshot),
				rest));
	});
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Array$foldl = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldl,
			func,
			A3($elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var $elm$browser$Debugger$History$viewAllSnapshots = F3(
	function (selectedIndex, startIndex, snapshots) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A3(
				$elm$core$Array$foldl,
				$elm$browser$Debugger$History$consSnapshot(selectedIndex),
				_Utils_Tuple2(startIndex, _List_Nil),
				snapshots).b);
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $elm$browser$Debugger$History$viewRecentSnapshots = F3(
	function (selectedIndex, recentMessagesNum, snapshots) {
		var messagesToFill = $elm$browser$Debugger$History$maxSnapshotSize - recentMessagesNum;
		var arrayLength = $elm$core$Array$length(snapshots);
		var snapshotsToRender = function () {
			var _v0 = _Utils_Tuple2(
				A2($elm$core$Array$get, arrayLength - 2, snapshots),
				A2($elm$core$Array$get, arrayLength - 1, snapshots));
			if ((_v0.a.$ === 'Just') && (_v0.b.$ === 'Just')) {
				var fillerSnapshot = _v0.a.a;
				var recentSnapshot = _v0.b.a;
				return $elm$core$Array$fromList(
					_List_fromArray(
						[
							{
							messages: A3($elm$core$Array$slice, 0, messagesToFill, fillerSnapshot.messages),
							model: fillerSnapshot.model
						},
							recentSnapshot
						]));
			} else {
				return snapshots;
			}
		}();
		var startingIndex = ((arrayLength * $elm$browser$Debugger$History$maxSnapshotSize) - $elm$browser$Debugger$History$maxSnapshotSize) - messagesToFill;
		return A3($elm$browser$Debugger$History$viewAllSnapshots, selectedIndex, startingIndex, snapshotsToRender);
	});
var $elm$browser$Debugger$History$view = F2(
	function (maybeIndex, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var recentMessageStartIndex = numMessages - recent.numMessages;
		var index = A2($elm$core$Maybe$withDefault, -1, maybeIndex);
		var newStuff = A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_Nil,
			A3(
				$elm$core$List$foldr,
				$elm$browser$Debugger$History$consMsg(index),
				_Utils_Tuple2(recentMessageStartIndex, _List_Nil),
				recent.messages).b);
		var onlyRenderRecentMessages = (!_Utils_eq(index, -1)) || ($elm$core$Array$length(snapshots) < 2);
		var oldStuff = onlyRenderRecentMessages ? A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewAllSnapshots, index, 0, snapshots) : A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewRecentSnapshots, index, recent.numMessages, snapshots);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-sidebar'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
					A2($elm$html$Html$Attributes$style, 'height', 'calc(100% - 72px)')
				]),
			A2(
				$elm$core$List$cons,
				$elm$browser$Debugger$History$styles,
				A2(
					$elm$core$List$cons,
					newStuff,
					A2(
						$elm$core$List$cons,
						oldStuff,
						onlyRenderRecentMessages ? _List_Nil : _List_fromArray(
							[
								$elm$browser$Debugger$History$showMoreButton(numMessages)
							])))));
	});
var $elm$browser$Debugger$Main$SwapLayout = {$: 'SwapLayout'};
var $elm$browser$Debugger$Main$toHistoryIcon = function (layout) {
	if (layout.$ === 'Horizontal') {
		return 'M13 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M13 3h-10a1 1 0 0 0-1 1v5h12v-5a1 1 0 0 0-1-1z M14 10h-12v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z';
	} else {
		return 'M0 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3z M2 4v8a1 1 0 0 0 1 1h2v-10h-2a1 1 0 0 0-1 1z M6 3v10h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z';
	}
};
var $elm$browser$Debugger$Main$icon = function (path) {
	return A4(
		$elm$virtual_dom$VirtualDom$nodeNS,
		'http://www.w3.org/2000/svg',
		'svg',
		_List_fromArray(
			[
				A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '0 0 16 16'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'width', '16px'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'height', '16px')
			]),
		_List_fromArray(
			[
				A4(
				$elm$virtual_dom$VirtualDom$nodeNS,
				'http://www.w3.org/2000/svg',
				'path',
				_List_fromArray(
					[
						A2($elm$virtual_dom$VirtualDom$attribute, 'd', path)
					]),
				_List_Nil)
			]));
};
var $elm$browser$Debugger$Main$viewHistoryButton = F3(
	function (label, msg, path) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'background', 'none'),
					A2($elm$html$Html$Attributes$style, 'border', 'none'),
					A2($elm$html$Html$Attributes$style, 'color', 'inherit'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					$elm$html$Html$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					$elm$browser$Debugger$Main$icon(path),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-left', '6px')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						]))
				]));
	});
var $elm$browser$Debugger$Main$viewHistoryOptions = function (layout) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'width', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '36px'),
				A2($elm$html$Html$Attributes$style, 'display', 'flex'),
				A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
				A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
				A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		_List_fromArray(
			[
				A3(
				$elm$browser$Debugger$Main$viewHistoryButton,
				'Swap Layout',
				$elm$browser$Debugger$Main$SwapLayout,
				$elm$browser$Debugger$Main$toHistoryIcon(layout)),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', 'flex'),
						A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
						A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
						A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between')
					]),
				_List_fromArray(
					[
						A3($elm$browser$Debugger$Main$viewHistoryButton, 'Import', $elm$browser$Debugger$Main$Import, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M10 2a1 1 0 0 0 -2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-3.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-4.293 4.293z'),
						A3($elm$browser$Debugger$Main$viewHistoryButton, 'Export', $elm$browser$Debugger$Main$Export, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M9 3a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293 a1 1 0 0 1-1.414-1.414l5.293 -5.293z')
					]))
			]));
};
var $elm$browser$Debugger$Main$SliderJump = function (a) {
	return {$: 'SliderJump', a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$browser$Debugger$Main$isPlaying = function (maybeIndex) {
	if (maybeIndex.$ === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$core$String$toInt = _String_toInt;
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $elm$browser$Debugger$Main$viewPlayButton = function (playing) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'background', '#1293D8'),
				A2($elm$html$Html$Attributes$style, 'border', 'none'),
				A2($elm$html$Html$Attributes$style, 'color', 'white'),
				A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
				A2($elm$html$Html$Attributes$style, 'width', '36px'),
				A2($elm$html$Html$Attributes$style, 'height', '36px'),
				$elm$html$Html$Events$onClick($elm$browser$Debugger$Main$Resume)
			]),
		_List_fromArray(
			[
				playing ? $elm$browser$Debugger$Main$icon('M2 2h4v12h-4v-12z M10 2h4v12h-4v-12z') : $elm$browser$Debugger$Main$icon('M2 2l12 7l-12 7z')
			]));
};
var $elm$browser$Debugger$Main$viewHistorySlider = F2(
	function (history, maybeIndex) {
		var lastIndex = $elm$browser$Debugger$History$size(history) - 1;
		var selectedIndex = A2($elm$core$Maybe$withDefault, lastIndex, maybeIndex);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '36px'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Lazy$lazy,
					$elm$browser$Debugger$Main$viewPlayButton,
					$elm$browser$Debugger$Main$isPlaying(maybeIndex)),
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('range'),
							A2($elm$html$Html$Attributes$style, 'width', 'calc(100% - 56px)'),
							A2($elm$html$Html$Attributes$style, 'height', '36px'),
							A2($elm$html$Html$Attributes$style, 'margin', '0 10px'),
							$elm$html$Html$Attributes$min('0'),
							$elm$html$Html$Attributes$max(
							$elm$core$String$fromInt(lastIndex)),
							$elm$html$Html$Attributes$value(
							$elm$core$String$fromInt(selectedIndex)),
							$elm$html$Html$Events$onInput(
							A2(
								$elm$core$Basics$composeR,
								$elm$core$String$toInt,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Maybe$withDefault(lastIndex),
									$elm$browser$Debugger$Main$SliderJump)))
						]),
					_List_Nil)
				]));
	});
var $elm$browser$Debugger$Main$viewHistory = F3(
	function (maybeIndex, history, layout) {
		var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
		var _v0 = $elm$browser$Debugger$Main$toHistoryPercents(layout);
		var w = _v0.a;
		var h = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'width', w),
					A2($elm$html$Html$Attributes$style, 'height', h),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'column'),
					A2($elm$html$Html$Attributes$style, 'color', '#DDDDDD'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', block),
					A2($elm$html$Html$Attributes$style, 'user-select', block)
				]),
			_List_fromArray(
				[
					A2($elm$browser$Debugger$Main$viewHistorySlider, history, maybeIndex),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$Jump,
					A2($elm$browser$Debugger$History$view, maybeIndex, history)),
					A2($elm$html$Html$Lazy$lazy, $elm$browser$Debugger$Main$viewHistoryOptions, layout)
				]));
	});
var $elm$browser$Debugger$Main$popoutView = function (model) {
	var maybeIndex = function () {
		var _v0 = model.state;
		if (_v0.$ === 'Running') {
			return $elm$core$Maybe$Nothing;
		} else {
			var index = _v0.a;
			return $elm$core$Maybe$Just(index);
		}
	}();
	var historyToRender = $elm$browser$Debugger$Main$cachedHistory(model);
	return A3(
		$elm$html$Html$node,
		'body',
		_Utils_ap(
			$elm$browser$Debugger$Main$toDragListeners(model.layout),
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'padding', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2(
					$elm$html$Html$Attributes$style,
					'flex-direction',
					$elm$browser$Debugger$Main$toFlexDirection(model.layout))
				])),
		_List_fromArray(
			[
				A3($elm$browser$Debugger$Main$viewHistory, maybeIndex, historyToRender, model.layout),
				$elm$browser$Debugger$Main$viewDragZone(model.layout),
				A3($elm$browser$Debugger$Main$viewExpando, model.expandoMsg, model.expandoModel, model.layout)
			]));
};
var $elm$browser$Debugger$Overlay$BlockAll = {$: 'BlockAll'};
var $elm$browser$Debugger$Overlay$toBlockerType = F2(
	function (isPaused, state) {
		switch (state.$) {
			case 'None':
				return isPaused ? $elm$browser$Debugger$Overlay$BlockAll : $elm$browser$Debugger$Overlay$BlockNone;
			case 'BadMetadata':
				return $elm$browser$Debugger$Overlay$BlockMost;
			case 'BadImport':
				return $elm$browser$Debugger$Overlay$BlockMost;
			default:
				return $elm$browser$Debugger$Overlay$BlockMost;
		}
	});
var $elm$browser$Debugger$Main$toBlockerType = function (model) {
	return A2(
		$elm$browser$Debugger$Overlay$toBlockerType,
		$elm$browser$Debugger$Main$isPaused(model.state),
		model.overlay);
};
var $elm$browser$Debugger$Main$Horizontal = F3(
	function (a, b, c) {
		return {$: 'Horizontal', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Main$Running = function (a) {
	return {$: 'Running', a: a};
};
var $elm$browser$Debugger$Main$Static = {$: 'Static'};
var $elm$browser$Debugger$Metadata$Error = F2(
	function (message, problems) {
		return {message: message, problems: problems};
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$browser$Debugger$Metadata$Metadata = F2(
	function (versions, types) {
		return {types: types, versions: versions};
	});
var $elm$browser$Debugger$Metadata$Types = F3(
	function (message, aliases, unions) {
		return {aliases: aliases, message: message, unions: unions};
	});
var $elm$browser$Debugger$Metadata$Alias = F2(
	function (args, tipe) {
		return {args: args, tipe: tipe};
	});
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$browser$Debugger$Metadata$decodeAlias = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Alias,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$Union = F2(
	function (args, tags) {
		return {args: args, tags: tags};
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$browser$Debugger$Metadata$decodeUnion = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Union,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'tags',
		$elm$json$Json$Decode$dict(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$browser$Debugger$Metadata$decodeTypes = A4(
	$elm$json$Json$Decode$map3,
	$elm$browser$Debugger$Metadata$Types,
	A2($elm$json$Json$Decode$field, 'message', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'aliases',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeAlias)),
	A2(
		$elm$json$Json$Decode$field,
		'unions',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeUnion)));
var $elm$browser$Debugger$Metadata$Versions = function (elm) {
	return {elm: elm};
};
var $elm$browser$Debugger$Metadata$decodeVersions = A2(
	$elm$json$Json$Decode$map,
	$elm$browser$Debugger$Metadata$Versions,
	A2($elm$json$Json$Decode$field, 'elm', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$decoder = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Metadata,
	A2($elm$json$Json$Decode$field, 'versions', $elm$browser$Debugger$Metadata$decodeVersions),
	A2($elm$json$Json$Decode$field, 'types', $elm$browser$Debugger$Metadata$decodeTypes));
var $elm$browser$Debugger$Metadata$ProblemType = F2(
	function (name, problems) {
		return {name: name, problems: problems};
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$contains = _String_contains;
var $elm$browser$Debugger$Metadata$hasProblem = F2(
	function (tipe, _v0) {
		var problem = _v0.a;
		var token = _v0.b;
		return A2($elm$core$String$contains, token, tipe) ? $elm$core$Maybe$Just(problem) : $elm$core$Maybe$Nothing;
	});
var $elm$browser$Debugger$Metadata$Decoder = {$: 'Decoder'};
var $elm$browser$Debugger$Metadata$Function = {$: 'Function'};
var $elm$browser$Debugger$Metadata$Process = {$: 'Process'};
var $elm$browser$Debugger$Metadata$Program = {$: 'Program'};
var $elm$browser$Debugger$Metadata$Request = {$: 'Request'};
var $elm$browser$Debugger$Metadata$Socket = {$: 'Socket'};
var $elm$browser$Debugger$Metadata$Task = {$: 'Task'};
var $elm$browser$Debugger$Metadata$VirtualDom = {$: 'VirtualDom'};
var $elm$browser$Debugger$Metadata$problemTable = _List_fromArray(
	[
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Function, '->'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Decoder, 'Json.Decode.Decoder'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Task, 'Task.Task'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Process, 'Process.Id'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Socket, 'WebSocket.LowLevel.WebSocket'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Request, 'Http.Request'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Program, 'Platform.Program'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Node'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Attribute')
	]);
var $elm$browser$Debugger$Metadata$findProblems = function (tipe) {
	return A2(
		$elm$core$List$filterMap,
		$elm$browser$Debugger$Metadata$hasProblem(tipe),
		$elm$browser$Debugger$Metadata$problemTable);
};
var $elm$browser$Debugger$Metadata$collectBadAliases = F3(
	function (name, _v0, list) {
		var tipe = _v0.tipe;
		var _v1 = $elm$browser$Debugger$Metadata$findProblems(tipe);
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $elm$browser$Debugger$Metadata$collectBadUnions = F3(
	function (name, _v0, list) {
		var tags = _v0.tags;
		var _v1 = A2(
			$elm$core$List$concatMap,
			$elm$browser$Debugger$Metadata$findProblems,
			$elm$core$List$concat(
				$elm$core$Dict$values(tags)));
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$browser$Debugger$Metadata$isPortable = function (_v0) {
	var types = _v0.types;
	var badAliases = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadAliases, _List_Nil, types.aliases);
	var _v1 = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadUnions, badAliases, types.unions);
	if (!_v1.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var problems = _v1;
		return $elm$core$Maybe$Just(
			A2($elm$browser$Debugger$Metadata$Error, types.message, problems));
	}
};
var $elm$browser$Debugger$Metadata$decode = function (value) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $elm$browser$Debugger$Metadata$decoder, value);
	if (_v0.$ === 'Err') {
		return $elm$core$Result$Err(
			A2($elm$browser$Debugger$Metadata$Error, 'The compiler is generating bad metadata. This is a compiler bug!', _List_Nil));
	} else {
		var metadata = _v0.a;
		var _v1 = $elm$browser$Debugger$Metadata$isPortable(metadata);
		if (_v1.$ === 'Nothing') {
			return $elm$core$Result$Ok(metadata);
		} else {
			var error = _v1.a;
			return $elm$core$Result$Err(error);
		}
	}
};
var $elm$browser$Debugger$History$History = F3(
	function (snapshots, recent, numMessages) {
		return {numMessages: numMessages, recent: recent, snapshots: snapshots};
	});
var $elm$browser$Debugger$History$RecentHistory = F3(
	function (model, messages, numMessages) {
		return {messages: messages, model: model, numMessages: numMessages};
	});
var $elm$browser$Debugger$History$empty = function (model) {
	return A3(
		$elm$browser$Debugger$History$History,
		$elm$core$Array$empty,
		A3($elm$browser$Debugger$History$RecentHistory, model, _List_Nil, 0),
		0);
};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $elm$browser$Debugger$Expando$initHelp = F2(
	function (isOuter, expando) {
		switch (expando.$) {
			case 'S':
				return expando;
			case 'Primitive':
				return expando;
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var items = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Sequence,
					seqType,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						items)) : (($elm$core$List$length(items) <= 8) ? A3($elm$browser$Debugger$Expando$Sequence, seqType, false, items) : expando);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Dictionary,
					false,
					A2(
						$elm$core$List$map,
						function (_v1) {
							var k = _v1.a;
							var v = _v1.b;
							return _Utils_Tuple2(
								k,
								A2($elm$browser$Debugger$Expando$initHelp, false, v));
						},
						keyValuePairs)) : (($elm$core$List$length(keyValuePairs) <= 8) ? A2($elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs) : expando);
			case 'Record':
				var isClosed = expando.a;
				var entries = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Record,
					false,
					A2(
						$elm$core$Dict$map,
						F2(
							function (_v2, v) {
								return A2($elm$browser$Debugger$Expando$initHelp, false, v);
							}),
						entries)) : (($elm$core$Dict$size(entries) <= 4) ? A2($elm$browser$Debugger$Expando$Record, false, entries) : expando);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var args = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Constructor,
					maybeName,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						args)) : (($elm$core$List$length(args) <= 4) ? A3($elm$browser$Debugger$Expando$Constructor, maybeName, false, args) : expando);
		}
	});
var $elm$browser$Debugger$Expando$init = function (value) {
	return A2(
		$elm$browser$Debugger$Expando$initHelp,
		true,
		_Debugger_init(value));
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$browser$Debugger$Overlay$None = {$: 'None'};
var $elm$browser$Debugger$Overlay$none = $elm$browser$Debugger$Overlay$None;
var $elm$browser$Debugger$Main$wrapInit = F4(
	function (metadata, popout, init, flags) {
		var _v0 = init(flags);
		var userModel = _v0.a;
		var userCommands = _v0.b;
		return _Utils_Tuple2(
			{
				expandoModel: $elm$browser$Debugger$Expando$init(userModel),
				expandoMsg: $elm$browser$Debugger$Expando$init(_Utils_Tuple0),
				history: $elm$browser$Debugger$History$empty(userModel),
				layout: A3($elm$browser$Debugger$Main$Horizontal, $elm$browser$Debugger$Main$Static, 0.3, 0.5),
				metadata: $elm$browser$Debugger$Metadata$decode(metadata),
				overlay: $elm$browser$Debugger$Overlay$none,
				popout: popout,
				state: $elm$browser$Debugger$Main$Running(userModel)
			},
			A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCommands));
	});
var $elm$browser$Debugger$Main$getLatestModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.c;
		return model;
	}
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$browser$Debugger$Main$wrapSubs = F2(
	function (subscriptions, model) {
		return A2(
			$elm$core$Platform$Sub$map,
			$elm$browser$Debugger$Main$UserMsg,
			subscriptions(
				$elm$browser$Debugger$Main$getLatestModel(model.state)));
	});
var $elm$browser$Debugger$Main$Moving = {$: 'Moving'};
var $elm$browser$Debugger$Main$Paused = F5(
	function (a, b, c, d, e) {
		return {$: 'Paused', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$browser$Debugger$History$Snapshot = F2(
	function (model, messages) {
		return {messages: messages, model: model};
	});
var $elm$browser$Debugger$History$addRecent = F3(
	function (msg, newModel, _v0) {
		var model = _v0.model;
		var messages = _v0.messages;
		var numMessages = _v0.numMessages;
		return _Utils_eq(numMessages, $elm$browser$Debugger$History$maxSnapshotSize) ? _Utils_Tuple2(
			$elm$core$Maybe$Just(
				A2(
					$elm$browser$Debugger$History$Snapshot,
					model,
					$elm$core$Array$fromList(messages))),
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				newModel,
				_List_fromArray(
					[msg]),
				1)) : _Utils_Tuple2(
			$elm$core$Maybe$Nothing,
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				model,
				A2($elm$core$List$cons, msg, messages),
				numMessages + 1));
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $elm$browser$Debugger$History$add = F3(
	function (msg, model, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var _v1 = A3($elm$browser$Debugger$History$addRecent, msg, model, recent);
		if (_v1.a.$ === 'Just') {
			var snapshot = _v1.a.a;
			var newRecent = _v1.b;
			return A3(
				$elm$browser$Debugger$History$History,
				A2($elm$core$Array$push, snapshot, snapshots),
				newRecent,
				numMessages + 1);
		} else {
			var _v2 = _v1.a;
			var newRecent = _v1.b;
			return A3($elm$browser$Debugger$History$History, snapshots, newRecent, numMessages + 1);
		}
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$browser$Debugger$Overlay$BadImport = function (a) {
	return {$: 'BadImport', a: a};
};
var $elm$browser$Debugger$Overlay$RiskyImport = F2(
	function (a, b) {
		return {$: 'RiskyImport', a: a, b: b};
	});
var $elm$browser$Debugger$Report$VersionChanged = F2(
	function (a, b) {
		return {$: 'VersionChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$MessageChanged = F2(
	function (a, b) {
		return {$: 'MessageChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$SomethingChanged = function (a) {
	return {$: 'SomethingChanged', a: a};
};
var $elm$browser$Debugger$Report$AliasChange = function (a) {
	return {$: 'AliasChange', a: a};
};
var $elm$browser$Debugger$Metadata$checkAlias = F4(
	function (name, old, _new, changes) {
		return (_Utils_eq(old.tipe, _new.tipe) && _Utils_eq(old.args, _new.args)) ? changes : A2(
			$elm$core$List$cons,
			$elm$browser$Debugger$Report$AliasChange(name),
			changes);
	});
var $elm$browser$Debugger$Report$UnionChange = F2(
	function (a, b) {
		return {$: 'UnionChange', a: a, b: b};
	});
var $elm$browser$Debugger$Metadata$addTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				added: A2($elm$core$List$cons, tag, changes.added)
			});
	});
var $elm$browser$Debugger$Metadata$checkTag = F4(
	function (tag, old, _new, changes) {
		return _Utils_eq(old, _new) ? changes : _Utils_update(
			changes,
			{
				changed: A2($elm$core$List$cons, tag, changes.changed)
			});
	});
var $elm$browser$Debugger$Report$TagChanges = F4(
	function (removed, changed, added, argsMatch) {
		return {added: added, argsMatch: argsMatch, changed: changed, removed: removed};
	});
var $elm$browser$Debugger$Report$emptyTagChanges = function (argsMatch) {
	return A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, argsMatch);
};
var $elm$browser$Debugger$Report$hasTagChanges = function (tagChanges) {
	return _Utils_eq(
		tagChanges,
		A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, true));
};
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Debugger$Metadata$removeTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				removed: A2($elm$core$List$cons, tag, changes.removed)
			});
	});
var $elm$browser$Debugger$Metadata$checkUnion = F4(
	function (name, old, _new, changes) {
		var tagChanges = A6(
			$elm$core$Dict$merge,
			$elm$browser$Debugger$Metadata$removeTag,
			$elm$browser$Debugger$Metadata$checkTag,
			$elm$browser$Debugger$Metadata$addTag,
			old.tags,
			_new.tags,
			$elm$browser$Debugger$Report$emptyTagChanges(
				_Utils_eq(old.args, _new.args)));
		return $elm$browser$Debugger$Report$hasTagChanges(tagChanges) ? changes : A2(
			$elm$core$List$cons,
			A2($elm$browser$Debugger$Report$UnionChange, name, tagChanges),
			changes);
	});
var $elm$browser$Debugger$Metadata$ignore = F3(
	function (key, value, report) {
		return report;
	});
var $elm$browser$Debugger$Metadata$checkTypes = F2(
	function (old, _new) {
		return (!_Utils_eq(old.message, _new.message)) ? A2($elm$browser$Debugger$Report$MessageChanged, old.message, _new.message) : $elm$browser$Debugger$Report$SomethingChanged(
			A6(
				$elm$core$Dict$merge,
				$elm$browser$Debugger$Metadata$ignore,
				$elm$browser$Debugger$Metadata$checkUnion,
				$elm$browser$Debugger$Metadata$ignore,
				old.unions,
				_new.unions,
				A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$ignore, $elm$browser$Debugger$Metadata$checkAlias, $elm$browser$Debugger$Metadata$ignore, old.aliases, _new.aliases, _List_Nil)));
	});
var $elm$browser$Debugger$Metadata$check = F2(
	function (old, _new) {
		return (!_Utils_eq(old.versions.elm, _new.versions.elm)) ? A2($elm$browser$Debugger$Report$VersionChanged, old.versions.elm, _new.versions.elm) : A2($elm$browser$Debugger$Metadata$checkTypes, old.types, _new.types);
	});
var $elm$browser$Debugger$Report$CorruptHistory = {$: 'CorruptHistory'};
var $elm$browser$Debugger$Overlay$corruptImport = $elm$browser$Debugger$Overlay$BadImport($elm$browser$Debugger$Report$CorruptHistory);
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$browser$Debugger$Report$Fine = {$: 'Fine'};
var $elm$browser$Debugger$Report$Impossible = {$: 'Impossible'};
var $elm$browser$Debugger$Report$Risky = {$: 'Risky'};
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Report$some = function (list) {
	return !$elm$core$List$isEmpty(list);
};
var $elm$browser$Debugger$Report$evaluateChange = function (change) {
	if (change.$ === 'AliasChange') {
		return $elm$browser$Debugger$Report$Impossible;
	} else {
		var removed = change.b.removed;
		var changed = change.b.changed;
		var added = change.b.added;
		var argsMatch = change.b.argsMatch;
		return ((!argsMatch) || ($elm$browser$Debugger$Report$some(changed) || $elm$browser$Debugger$Report$some(removed))) ? $elm$browser$Debugger$Report$Impossible : ($elm$browser$Debugger$Report$some(added) ? $elm$browser$Debugger$Report$Risky : $elm$browser$Debugger$Report$Fine);
	}
};
var $elm$browser$Debugger$Report$worstCase = F2(
	function (status, statusList) {
		worstCase:
		while (true) {
			if (!statusList.b) {
				return status;
			} else {
				switch (statusList.a.$) {
					case 'Impossible':
						var _v1 = statusList.a;
						return $elm$browser$Debugger$Report$Impossible;
					case 'Risky':
						var _v2 = statusList.a;
						var rest = statusList.b;
						var $temp$status = $elm$browser$Debugger$Report$Risky,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
					default:
						var _v3 = statusList.a;
						var rest = statusList.b;
						var $temp$status = status,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
				}
			}
		}
	});
var $elm$browser$Debugger$Report$evaluate = function (report) {
	switch (report.$) {
		case 'CorruptHistory':
			return $elm$browser$Debugger$Report$Impossible;
		case 'VersionChanged':
			return $elm$browser$Debugger$Report$Impossible;
		case 'MessageChanged':
			return $elm$browser$Debugger$Report$Impossible;
		default:
			var changes = report.a;
			return A2(
				$elm$browser$Debugger$Report$worstCase,
				$elm$browser$Debugger$Report$Fine,
				A2($elm$core$List$map, $elm$browser$Debugger$Report$evaluateChange, changes));
	}
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $elm$browser$Debugger$Overlay$uploadDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return _Utils_Tuple2(x, y);
		}),
	A2($elm$json$Json$Decode$field, 'metadata', $elm$browser$Debugger$Metadata$decoder),
	A2($elm$json$Json$Decode$field, 'history', $elm$json$Json$Decode$value));
var $elm$browser$Debugger$Overlay$assessImport = F2(
	function (metadata, jsonString) {
		var _v0 = A2($elm$json$Json$Decode$decodeString, $elm$browser$Debugger$Overlay$uploadDecoder, jsonString);
		if (_v0.$ === 'Err') {
			return $elm$core$Result$Err($elm$browser$Debugger$Overlay$corruptImport);
		} else {
			var _v1 = _v0.a;
			var foreignMetadata = _v1.a;
			var rawHistory = _v1.b;
			var report = A2($elm$browser$Debugger$Metadata$check, foreignMetadata, metadata);
			var _v2 = $elm$browser$Debugger$Report$evaluate(report);
			switch (_v2.$) {
				case 'Impossible':
					return $elm$core$Result$Err(
						$elm$browser$Debugger$Overlay$BadImport(report));
				case 'Risky':
					return $elm$core$Result$Err(
						A2($elm$browser$Debugger$Overlay$RiskyImport, report, rawHistory));
				default:
					return $elm$core$Result$Ok(rawHistory);
			}
		}
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$browser$Debugger$Overlay$close = F2(
	function (msg, state) {
		switch (state.$) {
			case 'None':
				return $elm$core$Maybe$Nothing;
			case 'BadMetadata':
				return $elm$core$Maybe$Nothing;
			case 'BadImport':
				return $elm$core$Maybe$Nothing;
			default:
				var rawHistory = state.b;
				if (msg.$ === 'Cancel') {
					return $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Just(rawHistory);
				}
		}
	});
var $elm$browser$Debugger$History$elmToJs = A2($elm$core$Basics$composeR, _Json_wrap, _Debugger_unsafeCoerce);
var $elm$browser$Debugger$History$encodeHelp = F2(
	function (snapshot, allMessages) {
		return A3($elm$core$Array$foldl, $elm$core$List$cons, allMessages, snapshot.messages);
	});
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$browser$Debugger$History$encode = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	return A2(
		$elm$json$Json$Encode$list,
		$elm$browser$Debugger$History$elmToJs,
		A3(
			$elm$core$Array$foldr,
			$elm$browser$Debugger$History$encodeHelp,
			$elm$core$List$reverse(recent.messages),
			snapshots));
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$browser$Debugger$Metadata$encodeAlias = function (_v0) {
	var args = _v0.args;
	var tipe = _v0.tipe;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(tipe))
			]));
};
var $elm$browser$Debugger$Metadata$encodeDict = F2(
	function (f, dict) {
		return $elm$json$Json$Encode$object(
			$elm$core$Dict$toList(
				A2(
					$elm$core$Dict$map,
					F2(
						function (key, value) {
							return f(value);
						}),
					dict)));
	});
var $elm$browser$Debugger$Metadata$encodeUnion = function (_v0) {
	var args = _v0.args;
	var tags = _v0.tags;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'tags',
				A2(
					$elm$browser$Debugger$Metadata$encodeDict,
					$elm$json$Json$Encode$list($elm$json$Json$Encode$string),
					tags))
			]));
};
var $elm$browser$Debugger$Metadata$encodeTypes = function (_v0) {
	var message = _v0.message;
	var unions = _v0.unions;
	var aliases = _v0.aliases;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'message',
				$elm$json$Json$Encode$string(message)),
				_Utils_Tuple2(
				'aliases',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeAlias, aliases)),
				_Utils_Tuple2(
				'unions',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeUnion, unions))
			]));
};
var $elm$browser$Debugger$Metadata$encodeVersions = function (_v0) {
	var elm = _v0.elm;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'elm',
				$elm$json$Json$Encode$string(elm))
			]));
};
var $elm$browser$Debugger$Metadata$encode = function (_v0) {
	var versions = _v0.versions;
	var types = _v0.types;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'versions',
				$elm$browser$Debugger$Metadata$encodeVersions(versions)),
				_Utils_Tuple2(
				'types',
				$elm$browser$Debugger$Metadata$encodeTypes(types))
			]));
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Debugger$Main$download = F2(
	function (metadata, history) {
		var historyLength = $elm$browser$Debugger$History$size(history);
		return A2(
			$elm$core$Task$perform,
			function (_v0) {
				return $elm$browser$Debugger$Main$NoOp;
			},
			A2(
				_Debugger_download,
				historyLength,
				_Json_unwrap(
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'metadata',
								$elm$browser$Debugger$Metadata$encode(metadata)),
								_Utils_Tuple2(
								'history',
								$elm$browser$Debugger$History$encode(history))
							])))));
	});
var $elm$browser$Debugger$Main$Vertical = F3(
	function (a, b, c) {
		return {$: 'Vertical', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Main$drag = F2(
	function (info, layout) {
		if (layout.$ === 'Horizontal') {
			var status = layout.a;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Horizontal, status, info.x / info.width, y);
		} else {
			var status = layout.a;
			var x = layout.b;
			return A3($elm$browser$Debugger$Main$Vertical, status, x, info.y / info.height);
		}
	});
var $elm$browser$Debugger$History$Stepping = F2(
	function (a, b) {
		return {$: 'Stepping', a: a, b: b};
	});
var $elm$browser$Debugger$History$Done = F2(
	function (a, b) {
		return {$: 'Done', a: a, b: b};
	});
var $elm$browser$Debugger$History$getHelp = F3(
	function (update, msg, getResult) {
		if (getResult.$ === 'Done') {
			return getResult;
		} else {
			var n = getResult.a;
			var model = getResult.b;
			return (!n) ? A2(
				$elm$browser$Debugger$History$Done,
				msg,
				A2(update, msg, model).a) : A2(
				$elm$browser$Debugger$History$Stepping,
				n - 1,
				A2(update, msg, model).a);
		}
	});
var $elm$browser$Debugger$History$undone = function (getResult) {
	undone:
	while (true) {
		if (getResult.$ === 'Done') {
			var msg = getResult.a;
			var model = getResult.b;
			return _Utils_Tuple2(model, msg);
		} else {
			var $temp$getResult = getResult;
			getResult = $temp$getResult;
			continue undone;
		}
	}
};
var $elm$browser$Debugger$History$get = F3(
	function (update, index, history) {
		get:
		while (true) {
			var recent = history.recent;
			var snapshotMax = history.numMessages - recent.numMessages;
			if (_Utils_cmp(index, snapshotMax) > -1) {
				return $elm$browser$Debugger$History$undone(
					A3(
						$elm$core$List$foldr,
						$elm$browser$Debugger$History$getHelp(update),
						A2($elm$browser$Debugger$History$Stepping, index - snapshotMax, recent.model),
						recent.messages));
			} else {
				var _v0 = A2($elm$core$Array$get, (index / $elm$browser$Debugger$History$maxSnapshotSize) | 0, history.snapshots);
				if (_v0.$ === 'Nothing') {
					var $temp$update = update,
						$temp$index = index,
						$temp$history = history;
					update = $temp$update;
					index = $temp$index;
					history = $temp$history;
					continue get;
				} else {
					var model = _v0.a.model;
					var messages = _v0.a.messages;
					return $elm$browser$Debugger$History$undone(
						A3(
							$elm$core$Array$foldr,
							$elm$browser$Debugger$History$getHelp(update),
							A2($elm$browser$Debugger$History$Stepping, index % $elm$browser$Debugger$History$maxSnapshotSize, model),
							messages));
				}
			}
		}
	});
var $elm$browser$Debugger$History$getRecentMsg = function (history) {
	getRecentMsg:
	while (true) {
		var _v0 = history.recent.messages;
		if (!_v0.b) {
			var $temp$history = history;
			history = $temp$history;
			continue getRecentMsg;
		} else {
			var first = _v0.a;
			return first;
		}
	}
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$browser$Debugger$Expando$mergeDictHelp = F3(
	function (oldDict, key, value) {
		var _v12 = A2($elm$core$Dict$get, key, oldDict);
		if (_v12.$ === 'Nothing') {
			return value;
		} else {
			var oldValue = _v12.a;
			return A2($elm$browser$Debugger$Expando$mergeHelp, oldValue, value);
		}
	});
var $elm$browser$Debugger$Expando$mergeHelp = F2(
	function (old, _new) {
		var _v3 = _Utils_Tuple2(old, _new);
		_v3$6:
		while (true) {
			switch (_v3.b.$) {
				case 'S':
					return _new;
				case 'Primitive':
					return _new;
				case 'Sequence':
					if (_v3.a.$ === 'Sequence') {
						var _v4 = _v3.a;
						var isClosed = _v4.b;
						var oldValues = _v4.c;
						var _v5 = _v3.b;
						var seqType = _v5.a;
						var newValues = _v5.c;
						return A3(
							$elm$browser$Debugger$Expando$Sequence,
							seqType,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
				case 'Dictionary':
					if (_v3.a.$ === 'Dictionary') {
						var _v6 = _v3.a;
						var isClosed = _v6.a;
						var _v7 = _v3.b;
						var keyValuePairs = _v7.b;
						return A2($elm$browser$Debugger$Expando$Dictionary, isClosed, keyValuePairs);
					} else {
						break _v3$6;
					}
				case 'Record':
					if (_v3.a.$ === 'Record') {
						var _v8 = _v3.a;
						var isClosed = _v8.a;
						var oldDict = _v8.b;
						var _v9 = _v3.b;
						var newDict = _v9.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A2(
								$elm$core$Dict$map,
								$elm$browser$Debugger$Expando$mergeDictHelp(oldDict),
								newDict));
					} else {
						break _v3$6;
					}
				default:
					if (_v3.a.$ === 'Constructor') {
						var _v10 = _v3.a;
						var isClosed = _v10.b;
						var oldValues = _v10.c;
						var _v11 = _v3.b;
						var maybeName = _v11.a;
						var newValues = _v11.c;
						return A3(
							$elm$browser$Debugger$Expando$Constructor,
							maybeName,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
			}
		}
		return _new;
	});
var $elm$browser$Debugger$Expando$mergeListHelp = F2(
	function (olds, news) {
		var _v0 = _Utils_Tuple2(olds, news);
		if (!_v0.a.b) {
			return news;
		} else {
			if (!_v0.b.b) {
				return news;
			} else {
				var _v1 = _v0.a;
				var x = _v1.a;
				var xs = _v1.b;
				var _v2 = _v0.b;
				var y = _v2.a;
				var ys = _v2.b;
				return A2(
					$elm$core$List$cons,
					A2($elm$browser$Debugger$Expando$mergeHelp, x, y),
					A2($elm$browser$Debugger$Expando$mergeListHelp, xs, ys));
			}
		}
	});
var $elm$browser$Debugger$Expando$merge = F2(
	function (value, expando) {
		return A2(
			$elm$browser$Debugger$Expando$mergeHelp,
			expando,
			_Debugger_init(value));
	});
var $elm$browser$Debugger$Main$jumpUpdate = F3(
	function (update, index, model) {
		var history = $elm$browser$Debugger$Main$cachedHistory(model);
		var currentMsg = $elm$browser$Debugger$History$getRecentMsg(history);
		var currentModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
		var _v0 = A3($elm$browser$Debugger$History$get, update, index, history);
		var indexModel = _v0.a;
		var indexMsg = _v0.b;
		return _Utils_update(
			model,
			{
				expandoModel: A2($elm$browser$Debugger$Expando$merge, indexModel, model.expandoModel),
				expandoMsg: A2($elm$browser$Debugger$Expando$merge, indexMsg, model.expandoMsg),
				state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, currentModel, currentMsg, history)
			});
	});
var $elm$browser$Debugger$History$jsToElm = A2($elm$core$Basics$composeR, _Json_unwrap, _Debugger_unsafeCoerce);
var $elm$browser$Debugger$History$decoder = F2(
	function (initialModel, update) {
		var addMessage = F2(
			function (rawMsg, _v0) {
				var model = _v0.a;
				var history = _v0.b;
				var msg = $elm$browser$Debugger$History$jsToElm(rawMsg);
				return _Utils_Tuple2(
					A2(update, msg, model),
					A3($elm$browser$Debugger$History$add, msg, model, history));
			});
		var updateModel = function (rawMsgs) {
			return A3(
				$elm$core$List$foldl,
				addMessage,
				_Utils_Tuple2(
					initialModel,
					$elm$browser$Debugger$History$empty(initialModel)),
				rawMsgs);
		};
		return A2(
			$elm$json$Json$Decode$map,
			updateModel,
			$elm$json$Json$Decode$list($elm$json$Json$Decode$value));
	});
var $elm$browser$Debugger$History$getInitialModel = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	var _v1 = A2($elm$core$Array$get, 0, snapshots);
	if (_v1.$ === 'Just') {
		var model = _v1.a.model;
		return model;
	} else {
		return recent.model;
	}
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$browser$Debugger$Main$loadNewHistory = F3(
	function (rawHistory, update, model) {
		var pureUserUpdate = F2(
			function (msg, userModel) {
				return A2(update, msg, userModel).a;
			});
		var initialUserModel = $elm$browser$Debugger$History$getInitialModel(model.history);
		var decoder = A2($elm$browser$Debugger$History$decoder, initialUserModel, pureUserUpdate);
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, rawHistory);
		if (_v0.$ === 'Err') {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{overlay: $elm$browser$Debugger$Overlay$corruptImport}),
				$elm$core$Platform$Cmd$none);
		} else {
			var _v1 = _v0.a;
			var latestUserModel = _v1.a;
			var newHistory = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						expandoModel: $elm$browser$Debugger$Expando$init(latestUserModel),
						expandoMsg: $elm$browser$Debugger$Expando$init(
							$elm$browser$Debugger$History$getRecentMsg(newHistory)),
						history: newHistory,
						overlay: $elm$browser$Debugger$Overlay$none,
						state: $elm$browser$Debugger$Main$Running(latestUserModel)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$scroll = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
		_Debugger_scroll(popout));
};
var $elm$browser$Debugger$Main$scrollTo = F2(
	function (id, popout) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
			A2(_Debugger_scrollTo, id, popout));
	});
var $elm$browser$Debugger$Main$setDragStatus = F2(
	function (status, layout) {
		if (layout.$ === 'Horizontal') {
			var x = layout.b;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Horizontal, status, x, y);
		} else {
			var x = layout.b;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Vertical, status, x, y);
		}
	});
var $elm$browser$Debugger$Main$swapLayout = function (layout) {
	if (layout.$ === 'Horizontal') {
		var s = layout.a;
		var x = layout.b;
		var y = layout.c;
		return A3($elm$browser$Debugger$Main$Vertical, s, x, y);
	} else {
		var s = layout.a;
		var x = layout.b;
		var y = layout.c;
		return A3($elm$browser$Debugger$Main$Horizontal, s, x, y);
	}
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$browser$Debugger$Expando$updateIndex = F3(
	function (n, func, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var x = list.a;
			var xs = list.b;
			return (n <= 0) ? A2(
				$elm$core$List$cons,
				func(x),
				xs) : A2(
				$elm$core$List$cons,
				x,
				A3($elm$browser$Debugger$Expando$updateIndex, n - 1, func, xs));
		}
	});
var $elm$browser$Debugger$Expando$update = F2(
	function (msg, value) {
		switch (value.$) {
			case 'S':
				return value;
			case 'Primitive':
				return value;
			case 'Sequence':
				var seqType = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Sequence, seqType, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v3 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Sequence,
								seqType,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
			case 'Dictionary':
				var isClosed = value.a;
				var keyValuePairs = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Dictionary, !isClosed, keyValuePairs);
					case 'Index':
						var redirect = msg.a;
						var index = msg.b;
						var subMsg = msg.c;
						switch (redirect.$) {
							case 'None':
								return value;
							case 'Key':
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v6) {
											var k = _v6.a;
											var v = _v6.b;
											return _Utils_Tuple2(
												A2($elm$browser$Debugger$Expando$update, subMsg, k),
												v);
										},
										keyValuePairs));
							default:
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v7) {
											var k = _v7.a;
											var v = _v7.b;
											return _Utils_Tuple2(
												k,
												A2($elm$browser$Debugger$Expando$update, subMsg, v));
										},
										keyValuePairs));
						}
					default:
						return value;
				}
			case 'Record':
				var isClosed = value.a;
				var valueDict = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Record, !isClosed, valueDict);
					case 'Index':
						return value;
					default:
						var field = msg.a;
						var subMsg = msg.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A3(
								$elm$core$Dict$update,
								field,
								$elm$browser$Debugger$Expando$updateField(subMsg),
								valueDict));
				}
			default:
				var maybeName = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Constructor, maybeName, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v10 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Constructor,
								maybeName,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
		}
	});
var $elm$browser$Debugger$Expando$updateField = F2(
	function (msg, maybeExpando) {
		if (maybeExpando.$ === 'Nothing') {
			return maybeExpando;
		} else {
			var expando = maybeExpando.a;
			return $elm$core$Maybe$Just(
				A2($elm$browser$Debugger$Expando$update, msg, expando));
		}
	});
var $elm$browser$Debugger$Main$Upload = function (a) {
	return {$: 'Upload', a: a};
};
var $elm$browser$Debugger$Main$upload = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$browser$Debugger$Main$Upload,
		_Debugger_upload(popout));
};
var $elm$browser$Debugger$Overlay$BadMetadata = function (a) {
	return {$: 'BadMetadata', a: a};
};
var $elm$browser$Debugger$Overlay$badMetadata = $elm$browser$Debugger$Overlay$BadMetadata;
var $elm$browser$Debugger$Main$withGoodMetadata = F2(
	function (model, func) {
		var _v0 = model.metadata;
		if (_v0.$ === 'Ok') {
			var metadata = _v0.a;
			return func(metadata);
		} else {
			var error = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						overlay: $elm$browser$Debugger$Overlay$badMetadata(error)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$wrapUpdate = F3(
	function (update, msg, model) {
		wrapUpdate:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				case 'UserMsg':
					var userMsg = msg.a;
					var userModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
					var newHistory = A3($elm$browser$Debugger$History$add, userMsg, userModel, model.history);
					var _v1 = A2(update, userMsg, userModel);
					var newUserModel = _v1.a;
					var userCmds = _v1.b;
					var commands = A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCmds);
					var _v2 = model.state;
					if (_v2.$ === 'Running') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expandoModel: A2($elm$browser$Debugger$Expando$merge, newUserModel, model.expandoModel),
									expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
									history: newHistory,
									state: $elm$browser$Debugger$Main$Running(newUserModel)
								}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										commands,
										$elm$browser$Debugger$Main$scroll(model.popout)
									])));
					} else {
						var index = _v2.a;
						var indexModel = _v2.b;
						var history = _v2.e;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									history: newHistory,
									state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, newUserModel, userMsg, history)
								}),
							commands);
					}
				case 'TweakExpandoMsg':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expandoMsg: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoMsg)
							}),
						$elm$core$Platform$Cmd$none);
				case 'TweakExpandoModel':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expandoModel: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoModel)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Resume':
					var _v3 = model.state;
					if (_v3.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var userModel = _v3.c;
						var userMsg = _v3.d;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expandoModel: A2($elm$browser$Debugger$Expando$merge, userModel, model.expandoModel),
									expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
									state: $elm$browser$Debugger$Main$Running(userModel)
								}),
							$elm$browser$Debugger$Main$scroll(model.popout));
					}
				case 'Jump':
					var index = msg.a;
					return _Utils_Tuple2(
						A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
						$elm$core$Platform$Cmd$none);
				case 'SliderJump':
					var index = msg.a;
					return _Utils_Tuple2(
						A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
						A2(
							$elm$browser$Debugger$Main$scrollTo,
							$elm$browser$Debugger$History$idForMessageIndex(index),
							model.popout));
				case 'Open':
					return _Utils_Tuple2(
						model,
						A2(
							$elm$core$Task$perform,
							$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
							_Debugger_open(model.popout)));
				case 'Up':
					var _v4 = model.state;
					if (_v4.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var i = _v4.a;
						var history = _v4.e;
						var targetIndex = i + 1;
						if (_Utils_cmp(
							targetIndex,
							$elm$browser$Debugger$History$size(history)) < 0) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$SliderJump(targetIndex),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$Resume,
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						}
					}
				case 'Down':
					var _v5 = model.state;
					if (_v5.$ === 'Running') {
						var $temp$update = update,
							$temp$msg = $elm$browser$Debugger$Main$Jump(
							$elm$browser$Debugger$History$size(model.history) - 1),
							$temp$model = model;
						update = $temp$update;
						msg = $temp$msg;
						model = $temp$model;
						continue wrapUpdate;
					} else {
						var index = _v5.a;
						if (index > 0) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$SliderJump(index - 1),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						}
					}
				case 'Import':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (_v6) {
							return _Utils_Tuple2(
								model,
								$elm$browser$Debugger$Main$upload(model.popout));
						});
				case 'Export':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							return _Utils_Tuple2(
								model,
								A2($elm$browser$Debugger$Main$download, metadata, model.history));
						});
				case 'Upload':
					var jsonString = msg.a;
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							var _v7 = A2($elm$browser$Debugger$Overlay$assessImport, metadata, jsonString);
							if (_v7.$ === 'Err') {
								var newOverlay = _v7.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{overlay: newOverlay}),
									$elm$core$Platform$Cmd$none);
							} else {
								var rawHistory = _v7.a;
								return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
							}
						});
				case 'OverlayMsg':
					var overlayMsg = msg.a;
					var _v8 = A2($elm$browser$Debugger$Overlay$close, overlayMsg, model.overlay);
					if (_v8.$ === 'Nothing') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{overlay: $elm$browser$Debugger$Overlay$none}),
							$elm$core$Platform$Cmd$none);
					} else {
						var rawHistory = _v8.a;
						return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
					}
				case 'SwapLayout':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: $elm$browser$Debugger$Main$swapLayout(model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				case 'DragStart':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Moving, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Drag':
					var info = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$drag, info, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				default:
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Static, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$browser$Browser$element = _Browser_element;
var $author$project$Haskelite$Editing = function (a) {
	return {$: 'Editing', a: a};
};
var $author$project$Haskelite$Panic = function (a) {
	return {$: 'Panic', a: a};
};
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm_community$list_extra$List$Extra$groupWhile = F2(
	function (isSameGroup, items) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					if (!acc.b) {
						return _List_fromArray(
							[
								_Utils_Tuple2(x, _List_Nil)
							]);
					} else {
						var _v1 = acc.a;
						var y = _v1.a;
						var restOfGroup = _v1.b;
						var groups = acc.b;
						return A2(isSameGroup, x, y) ? A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								x,
								A2($elm$core$List$cons, y, restOfGroup)),
							groups) : A2(
							$elm$core$List$cons,
							_Utils_Tuple2(x, _List_Nil),
							acc);
					}
				}),
			_List_Nil,
			items);
	});
var $author$project$HsParser$problemToString = function (prob) {
	switch (prob.$) {
		case 'Expecting':
			var s = prob.a;
			return s;
		case 'ExpectingInt':
			return 'integer';
		case 'ExpectingVariable':
			return 'variable';
		case 'ExpectingSymbol':
			var s = prob.a;
			return s;
		case 'ExpectingKeyword':
			var s = prob.a;
			return s;
		case 'ExpectingEnd':
			return 'end of input';
		case 'Problem':
			var s = prob.a;
			return s;
		default:
			return '?';
	}
};
var $author$project$HsParser$deadEndsToString = function (deadEnds) {
	var groups = A2(
		$elm_community$list_extra$List$Extra$groupWhile,
		F2(
			function (a, b) {
				return _Utils_eq(a.row, b.row) && _Utils_eq(a.col, b.col);
			}),
		deadEnds);
	return A2(
		$elm$core$String$join,
		'; ',
		A2(
			$elm$core$List$map,
			function (_v0) {
				var a = _v0.a;
				var r = _v0.b;
				return 'line ' + ($elm$core$String$fromInt(a.row) + (',' + ('col ' + ($elm$core$String$fromInt(a.col) + (': ' + ('expecting ' + A2(
					$elm$core$String$join,
					', ',
					$elm$core$Set$toList(
						$elm$core$Set$fromList(
							A2(
								$elm$core$List$map,
								function (d) {
									return $author$project$HsParser$problemToString(d.problem);
								},
								A2($elm$core$List$cons, a, r)))))))))));
			},
			groups));
};
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (_v0.$ === 'Ok') {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $elm$parser$Parser$ExpectingEnd = {$: 'ExpectingEnd'};
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$parser$Parser$Advanced$end = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return _Utils_eq(
				$elm$core$String$length(s.src),
				s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $author$project$AST$App = F2(
	function (a, b) {
		return {$: 'App', a: a, b: b};
	});
var $author$project$AST$BinaryOp = F3(
	function (a, b, c) {
		return {$: 'BinaryOp', a: a, b: b, c: c};
	});
var $author$project$AST$Case = F2(
	function (a, b) {
		return {$: 'Case', a: a, b: b};
	});
var $author$project$AST$Char = function (a) {
	return {$: 'Char', a: a};
};
var $author$project$AST$Cons = F3(
	function (a, b, c) {
		return {$: 'Cons', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Forbidden = {$: 'Forbidden'};
var $author$project$AST$IfThenElse = F3(
	function (a, b, c) {
		return {$: 'IfThenElse', a: a, b: b, c: c};
	});
var $author$project$AST$Let = F2(
	function (a, b) {
		return {$: 'Let', a: a, b: b};
	});
var $author$project$AST$Number = function (a) {
	return {$: 'Number', a: a};
};
var $author$project$AST$Return = F2(
	function (a, b) {
		return {$: 'Return', a: a, b: b};
	});
var $author$project$AST$Var = function (a) {
	return {$: 'Var', a: a};
};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0.a;
	return $elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 'Bad') {
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _v1.b;
				var s1 = _v1.c;
				return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $elm$parser$Parser$UnexpectedChar = {$: 'UnexpectedChar'};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $elm$parser$Parser$Problem = function (a) {
	return {$: 'Problem', a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $author$project$HsParser$getChompedChar = function (p) {
	return A2(
		$elm$parser$Parser$andThen,
		function (s) {
			var _v0 = $elm$core$String$uncons(s);
			if ((_v0.$ === 'Just') && (_v0.a.b === '')) {
				var _v1 = _v0.a;
				var c = _v1.a;
				return $elm$parser$Parser$succeed(c);
			} else {
				return $elm$parser$Parser$problem('character literal');
			}
		},
		$elm$parser$Parser$getChompedString(p));
};
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $author$project$HsParser$integer = A2(
	$elm$parser$Parser$andThen,
	function (s) {
		var _v0 = $elm$core$String$toInt(s);
		if (_v0.$ === 'Nothing') {
			return $elm$parser$Parser$problem('integer');
		} else {
			var n = _v0.a;
			return $elm$parser$Parser$succeed(n);
		}
	},
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompWhile($elm$core$Char$isDigit)));
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $author$project$HsParser$escapeChar = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				_Utils_chr('\n')),
			$elm$parser$Parser$chompIf(
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr('n'));
				})),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				_Utils_chr('\t')),
			$elm$parser$Parser$chompIf(
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr('t'));
				})),
			$author$project$HsParser$getChompedChar(
			$elm$parser$Parser$chompIf(
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr('\\')) || (_Utils_eq(
						c,
						_Utils_chr('\'')) || _Utils_eq(
						c,
						_Utils_chr('\"')));
				})),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Char$fromCode),
			$author$project$HsParser$integer)
		]));
var $author$project$HsParser$character = function (delimiter) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$chompIf(
						function (c) {
							return _Utils_eq(
								c,
								_Utils_chr('\\'));
						})),
				$author$project$HsParser$escapeChar),
				$author$project$HsParser$getChompedChar(
				$elm$parser$Parser$chompIf(
					function (c) {
						return !_Utils_eq(c, delimiter);
					}))
			]));
};
var $author$project$HsParser$charLiteral = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$chompIf(
			function (c) {
				return _Utils_eq(
					c,
					_Utils_chr('\''));
			})),
	A2(
		$elm$parser$Parser$ignorer,
		$author$project$HsParser$character(
			_Utils_chr('\'')),
		$elm$parser$Parser$chompIf(
			function (c) {
				return _Utils_eq(
					c,
					_Utils_chr('\''));
			})));
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$AST$matchingWellformed = function (m) {
	matchingWellformed:
	while (true) {
		switch (m.$) {
			case 'Return':
				return $elm$core$Maybe$Just(0);
			case 'Fail':
				return $elm$core$Maybe$Just(0);
			case 'Match':
				var m1 = m.b;
				return A2(
					$elm$core$Maybe$andThen,
					function (a) {
						return $elm$core$Maybe$Just(1 + a);
					},
					$author$project$AST$matchingWellformed(m1));
			case 'Arg':
				var m1 = m.b;
				return A2(
					$elm$core$Maybe$andThen,
					function (a) {
						return $elm$core$Maybe$Just(
							A2($elm$core$Basics$max, 0, a - 1));
					},
					$author$project$AST$matchingWellformed(m1));
			case 'Alt':
				var m1 = m.a;
				var m2 = m.b;
				return A2(
					$elm$core$Maybe$andThen,
					function (a1) {
						return A2(
							$elm$core$Maybe$andThen,
							function (a2) {
								return _Utils_eq(a1, a2) ? $elm$core$Maybe$Just(a1) : $elm$core$Maybe$Nothing;
							},
							$author$project$AST$matchingWellformed(m2));
					},
					$author$project$AST$matchingWellformed(m1));
			default:
				var m2 = m.b;
				var $temp$m = m2;
				m = $temp$m;
				continue matchingWellformed;
		}
	}
};
var $author$project$HsParser$checkBind = function (bind) {
	var _v0 = bind.expr;
	if (_v0.$ === 'Lam') {
		var m = _v0.c;
		var _v1 = $author$project$AST$matchingWellformed(m);
		if (_v1.$ === 'Just') {
			return $elm$core$Result$Ok(_Utils_Tuple0);
		} else {
			return $elm$core$Result$Err('equations for ' + (bind.name + ' to have equal number of arguments'));
		}
	} else {
		return $elm$core$Result$Ok(_Utils_Tuple0);
	}
};
var $author$project$HsParser$checkBinds = function (binds) {
	if (!binds.b) {
		return $elm$core$Result$Ok(_Utils_Tuple0);
	} else {
		var first = binds.a;
		var rest = binds.b;
		return A2(
			$elm$core$Result$andThen,
			function (_v1) {
				return $author$project$HsParser$checkBinds(rest);
			},
			$author$project$HsParser$checkBind(first));
	}
};
var $author$project$AST$declName = function (decl) {
	switch (decl.$) {
		case 'TypeSig':
			var name = decl.a;
			return $elm$core$Maybe$Just(name);
		case 'Equation':
			var name = decl.a;
			return $elm$core$Maybe$Just(name);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$AST$Equation = F2(
	function (a, b) {
		return {$: 'Equation', a: a, b: b};
	});
var $author$project$AST$Fail = {$: 'Fail'};
var $author$project$AST$Alt = F2(
	function (a, b) {
		return {$: 'Alt', a: a, b: b};
	});
var $author$project$HsParser$joinAlt = F2(
	function (m1, m2) {
		if (m1.$ === 'Fail') {
			return m2;
		} else {
			if (m2.$ === 'Fail') {
				return m1;
			} else {
				return A2($author$project$AST$Alt, m1, m2);
			}
		}
	});
var $author$project$HsParser$joinDecl = F2(
	function (decl, match1) {
		if (decl.$ === 'Equation') {
			var match2 = decl.b;
			return A2($author$project$HsParser$joinAlt, match2, match1);
		} else {
			return match1;
		}
	});
var $author$project$HsParser$collectAlts = A2($elm$core$List$foldr, $author$project$HsParser$joinDecl, $author$project$AST$Fail);
var $author$project$AST$Lam = F3(
	function (a, b, c) {
		return {$: 'Lam', a: a, b: b, c: c};
	});
var $author$project$AST$matchingArity = function (m) {
	matchingArity:
	while (true) {
		switch (m.$) {
			case 'Return':
				return 0;
			case 'Fail':
				return 0;
			case 'Match':
				var m1 = m.b;
				return 1 + $author$project$AST$matchingArity(m1);
			case 'Arg':
				var m1 = m.b;
				return A2(
					$elm$core$Basics$max,
					0,
					$author$project$AST$matchingArity(m1) - 1);
			case 'Alt':
				var m1 = m.a;
				var $temp$m = m1;
				m = $temp$m;
				continue matchingArity;
			default:
				var m2 = m.b;
				var $temp$m = m2;
				m = $temp$m;
				continue matchingArity;
		}
	}
};
var $author$project$AST$lambda = F2(
	function (optname, m) {
		return A3(
			$author$project$AST$Lam,
			$author$project$AST$matchingArity(m),
			optname,
			m);
	});
var $author$project$HsParser$makeBind = function (pair) {
	switch (pair.a.$) {
		case 'TypeSig':
			var _v1 = pair.a;
			var id = _v1.a;
			var ty = _v1.b;
			var rest = pair.b;
			var m = $author$project$HsParser$collectAlts(rest);
			return $elm$core$Maybe$Just(
				{
					expr: A2(
						$author$project$AST$lambda,
						$elm$core$Maybe$Just(id),
						m),
					name: id,
					typeSig: $elm$core$Maybe$Just(ty)
				});
		case 'Equation':
			var _v2 = pair.a;
			var id = _v2.a;
			var match = _v2.b;
			var rest = pair.b;
			var m = $author$project$HsParser$collectAlts(
				A2(
					$elm$core$List$cons,
					A2($author$project$AST$Equation, id, match),
					rest));
			return $elm$core$Maybe$Just(
				{
					expr: A2(
						$author$project$AST$lambda,
						$elm$core$Maybe$Just(id),
						m),
					name: id,
					typeSig: $elm$core$Maybe$Nothing
				});
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$HsParser$collectBinds = function (decls) {
	return A2(
		$elm$core$List$filterMap,
		$author$project$HsParser$makeBind,
		A2(
			$elm_community$list_extra$List$Extra$groupWhile,
			F2(
				function (d1, d2) {
					return _Utils_eq(
						$author$project$AST$declName(d1),
						$author$project$AST$declName(d2));
				}),
			decls));
};
var $author$project$AST$AsP = F2(
	function (a, b) {
		return {$: 'AsP', a: a, b: b};
	});
var $author$project$AST$BangP = function (a) {
	return {$: 'BangP', a: a};
};
var $author$project$AST$CharP = function (a) {
	return {$: 'CharP', a: a};
};
var $author$project$AST$ConsP = F2(
	function (a, b) {
		return {$: 'ConsP', a: a, b: b};
	});
var $author$project$AST$DefaultP = {$: 'DefaultP'};
var $author$project$AST$NumberP = function (a) {
	return {$: 'NumberP', a: a};
};
var $author$project$AST$VarP = function (a) {
	return {$: 'VarP', a: a};
};
var $author$project$HsParser$reservedWords = $elm$core$Set$fromList(
	_List_fromArray(
		['if', 'then', 'else', 'let', 'in', 'case', 'of', 'where', 'data']));
var $elm$parser$Parser$ExpectingVariable = {$: 'ExpectingVariable'};
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {col: col, context: context, indent: indent, offset: offset, row: row, src: src};
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$variable = function (i) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
			if (_Utils_eq(firstOffset, -1)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting));
			} else {
				var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7($elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
				var name = A3($elm$core$String$slice, s.offset, s1.offset, s.src);
				return A2($elm$core$Set$member, name, i.reserved) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
			}
		});
};
var $elm$parser$Parser$variable = function (i) {
	return $elm$parser$Parser$Advanced$variable(
		{expecting: $elm$parser$Parser$ExpectingVariable, inner: i.inner, reserved: i.reserved, start: i.start});
};
var $author$project$HsParser$identifier = $elm$parser$Parser$variable(
	{
		inner: function (c) {
			return $elm$core$Char$isAlphaNum(c) || (_Utils_eq(
				c,
				_Utils_chr('_')) || _Utils_eq(
				c,
				_Utils_chr('\'')));
		},
		reserved: $author$project$HsParser$reservedWords,
		start: function (c) {
			return $elm$core$Char$isLower(c) || _Utils_eq(
				c,
				_Utils_chr('_'));
		}
	});
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = thunk(_Utils_Tuple0);
			var parse = _v0.a;
			return parse(s);
		});
};
var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
var $author$project$AST$listPattern = A2(
	$elm$core$List$foldr,
	F2(
		function (p, ps) {
			return A2(
				$author$project$AST$ConsP,
				':',
				_List_fromArray(
					[p, ps]));
		}),
	A2($author$project$AST$ConsP, '[]', _List_Nil));
var $elm_community$list_extra$List$Extra$unconsLast = function (list) {
	var _v0 = $elm$core$List$reverse(list);
	if (!_v0.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var last_ = _v0.a;
		var rest = _v0.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				last_,
				$elm$core$List$reverse(rest)));
	}
};
var $author$project$HsParser$makeInfixPattern = function (l) {
	var _v0 = $elm_community$list_extra$List$Extra$unconsLast(l);
	if (_v0.$ === 'Nothing') {
		return $elm$parser$Parser$problem('expecting a pattern');
	} else {
		var _v1 = _v0.a;
		var p = _v1.a;
		var ps = _v1.b;
		return $elm$parser$Parser$succeed(
			A3(
				$elm$core$List$foldr,
				F2(
					function (x, y) {
						return A2(
							$author$project$AST$ConsP,
							':',
							_List_fromArray(
								[x, y]));
					}),
				p,
				ps));
	}
};
var $author$project$HsParser$makeParensPattern = function (args) {
	if (!args.b) {
		return $elm$parser$Parser$succeed(
			A2($author$project$AST$ConsP, '()', _List_Nil));
	} else {
		if (!args.b.b) {
			var p = args.a;
			return $elm$parser$Parser$succeed(p);
		} else {
			if (!args.b.b.b) {
				var p1 = args.a;
				var _v1 = args.b;
				var p2 = _v1.a;
				return $elm$parser$Parser$succeed(
					A2($author$project$AST$ConsP, ',', args));
			} else {
				if (!args.b.b.b.b) {
					var p1 = args.a;
					var _v2 = args.b;
					var p2 = _v2.a;
					var _v3 = _v2.b;
					var p3 = _v3.a;
					return $elm$parser$Parser$succeed(
						A2($author$project$AST$ConsP, ',,', args));
				} else {
					if (!args.b.b.b.b.b) {
						var p1 = args.a;
						var _v4 = args.b;
						var p2 = _v4.a;
						var _v5 = _v4.b;
						var p3 = _v5.a;
						var _v6 = _v5.b;
						var p4 = _v6.a;
						return $elm$parser$Parser$succeed(
							A2($author$project$AST$ConsP, ',,,', args));
					} else {
						return $elm$parser$Parser$problem('tuple with maximum 4 elements');
					}
				}
			}
		}
	}
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$Advanced$revAlways = F2(
	function (_v0, b) {
		return b;
	});
var $elm$parser$Parser$Advanced$skip = F2(
	function (iParser, kParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$parser$Parser$Advanced$revAlways, iParser, kParser);
	});
var $elm$parser$Parser$Advanced$sequenceEndForbidden = F5(
	function (ender, ws, parseItem, sep, revItems) {
		var chompRest = function (item) {
			return A5(
				$elm$parser$Parser$Advanced$sequenceEndForbidden,
				ender,
				ws,
				parseItem,
				sep,
				A2($elm$core$List$cons, item, revItems));
		};
		return A2(
			$elm$parser$Parser$Advanced$skip,
			ws,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$skip,
						sep,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							A2(
								$elm$parser$Parser$Advanced$map,
								function (item) {
									return $elm$parser$Parser$Advanced$Loop(
										A2($elm$core$List$cons, item, revItems));
								},
								parseItem))),
						A2(
						$elm$parser$Parser$Advanced$map,
						function (_v0) {
							return $elm$parser$Parser$Advanced$Done(
								$elm$core$List$reverse(revItems));
						},
						ender)
					])));
	});
var $elm$parser$Parser$Advanced$sequenceEndMandatory = F4(
	function (ws, parseItem, sep, revItems) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (item) {
						return $elm$parser$Parser$Advanced$Loop(
							A2($elm$core$List$cons, item, revItems));
					},
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						parseItem,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							ws,
							A2($elm$parser$Parser$Advanced$ignorer, sep, ws)))),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(revItems));
					},
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))
				]));
	});
var $elm$parser$Parser$Advanced$sequenceEndOptional = F5(
	function (ender, ws, parseItem, sep, revItems) {
		var parseEnd = A2(
			$elm$parser$Parser$Advanced$map,
			function (_v0) {
				return $elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(revItems));
			},
			ender);
		return A2(
			$elm$parser$Parser$Advanced$skip,
			ws,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$skip,
						sep,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							$elm$parser$Parser$Advanced$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$Advanced$map,
										function (item) {
											return $elm$parser$Parser$Advanced$Loop(
												A2($elm$core$List$cons, item, revItems));
										},
										parseItem),
										parseEnd
									])))),
						parseEnd
					])));
	});
var $elm$parser$Parser$Advanced$sequenceEnd = F5(
	function (ender, ws, parseItem, sep, trailing) {
		var chompRest = function (item) {
			switch (trailing.$) {
				case 'Forbidden':
					return A2(
						$elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[item]),
						A4($elm$parser$Parser$Advanced$sequenceEndForbidden, ender, ws, parseItem, sep));
				case 'Optional':
					return A2(
						$elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[item]),
						A4($elm$parser$Parser$Advanced$sequenceEndOptional, ender, ws, parseItem, sep));
				default:
					return A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							A2(
								$elm$parser$Parser$Advanced$skip,
								sep,
								A2(
									$elm$parser$Parser$Advanced$skip,
									ws,
									A2(
										$elm$parser$Parser$Advanced$loop,
										_List_fromArray(
											[item]),
										A3($elm$parser$Parser$Advanced$sequenceEndMandatory, ws, parseItem, sep))))),
						ender);
			}
		};
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2($elm$parser$Parser$Advanced$andThen, chompRest, parseItem),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return _List_Nil;
					},
					ender)
				]));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$sequence = function (i) {
	return A2(
		$elm$parser$Parser$Advanced$skip,
		$elm$parser$Parser$Advanced$token(i.start),
		A2(
			$elm$parser$Parser$Advanced$skip,
			i.spaces,
			A5(
				$elm$parser$Parser$Advanced$sequenceEnd,
				$elm$parser$Parser$Advanced$token(i.end),
				i.spaces,
				i.item,
				$elm$parser$Parser$Advanced$token(i.separator),
				i.trailing)));
};
var $elm$parser$Parser$Advanced$Forbidden = {$: 'Forbidden'};
var $elm$parser$Parser$Advanced$Mandatory = {$: 'Mandatory'};
var $elm$parser$Parser$Advanced$Optional = {$: 'Optional'};
var $elm$parser$Parser$toAdvancedTrailing = function (trailing) {
	switch (trailing.$) {
		case 'Forbidden':
			return $elm$parser$Parser$Advanced$Forbidden;
		case 'Optional':
			return $elm$parser$Parser$Advanced$Optional;
		default:
			return $elm$parser$Parser$Advanced$Mandatory;
	}
};
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 'Expecting', a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$sequence = function (i) {
	return $elm$parser$Parser$Advanced$sequence(
		{
			end: $elm$parser$Parser$toToken(i.end),
			item: i.item,
			separator: $elm$parser$Parser$toToken(i.separator),
			spaces: i.spaces,
			start: $elm$parser$Parser$toToken(i.start),
			trailing: $elm$parser$Parser$toAdvancedTrailing(i.trailing)
		});
};
var $author$project$HsParser$spaces = $elm$parser$Parser$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' ')) || _Utils_eq(
			c,
			_Utils_chr('\t'));
	});
var $elm$core$String$fromList = _String_fromList;
var $author$project$HsParser$stringLiteral = A2(
	$elm$parser$Parser$keeper,
	$elm$parser$Parser$succeed($elm$core$String$fromList),
	$elm$parser$Parser$sequence(
		{
			end: '\"',
			item: $author$project$HsParser$character(
				_Utils_chr('\"')),
			separator: '',
			spaces: $elm$parser$Parser$succeed(_Utils_Tuple0),
			start: '\"',
			trailing: $elm$parser$Parser$Forbidden
		}));
var $elm$core$String$foldr = _String_foldr;
var $author$project$HsParser$stringPattern = A2(
	$elm$core$String$foldr,
	F2(
		function (x, y) {
			return A2(
				$author$project$AST$ConsP,
				':',
				_List_fromArray(
					[
						$author$project$AST$CharP(x),
						y
					]));
		}),
	A2($author$project$AST$ConsP, '[]', _List_Nil));
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $author$project$HsParser$upperIdentifier = $elm$parser$Parser$variable(
	{
		inner: function (c) {
			return $elm$core$Char$isAlphaNum(c) || (_Utils_eq(
				c,
				_Utils_chr('_')) || _Utils_eq(
				c,
				_Utils_chr('\'')));
		},
		reserved: $elm$core$Set$empty,
		start: function (c) {
			return $elm$core$Char$isUpper(c);
		}
	});
function $author$project$HsParser$cyclic$consPattern() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed($author$project$AST$ConsP),
					A2($elm$parser$Parser$ignorer, $author$project$HsParser$upperIdentifier, $author$project$HsParser$spaces)),
				$elm$parser$Parser$sequence(
					{
						end: '',
						item: $elm$parser$Parser$lazy(
							function (_v4) {
								return $author$project$HsParser$cyclic$delimitedPattern();
							}),
						separator: '',
						spaces: $author$project$HsParser$spaces,
						start: '',
						trailing: $elm$parser$Parser$Forbidden
					})),
				$author$project$HsParser$cyclic$delimitedPattern()
			]));
}
function $author$project$HsParser$cyclic$delimitedPattern() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$elm$parser$Parser$backtrackable(
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						$elm$parser$Parser$succeed($author$project$AST$AsP),
						A2(
							$elm$parser$Parser$ignorer,
							$author$project$HsParser$identifier,
							$elm$parser$Parser$symbol('@'))),
					$elm$parser$Parser$lazy(
						function (_v2) {
							return $author$project$HsParser$cyclic$delimitedPattern();
						}))),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					function (id) {
						return (id === '_') ? $author$project$AST$DefaultP : $author$project$AST$VarP(id);
					}),
				$author$project$HsParser$identifier),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($author$project$AST$BangP),
					$elm$parser$Parser$symbol('!')),
				$author$project$HsParser$identifier),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					function (c) {
						return A2($author$project$AST$ConsP, c, _List_Nil);
					}),
				$author$project$HsParser$upperIdentifier),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$AST$NumberP),
				$author$project$HsParser$integer),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$AST$CharP),
				$author$project$HsParser$charLiteral),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$HsParser$stringPattern),
				$author$project$HsParser$stringLiteral),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$AST$listPattern),
				$elm$parser$Parser$sequence(
					{
						end: ']',
						item: $elm$parser$Parser$lazy(
							function (_v3) {
								return $author$project$HsParser$cyclic$infixPattern();
							}),
						separator: ',',
						spaces: $author$project$HsParser$spaces,
						start: '[',
						trailing: $elm$parser$Parser$Forbidden
					})),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$symbol('(')),
				A2(
					$elm$parser$Parser$ignorer,
					$author$project$HsParser$cyclic$parensPattern(),
					$elm$parser$Parser$symbol(')')))
			]));
}
function $author$project$HsParser$cyclic$infixPattern() {
	return A2(
		$elm$parser$Parser$andThen,
		$author$project$HsParser$makeInfixPattern,
		$elm$parser$Parser$sequence(
			{
				end: '',
				item: $elm$parser$Parser$lazy(
					function (_v1) {
						return $author$project$HsParser$cyclic$consPattern();
					}),
				separator: ':',
				spaces: $author$project$HsParser$spaces,
				start: '',
				trailing: $elm$parser$Parser$Forbidden
			}));
}
function $author$project$HsParser$cyclic$parensPattern() {
	return A2(
		$elm$parser$Parser$andThen,
		$author$project$HsParser$makeParensPattern,
		$elm$parser$Parser$sequence(
			{
				end: '',
				item: $elm$parser$Parser$lazy(
					function (_v0) {
						return $author$project$HsParser$cyclic$infixPattern();
					}),
				separator: ',',
				spaces: $author$project$HsParser$spaces,
				start: '',
				trailing: $elm$parser$Parser$Forbidden
			}));
}
try {
	var $author$project$HsParser$consPattern = $author$project$HsParser$cyclic$consPattern();
	$author$project$HsParser$cyclic$consPattern = function () {
		return $author$project$HsParser$consPattern;
	};
	var $author$project$HsParser$delimitedPattern = $author$project$HsParser$cyclic$delimitedPattern();
	$author$project$HsParser$cyclic$delimitedPattern = function () {
		return $author$project$HsParser$delimitedPattern;
	};
	var $author$project$HsParser$infixPattern = $author$project$HsParser$cyclic$infixPattern();
	$author$project$HsParser$cyclic$infixPattern = function () {
		return $author$project$HsParser$infixPattern;
	};
	var $author$project$HsParser$parensPattern = $author$project$HsParser$cyclic$parensPattern();
	$author$project$HsParser$cyclic$parensPattern = function () {
		return $author$project$HsParser$parensPattern;
	};
} catch ($) {
	throw 'Some top-level definitions from `HsParser` are causing infinite recursion:\n\n  ┌─────┐\n  │    consPattern\n  │     ↓\n  │    delimitedPattern\n  │     ↓\n  │    infixPattern\n  │     ↓\n  │    parensPattern\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$HsParser$ensure = F3(
	function (pred, msg, v) {
		return pred(v) ? $elm$parser$Parser$succeed(v) : $elm$parser$Parser$problem(msg);
	});
var $elm_community$list_extra$List$Extra$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			if (!remaining.b) {
				return $elm$core$List$reverse(accumulator);
			} else {
				var first = remaining.a;
				var rest = remaining.b;
				var computedFirst = f(first);
				if (A2($elm$core$Set$member, computedFirst, existing)) {
					var $temp$f = f,
						$temp$existing = existing,
						$temp$remaining = rest,
						$temp$accumulator = accumulator;
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				} else {
					var $temp$f = f,
						$temp$existing = A2($elm$core$Set$insert, computedFirst, existing),
						$temp$remaining = rest,
						$temp$accumulator = A2($elm$core$List$cons, first, accumulator);
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$uniqueBy = F2(
	function (f, list) {
		return A4($elm_community$list_extra$List$Extra$uniqueHelp, f, $elm$core$Set$empty, list, _List_Nil);
	});
var $elm_community$list_extra$List$Extra$allDifferentBy = F2(
	function (f, list) {
		return _Utils_eq(
			$elm$core$List$length(list),
			$elm$core$List$length(
				A2($elm_community$list_extra$List$Extra$uniqueBy, f, list)));
	});
var $elm_community$list_extra$List$Extra$allDifferent = function (list) {
	return A2($elm_community$list_extra$List$Extra$allDifferentBy, $elm$core$Basics$identity, list);
};
var $author$project$AST$patternVars = function (patt) {
	switch (patt.$) {
		case 'VarP':
			var x = patt.a;
			return _List_fromArray(
				[x]);
		case 'BangP':
			var x = patt.a;
			return _List_fromArray(
				[x]);
		case 'ConsP':
			var c = patt.a;
			var ps = patt.b;
			return A2($elm$core$List$concatMap, $author$project$AST$patternVars, ps);
		case 'AsP':
			var x = patt.a;
			var p = patt.b;
			return A2(
				$elm$core$List$cons,
				x,
				$author$project$AST$patternVars(p));
		default:
			return _List_Nil;
	}
};
var $author$project$HsParser$distinctPatterns = function (ps) {
	return $elm_community$list_extra$List$Extra$allDifferent(
		A2($elm$core$List$concatMap, $author$project$AST$patternVars, ps));
};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$HsParser$equationLHS = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Tuple$pair),
		A2($elm$parser$Parser$ignorer, $author$project$HsParser$identifier, $author$project$HsParser$spaces)),
	A2(
		$elm$parser$Parser$andThen,
		A2($author$project$HsParser$ensure, $author$project$HsParser$distinctPatterns, 'distinct pattern variables'),
		$elm$parser$Parser$sequence(
			{end: '', item: $author$project$HsParser$delimitedPattern, separator: '', spaces: $author$project$HsParser$spaces, start: '', trailing: $elm$parser$Parser$Forbidden})));
var $elm$parser$Parser$Advanced$getOffset = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.offset, s);
	});
var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
var $elm$parser$Parser$Advanced$getSource = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.src, s);
	});
var $elm$parser$Parser$getSource = $elm$parser$Parser$Advanced$getSource;
var $author$project$HsParser$getParseChomped = function (parser) {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						F4(
							function (start, fun, end, src) {
								return fun(
									A3($elm$core$String$slice, start, end, src));
							})),
					$elm$parser$Parser$getOffset),
				parser),
			$elm$parser$Parser$getOffset),
		$elm$parser$Parser$getSource);
};
var $author$project$HsParser$getParseChomped_ = function (parser) {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						F4(
							function (start, v, end, src) {
								return _Utils_Tuple2(
									v,
									A3($elm$core$String$slice, start, end, src));
							})),
					$elm$parser$Parser$getOffset),
				parser),
			$elm$parser$Parser$getOffset),
		$elm$parser$Parser$getSource);
};
var $author$project$AST$operatorChar = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('+')) || (_Utils_eq(
		c,
		_Utils_chr('*')) || (_Utils_eq(
		c,
		_Utils_chr('-')) || (_Utils_eq(
		c,
		_Utils_chr('>')) || (_Utils_eq(
		c,
		_Utils_chr('<')) || (_Utils_eq(
		c,
		_Utils_chr(':')) || (_Utils_eq(
		c,
		_Utils_chr('=')) || (_Utils_eq(
		c,
		_Utils_chr('&')) || (_Utils_eq(
		c,
		_Utils_chr('|')) || (_Utils_eq(
		c,
		_Utils_chr('.')) || (_Utils_eq(
		c,
		_Utils_chr('/')) || (_Utils_eq(
		c,
		_Utils_chr('!')) || (_Utils_eq(
		c,
		_Utils_chr('^')) || (_Utils_eq(
		c,
		_Utils_chr('$')) || _Utils_eq(
		c,
		_Utils_chr('!')))))))))))))));
};
var $author$project$HsParser$operator = function (s) {
	return $elm$parser$Parser$backtrackable(
		A2(
			$elm$parser$Parser$andThen,
			function (r) {
				return _Utils_eq(s, r) ? $elm$parser$Parser$succeed(_Utils_Tuple0) : $elm$parser$Parser$problem('operator ' + s);
			},
			$elm$parser$Parser$getChompedString(
				$elm$parser$Parser$chompWhile($author$project$AST$operatorChar))));
};
var $author$project$HsParser$infixLeftCont = F3(
	function (operand, table, accum) {
		return $elm$parser$Parser$oneOf(
			_Utils_ap(
				A2(
					$elm$core$List$map,
					function (_v0) {
						var op = _v0.a;
						var func = _v0.b;
						return A2(
							$elm$parser$Parser$andThen,
							A2($author$project$HsParser$infixLeftCont, operand, table),
							A2(
								$elm$parser$Parser$keeper,
								A2(
									$elm$parser$Parser$ignorer,
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed(
											func(accum)),
										$author$project$HsParser$operator(op)),
									$author$project$HsParser$spaces),
								A2($elm$parser$Parser$ignorer, operand, $author$project$HsParser$spaces)));
					},
					table),
				_List_fromArray(
					[
						$elm$parser$Parser$succeed(accum)
					])));
	});
var $author$project$HsParser$infixLeft = F2(
	function (operand, table) {
		return A2(
			$elm$parser$Parser$andThen,
			A2($author$project$HsParser$infixLeftCont, operand, table),
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				A2($elm$parser$Parser$ignorer, operand, $author$project$HsParser$spaces)));
	});
var $author$project$HsParser$infixNonAssoc = F2(
	function (operand, table) {
		return A2(
			$elm$parser$Parser$andThen,
			function (left) {
				return A2(
					$elm$parser$Parser$andThen,
					function (_v0) {
						return $elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$keeper,
									A2(
										$elm$parser$Parser$keeper,
										$elm$parser$Parser$succeed(
											F2(
												function (func, right) {
													return A2(func, left, right);
												})),
										A2(
											$elm$parser$Parser$ignorer,
											$elm$parser$Parser$oneOf(
												A2(
													$elm$core$List$map,
													function (_v1) {
														var op = _v1.a;
														var func = _v1.b;
														return A2(
															$elm$parser$Parser$ignorer,
															$elm$parser$Parser$succeed(func),
															$author$project$HsParser$operator(op));
													},
													table)),
											$author$project$HsParser$spaces)),
									operand),
									$elm$parser$Parser$succeed(left)
								]));
					},
					$author$project$HsParser$spaces);
			},
			operand);
	});
var $author$project$HsParser$infixOperator = A2(
	$elm$parser$Parser$andThen,
	function (s) {
		return $elm$core$String$isEmpty(s) ? $elm$parser$Parser$problem('operator') : $elm$parser$Parser$succeed(s);
	},
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompWhile($author$project$AST$operatorChar)));
var $author$project$HsParser$infixRightCont = F3(
	function (operand, table, accum) {
		return $elm$parser$Parser$oneOf(
			_Utils_ap(
				A2(
					$elm$core$List$map,
					function (_v0) {
						var op = _v0.a;
						var func = _v0.b;
						return A2(
							$elm$parser$Parser$andThen,
							function (y) {
								return A2(
									$elm$parser$Parser$andThen,
									function (r) {
										return $elm$parser$Parser$succeed(
											A2(func, accum, r));
									},
									A3($author$project$HsParser$infixRightCont, operand, table, y));
							},
							A2(
								$elm$parser$Parser$keeper,
								A2(
									$elm$parser$Parser$ignorer,
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed($elm$core$Basics$identity),
										$author$project$HsParser$operator(op)),
									$author$project$HsParser$spaces),
								A2($elm$parser$Parser$ignorer, operand, $author$project$HsParser$spaces)));
					},
					table),
				_List_fromArray(
					[
						$elm$parser$Parser$succeed(accum)
					])));
	});
var $author$project$HsParser$infixRight = F2(
	function (operand, table) {
		return A2(
			$elm$parser$Parser$andThen,
			A2($author$project$HsParser$infixRightCont, operand, table),
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				A2($elm$parser$Parser$ignorer, operand, $author$project$HsParser$spaces)));
	});
var $author$project$HsParser$joinAlts = A2($elm$core$List$foldr, $author$project$HsParser$joinAlt, $author$project$AST$Fail);
var $elm$parser$Parser$ExpectingKeyword = function (a) {
	return {$: 'ExpectingKeyword', a: a};
};
var $elm$parser$Parser$Advanced$keyword = function (_v0) {
	var kwd = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(kwd);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return (_Utils_eq(newOffset, -1) || (0 <= A3(
				$elm$parser$Parser$Advanced$isSubChar,
				function (c) {
					return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
						c,
						_Utils_chr('_'));
				},
				newOffset,
				s.src))) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$keyword = function (kwd) {
	return $elm$parser$Parser$Advanced$keyword(
		A2(
			$elm$parser$Parser$Advanced$Token,
			kwd,
			$elm$parser$Parser$ExpectingKeyword(kwd)));
};
var $elm$parser$Parser$Advanced$getCol = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.col, s);
	});
var $elm$parser$Parser$getCol = $elm$parser$Parser$Advanced$getCol;
var $elm$parser$Parser$Advanced$getIndent = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.indent, s);
	});
var $elm$parser$Parser$getIndent = $elm$parser$Parser$Advanced$getIndent;
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$parser$Parser$toAdvancedStep = function (step) {
	if (step.$ === 'Loop') {
		var s = step.a;
		return $elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return $elm$parser$Parser$Advanced$Done(a);
	}
};
var $elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' ')) || (_Utils_eq(
			c,
			_Utils_chr('\n')) || _Utils_eq(
			c,
			_Utils_chr('\r')));
	});
var $elm$parser$Parser$spaces = $elm$parser$Parser$Advanced$spaces;
var $elm$parser$Parser$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $author$project$Indent$indented = function (next) {
	var proceed = function (_v1) {
		var minimal = _v1.a;
		var actual = _v1.b;
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$andThen,
					function (_v0) {
						return next.ending;
					},
					$elm$parser$Parser$end),
					_Utils_eq(actual, minimal) ? next.exactly : ((_Utils_cmp(actual, minimal) > 0) ? next.larger : next.smaller)
				]));
	};
	return A2(
		$elm$parser$Parser$andThen,
		proceed,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F2(
						function (a, b) {
							return _Utils_Tuple2(a, b);
						})),
				A2($elm$parser$Parser$ignorer, $elm$parser$Parser$getIndent, $elm$parser$Parser$spaces)),
			$elm$parser$Parser$getCol));
};
var $author$project$Indent$step = F3(
	function (parser, msg, values) {
		var next = function (value_) {
			return $elm$parser$Parser$Loop(
				A2($elm$core$List$cons, value_, values));
		};
		var finish = $elm$parser$Parser$Done(
			$elm$core$List$reverse(values));
		return $author$project$Indent$indented(
			{
				ending: $elm$parser$Parser$succeed(finish),
				exactly: $elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$keeper,
							$elm$parser$Parser$succeed(next),
							parser),
							$elm$parser$Parser$succeed(finish)
						])),
				larger: $elm$parser$Parser$problem(msg),
				smaller: $elm$parser$Parser$succeed(finish)
			});
	});
var $elm$parser$Parser$Advanced$changeIndent = F2(
	function (newIndent, s) {
		return {col: s.col, context: s.context, indent: newIndent, offset: s.offset, row: s.row, src: s.src};
	});
var $elm$parser$Parser$Advanced$withIndent = F2(
	function (newIndent, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(
					A2($elm$parser$Parser$Advanced$changeIndent, newIndent, s0));
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						a,
						A2($elm$parser$Parser$Advanced$changeIndent, s0.indent, s1));
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$parser$Parser$withIndent = $elm$parser$Parser$Advanced$withIndent;
var $author$project$Indent$list = F2(
	function (parser, msg) {
		var parser_ = A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			A2(
				$elm$parser$Parser$loop,
				_List_Nil,
				A2($author$project$Indent$step, parser, msg)));
		var list_ = function (_v0) {
			var minimalIndent = _v0.a;
			var actualIndent = _v0.b;
			return (_Utils_cmp(actualIndent, minimalIndent) > 0) ? A2($elm$parser$Parser$withIndent, actualIndent, parser_) : $elm$parser$Parser$succeed(_List_Nil);
		};
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$andThen,
					list_,
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$succeed(
									F2(
										function (a, b) {
											return _Utils_Tuple2(a, b);
										})),
								$elm$parser$Parser$spaces),
							$elm$parser$Parser$getIndent),
						$elm$parser$Parser$getCol)),
					A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed(_List_Nil),
						$elm$parser$Parser$chompWhile(
							function (c) {
								return _Utils_eq(
									c,
									_Utils_chr(' '));
							})),
					$elm$parser$Parser$end)
				]));
	});
var $author$project$AST$listLit = A2(
	$elm$core$List$foldr,
	F2(
		function (x, xs) {
			return A3(
				$author$project$AST$Cons,
				false,
				':',
				_List_fromArray(
					[x, xs]));
		}),
	A3($author$project$AST$Cons, true, '[]', _List_Nil));
var $author$project$HsParser$makeApp_ = F2(
	function (e0, args) {
		makeApp_:
		while (true) {
			if (!args.b) {
				return e0;
			} else {
				var e1 = args.a;
				var rest = args.b;
				var $temp$e0 = A2($author$project$AST$App, e0, e1),
					$temp$args = rest;
				e0 = $temp$e0;
				args = $temp$args;
				continue makeApp_;
			}
		}
	});
var $author$project$HsParser$makeApp = F2(
	function (e0, args) {
		var _v0 = _Utils_Tuple2(e0, args);
		if (_v0.a.$ === 'Cons') {
			var _v1 = _v0.a;
			var tag = _v1.b;
			var args1 = _v1.c;
			var args2 = _v0.b;
			return A3(
				$author$project$AST$Cons,
				false,
				tag,
				_Utils_ap(args1, args2));
		} else {
			return A2($author$project$HsParser$makeApp_, e0, args);
		}
	});
var $author$project$AST$Where = F2(
	function (a, b) {
		return {$: 'Where', a: a, b: b};
	});
var $author$project$HsParser$makeBindings = F2(
	function (binds, match) {
		if (!binds.b) {
			return match;
		} else {
			return A2($author$project$AST$Where, binds, match);
		}
	});
var $author$project$AST$Match = F2(
	function (a, b) {
		return {$: 'Match', a: a, b: b};
	});
var $author$project$HsParser$makePatterns = F2(
	function (ps, end) {
		return A3($elm$core$List$foldr, $author$project$AST$Match, end, ps);
	});
var $author$project$HsParser$makeEquation = F4(
	function (name, patts, match, binds) {
		return A2(
			$author$project$AST$Equation,
			name,
			A2(
				$author$project$HsParser$makePatterns,
				patts,
				A2($author$project$HsParser$makeBindings, binds, match)));
	});
var $author$project$AST$Arg = F2(
	function (a, b) {
		return {$: 'Arg', a: a, b: b};
	});
var $author$project$HsParser$makeGuard = F3(
	function (guard, expr, info) {
		_v0$3:
		while (true) {
			switch (guard.$) {
				case 'Var':
					if (guard.a === 'otherwise') {
						return A2(
							$author$project$AST$Return,
							expr,
							$elm$core$Maybe$Just(info));
					} else {
						break _v0$3;
					}
				case 'Cons':
					if (!guard.c.b) {
						switch (guard.b) {
							case 'True':
								return A2(
									$author$project$AST$Return,
									expr,
									$elm$core$Maybe$Just(info));
							case 'False':
								return $author$project$AST$Fail;
							default:
								break _v0$3;
						}
					} else {
						break _v0$3;
					}
				default:
					break _v0$3;
			}
		}
		return A2(
			$author$project$AST$Arg,
			guard,
			A2(
				$author$project$AST$Match,
				A2($author$project$AST$ConsP, 'True', _List_Nil),
				A2(
					$author$project$AST$Return,
					expr,
					$elm$core$Maybe$Just(info))));
	});
var $author$project$HsParser$makeTuple = function (args) {
	if (!args.b) {
		return $elm$parser$Parser$succeed(
			A3($author$project$AST$Cons, true, '()', _List_Nil));
	} else {
		if (!args.b.b) {
			var e = args.a;
			return $elm$parser$Parser$succeed(e);
		} else {
			if (!args.b.b.b) {
				var e1 = args.a;
				var _v1 = args.b;
				var e2 = _v1.a;
				return $elm$parser$Parser$succeed(
					A3($author$project$AST$Cons, false, ',', args));
			} else {
				if (!args.b.b.b.b) {
					var e1 = args.a;
					var _v2 = args.b;
					var e2 = _v2.a;
					var _v3 = _v2.b;
					var e3 = _v3.a;
					return $elm$parser$Parser$succeed(
						A3($author$project$AST$Cons, false, ',,', args));
				} else {
					if (!args.b.b.b.b.b) {
						var e1 = args.a;
						var _v4 = args.b;
						var e2 = _v4.a;
						var _v5 = _v4.b;
						var e3 = _v5.a;
						var _v6 = _v5.b;
						var e4 = _v6.a;
						return $elm$parser$Parser$succeed(
							A3($author$project$AST$Cons, false, ',,,', args));
					} else {
						return $elm$parser$Parser$problem('tuple with maximum 4 elements');
					}
				}
			}
		}
	}
};
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $author$project$HsParser$stringToList = function (s) {
	return $author$project$AST$listLit(
		A2(
			$elm$core$List$map,
			$author$project$AST$Char,
			$elm$core$String$toList(s)));
};
var $author$project$AST$TypeSig = F2(
	function (a, b) {
		return {$: 'TypeSig', a: a, b: b};
	});
var $author$project$HsParser$identifierOrOperator = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			$author$project$HsParser$identifier,
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$symbol('(')),
			A2(
				$elm$parser$Parser$ignorer,
				$author$project$HsParser$infixOperator,
				$elm$parser$Parser$symbol(')')))
		]));
var $author$project$Types$TyVar = function (a) {
	return {$: 'TyVar', a: a};
};
var $author$project$Types$TyFun = F2(
	function (a, b) {
		return {$: 'TyFun', a: a, b: b};
	});
var $author$project$HsParser$insertArrows = F2(
	function (t0, ts) {
		var _v0 = $elm_community$list_extra$List$Extra$unconsLast(ts);
		if (_v0.$ === 'Nothing') {
			return t0;
		} else {
			var _v1 = _v0.a;
			var t1 = _v1.a;
			var ts1 = _v1.b;
			return A3(
				$elm$core$List$foldr,
				$author$project$Types$TyFun,
				t1,
				A2($elm$core$List$cons, t0, ts1));
		}
	});
var $author$project$Types$TyConst = F2(
	function (a, b) {
		return {$: 'TyConst', a: a, b: b};
	});
var $author$project$Types$tyPair = F2(
	function (t1, t2) {
		return A2(
			$author$project$Types$TyConst,
			'(,)',
			_List_fromArray(
				[t1, t2]));
	});
var $author$project$Types$tyTuple3 = F3(
	function (t1, t2, t3) {
		return A2(
			$author$project$Types$TyConst,
			'(,,)',
			_List_fromArray(
				[t1, t2, t3]));
	});
var $author$project$Types$tyTuple4 = F4(
	function (t1, t2, t3, t4) {
		return A2(
			$author$project$Types$TyConst,
			'(,,,)',
			_List_fromArray(
				[t1, t2, t3, t4]));
	});
var $author$project$Types$tyUnit = A2($author$project$Types$TyConst, '()', _List_Nil);
var $author$project$HsParser$makeTupleType = function (ts) {
	if (!ts.b) {
		return $elm$parser$Parser$succeed($author$project$Types$tyUnit);
	} else {
		if (!ts.b.b) {
			var t1 = ts.a;
			return $elm$parser$Parser$succeed(t1);
		} else {
			if (!ts.b.b.b) {
				var t1 = ts.a;
				var _v1 = ts.b;
				var t2 = _v1.a;
				return $elm$parser$Parser$succeed(
					A2($author$project$Types$tyPair, t1, t2));
			} else {
				if (!ts.b.b.b.b) {
					var t1 = ts.a;
					var _v2 = ts.b;
					var t2 = _v2.a;
					var _v3 = _v2.b;
					var t3 = _v3.a;
					return $elm$parser$Parser$succeed(
						A3($author$project$Types$tyTuple3, t1, t2, t3));
				} else {
					if (!ts.b.b.b.b.b) {
						var t1 = ts.a;
						var _v4 = ts.b;
						var t2 = _v4.a;
						var _v5 = _v4.b;
						var t3 = _v5.a;
						var _v6 = _v5.b;
						var t4 = _v6.a;
						return $elm$parser$Parser$succeed(
							A4($author$project$Types$tyTuple4, t1, t2, t3, t4));
					} else {
						return $elm$parser$Parser$problem('invalid tuple: maximum 4 elements');
					}
				}
			}
		}
	}
};
var $author$project$Types$tyChar = A2($author$project$Types$TyConst, 'Char', _List_Nil);
var $author$project$Types$tyList = function (t) {
	return A2(
		$author$project$Types$TyConst,
		'[]',
		_List_fromArray(
			[t]));
};
var $author$project$Types$tyString = $author$project$Types$tyList($author$project$Types$tyChar);
var $author$project$Types$tyConst = F2(
	function (c, ts) {
		if (c === 'String') {
			return $elm$core$List$isEmpty(ts) ? $author$project$Types$tyString : A2($author$project$Types$TyConst, c, ts);
		} else {
			return A2($author$project$Types$TyConst, c, ts);
		}
	});
function $author$project$HsParser$cyclic$typeExpr() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($author$project$HsParser$insertArrows),
			A2(
				$elm$parser$Parser$ignorer,
				$author$project$HsParser$cyclic$typeApplication(),
				$author$project$HsParser$spaces)),
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$sequence(
					{
						end: '',
						item: $author$project$HsParser$cyclic$typeApplication(),
						separator: '->',
						spaces: $author$project$HsParser$spaces,
						start: '->',
						trailing: $elm$parser$Parser$Forbidden
					}),
					$elm$parser$Parser$succeed(_List_Nil)
				])));
}
function $author$project$HsParser$cyclic$typeApplication() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed($author$project$Types$tyConst),
					A2($elm$parser$Parser$ignorer, $author$project$HsParser$upperIdentifier, $author$project$HsParser$spaces)),
				$elm$parser$Parser$sequence(
					{
						end: '',
						item: $author$project$HsParser$cyclic$delimitedType(),
						separator: '',
						spaces: $author$project$HsParser$spaces,
						start: '',
						trailing: $elm$parser$Parser$Forbidden
					})),
				$author$project$HsParser$cyclic$delimitedType()
			]));
}
function $author$project$HsParser$cyclic$delimitedType() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					function (c) {
						return A2($author$project$Types$tyConst, c, _List_Nil);
					}),
				$author$project$HsParser$upperIdentifier),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$Types$TyVar),
				$author$project$HsParser$identifier),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($author$project$Types$tyList),
					$elm$parser$Parser$symbol('[')),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$lazy(
						function (_v0) {
							return $author$project$HsParser$cyclic$typeExpr();
						}),
					$elm$parser$Parser$symbol(']'))),
				A2(
				$elm$parser$Parser$andThen,
				$author$project$HsParser$makeTupleType,
				$elm$parser$Parser$sequence(
					{
						end: ')',
						item: $elm$parser$Parser$lazy(
							function (_v1) {
								return $author$project$HsParser$cyclic$typeExpr();
							}),
						separator: ',',
						spaces: $author$project$HsParser$spaces,
						start: '(',
						trailing: $elm$parser$Parser$Forbidden
					}))
			]));
}
try {
	var $author$project$HsParser$typeExpr = $author$project$HsParser$cyclic$typeExpr();
	$author$project$HsParser$cyclic$typeExpr = function () {
		return $author$project$HsParser$typeExpr;
	};
	var $author$project$HsParser$typeApplication = $author$project$HsParser$cyclic$typeApplication();
	$author$project$HsParser$cyclic$typeApplication = function () {
		return $author$project$HsParser$typeApplication;
	};
	var $author$project$HsParser$delimitedType = $author$project$HsParser$cyclic$delimitedType();
	$author$project$HsParser$cyclic$delimitedType = function () {
		return $author$project$HsParser$delimitedType;
	};
} catch ($) {
	throw 'Some top-level definitions from `HsParser` are causing infinite recursion:\n\n  ┌─────┐\n  │    typeExpr\n  │     ↓\n  │    typeApplication\n  │     ↓\n  │    delimitedType\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$HsParser$typeSignature = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($author$project$AST$TypeSig),
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2($elm$parser$Parser$ignorer, $author$project$HsParser$identifierOrOperator, $author$project$HsParser$spaces),
				$author$project$HsParser$operator('::')),
			$author$project$HsParser$spaces)),
	$author$project$HsParser$typeExpr);
var $author$project$HsParser$whitespace = $elm$parser$Parser$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' ')) || (_Utils_eq(
			c,
			_Utils_chr('\t')) || (_Utils_eq(
			c,
			_Utils_chr('\n')) || _Utils_eq(
			c,
			_Utils_chr('\r'))));
	});
var $author$project$HsParser$equationAlts = function (prefix) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (alts) {
					return A2(
						$elm$parser$Parser$andThen,
						function (_v13) {
							return $elm$parser$Parser$succeed(
								$author$project$HsParser$joinAlts(alts));
						},
						A3(
							$author$project$HsParser$ensure,
							A2($elm$core$Basics$composeR, $elm$core$List$isEmpty, $elm$core$Basics$not),
							'alternative',
							alts));
				},
				A2(
					$author$project$Indent$list,
					$author$project$HsParser$equationGuard(prefix),
					'indented guard')),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					function (_v14) {
						var expr = _v14.a;
						var info = _v14.b;
						return A2(
							$author$project$AST$Return,
							expr,
							$elm$core$Maybe$Just(
								_Utils_ap(prefix, info)));
					}),
				$author$project$HsParser$getParseChomped_(
					$author$project$HsParser$cyclic$equationRHS()))
			]));
};
var $author$project$HsParser$equationGuard = function (prefix) {
	return A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed(
			function (_v11) {
				var _v12 = _v11.a;
				var e1 = _v12.a;
				var e2 = _v12.b;
				var info = _v11.b;
				return A3(
					$author$project$HsParser$makeGuard,
					e1,
					e2,
					_Utils_ap(prefix, info));
			}),
		$author$project$HsParser$getParseChomped_(
			$author$project$HsParser$cyclic$guardedExpr()));
};
function $author$project$HsParser$cyclic$guardedExpr() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Tuple$pair),
					$author$project$HsParser$operator('|')),
				$author$project$HsParser$spaces),
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$author$project$HsParser$cyclic$topExpr(),
						$author$project$HsParser$spaces),
					$author$project$HsParser$operator('=')),
				$author$project$HsParser$spaces)),
		$author$project$HsParser$cyclic$topExpr());
}
function $author$project$HsParser$cyclic$equationRHS() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$author$project$HsParser$spaces),
				$author$project$HsParser$operator('=')),
			$author$project$HsParser$spaces),
		$author$project$HsParser$cyclic$topExpr());
}
function $author$project$HsParser$cyclic$topExpr() {
	return $author$project$HsParser$cyclic$infix0();
}
function $author$project$HsParser$cyclic$infix0() {
	return A2(
		$author$project$HsParser$infixRight,
		$author$project$HsParser$cyclic$infix2(),
		_List_fromArray(
			[
				_Utils_Tuple2(
				'$',
				F2(
					function (e1, e2) {
						return A2(
							$author$project$AST$App,
							A2(
								$author$project$AST$App,
								$author$project$AST$Var('$'),
								e1),
							e2);
					})),
				_Utils_Tuple2(
				'$!',
				F2(
					function (e1, e2) {
						return A2(
							$author$project$AST$App,
							A2(
								$author$project$AST$App,
								$author$project$AST$Var('$!'),
								e1),
							e2);
					}))
			]));
}
function $author$project$HsParser$cyclic$infix2() {
	return A2(
		$author$project$HsParser$infixRight,
		$author$project$HsParser$cyclic$infix3(),
		_List_fromArray(
			[
				_Utils_Tuple2(
				'||',
				F2(
					function (e1, e2) {
						return A2(
							$author$project$AST$App,
							A2(
								$author$project$AST$App,
								$author$project$AST$Var('||'),
								e1),
							e2);
					}))
			]));
}
function $author$project$HsParser$cyclic$infix3() {
	return A2(
		$author$project$HsParser$infixRight,
		$author$project$HsParser$cyclic$infix4(),
		_List_fromArray(
			[
				_Utils_Tuple2(
				'&&',
				F2(
					function (e1, e2) {
						return A2(
							$author$project$AST$App,
							A2(
								$author$project$AST$App,
								$author$project$AST$Var('&&'),
								e1),
							e2);
					}))
			]));
}
function $author$project$HsParser$cyclic$infix4() {
	return A2(
		$author$project$HsParser$infixNonAssoc,
		$author$project$HsParser$cyclic$infix5(),
		_List_fromArray(
			[
				_Utils_Tuple2(
				'==',
				$author$project$AST$BinaryOp('==')),
				_Utils_Tuple2(
				'/=',
				$author$project$AST$BinaryOp('/=')),
				_Utils_Tuple2(
				'<=',
				$author$project$AST$BinaryOp('<=')),
				_Utils_Tuple2(
				'>=',
				$author$project$AST$BinaryOp('>=')),
				_Utils_Tuple2(
				'<',
				$author$project$AST$BinaryOp('<')),
				_Utils_Tuple2(
				'>',
				$author$project$AST$BinaryOp('>'))
			]));
}
function $author$project$HsParser$cyclic$infix5() {
	return A2(
		$author$project$HsParser$infixRight,
		$author$project$HsParser$cyclic$infix6(),
		_List_fromArray(
			[
				_Utils_Tuple2(
				':',
				F2(
					function (e1, e2) {
						return A3(
							$author$project$AST$Cons,
							false,
							':',
							_List_fromArray(
								[e1, e2]));
					})),
				_Utils_Tuple2(
				'++',
				F2(
					function (e1, e2) {
						return A2(
							$author$project$AST$App,
							A2(
								$author$project$AST$App,
								$author$project$AST$Var('++'),
								e1),
							e2);
					}))
			]));
}
function $author$project$HsParser$cyclic$infix6() {
	return A2(
		$author$project$HsParser$infixLeft,
		$author$project$HsParser$cyclic$infix7(),
		_List_fromArray(
			[
				_Utils_Tuple2(
				'+',
				$author$project$AST$BinaryOp('+')),
				_Utils_Tuple2(
				'-',
				$author$project$AST$BinaryOp('-'))
			]));
}
function $author$project$HsParser$cyclic$infix7() {
	return A2(
		$author$project$HsParser$infixLeft,
		$author$project$HsParser$cyclic$infix9(),
		_List_fromArray(
			[
				_Utils_Tuple2(
				'*',
				$author$project$AST$BinaryOp('*'))
			]));
}
function $author$project$HsParser$cyclic$infix9() {
	return A2(
		$author$project$HsParser$infixLeft,
		$author$project$HsParser$cyclic$infix9r(),
		_List_fromArray(
			[
				_Utils_Tuple2(
				'!!',
				F2(
					function (e1, e2) {
						return A2(
							$author$project$AST$App,
							A2(
								$author$project$AST$App,
								$author$project$AST$Var('!!'),
								e1),
							e2);
					}))
			]));
}
function $author$project$HsParser$cyclic$infix9r() {
	return A2(
		$author$project$HsParser$infixRight,
		$author$project$HsParser$cyclic$applicativeExpr(),
		_List_fromArray(
			[
				_Utils_Tuple2(
				'.',
				F2(
					function (e1, e2) {
						return A2(
							$author$project$AST$App,
							A2(
								$author$project$AST$App,
								$author$project$AST$Var('.'),
								e1),
							e2);
					}))
			]));
}
function $author$project$HsParser$cyclic$applicativeExpr() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$author$project$HsParser$cyclic$if_then_else(),
				$author$project$HsParser$cyclic$letExpr(),
				$author$project$HsParser$cyclic$caseExpr(),
				$author$project$HsParser$cyclic$lambdaExpr(),
				$author$project$HsParser$cyclic$prefixNeg(),
				$elm$parser$Parser$backtrackable(
				$author$project$HsParser$cyclic$infixApp()),
				$author$project$HsParser$cyclic$application()
			]));
}
function $author$project$HsParser$cyclic$infixApp() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F3(
						function (e1, f, e2) {
							return A3($author$project$AST$BinaryOp, f, e1, e2);
						})),
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$author$project$HsParser$cyclic$application(),
						$author$project$HsParser$spaces),
					$elm$parser$Parser$symbol('`'))),
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$author$project$HsParser$identifier,
					$elm$parser$Parser$symbol('`')),
				$author$project$HsParser$spaces)),
		$author$project$HsParser$cyclic$application());
}
function $author$project$HsParser$cyclic$application() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($author$project$HsParser$makeApp),
			A2(
				$elm$parser$Parser$ignorer,
				$author$project$HsParser$cyclic$delimited(),
				$author$project$HsParser$spaces)),
		$author$project$HsParser$cyclic$delimitedList());
}
function $author$project$HsParser$cyclic$bindings() {
	return A2(
		$elm$parser$Parser$andThen,
		function (binds) {
			var _v25 = $author$project$HsParser$checkBinds(binds);
			if (_v25.$ === 'Err') {
				var msg = _v25.a;
				return $elm$parser$Parser$problem(msg);
			} else {
				return $elm$parser$Parser$succeed(binds);
			}
		},
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($author$project$HsParser$collectBinds),
			$author$project$HsParser$cyclic$indentedDeclList()));
}
function $author$project$HsParser$cyclic$caseExpr() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($author$project$AST$Case),
					$elm$parser$Parser$keyword('case')),
				$author$project$HsParser$spaces),
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$lazy(
						function (_v24) {
							return $author$project$HsParser$cyclic$topExpr();
						}),
					$author$project$HsParser$spaces),
				$elm$parser$Parser$keyword('of'))),
		$author$project$HsParser$cyclic$caseAlts());
}
function $author$project$HsParser$cyclic$caseAlts() {
	return A2(
		$elm$parser$Parser$andThen,
		function (alts) {
			return $elm$core$List$isEmpty(alts) ? $elm$parser$Parser$problem('non-empty case alternatives') : $elm$parser$Parser$succeed(alts);
		},
		A2(
			$author$project$Indent$list,
			$author$project$HsParser$cyclic$caseAlt(),
			'indented case alternative'));
}
function $author$project$HsParser$cyclic$caseAlt() {
	return $author$project$HsParser$getParseChomped(
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F3(
						function (patt, expr, info) {
							return _Utils_Tuple3(patt, expr, info);
						})),
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						A2($elm$parser$Parser$ignorer, $author$project$HsParser$infixPattern, $author$project$HsParser$spaces),
						$elm$parser$Parser$symbol('->')),
					$author$project$HsParser$spaces)),
			$elm$parser$Parser$lazy(
				function (_v23) {
					return $author$project$HsParser$cyclic$topExpr();
				})));
}
function $author$project$HsParser$cyclic$indentedDeclList() {
	return A2(
		$elm$parser$Parser$andThen,
		function (decls) {
			return $elm$core$List$isEmpty(decls) ? $elm$parser$Parser$problem('non-empty bindings') : $elm$parser$Parser$succeed(decls);
		},
		A2(
			$author$project$Indent$list,
			$author$project$HsParser$cyclic$declaration(),
			'indented binding'));
}
function $author$project$HsParser$cyclic$declaration() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$elm$parser$Parser$backtrackable($author$project$HsParser$typeSignature),
				$author$project$HsParser$cyclic$prefixEquation()
			]));
}
function $author$project$HsParser$cyclic$prefixNeg() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				$author$project$AST$App(
					$author$project$AST$Var('negate'))),
			$elm$parser$Parser$symbol('-')),
		$author$project$HsParser$cyclic$delimited());
}
function $author$project$HsParser$cyclic$delimitedList() {
	return $elm$parser$Parser$sequence(
		{
			end: '',
			item: $author$project$HsParser$cyclic$delimited(),
			separator: '',
			spaces: $author$project$HsParser$spaces,
			start: '',
			trailing: $elm$parser$Parser$Forbidden
		});
}
function $author$project$HsParser$cyclic$delimited() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$AST$Var),
				$author$project$HsParser$identifier),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$AST$Number),
				$author$project$HsParser$integer),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$AST$Char),
				$author$project$HsParser$charLiteral),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$HsParser$stringToList),
				$author$project$HsParser$stringLiteral),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					function (tag) {
						return A3($author$project$AST$Cons, true, tag, _List_Nil);
					}),
				$author$project$HsParser$upperIdentifier),
				$elm$parser$Parser$backtrackable(
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed($author$project$AST$Var),
						$elm$parser$Parser$symbol('(')),
					A2(
						$elm$parser$Parser$ignorer,
						$author$project$HsParser$infixOperator,
						$elm$parser$Parser$symbol(')')))),
				$elm$parser$Parser$backtrackable(
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed(
							$author$project$AST$App(
								$author$project$AST$Var('enumFrom'))),
						$elm$parser$Parser$symbol('[')),
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$lazy(
									function (_v15) {
										return $author$project$HsParser$cyclic$topExpr();
									}),
								$elm$parser$Parser$symbol('..')),
							$author$project$HsParser$spaces),
						$elm$parser$Parser$symbol(']')))),
				$elm$parser$Parser$backtrackable(
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(
								F2(
									function (e1, e2) {
										return A2(
											$author$project$HsParser$makeApp,
											$author$project$AST$Var('enumFromThen'),
											_List_fromArray(
												[e1, e2]));
									})),
							$elm$parser$Parser$symbol('[')),
						A2(
							$elm$parser$Parser$ignorer,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$lazy(
									function (_v16) {
										return $author$project$HsParser$cyclic$topExpr();
									}),
								$elm$parser$Parser$symbol(',')),
							$author$project$HsParser$spaces)),
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$lazy(
									function (_v17) {
										return $author$project$HsParser$cyclic$topExpr();
									}),
								$elm$parser$Parser$symbol('..')),
							$author$project$HsParser$spaces),
						$elm$parser$Parser$symbol(']')))),
				$elm$parser$Parser$backtrackable(
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(
								F2(
									function (e1, e2) {
										return A2(
											$author$project$HsParser$makeApp,
											$author$project$AST$Var('enumFromTo'),
											_List_fromArray(
												[e1, e2]));
									})),
							$elm$parser$Parser$symbol('[')),
						A2(
							$elm$parser$Parser$ignorer,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$lazy(
									function (_v18) {
										return $author$project$HsParser$cyclic$topExpr();
									}),
								$elm$parser$Parser$symbol('..')),
							$author$project$HsParser$spaces)),
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$lazy(
							function (_v19) {
								return $author$project$HsParser$cyclic$topExpr();
							}),
						$elm$parser$Parser$symbol(']')))),
				$elm$parser$Parser$backtrackable(
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$succeed(
									F3(
										function (e1, e2, e3) {
											return A2(
												$author$project$HsParser$makeApp,
												$author$project$AST$Var('enumFromThenTo'),
												_List_fromArray(
													[e1, e2, e3]));
										})),
								$elm$parser$Parser$symbol('[')),
							A2(
								$elm$parser$Parser$ignorer,
								A2(
									$elm$parser$Parser$ignorer,
									$elm$parser$Parser$lazy(
										function (_v20) {
											return $author$project$HsParser$cyclic$topExpr();
										}),
									$elm$parser$Parser$symbol(',')),
								$author$project$HsParser$spaces)),
						A2(
							$elm$parser$Parser$ignorer,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$lazy(
									function (_v21) {
										return $author$project$HsParser$cyclic$topExpr();
									}),
								$elm$parser$Parser$symbol('..')),
							$author$project$HsParser$spaces)),
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$lazy(
							function (_v22) {
								return $author$project$HsParser$cyclic$topExpr();
							}),
						$elm$parser$Parser$symbol(']')))),
				$author$project$HsParser$cyclic$literalTuple(),
				$author$project$HsParser$cyclic$literalList()
			]));
}
function $author$project$HsParser$cyclic$if_then_else() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed($author$project$AST$IfThenElse),
						$elm$parser$Parser$keyword('if')),
					$author$project$HsParser$spaces),
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$lazy(
								function (_v8) {
									return $author$project$HsParser$cyclic$topExpr();
								}),
							$author$project$HsParser$spaces),
						$elm$parser$Parser$keyword('then')),
					$author$project$HsParser$spaces)),
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$lazy(
							function (_v9) {
								return $author$project$HsParser$cyclic$topExpr();
							}),
						$author$project$HsParser$spaces),
					$elm$parser$Parser$keyword('else')),
				$author$project$HsParser$spaces)),
		$elm$parser$Parser$lazy(
			function (_v10) {
				return $author$project$HsParser$cyclic$topExpr();
			}));
}
function $author$project$HsParser$cyclic$lambdaExpr() {
	return $author$project$HsParser$getParseChomped(
		$author$project$HsParser$cyclic$lambdaExprAux());
}
function $author$project$HsParser$cyclic$lambdaExprAux() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						F3(
							function (patts, expr, info) {
								return A2(
									$author$project$AST$lambda,
									$elm$core$Maybe$Nothing,
									A2(
										$author$project$HsParser$makePatterns,
										patts,
										A2(
											$author$project$AST$Return,
											expr,
											$elm$core$Maybe$Just(info))));
							})),
					$elm$parser$Parser$symbol('\\')),
				$author$project$HsParser$spaces),
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$sequence(
						{end: '', item: $author$project$HsParser$delimitedPattern, separator: '', spaces: $author$project$HsParser$spaces, start: '', trailing: $elm$parser$Parser$Forbidden}),
					$elm$parser$Parser$symbol('->')),
				$author$project$HsParser$spaces)),
		$elm$parser$Parser$lazy(
			function (_v7) {
				return $author$project$HsParser$cyclic$topExpr();
			}));
}
function $author$project$HsParser$cyclic$letExpr() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($author$project$AST$Let),
				$elm$parser$Parser$keyword('let')),
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$lazy(
							function (_v5) {
								return $author$project$HsParser$cyclic$bindings();
							}),
						$author$project$HsParser$spaces),
					$elm$parser$Parser$keyword('in')),
				$author$project$HsParser$spaces)),
		$elm$parser$Parser$lazy(
			function (_v6) {
				return $author$project$HsParser$cyclic$topExpr();
			}));
}
function $author$project$HsParser$cyclic$literalList() {
	return A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($author$project$AST$listLit),
		$elm$parser$Parser$sequence(
			{
				end: ']',
				item: $elm$parser$Parser$lazy(
					function (_v4) {
						return $author$project$HsParser$cyclic$topExpr();
					}),
				separator: ',',
				spaces: $author$project$HsParser$spaces,
				start: '[',
				trailing: $elm$parser$Parser$Forbidden
			}));
}
function $author$project$HsParser$cyclic$literalTuple() {
	return A2(
		$elm$parser$Parser$andThen,
		$author$project$HsParser$makeTuple,
		$elm$parser$Parser$sequence(
			{
				end: ')',
				item: $elm$parser$Parser$lazy(
					function (_v3) {
						return $author$project$HsParser$cyclic$topExpr();
					}),
				separator: ',',
				spaces: $author$project$HsParser$spaces,
				start: '(',
				trailing: $elm$parser$Parser$Forbidden
			}));
}
function $author$project$HsParser$cyclic$prefixEquation() {
	return A2(
		$elm$parser$Parser$andThen,
		function (_v1) {
			var _v2 = _v1.a;
			var name = _v2.a;
			var patts = _v2.b;
			var prefix = _v1.b;
			return A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						A2($author$project$HsParser$makeEquation, name, patts)),
					A2(
						$elm$parser$Parser$ignorer,
						$author$project$HsParser$equationAlts(prefix),
						$author$project$HsParser$whitespace)),
				$author$project$HsParser$cyclic$whereBindings());
		},
		$author$project$HsParser$getParseChomped_($author$project$HsParser$equationLHS));
}
function $author$project$HsParser$cyclic$whereBindings() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$keyword('where')),
				$elm$parser$Parser$lazy(
					function (_v0) {
						return $author$project$HsParser$cyclic$bindings();
					})),
				$elm$parser$Parser$succeed(_List_Nil)
			]));
}
try {
	var $author$project$HsParser$guardedExpr = $author$project$HsParser$cyclic$guardedExpr();
	$author$project$HsParser$cyclic$guardedExpr = function () {
		return $author$project$HsParser$guardedExpr;
	};
	var $author$project$HsParser$equationRHS = $author$project$HsParser$cyclic$equationRHS();
	$author$project$HsParser$cyclic$equationRHS = function () {
		return $author$project$HsParser$equationRHS;
	};
	var $author$project$HsParser$topExpr = $author$project$HsParser$cyclic$topExpr();
	$author$project$HsParser$cyclic$topExpr = function () {
		return $author$project$HsParser$topExpr;
	};
	var $author$project$HsParser$infix0 = $author$project$HsParser$cyclic$infix0();
	$author$project$HsParser$cyclic$infix0 = function () {
		return $author$project$HsParser$infix0;
	};
	var $author$project$HsParser$infix2 = $author$project$HsParser$cyclic$infix2();
	$author$project$HsParser$cyclic$infix2 = function () {
		return $author$project$HsParser$infix2;
	};
	var $author$project$HsParser$infix3 = $author$project$HsParser$cyclic$infix3();
	$author$project$HsParser$cyclic$infix3 = function () {
		return $author$project$HsParser$infix3;
	};
	var $author$project$HsParser$infix4 = $author$project$HsParser$cyclic$infix4();
	$author$project$HsParser$cyclic$infix4 = function () {
		return $author$project$HsParser$infix4;
	};
	var $author$project$HsParser$infix5 = $author$project$HsParser$cyclic$infix5();
	$author$project$HsParser$cyclic$infix5 = function () {
		return $author$project$HsParser$infix5;
	};
	var $author$project$HsParser$infix6 = $author$project$HsParser$cyclic$infix6();
	$author$project$HsParser$cyclic$infix6 = function () {
		return $author$project$HsParser$infix6;
	};
	var $author$project$HsParser$infix7 = $author$project$HsParser$cyclic$infix7();
	$author$project$HsParser$cyclic$infix7 = function () {
		return $author$project$HsParser$infix7;
	};
	var $author$project$HsParser$infix9 = $author$project$HsParser$cyclic$infix9();
	$author$project$HsParser$cyclic$infix9 = function () {
		return $author$project$HsParser$infix9;
	};
	var $author$project$HsParser$infix9r = $author$project$HsParser$cyclic$infix9r();
	$author$project$HsParser$cyclic$infix9r = function () {
		return $author$project$HsParser$infix9r;
	};
	var $author$project$HsParser$applicativeExpr = $author$project$HsParser$cyclic$applicativeExpr();
	$author$project$HsParser$cyclic$applicativeExpr = function () {
		return $author$project$HsParser$applicativeExpr;
	};
	var $author$project$HsParser$infixApp = $author$project$HsParser$cyclic$infixApp();
	$author$project$HsParser$cyclic$infixApp = function () {
		return $author$project$HsParser$infixApp;
	};
	var $author$project$HsParser$application = $author$project$HsParser$cyclic$application();
	$author$project$HsParser$cyclic$application = function () {
		return $author$project$HsParser$application;
	};
	var $author$project$HsParser$bindings = $author$project$HsParser$cyclic$bindings();
	$author$project$HsParser$cyclic$bindings = function () {
		return $author$project$HsParser$bindings;
	};
	var $author$project$HsParser$caseExpr = $author$project$HsParser$cyclic$caseExpr();
	$author$project$HsParser$cyclic$caseExpr = function () {
		return $author$project$HsParser$caseExpr;
	};
	var $author$project$HsParser$caseAlts = $author$project$HsParser$cyclic$caseAlts();
	$author$project$HsParser$cyclic$caseAlts = function () {
		return $author$project$HsParser$caseAlts;
	};
	var $author$project$HsParser$caseAlt = $author$project$HsParser$cyclic$caseAlt();
	$author$project$HsParser$cyclic$caseAlt = function () {
		return $author$project$HsParser$caseAlt;
	};
	var $author$project$HsParser$indentedDeclList = $author$project$HsParser$cyclic$indentedDeclList();
	$author$project$HsParser$cyclic$indentedDeclList = function () {
		return $author$project$HsParser$indentedDeclList;
	};
	var $author$project$HsParser$declaration = $author$project$HsParser$cyclic$declaration();
	$author$project$HsParser$cyclic$declaration = function () {
		return $author$project$HsParser$declaration;
	};
	var $author$project$HsParser$prefixNeg = $author$project$HsParser$cyclic$prefixNeg();
	$author$project$HsParser$cyclic$prefixNeg = function () {
		return $author$project$HsParser$prefixNeg;
	};
	var $author$project$HsParser$delimitedList = $author$project$HsParser$cyclic$delimitedList();
	$author$project$HsParser$cyclic$delimitedList = function () {
		return $author$project$HsParser$delimitedList;
	};
	var $author$project$HsParser$delimited = $author$project$HsParser$cyclic$delimited();
	$author$project$HsParser$cyclic$delimited = function () {
		return $author$project$HsParser$delimited;
	};
	var $author$project$HsParser$if_then_else = $author$project$HsParser$cyclic$if_then_else();
	$author$project$HsParser$cyclic$if_then_else = function () {
		return $author$project$HsParser$if_then_else;
	};
	var $author$project$HsParser$lambdaExpr = $author$project$HsParser$cyclic$lambdaExpr();
	$author$project$HsParser$cyclic$lambdaExpr = function () {
		return $author$project$HsParser$lambdaExpr;
	};
	var $author$project$HsParser$lambdaExprAux = $author$project$HsParser$cyclic$lambdaExprAux();
	$author$project$HsParser$cyclic$lambdaExprAux = function () {
		return $author$project$HsParser$lambdaExprAux;
	};
	var $author$project$HsParser$letExpr = $author$project$HsParser$cyclic$letExpr();
	$author$project$HsParser$cyclic$letExpr = function () {
		return $author$project$HsParser$letExpr;
	};
	var $author$project$HsParser$literalList = $author$project$HsParser$cyclic$literalList();
	$author$project$HsParser$cyclic$literalList = function () {
		return $author$project$HsParser$literalList;
	};
	var $author$project$HsParser$literalTuple = $author$project$HsParser$cyclic$literalTuple();
	$author$project$HsParser$cyclic$literalTuple = function () {
		return $author$project$HsParser$literalTuple;
	};
	var $author$project$HsParser$prefixEquation = $author$project$HsParser$cyclic$prefixEquation();
	$author$project$HsParser$cyclic$prefixEquation = function () {
		return $author$project$HsParser$prefixEquation;
	};
	var $author$project$HsParser$whereBindings = $author$project$HsParser$cyclic$whereBindings();
	$author$project$HsParser$cyclic$whereBindings = function () {
		return $author$project$HsParser$whereBindings;
	};
} catch ($) {
	throw 'Some top-level definitions from `HsParser` are causing infinite recursion:\n\n  ┌─────┐\n  │    guardedExpr\n  │     ↓\n  │    equationRHS\n  │     ↓\n  │    topExpr\n  │     ↓\n  │    infix0\n  │     ↓\n  │    infix2\n  │     ↓\n  │    infix3\n  │     ↓\n  │    infix4\n  │     ↓\n  │    infix5\n  │     ↓\n  │    infix6\n  │     ↓\n  │    infix7\n  │     ↓\n  │    infix9\n  │     ↓\n  │    infix9r\n  │     ↓\n  │    applicativeExpr\n  │     ↓\n  │    infixApp\n  │     ↓\n  │    application\n  │     ↓\n  │    bindings\n  │     ↓\n  │    caseExpr\n  │     ↓\n  │    caseAlts\n  │     ↓\n  │    caseAlt\n  │     ↓\n  │    indentedDeclList\n  │     ↓\n  │    declaration\n  │     ↓\n  │    prefixNeg\n  │     ↓\n  │    delimitedList\n  │     ↓\n  │    delimited\n  │     ↓\n  │    equationAlts\n  │     ↓\n  │    equationGuard\n  │     ↓\n  │    if_then_else\n  │     ↓\n  │    lambdaExpr\n  │     ↓\n  │    lambdaExprAux\n  │     ↓\n  │    letExpr\n  │     ↓\n  │    literalList\n  │     ↓\n  │    literalTuple\n  │     ↓\n  │    prefixEquation\n  │     ↓\n  │    whereBindings\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$HsParser$topExprEnd = A2(
	$elm$parser$Parser$keeper,
	$elm$parser$Parser$succeed($elm$core$Basics$identity),
	A2($elm$parser$Parser$ignorer, $author$project$HsParser$topExpr, $elm$parser$Parser$end));
var $author$project$HsParser$parseExpr = function (input) {
	return A2(
		$elm$core$Result$mapError,
		$author$project$HsParser$deadEndsToString,
		A2($elm$parser$Parser$run, $author$project$HsParser$topExprEnd, input));
};
var $author$project$HsParser$checkAlias = function (decl) {
	if (decl.$ === 'Alias') {
		var d = decl.a;
		return $elm$core$Maybe$Just(d);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$HsParser$checkData = function (decl) {
	if (decl.$ === 'Data') {
		var d = decl.a;
		return $elm$core$Maybe$Just(d);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$HsParser$collectDeclarations = function (decls) {
	var ddecls = A2($elm$core$List$filterMap, $author$project$HsParser$checkData, decls);
	var binds = $author$project$HsParser$collectBinds(decls);
	var adecls = A2($elm$core$List$filterMap, $author$project$HsParser$checkAlias, decls);
	return {aliasDecls: adecls, binds: binds, dataDecls: ddecls};
};
var $author$project$HsParser$dataAlternative = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed(
			F2(
				function (tag, ts) {
					return _Utils_Tuple2(tag, ts);
				})),
		A2($elm$parser$Parser$ignorer, $author$project$HsParser$upperIdentifier, $author$project$HsParser$spaces)),
	$elm$parser$Parser$sequence(
		{end: '', item: $author$project$HsParser$delimitedType, separator: '', spaces: $author$project$HsParser$spaces, start: '', trailing: $elm$parser$Parser$Forbidden}));
var $elm$parser$Parser$Nestable = {$: 'Nestable'};
var $author$project$HsParser$ifProgress = F2(
	function (parser, offset) {
		return A2(
			$elm$parser$Parser$map,
			function (newOffset) {
				return _Utils_eq(offset, newOffset) ? $elm$parser$Parser$Done(_Utils_Tuple0) : $elm$parser$Parser$Loop(newOffset);
			},
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					parser),
				$elm$parser$Parser$getOffset));
	});
var $pithub$elm_parser_extra$Parser$Advanced$Extra$followedBy = F2(
	function (parser2, parser1) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (_v0) {
				return parser2;
			},
			parser1);
	});
var $pithub$elm_parser_bug_workaround$Parser$Advanced$Workaround$afterTokenParser = F2(
	function (token, beforeParser) {
		var expecting = token.b;
		return A2(
			$pithub$elm_parser_extra$Parser$Advanced$Extra$followedBy,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$end(expecting),
						$elm$parser$Parser$Advanced$token(token)
					])),
			beforeParser);
	});
var $pithub$elm_parser_extra$Parser$Advanced$Extra$bind = F2(
	function (parser, callback) {
		return A2($elm$parser$Parser$Advanced$andThen, callback, parser);
	});
var $pithub$elm_parser_bug_workaround$Parser$Advanced$Workaround$chompN = F3(
	function (expecting, source, count) {
		return $elm$parser$Parser$Advanced$token(
			A2(
				$elm$parser$Parser$Advanced$Token,
				A2($elm$core$String$left, count, source),
				expecting));
	});
var $pithub$elm_parser_extra$Parser$Advanced$Extra$bind2 = F3(
	function (parser1, parser2, callback) {
		return A2(
			$pithub$elm_parser_extra$Parser$Advanced$Extra$bind,
			parser1,
			function (value1) {
				return A2(
					$pithub$elm_parser_extra$Parser$Advanced$Extra$bind,
					parser2,
					function (value2) {
						return A2(callback, value1, value2);
					});
			});
	});
var $pithub$elm_parser_extra$Parser$Advanced$Extra$getParserOutcome = function (parser) {
	return A3(
		$pithub$elm_parser_extra$Parser$Advanced$Extra$bind2,
		$elm$parser$Parser$Advanced$getSource,
		$elm$parser$Parser$Advanced$getOffset,
		F2(
			function (source, offset) {
				var testParser = A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair),
						parser),
					$elm$parser$Parser$Advanced$getOffset);
				var remainingSource = A2($elm$core$String$dropLeft, offset, source);
				return $elm$parser$Parser$Advanced$succeed(
					_Utils_Tuple2(
						remainingSource,
						A2($elm$parser$Parser$Advanced$run, testParser, remainingSource)));
			}));
};
var $pithub$elm_parser_bug_workaround$Parser$Advanced$Workaround$beforeTokenParser = F2(
	function (expecting, parser) {
		return A2(
			$pithub$elm_parser_extra$Parser$Advanced$Extra$bind,
			$pithub$elm_parser_extra$Parser$Advanced$Extra$getParserOutcome(parser),
			function (_v0) {
				var source = _v0.a;
				var outcome = _v0.b;
				if (outcome.$ === 'Ok') {
					var _v2 = outcome.a;
					var offset = _v2.b;
					return A3($pithub$elm_parser_bug_workaround$Parser$Advanced$Workaround$chompN, expecting, source, offset);
				} else {
					return parser;
				}
			});
	});
var $elm$parser$Parser$Advanced$chompUntilEndOr = function (str) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = A5(_Parser_findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v0.a;
			var newRow = _v0.b;
			var newCol = _v0.c;
			var adjustedOffset = (newOffset < 0) ? $elm$core$String$length(s.src) : newOffset;
			return A3(
				$elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, adjustedOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: adjustedOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$lineComment = function (start) {
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$token(start),
		$elm$parser$Parser$Advanced$chompUntilEndOr('\n'));
};
var $pithub$elm_parser_bug_workaround$Parser$Advanced$Workaround$lineCommentBefore = function (token) {
	var expecting = token.b;
	return A2(
		$pithub$elm_parser_bug_workaround$Parser$Advanced$Workaround$beforeTokenParser,
		expecting,
		$elm$parser$Parser$Advanced$lineComment(token));
};
var $pithub$elm_parser_bug_workaround$Parser$Advanced$Workaround$lineCommentAfter = function (token) {
	var expecting = token.b;
	return A2(
		$pithub$elm_parser_bug_workaround$Parser$Advanced$Workaround$afterTokenParser,
		A2($elm$parser$Parser$Advanced$Token, '\n', expecting),
		$pithub$elm_parser_bug_workaround$Parser$Advanced$Workaround$lineCommentBefore(token));
};
var $pithub$elm_parser_bug_workaround$Parser$Workaround$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $pithub$elm_parser_bug_workaround$Parser$Workaround$lineCommentAfter = function (str) {
	return $pithub$elm_parser_bug_workaround$Parser$Advanced$Workaround$lineCommentAfter(
		$pithub$elm_parser_bug_workaround$Parser$Workaround$toToken(str));
};
var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.context)) : A3(
				$elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, newOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$isChar = function (_char) {
	return true;
};
var $elm$parser$Parser$Advanced$nestableHelp = F5(
	function (isNotRelevant, open, close, expectingClose, nestLevel) {
		return A2(
			$elm$parser$Parser$Advanced$skip,
			$elm$parser$Parser$Advanced$chompWhile(isNotRelevant),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						(nestLevel === 1) ? close : A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v0) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel - 1);
						},
						close),
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v1) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel + 1);
						},
						open),
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v2) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel);
						},
						A2($elm$parser$Parser$Advanced$chompIf, $elm$parser$Parser$Advanced$isChar, expectingClose))
					])));
	});
var $elm$parser$Parser$Advanced$nestableComment = F2(
	function (open, close) {
		var oStr = open.a;
		var oX = open.b;
		var cStr = close.a;
		var cX = close.b;
		var _v0 = $elm$core$String$uncons(oStr);
		if (_v0.$ === 'Nothing') {
			return $elm$parser$Parser$Advanced$problem(oX);
		} else {
			var _v1 = _v0.a;
			var openChar = _v1.a;
			var _v2 = $elm$core$String$uncons(cStr);
			if (_v2.$ === 'Nothing') {
				return $elm$parser$Parser$Advanced$problem(cX);
			} else {
				var _v3 = _v2.a;
				var closeChar = _v3.a;
				var isNotRelevant = function (_char) {
					return (!_Utils_eq(_char, openChar)) && (!_Utils_eq(_char, closeChar));
				};
				var chompOpen = $elm$parser$Parser$Advanced$token(open);
				return A2(
					$elm$parser$Parser$Advanced$ignorer,
					chompOpen,
					A5(
						$elm$parser$Parser$Advanced$nestableHelp,
						isNotRelevant,
						chompOpen,
						$elm$parser$Parser$Advanced$token(close),
						cX,
						1));
			}
		}
	});
var $elm$parser$Parser$Advanced$multiComment = F3(
	function (open, close, nestable) {
		if (nestable.$ === 'NotNestable') {
			return A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$token(open),
				$elm$parser$Parser$Advanced$chompUntil(close));
		} else {
			return A2($elm$parser$Parser$Advanced$nestableComment, open, close);
		}
	});
var $elm$parser$Parser$Advanced$Nestable = {$: 'Nestable'};
var $elm$parser$Parser$Advanced$NotNestable = {$: 'NotNestable'};
var $elm$parser$Parser$toAdvancedNestable = function (nestable) {
	if (nestable.$ === 'NotNestable') {
		return $elm$parser$Parser$Advanced$NotNestable;
	} else {
		return $elm$parser$Parser$Advanced$Nestable;
	}
};
var $elm$parser$Parser$multiComment = F3(
	function (open, close, nestable) {
		return A3(
			$elm$parser$Parser$Advanced$multiComment,
			$elm$parser$Parser$toToken(open),
			$elm$parser$Parser$toToken(close),
			$elm$parser$Parser$toAdvancedNestable(nestable));
	});
var $author$project$HsParser$whitespaceOrComment = A2(
	$elm$parser$Parser$loop,
	0,
	$author$project$HsParser$ifProgress(
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$pithub$elm_parser_bug_workaround$Parser$Workaround$lineCommentAfter('--'),
					A3($elm$parser$Parser$multiComment, '{-', '-}', $elm$parser$Parser$Nestable),
					$author$project$HsParser$whitespace
				]))));
var $author$project$HsParser$dataAlternatives = $elm$parser$Parser$sequence(
	{end: '', item: $author$project$HsParser$dataAlternative, separator: '|', spaces: $author$project$HsParser$whitespaceOrComment, start: '', trailing: $elm$parser$Parser$Forbidden});
var $author$project$AST$Data = function (a) {
	return {$: 'Data', a: a};
};
var $author$project$HsParser$makeArrows = F2(
	function (tyresult, ts) {
		return A3($elm$core$List$foldr, $author$project$Types$TyFun, tyresult, ts);
	});
var $author$project$HsParser$makeDataDecl = F2(
	function (_v0, alts) {
		var tycon = _v0.a;
		var vs = _v0.b;
		var tyresult = A2(
			$author$project$Types$TyConst,
			tycon,
			A2($elm$core$List$map, $author$project$Types$TyVar, vs));
		var tyalts = A2(
			$elm$core$List$map,
			function (_v1) {
				var con = _v1.a;
				var tyargs = _v1.b;
				return _Utils_Tuple2(
					con,
					A2($author$project$HsParser$makeArrows, tyresult, tyargs));
			},
			alts);
		return $author$project$AST$Data(
			{alternatives: tyalts, args: vs, tycon: tycon});
	});
var $author$project$HsParser$identifiers = $elm$parser$Parser$sequence(
	{end: '', item: $author$project$HsParser$identifier, separator: '', spaces: $author$project$HsParser$spaces, start: '', trailing: $elm$parser$Parser$Forbidden});
var $author$project$HsParser$simpleType = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Tuple$pair),
		A2($elm$parser$Parser$ignorer, $author$project$HsParser$upperIdentifier, $author$project$HsParser$spaces)),
	A2(
		$elm$parser$Parser$andThen,
		A2($author$project$HsParser$ensure, $elm_community$list_extra$List$Extra$allDifferent, 'distinct type variables'),
		$author$project$HsParser$identifiers));
var $author$project$HsParser$dataDeclaration = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($author$project$HsParser$makeDataDecl),
				$elm$parser$Parser$keyword('data')),
			$author$project$HsParser$spaces),
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2($elm$parser$Parser$ignorer, $author$project$HsParser$simpleType, $author$project$HsParser$spaces),
				$author$project$HsParser$operator('=')),
			$author$project$HsParser$spaces)),
	$author$project$HsParser$dataAlternatives);
var $author$project$HsParser$infixLHS = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				F3(
					function (p1, op, p2) {
						return _Utils_Tuple3(p1, op, p2);
					})),
			A2($elm$parser$Parser$ignorer, $author$project$HsParser$consPattern, $author$project$HsParser$spaces)),
		A2($elm$parser$Parser$ignorer, $author$project$HsParser$infixOperator, $author$project$HsParser$spaces)),
	A2($elm$parser$Parser$ignorer, $author$project$HsParser$consPattern, $author$project$HsParser$spaces));
var $author$project$HsParser$makeInfixEquation = F4(
	function (op, p1, p2, match) {
		return A2(
			$author$project$AST$Equation,
			op,
			A2(
				$author$project$AST$Match,
				p1,
				A2($author$project$AST$Match, p2, match)));
	});
var $author$project$HsParser$infixEquation = A2(
	$elm$parser$Parser$andThen,
	function (_v0) {
		var _v1 = _v0.a;
		var p1 = _v1.a;
		var op = _v1.b;
		var p2 = _v1.c;
		var prefix = _v0.b;
		return A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F2(
						function (m, binds) {
							return A4(
								$author$project$HsParser$makeInfixEquation,
								op,
								p1,
								p2,
								A2($author$project$HsParser$makeBindings, binds, m));
						})),
				A2(
					$elm$parser$Parser$ignorer,
					$author$project$HsParser$equationAlts(prefix),
					$author$project$HsParser$whitespace)),
			$author$project$HsParser$whereBindings);
	},
	$author$project$HsParser$getParseChomped_($author$project$HsParser$infixLHS));
var $author$project$AST$Alias = function (a) {
	return {$: 'Alias', a: a};
};
var $author$project$HsParser$typeDeclaration = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(
					F2(
						function (_v0, ty) {
							var tycon = _v0.a;
							var vs = _v0.b;
							return $author$project$AST$Alias(
								{args: vs, tycon: tycon, tyexp: ty});
						})),
				$elm$parser$Parser$keyword('type')),
			$author$project$HsParser$spaces),
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2($elm$parser$Parser$ignorer, $author$project$HsParser$simpleType, $author$project$HsParser$spaces),
				$author$project$HsParser$operator('=')),
			$author$project$HsParser$spaces)),
	$author$project$HsParser$typeExpr);
var $author$project$HsParser$topDeclaration = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			$author$project$HsParser$dataDeclaration,
			$author$project$HsParser$typeDeclaration,
			$elm$parser$Parser$backtrackable($author$project$HsParser$typeSignature),
			$elm$parser$Parser$backtrackable($author$project$HsParser$prefixEquation),
			$author$project$HsParser$infixEquation
		]));
var $author$project$HsParser$topDeclList = $elm$parser$Parser$sequence(
	{end: '', item: $author$project$HsParser$topDeclaration, separator: '', spaces: $author$project$HsParser$whitespaceOrComment, start: '', trailing: $elm$parser$Parser$Forbidden});
var $author$project$HsParser$toplevelModule = A2(
	$elm$parser$Parser$andThen,
	function (mod) {
		var _v0 = $author$project$HsParser$checkBinds(mod.binds);
		if (_v0.$ === 'Err') {
			var msg = _v0.a;
			return $elm$parser$Parser$problem(msg);
		} else {
			return $elm$parser$Parser$succeed(mod);
		}
	},
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($author$project$HsParser$collectDeclarations),
		A2($elm$parser$Parser$ignorer, $author$project$HsParser$topDeclList, $elm$parser$Parser$end)));
var $author$project$HsParser$parseModule = function (input) {
	return A2(
		$elm$core$Result$mapError,
		$author$project$HsParser$deadEndsToString,
		A2($elm$parser$Parser$run, $author$project$HsParser$toplevelModule, input));
};
var $author$project$Tc$fromTc = function (_v0) {
	var m = _v0.a;
	return m;
};
var $folkertdev$elm_state$State$run = F2(
	function (initialState, _v0) {
		var s = _v0.a;
		return s(initialState);
	});
var $author$project$Tc$run = F2(
	function (s, m) {
		return A2(
			$folkertdev$elm_state$State$run,
			s,
			$author$project$Tc$fromTc(m));
	});
var $author$project$Tc$eval = function (m) {
	var s = {unifier: $elm$core$Dict$empty, varcount: 0};
	return A2($author$project$Tc$run, s, m).a;
};
var $author$project$Types$KindStar = {$: 'KindStar'};
var $author$project$Types$KindFun = F2(
	function (a, b) {
		return {$: 'KindFun', a: a, b: b};
	});
var $author$project$Typecheck$kindArgs = function (n) {
	return (n > 0) ? A2(
		$author$project$Types$KindFun,
		$author$project$Types$KindStar,
		$author$project$Typecheck$kindArgs(n - 1)) : $author$project$Types$KindStar;
};
var $author$project$Typecheck$initialKindEnv = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('Int', $author$project$Types$KindStar),
			_Utils_Tuple2('Char', $author$project$Types$KindStar),
			_Utils_Tuple2('()', $author$project$Types$KindStar),
			_Utils_Tuple2(
			'(,)',
			$author$project$Typecheck$kindArgs(2)),
			_Utils_Tuple2(
			'(,,)',
			$author$project$Typecheck$kindArgs(3)),
			_Utils_Tuple2(
			'(,,,)',
			$author$project$Typecheck$kindArgs(4)),
			_Utils_Tuple2(
			'[]',
			$author$project$Typecheck$kindArgs(1))
		]));
var $author$project$Types$TyGen = function (a) {
	return {$: 'TyGen', a: a};
};
var $author$project$Types$tyBool = A2($author$project$Types$TyConst, 'Bool', _List_Nil);
var $author$project$Types$tyInt = A2($author$project$Types$TyConst, 'Int', _List_Nil);
var $author$project$Types$tyOrdering = A2($author$project$Types$TyConst, 'Ordering', _List_Nil);
var $author$project$Typecheck$initialTypeEnv = function () {
	var intOp = A2(
		$author$project$Types$TyFun,
		$author$project$Types$tyInt,
		A2($author$project$Types$TyFun, $author$project$Types$tyInt, $author$project$Types$tyInt));
	var d = $author$project$Types$TyGen(3);
	var c = $author$project$Types$TyGen(2);
	var b = $author$project$Types$TyGen(1);
	var a = $author$project$Types$TyGen(0);
	var cmpOp = A2(
		$author$project$Types$TyFun,
		a,
		A2($author$project$Types$TyFun, a, $author$project$Types$tyBool));
	var orderOp = A2(
		$author$project$Types$TyFun,
		a,
		A2($author$project$Types$TyFun, a, $author$project$Types$tyOrdering));
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('+', intOp),
				_Utils_Tuple2('*', intOp),
				_Utils_Tuple2('-', intOp),
				_Utils_Tuple2('mod', intOp),
				_Utils_Tuple2('div', intOp),
				_Utils_Tuple2(
				'negate',
				A2($author$project$Types$TyFun, $author$project$Types$tyInt, $author$project$Types$tyInt)),
				_Utils_Tuple2('==', cmpOp),
				_Utils_Tuple2('/=', cmpOp),
				_Utils_Tuple2('<=', cmpOp),
				_Utils_Tuple2('>=', cmpOp),
				_Utils_Tuple2('<', cmpOp),
				_Utils_Tuple2('>', cmpOp),
				_Utils_Tuple2('compare', orderOp),
				_Utils_Tuple2(
				'error',
				A2($author$project$Types$TyFun, $author$project$Types$tyString, a)),
				_Utils_Tuple2(
				':',
				A2(
					$author$project$Types$TyFun,
					a,
					A2(
						$author$project$Types$TyFun,
						$author$project$Types$tyList(a),
						$author$project$Types$tyList(a)))),
				_Utils_Tuple2(
				'[]',
				$author$project$Types$tyList(a)),
				_Utils_Tuple2('()', $author$project$Types$tyUnit),
				_Utils_Tuple2(
				',',
				A2(
					$author$project$Types$TyFun,
					a,
					A2(
						$author$project$Types$TyFun,
						b,
						A2($author$project$Types$tyPair, a, b)))),
				_Utils_Tuple2(
				',,',
				A2(
					$author$project$Types$TyFun,
					a,
					A2(
						$author$project$Types$TyFun,
						b,
						A2(
							$author$project$Types$TyFun,
							c,
							A3($author$project$Types$tyTuple3, a, b, c))))),
				_Utils_Tuple2(
				',,,',
				A2(
					$author$project$Types$TyFun,
					a,
					A2(
						$author$project$Types$TyFun,
						b,
						A2(
							$author$project$Types$TyFun,
							c,
							A2(
								$author$project$Types$TyFun,
								d,
								A4($author$project$Types$tyTuple4, a, b, c, d)))))),
				_Utils_Tuple2(
				'enumFrom',
				A2(
					$author$project$Types$TyFun,
					$author$project$Types$tyInt,
					$author$project$Types$tyList($author$project$Types$tyInt))),
				_Utils_Tuple2(
				'enumFromTo',
				A2(
					$author$project$Types$TyFun,
					$author$project$Types$tyInt,
					A2(
						$author$project$Types$TyFun,
						$author$project$Types$tyInt,
						$author$project$Types$tyList($author$project$Types$tyInt)))),
				_Utils_Tuple2(
				'enumFromThen',
				A2(
					$author$project$Types$TyFun,
					$author$project$Types$tyInt,
					A2(
						$author$project$Types$TyFun,
						$author$project$Types$tyInt,
						$author$project$Types$tyList($author$project$Types$tyInt)))),
				_Utils_Tuple2(
				'enumFromThenTo',
				A2(
					$author$project$Types$TyFun,
					$author$project$Types$tyInt,
					A2(
						$author$project$Types$TyFun,
						$author$project$Types$tyInt,
						A2(
							$author$project$Types$TyFun,
							$author$project$Types$tyInt,
							$author$project$Types$tyList($author$project$Types$tyInt))))),
				_Utils_Tuple2(
				'chr',
				A2($author$project$Types$TyFun, $author$project$Types$tyInt, $author$project$Types$tyChar)),
				_Utils_Tuple2(
				'ord',
				A2($author$project$Types$TyFun, $author$project$Types$tyChar, $author$project$Types$tyInt)),
				_Utils_Tuple2(
				'toUpper',
				A2($author$project$Types$TyFun, $author$project$Types$tyChar, $author$project$Types$tyChar)),
				_Utils_Tuple2(
				'toLower',
				A2($author$project$Types$TyFun, $author$project$Types$tyChar, $author$project$Types$tyChar)),
				_Utils_Tuple2(
				'isUpper',
				A2($author$project$Types$TyFun, $author$project$Types$tyChar, $author$project$Types$tyBool)),
				_Utils_Tuple2(
				'isLower',
				A2($author$project$Types$TyFun, $author$project$Types$tyChar, $author$project$Types$tyBool)),
				_Utils_Tuple2(
				'isDigit',
				A2($author$project$Types$TyFun, $author$project$Types$tyChar, $author$project$Types$tyBool)),
				_Utils_Tuple2(
				'isAlpha',
				A2($author$project$Types$TyFun, $author$project$Types$tyChar, $author$project$Types$tyBool)),
				_Utils_Tuple2(
				'isAlphaNum',
				A2($author$project$Types$TyFun, $author$project$Types$tyChar, $author$project$Types$tyBool)),
				_Utils_Tuple2(
				'show',
				A2($author$project$Types$TyFun, $author$project$Types$tyInt, $author$project$Types$tyString)),
				_Utils_Tuple2(
				'force',
				A2($author$project$Types$TyFun, a, a))
			]));
}();
var $author$project$Prelude$preludeText = '\n-- Basic algebraic data types\ndata Bool = True | False\n\ndata Maybe a = Nothing | Just a\n\ndata Either a b = Left a | Right b\n\ndata Ordering = LT | EQ | GT\n\n-- Prelude bindings\nundefined :: a\nundefined = error "undefined"\n\nid :: a -> a\nid x = x\n\nconst :: a -> b -> a\nconst x y = x\n\nflip :: (a -> b -> c) -> b -> a -> c\nflip f x y = f y x\n\n(.) :: (b -> c) -> (a -> b) -> a -> c\nf . g = \\x -> f (g x)\n\n($) :: (a -> b) -> a -> b\nf $ x = f x\n\n($!) :: (a -> b) -> a -> b\nf $! !x = f x\n\nseq :: a -> b -> b\nseq !x y = y\n\notherwise :: Bool\notherwise = True\n\n(&&) :: Bool -> Bool -> Bool\nFalse && _ = False\nTrue  && x = x\n\n(||) :: Bool -> Bool -> Bool\nFalse || x = x\nTrue  || _ = True\n\nnot :: Bool -> Bool\nnot True = False\nnot False = True\n\neven :: Int -> Bool\neven x = x `mod` 2 == 0\n\nodd :: Int -> Bool\nodd x = x `mod` 2 == 1\n\n-- NB: these are too polymorphic!\nmin :: a -> a -> a\nmin x y | x<=y = x\n        | otherwise = y\n\nmax :: a -> a -> a\nmax x y | x<=y = y\n        | otherwise = x\n\nfst :: (a,b) -> a\nfst (x,_) = x\n\nsnd :: (a,b) -> b\nsnd (_,y) = y\n\nnull :: [a] -> Bool\nnull [] = True\nnull (_:_) = False\n\nhead :: [a] -> a\nhead [] = error "head: empty list"\nhead (x:_) = x\n\ntail :: [a] -> [a]\ntail [] = error "tail: empty list"\ntail (_:xs) = xs\n\nlength :: [a] -> Int\nlength [] = 0\nlength (_:xs) = 1 + length xs\n\n(++) :: [a] -> [a] -> [a]\n[] ++ ys = ys\n(x:xs) ++ ys = x:(xs++ys)\n\nreverse :: [a] -> [a]\nreverse xs = reverseAcc xs []\n\nreverseAcc [] acc = acc\nreverseAcc (x:xs) acc = reverseAcc xs (x:acc)\n\nsum :: [Int] -> Int\nsum [] = 0\nsum (x:xs) = x + sum xs\n\nproduct :: [Int] -> Int\nproduct [] = 1\nproduct (x:xs) = x * product xs\n\n-- NB: these are overly polymorphic!\nmaximum :: [a] -> a\nmaximum [] = error "maximum: empty list"\nmaximum [x] = x\nmaximum (x:xs) = max x (maximum xs)\n\nminimum :: [a] -> a\nminimum [] = error "minimum: empty list"\nminimum [x] = x\nminimum (x:xs) = min x (minimum xs) \n\ntake :: Int -> [a] -> [a]\ntake n xs | n<=0 = []\ntake n [] = []\ntake n (x:xs) = x : take (n-1) xs\n\ndrop :: Int -> [a] -> [a]\ndrop n xs | n<=0 = xs\ndrop n [] = []\ndrop n (x:xs) = drop (n-1) xs\n\n(!!) :: [a] -> Int -> a\n_ !! n | n<0 = error "!!: negative index"\n[] !! _ = error "!!: index too large"\n(x:_) !! 0 = x\n(_:xs) !! n = xs !! (n-1)\n\nconcat :: [[a]] -> [a]\nconcat [] = []\nconcat (xs:xss) = xs ++ concat xss\n\nrepeat :: a -> [a]\nrepeat x = let xs = x:xs \n           in xs\n\nreplicate :: Int -> a -> [a]\nreplicate 0 _ = []\nreplicate n x = x : replicate (n-1) x\n\ncycle :: [a] -> [a]\ncycle [] = error "cycle: empty list"\ncycle xs = let xs\' = xs++xs\' \n           in xs\'\n\niterate :: (a -> a) -> a -> [a]\niterate f x = x : iterate f (f x)\n\nand :: [Bool] -> Bool\nand [] = True\nand (x:xs) = x && and xs\n\nor :: [Bool] -> Bool\nor [] = False\nor (x:xs) = x || or xs\n\nany :: (a -> Bool) -> [a] -> Bool\nany f [] = False\nany f (x:xs) = f x || any f xs\n\nall :: (a -> Bool) -> [a] -> Bool\nall f [] = True\nall f (x:xs) = f x && all f xs\n\nmap :: (a->b) -> [a] -> [b]\nmap f [] = []\nmap f (x:xs) = f x : map f xs\n\nfilter :: (a -> Bool) -> [a] -> [a]\nfilter f [] = []\nfilter f (x:xs) | f x = x : filter f xs \n                | otherwise = filter f xs\n\nzip :: [a] -> [b] -> [(a,b)]\nzip [] _ = []\nzip _ [] = []\nzip (x:xs) (y:ys) = (x,y) : zip xs ys\n\nzipWith :: (a -> b -> c) -> [a] -> [b] -> [c]\nzipWith f [] ys = []\nzipWith f xs [] = []\nzipWith f (x:xs) (y:ys) = f x y : zipWith f xs ys\n\nfoldr :: (a -> b -> b) -> b -> [a] -> b\nfoldr f z [] = z\nfoldr f z (x:xs) = f x (foldr f z xs)\n\nfoldl :: (a -> b -> a) -> a -> [b] -> a\nfoldl f z [] = z\nfoldl f z (x:xs) = foldl f (f z x) xs\n\n-- from Data.List\nfoldl\' :: (a -> b -> a) -> a -> [b] -> a\nfoldl\' f z [] = z\nfoldl\' f !z (x:xs) = foldl\' f (f z x) xs\n\ntakeWhile :: (a -> Bool) -> [a] -> [a]\ntakeWhile p [] = []\ntakeWhile p (x:xs) | p x = x : takeWhile p xs\n                   | otherwise = []\n\ndropWhile :: (a -> Bool) -> [a] -> [a]\ndropWhile p [] = []\ndropWhile p (x:xs) | p x = dropWhile p xs\n                   | otherwise = x:xs\n\nenumFrom :: Int -> [Int]\nenumFrom !n = n : enumFrom (n+1)\n\nenumFromTo :: Int -> Int -> [Int]\nenumFromTo i j | i<=j = i : enumFromTo (i+1) j\n               | otherwise = []\n\nenumFromThen :: Int -> Int -> [Int]\nenumFromThen !n0 !n1 = n0 : enumFromThen n1 (n1+n1-n0)\n\nenumFromThenTo :: Int -> Int -> Int -> [Int]\nenumFromThenTo n0 n1 k \n    | step>=0 = up n0 \n    | otherwise = down n0\n    where step = n1-n0\n          up n | n<=k = n : up (n+step)\n               | otherwise = []\n          down n | n>=k = n : down (n+step)\n                 | otherwise = []\n                      \nlookup :: a -> [(a,b)] -> Maybe b\nlookup _ [] = Nothing\nlookup x ((y,v):rest) | x == y = Just v\n                      | otherwise = lookup x rest\n\n-- from Data.List\ninit :: [a] -> [a]\ninit [] = error "init: empty list"\ninit [_] = []\ninit (x:xs) = x : init xs\n\nlast :: [a] -> a\nlast [] = error "last: empty list"\nlast [x] = x\nlast (_:xs) = last xs\n';
var $author$project$Prelude$preludeModule = A2(
	$elm$core$Result$mapError,
	$author$project$HsParser$deadEndsToString,
	A2($elm$parser$Parser$run, $author$project$HsParser$toplevelModule, $author$project$Prelude$preludeText));
var $author$project$Tc$Tc = function (a) {
	return {$: 'Tc', a: a};
};
var $folkertdev$elm_state$State$State = function (a) {
	return {$: 'State', a: a};
};
var $folkertdev$elm_state$State$andThen = F2(
	function (f, _v0) {
		var h = _v0.a;
		return $folkertdev$elm_state$State$State(
			function (s) {
				var _v1 = h(s);
				var a = _v1.a;
				var newState = _v1.b;
				var _v2 = f(a);
				var g = _v2.a;
				return g(newState);
			});
	});
var $folkertdev$elm_state$State$state = function (value) {
	return $folkertdev$elm_state$State$State(
		function (s) {
			return _Utils_Tuple2(value, s);
		});
};
var $author$project$Tc$andThen = F2(
	function (f, m) {
		return $author$project$Tc$Tc(
			A2(
				$folkertdev$elm_state$State$andThen,
				function (r) {
					if (r.$ === 'Ok') {
						var v = r.a;
						return $author$project$Tc$fromTc(
							f(v));
					} else {
						var err = r.a;
						return $folkertdev$elm_state$State$state(
							$elm$core$Result$Err(err));
					}
				},
				$author$project$Tc$fromTc(m)));
	});
var $author$project$Typecheck$extendKindEnv = F2(
	function (kindenv, pairs) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, e) {
					var v = _v0.a;
					var k = _v0.b;
					return A3($elm$core$Dict$insert, v, k, e);
				}),
			kindenv,
			pairs);
	});
var $author$project$Typecheck$getKindDecl = function (decl) {
	var kind = A3(
		$elm$core$List$foldr,
		F2(
			function (_v0, k) {
				return A2($author$project$Types$KindFun, $author$project$Types$KindStar, k);
			}),
		$author$project$Types$KindStar,
		decl.args);
	return _Utils_Tuple2(decl.tycon, kind);
};
var $author$project$Typecheck$makeAliases = function (adecls) {
	return $elm$core$Dict$fromList(
		A2(
			$elm$core$List$map,
			function (d) {
				return _Utils_Tuple2(
					d.tycon,
					_Utils_Tuple2(d.args, d.tyexp));
			},
			adecls));
};
var $author$project$Tc$pure = function (v) {
	return $author$project$Tc$Tc(
		$folkertdev$elm_state$State$state(
			$elm$core$Result$Ok(v)));
};
var $author$project$Types$applyTySubst = F2(
	function (s, ty) {
		switch (ty.$) {
			case 'TyGen':
				return ty;
			case 'TyVar':
				var name = ty.a;
				var _v1 = A2($elm$core$Dict$get, name, s);
				if (_v1.$ === 'Nothing') {
					return ty;
				} else {
					var t1 = _v1.a;
					return t1;
				}
			case 'TyFun':
				var t1 = ty.a;
				var t2 = ty.b;
				return A2(
					$author$project$Types$TyFun,
					A2($author$project$Types$applyTySubst, s, t1),
					A2($author$project$Types$applyTySubst, s, t2));
			default:
				var c = ty.a;
				var ts = ty.b;
				return A2(
					$author$project$Types$TyConst,
					c,
					A2(
						$elm$core$List$map,
						$author$project$Types$applyTySubst(s),
						ts));
		}
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $author$project$Shows$quote = function (name) {
	return '’' + (name + '’');
};
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $author$project$Typecheck$showCycle = function (cs) {
	return $elm$core$String$concat(
		A2(
			$elm$core$List$intersperse,
			' -> ',
			$elm$core$List$reverse(cs)));
};
var $author$project$Typecheck$expandList = F3(
	function (tyalias, acc, ts) {
		if (!ts.b) {
			return $elm$core$Result$Ok(_List_Nil);
		} else {
			var first = ts.a;
			var rest = ts.b;
			return A2(
				$elm$core$Result$andThen,
				function (first1) {
					return A2(
						$elm$core$Result$andThen,
						function (rest1) {
							return $elm$core$Result$Ok(
								A2($elm$core$List$cons, first1, rest1));
						},
						A3($author$project$Typecheck$expandList, tyalias, acc, rest));
				},
				A3($author$project$Typecheck$expandRec, tyalias, acc, first));
		}
	});
var $author$project$Typecheck$expandRec = F3(
	function (tyalias, acc, ty) {
		expandRec:
		while (true) {
			switch (ty.$) {
				case 'TyVar':
					return $elm$core$Result$Ok(ty);
				case 'TyGen':
					return $elm$core$Result$Ok(ty);
				case 'TyFun':
					var t1 = ty.a;
					var t2 = ty.b;
					return A2(
						$elm$core$Result$andThen,
						function (t1e) {
							return A2(
								$elm$core$Result$andThen,
								function (t2e) {
									return $elm$core$Result$Ok(
										A2($author$project$Types$TyFun, t1e, t2e));
								},
								A3($author$project$Typecheck$expandRec, tyalias, acc, t2));
						},
						A3($author$project$Typecheck$expandRec, tyalias, acc, t1));
				default:
					var c = ty.a;
					var ts = ty.b;
					var _v1 = A2($elm$core$Dict$get, c, tyalias);
					if (_v1.$ === 'Nothing') {
						return A2(
							$elm$core$Result$andThen,
							function (ts1) {
								return $elm$core$Result$Ok(
									A2($author$project$Types$TyConst, c, ts1));
							},
							A3($author$project$Typecheck$expandList, tyalias, acc, ts));
					} else {
						var _v2 = _v1.a;
						var vs = _v2.a;
						var ty1 = _v2.b;
						if (A2($elm$core$List$member, c, acc)) {
							return $elm$core$Result$Err(
								'cycle in type synonym declaration: ' + $author$project$Typecheck$showCycle(
									A2($elm$core$List$cons, c, acc)));
						} else {
							if (!_Utils_eq(
								$elm$core$List$length(vs),
								$elm$core$List$length(ts))) {
								return $elm$core$Result$Err(
									'wrong number of arguments to type synonym ' + $author$project$Shows$quote(c));
							} else {
								var s = $elm$core$Dict$fromList(
									A3($elm$core$List$map2, $elm$core$Tuple$pair, vs, ts));
								var $temp$tyalias = tyalias,
									$temp$acc = A2($elm$core$List$cons, c, acc),
									$temp$ty = A2($author$project$Types$applyTySubst, s, ty1);
								tyalias = $temp$tyalias;
								acc = $temp$acc;
								ty = $temp$ty;
								continue expandRec;
							}
						}
					}
			}
		}
	});
var $author$project$Tc$fail = function (e) {
	return $author$project$Tc$Tc(
		$folkertdev$elm_state$State$state(
			$elm$core$Result$Err(e)));
};
var $author$project$Typecheck$expand = F2(
	function (tyalias, ty) {
		var _v0 = A3($author$project$Typecheck$expandRec, tyalias, _List_Nil, ty);
		if (_v0.$ === 'Err') {
			var msg = _v0.a;
			return $author$project$Tc$fail(msg);
		} else {
			var ty1 = _v0.a;
			return $author$project$Tc$pure(ty1);
		}
	});
var $author$project$Typecheck$tcExpandBind = F2(
	function (tyalias, bind) {
		var _v0 = bind.typeSig;
		if (_v0.$ === 'Nothing') {
			return $author$project$Tc$pure(bind);
		} else {
			var ty = _v0.a;
			return A2(
				$author$project$Tc$andThen,
				function (ty1) {
					return $author$project$Tc$pure(
						_Utils_update(
							bind,
							{
								typeSig: $elm$core$Maybe$Just(ty1)
							}));
				},
				A2($author$project$Typecheck$expand, tyalias, ty));
		}
	});
var $author$project$Tc$traverse = F2(
	function (f, lst) {
		if (!lst.b) {
			return $author$project$Tc$pure(_List_Nil);
		} else {
			var v = lst.a;
			var vs = lst.b;
			return A2(
				$author$project$Tc$andThen,
				function (u) {
					return A2(
						$author$project$Tc$andThen,
						function (us) {
							return $author$project$Tc$pure(
								A2($elm$core$List$cons, u, us));
						},
						A2($author$project$Tc$traverse, f, vs));
				},
				f(v));
		}
	});
var $author$project$Typecheck$tcExpandBinds = F2(
	function (tyalias, binds) {
		return A2(
			$author$project$Tc$traverse,
			$author$project$Typecheck$tcExpandBind(tyalias),
			binds);
	});
var $folkertdev$elm_state$State$map = F2(
	function (f, _v0) {
		var step = _v0.a;
		return $folkertdev$elm_state$State$State(
			function (currentState) {
				var _v1 = step(currentState);
				var value = _v1.a;
				var newState = _v1.b;
				return _Utils_Tuple2(
					f(value),
					newState);
			});
	});
var $author$project$Tc$explain = F2(
	function (mesg, action) {
		return $author$project$Tc$Tc(
			A2(
				$folkertdev$elm_state$State$map,
				$elm$core$Result$mapError(
					function (s) {
						return _Utils_ap(mesg, s);
					}),
				$author$project$Tc$fromTc(action)));
	});
var $author$project$Typecheck$tcExpandDataDecl = F2(
	function (tyalias, ddecl) {
		return A2(
			$author$project$Tc$explain,
			'in declaration for ' + ($author$project$Shows$quote(ddecl.tycon) + ', '),
			A2(
				$author$project$Tc$andThen,
				function (alts) {
					return $author$project$Tc$pure(
						_Utils_update(
							ddecl,
							{alternatives: alts}));
				},
				A2(
					$author$project$Tc$traverse,
					function (_v0) {
						var tag = _v0.a;
						var ty = _v0.b;
						return A2(
							$author$project$Tc$andThen,
							function (ty1) {
								return $author$project$Tc$pure(
									_Utils_Tuple2(tag, ty1));
							},
							A2($author$project$Typecheck$expand, tyalias, ty));
					},
					ddecl.alternatives)));
	});
var $author$project$Typecheck$tcExpandDataDecls = F2(
	function (tyalias, ddecls) {
		return A2(
			$author$project$Tc$traverse,
			$author$project$Typecheck$tcExpandDataDecl(tyalias),
			ddecls);
	});
var $author$project$Tc$traverse_ = F2(
	function (f, lst) {
		if (!lst.b) {
			return $author$project$Tc$pure(_Utils_Tuple0);
		} else {
			var v = lst.a;
			var vs = lst.b;
			return A2(
				$author$project$Tc$andThen,
				function (_v1) {
					return A2($author$project$Tc$traverse_, f, vs);
				},
				f(v));
		}
	});
var $author$project$Typecheck$wellformedApp = F2(
	function (kind, tys) {
		wellformedApp:
		while (true) {
			if (!tys.b) {
				return _Utils_eq(kind, $author$project$Types$KindStar) ? $author$project$Tc$pure(_Utils_Tuple0) : $author$project$Tc$fail('missing type argument');
			} else {
				var ty = tys.a;
				var rest = tys.b;
				if ((kind.$ === 'KindFun') && (kind.a.$ === 'KindStar')) {
					var _v2 = kind.a;
					var kresult = kind.b;
					var $temp$kind = kresult,
						$temp$tys = rest;
					kind = $temp$kind;
					tys = $temp$tys;
					continue wellformedApp;
				} else {
					return $author$project$Tc$fail('too many type arguments');
				}
			}
		}
	});
var $author$project$Typecheck$wellformedType = F2(
	function (kenv, ty) {
		switch (ty.$) {
			case 'TyVar':
				var v = ty.a;
				var _v1 = A2($elm$core$Dict$get, v, kenv);
				if (_v1.$ === 'Just') {
					return $author$project$Tc$pure(_Utils_Tuple0);
				} else {
					return $author$project$Tc$fail(
						'unbound type variable ' + $author$project$Shows$quote(v));
				}
			case 'TyGen':
				return $author$project$Tc$pure(_Utils_Tuple0);
			case 'TyFun':
				var t1 = ty.a;
				var t2 = ty.b;
				return A2(
					$author$project$Typecheck$wellformedTypes,
					kenv,
					_List_fromArray(
						[t1, t2]));
			default:
				var c = ty.a;
				var ts = ty.b;
				var _v2 = A2($elm$core$Dict$get, c, kenv);
				if (_v2.$ === 'Just') {
					var kind = _v2.a;
					return A2(
						$author$project$Tc$andThen,
						function (_v3) {
							return A2(
								$author$project$Tc$explain,
								'in type constructor ' + ($author$project$Shows$quote(c) + ': '),
								A2($author$project$Typecheck$wellformedApp, kind, ts));
						},
						A2($author$project$Typecheck$wellformedTypes, kenv, ts));
				} else {
					return $author$project$Tc$fail(
						'unknown type constructor ' + $author$project$Shows$quote(c));
				}
		}
	});
var $author$project$Typecheck$wellformedTypes = F2(
	function (kenv, ts) {
		return A2(
			$author$project$Tc$traverse_,
			$author$project$Typecheck$wellformedType(kenv),
			ts);
	});
var $author$project$Typecheck$wellformedAliasDecl = F3(
	function (kenv, tyalias, adecl) {
		var kenv1 = A2(
			$author$project$Typecheck$extendKindEnv,
			kenv,
			A2(
				$elm$core$List$map,
				function (v) {
					return _Utils_Tuple2(v, $author$project$Types$KindStar);
				},
				adecl.args));
		return A2(
			$author$project$Tc$explain,
			'in declaration for type synonym ' + ($author$project$Shows$quote(adecl.tycon) + ': '),
			A2(
				$author$project$Tc$andThen,
				function (_v0) {
					return A2($author$project$Typecheck$wellformedType, kenv1, adecl.tyexp);
				},
				A2($author$project$Typecheck$expand, tyalias, adecl.tyexp)));
	});
var $author$project$Typecheck$wellformedAliasDecls = F3(
	function (kenv, tyalias, adecls) {
		return A2(
			$author$project$Tc$traverse_,
			A2($author$project$Typecheck$wellformedAliasDecl, kenv, tyalias),
			adecls);
	});
var $author$project$Typecheck$tcExpandModule = F2(
	function (kenv, mod) {
		var tyalias = $author$project$Typecheck$makeAliases(mod.aliasDecls);
		return A2(
			$author$project$Tc$andThen,
			function (_v0) {
				return A2(
					$author$project$Tc$andThen,
					function (ddecls) {
						return A2(
							$author$project$Tc$andThen,
							function (binds) {
								return $author$project$Tc$pure(
									{aliasDecls: _List_Nil, binds: binds, dataDecls: ddecls});
							},
							A2($author$project$Typecheck$tcExpandBinds, tyalias, mod.binds));
					},
					A2($author$project$Typecheck$tcExpandDataDecls, tyalias, mod.dataDecls));
			},
			A3($author$project$Typecheck$wellformedAliasDecls, kenv, tyalias, mod.aliasDecls));
	});
var $author$project$Typecheck$extendTyEnv = F2(
	function (tenv, pairs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (_v0, e) {
					var v = _v0.a;
					var t = _v0.b;
					return A3($elm$core$Dict$insert, v, t, e);
				}),
			tenv,
			pairs);
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $author$project$Types$freeTyVarsAux = F2(
	function (ty, acc) {
		freeTyVarsAux:
		while (true) {
			switch (ty.$) {
				case 'TyGen':
					return acc;
				case 'TyVar':
					var v = ty.a;
					return A2($elm$core$List$cons, v, acc);
				case 'TyFun':
					var t1 = ty.a;
					var t2 = ty.b;
					var $temp$ty = t1,
						$temp$acc = A2($author$project$Types$freeTyVarsAux, t2, acc);
					ty = $temp$ty;
					acc = $temp$acc;
					continue freeTyVarsAux;
				default:
					var c = ty.a;
					var ts = ty.b;
					return A3($elm$core$List$foldr, $author$project$Types$freeTyVarsAux, acc, ts);
			}
		}
	});
var $author$project$Types$nubAux = F2(
	function (lst, acc) {
		nubAux:
		while (true) {
			if (!lst.b) {
				return $elm$core$List$reverse(acc);
			} else {
				var x = lst.a;
				var xs = lst.b;
				if (A2($elm$core$List$member, x, acc)) {
					var $temp$lst = xs,
						$temp$acc = acc;
					lst = $temp$lst;
					acc = $temp$acc;
					continue nubAux;
				} else {
					var $temp$lst = xs,
						$temp$acc = A2($elm$core$List$cons, x, acc);
					lst = $temp$lst;
					acc = $temp$acc;
					continue nubAux;
				}
			}
		}
	});
var $author$project$Types$nub = function (lst) {
	return A2($author$project$Types$nubAux, lst, _List_Nil);
};
var $author$project$Types$freeTyVars = function (ty) {
	return $author$project$Types$nub(
		A2($author$project$Types$freeTyVarsAux, ty, _List_Nil));
};
var $author$project$Types$generalize = F2(
	function (fvs, ty) {
		var vs = A2(
			$elm$core$List$filter,
			function (y) {
				return !A2($elm$core$Set$member, y, fvs);
			},
			$author$project$Types$freeTyVars(ty));
		var gs = A2(
			$elm$core$List$range,
			0,
			$elm$core$List$length(vs) - 1);
		var s = $elm$core$Dict$fromList(
			A3(
				$elm$core$List$map2,
				F2(
					function (v, i) {
						return A2(
							$elm$core$Tuple$pair,
							v,
							$author$project$Types$TyGen(i));
					}),
				vs,
				gs));
		return A2($author$project$Types$applyTySubst, s, ty);
	});
var $author$project$Typecheck$getDataTypes = function (ddecl) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var con = _v0.a;
			var ty = _v0.b;
			return _Utils_Tuple2(
				con,
				A2($author$project$Types$generalize, $elm$core$Set$empty, ty));
		},
		ddecl.alternatives);
};
var $author$project$Typecheck$extendDataDecl = F2(
	function (ddecl, env) {
		return A2(
			$author$project$Typecheck$extendTyEnv,
			env,
			$author$project$Typecheck$getDataTypes(ddecl));
	});
var $author$project$Typecheck$wellformedAlternatives = F2(
	function (kenv, alts) {
		return A2(
			$author$project$Tc$traverse_,
			function (_v0) {
				var cons = _v0.a;
				var typ = _v0.b;
				return A2(
					$author$project$Tc$explain,
					'in constructor ' + ($author$project$Shows$quote(cons) + ', '),
					A2($author$project$Typecheck$wellformedType, kenv, typ));
			},
			alts);
	});
var $author$project$Typecheck$tcDataDecl = F3(
	function (kenv, tyenv, ddecl) {
		var kenv1 = A2(
			$author$project$Typecheck$extendKindEnv,
			kenv,
			A2(
				$elm$core$List$map,
				function (v) {
					return _Utils_Tuple2(v, $author$project$Types$KindStar);
				},
				ddecl.args));
		return A2(
			$author$project$Tc$explain,
			'declaration for ' + ($author$project$Shows$quote(ddecl.tycon) + ', '),
			A2(
				$author$project$Tc$andThen,
				function (_v0) {
					return $author$project$Tc$pure(
						A2($author$project$Typecheck$extendDataDecl, ddecl, tyenv));
				},
				A2($author$project$Typecheck$wellformedAlternatives, kenv1, ddecl.alternatives)));
	});
var $author$project$Typecheck$tcDataDecls = F3(
	function (kenv, tenv, ddecls) {
		if (!ddecls.b) {
			return $author$project$Tc$pure(tenv);
		} else {
			var ddecl = ddecls.a;
			var rest = ddecls.b;
			return A2(
				$author$project$Tc$andThen,
				function (tenv1) {
					return A3($author$project$Typecheck$tcDataDecls, kenv, tenv1, rest);
				},
				A3($author$project$Typecheck$tcDataDecl, kenv, tenv, ddecl));
		}
	});
var $author$project$Typecheck$freeTyEnvVars = function (tyenv) {
	return $elm$core$Set$fromList(
		A3(
			$elm$core$Dict$foldl,
			F3(
				function (_v0, ty, acc) {
					return _Utils_ap(
						$author$project$Types$freeTyVars(ty),
						acc);
				}),
			_List_Nil,
			tyenv));
};
var $author$project$Tc$freshInst_ = F2(
	function (r, ty) {
		switch (ty.$) {
			case 'TyGen':
				var gv = ty.a;
				var _v1 = A2($elm$core$Dict$get, gv, r);
				if (_v1.$ === 'Just') {
					var t = _v1.a;
					return t;
				} else {
					return ty;
				}
			case 'TyFun':
				var t1 = ty.a;
				var t2 = ty.b;
				return A2(
					$author$project$Types$TyFun,
					A2($author$project$Tc$freshInst_, r, t1),
					A2($author$project$Tc$freshInst_, r, t2));
			case 'TyConst':
				var c = ty.a;
				var ts = ty.b;
				return A2(
					$author$project$Types$TyConst,
					c,
					A2(
						$elm$core$List$map,
						$author$project$Tc$freshInst_(r),
						ts));
			default:
				return ty;
		}
	});
var $folkertdev$elm_state$State$get = $folkertdev$elm_state$State$State(
	function (s) {
		return _Utils_Tuple2(s, s);
	});
var $author$project$Tc$get = $author$project$Tc$Tc(
	A2($folkertdev$elm_state$State$map, $elm$core$Result$Ok, $folkertdev$elm_state$State$get));
var $author$project$Tc$mkVar = function (n) {
	return 'a' + $elm$core$String$fromInt(n);
};
var $folkertdev$elm_state$State$put = function (x) {
	return $folkertdev$elm_state$State$State(
		function (_v0) {
			return _Utils_Tuple2(_Utils_Tuple0, x);
		});
};
var $author$project$Tc$put = function (s) {
	return $author$project$Tc$Tc(
		A2(
			$folkertdev$elm_state$State$map,
			$elm$core$Result$Ok,
			$folkertdev$elm_state$State$put(s)));
};
var $author$project$Tc$freshVars = function (n) {
	return A2(
		$author$project$Tc$andThen,
		function (s) {
			var c = s.varcount;
			return A2(
				$author$project$Tc$andThen,
				function (_v0) {
					return $author$project$Tc$pure(
						A2(
							$elm$core$List$map,
							$author$project$Tc$mkVar,
							A2($elm$core$List$range, c, (n + c) - 1)));
				},
				$author$project$Tc$put(
					_Utils_update(
						s,
						{varcount: n + c})));
		},
		$author$project$Tc$get);
};
var $author$project$Tc$freshTypes = function (n) {
	return A2(
		$author$project$Tc$andThen,
		function (vs) {
			return $author$project$Tc$pure(
				A2($elm$core$List$map, $author$project$Types$TyVar, vs));
		},
		$author$project$Tc$freshVars(n));
};
var $author$project$Types$genVarsAux = F2(
	function (ty, acc) {
		genVarsAux:
		while (true) {
			switch (ty.$) {
				case 'TyVar':
					return acc;
				case 'TyGen':
					var n = ty.a;
					return A2($elm$core$List$cons, n, acc);
				case 'TyFun':
					var t1 = ty.a;
					var t2 = ty.b;
					var $temp$ty = t1,
						$temp$acc = A2($author$project$Types$genVarsAux, t2, acc);
					ty = $temp$ty;
					acc = $temp$acc;
					continue genVarsAux;
				default:
					var c = ty.a;
					var ts = ty.b;
					return A3($elm$core$List$foldr, $author$project$Types$genVarsAux, acc, ts);
			}
		}
	});
var $author$project$Types$genVars = function (ty) {
	return $author$project$Types$nub(
		A2($author$project$Types$genVarsAux, ty, _List_Nil));
};
var $author$project$Tc$freshInst = function (ty) {
	var gvs = $author$project$Types$genVars(ty);
	return A2(
		$author$project$Tc$andThen,
		function (vs) {
			var r = $elm$core$Dict$fromList(
				A3($elm$core$List$map2, $elm$core$Tuple$pair, gvs, vs));
			return $author$project$Tc$pure(
				A2($author$project$Tc$freshInst_, r, ty));
		},
		$author$project$Tc$freshTypes(
			$elm$core$List$length(gvs)));
};
var $author$project$Tc$freshVar = A2(
	$author$project$Tc$andThen,
	function (s) {
		var c = s.varcount;
		return A2(
			$author$project$Tc$andThen,
			function (_v0) {
				return $author$project$Tc$pure(
					$author$project$Tc$mkVar(c));
			},
			$author$project$Tc$put(
				_Utils_update(
					s,
					{varcount: 1 + c})));
	},
	$author$project$Tc$get);
var $author$project$Tc$freshType = A2(
	$author$project$Tc$andThen,
	function (v) {
		return $author$project$Tc$pure(
			$author$project$Types$TyVar(v));
	},
	$author$project$Tc$freshVar);
var $author$project$Shows$defaultOpts = {justifications: false, layout: false, prettyEnums: false, prettyLists: true};
var $author$project$Machine$Heap$empty = {bounds: 0, indirections: 0, store: $elm$core$Dict$empty};
var $author$project$PrettyPrinter$defaultLength = 70;
var $the_sett$elm_pretty_printer$Internals$Concatenate = F2(
	function (a, b) {
		return {$: 'Concatenate', a: a, b: b};
	});
var $the_sett$elm_pretty_printer$Pretty$append = F2(
	function (doc1, doc2) {
		return A2(
			$the_sett$elm_pretty_printer$Internals$Concatenate,
			function (_v0) {
				return doc1;
			},
			function (_v1) {
				return doc2;
			});
	});
var $the_sett$elm_pretty_printer$Internals$Empty = {$: 'Empty'};
var $the_sett$elm_pretty_printer$Pretty$empty = $the_sett$elm_pretty_printer$Internals$Empty;
var $the_sett$elm_pretty_printer$Pretty$join = F2(
	function (sep, docs) {
		join:
		while (true) {
			if (!docs.b) {
				return $the_sett$elm_pretty_printer$Pretty$empty;
			} else {
				if (docs.a.$ === 'Empty') {
					var _v1 = docs.a;
					var ds = docs.b;
					var $temp$sep = sep,
						$temp$docs = ds;
					sep = $temp$sep;
					docs = $temp$docs;
					continue join;
				} else {
					var d = docs.a;
					var ds = docs.b;
					var step = F2(
						function (x, rest) {
							if (x.$ === 'Empty') {
								return rest;
							} else {
								var doc = x;
								return A2(
									$the_sett$elm_pretty_printer$Pretty$append,
									sep,
									A2($the_sett$elm_pretty_printer$Pretty$append, doc, rest));
							}
						});
					var spersed = A3($elm$core$List$foldr, step, $the_sett$elm_pretty_printer$Pretty$empty, ds);
					return A2($the_sett$elm_pretty_printer$Pretty$append, d, spersed);
				}
			}
		}
	});
var $the_sett$elm_pretty_printer$Internals$Line = F2(
	function (a, b) {
		return {$: 'Line', a: a, b: b};
	});
var $the_sett$elm_pretty_printer$Pretty$line = A2($the_sett$elm_pretty_printer$Internals$Line, ' ', '');
var $the_sett$elm_pretty_printer$Pretty$lines = $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$line);
var $the_sett$elm_pretty_printer$Pretty$separators = function (sep) {
	return $the_sett$elm_pretty_printer$Pretty$join(
		A2($the_sett$elm_pretty_printer$Internals$Line, sep, sep));
};
var $the_sett$elm_pretty_printer$Internals$Text = F2(
	function (a, b) {
		return {$: 'Text', a: a, b: b};
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $the_sett$elm_pretty_printer$Pretty$char = function (c) {
	return A2(
		$the_sett$elm_pretty_printer$Internals$Text,
		$elm$core$String$fromChar(c),
		$elm$core$Maybe$Nothing);
};
var $the_sett$elm_pretty_printer$Pretty$space = $the_sett$elm_pretty_printer$Pretty$char(
	_Utils_chr(' '));
var $the_sett$elm_pretty_printer$Pretty$string = function (val) {
	return A2($the_sett$elm_pretty_printer$Internals$Text, val, $elm$core$Maybe$Nothing);
};
var $the_sett$elm_pretty_printer$Pretty$words = $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$space);
var $author$project$PrettyPrinter$makeCtx = F2(
	function (opts, heap) {
		return {
			heap: heap,
			line: opts.layout ? $the_sett$elm_pretty_printer$Pretty$line : $the_sett$elm_pretty_printer$Pretty$space,
			lines: opts.layout ? $the_sett$elm_pretty_printer$Pretty$lines : $the_sett$elm_pretty_printer$Pretty$words,
			prec: 0,
			prettyEnums: opts.prettyEnums,
			prettyLists: opts.prettyLists,
			separators: opts.layout ? $the_sett$elm_pretty_printer$Pretty$separators : function (sep) {
				return $the_sett$elm_pretty_printer$Pretty$join(
					$the_sett$elm_pretty_printer$Pretty$string(sep));
			}
		};
	});
var $author$project$PrettyPrinter$Constructor = {$: 'Constructor'};
var $author$project$PrettyPrinter$Exception = {$: 'Exception'};
var $author$project$PrettyPrinter$Keyword = {$: 'Keyword'};
var $author$project$PrettyPrinter$Literal = {$: 'Literal'};
var $author$project$PrettyPrinter$String = {$: 'String'};
var $author$project$PrettyPrinter$Variable = {$: 'Variable'};
var $elm_community$basics_extra$Basics$Extra$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var $the_sett$elm_pretty_printer$Pretty$a = $elm_community$basics_extra$Basics$Extra$flip($the_sett$elm_pretty_printer$Pretty$append);
var $the_sett$elm_pretty_printer$Pretty$surround = F3(
	function (left, right, doc) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$append,
			A2($the_sett$elm_pretty_printer$Pretty$append, left, doc),
			right);
	});
var $the_sett$elm_pretty_printer$Pretty$brackets = A2(
	$the_sett$elm_pretty_printer$Pretty$surround,
	$the_sett$elm_pretty_printer$Pretty$char(
		_Utils_chr('[')),
	$the_sett$elm_pretty_printer$Pretty$char(
		_Utils_chr(']')));
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $author$project$PrettyPrinter$escapeChar = F2(
	function (delimiter, c) {
		if (_Utils_eq(c, delimiter)) {
			return '\\' + $elm$core$String$fromChar(delimiter);
		} else {
			switch (c.valueOf()) {
				case '\n':
					return '\\n';
				case '\t':
					return '\\t';
				case '\\':
					return '\\\\';
				default:
					var n = $elm$core$Char$toCode(c);
					return ((n >= 32) && (n <= 127)) ? $elm$core$String$fromChar(c) : ('\\' + $elm$core$String$fromInt(n));
			}
		}
	});
var $author$project$PrettyPrinter$getChar = function (e) {
	if (e.$ === 'Char') {
		var c = e.a;
		return A2(
			$author$project$PrettyPrinter$escapeChar,
			_Utils_chr('\"'),
			c);
	} else {
		return '';
	}
};
var $author$project$PrettyPrinter$isChar = function (e) {
	if (e.$ === 'Char') {
		return true;
	} else {
		return false;
	}
};
var $author$project$PrettyPrinter$checkChars = function (es) {
	return A2($elm$core$List$all, $author$project$PrettyPrinter$isChar, es) ? $elm$core$Maybe$Just(
		$elm$core$String$concat(
			A2($elm$core$List$map, $author$project$PrettyPrinter$getChar, es))) : $elm$core$Maybe$Nothing;
};
var $author$project$PrettyPrinter$checkSpine = function (e) {
	_v0$2:
	while (true) {
		if (e.$ === 'Cons') {
			if (!e.c.b) {
				if (e.b === '[]') {
					return $elm$core$Maybe$Just(_List_Nil);
				} else {
					break _v0$2;
				}
			} else {
				if (((e.b === ':') && e.c.b.b) && (!e.c.b.b.b)) {
					var _v1 = e.c;
					var hd = _v1.a;
					var _v2 = _v1.b;
					var tl = _v2.a;
					return A2(
						$elm$core$Maybe$andThen,
						function (l) {
							return $elm$core$Maybe$Just(
								A2($elm$core$List$cons, hd, l));
						},
						$author$project$PrettyPrinter$checkSpine(tl));
				} else {
					break _v0$2;
				}
			}
		} else {
			break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$Machine$Heap$delete = F2(
	function (name, heap) {
		return _Utils_update(
			heap,
			{
				store: A2($elm$core$Dict$remove, name, heap.store)
			});
	});
var $author$project$Machine$Heap$get = F2(
	function (name, heap) {
		return A2($elm$core$Dict$get, name, heap.store);
	});
var $author$project$PrettyPrinter$collectArgs = F3(
	function (heap, e, acc) {
		collectArgs:
		while (true) {
			switch (e.$) {
				case 'Var':
					var x = e.a;
					var _v1 = A2($author$project$Machine$Heap$get, x, heap);
					if (_v1.$ === 'Nothing') {
						return _Utils_Tuple2(e, acc);
					} else {
						var ex = _v1.a;
						var $temp$heap = A2($author$project$Machine$Heap$delete, x, heap),
							$temp$e = ex,
							$temp$acc = acc;
						heap = $temp$heap;
						e = $temp$e;
						acc = $temp$acc;
						continue collectArgs;
					}
				case 'App':
					var e1 = e.a;
					var arg = e.b;
					var $temp$heap = heap,
						$temp$e = e1,
						$temp$acc = A2($elm$core$List$cons, arg, acc);
					heap = $temp$heap;
					e = $temp$e;
					acc = $temp$acc;
					continue collectArgs;
				default:
					return _Utils_Tuple2(e, acc);
			}
		}
	});
var $author$project$PrettyPrinter$collectMatchingArgs = F2(
	function (m, acc) {
		collectMatchingArgs:
		while (true) {
			if (m.$ === 'Arg') {
				var e1 = m.a;
				var m1 = m.b;
				var $temp$m = m1,
					$temp$acc = A2($elm$core$List$cons, e1, acc);
				m = $temp$m;
				acc = $temp$acc;
				continue collectMatchingArgs;
			} else {
				return _Utils_Tuple2(m, acc);
			}
		}
	});
var $author$project$AST$isOperator = $elm$core$String$all($author$project$AST$operatorChar);
var $author$project$PrettyPrinter$formatOperator = function (op) {
	return $author$project$AST$isOperator(op) ? op : ('`' + (op + '`'));
};
var $the_sett$elm_pretty_printer$Internals$Union = F2(
	function (a, b) {
		return {$: 'Union', a: a, b: b};
	});
var $the_sett$elm_pretty_printer$Internals$Nest = F2(
	function (a, b) {
		return {$: 'Nest', a: a, b: b};
	});
var $the_sett$elm_pretty_printer$Internals$flatten = function (doc) {
	flatten:
	while (true) {
		switch (doc.$) {
			case 'Concatenate':
				var doc1 = doc.a;
				var doc2 = doc.b;
				return A2(
					$the_sett$elm_pretty_printer$Internals$Concatenate,
					function (_v1) {
						return $the_sett$elm_pretty_printer$Internals$flatten(
							doc1(_Utils_Tuple0));
					},
					function (_v2) {
						return $the_sett$elm_pretty_printer$Internals$flatten(
							doc2(_Utils_Tuple0));
					});
			case 'Nest':
				var i = doc.a;
				var doc1 = doc.b;
				return A2(
					$the_sett$elm_pretty_printer$Internals$Nest,
					i,
					function (_v3) {
						return $the_sett$elm_pretty_printer$Internals$flatten(
							doc1(_Utils_Tuple0));
					});
			case 'Union':
				var doc1 = doc.a;
				var doc2 = doc.b;
				var $temp$doc = doc1;
				doc = $temp$doc;
				continue flatten;
			case 'Line':
				var hsep = doc.a;
				return A2($the_sett$elm_pretty_printer$Internals$Text, hsep, $elm$core$Maybe$Nothing);
			case 'Nesting':
				var fn = doc.a;
				var $temp$doc = fn(0);
				doc = $temp$doc;
				continue flatten;
			case 'Column':
				var fn = doc.a;
				var $temp$doc = fn(0);
				doc = $temp$doc;
				continue flatten;
			default:
				var x = doc;
				return x;
		}
	}
};
var $the_sett$elm_pretty_printer$Pretty$group = function (doc) {
	return A2(
		$the_sett$elm_pretty_printer$Internals$Union,
		$the_sett$elm_pretty_printer$Internals$flatten(doc),
		doc);
};
var $the_sett$elm_pretty_printer$Internals$Column = function (a) {
	return {$: 'Column', a: a};
};
var $the_sett$elm_pretty_printer$Pretty$column = $the_sett$elm_pretty_printer$Internals$Column;
var $the_sett$elm_pretty_printer$Pretty$nest = F2(
	function (depth, doc) {
		return A2(
			$the_sett$elm_pretty_printer$Internals$Nest,
			depth,
			function (_v0) {
				return doc;
			});
	});
var $the_sett$elm_pretty_printer$Internals$Nesting = function (a) {
	return {$: 'Nesting', a: a};
};
var $the_sett$elm_pretty_printer$Pretty$nesting = $the_sett$elm_pretty_printer$Internals$Nesting;
var $the_sett$elm_pretty_printer$Pretty$align = function (doc) {
	return $the_sett$elm_pretty_printer$Pretty$column(
		function (currentColumn) {
			return $the_sett$elm_pretty_printer$Pretty$nesting(
				function (indentLvl) {
					return A2($the_sett$elm_pretty_printer$Pretty$nest, currentColumn - indentLvl, doc);
				});
		});
};
var $the_sett$elm_pretty_printer$Pretty$hang = F2(
	function (spaces, doc) {
		return $the_sett$elm_pretty_printer$Pretty$align(
			A2($the_sett$elm_pretty_printer$Pretty$nest, spaces, doc));
	});
var $author$project$Machine$Heap$isIndirection = $elm$core$String$startsWith('$');
var $author$project$PrettyPrinter$nameOf = function (expr) {
	_v0$2:
	while (true) {
		switch (expr.$) {
			case 'Var':
				var name = expr.a;
				return $elm$core$Maybe$Just(name);
			case 'Lam':
				if (expr.b.$ === 'Just') {
					var name = expr.b.a;
					return $elm$core$Maybe$Just(name);
				} else {
					break _v0$2;
				}
			default:
				break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $the_sett$elm_pretty_printer$Pretty$parens = function (doc) {
	return A3(
		$the_sett$elm_pretty_printer$Pretty$surround,
		$the_sett$elm_pretty_printer$Pretty$char(
			_Utils_chr('(')),
		$the_sett$elm_pretty_printer$Pretty$char(
			_Utils_chr(')')),
		doc);
};
var $author$project$PrettyPrinter$parensIf = F2(
	function (c, doc) {
		return c ? $the_sett$elm_pretty_printer$Pretty$parens(doc) : doc;
	});
var $author$project$PrettyPrinter$prettyChar = function (c) {
	return '\'' + (A2(
		$author$project$PrettyPrinter$escapeChar,
		_Utils_chr('\''),
		c) + '\'');
};
var $the_sett$elm_pretty_printer$Pretty$taggedString = F2(
	function (val, tag) {
		return A2(
			$the_sett$elm_pretty_printer$Internals$Text,
			val,
			$elm$core$Maybe$Just(tag));
	});
var $author$project$PrettyPrinter$ppPattern = function (p) {
	_v0$8:
	while (true) {
		_v0$9:
		while (true) {
			switch (p.$) {
				case 'DefaultP':
					return $the_sett$elm_pretty_printer$Pretty$char(
						_Utils_chr('_'));
				case 'VarP':
					var x = p.a;
					return A2($the_sett$elm_pretty_printer$Pretty$taggedString, x, $author$project$PrettyPrinter$Variable);
				case 'BangP':
					var x = p.a;
					return A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						A2($the_sett$elm_pretty_printer$Pretty$taggedString, x, $author$project$PrettyPrinter$Variable),
						$the_sett$elm_pretty_printer$Pretty$char(
							_Utils_chr('!')));
				case 'NumberP':
					var n = p.a;
					return A2(
						$the_sett$elm_pretty_printer$Pretty$taggedString,
						$elm$core$String$fromInt(n),
						$author$project$PrettyPrinter$Literal);
				case 'CharP':
					var c = p.a;
					return A2(
						$the_sett$elm_pretty_printer$Pretty$taggedString,
						$author$project$PrettyPrinter$prettyChar(c),
						$author$project$PrettyPrinter$String);
				case 'ConsP':
					switch (p.a) {
						case ',':
							var ps = p.b;
							return $the_sett$elm_pretty_printer$Pretty$parens(
								A2(
									$the_sett$elm_pretty_printer$Pretty$join,
									$the_sett$elm_pretty_printer$Pretty$string(','),
									A2($elm$core$List$map, $author$project$PrettyPrinter$ppPattern, ps)));
						case ',,':
							var ps = p.b;
							return $the_sett$elm_pretty_printer$Pretty$parens(
								A2(
									$the_sett$elm_pretty_printer$Pretty$join,
									$the_sett$elm_pretty_printer$Pretty$string(','),
									A2($elm$core$List$map, $author$project$PrettyPrinter$ppPattern, ps)));
						case ':':
							if (p.b.b) {
								if (p.b.b.b && (!p.b.b.b.b)) {
									var _v1 = p.b;
									var p1 = _v1.a;
									var _v2 = _v1.b;
									var p2 = _v2.a;
									return $the_sett$elm_pretty_printer$Pretty$parens(
										A2(
											$the_sett$elm_pretty_printer$Pretty$a,
											$author$project$PrettyPrinter$ppPattern(p2),
											A2(
												$the_sett$elm_pretty_printer$Pretty$a,
												A2($the_sett$elm_pretty_printer$Pretty$taggedString, ':', $author$project$PrettyPrinter$Constructor),
												$author$project$PrettyPrinter$ppPattern(p1))));
								} else {
									break _v0$9;
								}
							} else {
								break _v0$8;
							}
						default:
							if (!p.b.b) {
								break _v0$8;
							} else {
								break _v0$9;
							}
					}
				default:
					var _var = p.a;
					var pat = p.b;
					return A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$author$project$PrettyPrinter$ppPattern(pat),
						A2(
							$the_sett$elm_pretty_printer$Pretty$a,
							$the_sett$elm_pretty_printer$Pretty$string('@'),
							A2($the_sett$elm_pretty_printer$Pretty$taggedString, _var, $author$project$PrettyPrinter$Variable)));
			}
		}
		var tag = p.a;
		var ps = p.b;
		return $the_sett$elm_pretty_printer$Pretty$parens(
			$the_sett$elm_pretty_printer$Pretty$words(
				A2(
					$elm$core$List$cons,
					A2($the_sett$elm_pretty_printer$Pretty$taggedString, tag, $author$project$PrettyPrinter$Constructor),
					A2($elm$core$List$map, $author$project$PrettyPrinter$ppPattern, ps))));
	}
	var tag = p.a;
	return A2($the_sett$elm_pretty_printer$Pretty$taggedString, tag, $author$project$PrettyPrinter$Constructor);
};
var $author$project$PrettyPrinter$removeName = F2(
	function (name, expr) {
		if ((expr.$ === 'Lam') && (expr.b.$ === 'Just')) {
			var arity = expr.a;
			var name1 = expr.b.a;
			var m = expr.c;
			return _Utils_eq(name, name1) ? A3($author$project$AST$Lam, arity, $elm$core$Maybe$Nothing, m) : expr;
		} else {
			return expr;
		}
	});
var $author$project$PrettyPrinter$ppAlt = F2(
	function (ctx, _v23) {
		var patt = _v23.a;
		var expr = _v23.b;
		var info = _v23.c;
		return A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			A2(
				$author$project$PrettyPrinter$ppExpr,
				_Utils_update(
					ctx,
					{prec: 0}),
				expr),
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				$the_sett$elm_pretty_printer$Pretty$string(' -> '),
				$author$project$PrettyPrinter$ppPattern(patt)));
	});
var $author$project$PrettyPrinter$ppAlts = F2(
	function (ctx, alts) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$join,
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				ctx.line,
				$the_sett$elm_pretty_printer$Pretty$char(
					_Utils_chr(';'))),
			A2(
				$elm$core$List$map,
				$author$project$PrettyPrinter$ppAlt(ctx),
				alts));
	});
var $author$project$PrettyPrinter$ppApp = F3(
	function (ctx, e0, e1) {
		var _v22 = A3(
			$author$project$PrettyPrinter$collectArgs,
			ctx.heap,
			e0,
			_List_fromArray(
				[e1]));
		var fun = _v22.a;
		var args = _v22.b;
		return A3($author$project$PrettyPrinter$ppApp1, ctx, fun, args);
	});
var $author$project$PrettyPrinter$ppApp1 = F3(
	function (ctx, fun, args) {
		var _v11 = _Utils_Tuple2(
			$author$project$PrettyPrinter$nameOf(fun),
			args);
		_v11$5:
		while (true) {
			if ((_v11.a.$ === 'Just') && _v11.b.b) {
				if (!_v11.b.b.b) {
					if (_v11.a.a === 'enumFrom') {
						var _v12 = _v11.b;
						var e1 = _v12.a;
						return ctx.prettyEnums ? $the_sett$elm_pretty_printer$Pretty$brackets(
							A2(
								$the_sett$elm_pretty_printer$Pretty$a,
								$the_sett$elm_pretty_printer$Pretty$string(' ..'),
								A2(
									$author$project$PrettyPrinter$ppExpr,
									_Utils_update(
										ctx,
										{prec: 0}),
									e1))) : A3($author$project$PrettyPrinter$ppApp2, ctx, fun, args);
					} else {
						break _v11$5;
					}
				} else {
					if (_v11.b.b.b.b) {
						if ((_v11.a.a === 'enumFromThenTo') && (!_v11.b.b.b.b.b)) {
							var _v17 = _v11.b;
							var e1 = _v17.a;
							var _v18 = _v17.b;
							var e2 = _v18.a;
							var _v19 = _v18.b;
							var e3 = _v19.a;
							return ctx.prettyEnums ? $the_sett$elm_pretty_printer$Pretty$brackets(
								A2(
									$the_sett$elm_pretty_printer$Pretty$a,
									A2(
										$author$project$PrettyPrinter$ppExpr,
										_Utils_update(
											ctx,
											{prec: 0}),
										e3),
									A2(
										$the_sett$elm_pretty_printer$Pretty$a,
										$the_sett$elm_pretty_printer$Pretty$string(' .. '),
										A2(
											$the_sett$elm_pretty_printer$Pretty$a,
											A2(
												$author$project$PrettyPrinter$ppExpr,
												_Utils_update(
													ctx,
													{prec: 0}),
												e2),
											A2(
												$the_sett$elm_pretty_printer$Pretty$a,
												$the_sett$elm_pretty_printer$Pretty$char(
													_Utils_chr(',')),
												A2(
													$author$project$PrettyPrinter$ppExpr,
													_Utils_update(
														ctx,
														{prec: 0}),
													e1)))))) : A3($author$project$PrettyPrinter$ppApp2, ctx, fun, args);
						} else {
							break _v11$5;
						}
					} else {
						switch (_v11.a.a) {
							case 'enumFromTo':
								var _v13 = _v11.b;
								var e1 = _v13.a;
								var _v14 = _v13.b;
								var e2 = _v14.a;
								return ctx.prettyEnums ? $the_sett$elm_pretty_printer$Pretty$brackets(
									A2(
										$the_sett$elm_pretty_printer$Pretty$a,
										A2(
											$author$project$PrettyPrinter$ppExpr,
											_Utils_update(
												ctx,
												{prec: 0}),
											e2),
										A2(
											$the_sett$elm_pretty_printer$Pretty$a,
											$the_sett$elm_pretty_printer$Pretty$string(' .. '),
											A2(
												$author$project$PrettyPrinter$ppExpr,
												_Utils_update(
													ctx,
													{prec: 0}),
												e1)))) : A3($author$project$PrettyPrinter$ppApp2, ctx, fun, args);
							case 'enumFromThen':
								var _v15 = _v11.b;
								var e1 = _v15.a;
								var _v16 = _v15.b;
								var e2 = _v16.a;
								return ctx.prettyEnums ? $the_sett$elm_pretty_printer$Pretty$brackets(
									A2(
										$the_sett$elm_pretty_printer$Pretty$a,
										$the_sett$elm_pretty_printer$Pretty$string(' ..'),
										A2(
											$the_sett$elm_pretty_printer$Pretty$a,
											A2(
												$author$project$PrettyPrinter$ppExpr,
												_Utils_update(
													ctx,
													{prec: 0}),
												e2),
											A2(
												$the_sett$elm_pretty_printer$Pretty$a,
												$the_sett$elm_pretty_printer$Pretty$char(
													_Utils_chr(',')),
												A2(
													$author$project$PrettyPrinter$ppExpr,
													_Utils_update(
														ctx,
														{prec: 0}),
													e1))))) : A3($author$project$PrettyPrinter$ppApp2, ctx, fun, args);
							default:
								var op = _v11.a.a;
								var _v20 = _v11.b;
								var arg1 = _v20.a;
								var _v21 = _v20.b;
								var arg2 = _v21.a;
								return $author$project$AST$isOperator(op) ? A2(
									$author$project$PrettyPrinter$ppExpr,
									ctx,
									A3($author$project$AST$BinaryOp, op, arg1, arg2)) : A3($author$project$PrettyPrinter$ppApp2, ctx, fun, args);
						}
					}
				}
			} else {
				break _v11$5;
			}
		}
		return A3($author$project$PrettyPrinter$ppApp2, ctx, fun, args);
	});
var $author$project$PrettyPrinter$ppApp2 = F3(
	function (ctx, fun, args) {
		return A2(
			$author$project$PrettyPrinter$parensIf,
			ctx.prec > 0,
			$the_sett$elm_pretty_printer$Pretty$group(
				A2(
					$the_sett$elm_pretty_printer$Pretty$hang,
					4,
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						ctx.lines(
							A2(
								$elm$core$List$map,
								$author$project$PrettyPrinter$ppExpr(
									_Utils_update(
										ctx,
										{prec: 1})),
								args)),
						A2(
							$the_sett$elm_pretty_printer$Pretty$a,
							$the_sett$elm_pretty_printer$Pretty$space,
							A2(
								$author$project$PrettyPrinter$ppExpr,
								_Utils_update(
									ctx,
									{prec: 0}),
								fun))))));
	});
var $author$project$PrettyPrinter$ppBind = F2(
	function (ctx, bind) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			A2(
				$author$project$PrettyPrinter$ppExpr,
				_Utils_update(
					ctx,
					{prec: 0}),
				A2($author$project$PrettyPrinter$removeName, bind.name, bind.expr)),
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				$the_sett$elm_pretty_printer$Pretty$space,
				A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					$the_sett$elm_pretty_printer$Pretty$char(
						_Utils_chr('=')),
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$the_sett$elm_pretty_printer$Pretty$space,
						$the_sett$elm_pretty_printer$Pretty$string(bind.name)))));
	});
var $author$project$PrettyPrinter$ppBinds = F2(
	function (ctx, binds) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$join,
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				ctx.line,
				$the_sett$elm_pretty_printer$Pretty$char(
					_Utils_chr(';'))),
			A2(
				$elm$core$List$map,
				$author$project$PrettyPrinter$ppBind(ctx),
				binds));
	});
var $author$project$PrettyPrinter$ppCons = F3(
	function (ctx, cons, args) {
		if (!args.b) {
			return A2($the_sett$elm_pretty_printer$Pretty$taggedString, cons, $author$project$PrettyPrinter$Constructor);
		} else {
			if (!args.b.b) {
				var arg = args.a;
				return A2(
					$author$project$PrettyPrinter$parensIf,
					ctx.prec > 0,
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						A2(
							$author$project$PrettyPrinter$ppExpr,
							_Utils_update(
								ctx,
								{prec: 1}),
							arg),
						A2(
							$the_sett$elm_pretty_printer$Pretty$a,
							$the_sett$elm_pretty_printer$Pretty$space,
							A2($the_sett$elm_pretty_printer$Pretty$taggedString, cons, $author$project$PrettyPrinter$Constructor))));
			} else {
				return A2(
					$author$project$PrettyPrinter$parensIf,
					ctx.prec > 0,
					$the_sett$elm_pretty_printer$Pretty$group(
						A2(
							$the_sett$elm_pretty_printer$Pretty$hang,
							4,
							A2(
								$the_sett$elm_pretty_printer$Pretty$a,
								ctx.lines(
									A2(
										$elm$core$List$map,
										$author$project$PrettyPrinter$ppExpr(
											_Utils_update(
												ctx,
												{prec: 1})),
										args)),
								A2(
									$the_sett$elm_pretty_printer$Pretty$a,
									ctx.line,
									A2($the_sett$elm_pretty_printer$Pretty$taggedString, cons, $author$project$PrettyPrinter$Constructor))))));
			}
		}
	});
var $author$project$PrettyPrinter$ppExpr = F2(
	function (ctx, e) {
		ppExpr:
		while (true) {
			_v3$7:
			while (true) {
				switch (e.$) {
					case 'Number':
						var n = e.a;
						return A2(
							$author$project$PrettyPrinter$parensIf,
							(ctx.prec > 0) && (n < 0),
							A2(
								$the_sett$elm_pretty_printer$Pretty$taggedString,
								$elm$core$String$fromInt(n),
								$author$project$PrettyPrinter$Literal));
					case 'Char':
						var c = e.a;
						return A2(
							$the_sett$elm_pretty_printer$Pretty$taggedString,
							$author$project$PrettyPrinter$prettyChar(c),
							$author$project$PrettyPrinter$String);
					case 'Var':
						var x = e.a;
						if ($author$project$Machine$Heap$isIndirection(x)) {
							var _v4 = A2($author$project$Machine$Heap$get, x, ctx.heap);
							if (_v4.$ === 'Just') {
								var e1 = _v4.a;
								var $temp$ctx = _Utils_update(
									ctx,
									{
										heap: A2($author$project$Machine$Heap$delete, x, ctx.heap)
									}),
									$temp$e = e1;
								ctx = $temp$ctx;
								e = $temp$e;
								continue ppExpr;
							} else {
								return A2($the_sett$elm_pretty_printer$Pretty$taggedString, x, $author$project$PrettyPrinter$Exception);
							}
						} else {
							if ($author$project$AST$isOperator(x)) {
								return $the_sett$elm_pretty_printer$Pretty$parens(
									$the_sett$elm_pretty_printer$Pretty$string(x));
							} else {
								return A2($the_sett$elm_pretty_printer$Pretty$taggedString, x, $author$project$PrettyPrinter$Variable);
							}
						}
					case 'Cons':
						switch (e.b) {
							case ',':
								var args = e.c;
								return $the_sett$elm_pretty_printer$Pretty$group(
									$the_sett$elm_pretty_printer$Pretty$parens(
										A2(
											ctx.separators,
											', ',
											A2(
												$elm$core$List$map,
												$author$project$PrettyPrinter$ppExpr(
													_Utils_update(
														ctx,
														{prec: 0})),
												args))));
							case ',,':
								var args = e.c;
								return $the_sett$elm_pretty_printer$Pretty$group(
									$the_sett$elm_pretty_printer$Pretty$parens(
										A2(
											ctx.separators,
											', ',
											A2(
												$elm$core$List$map,
												$author$project$PrettyPrinter$ppExpr(
													_Utils_update(
														ctx,
														{prec: 0})),
												args))));
							case ',,,':
								var args = e.c;
								return $the_sett$elm_pretty_printer$Pretty$group(
									$the_sett$elm_pretty_printer$Pretty$parens(
										A2(
											ctx.separators,
											', ',
											A2(
												$elm$core$List$map,
												$author$project$PrettyPrinter$ppExpr(
													_Utils_update(
														ctx,
														{prec: 0})),
												args))));
							case ':':
								if ((e.c.b && e.c.b.b) && (!e.c.b.b.b)) {
									var _v5 = e.c;
									var e1 = _v5.a;
									var _v6 = _v5.b;
									var e2 = _v6.a;
									if (ctx.prettyLists) {
										var _v7 = $author$project$PrettyPrinter$checkSpine(e2);
										if (_v7.$ === 'Just') {
											var l = _v7.a;
											var _v8 = $author$project$PrettyPrinter$checkChars(
												A2($elm$core$List$cons, e1, l));
											if (_v8.$ === 'Just') {
												var s = _v8.a;
												return A2($the_sett$elm_pretty_printer$Pretty$taggedString, '\"' + (s + '\"'), $author$project$PrettyPrinter$String);
											} else {
												return A2(
													$author$project$PrettyPrinter$ppList,
													ctx,
													A2($elm$core$List$cons, e1, l));
											}
										} else {
											return A2(
												$author$project$PrettyPrinter$parensIf,
												ctx.prec > 0,
												A2(
													$the_sett$elm_pretty_printer$Pretty$a,
													A2(
														$author$project$PrettyPrinter$ppExpr,
														_Utils_update(
															ctx,
															{prec: 1}),
														e2),
													A2(
														$the_sett$elm_pretty_printer$Pretty$a,
														A2($the_sett$elm_pretty_printer$Pretty$taggedString, ':', $author$project$PrettyPrinter$Constructor),
														A2(
															$author$project$PrettyPrinter$ppExpr,
															_Utils_update(
																ctx,
																{prec: 1}),
															e1))));
										}
									} else {
										return A2(
											$author$project$PrettyPrinter$parensIf,
											ctx.prec > 0,
											A2(
												$the_sett$elm_pretty_printer$Pretty$a,
												A2(
													$author$project$PrettyPrinter$ppExpr,
													_Utils_update(
														ctx,
														{prec: 1}),
													e2),
												A2(
													$the_sett$elm_pretty_printer$Pretty$a,
													A2($the_sett$elm_pretty_printer$Pretty$taggedString, ':', $author$project$PrettyPrinter$Constructor),
													A2(
														$author$project$PrettyPrinter$ppExpr,
														_Utils_update(
															ctx,
															{prec: 1}),
														e1))));
									}
								} else {
									break _v3$7;
								}
							default:
								break _v3$7;
						}
					case 'BinaryOp':
						var op = e.a;
						var e1 = e.b;
						var e2 = e.c;
						return A2(
							$author$project$PrettyPrinter$parensIf,
							ctx.prec > 0,
							$the_sett$elm_pretty_printer$Pretty$group(
								A2(
									$the_sett$elm_pretty_printer$Pretty$a,
									A2(
										$author$project$PrettyPrinter$ppExpr,
										_Utils_update(
											ctx,
											{prec: 1}),
										e2),
									A2(
										$the_sett$elm_pretty_printer$Pretty$a,
										ctx.line,
										A2(
											$the_sett$elm_pretty_printer$Pretty$a,
											$the_sett$elm_pretty_printer$Pretty$string(
												$author$project$PrettyPrinter$formatOperator(op)),
											A2(
												$the_sett$elm_pretty_printer$Pretty$a,
												ctx.line,
												A2(
													$author$project$PrettyPrinter$ppExpr,
													_Utils_update(
														ctx,
														{prec: 1}),
													e1)))))));
					case 'UnaryOp':
						var op = e.a;
						var e1 = e.b;
						return A2(
							$author$project$PrettyPrinter$parensIf,
							ctx.prec > 0,
							A2(
								$the_sett$elm_pretty_printer$Pretty$a,
								A2(
									$author$project$PrettyPrinter$ppExpr,
									_Utils_update(
										ctx,
										{prec: 1}),
									e1),
								A2(
									$the_sett$elm_pretty_printer$Pretty$a,
									$the_sett$elm_pretty_printer$Pretty$space,
									$the_sett$elm_pretty_printer$Pretty$string(op))));
					case 'App':
						var e0 = e.a;
						var e1 = e.b;
						return A3($author$project$PrettyPrinter$ppApp, ctx, e0, e1);
					case 'Lam':
						var optid = e.b;
						var match = e.c;
						var _v9 = A2($author$project$PrettyPrinter$collectMatchingArgs, match, _List_Nil);
						if (!_v9.b.b) {
							return A3($author$project$PrettyPrinter$ppLambda, ctx, optid, match);
						} else {
							var match1 = _v9.a;
							var args1 = _v9.b;
							return A3(
								$author$project$PrettyPrinter$ppApp1,
								ctx,
								A2($author$project$AST$lambda, optid, match1),
								args1);
						}
					case 'Let':
						var binds = e.a;
						var e1 = e.b;
						return A2(
							$author$project$PrettyPrinter$parensIf,
							ctx.prec > 0,
							$the_sett$elm_pretty_printer$Pretty$group(
								A2(
									$the_sett$elm_pretty_printer$Pretty$a,
									A2(
										$author$project$PrettyPrinter$ppExpr,
										_Utils_update(
											ctx,
											{prec: 0}),
										e1),
									A2(
										$the_sett$elm_pretty_printer$Pretty$a,
										ctx.line,
										A2(
											$the_sett$elm_pretty_printer$Pretty$a,
											A2($the_sett$elm_pretty_printer$Pretty$taggedString, 'in', $author$project$PrettyPrinter$Keyword),
											A2(
												$the_sett$elm_pretty_printer$Pretty$a,
												ctx.line,
												A2(
													$the_sett$elm_pretty_printer$Pretty$a,
													A2($author$project$PrettyPrinter$ppBinds, ctx, binds),
													A2(
														$the_sett$elm_pretty_printer$Pretty$a,
														ctx.line,
														A2($the_sett$elm_pretty_printer$Pretty$taggedString, 'let', $author$project$PrettyPrinter$Keyword)))))))));
					case 'Case':
						var expr = e.a;
						var alts = e.b;
						return A2(
							$author$project$PrettyPrinter$parensIf,
							ctx.prec > 0,
							$the_sett$elm_pretty_printer$Pretty$group(
								A2(
									$the_sett$elm_pretty_printer$Pretty$hang,
									4,
									A2(
										$the_sett$elm_pretty_printer$Pretty$a,
										A2(
											$author$project$PrettyPrinter$ppAlts,
											_Utils_update(
												ctx,
												{prec: 0}),
											alts),
										A2(
											$the_sett$elm_pretty_printer$Pretty$a,
											ctx.line,
											A2(
												$the_sett$elm_pretty_printer$Pretty$a,
												A2($the_sett$elm_pretty_printer$Pretty$taggedString, 'of', $author$project$PrettyPrinter$Keyword),
												A2(
													$the_sett$elm_pretty_printer$Pretty$a,
													$the_sett$elm_pretty_printer$Pretty$space,
													A2(
														$the_sett$elm_pretty_printer$Pretty$a,
														A2(
															$author$project$PrettyPrinter$ppExpr,
															_Utils_update(
																ctx,
																{prec: 1}),
															expr),
														A2(
															$the_sett$elm_pretty_printer$Pretty$a,
															$the_sett$elm_pretty_printer$Pretty$space,
															A2($the_sett$elm_pretty_printer$Pretty$taggedString, 'case', $author$project$PrettyPrinter$Keyword))))))))));
					case 'IfThenElse':
						var e1 = e.a;
						var e2 = e.b;
						var e3 = e.c;
						return A2(
							$author$project$PrettyPrinter$parensIf,
							ctx.prec > 0,
							$the_sett$elm_pretty_printer$Pretty$group(
								A2(
									$the_sett$elm_pretty_printer$Pretty$a,
									A2(
										$the_sett$elm_pretty_printer$Pretty$nest,
										4,
										A2(
											$the_sett$elm_pretty_printer$Pretty$a,
											A2(
												$author$project$PrettyPrinter$ppExpr,
												_Utils_update(
													ctx,
													{prec: 0}),
												e3),
											ctx.line)),
									A2(
										$the_sett$elm_pretty_printer$Pretty$a,
										A2($the_sett$elm_pretty_printer$Pretty$taggedString, 'else', $author$project$PrettyPrinter$Keyword),
										A2(
											$the_sett$elm_pretty_printer$Pretty$a,
											ctx.line,
											A2(
												$the_sett$elm_pretty_printer$Pretty$a,
												A2(
													$the_sett$elm_pretty_printer$Pretty$nest,
													4,
													A2(
														$the_sett$elm_pretty_printer$Pretty$a,
														A2(
															$author$project$PrettyPrinter$ppExpr,
															_Utils_update(
																ctx,
																{prec: 0}),
															e2),
														ctx.line)),
												A2(
													$the_sett$elm_pretty_printer$Pretty$a,
													A2($the_sett$elm_pretty_printer$Pretty$taggedString, 'then', $author$project$PrettyPrinter$Keyword),
													A2(
														$the_sett$elm_pretty_printer$Pretty$a,
														$the_sett$elm_pretty_printer$Pretty$space,
														A2(
															$the_sett$elm_pretty_printer$Pretty$a,
															A2(
																$author$project$PrettyPrinter$ppExpr,
																_Utils_update(
																	ctx,
																	{prec: 0}),
																e1),
															A2(
																$the_sett$elm_pretty_printer$Pretty$a,
																$the_sett$elm_pretty_printer$Pretty$space,
																A2($the_sett$elm_pretty_printer$Pretty$taggedString, 'if', $author$project$PrettyPrinter$Keyword)))))))))));
					default:
						var msg = e.a;
						return A2($the_sett$elm_pretty_printer$Pretty$taggedString, 'exception: ' + msg, $author$project$PrettyPrinter$Exception);
				}
			}
			var tag = e.b;
			var args = e.c;
			return A3($author$project$PrettyPrinter$ppCons, ctx, tag, args);
		}
	});
var $author$project$PrettyPrinter$ppLambda = F3(
	function (ctx, optid, m) {
		if (optid.$ === 'Just') {
			var name = optid.a;
			return $author$project$AST$isOperator(name) ? $the_sett$elm_pretty_printer$Pretty$parens(
				$the_sett$elm_pretty_printer$Pretty$string(name)) : A2($the_sett$elm_pretty_printer$Pretty$taggedString, name, $author$project$PrettyPrinter$Variable);
		} else {
			switch (m.$) {
				case 'Match':
					var p = m.a;
					var m1 = m.b;
					return $the_sett$elm_pretty_printer$Pretty$parens(
						A2(
							$the_sett$elm_pretty_printer$Pretty$a,
							A2($author$project$PrettyPrinter$ppMatching, ctx, m),
							$the_sett$elm_pretty_printer$Pretty$char(
								_Utils_chr('\\'))));
				case 'Return':
					var e = m.a;
					return A2($author$project$PrettyPrinter$ppExpr, ctx, e);
				default:
					return A2($the_sett$elm_pretty_printer$Pretty$taggedString, '<unimplemented>', $author$project$PrettyPrinter$Exception);
			}
		}
	});
var $author$project$PrettyPrinter$ppList = F2(
	function (ctx, exprs) {
		return $the_sett$elm_pretty_printer$Pretty$brackets(
			A2(
				$the_sett$elm_pretty_printer$Pretty$join,
				$the_sett$elm_pretty_printer$Pretty$string(', '),
				A2(
					$elm$core$List$map,
					$author$project$PrettyPrinter$ppExpr(
						_Utils_update(
							ctx,
							{prec: 0})),
					exprs)));
	});
var $author$project$PrettyPrinter$ppMatching = F2(
	function (ctx, m) {
		switch (m.$) {
			case 'Match':
				var p = m.a;
				var m1 = m.b;
				return A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					A2($author$project$PrettyPrinter$ppMatching, ctx, m1),
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$the_sett$elm_pretty_printer$Pretty$space,
						$author$project$PrettyPrinter$ppPattern(p)));
			case 'Return':
				var e = m.a;
				return A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					A2(
						$author$project$PrettyPrinter$ppExpr,
						_Utils_update(
							ctx,
							{prec: 0}),
						e),
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$the_sett$elm_pretty_printer$Pretty$space,
						$the_sett$elm_pretty_printer$Pretty$string('->')));
			default:
				return $the_sett$elm_pretty_printer$Pretty$string('<unimplemented>');
		}
	});
var $the_sett$elm_pretty_printer$Internals$NLine = F3(
	function (a, b, c) {
		return {$: 'NLine', a: a, b: b, c: c};
	});
var $the_sett$elm_pretty_printer$Internals$NNil = {$: 'NNil'};
var $the_sett$elm_pretty_printer$Internals$NText = F3(
	function (a, b, c) {
		return {$: 'NText', a: a, b: b, c: c};
	});
var $the_sett$elm_pretty_printer$Internals$fits = F2(
	function (w, normal) {
		fits:
		while (true) {
			if (w < 0) {
				return false;
			} else {
				switch (normal.$) {
					case 'NNil':
						return true;
					case 'NText':
						var text = normal.a;
						var innerNormal = normal.b;
						var $temp$w = w - $elm$core$String$length(text),
							$temp$normal = innerNormal(_Utils_Tuple0);
						w = $temp$w;
						normal = $temp$normal;
						continue fits;
					default:
						return true;
				}
			}
		}
	});
var $the_sett$elm_pretty_printer$Internals$better = F4(
	function (w, k, doc, doc2Fn) {
		return A2($the_sett$elm_pretty_printer$Internals$fits, w - k, doc) ? doc : doc2Fn(_Utils_Tuple0);
	});
var $the_sett$elm_pretty_printer$Internals$best = F3(
	function (width, startCol, x) {
		var be = F3(
			function (w, k, docs) {
				be:
				while (true) {
					if (!docs.b) {
						return $the_sett$elm_pretty_printer$Internals$NNil;
					} else {
						switch (docs.a.b.$) {
							case 'Empty':
								var _v1 = docs.a;
								var i = _v1.a;
								var _v2 = _v1.b;
								var ds = docs.b;
								var $temp$w = w,
									$temp$k = k,
									$temp$docs = ds;
								w = $temp$w;
								k = $temp$k;
								docs = $temp$docs;
								continue be;
							case 'Concatenate':
								var _v3 = docs.a;
								var i = _v3.a;
								var _v4 = _v3.b;
								var doc = _v4.a;
								var doc2 = _v4.b;
								var ds = docs.b;
								var $temp$w = w,
									$temp$k = k,
									$temp$docs = A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										i,
										doc(_Utils_Tuple0)),
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(
											i,
											doc2(_Utils_Tuple0)),
										ds));
								w = $temp$w;
								k = $temp$k;
								docs = $temp$docs;
								continue be;
							case 'Nest':
								var _v5 = docs.a;
								var i = _v5.a;
								var _v6 = _v5.b;
								var j = _v6.a;
								var doc = _v6.b;
								var ds = docs.b;
								var $temp$w = w,
									$temp$k = k,
									$temp$docs = A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										i + j,
										doc(_Utils_Tuple0)),
									ds);
								w = $temp$w;
								k = $temp$k;
								docs = $temp$docs;
								continue be;
							case 'Text':
								var _v7 = docs.a;
								var i = _v7.a;
								var _v8 = _v7.b;
								var text = _v8.a;
								var maybeTag = _v8.b;
								var ds = docs.b;
								return A3(
									$the_sett$elm_pretty_printer$Internals$NText,
									text,
									function (_v9) {
										return A3(
											be,
											w,
											k + $elm$core$String$length(text),
											ds);
									},
									maybeTag);
							case 'Line':
								var _v10 = docs.a;
								var i = _v10.a;
								var _v11 = _v10.b;
								var vsep = _v11.b;
								var ds = docs.b;
								return A3(
									$the_sett$elm_pretty_printer$Internals$NLine,
									i,
									vsep,
									function (_v12) {
										return A3(
											be,
											w,
											i + $elm$core$String$length(vsep),
											ds);
									});
							case 'Union':
								var _v13 = docs.a;
								var i = _v13.a;
								var _v14 = _v13.b;
								var doc = _v14.a;
								var doc2 = _v14.b;
								var ds = docs.b;
								return A4(
									$the_sett$elm_pretty_printer$Internals$better,
									w,
									k,
									A3(
										be,
										w,
										k,
										A2(
											$elm$core$List$cons,
											_Utils_Tuple2(i, doc),
											ds)),
									function (_v15) {
										return A3(
											be,
											w,
											k,
											A2(
												$elm$core$List$cons,
												_Utils_Tuple2(i, doc2),
												ds));
									});
							case 'Nesting':
								var _v16 = docs.a;
								var i = _v16.a;
								var fn = _v16.b.a;
								var ds = docs.b;
								var $temp$w = w,
									$temp$k = k,
									$temp$docs = A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										i,
										fn(i)),
									ds);
								w = $temp$w;
								k = $temp$k;
								docs = $temp$docs;
								continue be;
							default:
								var _v17 = docs.a;
								var i = _v17.a;
								var fn = _v17.b.a;
								var ds = docs.b;
								var $temp$w = w,
									$temp$k = k,
									$temp$docs = A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										i,
										fn(k)),
									ds);
								w = $temp$w;
								k = $temp$k;
								docs = $temp$docs;
								continue be;
						}
					}
				}
			});
		return A3(
			be,
			width,
			startCol,
			_List_fromArray(
				[
					_Utils_Tuple2(0, x)
				]));
	});
var $the_sett$elm_pretty_printer$Internals$copy = F2(
	function (i, s) {
		return (!i) ? '' : _Utils_ap(
			s,
			A2($the_sett$elm_pretty_printer$Internals$copy, i - 1, s));
	});
var $the_sett$elm_pretty_printer$Internals$layout = function (normal) {
	var layoutInner = F2(
		function (normal2, acc) {
			layoutInner:
			while (true) {
				switch (normal2.$) {
					case 'NNil':
						return acc;
					case 'NText':
						var text = normal2.a;
						var innerNormal = normal2.b;
						var maybeTag = normal2.c;
						var $temp$normal2 = innerNormal(_Utils_Tuple0),
							$temp$acc = A2($elm$core$List$cons, text, acc);
						normal2 = $temp$normal2;
						acc = $temp$acc;
						continue layoutInner;
					default:
						var i = normal2.a;
						var sep = normal2.b;
						var innerNormal = normal2.c;
						var norm = innerNormal(_Utils_Tuple0);
						if (norm.$ === 'NLine') {
							var $temp$normal2 = innerNormal(_Utils_Tuple0),
								$temp$acc = A2($elm$core$List$cons, '\n' + sep, acc);
							normal2 = $temp$normal2;
							acc = $temp$acc;
							continue layoutInner;
						} else {
							var $temp$normal2 = innerNormal(_Utils_Tuple0),
								$temp$acc = A2(
								$elm$core$List$cons,
								'\n' + (A2($the_sett$elm_pretty_printer$Internals$copy, i, ' ') + sep),
								acc);
							normal2 = $temp$normal2;
							acc = $temp$acc;
							continue layoutInner;
						}
				}
			}
		});
	return $elm$core$String$concat(
		$elm$core$List$reverse(
			A2(layoutInner, normal, _List_Nil)));
};
var $the_sett$elm_pretty_printer$Pretty$pretty = F2(
	function (w, doc) {
		return $the_sett$elm_pretty_printer$Internals$layout(
			A3($the_sett$elm_pretty_printer$Internals$best, w, 0, doc));
	});
var $author$project$PrettyPrinter$prettyExpr = F3(
	function (opts, heap, e) {
		var ctx = A2($author$project$PrettyPrinter$makeCtx, opts, heap);
		return A2(
			$the_sett$elm_pretty_printer$Pretty$pretty,
			$author$project$PrettyPrinter$defaultLength,
			A2($author$project$PrettyPrinter$ppExpr, ctx, e));
	});
var $author$project$Shows$showExpr = A2($author$project$PrettyPrinter$prettyExpr, $author$project$Shows$defaultOpts, $author$project$Machine$Heap$empty);
var $author$project$Typecheck$extend = F3(
	function (v, t, tenv) {
		return A3($elm$core$Dict$insert, v, t, tenv);
	});
var $author$project$PrettyPrinter$prettyPattern = function (p) {
	return A2(
		$the_sett$elm_pretty_printer$Pretty$pretty,
		$author$project$PrettyPrinter$defaultLength,
		$author$project$PrettyPrinter$ppPattern(p));
};
var $author$project$Shows$showPattern = function (p) {
	return $author$project$PrettyPrinter$prettyPattern(p);
};
var $author$project$Tc$simplify = function (ty) {
	return A2(
		$author$project$Tc$andThen,
		function (s) {
			return $author$project$Tc$pure(
				A2($author$project$Types$applyTySubst, s.unifier, ty));
		},
		$author$project$Tc$get);
};
var $author$project$Typecheck$tcConsCheck = function (ty) {
	return A2(
		$author$project$Tc$andThen,
		function (ty1) {
			if (ty1.$ === 'TyFun') {
				return $author$project$Tc$fail('wrong number of arguments');
			} else {
				return $author$project$Tc$pure(_Utils_Tuple0);
			}
		},
		$author$project$Tc$simplify(ty));
};
var $author$project$PrettyPrinter$showGenVar = function (n) {
	return $elm$core$String$fromChar(
		$elm$core$Char$fromCode(
			$elm$core$Char$toCode(
				_Utils_chr('a')) + n));
};
var $author$project$PrettyPrinter$ppType = F2(
	function (prec, ty) {
		_v0$0:
		while (true) {
			_v0$5:
			while (true) {
				switch (ty.$) {
					case 'TyConst':
						switch (ty.a) {
							case '[]':
								if (!ty.b.b) {
									break _v0$0;
								} else {
									if (!ty.b.b.b) {
										var _v1 = ty.b;
										var ty1 = _v1.a;
										return $the_sett$elm_pretty_printer$Pretty$brackets(
											A2($author$project$PrettyPrinter$ppType, 0, ty1));
									} else {
										break _v0$5;
									}
								}
							case '(,)':
								if (!ty.b.b) {
									break _v0$0;
								} else {
									var ts = ty.b;
									return $the_sett$elm_pretty_printer$Pretty$parens(
										A2(
											$the_sett$elm_pretty_printer$Pretty$join,
											$the_sett$elm_pretty_printer$Pretty$char(
												_Utils_chr(',')),
											A2(
												$elm$core$List$map,
												$author$project$PrettyPrinter$ppType(0),
												ts)));
								}
							case '(,,)':
								if (!ty.b.b) {
									break _v0$0;
								} else {
									var ts = ty.b;
									return $the_sett$elm_pretty_printer$Pretty$parens(
										A2(
											$the_sett$elm_pretty_printer$Pretty$join,
											$the_sett$elm_pretty_printer$Pretty$char(
												_Utils_chr(',')),
											A2(
												$elm$core$List$map,
												$author$project$PrettyPrinter$ppType(0),
												ts)));
								}
							case '(,,,)':
								if (!ty.b.b) {
									break _v0$0;
								} else {
									var ts = ty.b;
									return $the_sett$elm_pretty_printer$Pretty$parens(
										A2(
											$the_sett$elm_pretty_printer$Pretty$join,
											$the_sett$elm_pretty_printer$Pretty$char(
												_Utils_chr(',')),
											A2(
												$elm$core$List$map,
												$author$project$PrettyPrinter$ppType(0),
												ts)));
								}
							default:
								if (!ty.b.b) {
									break _v0$0;
								} else {
									break _v0$5;
								}
						}
					case 'TyVar':
						var name = ty.a;
						return $the_sett$elm_pretty_printer$Pretty$string(name);
					case 'TyGen':
						var idx = ty.a;
						return $the_sett$elm_pretty_printer$Pretty$string(
							$author$project$PrettyPrinter$showGenVar(idx));
					default:
						var t1 = ty.a;
						var t2 = ty.b;
						return A2(
							$author$project$PrettyPrinter$parensIf,
							prec > 0,
							A2(
								$the_sett$elm_pretty_printer$Pretty$a,
								A2($author$project$PrettyPrinter$ppType, 0, t2),
								A2(
									$the_sett$elm_pretty_printer$Pretty$a,
									$the_sett$elm_pretty_printer$Pretty$string('->'),
									A2($author$project$PrettyPrinter$ppType, 1, t1))));
				}
			}
			var c = ty.a;
			var ts = ty.b;
			return A2(
				$author$project$PrettyPrinter$parensIf,
				prec > 0,
				$the_sett$elm_pretty_printer$Pretty$words(
					A2(
						$elm$core$List$cons,
						$the_sett$elm_pretty_printer$Pretty$string(c),
						A2(
							$elm$core$List$map,
							$author$project$PrettyPrinter$ppType(1),
							ts))));
		}
		var c = ty.a;
		return $the_sett$elm_pretty_printer$Pretty$string(c);
	});
var $author$project$PrettyPrinter$prettyType = function (ty) {
	return A2(
		$the_sett$elm_pretty_printer$Pretty$pretty,
		$author$project$PrettyPrinter$defaultLength,
		A2($author$project$PrettyPrinter$ppType, 0, ty));
};
var $author$project$Shows$showType = function (t) {
	return $author$project$PrettyPrinter$prettyType(t);
};
var $author$project$Unify$Mismatch = F2(
	function (a, b) {
		return {$: 'Mismatch', a: a, b: b};
	});
var $author$project$Unify$OccursCheckFail = F2(
	function (a, b) {
		return {$: 'OccursCheckFail', a: a, b: b};
	});
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $author$project$Unify$extend = F3(
	function (v, t, s) {
		var s1 = A2($elm$core$Dict$singleton, v, t);
		return A3(
			$elm$core$Dict$insert,
			v,
			t,
			A2(
				$elm$core$Dict$map,
				function (_v0) {
					return $author$project$Types$applyTySubst(s1);
				},
				s));
	});
var $author$project$Unify$occurs = F2(
	function (v, ty) {
		switch (ty.$) {
			case 'TyGen':
				return false;
			case 'TyVar':
				var x = ty.a;
				return _Utils_eq(x, v);
			case 'TyFun':
				var t1 = ty.a;
				var t2 = ty.b;
				return A2($author$project$Unify$occurs, v, t1) || A2($author$project$Unify$occurs, v, t2);
			default:
				var c = ty.a;
				var ts = ty.b;
				return A2(
					$elm$core$List$any,
					$author$project$Unify$occurs(v),
					ts);
		}
	});
var $author$project$Unify$unifyAux = F4(
	function (s, t1, t2, eqs) {
		unifyAux:
		while (true) {
			var _v2 = _Utils_Tuple2(t1, t2);
			_v2$1:
			while (true) {
				_v2$5:
				while (true) {
					switch (_v2.a.$) {
						case 'TyVar':
							if (_v2.b.$ === 'TyVar') {
								var x = _v2.a.a;
								var y = _v2.b.a;
								var _v3 = A2($elm$core$Basics$compare, x, y);
								switch (_v3.$) {
									case 'EQ':
										return A2($author$project$Unify$unifyEqs, s, eqs);
									case 'LT':
										return A2(
											$author$project$Unify$unifyEqs,
											A3(
												$author$project$Unify$extend,
												y,
												$author$project$Types$TyVar(x),
												s),
											eqs);
									default:
										return A2(
											$author$project$Unify$unifyEqs,
											A3(
												$author$project$Unify$extend,
												x,
												$author$project$Types$TyVar(y),
												s),
											eqs);
								}
							} else {
								var x = _v2.a.a;
								return A2($author$project$Unify$occurs, x, t2) ? $elm$core$Result$Err(
									A2($author$project$Unify$OccursCheckFail, t1, t2)) : A2(
									$author$project$Unify$unifyEqs,
									A3($author$project$Unify$extend, x, t2, s),
									eqs);
							}
						case 'TyConst':
							switch (_v2.b.$) {
								case 'TyVar':
									break _v2$1;
								case 'TyConst':
									var _v4 = _v2.a;
									var c1 = _v4.a;
									var ts1 = _v4.b;
									var _v5 = _v2.b;
									var c2 = _v5.a;
									var ts2 = _v5.b;
									return _Utils_eq(c1, c2) ? A2(
										$author$project$Unify$unifyEqs,
										s,
										_Utils_ap(
											A3($elm$core$List$map2, $elm$core$Tuple$pair, ts1, ts2),
											eqs)) : $elm$core$Result$Err(
										A2($author$project$Unify$Mismatch, t1, t2));
								default:
									break _v2$5;
							}
						case 'TyFun':
							switch (_v2.b.$) {
								case 'TyVar':
									break _v2$1;
								case 'TyFun':
									var _v6 = _v2.a;
									var t1a = _v6.a;
									var t1b = _v6.b;
									var _v7 = _v2.b;
									var t2a = _v7.a;
									var t2b = _v7.b;
									var $temp$s = s,
										$temp$t1 = t1a,
										$temp$t2 = t2a,
										$temp$eqs = A2(
										$elm$core$List$cons,
										_Utils_Tuple2(t1b, t2b),
										eqs);
									s = $temp$s;
									t1 = $temp$t1;
									t2 = $temp$t2;
									eqs = $temp$eqs;
									continue unifyAux;
								default:
									break _v2$5;
							}
						default:
							if (_v2.b.$ === 'TyVar') {
								break _v2$1;
							} else {
								break _v2$5;
							}
					}
				}
				return $elm$core$Result$Err(
					A2($author$project$Unify$Mismatch, t1, t2));
			}
			var $temp$s = s,
				$temp$t1 = t2,
				$temp$t2 = t1,
				$temp$eqs = eqs;
			s = $temp$s;
			t1 = $temp$t1;
			t2 = $temp$t2;
			eqs = $temp$eqs;
			continue unifyAux;
		}
	});
var $author$project$Unify$unifyEqs = F2(
	function (s, eqs) {
		if (!eqs.b) {
			return $elm$core$Result$Ok(s);
		} else {
			var _v1 = eqs.a;
			var t1 = _v1.a;
			var t2 = _v1.b;
			var rest = eqs.b;
			return A4(
				$author$project$Unify$unifyAux,
				s,
				A2($author$project$Types$applyTySubst, s, t1),
				A2($author$project$Types$applyTySubst, s, t2),
				rest);
		}
	});
var $author$project$Tc$unify = F3(
	function (show, t1, t2) {
		return A2(
			$author$project$Tc$andThen,
			function (s) {
				var _v0 = A2(
					$author$project$Unify$unifyEqs,
					s.unifier,
					_List_fromArray(
						[
							_Utils_Tuple2(t1, t2)
						]));
				if (_v0.$ === 'Ok') {
					var r = _v0.a;
					return $author$project$Tc$put(
						_Utils_update(
							s,
							{unifier: r}));
				} else {
					if (_v0.a.$ === 'Mismatch') {
						var _v1 = _v0.a;
						var t3 = _v1.a;
						var t4 = _v1.b;
						return $author$project$Tc$fail(
							'type mismatch: ' + (show(t3) + (' and ' + show(t4))));
					} else {
						var _v2 = _v0.a;
						var t3 = _v2.a;
						var t4 = _v2.b;
						return $author$project$Tc$fail(
							'occurs check failed (infinite type): ' + (show(t3) + (' = ' + show(t4))));
					}
				}
			},
			$author$project$Tc$get);
	});
var $author$project$Typecheck$unify = $author$project$Tc$unify($author$project$Shows$showType);
var $author$project$Typecheck$tcConsArgs = F4(
	function (tenv, patts, tyc1, ty) {
		if (!patts.b) {
			return A2(
				$author$project$Tc$andThen,
				function (_v5) {
					return A2(
						$author$project$Tc$andThen,
						function (_v6) {
							return $author$project$Tc$pure(tenv);
						},
						$author$project$Typecheck$tcConsCheck(ty));
				},
				A2($author$project$Typecheck$unify, tyc1, ty));
		} else {
			var p = patts.a;
			var ps = patts.b;
			return A2(
				$author$project$Tc$andThen,
				function (a) {
					return A2(
						$author$project$Tc$andThen,
						function (b) {
							return A2(
								$author$project$Tc$andThen,
								function (_v7) {
									return A2(
										$author$project$Tc$andThen,
										function (tenv1) {
											return A4($author$project$Typecheck$tcConsArgs, tenv1, ps, b, ty);
										},
										A3($author$project$Typecheck$tcPattern, tenv, p, a));
								},
								A2(
									$author$project$Typecheck$unify,
									tyc1,
									A2($author$project$Types$TyFun, a, b)));
						},
						$author$project$Tc$freshType);
				},
				$author$project$Tc$freshType);
		}
	});
var $author$project$Typecheck$tcPattern = F3(
	function (tenv, patt, ty) {
		tcPattern:
		while (true) {
			switch (patt.$) {
				case 'DefaultP':
					return $author$project$Tc$pure(tenv);
				case 'VarP':
					var _var = patt.a;
					return $author$project$Tc$pure(
						A3($author$project$Typecheck$extend, _var, ty, tenv));
				case 'BangP':
					var _var = patt.a;
					return $author$project$Tc$pure(
						A3($author$project$Typecheck$extend, _var, ty, tenv));
				case 'ConsP':
					var tag = patt.a;
					var args = patt.b;
					var _v1 = A2($elm$core$Dict$get, tag, tenv);
					if (_v1.$ === 'Just') {
						var tyc = _v1.a;
						return A2(
							$author$project$Tc$andThen,
							function (tyc1) {
								return A2(
									$author$project$Tc$explain,
									'in pattern ' + ($author$project$Shows$showPattern(patt) + ': '),
									A4($author$project$Typecheck$tcConsArgs, tenv, args, tyc1, ty));
							},
							$author$project$Tc$freshInst(tyc));
					} else {
						return $author$project$Tc$fail(
							'unknown constructor ' + $author$project$Shows$quote(tag));
					}
				case 'NumberP':
					return A2(
						$author$project$Tc$andThen,
						function (_v2) {
							return $author$project$Tc$pure(tenv);
						},
						A2($author$project$Typecheck$unify, ty, $author$project$Types$tyInt));
				case 'CharP':
					return A2(
						$author$project$Tc$andThen,
						function (_v3) {
							return $author$project$Tc$pure(tenv);
						},
						A2($author$project$Typecheck$unify, ty, $author$project$Types$tyChar));
				default:
					var _var = patt.a;
					var patt1 = patt.b;
					var tenv1 = A3($author$project$Typecheck$extend, _var, ty, tenv);
					var $temp$tenv = tenv1,
						$temp$patt = patt1,
						$temp$ty = ty;
					tenv = $temp$tenv;
					patt = $temp$patt;
					ty = $temp$ty;
					continue tcPattern;
			}
		}
	});
var $author$project$Typecheck$checkTypSig = F3(
	function (ftvs, bind, tyinfer) {
		var _v0 = bind.typeSig;
		if (_v0.$ === 'Nothing') {
			return $author$project$Tc$pure(_Utils_Tuple0);
		} else {
			var tysig = _v0.a;
			var gtysig = A2($author$project$Types$generalize, ftvs, tysig);
			return (!_Utils_eq(gtysig, tyinfer)) ? $author$project$Tc$fail(
				'type signature ' + (bind.name + (' :: ' + ($author$project$Shows$showType(tysig) + (' is too general; inferred type: ' + $author$project$Shows$showType(tyinfer)))))) : $author$project$Tc$pure(_Utils_Tuple0);
		}
	});
var $author$project$Typecheck$tcRecGen = F2(
	function (tyenv, lst) {
		if (!lst.b) {
			return $author$project$Tc$pure(tyenv);
		} else {
			var _v1 = lst.a;
			var bind = _v1.a;
			var ty = _v1.b;
			var rest = lst.b;
			return A2(
				$author$project$Tc$andThen,
				function (ty1) {
					var ftvs = $author$project$Typecheck$freeTyEnvVars(tyenv);
					var tyinfer = A2($author$project$Types$generalize, ftvs, ty1);
					return A2(
						$author$project$Tc$andThen,
						function (_v2) {
							var tyenv1 = A3($author$project$Typecheck$extend, bind.name, tyinfer, tyenv);
							return A2($author$project$Typecheck$tcRecGen, tyenv1, rest);
						},
						A3($author$project$Typecheck$checkTypSig, ftvs, bind, tyinfer));
				},
				$author$project$Tc$simplify(ty));
		}
	});
var $author$project$Typecheck$tcRecType = F2(
	function (ftvs, bind) {
		var _v0 = bind.typeSig;
		if (_v0.$ === 'Nothing') {
			return $author$project$Tc$freshType;
		} else {
			var tysig = _v0.a;
			var tysig1 = A2($author$project$Types$generalize, ftvs, tysig);
			return $author$project$Tc$pure(tysig1);
		}
	});
var $author$project$AST$translateCase = F2(
	function (e0, alts) {
		var body = A3(
			$elm$core$List$foldr,
			F2(
				function (_v0, rest) {
					var patt = _v0.a;
					var expr = _v0.b;
					var info = _v0.c;
					return A2(
						$author$project$AST$Alt,
						A2(
							$author$project$AST$Match,
							patt,
							A2(
								$author$project$AST$Return,
								expr,
								$elm$core$Maybe$Just(info))),
						rest);
				}),
			$author$project$AST$Fail,
			alts);
		return A2($author$project$AST$Arg, e0, body);
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $author$project$Typecheck$wellformedSignature = F2(
	function (kenv, bind) {
		var _v0 = bind.typeSig;
		if (_v0.$ === 'Just') {
			var typ = _v0.a;
			var tvs = $author$project$Types$freeTyVars(typ);
			var kenv1 = A2(
				$author$project$Typecheck$extendKindEnv,
				kenv,
				A2(
					$elm$core$List$map,
					function (v) {
						return _Utils_Tuple2(v, $author$project$Types$KindStar);
					},
					tvs));
			return A2(
				$author$project$Tc$explain,
				'type signature for ' + (bind.name + ', '),
				A2($author$project$Typecheck$wellformedType, kenv1, typ));
		} else {
			return $author$project$Tc$pure(_Utils_Tuple0);
		}
	});
var $author$project$Typecheck$wellformedBinds = F2(
	function (kenv, binds) {
		return A2(
			$author$project$Tc$traverse_,
			$author$project$Typecheck$wellformedSignature(kenv),
			binds);
	});
var $author$project$Typecheck$tcApplication = F4(
	function (kenv, tenv, tyfun, args) {
		if (!args.b) {
			return $author$project$Tc$pure(tyfun);
		} else {
			var e1 = args.a;
			var rest = args.b;
			return A2(
				$author$project$Tc$andThen,
				function (tyarg) {
					return A2(
						$author$project$Tc$andThen,
						function (a) {
							return A2(
								$author$project$Tc$andThen,
								function (_v17) {
									return A4($author$project$Typecheck$tcApplication, kenv, tenv, a, rest);
								},
								A2(
									$author$project$Typecheck$unify,
									tyfun,
									A2($author$project$Types$TyFun, tyarg, a)));
						},
						$author$project$Tc$freshType);
				},
				A3($author$project$Typecheck$tcExpr, kenv, tenv, e1));
		}
	});
var $author$project$Typecheck$tcExpr = F3(
	function (kenv, tenv, expr) {
		tcExpr:
		while (true) {
			switch (expr.$) {
				case 'Number':
					return $author$project$Tc$pure($author$project$Types$tyInt);
				case 'Char':
					return $author$project$Tc$pure($author$project$Types$tyChar);
				case 'Var':
					var v = expr.a;
					var _v9 = A2($elm$core$Dict$get, v, tenv);
					if (_v9.$ === 'Just') {
						var ty = _v9.a;
						return $author$project$Tc$freshInst(ty);
					} else {
						return $author$project$Tc$fail(
							'undefined variable: ' + $author$project$Shows$quote(v));
					}
				case 'Cons':
					var tag = expr.b;
					var args = expr.c;
					var _v10 = A2($elm$core$Dict$get, tag, tenv);
					if (_v10.$ === 'Just') {
						var ty = _v10.a;
						return A2(
							$author$project$Tc$andThen,
							function (ty1) {
								return A4($author$project$Typecheck$tcApplication, kenv, tenv, ty1, args);
							},
							$author$project$Tc$freshInst(ty));
					} else {
						return $author$project$Tc$fail(
							'unknown constructor: ' + $author$project$Shows$quote(tag));
					}
				case 'App':
					var fun = expr.a;
					var arg = expr.b;
					return A2(
						$author$project$Tc$andThen,
						function (tyfun) {
							return A4(
								$author$project$Typecheck$tcApplication,
								kenv,
								tenv,
								tyfun,
								_List_fromArray(
									[arg]));
						},
						A3($author$project$Typecheck$tcExpr, kenv, tenv, fun));
				case 'Lam':
					var match = expr.c;
					return A2(
						$author$project$Tc$andThen,
						function (ty) {
							return A2(
								$author$project$Tc$andThen,
								function (_v11) {
									return $author$project$Tc$pure(ty);
								},
								A4($author$project$Typecheck$tcMatching, kenv, tenv, match, ty));
						},
						$author$project$Tc$freshType);
				case 'Let':
					var binds = expr.a;
					var e1 = expr.b;
					return A2(
						$author$project$Tc$andThen,
						function (_v12) {
							return A2(
								$author$project$Tc$andThen,
								function (tenv1) {
									return A3($author$project$Typecheck$tcExpr, kenv, tenv1, e1);
								},
								A3($author$project$Typecheck$tcRecBinds, kenv, tenv, binds));
						},
						A2($author$project$Typecheck$wellformedBinds, kenv, binds));
				case 'Case':
					var e0 = expr.a;
					var alts = expr.b;
					return A2(
						$author$project$Tc$andThen,
						function (ty) {
							return A2(
								$author$project$Tc$andThen,
								function (_v13) {
									return $author$project$Tc$pure(ty);
								},
								A4(
									$author$project$Typecheck$tcMatching,
									kenv,
									tenv,
									A2($author$project$AST$translateCase, e0, alts),
									ty));
						},
						$author$project$Tc$freshType);
				case 'IfThenElse':
					var e0 = expr.a;
					var e1 = expr.b;
					var e2 = expr.c;
					return A2(
						$author$project$Tc$andThen,
						function (t0) {
							return A2(
								$author$project$Tc$andThen,
								function (_v14) {
									return A2(
										$author$project$Tc$andThen,
										function (t1) {
											return A2(
												$author$project$Tc$andThen,
												function (t2) {
													return A2(
														$author$project$Tc$andThen,
														function (_v15) {
															return $author$project$Tc$pure(t1);
														},
														A2($author$project$Typecheck$unify, t1, t2));
												},
												A3($author$project$Typecheck$tcExpr, kenv, tenv, e2));
										},
										A3($author$project$Typecheck$tcExpr, kenv, tenv, e1));
								},
								A2($author$project$Typecheck$unify, t0, $author$project$Types$tyBool));
						},
						A3($author$project$Typecheck$tcExpr, kenv, tenv, e0));
				case 'BinaryOp':
					var op = expr.a;
					var e1 = expr.b;
					var e2 = expr.c;
					var $temp$kenv = kenv,
						$temp$tenv = tenv,
						$temp$expr = A2(
						$author$project$AST$App,
						A2(
							$author$project$AST$App,
							$author$project$AST$Var(op),
							e1),
						e2);
					kenv = $temp$kenv;
					tenv = $temp$tenv;
					expr = $temp$expr;
					continue tcExpr;
				case 'UnaryOp':
					var op = expr.a;
					var e1 = expr.b;
					var $temp$kenv = kenv,
						$temp$tenv = tenv,
						$temp$expr = A2(
						$author$project$AST$App,
						$author$project$AST$Var(op),
						e1);
					kenv = $temp$kenv;
					tenv = $temp$tenv;
					expr = $temp$expr;
					continue tcExpr;
				default:
					return $author$project$Tc$freshType;
			}
		}
	});
var $author$project$Typecheck$tcMatching = F4(
	function (kenv, tenv, match, ty) {
		switch (match.$) {
			case 'Return':
				var expr = match.a;
				return A2(
					$author$project$Tc$explain,
					'in expression ' + ($author$project$Shows$showExpr(expr) + ': '),
					A2(
						$author$project$Tc$andThen,
						$author$project$Typecheck$unify(ty),
						A3($author$project$Typecheck$tcExpr, kenv, tenv, expr)));
			case 'Fail':
				return $author$project$Tc$pure(_Utils_Tuple0);
			case 'Match':
				var patt = match.a;
				var match1 = match.b;
				return A2(
					$author$project$Tc$andThen,
					function (ty1) {
						return A2(
							$author$project$Tc$andThen,
							function (ty2) {
								return A2(
									$author$project$Tc$andThen,
									function (_v5) {
										return A2(
											$author$project$Tc$andThen,
											function (tenv1) {
												return A4($author$project$Typecheck$tcMatching, kenv, tenv1, match1, ty2);
											},
											A3($author$project$Typecheck$tcPattern, tenv, patt, ty1));
									},
									A2(
										$author$project$Typecheck$unify,
										A2($author$project$Types$TyFun, ty1, ty2),
										ty));
							},
							$author$project$Tc$freshType);
					},
					$author$project$Tc$freshType);
			case 'Arg':
				var arg = match.a;
				var m1 = match.b;
				return A2(
					$author$project$Tc$andThen,
					function (ty1) {
						return A4(
							$author$project$Typecheck$tcMatching,
							kenv,
							tenv,
							m1,
							A2($author$project$Types$TyFun, ty1, ty));
					},
					A3($author$project$Typecheck$tcExpr, kenv, tenv, arg));
			case 'Alt':
				var m1 = match.a;
				var m2 = match.b;
				return A2(
					$author$project$Tc$andThen,
					function (_v6) {
						return A4($author$project$Typecheck$tcMatching, kenv, tenv, m2, ty);
					},
					A4($author$project$Typecheck$tcMatching, kenv, tenv, m1, ty));
			default:
				var binds = match.a;
				var m2 = match.b;
				return A2(
					$author$project$Tc$andThen,
					function (_v7) {
						return A2(
							$author$project$Tc$andThen,
							function (tenv1) {
								return A4($author$project$Typecheck$tcMatching, kenv, tenv1, m2, ty);
							},
							A3($author$project$Typecheck$tcRecBinds, kenv, tenv, binds));
					},
					A2($author$project$Typecheck$wellformedBinds, kenv, binds));
		}
	});
var $author$project$Typecheck$tcRecAlts = F3(
	function (kenv, tyenv, lst) {
		if (!lst.b) {
			return $author$project$Tc$pure(_Utils_Tuple0);
		} else {
			var _v2 = lst.a;
			var bind = _v2.a;
			var ty = _v2.b;
			var rest = lst.b;
			return A2(
				$author$project$Tc$andThen,
				function (_v3) {
					return A3($author$project$Typecheck$tcRecAlts, kenv, tyenv, rest);
				},
				A2(
					$author$project$Tc$explain,
					'definition of ' + (bind.name + ': '),
					A2(
						$author$project$Tc$andThen,
						function (ty1) {
							return A2($author$project$Typecheck$unify, ty, ty1);
						},
						A3($author$project$Typecheck$tcExpr, kenv, tyenv, bind.expr))));
		}
	});
var $author$project$Typecheck$tcRecBinds = F3(
	function (kenv, tyenv, binds) {
		return A2(
			$author$project$Tc$andThen,
			function (tys) {
				var names = A2(
					$elm$core$List$map,
					function ($) {
						return $.name;
					},
					binds);
				var tyenv1 = $elm$core$Dict$fromList(
					A3($elm$core$List$map2, $elm$core$Tuple$pair, names, tys));
				var tyenv2 = A2($elm$core$Dict$union, tyenv1, tyenv);
				return A2(
					$author$project$Tc$andThen,
					function (tyrs) {
						var lst = A3($elm$core$List$map2, $elm$core$Tuple$pair, binds, tyrs);
						return A2(
							$author$project$Tc$andThen,
							function (_v0) {
								return A2($author$project$Typecheck$tcRecGen, tyenv, lst);
							},
							A3($author$project$Typecheck$tcRecAlts, kenv, tyenv2, lst));
					},
					A2($author$project$Tc$traverse, $author$project$Tc$freshInst, tys));
			},
			A2(
				$author$project$Tc$traverse,
				$author$project$Typecheck$tcRecType(
					$author$project$Typecheck$freeTyEnvVars(tyenv)),
				binds));
	});
var $author$project$Typecheck$tcModule1 = F3(
	function (kenv, tenv, mod) {
		return $elm$core$List$isEmpty(mod.aliasDecls) ? A2(
			$author$project$Tc$andThen,
			function (tenv1) {
				return A2(
					$author$project$Tc$andThen,
					function (_v0) {
						return A2(
							$author$project$Tc$andThen,
							function (tenv2) {
								return $author$project$Tc$pure(
									_Utils_Tuple2(kenv, tenv2));
							},
							A3($author$project$Typecheck$tcRecBinds, kenv, tenv1, mod.binds));
					},
					A2($author$project$Typecheck$wellformedBinds, kenv, mod.binds));
			},
			A3($author$project$Typecheck$tcDataDecls, kenv, tenv, mod.dataDecls)) : $author$project$Tc$fail('type synonym declarations should have been expanded');
	});
var $author$project$Typecheck$tcModule = F3(
	function (kenv, tenv, mod) {
		var kenv1 = A2(
			$author$project$Typecheck$extendKindEnv,
			kenv,
			_Utils_ap(
				A2($elm$core$List$map, $author$project$Typecheck$getKindDecl, mod.aliasDecls),
				A2($elm$core$List$map, $author$project$Typecheck$getKindDecl, mod.dataDecls)));
		return A2(
			$author$project$Tc$andThen,
			function (mod1) {
				return A3($author$project$Typecheck$tcModule1, kenv1, tenv, mod1);
			},
			A2($author$project$Typecheck$tcExpandModule, kenv1, mod));
	});
var $author$project$Prelude$prelude = A2(
	$elm$core$Result$andThen,
	function (mod) {
		return A2(
			$elm$core$Result$andThen,
			function (_v0) {
				var kenv = _v0.a;
				var tenv = _v0.b;
				return $elm$core$Result$Ok(
					_Utils_Tuple3(mod.binds, kenv, tenv));
			},
			$author$project$Tc$eval(
				A3($author$project$Typecheck$tcModule, $author$project$Typecheck$initialKindEnv, $author$project$Typecheck$initialTypeEnv, mod)));
	},
	$author$project$Prelude$preludeModule);
var $author$project$AST$LetProg = F2(
	function (a, b) {
		return {$: 'LetProg', a: a, b: b};
	});
var $author$project$Typecheck$tcExprWrap = F3(
	function (kenv, tenv, expr) {
		return A2(
			$author$project$Tc$explain,
			'in expression ' + ($author$project$Shows$showExpr(expr) + ': '),
			A3($author$project$Typecheck$tcExpr, kenv, tenv, expr));
	});
var $author$project$Typecheck$tcProgram = F3(
	function (kenv, tenv, _v0) {
		var mod = _v0.a;
		var expr = _v0.b;
		return A2(
			$author$project$Tc$andThen,
			function (_v1) {
				var kenv1 = _v1.a;
				var tenv1 = _v1.b;
				return A3($author$project$Typecheck$tcExprWrap, kenv1, tenv1, expr);
			},
			A3($author$project$Typecheck$tcModule, kenv, tenv, mod));
	});
var $author$project$Typecheck$tcMain = F3(
	function (kenv, tenv, prog) {
		return $author$project$Tc$eval(
			A2(
				$author$project$Tc$andThen,
				function (_v0) {
					return $author$project$Tc$pure(_Utils_Tuple0);
				},
				A3($author$project$Typecheck$tcProgram, kenv, tenv, prog)));
	});
var $author$project$Haskelite$typecheck = F4(
	function (kenv, tenv, parsedExpr, parsedDecls) {
		var _v0 = _Utils_Tuple2(parsedExpr, parsedDecls);
		if ((_v0.a.$ === 'Ok') && (_v0.b.$ === 'Ok')) {
			var expr = _v0.a.a;
			var decls = _v0.b.a;
			return A2(
				$elm$core$Result$andThen,
				function (_v1) {
					return $elm$core$Result$Ok(
						$elm$core$Maybe$Just(
							A2($author$project$AST$LetProg, decls, expr)));
				},
				A3(
					$author$project$Typecheck$tcMain,
					kenv,
					tenv,
					A2($author$project$AST$LetProg, decls, expr)));
		} else {
			return $elm$core$Result$Ok($elm$core$Maybe$Nothing);
		}
	});
var $author$project$Haskelite$initModel = function (flags) {
	var _v0 = $author$project$Prelude$prelude;
	if (_v0.$ === 'Err') {
		var msg = _v0.a;
		return $author$project$Haskelite$Panic(msg);
	} else {
		var _v1 = _v0.a;
		var binds = _v1.a;
		var kenv = _v1.b;
		var tenv = _v1.c;
		var result2 = $author$project$HsParser$parseModule(flags.declarations);
		var result1 = $author$project$HsParser$parseExpr(flags.expression);
		var result3 = A4($author$project$Haskelite$typecheck, kenv, tenv, result1, result2);
		return $author$project$Haskelite$Editing(
			{flags: flags, kindEnv: kenv, parsedDecls: result2, parsedExpr: result1, prelude: binds, typeChecked: result3, typeEnv: tenv});
	}
};
var $author$project$Haskelite$init = function (flags) {
	return _Utils_Tuple2(
		$author$project$Haskelite$initModel(flags),
		$elm$core$Platform$Cmd$none);
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Haskelite$subscriptions = function (_v0) {
	return $elm$core$Platform$Sub$none;
};
var $author$project$Haskelite$Reducing = function (a) {
	return {$: 'Reducing', a: a};
};
var $author$project$Haskelite$defaultOpts = {justifications: true, layout: true, prettyEnums: true, prettyLists: true};
var $author$project$Machine$Heap$fromBinds = function (binds) {
	return {
		bounds: 0,
		indirections: 0,
		store: $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (b) {
					return _Utils_Tuple2(b.name, b.expr);
				},
				binds))
	};
};
var $author$project$Machine$Types$DeepEval = {$: 'DeepEval'};
var $author$project$Machine$Types$E = function (a) {
	return {$: 'E', a: a};
};
var $author$project$Machine$infixOps = _List_fromArray(
	['+', '-', '*', '==', '/=', '<', '>', '<=', '>=', 'div', 'mod', 'compare']);
var $author$project$Machine$Heap$update = F3(
	function (name, newExpr, heap) {
		return _Utils_update(
			heap,
			{
				store: A3($elm$core$Dict$insert, name, newExpr, heap.store)
			});
	});
var $author$project$Machine$Heap$insertFromList = $elm$core$List$foldr(
	F2(
		function (_v0, heap) {
			var name = _v0.a;
			var expr = _v0.b;
			return A3($author$project$Machine$Heap$update, name, expr, heap);
		}));
var $author$project$Machine$mkInfixOp = function (op) {
	return _Utils_Tuple2(
		op,
		A2(
			$author$project$AST$lambda,
			$elm$core$Maybe$Just(op),
			A2(
				$author$project$AST$Match,
				$author$project$AST$VarP('x'),
				A2(
					$author$project$AST$Match,
					$author$project$AST$VarP('y'),
					A2(
						$author$project$AST$Return,
						A3(
							$author$project$AST$BinaryOp,
							op,
							$author$project$AST$Var('x'),
							$author$project$AST$Var('y')),
						$elm$core$Maybe$Nothing)))));
};
var $author$project$AST$UnaryOp = F2(
	function (a, b) {
		return {$: 'UnaryOp', a: a, b: b};
	});
var $author$project$Machine$mkPrefixOp = function (op) {
	return _Utils_Tuple2(
		op,
		A2(
			$author$project$AST$lambda,
			$elm$core$Maybe$Just(op),
			A2(
				$author$project$AST$Match,
				$author$project$AST$VarP('x'),
				A2(
					$author$project$AST$Return,
					A2(
						$author$project$AST$UnaryOp,
						op,
						$author$project$AST$Var('x')),
					$elm$core$Maybe$Nothing))));
};
var $author$project$Machine$prefixOps = _List_fromArray(
	['negate', 'ord', 'chr', 'toUpper', 'toLower', 'isLower', 'isUpper', 'isAlpha', 'isDigit', 'isAlphaNum', 'show', 'error', 'force']);
var $author$project$Machine$initializeHeap = function (heap) {
	return A2(
		$author$project$Machine$Heap$insertFromList,
		heap,
		_Utils_ap(
			_List_fromArray(
				[
					_Utils_Tuple2(
					':',
					A2(
						$author$project$AST$lambda,
						$elm$core$Maybe$Just(':'),
						A2(
							$author$project$AST$Match,
							$author$project$AST$VarP('x'),
							A2(
								$author$project$AST$Match,
								$author$project$AST$VarP('y'),
								A2(
									$author$project$AST$Return,
									A3(
										$author$project$AST$Cons,
										true,
										':',
										_List_fromArray(
											[
												$author$project$AST$Var('x'),
												$author$project$AST$Var('y')
											])),
									$elm$core$Maybe$Nothing)))))
				]),
			_Utils_ap(
				A2($elm$core$List$map, $author$project$Machine$mkInfixOp, $author$project$Machine$infixOps),
				A2($elm$core$List$map, $author$project$Machine$mkPrefixOp, $author$project$Machine$prefixOps))));
};
var $author$project$Machine$start = F2(
	function (heap0, expr) {
		return _Utils_Tuple3(
			$author$project$Machine$initializeHeap(heap0),
			$author$project$Machine$Types$E(expr),
			_List_fromArray(
				[$author$project$Machine$Types$DeepEval]));
	});
var $author$project$Haskelite$editUpdate = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'EditExpr':
				var str = msg.a;
				var result = $author$project$HsParser$parseExpr(str);
				return $author$project$Haskelite$Editing(
					_Utils_update(
						model,
						{
							flags: {declarations: model.flags.declarations, expression: str},
							parsedExpr: result,
							typeChecked: $elm$core$Result$Ok($elm$core$Maybe$Nothing)
						}));
			case 'EditDecls':
				var str = msg.a;
				var result = $author$project$HsParser$parseModule(str);
				return $author$project$Haskelite$Editing(
					_Utils_update(
						model,
						{
							flags: {declarations: str, expression: model.flags.expression},
							parsedDecls: result,
							typeChecked: $elm$core$Result$Ok($elm$core$Maybe$Nothing)
						}));
			case 'EvalMode':
				var _v1 = A4($author$project$Haskelite$typecheck, model.kindEnv, model.typeEnv, model.parsedExpr, model.parsedDecls);
				if (_v1.$ === 'Ok') {
					if (_v1.a.$ === 'Just') {
						var _v2 = _v1.a.a;
						var mod = _v2.a;
						var expr = _v2.b;
						var heap0 = $author$project$Machine$Heap$fromBinds(
							_Utils_ap(model.prelude, mod.binds));
						var conf0 = A2($author$project$Machine$start, heap0, expr);
						return $author$project$Haskelite$Reducing(
							{
								current: _Utils_Tuple2(conf0, 'initial expression'),
								flags: model.flags,
								options: $author$project$Haskelite$defaultOpts,
								previous: _List_Nil
							});
					} else {
						var _v3 = _v1.a;
						return $author$project$Haskelite$Editing(
							_Utils_update(
								model,
								{
									typeChecked: $elm$core$Result$Ok($elm$core$Maybe$Nothing)
								}));
					}
				} else {
					var msg1 = _v1.a;
					return $author$project$Haskelite$Editing(
						_Utils_update(
							model,
							{
								typeChecked: $elm$core$Result$Err(msg1)
							}));
				}
			default:
				return $author$project$Haskelite$Editing(model);
		}
	});
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $author$project$Machine$exprSize = F2(
	function (heap, expr) {
		exprSize:
		while (true) {
			switch (expr.$) {
				case 'Cons':
					var tag = expr.b;
					var args = expr.c;
					return 1 + $elm$core$List$sum(
						A2(
							$elm$core$List$map,
							$author$project$Machine$exprSize(heap),
							args));
				case 'Var':
					var x = expr.a;
					var _v1 = A2($author$project$Machine$Heap$get, x, heap);
					if (_v1.$ === 'Just') {
						var expr1 = _v1.a;
						var $temp$heap = A2($author$project$Machine$Heap$delete, x, heap),
							$temp$expr = expr1;
						heap = $temp$heap;
						expr = $temp$expr;
						continue exprSize;
					} else {
						return 1;
					}
				default:
					return 1;
			}
		}
	});
var $author$project$Machine$contSize = F2(
	function (heap, cont) {
		switch (cont.$) {
			case 'ContBinary1':
				var expr = cont.b;
				return A2($author$project$Machine$exprSize, heap, expr);
			case 'ContBinary2':
				var expr = cont.b;
				return A2($author$project$Machine$exprSize, heap, expr);
			case 'Continue':
				var expr = cont.a;
				return A2($author$project$Machine$exprSize, heap, expr);
			default:
				return 1;
		}
	});
var $author$project$Machine$stackSize = F2(
	function (heap, stk) {
		return $elm$core$List$sum(
			A2(
				$elm$core$List$map,
				$author$project$Machine$contSize(heap),
				stk));
	});
var $author$project$Machine$confSize = function (_v0) {
	var heap = _v0.a;
	var control = _v0.b;
	var stack = _v0.c;
	if (control.$ === 'E') {
		var expr = control.a;
		return A2($author$project$Machine$exprSize, heap, expr) + A2($author$project$Machine$stackSize, heap, stack);
	} else {
		return A2($author$project$Machine$stackSize, heap, stack);
	}
};
var $author$project$Machine$isWhnf = function (expr) {
	switch (expr.$) {
		case 'Lam':
			var arity = expr.a;
			return arity > 0;
		case 'Number':
			return true;
		case 'Char':
			return true;
		case 'Cons':
			var flag = expr.a;
			return flag;
		default:
			return false;
	}
};
var $author$project$Machine$showPrim1 = F3(
	function (op, e1, e2) {
		return $author$project$Machine$isWhnf(e2) ? ($author$project$Shows$showExpr(
			A2($author$project$AST$UnaryOp, op, e1)) + (' = ' + $author$project$Shows$showExpr(e2))) : ('definition of ' + op);
	});
var $author$project$Machine$showPrim2 = F4(
	function (op, e1, e2, e3) {
		return $author$project$Machine$isWhnf(e3) ? ($author$project$Shows$showExpr(
			A3($author$project$AST$BinaryOp, op, e1, e2)) + (' = ' + $author$project$Shows$showExpr(e3))) : ('definition of ' + op);
	});
var $author$project$Machine$justification = function (_v0) {
	var heap = _v0.a;
	var control = _v0.b;
	var stack = _v0.c;
	var _v1 = _Utils_Tuple2(control, stack);
	_v1$3:
	while (true) {
		_v1$6:
		while (true) {
			if (_v1.a.$ === 'M') {
				if (_v1.b.b && (_v1.b.a.$ === 'MatchEnd')) {
					switch (_v1.a.a.$) {
						case 'Return':
							if (!_v1.a.b.b) {
								var _v6 = _v1.a;
								var _v7 = _v6.a;
								var expr = _v7.a;
								var info = _v7.b;
								var _v8 = _v1.b;
								var _v9 = _v8.a;
								return info;
							} else {
								break _v1$6;
							}
						case 'Fail':
							var _v10 = _v1.a;
							var _v11 = _v10.a;
							var _v12 = _v1.b;
							var _v13 = _v12.a;
							return $elm$core$Maybe$Just('pattern match failure');
						default:
							break _v1$6;
					}
				} else {
					break _v1$6;
				}
			} else {
				if (_v1.b.b) {
					switch (_v1.b.a.$) {
						case 'RetBinary':
							var w = _v1.a.a;
							var _v2 = _v1.b;
							var _v3 = _v2.a;
							var op = _v3.a;
							var e1 = _v3.b;
							var e2 = _v3.c;
							return $elm$core$Maybe$Just(
								A4($author$project$Machine$showPrim2, op, e1, e2, w));
						case 'RetUnary':
							var w = _v1.a.a;
							var _v4 = _v1.b;
							var _v5 = _v4.a;
							var op = _v5.a;
							var e1 = _v5.b;
							return $elm$core$Maybe$Just(
								A3($author$project$Machine$showPrim1, op, e1, w));
						default:
							if (_v1.a.a.$ === 'Exception') {
								break _v1$3;
							} else {
								break _v1$6;
							}
					}
				} else {
					if (_v1.a.a.$ === 'Exception') {
						break _v1$3;
					} else {
						var w = _v1.a.a;
						return $elm$core$Maybe$Just('final result');
					}
				}
			}
		}
		return $elm$core$Maybe$Nothing;
	}
	var msg = _v1.a.a.a;
	return $elm$core$Maybe$Just('runtime error');
};
var $author$project$Machine$Types$ContBinary1 = F2(
	function (a, b) {
		return {$: 'ContBinary1', a: a, b: b};
	});
var $author$project$Machine$Types$ContBinary2 = F2(
	function (a, b) {
		return {$: 'ContBinary2', a: a, b: b};
	});
var $author$project$Machine$Types$ContUnary = function (a) {
	return {$: 'ContUnary', a: a};
};
var $author$project$AST$Exception = function (a) {
	return {$: 'Exception', a: a};
};
var $author$project$Machine$Types$M = F2(
	function (a, b) {
		return {$: 'M', a: a, b: b};
	});
var $author$project$Machine$Types$MatchEnd = {$: 'MatchEnd'};
var $author$project$Machine$Types$PushAlt = F2(
	function (a, b) {
		return {$: 'PushAlt', a: a, b: b};
	});
var $author$project$Machine$Types$PushArg = function (a) {
	return {$: 'PushArg', a: a};
};
var $author$project$Machine$Types$PushBang = F2(
	function (a, b) {
		return {$: 'PushBang', a: a, b: b};
	});
var $author$project$Machine$Types$PushPat = F3(
	function (a, b, c) {
		return {$: 'PushPat', a: a, b: b, c: c};
	});
var $author$project$Machine$Types$RetBinary = F3(
	function (a, b, c) {
		return {$: 'RetBinary', a: a, b: b, c: c};
	});
var $author$project$Machine$Types$RetUnary = F2(
	function (a, b) {
		return {$: 'RetUnary', a: a, b: b};
	});
var $author$project$Machine$Types$Update = function (a) {
	return {$: 'Update', a: a};
};
var $author$project$Machine$applyArgs = F2(
	function (expr, args) {
		applyArgs:
		while (true) {
			if (!args.b) {
				return expr;
			} else {
				var arg1 = args.a;
				var rest = args.b;
				var $temp$expr = A2($author$project$AST$App, expr, arg1),
					$temp$args = rest;
				expr = $temp$expr;
				args = $temp$args;
				continue applyArgs;
			}
		}
	});
var $author$project$AST$restrictSubst = F2(
	function (names, s) {
		return A3($elm$core$List$foldr, $elm$core$Dict$remove, s, names);
	});
var $author$project$AST$applyAltsSubst = function (s) {
	return $elm$core$List$map(
		function (_v3) {
			var patt = _v3.a;
			var expr = _v3.b;
			var info = _v3.c;
			var s1 = A2(
				$author$project$AST$restrictSubst,
				$author$project$AST$patternVars(patt),
				s);
			return _Utils_Tuple3(
				patt,
				A2($author$project$AST$applySubst, s1, expr),
				info);
		});
};
var $author$project$AST$applyBindsSubst = function (s) {
	return $elm$core$List$map(
		function (b) {
			return _Utils_update(
				b,
				{
					expr: A2($author$project$AST$applySubst, s, b.expr)
				});
		});
};
var $author$project$AST$applyMatchSubst = F2(
	function (s, m) {
		switch (m.$) {
			case 'Return':
				var e = m.a;
				var info = m.b;
				return A2(
					$author$project$AST$Return,
					A2($author$project$AST$applySubst, s, e),
					info);
			case 'Fail':
				return $author$project$AST$Fail;
			case 'Match':
				var p = m.a;
				var m1 = m.b;
				var s1 = A3(
					$elm$core$List$foldr,
					$elm$core$Dict$remove,
					s,
					$author$project$AST$patternVars(p));
				return A2(
					$author$project$AST$Match,
					p,
					A2($author$project$AST$applyMatchSubst, s1, m1));
			case 'Arg':
				var e = m.a;
				var m1 = m.b;
				return A2(
					$author$project$AST$Arg,
					A2($author$project$AST$applySubst, s, e),
					A2($author$project$AST$applyMatchSubst, s, m1));
			case 'Alt':
				var m1 = m.a;
				var m2 = m.b;
				return A2(
					$author$project$AST$Alt,
					A2($author$project$AST$applyMatchSubst, s, m1),
					A2($author$project$AST$applyMatchSubst, s, m2));
			default:
				var binds = m.a;
				var m2 = m.b;
				var s1 = A2(
					$author$project$AST$restrictSubst,
					A2(
						$elm$core$List$map,
						function ($) {
							return $.name;
						},
						binds),
					s);
				var binds1 = A2($author$project$AST$applyBindsSubst, s1, binds);
				return A2(
					$author$project$AST$Where,
					binds1,
					A2($author$project$AST$applyMatchSubst, s1, m2));
		}
	});
var $author$project$AST$applySubst = F2(
	function (s, e) {
		switch (e.$) {
			case 'Var':
				var x = e.a;
				var _v1 = A2($elm$core$Dict$get, x, s);
				if (_v1.$ === 'Nothing') {
					return e;
				} else {
					var y = _v1.a;
					return $author$project$AST$Var(y);
				}
			case 'Lam':
				var arity = e.a;
				var optname = e.b;
				var m = e.c;
				return A3(
					$author$project$AST$Lam,
					arity,
					optname,
					A2($author$project$AST$applyMatchSubst, s, m));
			case 'Let':
				var binds = e.a;
				var e0 = e.b;
				var s1 = A2(
					$author$project$AST$restrictSubst,
					A2(
						$elm$core$List$map,
						function ($) {
							return $.name;
						},
						binds),
					s);
				var binds1 = A2($author$project$AST$applyBindsSubst, s1, binds);
				return A2(
					$author$project$AST$Let,
					binds1,
					A2($author$project$AST$applySubst, s1, e0));
			case 'Case':
				var e0 = e.a;
				var alts = e.b;
				return A2(
					$author$project$AST$Case,
					A2($author$project$AST$applySubst, s, e0),
					A2($author$project$AST$applyAltsSubst, s, alts));
			case 'App':
				var e1 = e.a;
				var e2 = e.b;
				return A2(
					$author$project$AST$App,
					A2($author$project$AST$applySubst, s, e1),
					A2($author$project$AST$applySubst, s, e2));
			case 'BinaryOp':
				var op = e.a;
				var e1 = e.b;
				var e2 = e.c;
				return A3(
					$author$project$AST$BinaryOp,
					op,
					A2($author$project$AST$applySubst, s, e1),
					A2($author$project$AST$applySubst, s, e2));
			case 'UnaryOp':
				var op = e.a;
				var e1 = e.b;
				return A2(
					$author$project$AST$UnaryOp,
					op,
					A2($author$project$AST$applySubst, s, e1));
			case 'Cons':
				var n = e.a;
				var c = e.b;
				var args = e.c;
				return A3(
					$author$project$AST$Cons,
					n,
					c,
					A2(
						$elm$core$List$map,
						$author$project$AST$applySubst(s),
						args));
			case 'IfThenElse':
				var e1 = e.a;
				var e2 = e.b;
				var e3 = e.c;
				return A3(
					$author$project$AST$IfThenElse,
					A2($author$project$AST$applySubst, s, e1),
					A2($author$project$AST$applySubst, s, e2),
					A2($author$project$AST$applySubst, s, e3));
			case 'Number':
				return e;
			case 'Char':
				return e;
			default:
				return e;
		}
	});
var $author$project$AST$falseCons = A3($author$project$AST$Cons, true, 'False', _List_Nil);
var $author$project$AST$trueCons = A3($author$project$AST$Cons, true, 'True', _List_Nil);
var $author$project$Machine$compareOp = function (c) {
	return c ? $author$project$AST$trueCons : $author$project$AST$falseCons;
};
var $author$project$AST$stringLit = function (s) {
	return $author$project$AST$listLit(
		A2(
			$elm$core$List$map,
			$author$project$AST$Char,
			$elm$core$String$toList(s)));
};
var $author$project$AST$stringUnlist = F2(
	function (expr, acc) {
		stringUnlist:
		while (true) {
			if ((((((expr.$ === 'Cons') && (expr.b === ':')) && expr.c.b) && (expr.c.a.$ === 'Char')) && expr.c.b.b) && (!expr.c.b.b.b)) {
				var _v1 = expr.c;
				var c = _v1.a.a;
				var _v2 = _v1.b;
				var rest = _v2.a;
				var $temp$expr = rest,
					$temp$acc = A2($elm$core$List$cons, c, acc);
				expr = $temp$expr;
				acc = $temp$acc;
				continue stringUnlist;
			} else {
				return $elm$core$String$fromList(
					$elm$core$List$reverse(acc));
			}
		}
	});
var $author$project$AST$stringUnlit = function (expr) {
	return A2($author$project$AST$stringUnlist, expr, _List_Nil);
};
var $elm$core$Char$toLower = _Char_toLower;
var $elm$core$Char$toUpper = _Char_toUpper;
var $author$project$Machine$applyPrimitive1 = F2(
	function (op, e) {
		var _v0 = _Utils_Tuple2(op, e);
		_v0$12:
		while (true) {
			switch (_v0.a) {
				case 'negate':
					if (_v0.b.$ === 'Number') {
						var v = _v0.b.a;
						return $author$project$AST$Number(-v);
					} else {
						break _v0$12;
					}
				case 'toLower':
					if (_v0.b.$ === 'Char') {
						var c = _v0.b.a;
						return $author$project$AST$Char(
							$elm$core$Char$toLower(c));
					} else {
						break _v0$12;
					}
				case 'toUpper':
					if (_v0.b.$ === 'Char') {
						var c = _v0.b.a;
						return $author$project$AST$Char(
							$elm$core$Char$toUpper(c));
					} else {
						break _v0$12;
					}
				case 'isUpper':
					if (_v0.b.$ === 'Char') {
						var c = _v0.b.a;
						return $author$project$Machine$compareOp(
							$elm$core$Char$isUpper(c));
					} else {
						break _v0$12;
					}
				case 'isLower':
					if (_v0.b.$ === 'Char') {
						var c = _v0.b.a;
						return $author$project$Machine$compareOp(
							$elm$core$Char$isLower(c));
					} else {
						break _v0$12;
					}
				case 'isAlpha':
					if (_v0.b.$ === 'Char') {
						var c = _v0.b.a;
						return $author$project$Machine$compareOp(
							$elm$core$Char$isAlpha(c));
					} else {
						break _v0$12;
					}
				case 'isAlphaNum':
					if (_v0.b.$ === 'Char') {
						var c = _v0.b.a;
						return $author$project$Machine$compareOp(
							$elm$core$Char$isAlphaNum(c));
					} else {
						break _v0$12;
					}
				case 'isDigit':
					if (_v0.b.$ === 'Char') {
						var c = _v0.b.a;
						return $author$project$Machine$compareOp(
							$elm$core$Char$isDigit(c));
					} else {
						break _v0$12;
					}
				case 'ord':
					if (_v0.b.$ === 'Char') {
						var c = _v0.b.a;
						return $author$project$AST$Number(
							$elm$core$Char$toCode(c));
					} else {
						break _v0$12;
					}
				case 'chr':
					if (_v0.b.$ === 'Number') {
						var n = _v0.b.a;
						return $author$project$AST$Char(
							$elm$core$Char$fromCode(n));
					} else {
						break _v0$12;
					}
				case 'show':
					if (_v0.b.$ === 'Number') {
						var n = _v0.b.a;
						return $author$project$AST$stringLit(
							$elm$core$String$fromInt(n));
					} else {
						break _v0$12;
					}
				case 'error':
					var str = _v0.b;
					return $author$project$AST$Exception(
						$author$project$AST$stringUnlit(str));
				default:
					break _v0$12;
			}
		}
		return $author$project$AST$Exception('invalid primitive arguments');
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $author$project$Machine$orderingCase = F4(
	function (expr, ltBranch, eqBranch, gtBranch) {
		_v0$4:
		while (true) {
			switch (expr.$) {
				case 'Exception':
					var msg = expr.a;
					return $author$project$AST$Exception(msg);
				case 'Cons':
					if (!expr.c.b) {
						switch (expr.b) {
							case 'LT':
								return ltBranch;
							case 'EQ':
								return eqBranch;
							case 'GT':
								return gtBranch;
							default:
								break _v0$4;
						}
					} else {
						break _v0$4;
					}
				default:
					break _v0$4;
			}
		}
		return A2(
			$author$project$AST$Case,
			expr,
			_List_fromArray(
				[
					_Utils_Tuple3(
					A2($author$project$AST$ConsP, 'LT', _List_Nil),
					ltBranch,
					'LT'),
					_Utils_Tuple3(
					A2($author$project$AST$ConsP, 'EQ', _List_Nil),
					eqBranch,
					'EQ'),
					_Utils_Tuple3(
					A2($author$project$AST$ConsP, 'GT', _List_Nil),
					gtBranch,
					'GT')
				]));
	});
var $author$project$Machine$compareCons = F2(
	function (t1, t2) {
		var _v0 = _Utils_Tuple2(t1, t2);
		_v0$2:
		while (true) {
			switch (_v0.a) {
				case '[]':
					if (_v0.b === ':') {
						return $elm$core$Basics$LT;
					} else {
						break _v0$2;
					}
				case ':':
					if (_v0.b === '[]') {
						return $elm$core$Basics$GT;
					} else {
						break _v0$2;
					}
				default:
					break _v0$2;
			}
		}
		return A2($elm$core$Basics$compare, t1, t2);
	});
var $author$project$Machine$orderingOp = function (c) {
	switch (c.$) {
		case 'LT':
			return A3($author$project$AST$Cons, true, 'LT', _List_Nil);
		case 'EQ':
			return A3($author$project$AST$Cons, true, 'EQ', _List_Nil);
		default:
			return A3($author$project$AST$Cons, true, 'GT', _List_Nil);
	}
};
var $author$project$Machine$structuralCmpList = F2(
	function (args1, args2) {
		var _v0 = _Utils_Tuple2(args1, args2);
		_v0$3:
		while (true) {
			if (!_v0.a.b) {
				if (!_v0.b.b) {
					return A3($author$project$AST$Cons, true, 'EQ', _List_Nil);
				} else {
					break _v0$3;
				}
			} else {
				if (_v0.b.b) {
					if ((!_v0.a.b.b) && (!_v0.b.b.b)) {
						var _v1 = _v0.a;
						var e1 = _v1.a;
						var _v2 = _v0.b;
						var e2 = _v2.a;
						return A3($author$project$AST$BinaryOp, 'compare', e1, e2);
					} else {
						var _v3 = _v0.a;
						var e1 = _v3.a;
						var rest1 = _v3.b;
						var _v4 = _v0.b;
						var e2 = _v4.a;
						var rest2 = _v4.b;
						return A2(
							$author$project$AST$Case,
							A3($author$project$AST$BinaryOp, 'compare', e1, e2),
							_List_fromArray(
								[
									_Utils_Tuple3(
									A2($author$project$AST$ConsP, 'EQ', _List_Nil),
									A2($author$project$Machine$structuralCmpList, rest1, rest2),
									'EQ'),
									_Utils_Tuple3(
									A2($author$project$AST$ConsP, 'LT', _List_Nil),
									A3($author$project$AST$Cons, true, 'LT', _List_Nil),
									'LT'),
									_Utils_Tuple3(
									A2($author$project$AST$ConsP, 'GT', _List_Nil),
									A3($author$project$AST$Cons, true, 'GT', _List_Nil),
									'GT')
								]));
					}
				} else {
					break _v0$3;
				}
			}
		}
		return $author$project$AST$Exception('shouldn\'t happen');
	});
var $author$project$Machine$structuralCmp = F2(
	function (e1, e2) {
		var _v0 = _Utils_Tuple2(e1, e2);
		_v0$4:
		while (true) {
			switch (_v0.a.$) {
				case 'Number':
					if (_v0.b.$ === 'Number') {
						var v1 = _v0.a.a;
						var v2 = _v0.b.a;
						return $author$project$Machine$orderingOp(
							A2($elm$core$Basics$compare, v1, v2));
					} else {
						break _v0$4;
					}
				case 'Char':
					if (_v0.b.$ === 'Char') {
						var c1 = _v0.a.a;
						var c2 = _v0.b.a;
						return $author$project$Machine$orderingOp(
							A2($elm$core$Basics$compare, c1, c2));
					} else {
						break _v0$4;
					}
				case 'Cons':
					if (_v0.b.$ === 'Cons') {
						var _v1 = _v0.a;
						var c1 = _v1.b;
						var args1 = _v1.c;
						var _v2 = _v0.b;
						var c2 = _v2.b;
						var args2 = _v2.c;
						var _v3 = A2($author$project$Machine$compareCons, c1, c2);
						switch (_v3.$) {
							case 'EQ':
								return A2($author$project$Machine$structuralCmpList, args1, args2);
							case 'LT':
								return A3($author$project$AST$Cons, true, 'LT', _List_Nil);
							default:
								return A3($author$project$AST$Cons, true, 'GT', _List_Nil);
						}
					} else {
						break _v0$4;
					}
				case 'Lam':
					if (_v0.b.$ === 'Lam') {
						var _v4 = _v0.a;
						var _v5 = _v0.b;
						return $author$project$AST$Exception('can\'t compare functions');
					} else {
						break _v0$4;
					}
				default:
					break _v0$4;
			}
		}
		return $author$project$AST$Exception('invalid arguments to structuralCmp');
	});
var $author$project$Machine$structuralEqList = F2(
	function (args1, args2) {
		var _v0 = _Utils_Tuple2(args1, args2);
		_v0$3:
		while (true) {
			if (!_v0.a.b) {
				if (!_v0.b.b) {
					return $author$project$AST$trueCons;
				} else {
					break _v0$3;
				}
			} else {
				if (_v0.b.b) {
					if ((!_v0.a.b.b) && (!_v0.b.b.b)) {
						var _v1 = _v0.a;
						var e1 = _v1.a;
						var _v2 = _v0.b;
						var e2 = _v2.a;
						return A3($author$project$AST$BinaryOp, '==', e1, e2);
					} else {
						var _v3 = _v0.a;
						var e1 = _v3.a;
						var rest1 = _v3.b;
						var _v4 = _v0.b;
						var e2 = _v4.a;
						var rest2 = _v4.b;
						return A2(
							$author$project$AST$App,
							A2(
								$author$project$AST$App,
								$author$project$AST$Var('&&'),
								A3($author$project$AST$BinaryOp, '==', e1, e2)),
							A2($author$project$Machine$structuralEqList, rest1, rest2));
					}
				} else {
					break _v0$3;
				}
			}
		}
		return $author$project$AST$Exception('shouldn\'t happen');
	});
var $author$project$Machine$structuralEq = F2(
	function (e1, e2) {
		var _v0 = _Utils_Tuple2(e1, e2);
		_v0$4:
		while (true) {
			switch (_v0.a.$) {
				case 'Number':
					if (_v0.b.$ === 'Number') {
						var v1 = _v0.a.a;
						var v2 = _v0.b.a;
						return $author$project$Machine$compareOp(
							_Utils_eq(v1, v2));
					} else {
						break _v0$4;
					}
				case 'Char':
					if (_v0.b.$ === 'Char') {
						var c1 = _v0.a.a;
						var c2 = _v0.b.a;
						return $author$project$Machine$compareOp(
							_Utils_eq(c1, c2));
					} else {
						break _v0$4;
					}
				case 'Cons':
					if (_v0.b.$ === 'Cons') {
						var _v1 = _v0.a;
						var c1 = _v1.b;
						var args1 = _v1.c;
						var _v2 = _v0.b;
						var c2 = _v2.b;
						var args2 = _v2.c;
						return _Utils_eq(c1, c2) ? A2($author$project$Machine$structuralEqList, args1, args2) : $author$project$AST$falseCons;
					} else {
						break _v0$4;
					}
				case 'Lam':
					if (_v0.b.$ === 'Lam') {
						var _v3 = _v0.a;
						var _v4 = _v0.b;
						return $author$project$AST$Exception('can\'t compare functions');
					} else {
						break _v0$4;
					}
				default:
					break _v0$4;
			}
		}
		return $author$project$AST$Exception('invalid arguments to equality');
	});
var $author$project$Machine$applyPrimitive2 = F3(
	function (op, e1, e2) {
		var _v0 = _Utils_Tuple3(op, e1, e2);
		_v0$12:
		while (true) {
			switch (_v0.a) {
				case '+':
					if ((_v0.b.$ === 'Number') && (_v0.c.$ === 'Number')) {
						var v1 = _v0.b.a;
						var v2 = _v0.c.a;
						return $author$project$AST$Number(v1 + v2);
					} else {
						break _v0$12;
					}
				case '-':
					if ((_v0.b.$ === 'Number') && (_v0.c.$ === 'Number')) {
						var v1 = _v0.b.a;
						var v2 = _v0.c.a;
						return $author$project$AST$Number(v1 - v2);
					} else {
						break _v0$12;
					}
				case '*':
					if ((_v0.b.$ === 'Number') && (_v0.c.$ === 'Number')) {
						var v1 = _v0.b.a;
						var v2 = _v0.c.a;
						return $author$project$AST$Number(v1 * v2);
					} else {
						break _v0$12;
					}
				case 'div':
					if ((_v0.b.$ === 'Number') && (_v0.c.$ === 'Number')) {
						var v1 = _v0.b.a;
						var v2 = _v0.c.a;
						if (!(!v2)) {
							var r = (v1 / v2) | 0;
							return $author$project$AST$Number(
								(r < 0) ? (r - 1) : r);
						} else {
							return $author$project$AST$Exception('division by zero');
						}
					} else {
						break _v0$12;
					}
				case 'mod':
					if ((_v0.b.$ === 'Number') && (_v0.c.$ === 'Number')) {
						var v1 = _v0.b.a;
						var v2 = _v0.c.a;
						return (!(!v2)) ? $author$project$AST$Number(
							A2($elm$core$Basics$modBy, v2, v1)) : $author$project$AST$Exception('division by zero');
					} else {
						break _v0$12;
					}
				case 'compare':
					return A2($author$project$Machine$structuralCmp, e1, e2);
				case '==':
					return A2($author$project$Machine$structuralEq, e1, e2);
				case '/=':
					return A2(
						$author$project$AST$App,
						$author$project$AST$Var('not'),
						A2($author$project$Machine$structuralEq, e1, e2));
				case '<=':
					return A4(
						$author$project$Machine$orderingCase,
						A2($author$project$Machine$structuralCmp, e1, e2),
						$author$project$AST$trueCons,
						$author$project$AST$trueCons,
						$author$project$AST$falseCons);
				case '<':
					return A4(
						$author$project$Machine$orderingCase,
						A2($author$project$Machine$structuralCmp, e1, e2),
						$author$project$AST$trueCons,
						$author$project$AST$falseCons,
						$author$project$AST$falseCons);
				case '>=':
					return A4(
						$author$project$Machine$orderingCase,
						A2($author$project$Machine$structuralCmp, e1, e2),
						$author$project$AST$falseCons,
						$author$project$AST$trueCons,
						$author$project$AST$trueCons);
				case '>':
					return A4(
						$author$project$Machine$orderingCase,
						A2($author$project$Machine$structuralCmp, e1, e2),
						$author$project$AST$falseCons,
						$author$project$AST$falseCons,
						$author$project$AST$trueCons);
				default:
					break _v0$12;
			}
		}
		return $author$project$AST$Exception('invalid primitive arguments');
	});
var $author$project$Machine$Types$Continue = F2(
	function (a, b) {
		return {$: 'Continue', a: a, b: b};
	});
var $arturopala$elm_monocle$Monocle$Optional$Optional = F2(
	function (getOption, set) {
		return {getOption: getOption, set: set};
	});
var $arturopala$elm_monocle$Monocle$Optional$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $arturopala$elm_monocle$Monocle$Optional$compose = F2(
	function (outer, inner) {
		var set = F2(
			function (c, a) {
				return A2(
					$elm$core$Maybe$withDefault,
					a,
					A2(
						$elm$core$Maybe$map,
						A2(
							$elm$core$Basics$composeR,
							inner.set(c),
							A2($arturopala$elm_monocle$Monocle$Optional$flip, outer.set, a)),
						outer.getOption(a)));
			});
		var getOption = function (a) {
			var _v0 = outer.getOption(a);
			if (_v0.$ === 'Just') {
				var x = _v0.a;
				return inner.getOption(x);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		return A2($arturopala$elm_monocle$Monocle$Optional$Optional, getOption, set);
	});
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $arturopala$elm_monocle$Monocle$Common$array = function (index) {
	return {
		getOption: $elm$core$Array$get(index),
		set: $elm$core$Array$set(index)
	};
};
var $arturopala$elm_monocle$Monocle$Lens$Lens = F2(
	function (get, set) {
		return {get: get, set: set};
	});
var $arturopala$elm_monocle$Monocle$Lens$fromIso = function (iso) {
	var set = F2(
		function (b, _v0) {
			return iso.reverseGet(b);
		});
	return A2($arturopala$elm_monocle$Monocle$Lens$Lens, iso.get, set);
};
var $arturopala$elm_monocle$Monocle$Optional$fromLens = function (lens) {
	var getOption = function (a) {
		return $elm$core$Maybe$Just(
			lens.get(a));
	};
	return A2($arturopala$elm_monocle$Monocle$Optional$Optional, getOption, lens.set);
};
var $arturopala$elm_monocle$Monocle$Iso$Iso = F2(
	function (get, reverseGet) {
		return {get: get, reverseGet: reverseGet};
	});
var $arturopala$elm_monocle$Monocle$Common$listToArray = A2($arturopala$elm_monocle$Monocle$Iso$Iso, $elm$core$Array$fromList, $elm$core$Array$toList);
var $arturopala$elm_monocle$Monocle$Common$list = function (index) {
	return A2(
		$arturopala$elm_monocle$Monocle$Optional$compose,
		$arturopala$elm_monocle$Monocle$Optional$fromLens(
			$arturopala$elm_monocle$Monocle$Lens$fromIso($arturopala$elm_monocle$Monocle$Common$listToArray)),
		$arturopala$elm_monocle$Monocle$Common$array(index));
};
var $author$project$Context$cons = function (i) {
	return {
		getOption: function (e) {
			if (e.$ === 'Cons') {
				var args = e.c;
				return A2(
					function ($) {
						return $.getOption;
					},
					$arturopala$elm_monocle$Monocle$Common$list(i),
					args);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		},
		set: F2(
			function (n, e) {
				if (e.$ === 'Cons') {
					var flag = e.a;
					var tag = e.b;
					var args = e.c;
					return A3(
						$author$project$AST$Cons,
						flag,
						tag,
						A3(
							function ($) {
								return $.set;
							},
							$arturopala$elm_monocle$Monocle$Common$list(i),
							n,
							args));
				} else {
					return e;
				}
			})
	};
};
var $author$project$Context$empty = {
	getOption: function (expr) {
		return $elm$core$Maybe$Just(expr);
	},
	set: F2(
		function (_new, _v0) {
			return _new;
		})
};
var $author$project$Machine$outermostRedex = function (expr) {
	if (expr.$ === 'Cons') {
		if (!expr.a) {
			return $elm$core$Maybe$Just($author$project$Context$empty);
		} else {
			var args = expr.c;
			return A2($author$project$Machine$outermostRedexArgs, 0, args);
		}
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Machine$outermostRedexArgs = F2(
	function (i, args) {
		outermostRedexArgs:
		while (true) {
			if (!args.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var arg1 = args.a;
				var rest = args.b;
				if ($author$project$Machine$isWhnf(arg1)) {
					var _v1 = $author$project$Machine$outermostRedex(arg1);
					if (_v1.$ === 'Nothing') {
						var $temp$i = i + 1,
							$temp$args = rest;
						i = $temp$i;
						args = $temp$args;
						continue outermostRedexArgs;
					} else {
						var ctx1 = _v1.a;
						return $elm$core$Maybe$Just(
							A2(
								$arturopala$elm_monocle$Monocle$Optional$compose,
								$author$project$Context$cons(i),
								ctx1));
					}
				} else {
					return $elm$core$Maybe$Just(
						$author$project$Context$cons(i));
				}
			}
		}
	});
var $author$project$Machine$outermostCont = function (expr) {
	return A2(
		$elm$core$Maybe$andThen,
		function (ctx) {
			return A2(
				$elm$core$Maybe$andThen,
				function (expr1) {
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(ctx, expr1));
				},
				ctx.getOption(expr));
		},
		$author$project$Machine$outermostRedex(expr));
};
var $author$project$Machine$deepEval = F3(
	function (expr, heap, stack) {
		var _v0 = $author$project$Machine$outermostCont(expr);
		if (_v0.$ === 'Just') {
			var _v1 = _v0.a;
			var ctx = _v1.a;
			var expr1 = _v1.b;
			return _Utils_Tuple3(
				heap,
				$author$project$Machine$Types$E(expr1),
				A2(
					$elm$core$List$cons,
					A2($author$project$Machine$Types$Continue, expr, ctx),
					stack));
		} else {
			return _Utils_Tuple3(
				heap,
				$author$project$Machine$Types$E(expr),
				stack);
		}
	});
var $author$project$Machine$matchCons = F3(
	function (es, ps, m) {
		var _v0 = _Utils_Tuple2(es, ps);
		if (_v0.a.b && _v0.b.b) {
			var _v1 = _v0.a;
			var e = _v1.a;
			var es1 = _v1.b;
			var _v2 = _v0.b;
			var p = _v2.a;
			var ps1 = _v2.b;
			return A2(
				$author$project$AST$Arg,
				e,
				A2(
					$author$project$AST$Match,
					p,
					A3($author$project$Machine$matchCons, es1, ps1, m)));
		} else {
			return m;
		}
	});
var $author$project$Machine$Heap$newBindings = F2(
	function (heap, binds) {
		var suffix = $elm$core$String$fromInt(heap.bounds);
		var names = A2(
			$elm$core$List$map,
			function ($) {
				return $.name;
			},
			binds);
		var locs = A2(
			$elm$core$List$map,
			function (x) {
				return x + ('$' + suffix);
			},
			names);
		var subst = $elm$core$Dict$fromList(
			A3($elm$core$List$map2, $elm$core$Tuple$pair, names, locs));
		var exprs = A2(
			$elm$core$List$map,
			function ($) {
				return $.expr;
			},
			binds);
		var store1 = A3(
			$elm$core$List$foldl,
			function (_v0) {
				var loc = _v0.a;
				var expr = _v0.b;
				return A2(
					$elm$core$Dict$insert,
					loc,
					A2($author$project$AST$applySubst, subst, expr));
			},
			heap.store,
			A3($elm$core$List$map2, $elm$core$Tuple$pair, locs, exprs));
		var newHeap = {bounds: 1 + heap.bounds, indirections: heap.indirections, store: store1};
		return _Utils_Tuple2(subst, newHeap);
	});
var $elm$core$String$append = _String_append;
var $author$project$Machine$Heap$newIndirection = F2(
	function (heap, expr) {
		var loc = A2(
			$elm$core$String$append,
			'$',
			$elm$core$String$fromInt(heap.indirections));
		var newHeap = {
			bounds: heap.bounds,
			indirections: 1 + heap.indirections,
			store: A3($elm$core$Dict$insert, loc, expr, heap.store)
		};
		return _Utils_Tuple2(loc, newHeap);
	});
var $author$project$Machine$isAtomic = function (expr) {
	_v0$4:
	while (true) {
		switch (expr.$) {
			case 'Var':
				return true;
			case 'Number':
				return true;
			case 'Char':
				return true;
			case 'Cons':
				if (!expr.c.b) {
					return true;
				} else {
					break _v0$4;
				}
			default:
				break _v0$4;
		}
	}
	return false;
};
var $author$project$Machine$normalizeArg = F2(
	function (heap, expr) {
		if ($author$project$Machine$isAtomic(expr)) {
			return _Utils_Tuple2(expr, heap);
		} else {
			var _v0 = A2($author$project$Machine$Heap$newIndirection, heap, expr);
			var name = _v0.a;
			var heap1 = _v0.b;
			return _Utils_Tuple2(
				$author$project$AST$Var(name),
				heap1);
		}
	});
var $author$project$Machine$normalizeArgs = F2(
	function (heap, args) {
		if (!args.b) {
			return _Utils_Tuple2(_List_Nil, heap);
		} else {
			var arg = args.a;
			var rest = args.b;
			var _v1 = A2($author$project$Machine$normalizeArg, heap, arg);
			var exp = _v1.a;
			var heap1 = _v1.b;
			var _v2 = A2($author$project$Machine$normalizeArgs, heap1, rest);
			var exps = _v2.a;
			var heap2 = _v2.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, exp, exps),
				heap2);
		}
	});
var $author$project$Machine$panic = function (msg) {
	return _Utils_Tuple3(
		$author$project$Machine$Heap$empty,
		$author$project$Machine$Types$E(
			$author$project$AST$Exception(msg)),
		_List_Nil);
};
var $author$project$AST$translateIfThenElse = F3(
	function (e1, e2, e3) {
		return A2(
			$author$project$AST$Alt,
			A2(
				$author$project$AST$Arg,
				e1,
				A2(
					$author$project$AST$Match,
					A2($author$project$AST$ConsP, 'True', _List_Nil),
					A2(
						$author$project$AST$Return,
						e2,
						$elm$core$Maybe$Just('if True')))),
			A2(
				$author$project$AST$Return,
				e3,
				$elm$core$Maybe$Just('if False')));
	});
var $author$project$Machine$transition = function (conf) {
	_v0$0:
	while (true) {
		_v0$1:
		while (true) {
			_v0$2:
			while (true) {
				_v0$3:
				while (true) {
					_v0$4:
					while (true) {
						_v0$6:
						while (true) {
							_v0$8:
							while (true) {
								_v0$9:
								while (true) {
									_v0$10:
									while (true) {
										_v0$11:
										while (true) {
											_v0$12:
											while (true) {
												_v0$13:
												while (true) {
													_v0$14:
													while (true) {
														_v0$15:
														while (true) {
															_v0$16:
															while (true) {
																_v0$17:
																while (true) {
																	_v0$18:
																	while (true) {
																		_v0$19:
																		while (true) {
																			_v0$22:
																			while (true) {
																				_v0$26:
																				while (true) {
																					_v0$36:
																					while (true) {
																						_v0$37:
																						while (true) {
																							_v0$38:
																							while (true) {
																								if (conf.b.$ === 'M') {
																									switch (conf.b.a.$) {
																										case 'Match':
																											if (conf.b.b.b) {
																												switch (conf.b.a.a.$) {
																													case 'DefaultP':
																														var heap = conf.a;
																														var _v33 = conf.b;
																														var _v34 = _v33.a;
																														var _v35 = _v34.a;
																														var m1 = _v34.b;
																														var _v36 = _v33.b;
																														var arg1 = _v36.a;
																														var args = _v36.b;
																														var stack = conf.c;
																														return $elm$core$Maybe$Just(
																															_Utils_Tuple3(
																																heap,
																																A2($author$project$Machine$Types$M, m1, args),
																																stack));
																													case 'VarP':
																														var heap = conf.a;
																														var _v37 = conf.b;
																														var _v38 = _v37.a;
																														var x = _v38.a.a;
																														var m1 = _v38.b;
																														var _v39 = _v37.b;
																														var arg1 = _v39.a;
																														var args = _v39.b;
																														var stack = conf.c;
																														var _v40 = A2($author$project$Machine$Heap$newIndirection, heap, arg1);
																														var loc = _v40.a;
																														var heap1 = _v40.b;
																														var m2 = A2(
																															$author$project$AST$applyMatchSubst,
																															A2($elm$core$Dict$singleton, x, loc),
																															m1);
																														return $elm$core$Maybe$Just(
																															_Utils_Tuple3(
																																heap1,
																																A2($author$project$Machine$Types$M, m2, args),
																																stack));
																													case 'AsP':
																														break _v0$22;
																													case 'BangP':
																														var heap = conf.a;
																														var _v44 = conf.b;
																														var _v45 = _v44.a;
																														var x = _v45.a.a;
																														var m0 = _v45.b;
																														var _v46 = _v44.b;
																														var arg0 = _v46.a;
																														var args = _v46.b;
																														var stack = conf.c;
																														var _v47 = A2($author$project$Machine$Heap$newIndirection, heap, arg0);
																														var loc = _v47.a;
																														var heap1 = _v47.b;
																														var m1 = A2(
																															$author$project$AST$applyMatchSubst,
																															A2($elm$core$Dict$singleton, x, loc),
																															m0);
																														return $elm$core$Maybe$Just(
																															_Utils_Tuple3(
																																heap1,
																																$author$project$Machine$Types$E(
																																	$author$project$AST$Var(loc)),
																																A2(
																																	$elm$core$List$cons,
																																	A2($author$project$Machine$Types$PushBang, args, m1),
																																	stack)));
																													default:
																														var heap = conf.a;
																														var _v48 = conf.b;
																														var _v49 = _v48.a;
																														var patt = _v49.a;
																														var m1 = _v49.b;
																														var _v50 = _v48.b;
																														var arg1 = _v50.a;
																														var args = _v50.b;
																														var stack = conf.c;
																														return $elm$core$Maybe$Just(
																															_Utils_Tuple3(
																																heap,
																																$author$project$Machine$Types$E(arg1),
																																A2(
																																	$elm$core$List$cons,
																																	A3($author$project$Machine$Types$PushPat, args, patt, m1),
																																	stack)));
																												}
																											} else {
																												if (conf.b.a.a.$ === 'AsP') {
																													break _v0$22;
																												} else {
																													break _v0$38;
																												}
																											}
																										case 'Return':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'MatchEnd':
																														var heap = conf.a;
																														var _v62 = conf.b;
																														var _v63 = _v62.a;
																														var expr = _v63.a;
																														var info = _v63.b;
																														var args = _v62.b;
																														var _v64 = conf.c;
																														var _v65 = _v64.a;
																														var stack = _v64.b;
																														return $elm$core$Maybe$Just(
																															_Utils_Tuple3(
																																heap,
																																$author$project$Machine$Types$E(
																																	A2($author$project$Machine$applyArgs, expr, args)),
																																stack));
																													case 'PushAlt':
																														var heap = conf.a;
																														var _v66 = conf.b;
																														var _v67 = _v66.a;
																														var expr = _v67.a;
																														var info = _v67.b;
																														var args = _v66.b;
																														var _v68 = conf.c;
																														var _v69 = _v68.a;
																														var stack = _v68.b;
																														return $elm$core$Maybe$Just(
																															_Utils_Tuple3(
																																heap,
																																A2(
																																	$author$project$Machine$Types$M,
																																	A2($author$project$AST$Return, expr, info),
																																	args),
																																stack));
																													default:
																														break _v0$38;
																												}
																											} else {
																												break _v0$38;
																											}
																										case 'Fail':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'PushAlt':
																														var heap = conf.a;
																														var _v70 = conf.b;
																														var _v71 = _v70.a;
																														var _v72 = conf.c;
																														var _v73 = _v72.a;
																														var args = _v73.a;
																														var m = _v73.b;
																														var stack = _v72.b;
																														return $elm$core$Maybe$Just(
																															_Utils_Tuple3(
																																heap,
																																A2($author$project$Machine$Types$M, m, args),
																																stack));
																													case 'MatchEnd':
																														var heap = conf.a;
																														var _v74 = conf.b;
																														var _v75 = _v74.a;
																														var _v76 = conf.c;
																														var _v77 = _v76.a;
																														var stack = _v76.b;
																														return $elm$core$Maybe$Just(
																															_Utils_Tuple3(
																																heap,
																																$author$project$Machine$Types$E(
																																	$author$project$AST$Exception('non-exaustive patterns')),
																																_List_Nil));
																													default:
																														break _v0$38;
																												}
																											} else {
																												break _v0$38;
																											}
																										case 'Alt':
																											var heap = conf.a;
																											var _v78 = conf.b;
																											var _v79 = _v78.a;
																											var m1 = _v79.a;
																											var m2 = _v79.b;
																											var args = _v78.b;
																											var stack = conf.c;
																											return $elm$core$Maybe$Just(
																												_Utils_Tuple3(
																													heap,
																													A2($author$project$Machine$Types$M, m1, args),
																													A2(
																														$elm$core$List$cons,
																														A2($author$project$Machine$Types$PushAlt, args, m2),
																														stack)));
																										case 'Arg':
																											var heap = conf.a;
																											var _v80 = conf.b;
																											var _v81 = _v80.a;
																											var e = _v81.a;
																											var m1 = _v81.b;
																											var args = _v80.b;
																											var stack = conf.c;
																											return $elm$core$Maybe$Just(
																												_Utils_Tuple3(
																													heap,
																													A2(
																														$author$project$Machine$Types$M,
																														m1,
																														A2($elm$core$List$cons, e, args)),
																													stack));
																										default:
																											var heap = conf.a;
																											var _v82 = conf.b;
																											var _v83 = _v82.a;
																											var binds = _v83.a;
																											var m1 = _v83.b;
																											var args = _v82.b;
																											var stack = conf.c;
																											var _v84 = A2($author$project$Machine$Heap$newBindings, heap, binds);
																											var s = _v84.a;
																											var heap1 = _v84.b;
																											return $elm$core$Maybe$Just(
																												_Utils_Tuple3(
																													heap1,
																													A2(
																														$author$project$Machine$Types$M,
																														A2($author$project$AST$applyMatchSubst, s, m1),
																														args),
																													stack));
																									}
																								} else {
																									switch (conf.b.a.$) {
																										case 'Exception':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'RetBinary':
																														break _v0$0;
																													case 'RetUnary':
																														break _v0$1;
																													case 'ContBinary1':
																														break _v0$2;
																													case 'ContBinary2':
																														break _v0$2;
																													case 'ContUnary':
																														break _v0$2;
																													case 'Update':
																														break _v0$2;
																													case 'PushBang':
																														break _v0$2;
																													case 'DeepEval':
																														break _v0$2;
																													case 'Continue':
																														break _v0$2;
																													default:
																														break _v0$2;
																												}
																											} else {
																												break _v0$38;
																											}
																										case 'App':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'RetBinary':
																														break _v0$0;
																													case 'RetUnary':
																														break _v0$1;
																													case 'ContBinary1':
																														break _v0$3;
																													case 'ContBinary2':
																														break _v0$3;
																													case 'ContUnary':
																														break _v0$3;
																													case 'Update':
																														break _v0$3;
																													case 'PushBang':
																														break _v0$3;
																													case 'DeepEval':
																														break _v0$3;
																													case 'Continue':
																														break _v0$3;
																													default:
																														break _v0$3;
																												}
																											} else {
																												break _v0$3;
																											}
																										case 'Lam':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'RetBinary':
																														break _v0$0;
																													case 'RetUnary':
																														break _v0$1;
																													case 'PushArg':
																														if (!conf.b.a.a) {
																															break _v0$6;
																														} else {
																															var heap = conf.a;
																															var _v13 = conf.b.a;
																															var optname = _v13.b;
																															var m = _v13.c;
																															var _v14 = conf.c;
																															var e1 = _v14.a.a;
																															var rest = _v14.b;
																															return $elm$core$Maybe$Just(
																																_Utils_Tuple3(
																																	heap,
																																	$author$project$Machine$Types$E(
																																		A2(
																																			$author$project$AST$lambda,
																																			optname,
																																			A2($author$project$AST$Arg, e1, m))),
																																	rest));
																														}
																													case 'ContBinary1':
																														if (!conf.b.a.a) {
																															break _v0$6;
																														} else {
																															break _v0$16;
																														}
																													case 'ContBinary2':
																														if (!conf.b.a.a) {
																															break _v0$6;
																														} else {
																															break _v0$17;
																														}
																													case 'ContUnary':
																														if (!conf.b.a.a) {
																															break _v0$6;
																														} else {
																															break _v0$18;
																														}
																													case 'Update':
																														if (!conf.b.a.a) {
																															break _v0$6;
																														} else {
																															break _v0$19;
																														}
																													case 'PushBang':
																														if (!conf.b.a.a) {
																															break _v0$6;
																														} else {
																															break _v0$26;
																														}
																													case 'DeepEval':
																														if (!conf.b.a.a) {
																															break _v0$6;
																														} else {
																															break _v0$36;
																														}
																													case 'Continue':
																														if (!conf.b.a.a) {
																															break _v0$6;
																														} else {
																															break _v0$37;
																														}
																													default:
																														if (!conf.b.a.a) {
																															break _v0$6;
																														} else {
																															break _v0$38;
																														}
																												}
																											} else {
																												if (!conf.b.a.a) {
																													break _v0$6;
																												} else {
																													break _v0$38;
																												}
																											}
																										case 'Let':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'RetBinary':
																														break _v0$0;
																													case 'RetUnary':
																														break _v0$1;
																													case 'ContBinary1':
																														break _v0$8;
																													case 'ContBinary2':
																														break _v0$8;
																													case 'ContUnary':
																														break _v0$8;
																													case 'Update':
																														break _v0$8;
																													case 'PushBang':
																														break _v0$8;
																													case 'DeepEval':
																														break _v0$8;
																													case 'Continue':
																														break _v0$8;
																													default:
																														break _v0$8;
																												}
																											} else {
																												break _v0$8;
																											}
																										case 'Case':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'RetBinary':
																														break _v0$0;
																													case 'RetUnary':
																														break _v0$1;
																													case 'ContBinary1':
																														break _v0$9;
																													case 'ContBinary2':
																														break _v0$9;
																													case 'ContUnary':
																														break _v0$9;
																													case 'Update':
																														break _v0$9;
																													case 'PushBang':
																														break _v0$9;
																													case 'DeepEval':
																														break _v0$9;
																													case 'Continue':
																														break _v0$9;
																													default:
																														break _v0$9;
																												}
																											} else {
																												break _v0$9;
																											}
																										case 'IfThenElse':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'RetBinary':
																														break _v0$0;
																													case 'RetUnary':
																														break _v0$1;
																													case 'ContBinary1':
																														break _v0$10;
																													case 'ContBinary2':
																														break _v0$10;
																													case 'ContUnary':
																														break _v0$10;
																													case 'Update':
																														break _v0$10;
																													case 'PushBang':
																														break _v0$10;
																													case 'DeepEval':
																														break _v0$10;
																													case 'Continue':
																														break _v0$10;
																													default:
																														break _v0$10;
																												}
																											} else {
																												break _v0$10;
																											}
																										case 'Var':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'RetBinary':
																														break _v0$0;
																													case 'RetUnary':
																														break _v0$1;
																													case 'ContBinary1':
																														break _v0$11;
																													case 'ContBinary2':
																														break _v0$11;
																													case 'ContUnary':
																														break _v0$11;
																													case 'Update':
																														break _v0$11;
																													case 'PushBang':
																														break _v0$11;
																													case 'DeepEval':
																														break _v0$11;
																													case 'Continue':
																														break _v0$11;
																													default:
																														break _v0$11;
																												}
																											} else {
																												break _v0$11;
																											}
																										case 'BinaryOp':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'RetBinary':
																														break _v0$0;
																													case 'RetUnary':
																														break _v0$1;
																													case 'ContBinary1':
																														break _v0$12;
																													case 'ContBinary2':
																														break _v0$12;
																													case 'ContUnary':
																														break _v0$12;
																													case 'Update':
																														break _v0$12;
																													case 'PushBang':
																														break _v0$12;
																													case 'DeepEval':
																														break _v0$12;
																													case 'Continue':
																														break _v0$12;
																													default:
																														break _v0$12;
																												}
																											} else {
																												break _v0$12;
																											}
																										case 'UnaryOp':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'RetBinary':
																														break _v0$0;
																													case 'RetUnary':
																														break _v0$1;
																													case 'ContBinary1':
																														switch (conf.b.a.a) {
																															case 'error':
																																break _v0$13;
																															case 'force':
																																break _v0$14;
																															default:
																																break _v0$15;
																														}
																													case 'ContBinary2':
																														switch (conf.b.a.a) {
																															case 'error':
																																break _v0$13;
																															case 'force':
																																break _v0$14;
																															default:
																																break _v0$15;
																														}
																													case 'ContUnary':
																														switch (conf.b.a.a) {
																															case 'error':
																																break _v0$13;
																															case 'force':
																																break _v0$14;
																															default:
																																break _v0$15;
																														}
																													case 'Update':
																														switch (conf.b.a.a) {
																															case 'error':
																																break _v0$13;
																															case 'force':
																																break _v0$14;
																															default:
																																break _v0$15;
																														}
																													case 'PushBang':
																														switch (conf.b.a.a) {
																															case 'error':
																																break _v0$13;
																															case 'force':
																																break _v0$14;
																															default:
																																break _v0$15;
																														}
																													case 'DeepEval':
																														switch (conf.b.a.a) {
																															case 'error':
																																break _v0$13;
																															case 'force':
																																break _v0$14;
																															default:
																																break _v0$15;
																														}
																													case 'Continue':
																														switch (conf.b.a.a) {
																															case 'error':
																																break _v0$13;
																															case 'force':
																																break _v0$14;
																															default:
																																break _v0$15;
																														}
																													default:
																														switch (conf.b.a.a) {
																															case 'error':
																																break _v0$13;
																															case 'force':
																																break _v0$14;
																															default:
																																break _v0$15;
																														}
																												}
																											} else {
																												switch (conf.b.a.a) {
																													case 'error':
																														break _v0$13;
																													case 'force':
																														break _v0$14;
																													default:
																														break _v0$15;
																												}
																											}
																										case 'Cons':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'RetBinary':
																														break _v0$0;
																													case 'RetUnary':
																														break _v0$1;
																													case 'PushArg':
																														if (!conf.b.a.a) {
																															break _v0$4;
																														} else {
																															var heap = conf.a;
																															var _v10 = conf.b.a;
																															var c = _v10.b;
																															var args = _v10.c;
																															var _v11 = conf.c;
																															var arg = _v11.a.a;
																															var stack = _v11.b;
																															return $elm$core$Maybe$Just(
																																_Utils_Tuple3(
																																	heap,
																																	$author$project$Machine$Types$E(
																																		A3(
																																			$author$project$AST$Cons,
																																			true,
																																			c,
																																			_Utils_ap(
																																				args,
																																				_List_fromArray(
																																					[arg])))),
																																	stack));
																														}
																													case 'ContBinary1':
																														if (!conf.b.a.a) {
																															break _v0$4;
																														} else {
																															break _v0$16;
																														}
																													case 'ContBinary2':
																														if (!conf.b.a.a) {
																															break _v0$4;
																														} else {
																															break _v0$17;
																														}
																													case 'ContUnary':
																														if (!conf.b.a.a) {
																															break _v0$4;
																														} else {
																															break _v0$18;
																														}
																													case 'Update':
																														if (!conf.b.a.a) {
																															break _v0$4;
																														} else {
																															break _v0$19;
																														}
																													case 'PushPat':
																														if (!conf.b.a.a) {
																															break _v0$4;
																														} else {
																															if (conf.c.a.b.$ === 'ConsP') {
																																var heap = conf.a;
																																var _v51 = conf.b.a;
																																var c0 = _v51.b;
																																var es = _v51.c;
																																var _v52 = conf.c;
																																var _v53 = _v52.a;
																																var args = _v53.a;
																																var _v54 = _v53.b;
																																var c1 = _v54.a;
																																var ps = _v54.b;
																																var m1 = _v53.c;
																																var stack = _v52.b;
																																if (_Utils_eq(c0, c1)) {
																																	var _v55 = A2($author$project$Machine$normalizeArgs, heap, es);
																																	var es1 = _v55.a;
																																	var heap1 = _v55.b;
																																	return $elm$core$Maybe$Just(
																																		_Utils_Tuple3(
																																			heap1,
																																			A2(
																																				$author$project$Machine$Types$M,
																																				A3($author$project$Machine$matchCons, es1, ps, m1),
																																				args),
																																			stack));
																																} else {
																																	return $elm$core$Maybe$Just(
																																		_Utils_Tuple3(
																																			heap,
																																			A2($author$project$Machine$Types$M, $author$project$AST$Fail, _List_Nil),
																																			stack));
																																}
																															} else {
																																break _v0$38;
																															}
																														}
																													case 'PushBang':
																														if (!conf.b.a.a) {
																															break _v0$4;
																														} else {
																															break _v0$26;
																														}
																													case 'DeepEval':
																														if (!conf.b.a.a) {
																															break _v0$4;
																														} else {
																															break _v0$36;
																														}
																													case 'Continue':
																														if (!conf.b.a.a) {
																															break _v0$4;
																														} else {
																															break _v0$37;
																														}
																													default:
																														if (!conf.b.a.a) {
																															break _v0$4;
																														} else {
																															break _v0$38;
																														}
																												}
																											} else {
																												if (!conf.b.a.a) {
																													break _v0$4;
																												} else {
																													break _v0$38;
																												}
																											}
																										case 'Number':
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'RetBinary':
																														break _v0$0;
																													case 'RetUnary':
																														break _v0$1;
																													case 'ContBinary1':
																														break _v0$16;
																													case 'ContBinary2':
																														break _v0$17;
																													case 'ContUnary':
																														break _v0$18;
																													case 'Update':
																														break _v0$19;
																													case 'PushBang':
																														break _v0$26;
																													case 'PushPat':
																														if (conf.c.a.b.$ === 'NumberP') {
																															var heap = conf.a;
																															var n = conf.b.a.a;
																															var _v58 = conf.c;
																															var _v59 = _v58.a;
																															var args = _v59.a;
																															var k = _v59.b.a;
																															var m1 = _v59.c;
																															var stack = _v58.b;
																															return _Utils_eq(n, k) ? $elm$core$Maybe$Just(
																																_Utils_Tuple3(
																																	heap,
																																	A2($author$project$Machine$Types$M, m1, args),
																																	stack)) : $elm$core$Maybe$Just(
																																_Utils_Tuple3(
																																	heap,
																																	A2($author$project$Machine$Types$M, $author$project$AST$Fail, _List_Nil),
																																	stack));
																														} else {
																															break _v0$38;
																														}
																													case 'DeepEval':
																														break _v0$36;
																													case 'Continue':
																														break _v0$37;
																													default:
																														break _v0$38;
																												}
																											} else {
																												break _v0$38;
																											}
																										default:
																											if (conf.c.b) {
																												switch (conf.c.a.$) {
																													case 'RetBinary':
																														break _v0$0;
																													case 'RetUnary':
																														break _v0$1;
																													case 'ContBinary1':
																														break _v0$16;
																													case 'ContBinary2':
																														break _v0$17;
																													case 'ContUnary':
																														break _v0$18;
																													case 'Update':
																														break _v0$19;
																													case 'PushBang':
																														break _v0$26;
																													case 'PushPat':
																														if (conf.c.a.b.$ === 'CharP') {
																															var heap = conf.a;
																															var c = conf.b.a.a;
																															var _v60 = conf.c;
																															var _v61 = _v60.a;
																															var args = _v61.a;
																															var k = _v61.b.a;
																															var m1 = _v61.c;
																															var stack = _v60.b;
																															return _Utils_eq(c, k) ? $elm$core$Maybe$Just(
																																_Utils_Tuple3(
																																	heap,
																																	A2($author$project$Machine$Types$M, m1, args),
																																	stack)) : $elm$core$Maybe$Just(
																																_Utils_Tuple3(
																																	heap,
																																	A2($author$project$Machine$Types$M, $author$project$AST$Fail, _List_Nil),
																																	stack));
																														} else {
																															break _v0$38;
																														}
																													case 'DeepEval':
																														break _v0$36;
																													case 'Continue':
																														break _v0$37;
																													default:
																														break _v0$38;
																												}
																											} else {
																												break _v0$38;
																											}
																									}
																								}
																							}
																							return $elm$core$Maybe$Nothing;
																						}
																						var heap = conf.a;
																						var w = conf.b.a;
																						var _v87 = conf.c;
																						var _v88 = _v87.a;
																						var expr = _v88.a;
																						var ctx = _v88.b;
																						var stack = _v87.b;
																						return $elm$core$Maybe$Just(
																							A3(
																								$author$project$Machine$deepEval,
																								A2(ctx.set, w, expr),
																								heap,
																								stack));
																					}
																					var heap = conf.a;
																					var w = conf.b.a;
																					var _v85 = conf.c;
																					var _v86 = _v85.a;
																					var stack = _v85.b;
																					return $elm$core$Maybe$Just(
																						A3($author$project$Machine$deepEval, w, heap, stack));
																				}
																				var heap = conf.a;
																				var w = conf.b.a;
																				var _v56 = conf.c;
																				var _v57 = _v56.a;
																				var args = _v57.a;
																				var m1 = _v57.b;
																				var stack = _v56.b;
																				return $elm$core$Maybe$Just(
																					_Utils_Tuple3(
																						heap,
																						A2($author$project$Machine$Types$M, m1, args),
																						stack));
																			}
																			var heap = conf.a;
																			var _v41 = conf.b;
																			var _v42 = _v41.a;
																			var _v43 = _v42.a;
																			var x = _v43.a;
																			var pat = _v43.b;
																			var m1 = _v42.b;
																			var args = _v41.b;
																			var stack = conf.c;
																			return $elm$core$Maybe$Just(
																				_Utils_Tuple3(
																					heap,
																					A2(
																						$author$project$Machine$Types$M,
																						A2(
																							$author$project$AST$Match,
																							$author$project$AST$VarP(x),
																							A2(
																								$author$project$AST$Arg,
																								$author$project$AST$Var(x),
																								A2($author$project$AST$Match, pat, m1))),
																						args),
																					stack));
																		}
																		var heap = conf.a;
																		var w = conf.b.a;
																		var _v32 = conf.c;
																		var y = _v32.a.a;
																		var stack = _v32.b;
																		var heap1 = A3($author$project$Machine$Heap$update, y, w, heap);
																		return $elm$core$Maybe$Just(
																			_Utils_Tuple3(
																				heap1,
																				$author$project$Machine$Types$E(w),
																				stack));
																	}
																	var heap = conf.a;
																	var w = conf.b.a;
																	var _v30 = conf.c;
																	var op = _v30.a.a;
																	var stack = _v30.b;
																	var _v31 = A2($author$project$Machine$applyPrimitive1, op, w);
																	if (_v31.$ === 'Exception') {
																		var msg = _v31.a;
																		return $elm$core$Maybe$Just(
																			_Utils_Tuple3(
																				heap,
																				$author$project$Machine$Types$E(
																					$author$project$AST$Exception(msg)),
																				_List_Nil));
																	} else {
																		var result = _v31;
																		return $elm$core$Maybe$Just(
																			_Utils_Tuple3(
																				heap,
																				$author$project$Machine$Types$E(result),
																				A2(
																					$elm$core$List$cons,
																					A2($author$project$Machine$Types$RetUnary, op, w),
																					stack)));
																	}
																}
																var heap = conf.a;
																var w2 = conf.b.a;
																var _v27 = conf.c;
																var _v28 = _v27.a;
																var op = _v28.a;
																var w1 = _v28.b;
																var stack = _v27.b;
																var _v29 = A3($author$project$Machine$applyPrimitive2, op, w1, w2);
																if (_v29.$ === 'Exception') {
																	var msg = _v29.a;
																	return $elm$core$Maybe$Just(
																		_Utils_Tuple3(
																			heap,
																			$author$project$Machine$Types$E(
																				$author$project$AST$Exception(msg)),
																			_List_Nil));
																} else {
																	var result = _v29;
																	return $elm$core$Maybe$Just(
																		_Utils_Tuple3(
																			heap,
																			$author$project$Machine$Types$E(result),
																			A2(
																				$elm$core$List$cons,
																				A3($author$project$Machine$Types$RetBinary, op, w1, w2),
																				stack)));
																}
															}
															var heap = conf.a;
															var w1 = conf.b.a;
															var _v25 = conf.c;
															var _v26 = _v25.a;
															var op = _v26.a;
															var e2 = _v26.b;
															var stack = _v25.b;
															return $elm$core$Maybe$Just(
																_Utils_Tuple3(
																	heap,
																	$author$project$Machine$Types$E(e2),
																	A2(
																		$elm$core$List$cons,
																		A2($author$project$Machine$Types$ContBinary2, op, w1),
																		stack)));
														}
														var heap = conf.a;
														var _v24 = conf.b.a;
														var op = _v24.a;
														var e1 = _v24.b;
														var stack = conf.c;
														return $elm$core$Maybe$Just(
															_Utils_Tuple3(
																heap,
																$author$project$Machine$Types$E(e1),
																A2(
																	$elm$core$List$cons,
																	$author$project$Machine$Types$ContUnary(op),
																	stack)));
													}
													var heap = conf.a;
													var _v23 = conf.b.a;
													var e1 = _v23.b;
													var stack = conf.c;
													return $elm$core$Maybe$Just(
														_Utils_Tuple3(
															heap,
															$author$project$Machine$Types$E(e1),
															A2($elm$core$List$cons, $author$project$Machine$Types$DeepEval, stack)));
												}
												var heap = conf.a;
												var _v22 = conf.b.a;
												var e1 = _v22.b;
												var stack = conf.c;
												return $elm$core$Maybe$Just(
													_Utils_Tuple3(
														heap,
														$author$project$Machine$Types$E(e1),
														A2(
															$elm$core$List$cons,
															$author$project$Machine$Types$DeepEval,
															A2(
																$elm$core$List$cons,
																$author$project$Machine$Types$ContUnary('error'),
																stack))));
											}
											var heap = conf.a;
											var _v21 = conf.b.a;
											var op = _v21.a;
											var e1 = _v21.b;
											var e2 = _v21.c;
											var stack = conf.c;
											return A2($elm$core$List$member, op, $author$project$Machine$infixOps) ? $elm$core$Maybe$Just(
												_Utils_Tuple3(
													heap,
													$author$project$Machine$Types$E(e1),
													A2(
														$elm$core$List$cons,
														A2($author$project$Machine$Types$ContBinary1, op, e2),
														stack))) : $elm$core$Maybe$Just(
												_Utils_Tuple3(
													heap,
													$author$project$Machine$Types$E(
														A2(
															$author$project$AST$App,
															A2(
																$author$project$AST$App,
																$author$project$AST$Var(op),
																e1),
															e2)),
													stack));
										}
										var heap = conf.a;
										var y = conf.b.a.a;
										var stack = conf.c;
										var _v20 = A2($author$project$Machine$Heap$get, y, heap);
										if (_v20.$ === 'Just') {
											var expr = _v20.a;
											return $author$project$Machine$isWhnf(expr) ? $elm$core$Maybe$Just(
												_Utils_Tuple3(
													heap,
													$author$project$Machine$Types$E(expr),
													stack)) : $elm$core$Maybe$Just(
												_Utils_Tuple3(
													heap,
													$author$project$Machine$Types$E(expr),
													A2(
														$elm$core$List$cons,
														$author$project$Machine$Types$Update(y),
														stack)));
										} else {
											return $elm$core$Maybe$Just(
												$author$project$Machine$panic('dangling variable: ' + y));
										}
									}
									var heap = conf.a;
									var _v19 = conf.b.a;
									var e1 = _v19.a;
									var e2 = _v19.b;
									var e3 = _v19.c;
									var stack = conf.c;
									return $elm$core$Maybe$Just(
										_Utils_Tuple3(
											heap,
											A2(
												$author$project$Machine$Types$M,
												A3($author$project$AST$translateIfThenElse, e1, e2, e3),
												_List_Nil),
											A2($elm$core$List$cons, $author$project$Machine$Types$MatchEnd, stack)));
								}
								var heap = conf.a;
								var _v17 = conf.b.a;
								var e0 = _v17.a;
								var alts = _v17.b;
								var stack = conf.c;
								var _v18 = A2($author$project$Machine$normalizeArg, heap, e0);
								var e1 = _v18.a;
								var heap1 = _v18.b;
								return $elm$core$Maybe$Just(
									_Utils_Tuple3(
										heap1,
										A2(
											$author$project$Machine$Types$M,
											A2($author$project$AST$translateCase, e1, alts),
											_List_Nil),
										A2($elm$core$List$cons, $author$project$Machine$Types$MatchEnd, stack)));
							}
							var heap = conf.a;
							var _v15 = conf.b.a;
							var binds = _v15.a;
							var e1 = _v15.b;
							var stack = conf.c;
							var _v16 = A2($author$project$Machine$Heap$newBindings, heap, binds);
							var subst = _v16.a;
							var heap1 = _v16.b;
							return $elm$core$Maybe$Just(
								_Utils_Tuple3(
									heap1,
									$author$project$Machine$Types$E(
										A2($author$project$AST$applySubst, subst, e1)),
									stack));
						}
						var heap = conf.a;
						var _v12 = conf.b.a;
						var optname = _v12.b;
						var m = _v12.c;
						var stack = conf.c;
						return $elm$core$Maybe$Just(
							_Utils_Tuple3(
								heap,
								A2($author$project$Machine$Types$M, m, _List_Nil),
								A2($elm$core$List$cons, $author$project$Machine$Types$MatchEnd, stack)));
					}
					var heap = conf.a;
					var _v8 = conf.b.a;
					var c = _v8.b;
					var args = _v8.c;
					var stack = conf.c;
					var _v9 = A2($author$project$Machine$normalizeArgs, heap, args);
					var args1 = _v9.a;
					var heap1 = _v9.b;
					return $elm$core$Maybe$Just(
						_Utils_Tuple3(
							heap1,
							$author$project$Machine$Types$E(
								A3($author$project$AST$Cons, true, c, args1)),
							stack));
				}
				var heap = conf.a;
				var _v6 = conf.b.a;
				var e1 = _v6.a;
				var e2 = _v6.b;
				var stack = conf.c;
				var _v7 = A2($author$project$Machine$normalizeArg, heap, e2);
				var arg = _v7.a;
				var heap1 = _v7.b;
				return $elm$core$Maybe$Just(
					_Utils_Tuple3(
						heap1,
						$author$project$Machine$Types$E(e1),
						A2(
							$elm$core$List$cons,
							$author$project$Machine$Types$PushArg(arg),
							stack)));
			}
			var heap = conf.a;
			var msg = conf.b.a.a;
			var _v5 = conf.c;
			return $elm$core$Maybe$Just(
				_Utils_Tuple3(
					heap,
					$author$project$Machine$Types$E(
						$author$project$AST$Exception(msg)),
					_List_Nil));
		}
		var heap = conf.a;
		var w = conf.b.a;
		var _v3 = conf.c;
		var _v4 = _v3.a;
		var stack = _v3.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple3(
				heap,
				$author$project$Machine$Types$E(w),
				stack));
	}
	var heap = conf.a;
	var w = conf.b.a;
	var _v1 = conf.c;
	var _v2 = _v1.a;
	var stack = _v1.b;
	return $elm$core$Maybe$Just(
		_Utils_Tuple3(
			heap,
			$author$project$Machine$Types$E(w),
			stack));
};
var $author$project$Machine$labelledWorker = F2(
	function (limit, conf) {
		if (_Utils_cmp(
			$author$project$Machine$confSize(conf),
			limit) < 0) {
			var _v0 = $author$project$Machine$justification(conf);
			if (_v0.$ === 'Just') {
				var info = _v0.a;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(conf, info));
			} else {
				return A2(
					$elm$core$Maybe$andThen,
					$author$project$Machine$labelledWorker(limit),
					$author$project$Machine$transition(conf));
			}
		} else {
			return $elm$core$Maybe$Just(
				_Utils_Tuple2(conf, 'continue?'));
		}
	});
var $author$project$Machine$sizeLimit = 100;
var $author$project$Machine$labelledTransition = function (conf0) {
	var size0 = $author$project$Machine$confSize(conf0);
	return A2(
		$elm$core$Maybe$andThen,
		$author$project$Machine$labelledWorker(size0 + $author$project$Machine$sizeLimit),
		$author$project$Machine$transition(conf0));
};
var $elm_community$list_extra$List$Extra$last = function (items) {
	last:
	while (true) {
		if (!items.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!items.b.b) {
				var x = items.a;
				return $elm$core$Maybe$Just(x);
			} else {
				var rest = items.b;
				var $temp$items = rest;
				items = $temp$items;
				continue last;
			}
		}
	}
};
var $author$project$Haskelite$reduceUpdate = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'Previous':
				var _v1 = model.previous;
				if (_v1.b) {
					var last = _v1.a;
					var rest = _v1.b;
					return $author$project$Haskelite$Reducing(
						_Utils_update(
							model,
							{current: last, previous: rest}));
				} else {
					return $author$project$Haskelite$Reducing(model);
				}
			case 'Next':
				var _v2 = $author$project$Machine$labelledTransition(model.current.a);
				if (_v2.$ === 'Just') {
					var _new = _v2.a;
					return $author$project$Haskelite$Reducing(
						_Utils_update(
							model,
							{
								current: _new,
								previous: A2($elm$core$List$cons, model.current, model.previous)
							}));
				} else {
					return $author$project$Haskelite$Reducing(model);
				}
			case 'Reset':
				var _v3 = $elm_community$list_extra$List$Extra$last(model.previous);
				if (_v3.$ === 'Just') {
					var start = _v3.a;
					return $author$project$Haskelite$Reducing(
						_Utils_update(
							model,
							{current: start, previous: _List_Nil}));
				} else {
					return $author$project$Haskelite$Reducing(model);
				}
			case 'EditMode':
				return $author$project$Haskelite$initModel(model.flags);
			case 'Toggle':
				var f = msg.a;
				return $author$project$Haskelite$Reducing(
					_Utils_update(
						model,
						{
							options: f(model.options)
						}));
			default:
				return $author$project$Haskelite$Reducing(model);
		}
	});
var $author$project$Haskelite$update = F2(
	function (msg, model) {
		switch (model.$) {
			case 'Reducing':
				var submodel = model.a;
				return _Utils_Tuple2(
					A2($author$project$Haskelite$reduceUpdate, msg, submodel),
					$elm$core$Platform$Cmd$none);
			case 'Editing':
				var submodel = model.a;
				return _Utils_Tuple2(
					A2($author$project$Haskelite$editUpdate, msg, submodel),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Haskelite$EditDecls = function (a) {
	return {$: 'EditDecls', a: a};
};
var $author$project$Haskelite$EditExpr = function (a) {
	return {$: 'EditExpr', a: a};
};
var $author$project$Haskelite$EvalMode = {$: 'EvalMode'};
var $elm$html$Html$br = _VirtualDom_node('br');
var $billstclair$elm_custom_element$CustomElement$CodeEditor$codeEditor = $elm$html$Html$node('code-editor');
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $billstclair$elm_custom_element$CustomElement$CodeEditor$editorValue = function (value) {
	return A2(
		$elm$html$Html$Attributes$property,
		'editorValue',
		$elm$json$Json$Encode$string(value));
};
var $billstclair$elm_custom_element$CustomElement$CodeEditor$onEditorChanged = function (tagger) {
	return A2(
		$elm$html$Html$Events$on,
		'editorChanged',
		A2(
			$elm$json$Json$Decode$map,
			tagger,
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['target', 'editorValue']),
				$elm$json$Json$Decode$string)));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$spellcheck = $elm$html$Html$Attributes$boolProperty('spellcheck');
var $author$project$Haskelite$editingView = function (model) {
	var oldflags = model.flags;
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$billstclair$elm_custom_element$CustomElement$CodeEditor$codeEditor,
				_List_fromArray(
					[
						$billstclair$elm_custom_element$CustomElement$CodeEditor$editorValue(model.flags.declarations),
						$billstclair$elm_custom_element$CustomElement$CodeEditor$onEditorChanged($author$project$Haskelite$EditDecls)
					]),
				_List_Nil),
				function () {
				var _v0 = model.parsedDecls;
				if (_v0.$ === 'Err') {
					var msg = _v0.a;
					return (model.flags.declarations === '') ? A2($elm$html$Html$span, _List_Nil, _List_Nil) : A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('error')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(msg)
							]));
				} else {
					return A2($elm$html$Html$span, _List_Nil, _List_Nil);
				}
			}(),
				A2($elm$html$Html$br, _List_Nil, _List_Nil),
				A2(
				$elm$html$Html$span,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('editline')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('>>> ')
							])),
						A2(
						$elm$html$Html$input,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$placeholder('Enter an expression'),
								$elm$html$Html$Attributes$value(model.flags.expression),
								$elm$html$Html$Attributes$spellcheck(false),
								$elm$html$Html$Attributes$class('editline'),
								$elm$html$Html$Events$onInput($author$project$Haskelite$EditExpr)
							]),
						_List_Nil),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('navbar'),
								$elm$html$Html$Events$onClick($author$project$Haskelite$EvalMode)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Evaluate')
							]))
					])),
				A2($elm$html$Html$br, _List_Nil, _List_Nil),
				function () {
				var _v1 = model.parsedExpr;
				if (_v1.$ === 'Err') {
					var msg = _v1.a;
					return (model.flags.expression === '') ? A2($elm$html$Html$span, _List_Nil, _List_Nil) : A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('error')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(msg)
							]));
				} else {
					return A2($elm$html$Html$span, _List_Nil, _List_Nil);
				}
			}(),
				function () {
				var _v2 = model.typeChecked;
				if (_v2.$ === 'Err') {
					var msg = _v2.a;
					return A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('error')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(msg)
							]));
				} else {
					return A2($elm$html$Html$span, _List_Nil, _List_Nil);
				}
			}()
			]));
};
var $elm$core$Debug$log = _Debug_log;
var $author$project$Haskelite$panicView = function (msg) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('error')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(msg)
			]));
};
var $author$project$Haskelite$EditMode = {$: 'EditMode'};
var $author$project$Haskelite$Next = {$: 'Next'};
var $author$project$Haskelite$Previous = {$: 'Previous'};
var $author$project$Haskelite$Reset = {$: 'Reset'};
var $author$project$Haskelite$Toggle = function (a) {
	return {$: 'Toggle', a: a};
};
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$html$Html$label = _VirtualDom_node('label');
var $author$project$Haskelite$checkbox = F3(
	function (b, msg, name) {
		return A2(
			$elm$html$Html$label,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('navbar')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('checkbox'),
							$elm$html$Html$Events$onClick(msg),
							$elm$html$Html$Attributes$checked(b)
						]),
					_List_Nil),
					$elm$html$Html$text(name)
				]));
	});
var $Gizra$elm_keyboard_event$Keyboard$Event$KeyboardEvent = F7(
	function (altKey, ctrlKey, key, keyCode, metaKey, repeat, shiftKey) {
		return {altKey: altKey, ctrlKey: ctrlKey, key: key, keyCode: keyCode, metaKey: metaKey, repeat: repeat, shiftKey: shiftKey};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $Gizra$elm_keyboard_event$Keyboard$Event$decodeKey = $elm$json$Json$Decode$maybe(
	A2(
		$elm$json$Json$Decode$andThen,
		function (key) {
			return $elm$core$String$isEmpty(key) ? $elm$json$Json$Decode$fail('empty key') : $elm$json$Json$Decode$succeed(key);
		},
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string)));
var $Gizra$elm_keyboard_event$Keyboard$Event$decodeNonZero = A2(
	$elm$json$Json$Decode$andThen,
	function (code) {
		return (!code) ? $elm$json$Json$Decode$fail('code was zero') : $elm$json$Json$Decode$succeed(code);
	},
	$elm$json$Json$Decode$int);
var $Gizra$elm_keyboard_event$Keyboard$Event$decodeKeyCode = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2($elm$json$Json$Decode$field, 'keyCode', $Gizra$elm_keyboard_event$Keyboard$Event$decodeNonZero),
			A2($elm$json$Json$Decode$field, 'which', $Gizra$elm_keyboard_event$Keyboard$Event$decodeNonZero),
			A2($elm$json$Json$Decode$field, 'charCode', $Gizra$elm_keyboard_event$Keyboard$Event$decodeNonZero),
			$elm$json$Json$Decode$succeed(0)
		]));
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$A = {$: 'A'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Add = {$: 'Add'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Alt = {$: 'Alt'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Ambiguous = function (a) {
	return {$: 'Ambiguous', a: a};
};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$B = {$: 'B'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Backspace = {$: 'Backspace'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$C = {$: 'C'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$CapsLock = {$: 'CapsLock'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$ChromeSearch = {$: 'ChromeSearch'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Command = {$: 'Command'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Ctrl = function (a) {
	return {$: 'Ctrl', a: a};
};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$D = {$: 'D'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Decimal = {$: 'Decimal'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Delete = {$: 'Delete'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Divide = {$: 'Divide'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Down = {$: 'Down'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$E = {$: 'E'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Eight = {$: 'Eight'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$End = {$: 'End'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Enter = {$: 'Enter'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Escape = {$: 'Escape'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F = {$: 'F'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F1 = {$: 'F1'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F10 = {$: 'F10'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F11 = {$: 'F11'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F12 = {$: 'F12'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F2 = {$: 'F2'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F3 = {$: 'F3'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F4 = {$: 'F4'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F5 = {$: 'F5'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F6 = {$: 'F6'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F7 = {$: 'F7'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F8 = {$: 'F8'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$F9 = {$: 'F9'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Five = {$: 'Five'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Four = {$: 'Four'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$G = {$: 'G'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$H = {$: 'H'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Home = {$: 'Home'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$I = {$: 'I'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Insert = {$: 'Insert'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$J = {$: 'J'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$K = {$: 'K'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$L = {$: 'L'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Left = {$: 'Left'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$M = {$: 'M'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Multiply = {$: 'Multiply'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$N = {$: 'N'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Nine = {$: 'Nine'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumLock = {$: 'NumLock'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadEight = {$: 'NumpadEight'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadFive = {$: 'NumpadFive'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadFour = {$: 'NumpadFour'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadNine = {$: 'NumpadNine'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadOne = {$: 'NumpadOne'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadSeven = {$: 'NumpadSeven'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadSix = {$: 'NumpadSix'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadThree = {$: 'NumpadThree'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadTwo = {$: 'NumpadTwo'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadZero = {$: 'NumpadZero'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$O = {$: 'O'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$One = {$: 'One'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$P = {$: 'P'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$PageDown = {$: 'PageDown'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$PageUp = {$: 'PageUp'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$PauseBreak = {$: 'PauseBreak'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$PrintScreen = {$: 'PrintScreen'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Q = {$: 'Q'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$R = {$: 'R'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Right = {$: 'Right'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$S = {$: 'S'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$ScrollLock = {$: 'ScrollLock'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Seven = {$: 'Seven'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Shift = function (a) {
	return {$: 'Shift', a: a};
};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Six = {$: 'Six'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Spacebar = {$: 'Spacebar'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Subtract = {$: 'Subtract'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$T = {$: 'T'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Tab = {$: 'Tab'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Three = {$: 'Three'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Two = {$: 'Two'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$U = {$: 'U'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Unknown = function (a) {
	return {$: 'Unknown', a: a};
};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Up = {$: 'Up'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$V = {$: 'V'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$W = {$: 'W'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Windows = {$: 'Windows'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$X = {$: 'X'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Y = {$: 'Y'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Z = {$: 'Z'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$Zero = {$: 'Zero'};
var $SwiftsNamesake$proper_keyboard$Keyboard$Key$fromCode = function (keyCode) {
	switch (keyCode) {
		case 8:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Backspace;
		case 9:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Tab;
		case 13:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Enter;
		case 16:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Shift($elm$core$Maybe$Nothing);
		case 17:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Ctrl($elm$core$Maybe$Nothing);
		case 18:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Alt;
		case 19:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$PauseBreak;
		case 20:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$CapsLock;
		case 27:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Escape;
		case 32:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Spacebar;
		case 33:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$PageUp;
		case 34:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$PageDown;
		case 35:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$End;
		case 36:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Home;
		case 37:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Left;
		case 38:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Up;
		case 39:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Right;
		case 40:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Down;
		case 44:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$PrintScreen;
		case 45:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Insert;
		case 46:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Delete;
		case 48:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Zero;
		case 49:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$One;
		case 50:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Two;
		case 51:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Three;
		case 52:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Four;
		case 53:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Five;
		case 54:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Six;
		case 55:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Seven;
		case 56:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Eight;
		case 57:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Nine;
		case 65:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$A;
		case 66:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$B;
		case 67:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$C;
		case 68:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$D;
		case 69:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$E;
		case 70:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F;
		case 71:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$G;
		case 72:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$H;
		case 73:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$I;
		case 74:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$J;
		case 75:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$K;
		case 76:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$L;
		case 77:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$M;
		case 78:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$N;
		case 79:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$O;
		case 80:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$P;
		case 81:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Q;
		case 82:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$R;
		case 83:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$S;
		case 84:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$T;
		case 85:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$U;
		case 86:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$V;
		case 87:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$W;
		case 88:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$X;
		case 89:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Y;
		case 90:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Z;
		case 91:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Ambiguous(
				_List_fromArray(
					[$SwiftsNamesake$proper_keyboard$Keyboard$Key$Windows, $SwiftsNamesake$proper_keyboard$Keyboard$Key$Command, $SwiftsNamesake$proper_keyboard$Keyboard$Key$ChromeSearch]));
		case 96:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadZero;
		case 97:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadOne;
		case 98:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadTwo;
		case 99:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadThree;
		case 100:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadFour;
		case 101:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadFive;
		case 102:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadSix;
		case 103:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadSeven;
		case 104:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadEight;
		case 105:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumpadNine;
		case 106:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Multiply;
		case 107:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Add;
		case 109:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Subtract;
		case 110:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Decimal;
		case 111:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Divide;
		case 112:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F1;
		case 113:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F2;
		case 114:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F3;
		case 115:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F4;
		case 116:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F5;
		case 117:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F6;
		case 118:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F7;
		case 119:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F8;
		case 120:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F9;
		case 121:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F10;
		case 122:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F11;
		case 123:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$F12;
		case 144:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$NumLock;
		case 145:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$ScrollLock;
		default:
			return $SwiftsNamesake$proper_keyboard$Keyboard$Key$Unknown(keyCode);
	}
};
var $elm$json$Json$Decode$map7 = _Json_map7;
var $Gizra$elm_keyboard_event$Keyboard$Event$decodeKeyboardEvent = A8(
	$elm$json$Json$Decode$map7,
	$Gizra$elm_keyboard_event$Keyboard$Event$KeyboardEvent,
	A2($elm$json$Json$Decode$field, 'altKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'ctrlKey', $elm$json$Json$Decode$bool),
	$Gizra$elm_keyboard_event$Keyboard$Event$decodeKey,
	A2($elm$json$Json$Decode$map, $SwiftsNamesake$proper_keyboard$Keyboard$Key$fromCode, $Gizra$elm_keyboard_event$Keyboard$Event$decodeKeyCode),
	A2($elm$json$Json$Decode$field, 'metaKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'repeat', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'shiftKey', $elm$json$Json$Decode$bool));
var $Gizra$elm_keyboard_event$Keyboard$Event$considerKeyboardEvent = function (func) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (event) {
			var _v0 = func(event);
			if (_v0.$ === 'Just') {
				var msg = _v0.a;
				return $elm$json$Json$Decode$succeed(msg);
			} else {
				return $elm$json$Json$Decode$fail('Ignoring keyboard event');
			}
		},
		$Gizra$elm_keyboard_event$Keyboard$Event$decodeKeyboardEvent);
};
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $author$project$Haskelite$handleKeyEvent = function (ev) {
	var _v0 = ev.keyCode;
	switch (_v0.$) {
		case 'Enter':
			return $elm$core$Maybe$Just($author$project$Haskelite$Next);
		case 'PageDown':
			return $elm$core$Maybe$Just($author$project$Haskelite$Next);
		case 'Down':
			return $elm$core$Maybe$Just($author$project$Haskelite$Next);
		case 'Right':
			return $elm$core$Maybe$Just($author$project$Haskelite$Next);
		case 'Backspace':
			return $elm$core$Maybe$Just($author$project$Haskelite$Previous);
		case 'PageUp':
			return $elm$core$Maybe$Just($author$project$Haskelite$Previous);
		case 'Left':
			return $elm$core$Maybe$Just($author$project$Haskelite$Previous);
		case 'Up':
			return $elm$core$Maybe$Just($author$project$Haskelite$Previous);
		case 'Escape':
			return $elm$core$Maybe$Just($author$project$Haskelite$EditMode);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Machine$Types$checkFinal = function (_v0) {
	var stack = _v0.c;
	return $elm$core$List$isEmpty(stack);
};
var $author$project$Haskelite$isFinal = function (model) {
	return $author$project$Machine$Types$checkFinal(model.current.a);
};
var $author$project$Haskelite$isInit = function (model) {
	return $elm$core$List$isEmpty(model.previous);
};
var $author$project$PrettyPrinter$tagToAttributes = function (tag) {
	switch (tag.$) {
		case 'Keyword':
			return _List_fromArray(
				[
					$elm$html$Html$Attributes$class('cm-keyword')
				]);
		case 'Variable':
			return _List_fromArray(
				[
					$elm$html$Html$Attributes$class('cm-variable')
				]);
		case 'Constructor':
			return _List_fromArray(
				[
					$elm$html$Html$Attributes$class('cm-variable-2')
				]);
		case 'Literal':
			return _List_fromArray(
				[
					$elm$html$Html$Attributes$class('cm-number')
				]);
		case 'String':
			return _List_fromArray(
				[
					$elm$html$Html$Attributes$class('cm-string')
				]);
		case 'Linenumber':
			return _List_fromArray(
				[
					$elm$html$Html$Attributes$class('linenumber')
				]);
		default:
			return _List_fromArray(
				[
					$elm$html$Html$Attributes$class('exception')
				]);
	}
};
var $author$project$PrettyPrinter$htmlTagged = F3(
	function (tag, str, lst) {
		return A2(
			$elm$core$List$cons,
			A2(
				$elm$html$Html$span,
				$author$project$PrettyPrinter$tagToAttributes(tag),
				_List_fromArray(
					[
						$elm$html$Html$text(str)
					])),
			lst);
	});
var $elm$core$String$map = _String_map;
var $author$project$PrettyPrinter$replaceSpaces = $elm$core$String$map(
	function (x) {
		return _Utils_eq(
			x,
			_Utils_chr(' ')) ? _Utils_chr('\u00A0') : x;
	});
var $author$project$PrettyPrinter$htmlUntagged = F2(
	function (str, lst) {
		return A2(
			$elm$core$List$cons,
			$elm$html$Html$text(
				$author$project$PrettyPrinter$replaceSpaces(str)),
			lst);
	});
var $author$project$PrettyPrinter$htmlRenderer = {
	init: _List_Nil,
	newline: function (elems) {
		return A2(
			$elm$core$List$cons,
			A2($elm$html$Html$br, _List_Nil, _List_Nil),
			elems);
	},
	outer: function (elems) {
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('cm-s-default')
				]),
			$elm$core$List$reverse(elems));
	},
	tagged: $author$project$PrettyPrinter$htmlTagged,
	untagged: $author$project$PrettyPrinter$htmlUntagged
};
var $author$project$PrettyPrinter$Linenumber = {$: 'Linenumber'};
var $author$project$PrettyPrinter$getExpr = function (ctrl) {
	if (ctrl.$ === 'E') {
		var expr = ctrl.a;
		return $elm$core$Maybe$Just(expr);
	} else {
		if (ctrl.a.$ === 'Return') {
			var _v1 = ctrl.a;
			var expr = _v1.a;
			return $elm$core$Maybe$Just(expr);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	}
};
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $author$project$PrettyPrinter$unwindStack = F2(
	function (stack, acc) {
		unwindStack:
		while (true) {
			_v0$10:
			while (true) {
				if (stack.b) {
					switch (stack.a.$) {
						case 'Update':
							var rest = stack.b;
							var $temp$stack = rest,
								$temp$acc = acc;
							stack = $temp$stack;
							acc = $temp$acc;
							continue unwindStack;
						case 'PushArg':
							var arg = stack.a.a;
							var rest = stack.b;
							var $temp$stack = rest,
								$temp$acc = A2($author$project$AST$App, acc, arg);
							stack = $temp$stack;
							acc = $temp$acc;
							continue unwindStack;
						case 'ContBinary1':
							var _v1 = stack.a;
							var op = _v1.a;
							var e2 = _v1.b;
							var rest = stack.b;
							var $temp$stack = rest,
								$temp$acc = A3($author$project$AST$BinaryOp, op, acc, e2);
							stack = $temp$stack;
							acc = $temp$acc;
							continue unwindStack;
						case 'ContBinary2':
							var _v2 = stack.a;
							var op = _v2.a;
							var e1 = _v2.b;
							var rest = stack.b;
							var $temp$stack = rest,
								$temp$acc = A3($author$project$AST$BinaryOp, op, e1, acc);
							stack = $temp$stack;
							acc = $temp$acc;
							continue unwindStack;
						case 'RetBinary':
							var _v3 = stack.a;
							var op = _v3.a;
							var rest = stack.b;
							var $temp$stack = rest,
								$temp$acc = acc;
							stack = $temp$stack;
							acc = $temp$acc;
							continue unwindStack;
						case 'ContUnary':
							var op = stack.a.a;
							var rest = stack.b;
							var $temp$stack = rest,
								$temp$acc = A2($author$project$AST$UnaryOp, op, acc);
							stack = $temp$stack;
							acc = $temp$acc;
							continue unwindStack;
						case 'RetUnary':
							var _v4 = stack.a;
							var op = _v4.a;
							var rest = stack.b;
							var $temp$stack = rest,
								$temp$acc = acc;
							stack = $temp$stack;
							acc = $temp$acc;
							continue unwindStack;
						case 'MatchEnd':
							var _v5 = stack.a;
							var rest = stack.b;
							var $temp$stack = rest,
								$temp$acc = acc;
							stack = $temp$stack;
							acc = $temp$acc;
							continue unwindStack;
						case 'DeepEval':
							var _v6 = stack.a;
							var rest = stack.b;
							var $temp$stack = rest,
								$temp$acc = acc;
							stack = $temp$stack;
							acc = $temp$acc;
							continue unwindStack;
						case 'Continue':
							var _v7 = stack.a;
							var expr = _v7.a;
							var ctx = _v7.b;
							var rest = stack.b;
							var $temp$stack = rest,
								$temp$acc = A2(ctx.set, acc, expr);
							stack = $temp$stack;
							acc = $temp$acc;
							continue unwindStack;
						default:
							break _v0$10;
					}
				} else {
					break _v0$10;
				}
			}
			return _Utils_Tuple2(stack, acc);
		}
	});
var $author$project$PrettyPrinter$ppConf = F2(
	function (opts, _v0) {
		var heap = _v0.a;
		var control = _v0.b;
		var stack = _v0.c;
		var _v1 = $author$project$PrettyPrinter$getExpr(control);
		if (_v1.$ === 'Just') {
			var expr = _v1.a;
			var ppCtx = A2($author$project$PrettyPrinter$makeCtx, opts, heap);
			var _v2 = A2($author$project$PrettyPrinter$unwindStack, stack, expr);
			if (!_v2.a.b) {
				var expr1 = _v2.b;
				return $elm$core$Maybe$Just(
					A2($author$project$PrettyPrinter$ppExpr, ppCtx, expr1));
			} else {
				var stk = _v2.a;
				var expr1 = _v2.b;
				var ellipsis = A2(
					$elm$core$String$repeat,
					$elm$core$List$length(stk),
					'?');
				return $elm$core$Maybe$Just(
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$the_sett$elm_pretty_printer$Pretty$align(
							A2($author$project$PrettyPrinter$ppExpr, ppCtx, expr1)),
						A2(
							$the_sett$elm_pretty_printer$Pretty$a,
							$the_sett$elm_pretty_printer$Pretty$space,
							A2($the_sett$elm_pretty_printer$Pretty$taggedString, ellipsis, $author$project$PrettyPrinter$Linenumber))));
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$PrettyPrinter$ppConfStep = F3(
	function (opts, conf, step) {
		var _v0 = A2($author$project$PrettyPrinter$ppConf, opts, conf);
		if (_v0.$ === 'Just') {
			var doc = _v0.a;
			return (step > 0) ? $elm$core$Maybe$Just(
				A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					$the_sett$elm_pretty_printer$Pretty$align(doc),
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$the_sett$elm_pretty_printer$Pretty$space,
						A2($the_sett$elm_pretty_printer$Pretty$taggedString, '=', $author$project$PrettyPrinter$Linenumber)))) : $elm$core$Maybe$Just(
				A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					$the_sett$elm_pretty_printer$Pretty$align(doc),
					A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$space)));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $the_sett$elm_pretty_printer$Pretty$Renderer$layout = F2(
	function (handler, normal) {
		var layoutInner = F2(
			function (normal2, acc) {
				layoutInner:
				while (true) {
					switch (normal2.$) {
						case 'NNil':
							return acc;
						case 'NText':
							var text = normal2.a;
							var innerNormal = normal2.b;
							var maybeTag = normal2.c;
							if (maybeTag.$ === 'Just') {
								var tag = maybeTag.a;
								var $temp$normal2 = innerNormal(_Utils_Tuple0),
									$temp$acc = A3(handler.tagged, tag, text, acc);
								normal2 = $temp$normal2;
								acc = $temp$acc;
								continue layoutInner;
							} else {
								var $temp$normal2 = innerNormal(_Utils_Tuple0),
									$temp$acc = A2(handler.untagged, text, acc);
								normal2 = $temp$normal2;
								acc = $temp$acc;
								continue layoutInner;
							}
						default:
							var i = normal2.a;
							var sep = normal2.b;
							var innerNormal = normal2.c;
							var norm = innerNormal(_Utils_Tuple0);
							if (norm.$ === 'NLine') {
								if (sep === '') {
									var $temp$normal2 = innerNormal(_Utils_Tuple0),
										$temp$acc = handler.newline(acc);
									normal2 = $temp$normal2;
									acc = $temp$acc;
									continue layoutInner;
								} else {
									var $temp$normal2 = innerNormal(_Utils_Tuple0),
										$temp$acc = A2(
										handler.untagged,
										sep,
										handler.newline(acc));
									normal2 = $temp$normal2;
									acc = $temp$acc;
									continue layoutInner;
								}
							} else {
								var $temp$normal2 = innerNormal(_Utils_Tuple0),
									$temp$acc = A2(
									handler.untagged,
									_Utils_ap(
										A2($the_sett$elm_pretty_printer$Internals$copy, i, ' '),
										sep),
									handler.newline(acc));
								normal2 = $temp$normal2;
								acc = $temp$acc;
								continue layoutInner;
							}
					}
				}
			});
		return handler.outer(
			A2(layoutInner, normal, handler.init));
	});
var $the_sett$elm_pretty_printer$Pretty$Renderer$pretty = F3(
	function (w, handler, doc) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$Renderer$layout,
			handler,
			A3($the_sett$elm_pretty_printer$Internals$best, w, 0, doc));
	});
var $author$project$PrettyPrinter$prettyConfStep = F3(
	function (opts, conf, step) {
		var _v0 = A3(
			$author$project$PrettyPrinter$ppConfStep,
			opts,
			function (_v1) {
				var x = _v1.a;
				var y = _v1.b;
				var z = _v1.c;
				return _Utils_Tuple3(
					x,
					A2($elm$core$Debug$log, 'Control', y),
					z);
			}(conf),
			step);
		if (_v0.$ === 'Just') {
			var doc = _v0.a;
			return $elm$core$Maybe$Just(
				A3($the_sett$elm_pretty_printer$Pretty$Renderer$pretty, $author$project$PrettyPrinter$defaultLength, $author$project$PrettyPrinter$htmlRenderer, doc));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Haskelite$renderStep = F3(
	function (opts, step, _v0) {
		var conf = _v0.a;
		var info = _v0.b;
		var _v1 = A3($author$project$PrettyPrinter$prettyConfStep, opts, conf, step);
		if (_v1.$ === 'Just') {
			var html = _v1.a;
			return opts.justifications ? A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('line')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('info2')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('{ ' + (info + ' }'))
							])),
						html
					])) : A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('line')
					]),
				_List_fromArray(
					[
						html,
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('info')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(info)
							]))
					]));
		} else {
			return A2($elm$html$Html$span, _List_Nil, _List_Nil);
		}
	});
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $author$project$Haskelite$toggleEnums = function (opts) {
	return _Utils_update(
		opts,
		{prettyEnums: !opts.prettyEnums});
};
var $author$project$Haskelite$toggleJustifications = function (opts) {
	return _Utils_update(
		opts,
		{justifications: !opts.justifications});
};
var $author$project$Haskelite$toggleLayout = function (opts) {
	return _Utils_update(
		opts,
		{layout: !opts.layout});
};
var $author$project$Haskelite$toggleLists = function (opts) {
	return _Utils_update(
		opts,
		{prettyLists: !opts.prettyLists});
};
var $author$project$Haskelite$reduceView = function (model) {
	var linecount = $elm$core$List$length(model.previous);
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$Events$on,
				'keydown',
				$Gizra$elm_keyboard_event$Keyboard$Event$considerKeyboardEvent($author$project$Haskelite$handleKeyEvent)),
				$elm$html$Html$Attributes$tabindex(0)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('lines')
					]),
				_Utils_ap(
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('current')
								]),
							_List_fromArray(
								[
									A3($author$project$Haskelite$renderStep, model.options, linecount, model.current)
								]))
						]),
					A3(
						$elm$core$List$map2,
						$author$project$Haskelite$renderStep(model.options),
						$elm$core$List$reverse(
							A2($elm$core$List$range, 0, linecount - 1)),
						model.previous))),
				A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('navbar'),
										$elm$html$Html$Events$onClick($author$project$Haskelite$EditMode)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Edit')
									])),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('navbar'),
										$elm$html$Html$Events$onClick($author$project$Haskelite$Reset)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Reset')
									])),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('navbar'),
										$elm$html$Html$Attributes$disabled(
										$author$project$Haskelite$isInit(model)),
										$elm$html$Html$Events$onClick($author$project$Haskelite$Previous)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('< Prev')
									])),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('navbar'),
										$elm$html$Html$Attributes$disabled(
										$author$project$Haskelite$isFinal(model)),
										$elm$html$Html$Events$onClick($author$project$Haskelite$Next)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Next >')
									])),
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('options')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$label,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Pretty-printing')
											])),
										A3(
										$author$project$Haskelite$checkbox,
										model.options.prettyLists,
										$author$project$Haskelite$Toggle($author$project$Haskelite$toggleLists),
										'lists'),
										A3(
										$author$project$Haskelite$checkbox,
										model.options.prettyEnums,
										$author$project$Haskelite$Toggle($author$project$Haskelite$toggleEnums),
										'enumerations'),
										A3(
										$author$project$Haskelite$checkbox,
										model.options.layout,
										$author$project$Haskelite$Toggle($author$project$Haskelite$toggleLayout),
										'layout'),
										A3(
										$author$project$Haskelite$checkbox,
										model.options.justifications,
										$author$project$Haskelite$Toggle($author$project$Haskelite$toggleJustifications),
										'justifications')
									]))
							]))
					]))
			]));
};
var $author$project$Haskelite$view = function (model) {
	switch (model.$) {
		case 'Editing':
			var m = model.a;
			return $author$project$Haskelite$editingView(m);
		case 'Reducing':
			var m = model.a;
			return $author$project$Haskelite$reduceView(
				A2($elm$core$Debug$log, 'ReduceModel', m));
		default:
			var msg = model.a;
			return $author$project$Haskelite$panicView(msg);
	}
};
var $author$project$Haskelite$main = $elm$browser$Browser$element(
	{init: $author$project$Haskelite$init, subscriptions: $author$project$Haskelite$subscriptions, update: $author$project$Haskelite$update, view: $author$project$Haskelite$view});
_Platform_export({'Haskelite':{'init':$author$project$Haskelite$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (expression) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (declarations) {
					return $elm$json$Json$Decode$succeed(
						{declarations: declarations, expression: expression});
				},
				A2($elm$json$Json$Decode$field, 'declarations', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'expression', $elm$json$Json$Decode$string)))({"versions":{"elm":"0.19.1"},"types":{"message":"Haskelite.Msg","aliases":{"Haskelite.Options":{"args":[],"type":"{ prettyLists : Basics.Bool, prettyEnums : Basics.Bool, layout : Basics.Bool, justifications : Basics.Bool }"}},"unions":{"Haskelite.Msg":{"args":[],"tags":{"Previous":[],"Next":[],"Reset":[],"EditMode":[],"EvalMode":[],"EditExpr":["String.String"],"EditDecls":["String.String"],"Toggle":["Haskelite.Options -> Haskelite.Options"]}},"Basics.Bool":{"args":[],"tags":{"True":[],"False":[]}},"String.String":{"args":[],"tags":{"String":[]}}}}})}});}(this));