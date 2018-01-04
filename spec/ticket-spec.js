import { Ticket } from './../js/ticket.js';

describe('Ticket', function () {
  let reusableTicket;
  let reusableTicket2;
  let reusableTicket3;

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
