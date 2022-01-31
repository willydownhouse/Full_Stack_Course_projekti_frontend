describe('Pages/Menu and login/sign up tests', () => {
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
  it('Succesfull login opens  my page', () => {
    cy.get('#burger-menu').click();
    cy.get('#menu-login').click();

    cy.get('#email').type('Ville@test.fi');
    cy.get('#password').type('test1234');

    cy.get('#signin').click();

    cy.contains('My page');
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
