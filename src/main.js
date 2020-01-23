/*    run on browser ES6 version  */
import m1, { n } from './module-1.js';
import m2 from './module-2.js';

/*    run on terminal node.js version  */

// var _ = require('lodash');
// var m = require('./module.js');
// console.log(_.join(['Hello', 'Anna'], ' '));
// console.log(m.name);
// console.log(m.version);
// m.f();

window.onload = function () {
  console.log(n);
  m1();
  m2();
};
