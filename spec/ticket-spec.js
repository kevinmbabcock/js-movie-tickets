var Ticket = require('./../js/ticket.js').ticketModule;

describe('Ticket', function () {
  var reusableTicket;
  var reusableTicket2;
  var reusableTicket3;

  beforeEach(function() {
    reusableTicket = new Ticket("Old School", "morning", 20);
    reusableTicket2 = new Ticket("hangover", "night", 10);
    reusableTicket3 = new Ticket("lebowski", "afternoon", 65);
  })

  it('calculate the price of a movie ticket', function() {
    expect(reusableTicket.ticketPrice()).toEqual(8);
    expect(reusableTicket2.ticketPrice()).toEqual(10);
    expect(reusableTicket3.ticketPrice()).toEqual(8);
  })
})
