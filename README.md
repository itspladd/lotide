# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @itspladd/lotide`

**Require it:**

`const _ = require('@itspladd/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Logs the result of deeply comparing two arrays.
* `assertEqual(a, b)`: Logs the result of strictly comparing two non-Object values.
* `assertObjectsEqual(obj1, obj2)`: Logs the result of comparing two non-Array objects.
* `countLetters(str)`: Returns an object containing each unique letter in the input string, and how many times each letter occurred.
* `countOnly(arr, obj)`: Returns an object containing each key in the `obj` input that had a truthy value, and how many times that key occurred in the array.
* `eqArrays(arr1, arr2)`: Returns true or false after deeply comparing two arrays.
* `eqObjects(obj1, obj2)`: Returns true or false after deeply comparing two objects.
* `findKey(obj, callback)`: Returns the first key for which the given callback function is true for that key's value.
* `findKeyByValue(obj, value)`: Returns the first key containing the given value. 
* `flatten(arr)`: Turns an array with nested arrays into a single array containing the same values. (Only works one nested array deep.) 
* `head(arr)`: Returns the first value in an array.
* `letterPositions(str)`: Returns an object containing an array for each unique character in the input string. The key is the character, and the array contains each index where that character was found.
* `map(arr, callback)`: Naive clone of Array.prototype.map(). Returns an array whose elements are the results of calling the callback function on each element of the input array.
* `middle(arr)`: Returns an array containing the middle values of an array.
* `tail(arr)`: Returns an array containing all elements an array except for the first element.
* `takeUntil(arr, callback)`: Returns an array containing all elements of an array until the first element for which the callback function returns `true`. 
* `without(arr1, arr2)`: Returns an array containing only the items from `arr1` that are not found in `arr2`.