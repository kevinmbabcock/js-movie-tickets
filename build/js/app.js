(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Ticket (movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.ticketPrice = function() {
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

exports.ticketModule = Ticket;

},{}],2:[function(require,module,exports){
var Ticket = require('./../js/ticket.js').ticketModule;

$(document).ready(function() {


  $("form#newTicket").submit(function(event) {
    event.preventDefault();

    var movie = $("#movie").val();
    var time = $("#time").val();
    var age = parseInt($("#age").val());

    var newTicket = new Ticket (movie, time, age);

    var ticketPrice = newTicket.ticketPrice();
    $("#ticketPrice").text(ticketPrice);
    $(".showPrice").show();
  });
});

},{"./../js/ticket.js":1}]},{},[2]);
