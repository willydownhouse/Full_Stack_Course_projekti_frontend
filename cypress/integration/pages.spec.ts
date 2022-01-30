describe('Pages/Menu and login form opens', () => {
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
  it('Menu log in opens login form', () => {
    cy.get('#burger-menu').click();
    cy.get('#menu-login').click();

    cy.get('#login-form').should('have.class', 'anim');
    cy.contains('Sign In');
  });
});
