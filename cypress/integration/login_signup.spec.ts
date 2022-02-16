describe('Login/Sign up', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Menu login -link opens login form', () => {
    cy.get('#burger-menu').click();
    cy.get('#menu-login').click();

    cy.get('#login-form').should('have.class', 'anim');
    cy.contains('Sign in');
    cy.contains('Sign up');
  });

  it('Login form sign up button changes to sign up form', () => {
    cy.get('#burger-menu').click();
    cy.get('#menu-login').click();

    cy.get('#btn-signup').click();

    cy.get('#confirmPassword').should('be.visible');
  });
  it('Succesfull login on Home page opens my page', () => {
    cy.get('#burger-menu').click();
    cy.get('#menu-login').click();

    cy.get('#email').type('Ville@test.fi');
    cy.get('#password').type('test1234');

    cy.get('#signin').click();

    cy.contains('My page');
    cy.get('#my-bookings-list').should('exist');
    cy.get('#my-review-list').contains('Lyngen ski week');
  });
  it('Failure login shows error notification', () => {
    cy.get('#burger-menu').click();
    cy.get('#menu-login').click();

    cy.get('#email').type('Ville@test.fi');
    cy.get('#password').type('test123');

    cy.get('#signin').click();

    cy.contains('Wrong email or password');
  });
  it('Sign up fails with email that already exists', () => {
    cy.get('#burger-menu').click();
    cy.get('#menu-login').click();

    cy.get('#btn-signup').click();

    cy.get('#email').type('Ville@test.fi');
    cy.get('#password').type('test1234');
    cy.get('#confirmPassword').type('test1234');

    cy.get('#signup').click();

    cy.contains('User validation failed');
  });
  it('Sign up fails without confirmed password', () => {
    cy.get('#burger-menu').click();
    cy.get('#menu-login').click();

    cy.get('#btn-signup').click();

    cy.get('#email').type('Ville@test.fi');
    cy.get('#password').type('test1234');

    cy.get('#signup').click();

    cy.contains('Please confirm your password');
  });
});

describe('Login on MTB trips page opens same page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/mtb');
  });

  it('Before login there is no book -buttons', () => {
    cy.get('#booking-0').should('not.exist');
    cy.get('#booking-1').should('not.exist');
  });
  it('After succesfull login there is book -buttons', () => {
    cy.get('#burger-menu').click();
    cy.get('#menu-login').click();

    cy.get('#email').type('Ville@test.fi');
    cy.get('#password').type('test1234');

    cy.get('#signin').click();

    cy.get('#booking-0').should('exist');
    cy.get('#booking-1').should('exist');
  });
});
