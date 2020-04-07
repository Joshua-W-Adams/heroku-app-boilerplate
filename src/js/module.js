/*!
 * Nodejs (CommonJS) Boilerplate
 * Based on the Revealing Module Design Pattern
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */

const module1 = require('module1');
const module2 = require('./module2.js');

/* ================================ Variables =============================== */

let someVariable = {};

/* ============================= Private Methods ============================ */

function _somePrivateMethod() {
  // Code goes here...
  return;
}

/* ============================== Public Methods ============================ */

function doSomething() {
  _somePrivateMethod();
  // Code goes here...
  return;
}

function init(options) {
  // Code goes here...
  return;
}

/* =========================== Export Public APIs =========================== */

module.exports = {
  init: init
  , doSomething: doSomething
};
