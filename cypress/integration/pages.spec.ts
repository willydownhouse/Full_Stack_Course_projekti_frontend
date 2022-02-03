describe('Navigation to different pages (NO LOGIN)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Front page opens', () => {
    cy.contains('Adventure Buddy');
  });

  it('Menu opens by clicking burger', () => {
    cy.get('#burger-menu').click();

    cy.get('#burger-menu').should('have.class', 'open');
  });

  it('Mtb button changes to mtb page', () => {
    cy.get('#btn-mtb').click();

    cy.contains('Finale MTB week');
  });
  it('Ski button changes to ski page', () => {
    cy.get('#btn-ski').click();

    cy.contains('Lyngen ski week');
  });
});

describe('Navigation after LOGIN', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('#burger-menu').click();
    cy.get('#menu-login').click();

    cy.get('#email').type('Ville@test.fi');
    cy.get('#password').type('test1234');

    cy.get('#signin').click();
  });

  it('Booking page accessible after login', () => {
    cy.get('#burger-menu').click();
    cy.get('#menu-booking').click();

    cy.contains('Book');
  });
  it('Back to front page after logout', () => {
    cy.get('#burger-menu').click();
    cy.get('#menu-logout').click();

    cy.contains('Adventure Buddy');
  });
});

// cy.get('.mobile-nav', { timeout: 10000 })
//   .should('be.visible')
//   .and('contain', 'Home')
