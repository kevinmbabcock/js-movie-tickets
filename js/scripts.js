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
