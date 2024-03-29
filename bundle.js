(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],2:[function(require,module,exports){
var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.querySelector("button");
// getElementsByTagName doesn't work

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// 1. Write code so that the colour inputs match the background generated on the first page load.
// 2. Display the initial CSS linear gradient property on page load.

function initialGradient() {
	color1.setAttribute("value", "#FF0000");
	color2.setAttribute("value", "#FFFF00"); 
	css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

initialGradient();

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
function getRandomColor() {
	// v1 returns only black, not random colors
	// color1.value = [Math.floor(Math.random() * 256)], [Math.floor(Math.random() * 256)], [Math.floor(Math.random() * 256)];
	// color2.value = [Math.floor(Math.random() * 256)], [Math.floor(Math.random() * 256)], [Math.floor(Math.random() * 256)];
	color1.value = '#'+Math.random().toString(16).slice(-6);
	color2.value = '#'+Math.random().toString(16).slice(-6);
	setGradient();
}

randomColor.addEventListener("click", getRandomColor);


},{"uniq":1}]},{},[2]);
