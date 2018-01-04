(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ticket = exports.Ticket = function () {
  function Ticket(movie, time, age) {
    _classCallCheck(this, Ticket);

    this.movie = movie;
    this.time = time;
    this.age = age;
  }

  _createClass(Ticket, [{
    key: "ticketPrice",
    value: function ticketPrice() {
      var price = 10;
      if (this.movie === "lebowski" || this.movie === "hangover") {
        price += 2;
        console.log(price);
      }
      if (this.time === "morning" || this.time === "afternoon") {
        price -= 2;
        console.log(price);
      }
      if (this.age > 60 || this.age < 12) {
        price -= 2;
        console.log(price);
      }
      return price;
    }
  }]);

  return Ticket;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _ticket = require("./../js/ticket.js");

$(document).ready(function () {

  $("form#newTicket").submit(function (event) {
    event.preventDefault();

    var movie = $("#movie").val();
    var time = $("#time").val();
    var age = parseInt($("#age").val());

    var newTicket = new _ticket.Ticket(movie, time, age);

    var ticketPrice = newTicket.ticketPrice();
    $("#ticketPrice").text(ticketPrice);
    $(".showPrice").show();
  });
});

},{"./../js/ticket.js":1}]},{},[2]);
