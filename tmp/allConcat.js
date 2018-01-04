import { Ticket } from './../js/ticket.js';

$(document).ready(function() {


  $("form#newTicket").submit(function(event) {
    event.preventDefault();

    let movie = $("#movie").val();
    let time = $("#time").val();
    let age = parseInt($("#age").val());

    let newTicket = new Ticket (movie, time, age);

    let ticketPrice = newTicket.ticketPrice();
    $("#ticketPrice").text(ticketPrice);
    $(".showPrice").show();
  });
});
