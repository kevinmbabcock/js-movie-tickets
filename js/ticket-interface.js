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
