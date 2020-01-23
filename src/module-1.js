/*    run on browser ES6 version  */
import _ from 'lodash';

export default function () {
  var el = document.querySelector('#module-1');
  el.textContent = _.join(['Hello', 'Module One'], ' ');
}

export var n = 10;

/*    run on terminal node.js version  */

// module.exports = {
//   name: 'Bob Module',
//   version: 1.0,
//   f: function () {
//     console.log('Hello module!');
//   },
// };

// exports.name = 'Bob Module';
// exports.version = 1.0;
// exports.f = function () {
//   console.log('Hello module!');
// };
