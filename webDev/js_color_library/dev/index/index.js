'use strict';

var require$$0 = require('chroma-js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

var dev = {};

const chroma = require$$0__default['default'];
//const tc = require('tinycolor2')
//import  chroma  from "chroma-js"
//import { tc } from 'tinycolor2'
//const chroma = import('chroma-js')
let x = chroma('pink').hex();
//let y = tc('red')
console.log(x);

module.exports = dev;
