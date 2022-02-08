describe('Booking tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('#burger-menu').click();
    cy.get('#menu-login').click();

    cy.get('#email').type('Kimi@test.fi');
    cy.get('#password').type('test1234');

    cy.get('#signin').click();
  });

  it('Booking fails if trying to book same trip again', () => {
    cy.get('#burger-menu').click();
    cy.get('#menu-booking').click();

    cy.get('#trip-dropdown').select('Finale MTB week');

    cy.get('#date-dropdown').select('7/5/22');

    cy.get('#btn-booking').click();

    cy.contains(
      'You have already booked this trip with this date, please choose another trip or date'
    );
  });
});
